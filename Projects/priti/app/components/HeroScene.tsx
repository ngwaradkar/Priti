"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function TerminalModel() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -targetY,
      0.05
    );
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* Main terminal screen */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3, 2, 0.15]} />
          <meshStandardMaterial
            color="#0a1a1f"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Screen glow border */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[2.8, 1.8, 0.02]} />
          <meshStandardMaterial
            color="#001a18"
            emissive="#00e5cc"
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Green test pass lines */}
        {[...Array(5)].map((_, i) => (
          <mesh key={`pass-${i}`} position={[-0.8, 0.6 - i * 0.3, 0.1]}>
            <boxGeometry args={[1.2, 0.04, 0.01]} />
            <meshStandardMaterial
              color="#00e5cc"
              emissive="#00e5cc"
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}

        {/* Red fail line #3 */}
        <mesh position={[-0.8, 0.6 - 2 * 0.3, 0.1]}>
          <boxGeometry args={[0.8, 0.04, 0.012]} />
          <meshStandardMaterial
            color="#ff3b5c"
            emissive="#ff3b5c"
            emissiveIntensity={1.0}
          />
        </mesh>

        {/* Floating orb (Core) */}
        <mesh ref={coreRef} position={[1.5, 0.8, 0.3]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial
            color="#00e5cc"
            emissive="#00e5cc"
            emissiveIntensity={0.8}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Stand */}
        <mesh position={[0, -1.25, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 8]} />
          <meshStandardMaterial color="#1a3a40" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, -1.55, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 0.08, 16]} />
          <meshStandardMaterial color="#1a3a40" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Bug particles floating */}
        {[...Array(6)].map((_, i) => (
          <mesh
            key={`bug-${i}`}
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 2,
              Math.sin((i / 6) * Math.PI * 2) * 1.2,
              0.5,
            ]}
          >
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#ff3b5c" : "#7c3aed"}
              emissive={i % 3 === 0 ? "#ff3b5c" : "#7c3aed"}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10" style={{ background: "#050d0f" }}>
      {/* Dark background shown immediately to prevent white flash before WebGL renders */}
      <div className="absolute inset-0" style={{ background: "#050d0f" }} />
      <Canvas
        shadows
        dpr={[1, 2]}
        style={{ background: "#050d0f" }}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor("#050d0f", 1);
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        <color attach="background" args={["#050d0f"]} />
        <ambientLight intensity={0.3} />
        <spotLight
          position={[5, 8, 5]}
          angle={0.2}
          penumbra={1}
          intensity={2}
          castShadow
          color="#00e5cc"
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7c3aed" />
        <pointLight position={[5, -3, 3]} intensity={0.4} color="#ff3b5c" />
        {/* Environment removed — was overriding the dark background color */}
        <TerminalModel />
        <gridHelper args={[80, 60, 0x00e5cc, 0x0a1a1f]} position={[0, -3, 0]} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050d0f] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050d0f]/60 via-transparent to-[#050d0f]/30 pointer-events-none" />
    </div>
  );
}
