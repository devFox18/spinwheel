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
      ctx.closePxã~¸¶‰žËkºwµçmintrinsics@1.1.0: {}

  merge2@1.4.1: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.2

  minimatch@10.2.5:
    dependencies:
      brace-expansion: 5.0.8

  minimatch@3.1.5:
    dependencies:
      brace-expansion: 1.1.16

  minimist@1.2.8: {}

  ms@2.1.3: {}

  nanoid@3.3.16: {}

  napi-postinstall@0.3.4: {}

  natural-compare@1.4.0: {}

  next@15.5.22(react-dom@19.2.8(react@19.2.8))(react@19.2.8):
    dependencies:
      '@next/env': 15.5.22
      '@swc/helpers': 0.5.15
      caniuse-lite: 1.0.30001806
      postcss: 8.4.31
      react: 19.2.8
      react-dom: 19.2.8(react@19.2.8)
      styled-jsx: 5.1.6(react@19.2.8)
    optionalDependencies:
      '@next/swc-darwin-arm64': 15.5.22
      '@next/swc-darwin-x64': 15.5.22
      '@next/swc-linux-arm64-gnu': 15.5.22
      '@next/swc-linux-arm64-musl': 15.5.22
      '@next/swc-linux-x64-gnu': 15.5.22
      '@next/swc-linux-x64-musl': 15.5.22
      '@next/swc-win32-arm64-msvc': 15.5.22
      '@next/swc-win32-x64-msvc': 15.5.22
      sharp: 0.34.5
    transitivePeerDependencies:
      - '@babel/core'
      - babel-plugin-macros

  node-exports-info@1.6.2:
    dependencies:
      array.prototype.flatmap: 1.3.3
      es-errors: 1.3.0
      object.entries: 1.1.9
      semver: 6.3.1

  object-assign@4.1.1: {}

  object-inspect@1.13.4: {}

  object-keys@1.1.1: {}

  object.assign@4.1.7:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.2
      has-symbols: 1.1.0
      object-keys: 1.1.1

  object.entries@1.1.9:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.2

  object.fromentries@2.0.8:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-object-atoms: 1.1.2

  object.groupby@1.0.3:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2

  object.values@1.2.1:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.2

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  own-keys@1.0.2:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      object-keys: 1.1.1
      safe-push-apply: 1.0.0

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  path-exists@4.0.0: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  picocolors@1.1.1: {}

  picomatch@2.3.2: {}

  picomatch@4.0.5: {}

  possible-typed-array-names@1.1.0: {}

  postcss@8.4.31:
    dependencies:
      nanoid: 3.3.16
      picocolors: 1.1.1
      source-map-js: 1.2.1

  postcss@8.5.23:
    dependencies:
      nanoid: 3.3.16
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prelude-ls@1.2.1: {}

  prettier-plugin-tailwindcss@0.6.14(prettier@3.9.6):
    dependencies:
      prettier: 3.9.6

  prettier@3.9.6: {}

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  punycode@2.3.1: {}

  queue-microtask@1.2.3: {}

  react-dom@19.2.8(react@19.2.8):
    dependencies:
      react: 19.2.8
      scheduler: 0.27.0

  react-is@16.13.1: {}

  react@19.2.8: {}

  reflect.getprototypeof@1.0.10:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      which-builtin-type: 1.2.1

  regexp.prototype.flags@1.5.4:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-errors: 1.3.0
      get-proto: 1.0.1
      gopd: 1.2.0
      set-function-name: 2.0.2

  resolve-from@4.0.0: {}

  resolve-pkg-maps@1.0.0: {}

  resolve@2.0.0-next.7:
    dependencies:
      es-errors: 1.3.0
      is-core-module: 2.16.2
      node-exports-info: 1.6.2
      object-keys: 1.1.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.1.0: {}

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-array-concat@1.1.4:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      has-symbols: 1.1.0
      isarray: 2.0.5

  safe-push-apply@1.0.0:
    dependencies:
      es-errors: 1.3.0
      isarray: 2.0.5

  safe-regex-test@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-regex: 1.2.1

  scheduler@0.27.0: {}

  semver@6.3.1: {}

  semver@7.8.5: {}

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  set-proto@1.0.0:
    dependencies:
      dunder-proto: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.2

  sharp@0.34.5:
    dependencies:
      '@img/colour': 1.1.0
      detect-libc: 2.1.2
      semver: 7.8.5
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.34.5
      '@img/sharp-darwin-x64': 0.34.5
      '@img/sharp-libvips-darwin-arm64': 1.2.4
      '@img/sharp-libvips-darwin-x64': 1.2.4
      '@img/sharp-libvips-linux-arm': 1.2.4
      '@img/sharp-libvips-linux-arm64': 1.2.4
      '@img/sharp-libvips-linux-ppc64': 1.2.4
      '@img/sharp-libvips-linux-riscv64': 1.2.4
      '@img/sharp-libvips-linux-s390x': 1.2.4
      '@img/sharp-libvips-linux-x64': 1.2.4
      '@img/sharp-libvips-linuxmusl-arm64': 1.2.4
      '@img/sharp-libvips-linuxmusl-x64': 1.2.4
      '@img/sharp-linux-arm': 0.34.5
      '@img/sharp-linux-arm64': 0.34.5
      '@img/sharp-linux-ppc64': 0.34.5
      '@img/sharp-linux-riscv64': 0.34.5
      '@img/sharp-linux-s390x': 0.34.5
      '@img/sharp-linux-x64': 0.34.5
      '@img/sharp-linuxmusl-arm64': 0.34.5
      '@img/sharp-linuxmusl-x64': 0.34.5
      '@img/sharp-wasm32': 0.34.5
      '@img/sharp-win32-arm64': 0.34.5
      '@img/sharp-win32-ia32': 0.34.5
      '@img/sharp-win32-x64': 0.34.5
    optional: true

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel-list@1.0.1:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.1:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.1
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  source-map-js@1.2.1: {}

  stable-hash@0.0.5: {}

  stop-iteration-iterator@1.1.0:
    dependencies:
      es-errors: 1.3.0
      internal-slot: 1.1.0

  string.prototype.includes@2.0.1:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-abstract: 1.24.2

  string.prototype.matchall@4.0.12:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      regexp.prototype.flags: 1.5.4
      set-function-name: 2.0.2
      side-channel: 1.1.1

  string.prototype.repeat@1.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.24.2

  string.prototype.trim@1.2.11:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-data-property: 1.1.4
      define-properties: 1.2.1
      es-abstract: 1.24.2
      es-object-atoms: 1.1.2
      has-property-descriptors: 1.0.2
      safe-regex-test: 1.1.0

  string.prototype.trimend@1.0.10:
    dependencies:
      call-bind: 1.0.9
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.2

  string.prototype.trimstart@1.0.8:
    dependencies:
      call-bind: 1.0.9
      define-properties: 1.2.1
      es-object-atoms: 1.1.2

  strip-bom@3.0.0: {}

  strip-json-comments@3.1.1: {}

  styled-jsx@5.1.6(react@19.2.8):
    dependencies:
      client-only: 0.0.1
      react: 19.2.8

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  tailwindcss@4.3.3: {}

  tapable@2.3.3: {}

  tinyglobby@0.2.17:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.5)
      picomatch: 4.0.5

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  ts-api-utils@2.5.0(typescript@5.9.3):
    dependencies:
      typescript: 5.9.3

  tsconfig-paths@3.15.0:
    dependencies:
      '@types/json5': 0.0.29
      json5: 1.0.2
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.8.1: {}

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  typed-array-buffer@1.0.3:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-typed-array: 1.1.15

  typed-array-byte-length@1.0.3:
    dependencies:
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15

  typed-array-byte-offset@1.0.4:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15
      reflect.getprototypeof: 1.0.10

  typed-array-length@1.0.8:
    dependencies:
      call-bind: 1.0.9
      for-each: 0.3.5
      gopd: 1.2.0
      is-typed-array: 1.1.15
      possible-typed-array-names: 1.1.0
      reflect.getprototypeof: 1.0.10

  typescript@5.9.3: {}

  unbox-primitive@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-bigints: 1.1.0
      has-symbols: 1.1.0
      which-boxed-primitive: 1.1.1

  undici-types@6.21.0: {}

  unrs-resolver@1.12.2:
    dependencies:
      napi-postinstall: 0.3.4
    optionalDependencies:
      '@unrs/resolver-binding-android-arm-eabi': 1.12.2
      '@unrs/resolver-binding-android-arm64': 1.12.2
      '@unrs/resolver-binding-darwin-arm64': 1.12.2
      '@unrs/resolver-binding-darwin-x64': 1.12.2
      '@unrs/resolver-binding-freebsd-x64': 1.12.2
      '@unrs/resolver-binding-linux-arm-gnueabihf': 1.12.2
      '@unrs/resolver-binding-linux-arm-musleabihf': 1.12.2
      '@unrs/resolver-binding-linux-arm64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-arm64-musl': 1.12.2
      '@unrs/resolver-binding-linux-loong64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-loong64-musl': 1.12.2
      '@unrs/resolver-binding-linux-ppc64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-riscv64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-riscv64-musl': 1.12.2
      '@unrs/resolver-binding-linux-s390x-gnu': 1.12.2
      '@unrs/resolver-binding-linux-x64-gnu': 1.12.2
      '@unrs/resolver-binding-linux-x64-musl': 1.12.2
      '@unrs/resolver-binding-openharmony-arm64': 1.12.2
      '@unrs/resolver-binding-wasm32-wasi': 1.12.2
      '@unrs/resolver-binding-win32-arm64-msvc': 1.12.2
      '@unrs/resolver-binding-win32-ia32-msvc': 1.12.2
      '@unrs/resolver-binding-win32-x64-msvc': 1.12.2

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  which-boxed-primitive@1.1.1:
    dependencies:
      is-bigint: 1.1.0
      is-boolean-object: 1.2.2
      is-number-object: 1.1.1
      is-string: 1.1.1
      is-symbol: 1.1.1

  which-builtin-type@1.2.1:
    dependencies:
      call-bound: 1.0.4
      function.prototype.name: 1.2.0
      has-tostringtag: 1.0.2
      is-async-function: 2.1.1
      is-date-object: 1.1.0
      is-finalizationregistry: 1.1.1
      is-generator-function: 1.1.2
      is-regex: 1.2.1
      is-weakref: 1.1.1
      isarray: 2.0.5
      which-boxed-primitive: 1.1.1
      which-collection: 1.0.2
      which-typed-array: 1.1.22

  which-collection@1.0.2:
    dependencies:
      is-map: 2.0.3
      is-set: 2.0.3
      is-weakmap: 2.0.2
      is-weakset: 2.0.4

  which-typed-array@1.1.22:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.9
      call-bound: 1.0.4
      for-each: 0.3.5
      get-proto: 1.0.1
      gopd: 1.2.0
      has-tostringtag: 1.0.2

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  word-wrap@1.2.5: {}

  yocto-queue@0.1.0: {}
