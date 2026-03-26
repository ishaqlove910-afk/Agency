import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useMemo } from "react";
import { Mesh, BufferGeometry, Float32BufferAttribute } from "three";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function PowerSphere() {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    meshRef.current.scale.setScalar(1.8 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#FF4C29"
          wireframe
          distort={0.4}
          speed={3}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

function DataStreams() {
  const groupRef = useRef<any>(null!);
  const count = 120;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 * 3;
      const radius = 1.5 + (i / count) * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (i / count - 0.5) * 4;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <points ref={groupRef} geometry={geometry}>
      <pointsMaterial size={0.04} color="#FF6B4A" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function PowerScene() {
  return (
    <div className="absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#FF4C29" />
          <pointLight position={[-5, -5, -3]} intensity={0.4} color="#FF6B4A" />
          <PowerSphere />
          <DataStreams />
        </Suspense>
      </Canvas>
    </div>
  );
}
