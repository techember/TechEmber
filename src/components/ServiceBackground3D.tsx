import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const FloatingElements = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time * 0.8) * 0.5;
      sphereRef.current.rotation.x = time * 0.3;
      sphereRef.current.rotation.z = time * 0.2;
    }
    
    if (boxRef.current) {
      boxRef.current.position.y = Math.cos(time * 0.6) * 0.3;
      boxRef.current.rotation.x = time * 0.4;
      boxRef.current.rotation.y = time * 0.3;
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.sin(time * 1.2) * 0.4;
      sphere2Ref.current.rotation.y = time * 0.5;
    }
  });

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      
      {/* Floating geometric shapes */}
      <Sphere ref={sphereRef} args={[0.5, 32, 32]} position={[-3, 0, -2]}>
        <meshStandardMaterial 
          color="#ff4500" 
          transparent 
          opacity={0.2}
          wireframe 
        />
      </Sphere>
      
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[3, 1, -3]}>
        <meshStandardMaterial 
          color="#dc2626" 
          transparent 
          opacity={0.15}
          wireframe 
        />
      </Box>
      
      <Sphere ref={sphere2Ref} args={[0.3, 32, 32]} position={[0, -2, -1]}>
        <meshStandardMaterial 
          color="#ff6b35" 
          transparent 
          opacity={0.25}
          wireframe 
        />
      </Sphere>
    </>
  );
};

const ServiceBackground3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <FloatingElements />
      </Canvas>
    </div>
  );
};

export default ServiceBackground3D;