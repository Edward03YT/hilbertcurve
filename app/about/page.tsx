'use client';

import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      <Navbar />

      {/* Conținut principal */}
      <section className="grow flex flex-col px-4 sm:px-6 md:px-10 pt-28 sm:pt-36 md:pt-44 pb-16">
        <div className="w-full max-w-5xl mx-auto">
          {/* Titlu principal */}
          <h1
            className="font-extrabold mb-8 text-transparent bg-clip-text 
                       bg-linear-to-r from-blue-400 via-cyan-300 to-teal-300 drop-shadow-lg
                       wrap-break-word text-balance leading-snug
                       text-[clamp(1.5rem,3.5vw,2.6rem)]"
          >
            Despre Curba Hilbert și Aplicația Fractali Hilbert
          </h1>

          {/* Paragraf de introducere */}
          <p className="text-gray-300 text-pretty text-[clamp(0.9rem,1.4vw,1rem)]
                       leading-relaxed mb-10 sm:mb-12 hyphens-auto">
            Această aplicație a fost dezvoltată pentru a oferi o vizualizare interactivă a
            <span className="text-cyan-400 font-semibold"> Curbei Hilbert</span> — una dintre cele
            mai cunoscute curbe care umplu spațiul. Concepută de matematicianul 
            german <strong>David Hilbert</strong> în <strong>1891</strong>, curba demonstrează 
            cum o linie continuă poate atinge toate punctele dintr‑un pătrat finit, păstrând continuitatea și auto‑similitudinea recursivă.
          </p>

          {/* Origine */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-3">
            Origine și Context Matematic
          </h2>
          <p className="text-gray-300 text-[clamp(0.9rem,1.3vw,1rem)] leading-relaxed mb-10 hyphens-auto">
            Ideea curbelor care umplu spațiul a fost propusă de 
            <strong>Giuseppe Peano</strong> în 1890. Un an mai târziu, <strong>David Hilbert</strong> a conceput 
            o formă geometrică recursivă și intuitivă. Curba Hilbert a devenit un exemplu canonic de 
            <strong>funcție continuă, dar nederivabilă</strong>,
             oferind o imagine vizuală convingătoare a conceptului de „dimensiune fracțională”.
          </p>

          {/* Ce face aplicația */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-3">
            Ce face aplicația
          </h2>
          <p className="text-gray-300 text-[clamp(0.9rem,1.3vw,1rem)] leading-relaxed mb-10 hyphens-auto">
            Aplicația generează Curba Hilbert pentru ordine variate de complexitate și permite 
            controlul culorilor, al fundalului și al vizualizării în timp real. Este dezvoltată 
            cu <strong>Next.js</strong>, <strong>React</strong> și <strong>TypeScript</strong>, 
            asigurând o experiență fluidă și interactivă în browser.
          </p>

          {/* Proprietăți */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-3">
            Proprietăți Matematice
          </h2>
          <ul className="list-disc list-inside text-gray-400 text-[clamp(0.9rem,1.3vw,1rem)]
                         leading-relaxed mb-10 ml-5 space-y-1 sm:space-y-2">
            <li>Funcție continuă care mapează intervalul [0, 1] în [0, 1]².</li>
            <li>Se poate defini recursiv pentru orice ordin al curbei.</li>
            <li>Fiecare iterație adaugă patru copii rotite ale curbei anterioare.</li>
            <li>Numărul de segmente crește exponențial după formula 4ⁿ.</li>
            <li>Exemplu canonic de formă fractală auto‑similară și compactă.</li>
          </ul>

          {/* Aplicații practice */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-3">
            Aplicații Practice
          </h2>
          <ul className="list-disc list-inside text-gray-400 text-[clamp(0.9rem,1.3vw,1rem)]
                         leading-relaxed mb-10 ml-5 space-y-1 sm:space-y-2">
            <li>Indexare spațială în baze de date și sisteme GIS.</li>
            <li>Compresie și procesare de imagini digitale.</li>
            <li>Distribuții uniforme în simulări numerice 2D/3D.</li>
            <li>Rutare eficientă în rețele bazată pe proximitate.</li>
            <li>Vizualizarea datelor multidimensionale în machine learning.</li>
          </ul>

          {/* Cum funcționează */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-3">
            Cum funcționează generarea fractală
          </h2>
          <p className="text-gray-300 text-[clamp(0.9rem,1.3vw,1rem)] leading-relaxed mb-12 hyphens-auto">
            Curba Hilbert se generează recursiv: fiecare nivel este format din patru copii ale nivelului anterior 
            rotite cu 90° și legate fără intersecții. Această auto‑similitudine demonstrează modul în care 
            o structură complexă poate emerge din reguli simple și repetabile.
          </p>

          {/* Buton final */}
          <div className="mt-8">
            <a
              href="/generate"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white 
                         px-6 sm:px-8 py-3 rounded-lg 
                         text-[clamp(1rem,1.4vw,1.15rem)] 
                         font-semibold shadow-md transition-colors"
            >
              Vizualizează Curba Hilbert
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-xs sm:text-sm md:text-base border-t border-gray-800 py-4 sm:py-6 px-3 sm:px-6 mt-auto">
        © 2025 <span className="text-blue-400 font-semibold">Fractali Hilbert</span>
      </footer>
    </main>
  );
}