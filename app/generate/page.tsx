'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HilbertCanvas from '../components/HilbertCanvas';
import HilbertCanvas3D from '../components/HilbertCanvas3D';
import Controls from '../components/Controls';

export default function GeneratePage() {
  const [order, setOrder] = useState(3);
  const [strokeColor, setStrokeColor] = useState('#3B82F6');
  const [backgroundColor, setBackgroundColor] = useState('#1F2937');
  const [showPoints, setShowPoints] = useState(false);
  const [is3D, setIs3D] = useState(false);
  const [lineWidth, setLineWidth] = useState(1);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      {/* conținut derulabil */}
      <div className="grow overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Titlu */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
              Generator Curba Hilbert
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Experimentează ordine, culori, animații și chiar vizualizări 3D ale fractalului Hilbert.
              Poți ajusta parametrii geometrici și culorile pentru a înțelege vizual procesul recursiv al curbei Hilbert.
            </p>
          </div>

          {/* Comutator 2D / 3D */}
          <div className="flex justify-center mb-8">
            <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={is3D}
                onChange={(e) => setIs3D(e.target.checked)}
                className="w-4 h-4 accent-blue-500"
              />
              Vizualizare 3D
            </label>
          </div>

          {/* Layout principal */}
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Canvas */}
            <div className="lg:col-span-2 flex justify-center w-full">
              {is3D ? (
                <HilbertCanvas3D
                  order={order}
                  strokeColor={strokeColor}
                  backgroundColor={backgroundColor}
                  lineWidth={lineWidth}
                />
              ) : (
                <HilbertCanvas
                  order={order}
                  size={600}
                  strokeColor={strokeColor}
                  backgroundColor={backgroundColor}
                  showPoints={showPoints}
                />
              )}
            </div>

            {/* Panou de control */}
            <div className="lg:col-span-1 sticky top-28 self-start">
              <Controls
                order={order}
                setOrder={setOrder}
                strokeColor={strokeColor}
                setStrokeColor={setStrokeColor}
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                showPoints={showPoints}
                setShowPoints={setShowPoints}
                is3D={is3D}
                lineWidth={lineWidth}
                setLineWidth={setLineWidth}
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm border-t border-gray-800 py-6">
        © 2025 <span className="text-blue-400 font-semibold">Fractali Hilbert</span>
      </footer>
    </main>
  );
}