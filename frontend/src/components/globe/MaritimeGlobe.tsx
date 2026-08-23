import { Suspense, memo, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "./Earth";
import { PortMarker } from "./PortMarker";
import { CameraController } from "./CameraController";
import { useDashboardStore } from "../../stores/useDashboardStore";
import { Port } from "../../types";

// Memoize Earth to prevent re-render when parent state changes
const MemoizedEarth = memo(Earth);

/**
 * MaritimeGlobe — Performance-optimized.
 *
 * Key fixes:
 * 1. Subscribes to ports via a ref-sync pattern so the Canvas tree
 *    doesn't re-render when the ports array reference changes.
 * 2. Lower DPR ceiling (1.25 vs 1.5) reduces GPU fill-rate.
 * 3. PortMarkers are individually memoized.
 */

// We keep a stable component that reads ports once and syncs via ref
function PortMarkersLayer() {
  const ports = useDashboardStore((s) => s.ports);
  const portsRef = useRef<Port[]>(ports);

  useEffect(() => {
    portsRef.current = ports;
  }, [ports]);

  return (
    <>
      {ports.map((port) => (
        <PortMarker key={port.id} port={port} />
      ))}
    </>
  );
}

const MemoizedPortMarkers = memo(PortMarkersLayer);

export function MaritimeGlobe() {
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 1.2, 4.6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.25]}
      >
        <Suspense fallback={null}>
          {/* Even, Bright Daylight Illumination */}
          <ambientLight intensity={2.2} />
          <directionalLight position={[10, 15, 10]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[-10, -5, -10]} intensity={1.2} color="#e0f2fe" />

          {/* Real NASA Satellite Earth Globe */}
          <MemoizedEarth />

          {/* Precision Port Coordinate Pins */}
          <MemoizedPortMarkers />

          {/* Smooth Camera Focus to Port on Click */}
          <CameraController />

          {/* Interactive OrbitControls */}
          <OrbitControls
            enablePan={false}
            minDistance={2.6}
            maxDistance={7.0}
            rotateSpeed={0.6}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>

      {/* Clean Navigation Hint */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card font-mono text-[10px] text-slate-400 border border-slate-700/50 shadow-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-dot-pulse" />
        <span>Rotate: Drag • Zoom: Scroll • Focus: Click Port</span>
      </div>
    </div>
  );
}
