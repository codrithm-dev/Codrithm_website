import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles, useGLTF, ContactShadows, PerformanceMonitor, OrbitControls } from "@react-three/drei";
import { Suspense, useLayoutEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { useIsMobile } from "@/hooks/use-mobile";

const DESKTOP_URL = "/codrithm-logo-desktop.glb";
const MOBILE_URL = "/codrithm-logo-mobile.glb";

// Configure Meshopt decoder for compressed GLBs
const configureLoader = (loader: { setMeshoptDecoder: (d: unknown) => void }) => {
  loader.setMeshoptDecoder(MeshoptDecoder);
};

useGLTF.preload(DESKTOP_URL, undefined, undefined, configureLoader);
useGLTF.preload(MOBILE_URL, undefined, undefined, configureLoader);

function Model({ scale = 1.6, url, interactive = false }: { scale?: number; url: string; interactive?: boolean }) {
  const group = useRef<THREE.Group>(null!);
  const gltf = useGLTF(url, undefined, undefined, configureLoader) as unknown as { scene: THREE.Group };
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  const [hovered, setHovered] = useState(false);
  const targetScale = useRef(scale);

  useLayoutEffect(() => {
    const g = group.current;
    if (!g || !scene) return;
    g.add(scene);
    return () => { g.remove(scene); };
  }, [scene]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * (hovered ? 0.9 : 0.35);
    // subtle scale pop on hover
    targetScale.current = scale * (hovered ? 1.08 : 1);
    const s = THREE.MathUtils.lerp(group.current.scale.x, targetScale.current, 0.12);
    group.current.scale.setScalar(s);
  });

  return (
    <group
      ref={group}
      scale={scale}
      onPointerOver={interactive ? (e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = "grab"; } : undefined}
      onPointerOut={interactive ? () => { setHovered(false); document.body.style.cursor = ""; } : undefined}
      onPointerDown={interactive ? () => { document.body.style.cursor = "grabbing"; } : undefined}
      onPointerUp={interactive ? () => { document.body.style.cursor = "grab"; } : undefined}
    />
  );
}

function Platform() {
  const ring = useRef<THREE.Mesh>(null!);
  useFrame((s) => { if (ring.current) ring.current.rotation.z = s.clock.elapsedTime * 0.3; });
  return (
    <group position={[0, -1.7, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.4, 1.6, 64]} />
        <meshBasicMaterial color="#87FFBC" toneMapped={false} transparent opacity={0.7} />
      </mesh>
      <mesh ref={ring} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 1.85, 64]} />
        <meshBasicMaterial color="#0066FF" toneMapped={false} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

export function LogoScene({ compact = false }: { compact?: boolean }) {
  const isMobile = useIsMobile();
  const [dpr, setDpr] = useState<[number, number]>([1, 2]);
  // Mobile / compact → smaller LOD + capped pixel ratio
  const url = isMobile || compact ? MOBILE_URL : DESKTOP_URL;
  const heavy = !compact && !isMobile;

  return (
    <Canvas
      camera={{ position: [0, 0.3, 5.5], fov: 45 }}
      dpr={dpr}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Adaptive DPR: if FPS dips, drop pixel ratio; if steady, allow up to 2x */}
      <PerformanceMonitor
        onDecline={() => setDpr([1, 1])}
        onIncline={() => setDpr([1, isMobile ? 1.25 : 2])}
        flipflops={3}
      />
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={2.5} color="#87FFBC" />
        <pointLight position={[-3, -1, 2]} intensity={2.5} color="#0066FF" />
        {heavy && <pointLight position={[0, 4, -2]} intensity={1.2} color="#ffffff" />}
        <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
          <Model scale={compact ? 0.9 : 1.6} url={url} interactive={!compact} />
        </Float>
        {heavy && <Platform />}
        {heavy && <ContactShadows position={[0, -1.75, 0]} opacity={0.4} scale={8} blur={2.5} far={4} color="#0066FF" />}
        <Sparkles
          count={compact ? 12 : isMobile ? 24 : 80}
          scale={compact ? 4 : 8}
          size={2}
          speed={0.4}
          color="#87FFBC"
        />
        {!isMobile && (
          <Sparkles count={compact ? 10 : 60} scale={compact ? 4 : 7} size={1.5} speed={0.3} color="#0066FF" />
        )}
        <Environment preset="night" />
        {!compact && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.9}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(2 * Math.PI) / 3}
          />
        )}
      </Suspense>
    </Canvas>
  );
}

export function MiniLogo() {
  return (
    <div className="w-9 h-9 relative">
      <LogoScene compact />
    </div>
  );
}
