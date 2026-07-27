"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Confetti } from "./Confetti";

const palette = ["#FF5C35", "#FFCB5B", "#2F80ED", "#24A148", "#8B5CF6", "#F472B6", "#14B8A6", "#F59E0B"];

type Props = {
  storageKey: string;
  initialEntries: string[];
  mode?: "wheel" | "teams";
};

function clean(value: string) {
  return value.split("\n").map((item) => item.trim()).filter(Boolean).slice(0, 100);
}

export function Wheel({ storageKey, initialEntries, mode = "wheel" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const [text, setText] = useState(initialEntries.join("\n"));
  const [ready, setReady] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [removeWinner, setRemoveWinner] = useState(false);
  const [teamCount, setTeamCount] = useState(2);
  const [teams, setTeams] = useState<string[][] | null>(null);
  const entries = useMemo(() => clean(text), [text]);

  useEffect(() => {
    const saved = localStorage.getItem(`spinwheel:${storageKey}`);
    if (saved) setText(saved);
    setReady(true);
  }, [storageKey]);

  useEffect(() => {
    if (ready) localStorage.setItem(`spinwheel:${storageKey}`, text);
  }, [ready, storageKey, text]);

  const draw = useCallback((angle = angleRef.current) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = canvas.clientWidth;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.translate(size / 2, size / 2);
    const radius = size / 2 - 8;
    const source = entries.length > 1 ? entries : ["Add entries", "Then spin"];
    const arc = (Math.PI * 2) / source.length;
    source.forEach((label, index) => {
      const start = angle + index * arc - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, start, start + arc);
      ctx.closePath();
      ctx.fillStyle = palette[index % palette.length];
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.save();
      ctx.rotate(start + arc / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = `700 ${Math.max(12, Math.min(18, 260 / source.length))}px Arial`;
      ctx.shadowColor = "rgba(0,0,0,.25)";
      ctx.shadowBlur = 2;
      const max = Math.max(8, Math.floor(20 - source.length / 3));
      const short = label.length > max ? `${label.slice(0, max - 1)}…` : label;
      ctx.fillText(short, radius - 20, 5);
      ctx.restore();
    });
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(18, size * .055), 0, Math.PI * 2);
    ctx.fillStyle = "#10213f";
    ctx.fill();
  }, [entries]);

  useEffect(() => {
    draw();
    const onResize = () => draw();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [draw]);

  const spin = () => {
    if (entries.length < 2 || spinning) return;
    setWinner(null);
    setTeams(null);
    setSpinning(true);
    const winningIndex = Math.floor(Math.random() * entries.length);
    const arc = (Math.PI * 2) / entries.length;
    const targetNormalized = -(winningIndex * arc + arc / 2);
    const current = angleRef.current;
    const normalizedCurrent = ((current % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    let delta = targetNormalized - normalizedCurrent;
    while (delta < 0) delta += Math.PI * 2;
    const target = current + delta + Math.PI * 2 * (6 + Math.floor(Math.random() * 3));
    const start = performance.now();
    const duration = 4300;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      angleRef.current = current + (target - current) * eased;
      draw(angleRef.current);
      if (progress < 1) animationRef.current = requestAnimationFrame(tick);
      else {
        angleRef.current = target;
        setSpinning(false);
        setWinner(entries[winningIndex]);
      }
    };
    animationRef.current = requestAnimationFrame(tick);
  };

  const makeTeams = () => {
    if (entries.length < 2) return;
    const shuffled = [...entries];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const result = Array.from({ length: Math.min(teamCount, entries.length) }, () => [] as string[]);
    shuffled.forEach((name, i) => result[i % result.length].push(name));
    setTeams(result);
  };

  const closeWinner = () => {
    if (winner && removeWinner) setText(entries.filter((entry) => entry !== winner).join("\n"));
    setWinner(null);
  };

  return (
    <section className="grid gap-6 rounded-[2rem] border-2 border-[#20201f] bg-[#fffdf8] p-4 shadow-card md:grid-cols-[1.15fr_.85fr] md:p-7">
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <div className="absolute left-1/2 top-0 z-10 h-0 w-0 -translate-x-1/2 border-l-[14px] border-r-[14px] border-t-[30px] border-l-transparent border-r-transparent border-t-[#20201f] drop-shadow" />
        <canvas ref={canvasRef} className="h-full w-full rounded-full" aria-label={`Wheel with ${entries.length} entries`} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mb-2 flex items-end justify-between">
          <label htmlFor={`${storageKey}-entries`} className="text-sm font-black uppercase tracking-wider">Your entries</label>
          <span className="rounded-full bg-[#c8f36a] px-3 py-1 text-xs font-black">{entries.length} items</span>
        </div>
        <textarea id={`${storageKey}-entries`} value={text} onChange={(event) => setText(event.target.value)}
          className="min-h-52 resize-y rounded-2xl border-2 border-[#20201f] bg-white p-4 leading-7 outline-none focus:shadow-[4px_4px_0_#3657ff]"
          placeholder={"One entry per line\nAlex\nSam\nJordan"} aria-describedby={`${storageKey}-hint`} />
        <p id={`${storageKey}-hint`} className="mt-2 text-xs text-slate-500">One entry per line. Saved on this device.</p>
        {mode === "teams" ? (
          <div className="mt-5">
            <label htmlFor="team-count" className="mb-2 block text-sm font-bold">Number of teams</label>
            <input id="team-count" type="number" min="2" max="20" value={teamCount} onChange={(e) => setTeamCount(Math.max(2, Math.min(20, Number(e.target.value))))}
              className="w-full rounded-xl border border-slate-200 px-4 py-3" />
            <button onClick={makeTeams} disabled={entries.length < 2} className="mt-3 w-full rounded-2xl border-2 border-[#20201f] bg-[#3657ff] px-6 py-4 text-lg font-black uppercase text-white shadow-[4px_4px_0_#20201f] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40">Generate teams</button>
          </div>
        ) : (
          <>
            <button onClick={spin} disabled={entries.length < 2 || spinning} className="mt-5 w-full rounded-2xl border-2 border-[#20201f] bg-[#3657ff] px-6 py-4 text-lg font-black uppercase text-white shadow-[4px_4px_0_#20201f] transition hover:-translate-y-0.5 hover:bg-[#243fd2] disabled:cursor-not-allowed disabled:opacity-40">
              {spinning ? "Spinning…" : "Spin the wheel"}
            </button>
            <label className="mt-4 flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-600">
              <input type="checkbox" checked={removeWinner} onChange={(e) => setRemoveWinner(e.target.checked)} className="h-5 w-5 accent-[#ff5c35]" />
              Remove winner after the spin
            </label>
          </>
        )}
      </div>
      {winner && (
        <div role="dialog" aria-modal="true" aria-labelledby="winner-title" className="fixed inset-0 z-50 grid place-items-center bg-[#10213f]/60 p-4 backdrop-blur-sm" onClick={closeWinner}>
          <Confetti />
          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm font-black uppercase tracking-[.22em] text-[#3657ff]">The wheel chose</p>
            <h2 id="winner-title" className="my-5 break-words text-4xl font-black">{winner}</h2>
            <button autoFocus onClick={closeWinner} className="rounded-xl bg-[#10213f] px-7 py-3 font-bold text-white">Done</button>
          </div>
        </div>
      )}
      {teams && (
        <div className="md:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {teams.map((team, index) => (
            <div key={index} className="rounded-2xl bg-slate-50 p-5"><h3 className="font-black text-[#ff5c35]">Team {index + 1}</h3><ul className="mt-2 space-y-1">{team.map((name) => <li key={name}>{name}</li>)}</ul></div>
          ))}
        </div>
      )}
    </section>
  );
}

