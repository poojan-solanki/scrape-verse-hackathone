import { useRef, useMemo, memo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { latLngToVector3 } from "./utils";
import { Port } from "../../types";
import { useDashboardStore } from "../../stores/useDashboardStore";

interface PortMarkerProps {
  port: Port;
}

// Reusable tmp vectors — never allocate inside render or useFrame
const _up = new THREE.Vector3(0, 1, 0);

// Color constants to avoid allocations
const COLOR_SELECTED = new THREE.Color("#00f0ff");
const COLOR_HOVERED = new THREE.Color("#ffffff");
const COLOR_DEFAULT = new THREE.Color("#f43f5e");

/**
 * PortMarker — Performance-optimized.
 *
 * Key fix: hover state tracked via useRef instead of useState.
 * This prevents React reconciliation inside the R3F scene on every
 * pointer-over/out, which was causing frame drops.
 * All visual changes (color, size) are applied imperatively in useFrame.
 */
function PortMarkerInner({ port }: PortMarkerProps) {
  const hoveredRef = useRef(false);
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const corePinRef = useRef<THREE.Mesh>(null);

  const { camera } = useThree();
  const selectPort = useDashboardStore((s) => s.selectPort);
  const selectedUnlocode = useDashboardStore((s) => s.selectedPort?.unlocode);

  const isSelected = selectedUnlocode === port.unlocode;

  // Memoize expensive 3D math — only recalculate if port coords change
  const { position, quaternion } = useMemo(() => {
    const pos = latLngToVector3(port.latitude, port.longitude, 2.01);
    const normal = pos.clone().normalize();
    const quat = new THREE.Quaternion();
    quat.setFromUnitVectors(_up, normal);
    return { position: pos, quaternion: quat };
  }, [port.latitude, port.longitude]);

  // All visual updates done imperatively — zero React re-renders per frame
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const distance = camera.position.distanceTo(position);
      const dynamicScale = (distance / 4.8) * 0.45;
      groupRef.current.scale.setScalar(dynamicScale);
    }

    // Imperative hover/select color + size changes on the core pin
    if (corePinRef.current) {
      const mat = corePinRef.current.material as THREE.MeshBasicMaterial;
      const geom = corePinRef.current.geometry as THREE.SphereGeometry;

      if (isSelected) {
        mat.color.lerp(COLOR_SELECTED, 0.15);
      } else if (hoveredRef.current) {
        mat.color.lerp(COLOR_HOVERED, 0.15);
      } else {
        mat.color.lerp(COLOR_DEFAULT, 0.15);
      }

      // Smooth scale transition for hover/select
      const targetScale = isSelected ? 1.4 : hoveredRef.current ? 1.25 : 1.0;
      const currentScale = corePinRef.current.scale.x;
      const newScale = currentScale + (targetScale - currentScale) * 0.12;
      corePinRef.current.scale.setScalar(newScale);
    }

    if (ringRef.current) {
      const t = clock.getElapsedTime() * 2.5;
      const pulse = 1 + (Math.sin(t) + 1) * 0.45;
      ringRef.current.scale.setScalar(pulse);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.85 - (pulse - 1) * 0.7;

      // Ring color follows selection state
      const ringMat = ringRef.current.material as THREE.MeshBasicMaterial;
      if (isSelected) {
        ringMat.color.lerp(COLOR_SELECTED, 0.1);
      } else {
        ringMat.color.lerp(COLOR_DEFAULT, 0.1);
      }
    }
  });

  return (
    <group position={position} quaternion={quaternion}>
      <group ref={groupRef}>
        {/* 1. Large Invisible Hit Proxy */}
        <mesh
          onClick={(e) => {
            e.stopPropagation();
            selectPort(port);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            hoveredRef.current = true;
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            hoveredRef.current = false;
            document.body.style.cursor = "auto";
          }}
        >
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>

        {/* 2. Core Pin Point — size/color driven imperatively */}
        <mesh ref={corePinRef} position={[0, 0.025, 0]}>
          <sphereGeometry args={[0.032, 12, 12]} />
          <meshBasicMaterial color="#f43f5e" />
        </mesh>

        {/* 3. Pulsing Wave Ring */}
        <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.028, 0.065, 24]} />
          <meshBasicMaterial
            color="#f43f5e"
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </group>
  );
}

export const PortMarker = memo(PortMarkerInner);
