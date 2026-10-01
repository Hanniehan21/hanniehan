import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Float, Text, RoundedBox, Center, ContactShadows, useMask } from "@react-three/drei";
import * as THREE from "three";

function DataOrbiter({ radius, color, op, rotX, rotY, speed, scaleX = 1.6, posY = 0 }) {
  const pointsRef = useRef();
  const stencil = useMask(1, false); 

  const geo = useMemo(() => new THREE.TorusGeometry(radius, 0.01, 16, 100), [radius]);

  const particles = useMemo(() => {
    const count = 300; 
    const positions = new Float32Array(count * 3);
    const posAttribute = geo.getAttribute('position');
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * posAttribute.count);
      positions[i * 3] = posAttribute.getX(randomIndex) + (Math.random() - 0.5) * 0.15;
      positions[i * 3 + 1] = posAttribute.getY(randomIndex) + (Math.random() - 0.5) * 0.15;
      positions[i * 3 + 2] = posAttribute.getZ(randomIndex) + (Math.random() - 0.5) * 0.15;
    }
    return positions;
  }, [geo]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.z = t * speed;
      pointsRef.current.material.opacity = (Math.sin(t * 2) + 1) / 4 + op;
    }
  });

  return (
    // posY digunain buat geser orbit ke atas/bawah frame
    <group position={[0, posY, 0]} rotation={[rotX, rotY, 0]} scale={[scaleX, 1, 1]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial 
          color={color} 
          size={0.035} 
          transparent 
          opacity={op} 
          sizeAttenuation 
          blending={THREE.AdditiveBlending}
          {...stencil} 
        />
      </points>
    </group>
  );
}

function OrbitGlobe() {
  return (
    <group>
      {/* 1. Orbit Tengah (Horizontal Tebal) */}
      <DataOrbiter radius={1.8} color="#7FFFD4" op={0.8} rotX={Math.PI / 2} rotY={0} speed={0.4} scaleX={1.65} posY={0} />
      
      {/* 2. Orbit Agak Atas (Melingkar ke samping) */}
      <DataOrbiter radius={1.7} color="#00FFFF" op={0.6} rotX={1.6} rotY={0.1} speed={-0.3} scaleX={1.6} posY={1.2} />
      
      {/* 3. Orbit Paling Atas (Melingkar tipis di area kepala) */}
      <DataOrbiter radius={1.6} color="#7B2FFF" op={0.5} rotX={1.5} rotY={-0.1} speed={0.2} scaleX={1.55} posY={2.2} />
      
      {/* 4. Orbit Agak Bawah (Melingkar area nama) */}
      <DataOrbiter radius={1.7} color="#7B2FFF" op={0.6} rotX={1.4} rotY={-0.1} speed={-0.25} scaleX={1.6} posY={-1.2} />
      
      {/* 5. Orbit Paling Bawah (Horizontal tipis) */}
      <DataOrbiter radius={1.6} color="#00A9FF" op={0.4} rotX={Math.PI / 2} rotY={0.2} speed={0.15} scaleX={1.55} posY={-2.2} />
    </group>
  );
}

function HologramCard({ photoUrl }) {
  const texture = useLoader(THREE.TextureLoader, photoUrl);

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.5}>
        <RoundedBox args={[2.51, 3.81, 0.2]} radius={0.16} smoothness={4}>
            <meshBasicMaterial colorWrite={false} depthWrite={false} stencilWrite={true} stencilRef={1} stencilFunc={THREE.AlwaysStencilFunc} />
        </RoundedBox>

        <RoundedBox args={[2.5, 3.8, 0.1]} radius={0.15} smoothness={4}>
          <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
        </RoundedBox>

        <RoundedBox args={[2.53, 3.83, 0.08]} radius={0.16} smoothness={4}>
          <meshStandardMaterial color="#7FFFD4" emissive="#7FFFD4" emissiveIntensity={2} transparent opacity={0.8} side={THREE.BackSide} />
        </RoundedBox>

        <mesh position={[0, 0.6, 0.051]}>
          <planeGeometry args={[2.2, 2.2]} />
          <meshBasicMaterial map={texture} transparent={true} />
        </mesh>

        <Text position={[0, -0.8, 0.06]} fontSize={0.2} color="#ffffff" fontStyle="bold">FIRNANDA AMALIA</Text>
        <Text position={[0, -1.15, 0.06]} fontSize={0.09} color="#7FFFD4">PROFILE CARD</Text>

        {/* SISI BELAKANG (BACK) */}
        <group rotation={[0, Math.PI, 0]} position={[0, 0, -0.051]}>
           {/* Background Hitam Belakang biar Teks Jelas */}
           <mesh position={[0, 0, 0.001]}>
              <planeGeometry args={[2.3, 3.6]} />
              <meshStandardMaterial color="#000000" metalness={1} roughness={0.1} />
           </mesh>
           
           <Text position={[0, 1.2, 0.01]} fontSize={0.18} color="#7FFFD4" fontStyle="bold">CORE SKILLS</Text>
           
           <Text 
             position={[0, 0.1, 0.01]} 
             fontSize={0.11} 
             color="#ffffff" 
             lineHeight={1.8} 
             textAlign="center" 
             maxWidth={2.1}
           >
              • SQL • TABLEAU • POWERBI{"\n"}
              • UI/UX DESIGN • LOOKER GOOGLE STUDIO • EXCEL{"\n"}
              • PROJECT MANAGEMENT
           </Text>

           <Text position={[0, -1.3, 0.01]} fontSize={0.07} color="#7FFFD4" opacity={0.6}>
              © FirnandaAmalia.
           </Text>
        </group>
    </Float>
  );
}

export default function LanyardCanvas({ photoUrl }) {
  return (
    <Canvas 
  camera={{ position: [0, 0, 10], fov: 35 }} 
  style={{ background: "transparent" }} 
  stencil="true"
>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
      <Suspense fallback={null}>
        <Center>
          <HologramCard photoUrl={photoUrl} />
          <OrbitGlobe /> 
        </Center>
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={15} blur={3} color="#7FFFD4" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}