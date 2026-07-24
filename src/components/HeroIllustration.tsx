import { memo } from "react";
import { motion } from "framer-motion";

// Central abstract shape paths (echoing Codrithm logo geometry)
const CENTRAL_PATHS = [
  "M 250 120 C 320 120 380 180 380 250 C 380 320 320 380 250 380 C 180 380 120 320 120 250 C 120 180 180 120 250 120",
  "M 250 160 C 290 160 340 210 340 250 C 340 290 290 340 250 340 C 210 340 160 290 160 250 C 160 210 210 160 250 160",
];

// Orbital paths
const ORBIT_PATHS = [
  { rx: 160, ry: 120, rotation: -15 },
  { rx: 180, ry: 140, rotation: 25 },
  { rx: 200, ry: 160, rotation: -5 },
];

// Intelligence nodes positioned on orbits
const NODES = [
  // Inner orbit
  { x: 250, y: 130, size: 8, delay: 0, label: "AI" },
  { x: 370, y: 200, size: 6, delay: 0.3, label: "ML" },
  { x: 340, y: 330, size: 7, delay: 0.6, label: "DL" },
  { x: 160, y: 300, size: 6, delay: 0.9, label: "NLP" },
  { x: 130, y: 180, size: 7, delay: 1.2, label: "CV" },
  
  // Middle orbit
  { x: 250, y: 90, size: 5, delay: 1.5, label: "API" },
  { x: 420, y: 160, size: 5, delay: 1.8, label: "DB" },
  { x: 400, y: 370, size: 5, delay: 2.1, label: "SDK" },
  { x: 100, y: 340, size: 5, delay: 2.4, label: "UI" },
  { x: 80, y: 140, size: 5, delay: 2.7, label: "UX" },
  
  // Outer orbit
  { x: 250, y: 50, size: 4, delay: 3.0, label: "CLOUD" },
  { x: 470, y: 120, size: 4, delay: 3.3, label: "EDGE" },
  { x: 450, y: 400, size: 4, delay: 3.6, label: "IOT" },
  { x: 50, y: 380, size: 4, delay: 3.9, label: "5G" },
  { x: 30, y: 100, size: 4, delay: 4.2, label: "API" },
];

// Data flow paths connecting nodes
const FLOW_PATHS = [
  "M 250 130 Q 300 100 370 200",
  "M 370 200 Q 400 280 340 330",
  "M 340 330 Q 250 350 160 300",
  "M 160 300 Q 100 250 130 180",
  "M 130 180 Q 180 120 250 130",
  // Cross connections
  "M 250 90 Q 350 120 420 160",
  "M 420 160 Q 450 280 400 370",
  "M 400 370 Q 300 400 100 340",
  "M 100 340 Q 60 240 80 140",
  "M 80 140 Q 150 80 250 90",
];

export const HeroIllustration = memo(function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 450"
        className="w-full h-full max-w-[500px] max-h-[450px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="centralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87FFBC" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0066FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#87FFBC" stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#87FFBC" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0066FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#87FFBC" stopOpacity="0.4" />
          </linearGradient>
          
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#87FFBC" stopOpacity="0.6" />
          </radialGradient>
          
          <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#87FFBC" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.05" />
          </radialGradient>

          {/* Filters */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient background glow */}
        <motion.ellipse
          cx="250"
          cy="225"
          rx="200"
          ry="180"
          fill="url(#ambientGlow)"
          animate={{
            rx: [200, 220, 200],
            ry: [180, 200, 180],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orbital paths */}
        {ORBIT_PATHS.map((orbit, i) => (
          <motion.ellipse
            key={`orbit-${i}`}
            cx="250"
            cy="225"
            rx={orbit.rx}
            ry={orbit.ry}
            fill="none"
            stroke="#87FFBC"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            transform={`rotate(${orbit.rotation} 250 225)`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Central abstract shape */}
        {CENTRAL_PATHS.map((path, i) => (
          <motion.path
            key={`central-${i}`}
            d={path}
            fill="none"
            stroke="url(#centralGradient)"
            strokeWidth={i === 0 ? "2" : "1.5"}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              delay: 0.5 + i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Data flow paths */}
        {FLOW_PATHS.map((path, i) => (
          <motion.path
            key={`flow-${i}`}
            d={path}
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated data pulses */}
        {FLOW_PATHS.slice(0, 6).map((path, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="2.5"
            fill={i % 2 === 0 ? "#87FFBC" : "#0066FF"}
            filter="url(#softGlow)"
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              offsetPath: `path('${path}')`,
            }}
          />
        ))}

        {/* Intelligence nodes */}
        {NODES.map((node, i) => (
          <motion.g key={`node-${i}`}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size + 3}
              fill="#87FFBC"
              opacity="0.2"
              filter="url(#strongGlow)"
              animate={{
                r: [node.size + 3, node.size + 6, node.size + 3],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 3,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Node background */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="#0a0a0a"
              stroke="#87FFBC"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: node.delay,
                ease: "easeOut",
              }}
            />
            
            {/* Inner highlight */}
            <motion.circle
              cx={node.x - node.size * 0.25}
              cy={node.y - node.size * 0.25}
              r={node.size * 0.25}
              fill="#ffffff"
              opacity="0.5"
              animate={{
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Node label */}
            {node.size >= 5 && (
              <motion.text
                x={node.x}
                y={node.y + node.size + 12}
                textAnchor="middle"
                fill="#87FFBC"
                fontSize="6"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="500"
                opacity="0.6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{
                  duration: 0.5,
                  delay: node.delay + 0.3,
                }}
              >
                {node.label}
              </motion.text>
            )}
          </motion.g>
        ))}

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={80 + Math.random() * 340}
            cy={80 + Math.random() * 290}
            r={0.8 + Math.random() * 1.2}
            fill={i % 3 === 0 ? "#87FFBC" : i % 3 === 1 ? "#0066FF" : "#ffffff"}
            opacity="0.3"
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connection pulses on central shape */}
        <motion.circle
          r="4"
          fill="#87FFBC"
          filter="url(#softGlow)"
          animate={{
            cx: [250, 380, 340, 160, 130, 250],
            cy: [120, 250, 330, 300, 180, 120],
            opacity: [0, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
});
