import express from "express";
import mysql from "mysql2/promise";
// Conexão com MySQL
const db = await mysql.createConnection({//criar conexão com o banco MySQ
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "Aula_banco",
});
//Guarda a conexão em uma variável chamada db
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API com MySQL rodando!");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
