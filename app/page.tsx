'use client';

import Navbar from './components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black text-white flex flex-col">
      <Navbar />

      {/* Secțiunea principală */}
      <section className="grow flex flex-col items-center justify-center text-center px-6 pt-32 sm:pt-40 pb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
          Vizualizează Fractali — Curba lui Hilbert
        </h1>

        {/* Text explicativ despre proiect */}
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Acest proiect a fost realizat pentru materia{" "}
          <span className="text-cyan-400 font-semibold">Fractali</span> din cadrul{" "}
          <span className="text-cyan-300 font-semibold">
            Facultății de Științe Aplicate (FSA)
          </span>, 
          <span className="text-cyan-400 font-semibold">Anul IV</span>. Proiectul este susținut de{" "}
          <span className="text-blue-400 font-semibold">Crăciun Andrei Eduard</span>, 
          Grupa 1341. Tema aleasă —{" "}
          <span className="text-cyan-400 font-semibold">Curba Hilbert</span> — ilustrează cum un algoritm recursiv
          poate genera o structură fractală care umple complet un spațiu bidimensional, evidențiind
          legătura dintre geometrie, matematică și vizualizare computatională.
        </p>

        {/* Butoane */}
        <div className="flex justify-center flex-wrap gap-5 mt-4">
          <Link
            href="/generate"
            className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Începe Vizualizarea</span>
            <span className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
          </Link>

          <Link
            href="/about"
            className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300"
          >
            Află mai multe
          </Link>
        </div>
      </section>

      {/* Elemente vizuale de fundal */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-600 opacity-30 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-[15%] w-60 h-60 bg-cyan-600 opacity-25 blur-[100px] rounded-full" />

      {/* Footer simplu */}
      <footer className="text-center text-gray-500 text-sm border-t border-gray-800 py-6">
        © 2025{" "}
        <span className="text-blue-400 font-semibold">Fractali Hilbert</span> —{" "}
        <a
          href="https://github.com/Edward03YT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition-colors"
        >
          github.com/Edward03YT
        </a>
      </footer>
    </main>
  );
}