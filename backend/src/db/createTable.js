import pool from "./db";

const createUserTable = async () => {
  const sqlText = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
    `;

  try {
    const ctx = await pool.query(sqlText);
    console.log("user Table Create If not E");
  } catch (err) {
    console.log("Failed to create Table", err);
  }
};
