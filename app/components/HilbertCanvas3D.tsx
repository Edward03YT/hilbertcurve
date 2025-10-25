'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { HilbertCurve, Point } from '@/lib/hilbert';

interface HilbertCanvas3DProps {
  order: number;
  strokeColor?: string;
  backgroundColor?: string;
  lineWidth?: number; // 👈 nou
}

function HilbertLine({
  points,
  strokeColor = '#3B82F6',
  lineWidth = 1, // 👈 nou
}: {
  points: Point[];
  strokeColor?: string;
  lineWidth?: number;
}) {
  const lineRef = useRef<THREE.Line>(null);

  const lineObject = useMemo(() => {
    const verts: number[] = [];
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      verts.push(
        (p.x - 250) / 250,
        (p.y - 250) / 250,
        Math.sin(i * 0.03) * 0.1 // un mic val pentru efect 3D
      );
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));

    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(strokeColor),
      linewidth: lineWidth, // 👈 acum există
    });

    return new THREE.Line(geometry, material);
  }, [points, strokeColor, lineWidth]);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.rotation.x = Math.sin(clock.elapsedTime / 5) * 0.3;
      lineRef.current.rotation.y = clock.elapsedTime / 3;
    }
  });

  return <primitive ref={lineRef} object={lineObject} />;
}

export default function HilbertCanvas3D({
  order,
  strokeColor = '#3B82F6',
  backgroundColor = '#0a0a0a',
  lineWidth = 1,
}: HilbertCanvas3DProps) {
  const hilbert = useMemo(() => new HilbertCurve(order, 500), [order]);
  const points = useMemo(() => hilbert.getPoints(), [hilbert]);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 3]} intensity={0.8} />

        {/* Trimit și lineWidth către linie */}
        <HilbertLine points={points} strokeColor={strokeColor} lineWidth={lineWidth} />

        <OrbitControls enableZoom maxDistance={8} minDistance={1.5} />
      </Canvas>
    </div>
  );
}