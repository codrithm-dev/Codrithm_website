import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerformanceMonitor, OrbitControls } from "@react-three/drei";
import { Suspense, useLayoutEffect, useRef, useState, useMemo, useEffect } from "react";
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

function Model({ scale = 1.3, url, interactive = false }: { scale?: number; url: string; interactive?: boolean }) {
  const group = useRef<THREE.Group>(null!);
  const gltf = useGLTF(url, undefined, undefined, configureLoader) as unknown as { scene: THREE.Group };
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  const [hovered, setHovered] = useState(false);
  const targetScale = useRef(scale);

  // Apply premium materials to all meshes
  useEffect(() => {
    if (!scene) return;
    
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const geometry = child.geometry;
        const oldMaterial = child.material as THREE.Material;
        
        // Create a new premium material based on brand colors
        let newMaterial: THREE.Material;
        
        if (oldMaterial instanceof THREE.MeshStandardMaterial || oldMaterial instanceof THREE.MeshPhysicalMaterial) {
          // Use MeshPhysicalMaterial for premium look
          newMaterial = new THREE.MeshPhysicalMaterial({
            color: oldMaterial.color,
            metalness: 0.1,
            roughness: 0.3,
            clearcoat: 0.4,
            clearcoatRoughness: 0.2,
            envMapIntensity: 0.8,
            side: THREE.DoubleSide,
          });
        } else {
          // Default to a clean, smooth material
          newMaterial = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color("#87FFBC"),
            metalness: 0.1,
            roughness: 0.3,
            clearcoat: 0.4,
            clearcoatRoughness: 0.2,
            side: THREE.DoubleSide,
          });
        }
        
        child.material = newMaterial;
        
        // Ensure smooth normals
        if (geometry) {
          geometry.computeVertexNormals();
        }
      }
    });
  }, [scene]);

  useLayoutEffect(() => {
    const g = group.current;
    if (!g || !scene) return;
    g.add(scene);
    return () => { g.remove(scene); };
  }, [scene]);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Slower, more elegant rotation
    group.current.rotation.y += delta * (hovered ? 0.4 : 0.15);
    // Subtle scale pop on hover
    targetScale.current = scale * (hovered ? 1.03 : 1);
    const s = THREE.MathUtils.lerp(group.current.scale.x, targetScale.current, 0.08);
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

export function LogoScene({ compact = false }: { compact?: boolean }) {
  const isMobile = useIsMobile();
  const [dpr, setDpr] = useState<[number, number]>([1, 2]);
  const url = isMobile || compact ? MOBILE_URL : DESKTOP_URL;

  return (
    <Canvas
      camera={{ position: [0, 0.5, 5.5], fov: 40 }}
      dpr={dpr}
      gl={{ 
        antialias: true, 
        alpha: true, 
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      frameloop="always"
      style={{ width: "100%", height: "100%" }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr([1, 1])}
        onIncline={() => setDpr([1, isMobile ? 1.5 : 2])}
        flipflops={3}
      />
      <Suspense fallback={null}>
        {/* Soft ambient for overall fill - no harsh shadows */}
        <ambientLight intensity={1.4} />

        {/* Main key light - soft white from top-right */}
        <directionalLight 
          position={[4, 8, 4]} 
          intensity={1.0} 
          color="#ffffff"
          castShadow={false}
        />

        {/* Fill light from left - softer than key */}
        <directionalLight 
          position={[-4, 4, 2]} 
          intensity={0.6} 
          color="#ffffff"
          castShadow={false}
        />

        {/* Brand accent lights - very subtle colored rim lighting */}
        <pointLight 
          position={[3, 1, 2]} 
          intensity={1.2} 
          color="#87FFBC" 
          distance={15} 
          decay={2} 
        />
        <pointLight 
          position={[-3, -1, 2]} 
          intensity={1.2} 
          color="#0066FF" 
          distance={15} 
          decay={2} 
        />

        {/* Subtle fill from below to eliminate harsh shadows */}
        <pointLight 
          position={[0, -3, 4]} 
          intensity={0.8} 
          color="#ffffff" 
          distance={12} 
          decay={2} 
        />

        {/* Backlight for edge definition */}
        <pointLight 
          position={[0, 2, -3]} 
          intensity={0.4} 
          color="#ffffff" 
          distance={10} 
          decay={2} 
        />

        <Model scale={compact ? 0.7 : 1.3} url={url} interactive={!compact} />

        {!compact && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.4}
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
