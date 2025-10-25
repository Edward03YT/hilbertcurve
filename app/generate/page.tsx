'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HilbertCanvas from '../components/HilbertCanvas';
import Controls from '../components/Controls';

export default function GeneratePage() {
  const [order, setOrder] = useState(3);
  const [strokeColor, setStrokeColor] = useState('#3B82F6');
  const [backgroundColor, setBackgroundColor] = useState('#1F2937');
  const [showPoints, setShowPoints] = useState(false);

  return (
    <main className="min-h-screen bg-gray-900 py-8 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">
            Generator Curba Hilbert
          </h1>
          <p className="text-gray-400">
            Experimentează diferite ordine, culori și animații pentru fractalul Hilbert
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Canvas */}
          <div className="lg:col-span-2 flex justify-center">
            <HilbertCanvas
              order={order}
              size={600}
              strokeColor={strokeColor}
              backgroundColor={backgroundColor}
              showPoints={showPoints}
            />
          </div>

          {/* Controls */}
          <div className="lg:col-span-1">
            <Controls
              order={order}
              setOrder={setOrder}
              strokeColor={strokeColor}
              setStrokeColor={setStrokeColor}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              showPoints={showPoints}
              setShowPoints={setShowPoints}
            />
          </div>
        </div>
      </div>
    </main>
  );
}