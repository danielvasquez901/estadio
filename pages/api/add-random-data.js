// pages/api/add-random-data.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  // Verificar si se ha iniciado un intervalo para evitar duplicados
  if (!global.intervalStarted) {
    global.intervalStarted = true;

    setInterval(async () => {
      try {
        // Generar un valor de humedad aleatorio entre 0 y 100
        const humedad = (Math.random() * 100).toFixed(2);

        // Insertar el valor en la base de datos
        const queryText = `
          INSERT INTO humidity_data (humedad) VALUES ($1)
        `;

        await pool.query(queryText, [humedad]);
        console.log(`Dato aleatorio agregado: ${humedad}`);
      } catch (error) {
        console.error('Error al agregar dato:', error);
      }
    }, 15000); // Intervalo de 15 segundos
  }

  res.status(200).json({ message: 'Iniciado el envío de datos cada 15 segundos' });
}
