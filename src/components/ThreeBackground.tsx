"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function LandingScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      // Example: move mesh slower than scroll
      meshRef.current.position.y = -scroll.offset * 2; // adjust multiplier
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <ambientLight />
        <ScrollControls pages={3}>
          <LandingScene />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
