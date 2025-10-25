'use client';

import React from 'react';

interface ControlsProps {
  order: number;
  setOrder: (order: number) => void;
  strokeColor: string;
  setStrokeColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  showPoints: boolean;
  setShowPoints: (show: boolean) => void;

  // ⚙️ prop‑uri suplimentare pentru modul 3D
  is3D?: boolean;
  lineWidth?: number;
  setLineWidth?: (w: number) => void;
}

export default function Controls({
  order,
  setOrder,
  strokeColor,
  setStrokeColor,
  backgroundColor,
  setBackgroundColor,
  showPoints,
  setShowPoints,
  is3D = false,
  lineWidth = 1,
  setLineWidth,
}: ControlsProps) {
  const presetColors = [
    '#3B82F6',
    '#10B981',
    '#F59E0B',
    '#EF4444',
    '#8B5CF6',
    '#EC4899',
    '#14B8A6',
    '#F97316',
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl space-y-6">
      <h2 className="text-xl font-bold text-white mb-4">Controale Fractal</h2>

      {/* Ordinul curbei */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Ordinul Curbei: {order}
        </label>
        <input
          type="range"
          min="1"
          max="7"
          value={order}
          onChange={(e) => setOrder(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1</span>
          <span>4</span>
          <span>7</span>
        </div>
      </div>

      {/* Grosime Linie (vizibil doar în modul 3D) */}
      {is3D && setLineWidth && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Grosime Linie: {lineWidth.toFixed(1)}
          </label>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Subțire</span>
            <span>Gros</span>
          </div>
        </div>
      )}

      {/* Culoarea liniei */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Culoare Linie
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="color"
            value={strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
            className="h-10 w-20 rounded cursor-pointer"
          />
          <div className="flex space-x-1 flex-wrap">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => setStrokeColor(color)}
                className="w-8 h-8 rounded border-2 border-gray-600 hover:border-white transition-colors"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fundal */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Culoare Fundal
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="h-10 w-20 rounded cursor-pointer"
          />
          <div className="flex space-x-2">
            <button
              onClick={() => setBackgroundColor('#1F2937')}
              className="px-3 py-1 bg-gray-700 text-white text-sm rounded hover:bg-gray-600"
            >
              Întunecat
            </button>
            <button
              onClick={() => setBackgroundColor('#FFFFFF')}
              className="px-3 py-1 bg-white text-gray-800 text-sm rounded hover:bg-gray-100"
            >
              Luminos
            </button>
            <button
              onClick={() => setBackgroundColor('#000000')}
              className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-900 border border-gray-600"
            >
              Negru
            </button>
          </div>
        </div>
      </div>

      {/* Afișează punctele – doar pentru 2D */}
      {!is3D && (
        <label className="flex items-center space-x-2 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={showPoints}
            onChange={(e) => setShowPoints(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-700 rounded"
          />
          <span className="text-sm">Afișează punctele</span>
        </label>
      )}

      {/* Info */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-300 mb-2">Informații</h3>
        <div className="space-y-1 text-xs text-gray-400">
          <p>• Segmente: {Math.pow(4, order) - 1}</p>
          <p>• Puncte: {Math.pow(4, order)}</p>
          <p>• Dimensiune grilă: {Math.pow(2, order)} × {Math.pow(2, order)}</p>
        </div>
      </div>

      {/* Presetări rapide */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 mb-2">Presetări Rapide</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setOrder(3);
              setStrokeColor('#3B82F6');
              setBackgroundColor('#1F2937');
            }}
            className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            Clasic
          </button>
          <button
            onClick={() => {
              setOrder(4);
              setStrokeColor('#10B981');
              setBackgroundColor('#000000');
            }}
            className="px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
          >
            Matrix
          </button>
          <button
            onClick={() => {
              setOrder(5);
              setStrokeColor('#F59E0B');
              setBackgroundColor('#1F2937');
            }}
            className="px-3 py-2 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700"
          >
            Auriu
          </button>
          <button
            onClick={() => {
              setOrder(6);
              setStrokeColor('#8B5CF6');
              setBackgroundColor('#000000');
            }}
            className="px-3 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
          >
            Neon
          </button>
        </div>
      </div>
    </div>
  );
}