import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black text-gray-100">
      <Navbar />

      <section className="max-w-5xl mx-auto py-16 px-6">
        {/* Titlul principal */}
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">
          Despre Curba Hilbert și Aplicația Fractali Hilbert
        </h1>

        {/* Introducere */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Această aplicație a fost dezvoltată pentru a oferi o vizualizare interactivă
          a <strong>Curbei Hilbert</strong> — una dintre cele mai cunoscute curbe
          care umplu spațiul (*space-filling curves*). Concepută de matematicianul
          german <strong>David Hilbert</strong> în <strong>1891</strong>, curba demonstrează
          cum o linie continuă poate atinge fiecare punct dintr-un pătrat finit, păstrând
          totodată continuitatea.
        </p>

        {/* Secțiune istorică */}
        <h2 className="text-2xl font-semibold text-white mb-4">Origine și Context Matematic</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Conceptul de „curbă care umple spațiul” a fost propus inițial de <span className="font-semibold">Giuseppe Peano</span> în 1890.
          Un an mai târziu, David Hilbert a creat o variantă mai intuitivă și geometrică, care avea
          o structură recursivă ușor de reprezentat grafic. Curba Hilbert este acum considerată un exemplu canonic de 
          <strong>funcție continuă dar nu derivabilă</strong> și reprezintă o dovadă vizuală a modului în care dimensiunile spațiale pot fi explorate prin procedee recursive.
        </p>

        {/* Ce face aplicația */}
        <h2 className="text-2xl font-semibold text-white mb-4">Ce face aplicația</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Aplicația generează dinamic Curba Hilbert la diferite ordine de complexitate,
          oferind posibilitatea de a controla culorile, ordinele fractalului și vizualizarea în timp real a procesului de
          construcție. Este realizată în <strong>Next.js</strong>, folosind <strong>React</strong> și <strong>TypeScript</strong> pentru
          interactivitate și performanță ridicată.
        </p>

        {/* Proprietăți și caracteristici */}
        <h2 className="text-2xl font-semibold text-white mb-4">Proprietăți Matematice</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-10 leading-relaxed">
          <li>Curba este o funcție continuă care mapează intervalul [0, 1] în planul unitar [0, 1]².</li>
          <li>Este una dintre cele mai simple curbe care umplu spațiul și poate fi definită recursiv pentru orice ordin.</li>
          <li>La fiecare iterație, curba se divide în patru secțiuni, rotite și reconectate astfel încât să păstreze continuitatea.</li>
          <li>Numărul de segmente crește exponențial după formula 4ⁿ, unde n este ordinul curbei.</li>
          <li>Este folosită ca exemplu canonic în analiza dimensionalității spațiilor fractale și în optimizarea structurilor de date spațiale.</li>
        </ul>

        {/* Aplicații practice */}
        <h2 className="text-2xl font-semibold text-white mb-4">Aplicații și Utilizări Practice</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-10 leading-relaxed">
          <li>Indexare spațială în baze de date geometrice și sisteme GIS (Geographic Information Systems).</li>
          <li>Compresia datelor și optimizarea memoriei în procesarea imaginilor digitale.</li>
          <li>Distribuția uniformă a punctelor în simulări numerice și analize de modelare spațială.</li>
          <li>Rutarea optimizată în rețele sau grafuri bazată pe proximitate spațială.</li>
          <li>Vizualizarea datelor multidimensionale și reducerea dimensionalității în machine learning.</li>
        </ul>

        {/* Cum funcționează */}
        <h2 className="text-2xl font-semibold text-white mb-4">Cum funcționează generarea fractală</h2>
        <p className="text-gray-300 leading-relaxed mb-10">
          Curba Hilbert este definită recursiv: fiecare nivel nou se formează prin patru copia ale nivelului anterior,
          rearanjate și rotite cu unghiuri de 90°. Punctele sunt conectate astfel încât drumul să rămână continu și fără intersecții.  
          Această auto‑similitudine face ca fractalul să prezinte un grad foarte ridicat de „compactare spațială” — fiecare mic segment reflectă structura întregii curbe.
        </p>

        {/* Link către generator */}
        <div className="text-center mt-10">
          <a
            href="/generate"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Vizualizează Curba Hilbert
          </a>
        </div>
      </section>
    </main>
  );
}