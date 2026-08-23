import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

export function Earth() {
  // Load real NASA high-resolution daytime satellite Earth texture
  const dayTexture = useLoader(TextureLoader, "/textures/earth_day.jpg");

  return (
    <group>
      {/* 1. Real Bright NASA Satellite Earth Globe */}
      <mesh>
        <sphereGeometry args={[2.0, 64, 64]} />
        <meshStandardMaterial
          map={dayTexture}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* 2. Subtle Atmospheric Cyan Halo */}
      <mesh>
        <sphereGeometry args={[2.03, 64, 64]} />
        <meshStandardMaterial
          color="#38bdf8"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
