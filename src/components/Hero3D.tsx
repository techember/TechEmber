import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  );
}

function FloatingCubes() {
  const cubes = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cubes.current) {
      cubes.current.rotation.y += 0.005;
      cubes.current.children.forEach((cube, index) => {
        cube.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5;
        cube.rotation.x += 0.01;
        cube.rotation.z += 0.01;
      });
    }
  });

  return (
    <group ref={cubes}>
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
            color="#000000"
            metalness={0.8}
            roughness={0.2}
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
        
        <AnimatedSphere />
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