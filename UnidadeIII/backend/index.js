import express from "express";
import mysql from "mysql2/promise";//Usa o estilo async/await — mais moderno:
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
app.post("/posts", async (req, res) => {
  //Quando alguém enviar dados para essa URL, essa função executa. O async permite usar await dentro dela.
  try {
    const { title, content, author } = req.body;//Pega os dados enviados no corpo da requisição e separa em 3 variáveis.

    if (!title || !content) {
      return res.status(400).json({
        error: "Campos obrigatorios: title, content"
      }); 
    }

    await db.execute(//O await faz o código esperar a resposta do banco antes de dizer que deu certo
      "INSERT INTO autores (title, content, author) VALUES (?, ?, ?)",
      [title, content, author]
    );
    //Executa o comando SQL no banco de dados. 
    //Os ? são placeholders. Funcionam como: espaços reservados.
    res.status(200).json({//Se tudo deu certo, retorna 200 (OK) com mensagem de sucesso.
      message: "Post criado com sucesso!"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Erro interno do servidor"
    });
  }
});
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//Promise é uma forma do JavaScript lidar com operações que demoram um tempo para terminar, como:
//Consultas ao banco de dados
//Requisições HTTP
//Leitura de arquivos