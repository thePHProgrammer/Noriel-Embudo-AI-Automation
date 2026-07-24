"use client";

import { motion, useReducedMotion } from "framer-motion";

type Node = { x: number; y: number; r: number };
type Edge = [number, number];

const compactNodes: Node[] = [
  { x: 40, y: 140, r: 6 },
  { x: 130, y: 60, r: 5 },
  { x: 130, y: 200, r: 5 },
  { x: 220, y: 110, r: 7 },
  { x: 220, y: 190, r: 4 },
  { x: 290, y: 60, r: 5 },
];
const compactEdges: Edge[] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
];

const fullNodes: Node[] = [
  { x: 40, y: 210, r: 6 },
  { x: 120, y: 90, r: 5 },
  { x: 120, y: 260, r: 5 },
  { x: 210, y: 160, r: 8 },
  { x: 210, y: 40, r: 4 },
  { x: 210, y: 320, r: 4 },
  { x: 310, y: 100, r: 6 },
  { x: 310, y: 230, r: 5 },
  { x: 390, y: 160, r: 5 },
];
const fullEdges: Edge[] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [1, 4],
  [2, 5],
  [3, 6],
  [3, 7],
  [4, 6],
  [5, 7],
  [6, 8],
  [7, 8],
];

function Graph({
  nodes,
  edges,
  viewBox,
  className,
}: {
  nodes: Node[];
  edges: Edge[];
  viewBox: string;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg viewBox={viewBox} className={className} aria-hidden>
      <defs>
        <linearGradient id="node-graph-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F7CFF" />
          <stop offset="100%" stopColor="#9B5DFF" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = nodes[a];
        const to = nodes[b];
        return (
          <motion.line
            key={`edge-${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="url(#node-graph-gradient)"
            strokeWidth={1.5}
            strokeOpacity={0.45}
            strokeDasharray="6 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              shouldReduceMotion
                ? { pathLength: 1, opacity: 0.45 }
                : {
                    pathLength: 1,
                    opacity: 0.45,
                    strokeDashoffset: [0, -28],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.6, delay: i * 0.06 }
                : {
                    pathLength: { duration: 0.6, delay: i * 0.06 },
                    opacity: { duration: 0.6, delay: i * 0.06 },
                    strokeDashoffset: {
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }
            }
          />
        );
      })}

      {nodes.map((node, i) => (
        <motion.g
          key={`node-${i}`}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
        >
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.r + 5}
            fill="url(#node-graph-gradient)"
            opacity={0.15}
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.1, 0.25, 0.1], scale: [1, 1.15, 1] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }
            }
          />
          <circle cx={node.x} cy={node.y} r={node.r} fill="url(#node-graph-gradient)" />
        </motion.g>
      ))}
    </svg>
  );
}

export function HeroNodeGraph() {
  return (
    <>
      <Graph
        nodes={compactNodes}
        edges={compactEdges}
        viewBox="0 0 330 260"
        className="block md:hidden w-full h-auto max-h-64"
      />
      <Graph
        nodes={fullNodes}
        edges={fullEdges}
        viewBox="0 0 430 360"
        className="hidden md:block w-full h-auto"
      />
    </>
  );
}
