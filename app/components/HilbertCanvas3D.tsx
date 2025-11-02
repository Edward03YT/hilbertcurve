'use client';

import React, { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { HilbertCurve, Point } from '@/lib/hilbert';

interface HilbertCanvas3DProps {
  order: number;
  size?: number;            
  strokeColor?: string;
  backgroundColor?: string;
  lineWidth?: number;
}

function HilbertLine({
  points,
  strokeColor = '#3B82F6',
  animate = false,
}: {
  points: Point[];
  strokeColor?: string;
  animate: boolean;
}) {
  const lineRef = useRef<THREE.Line>(null);
  const visible = useRef(0);
  const speed = 80; 

  // Convert Hilbert points to 3D positions
  const positions = useMemo(() => {
    const verts: number[] = [];
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      verts.push(
        (p.x - 250) / 250,
        (p.y - 250) / 250,
        Math.sin(i * 0.03) * 0.12
      );
    }
    return new Float32Array(verts);
  }, [points]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color(strokeColor),
        linewidth: 1,
      }),
    [strokeColor]
  );

  // 🔹 When animation starts
  React.useEffect(() => {
    const line = lineRef.current;
    const geo = line?.geometry as THREE.BufferGeometry | undefined;
    if (!geo) return;

    if (animate) {
      visible.current = 0;
      geo.setDrawRange(0, 0);
    } else {
 
      geo.setDrawRange(0, positions.length / 3);
    }
  }, [animate, positions]);

  // animation + rotation
  useFrame((state, delta) => {
    const line = lineRef.current;
    if (!line) return;

    const geo = line.geometry as THREE.BufferGeometry;

    if (animate && visible.current < positions.length / 3) {
      visible.current = Math.min(
        visible.current + delta * speed,
        positions.length / 3
      );
      geo.setDrawRange(0, visible.current);
    }

    // gentle oscillating rotation
    line.rotation.x = Math.sin(state.clock.elapsedTime / 5) * 0.3;
    line.rotation.y += delta * 0.2;
  });

  return <primitive ref={lineRef} object={new THREE.Line(geometry, material)} />;
}

export default function HilbertCanvas3D({
  order,
  size = 500,                     
  strokeColor = '#3B82F6',
  backgroundColor = '#0a0a0a',
  lineWidth = 1,
}: HilbertCanvas3DProps) {
  const hilbert = useMemo(() => new HilbertCurve(order, size), [order, size]);
  const points = useMemo(() => hilbert.getPoints(), [hilbert]);
  const [animate, setAnimate] = useState(false);

  const handleAnimate = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="relative border border-gray-700 rounded-lg overflow-hidden shadow-lg"
        style={{ width: size, height: size }}  //Sa fie la fel sizeu ca la 2D
      >
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
          <color attach="background" args={[backgroundColor]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 5, 3]} intensity={0.8} />
          <HilbertLine points={points} strokeColor={strokeColor} animate={animate} />
          <OrbitControls
            enableZoom
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            maxDistance={8}
            minDistance={1}
          />
        </Canvas>
      </div>

      <div className="flex justify-center gap-3">
        <button
          onClick={handleAnimate}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold shadow-md transition-colors"
        >
          Animează 3D
        </button>
      </div>

      <div className="text-sm text-gray-400 text-center">
        <div>Ordine: {order} | Puncte: {points.length} | Complexitate: {Math.pow(4, order)}</div>
        {animate && <div className="mt-1 text-xs text-blue-400">Animație în desfășurare...</div>}
      </div>
    </div>
  );
}