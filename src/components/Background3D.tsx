import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// Simple Floating Satellite
const Satellite = ({ position }: { position: [number, number, number] }) => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
        }
    });

    return (
        <group ref={meshRef} position={position}>
            {/* Body */}
            <mesh>
                <boxGeometry args={[0.3, 0.15, 0.15]} />
                <meshStandardMaterial color="#00ffff" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Solar panels */}
            <mesh position={[-0.4, 0, 0]}>
                <boxGeometry args={[0.4, 0.02, 0.3]} />
                <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} />
            </mesh>
            <mesh position={[0.4, 0, 0]}>
                <boxGeometry args={[0.4, 0.02, 0.3]} />
                <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} />
            </mesh>
            {/* Antenna */}
            <mesh position={[0, 0.15, 0]}>
                <cylinderGeometry args={[0.01, 0.01, 0.2]} />
                <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
};

// Orbit Ring
const OrbitRing = ({ radius, color }: { radius: number; color: string }) => {
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
            ringRef.current.rotation.z += 0.002;
        }
    });

    return (
        <mesh ref={ringRef}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>
    );
};

// Floating Chip
const FloatingChip = ({ position }: { position: [number, number, number] }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[0.4, 0.08, 0.4]} />
            <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.3} />
        </mesh>
    );
};

// Glowing Sphere
const GlowingSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
        </mesh>
    );
};

// Scene
const Scene = () => {
    return (
        <>
            {/* Lights */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

            {/* Stars */}
            <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />

            {/* Orbit Rings */}
            <OrbitRing radius={3} color="#00ffff" />
            <OrbitRing radius={4} color="#ff00ff" />
            <OrbitRing radius={5} color="#ffff00" />

            {/* Satellites */}
            <Satellite position={[2, 1, -2]} />
            <Satellite position={[-3, -1, -3]} />
            <Satellite position={[0, 2, -4]} />

            {/* Floating Chips */}
            <FloatingChip position={[-2, 0, -3]} />
            <FloatingChip position={[3, -1, -2]} />

            {/* Glowing Spheres */}
            <GlowingSphere position={[1, -2, -3]} color="#00ffff" />
            <GlowingSphere position={[-1, 2, -4]} color="#ff00ff" />
            <GlowingSphere position={[2, 0, -5]} color="#00ff00" />
        </>
    );
};

export const Background3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'transparent' }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
            >
                <Scene />
            </Canvas>
        </div>
    );
};
