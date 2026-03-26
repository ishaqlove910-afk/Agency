import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useMemo } from "react";
import { Mesh, BufferGeometry, Float32BufferAttribute } from "three";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function AnimatedShape() {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={2.4}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#FF4C29"
          wireframe
          distort={0.35}
          speed={1.8}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, speed, color, opacity }: { radius: number; speed: number; color: string; opacity: number }) {
  const ringRef = useRef<Mesh>(null!);

  useFrame((state) => {
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.5 + 0.8;
    ringRef.current.rotation.z = state.clock.elapsedTime * speed;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<any>(null!);
  const count = 80;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial size={0.03} color="#FF4C29" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.6} color="#FF4C29" />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#4a9eff" />
          <AnimatedShape />
          <OrbitRing radius={3} speed={0.15} color="#FF4C29" opacity={0.2} />
          <OrbitRing radius={3.5} speed={-0.1} color="#FF6B4A" opacity={0.12} />
          <OrbitRing radius={2.5} speed={0.2} color="#FF4C29" opacity={0.15} />
          <OrbitRing radius={4} speed={0.08} color="#4a9eff" opacity={0.1} />
          <FloatingParticles />
        </Suspense>
      </Canvas>
    </div>
  );
}
