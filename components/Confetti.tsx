"use client";

const colors = ["#ff5c35", "#ffcb5b", "#2f80ed", "#24a148", "#8b5cf6"];

export function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 34 }, (_, i) => (
        <i key={i} className="absolute -top-4 h-3 w-2 animate-[fall_1.8s_ease-in_forwards]" style={{
          left: `${(i * 37) % 100}%`,
          background: colors[i % colors.length],
          transform: `rotate(${i * 29}deg)`,
          animationDelay: `${(i % 8) * 70}ms`,
        }} />
      ))}
      <style>{`@keyframes fall{to{transform:translateY(100vh) rotate(720deg);opacity:.2}}`}</style>
    </div>
  );
}
