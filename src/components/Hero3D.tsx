import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useLoader } from "@react-three/fiber"
import * as THREE from 'three';
import { useMemo } from "react";
function Computer3D() {
  const computerRef = useRef<THREE.Group>(null);
  const screenTexture = useLoader(THREE.TextureLoader, "/screen.jpg")
  useFrame((state) => {
    if (computerRef.current) {
      computerRef.current.rotation.y += 0.005;
      computerRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={computerRef}>
      {/* Monitor */}
      <group position={[0, 0.5, 0]}>
        {/* Screen */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Screen Display (Image instead of glow) */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[2.8, 1.8, 0.01]} />
          <meshBasicMaterial map={screenTexture} toneMapped={false} />
        </mesh>

        {/* Screen Display */}
        {/* <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[2.8, 1.8, 0.01]} />
          <meshStandardMaterial 
            color="#0a1929"
            metalness={0.7} 
            roughness={0.2} 
            emissive="#4f8cff"       
            emissiveIntensity={6}
            toneMapped={false}
          />
        </mesh> */}
        
        {/* Stand */}
        <mesh position={[0, -1.2, 0.2]}>
          <boxGeometry args={[0.3, 0.8, 0.3]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Base */}
        <mesh position={[0, -1.5, 0.2]}>
          <boxGeometry args={[1, 0.1, 0.8]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      {/* Keyboard */}
      <mesh position={[0, -1.5, 1.5]}>
        <boxGeometry args={[2, 0.1, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}

function FloatingCubes() {
  const cubesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y += 0.005;
      cubesRef.current.children.forEach((cube, index) => {
        const mesh = cube as THREE.Mesh;
        mesh.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5;
        mesh.rotation.x += 0.01;
        mesh.rotation.z += 0.01;
      });
    }
  });
const gradientTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, "#ff6600"); // orange
    gradient.addColorStop(1, "#ff0000"); // red
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);
  return (
    <group ref={cubesRef}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 4,
            0,
            Math.sin((i / 8) * Math.PI * 2) * 4,
          ]}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
        map={gradientTexture}
        emissive={"#ff3300"}        // glowing orange-red
        emissiveIntensity={1.5}     // glow power
        toneMapped={false}          // needed for strong glow
      />
        </mesh>
      ))}
    </group>
  );
}

const Hero3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Computer3D />
        <FloatingCubes />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
      </Canvas>
    </div>
  );
};

export default Hero3D;