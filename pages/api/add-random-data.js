// pages/api/add-random-data.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    // Generar un valor de humedad aleatorio entre 0 y 100
    const humedad = (Math.random() * 100).toFixed(2);

    // Insertar el valor en la base de datos
    const queryText = `
      INSERT INTO humidity_data (humedad) VALUES ($1)
    `;

    await pool.query(queryText, [humedad]);

    res.status(200).json({ message: 'Dato aleatorio agregado correctamente', humedad });
  } catch (error) {
    console.error('Error al agregar dato:', error);
    res.status(500).json({ error: 'Error al agregar dato' });
  }
}

