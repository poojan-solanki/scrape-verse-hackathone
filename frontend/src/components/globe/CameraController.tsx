import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { latLngToVector3 } from "./utils";
import { useDashboardStore } from "../../stores/useDashboardStore";

export function CameraController() {
  const { camera } = useThree();
  const targetPosRef = useRef<THREE.Vector3 | null>(null);
  const isAnimatingRef = useRef(false);

  // Subscribe only to the specific fields we need, not the entire selectedPort object.
  // This prevents R3F scene re-renders when unrelated store fields change.
  const selectedLat = useDashboardStore((s) => s.selectedPort?.latitude);
  const selectedLng = useDashboardStore((s) => s.selectedPort?.longitude);

  useEffect(() => {
    if (selectedLat != null && selectedLng != null) {
      const portPos = latLngToVector3(selectedLat, selectedLng, 4.4);
      targetPosRef.current = portPos;
      isAnimatingRef.current = true;
    }
  }, [selectedLat, selectedLng]);

  useFrame(() => {
    if (isAnimatingRef.current && targetPosRef.current) {
      camera.position.lerp(targetPosRef.current, 0.08);
      camera.lookAt(0, 0, 0);

      if (camera.position.distanceTo(targetPosRef.current) < 0.05) {
        isAnimatingRef.current = false;
      }
    }
  });

  return null;
}
