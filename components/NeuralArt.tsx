/*
 * AI-style generated imagery, rendered as self-contained SVG so the page stays
 * fast, offline-safe and deploy-ready (no external image requests / CLS).
 *
 * To swap in real AI-generated raster art later, generate images with prompts like:
 *   - "abstract neural network, glowing teal and gold nodes on deep navy #080A11,
 *      futuristic circuit lines, dark premium tech aesthetic, high detail"
 *   - "diverse students building AI agents at glowing terminals, navy + teal light,
 *      cinematic, aspirational, volumetric glow"
 * ...then drop them into /public and replace <NeuralArt/> usages with <Image/>.
 */

// Deterministic node layout (no RNG) to avoid hydration mismatch.
const NODES: [number, number, number][] = [
  [80, 120, 3], [220, 60, 2], [360, 160, 4], [140, 260, 2], [300, 300, 3],
  [460, 90, 2], [520, 220, 3], [640, 140, 4], [700, 300, 2], [420, 340, 2],
  [180, 400, 3], [340, 440, 2], [560, 400, 3], [680, 440, 2], [100, 340, 2],
];
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [3, 4], [2, 5], [5, 6], [6, 7], [7, 8], [4, 9],
  [9, 6], [3, 10], [10, 11], [11, 4], [11, 12], [12, 13], [12, 8], [14, 0], [10, 14],
];

export default function NeuralArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 500"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="na-glow" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#080A11" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="760" height="500" fill="url(#na-glow)" />
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a][0]}
          y1={NODES[a][1]}
          x2={NODES[b][0]}
          y2={NODES[b][1]}
          stroke="#2DD4BF"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      ))}
      {NODES.map(([x, y, r], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill={i % 4 === 0 ? "#F5C451" : "#2DD4BF"}
          opacity="0.8"
        />
      ))}
    </svg>
  );
}
