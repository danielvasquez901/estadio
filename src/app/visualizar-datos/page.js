// src/app/visualizar-datos/page.js
"use client"; // Agrega esta línea al inicio del archivo

import { useEffect, useState } from "react";

export default function VisualizarDatos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Obtener los datos de la API
    const fetchData = async () => {
      const response = await fetch("/api/get-data");
      const result = await response.json();
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Datos de Humedad</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Humedad</th>
            <th className="border border-gray-300 px-4 py-2">Hora</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.humedad}</td>
              <td className="border border-gray-300 px-4 py-2">{item.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
