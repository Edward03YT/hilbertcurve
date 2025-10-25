'use client';

import Navbar from './components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      <Navbar />

      {/* Secțiune principală */}
      <section className="grow flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 pt-28 sm:pt-36 md:pt-44 pb-16">
        {/* Titlu mai mic și proporțional */}
        <h1
          className="font-extrabold mb-5 text-transparent bg-clip-text 
               bg-linear-to-r from-blue-400 via-cyan-300 to-teal-300 drop-shadow-lg
               wrap-break-word text-balance leading-snug
               text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,3.5vw,3.5rem)] 
               max-w-[90vw]"
        >
          Vizualizează Fractali — Curba lui Hilbert
        </h1>

        {/* Text explicativ */}
        <p
          className="text-gray-300 text-pretty text-justify sm:text-center 
                     text-[clamp(0.9rem,1.8vw,1.25rem)]
                     max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 
                     mx-auto leading-relaxed sm:leading-loose mb-10 sm:mb-12 
                     hyphens-auto wrap-break-word px-3 sm:px-6"
        >
          Acest proiect a fost realizat pentru materia{' '}
          <span className="text-cyan-400 font-semibold">Fractali</span> din cadrul{' '}
          <span className="text-cyan-300 font-semibold">
            Facultății de Științe Aplicate (FSA)
          </span>,
          <span className="text-cyan-400 font-semibold">Anul IV</span>. Proiectul este susținut de{' '}
          <span className="text-blue-400 font-semibold">Crăciun Andrei Eduard</span>, Grupa 1341.
          Tema aleasă —{' '}
          <span className="text-cyan-400 font-semibold">Curba Hilbert</span> — ilustrează cum un algoritm recursiv
          poate genera o structură fractală care umple complet un spațiu bidimensional, evidențiind
          conexiunea dintre matematică, geometrie și vizualizarea computatională modernă.
        </p>

        {/* Butoane */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
          <Link
            href="/generate"
            className="group relative bg-blue-600 hover:bg-blue-700 text-white 
                       px-6 sm:px-8 md:px-10 py-3 rounded-lg 
                       text-[clamp(1rem,1.6vw,1.25rem)] 
                       font-semibold shadow-md transition-all duration-300 
                       overflow-hidden w-11/12 sm:w-auto"
          >
            <span className="relative z-10">Începe Vizualizarea</span>
            <span className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </Link>

          <Link
            href="/about"
            className="border border-blue-500 text-blue-400 
                       hover:bg-blue-500 hover:text-white 
                       px-6 sm:px-8 md:px-10 py-3 rounded-lg 
                       text-[clamp(1rem,1.6vw,1.25rem)] 
                       font-semibold shadow-md transition-colors duration-300 
                       w-11/12 sm:w-auto"
          >
            Află mai multe
          </Link>
        </div>
      </section>

      {/* Fundal decorativ */}
      <div className="absolute -z-10 top-10 sm:top-20 left-1/2 sm:left-[20%]
                      -translate-x-1/2 sm:translate-x-0
                      w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96
                      bg-blue-600 opacity-20 sm:opacity-30 blur-[90px] sm:blur-[130px] rounded-full"></div>

      <div className="absolute -z-10 bottom-10 right-1/2 sm:right-[20%]
                      translate-x-1/2 sm:translate-x-0
                      w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80
                      bg-cyan-600 opacity-20 sm:opacity-25 blur-[90px] sm:blur-[130px] rounded-full"></div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-xs sm:text-sm md:text-base 
                         border-t border-gray-800 py-4 sm:py-6 px-3 sm:px-6 mt-auto">
        © 2025
        <span className="text-blue-400 font-semibold">Fractali Hilbert</span> —
        <a
          href="https://github.com/Edward03YT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition-colors"
        >
          github.com/Edward03YT
        </a>
      </footer>
    </main >
  );
}