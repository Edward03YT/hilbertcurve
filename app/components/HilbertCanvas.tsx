'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Point } from '@/lib/hilbert';

interface HilbertCanvasProps {
  order: number;
  size?: number;
  strokeColor?: string;
  backgroundColor?: string;
  animationSpeed?: number;
  showPoints?: boolean;
}

export default function HilbertCanvas({
  order,
  size = 500,
  strokeColor = '#3B82F6',
  backgroundColor = '#1F2937',
  animationSpeed = 1000,
  showPoints = false
}: HilbertCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | undefined>(undefined); 

  useEffect(() => {
    fetchHilbertCurve();
    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [order, size]);

  // Actualizare canvas culori sau pctshow
  useEffect(() => {
    if (points.length > 0) {
      drawCurve(points);
    }
  }, [strokeColor, backgroundColor, showPoints, points]);

  const fetchHilbertCurve = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/hilbert?order=${order}&size=${size}`);
      const data = await response.json();
      
      if (data.success) {
        setPoints(data.data.points);
        drawCurve(data.data.points);
      }
    } catch (error) {
      console.error('Error fetching Hilbert curve:', error);
    } finally {
      setLoading(false);
    }
  };

  const drawCurve = (curvePoints: Point[], animated = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (curvePoints.length === 0) return;

    // Setup line style
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = Math.max(1, 5 - order);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (animated && !isAnimating) {
      animateCurve(ctx, curvePoints);
    } else {
      // Draw complete curve
      ctx.beginPath();
      ctx.moveTo(curvePoints[0].x, curvePoints[0].y);
      
      for (let i = 1; i < curvePoints.length; i++) {
        ctx.lineTo(curvePoints[i].x, curvePoints[i].y);
      }
      
      ctx.stroke();

      // Draw points 
      if (showPoints) {
        drawPoints(ctx, curvePoints);
      }
    }
  };

  const animateCurve = (ctx: CanvasRenderingContext2D, curvePoints: Point[]) => {
    setIsAnimating(true);
    let currentIndex = 0;
    
    // Clear previous animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Clear canvas before animation
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    
    const animate = () => {
      if (currentIndex >= curvePoints.length - 1) {
        setIsAnimating(false);
        animationRef.current = undefined;
        if (showPoints) {
          drawPoints(ctx, curvePoints);
        }
        return;
      }

      // Draw line segment
      ctx.beginPath();
      ctx.moveTo(curvePoints[currentIndex].x, curvePoints[currentIndex].y);
      ctx.lineTo(curvePoints[currentIndex + 1].x, curvePoints[currentIndex + 1].y);
      ctx.stroke();

      currentIndex++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  const drawPoints = (ctx: CanvasRenderingContext2D, curvePoints: Point[]) => {
    ctx.fillStyle = '#EF4444';
    curvePoints.forEach((point, index) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
      ctx.fill();
      
      // Draw index for first few points
      if (index < 10 && order <= 2) {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '10px Arial';
        ctx.fillText(index.toString(), point.x + 5, point.y - 5);
        ctx.fillStyle = '#EF4444';
      }
    });
  };

  const handleAnimate = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
    setIsAnimating(false);
    drawCurve(points, true);
  };

  const handleReset = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
    setIsAnimating(false);
    drawCurve(points);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `hilbert-curve-order-${order}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="border border-gray-600 rounded-lg shadow-2xl"
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-2"></div>
              <div className="text-white">Generare fractal...</div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={handleAnimate}
          disabled={isAnimating || loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isAnimating ? 'Animație în curs...' : 'Animează'}
        </button>
        
        <button
          onClick={handleReset}
          disabled={loading}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Reset
        </button>

        <button
          onClick={handleDownload}
          disabled={loading || points.length === 0}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Descarcă PNG
        </button>
      </div>

      <div className="text-sm text-gray-400 text-center">
        <div>Ordine: {order} | Puncte: {points.length} | Complexitate: {Math.pow(4, order)}</div>
        {isAnimating && (
          <div className="mt-1 text-xs text-blue-400">Animație în desfășurare...</div>
        )}
      </div>
    </div>
  );
}