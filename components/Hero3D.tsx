"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect, Suspense } from "react";
import * as THREE from "three";

const TEAL = "#2DD4BF";
const GOLD = "#F5C451";

// Neural-network topology: nodes arranged in layers along X (input → output).
const LAYERS = [
  { x: -2.6, count: 3 },
  { x: -0.9, count: 5 },
  { x: 0.9, count: 5 },
  { x: 2.6, count: 3 },
];
const PULSE_COUNT = 26;

/**
 * A 3D neural network: layered nodes, full inter-layer connections, and
 * glowing "signal" pulses that travel along the edges — data flowing through
 * the net (inference in motion). Rotates gently and eases toward the mouse.
 */
function NeuralNet() {
  const group = useRef<THREE.Group>(null);
  const pulseGeo = useRef<THREE.BufferGeometry>(null);
  const { viewport } = useThree();

  // Build node positions, edges (as endpoint pairs), and node metadata.
  const { nodes, edgePositions, edges } = useMemo(() => {
    const nodes: { pos: THREE.Vector3; gold: boolean }[] = [];
    const layerNodes: THREE.Vector3[][] = [];

    LAYERS.forEach((layer) => {
      const col: THREE.Vector3[] = [];
      const span = (layer.count - 1) / 2;
      for (let i = 0; i < layer.count; i++) {
        const y = (i - span) * 0.95;
        const z = Math.sin(i * 1.7 + layer.x) * 0.4; // slight depth
        const pos = new THREE.Vector3(layer.x, y, z);
        col.push(pos);
        // gold accents on the output-ish nodes
        nodes.push({ pos, gold: layer.x > 1.5 || (layer.x < -2 && i === 1) });
      }
      layerNodes.push(col);
    });

    // Connect every node in a layer to every node in the next layer.
    const edges: [THREE.Vector3, THREE.Vector3][] = [];
    for (let l = 0; l < layerNodes.length - 1; l++) {
      layerNodes[l].forEach((a) => {
        layerNodes[l + 1].forEach((b) => edges.push([a, b]));
      });
    }

    const edgePositions = new Float32Array(edges.length * 2 * 3);
    edges.forEach(([a, b], i) => {
      edgePositions.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6);
    });

    return { nodes, edgePositions, edges };
  }, []);

  // Each pulse rides a random edge from t=0→1, then re-spawns on a new edge.
  const pulses = useMemo(
    () =>
      Array.from({ length: PULSE_COUNT }, () => ({
        edge: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        speed: 0.35 + Math.random() * 0.5,
      })),
    [edges.length]
  );
  const pulsePositions = useMemo(
    () => new Float32Array(PULSE_COUNT * 3),
    []
  );

  useFrame((state, delta) => {
    // Gentle rotation + mouse parallax on the whole net.
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      const mx = (state.pointer.x * viewport.width) / 70;
      const my = (state.pointer.y * viewport.height) / 70;
      group.current.rotation.x += (my * 0.3 - group.current.rotation.x) * 0.05;
      group.current.position.x += (mx - group.current.position.x) * 0.05;
    }

    // Advance signal pulses along their edges.
    for (let i = 0; i < PULSE_COUNT; i++) {
      const p = pulses[i];
      p.t += delta * p.speed;
      if (p.t > 1) {
        p.t = 0;
        p.edge = Math.floor(Math.random() * edges.length);
        p.speed = 0.35 + Math.random() * 0.5;
      }
      const [a, b] = edges[p.edge];
      pulsePositions[i * 3] = a.x + (b.x - a.x) * p.t;
      pulsePositions[i * 3 + 1] = a.y + (b.y - a.y) * p.t;
      pulsePositions[i * 3 + 2] = a.z + (b.z - a.z) * p.t;
    }
    if (pulseGeo.current) {
      pulseGeo.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={group} rotation={[0.15, 0, 0]}>
      {/* Connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
            count={edgePositions.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={TEAL} transparent opacity={0.18} />
      </lineSegments>

      {/* Neurons */}
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial
            color={n.gold ? GOLD : TEAL}
            emissive={n.gold ? GOLD : TEAL}
            emissiveIntensity={1.8}
            roughness={0.35}
            metalness={0.3}
          />
        </mesh>
      ))}

      {/* Signal pulses travelling along the edges */}
      <points>
        <bufferGeometry ref={pulseGeo}>
          <bufferAttribute
            attach="attributes-position"
            args={[pulsePositions, 3]}
            count={PULSE_COUNT}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.14}
          color={GOLD}
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function Hero3D() {
  // R3F can measure its container as 300x150 when mounted via a lazy import
  // inside an absolutely-positioned box. Nudge a re-measure over a few ticks
  // (covers the race with R3F attaching its own resize listener).
  useEffect(() => {
    const fire = () => window.dispatchEvent(new Event("resize"));
    const timers = [0, 60, 200, 500].map((ms) => setTimeout(fire, ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={40} color={TEAL} />
      <pointLight position={[-5, -3, 2]} intensity={25} color={GOLD} />
      <Suspense fallback={null}>
        <NeuralNet />
      </Suspense>
    </Canvas>
  );
}
