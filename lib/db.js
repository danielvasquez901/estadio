import pkg from 'pg';
const { Pool } = pkg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL no está definida. Asegúrate de configurarla en el entorno.");
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }, // Importante si usas una base de datos en la nube
});

export default pool;
