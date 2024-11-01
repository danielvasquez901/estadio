import 'dotenv/config'; // Asegúrate de cargar las variables de entorno
import pool from './lib/db.js'; // Asegúrate de que la ruta a `db.js` sea correcta

async function insertRandomData() {
  try {
    const humedad = (Math.random() * 100).toFixed(2);
    const queryText = `
      INSERT INTO humidity_data (humedad) VALUES ($1)
    `;

    await pool.query(queryText, [humedad]);
    console.log(`Dato aleatorio agregado: ${humedad}`);
  } catch (error) {
    console.error('Error al agregar dato:', error);
  }
}

// Ejecutar la función cada 15 segundos
setInterval(insertRandomData, 15000);

console.log('Iniciando la inserción de datos cada 15 segundos');
