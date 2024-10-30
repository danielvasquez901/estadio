// src/app/index.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Título de la Universidad */}
        <h1 className="text-3xl font-bold text-center">
          Universidad de Cundinamarca Estadio
        </h1>

        {/* Imagen personalizada */}
        <Image
          src="/images/estadio.jpg" // Asegúrate de tener la imagen en esta ruta
          alt="Estadio Universidad de Cundinamarca"
          width={600}
          height={400}
          priority
          className="rounded-lg shadow-lg"
        />

        {/* Botón de navegación a la página de visualización */}
        <Link href="/visualizar-datos">
          <a className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Ver Datos de la Base de Datos
          </a>
        </Link>
      </main>
    </div>
  );
}
