import express from "express";
import cors from "cors";
//Os navegadores têm uma política de segurança chamada Same-Origin Policy que bloqueia requisições HTTP entre domínios diferentes. Por exemplo, se seu frontend está em http://localhost:3000 e sua API em http://localhost:5000, o navegador bloquearia essas requisições por padrão.
//O cors() adiciona os headers necessários para permitir isso:
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
app.use(cors());

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
//Convenção REST — a URL identifica qual recurso você quer afetar, e o corpo carrega o que mudar:
app.put("/put/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const { title, content, author } = req.body;

    await db.execute(
      "UPDATE autores SET title = ?, content = ?, author = ? WHERE id = ?",
      [title, content, author, id]
    );

    res.status(200).json({
      message: "put atualizado com sucesso"
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Erro interno do servidor"
    });

  }
});
app.delete("/delete/:id", async (req, res) => {

  try {

    const { id } = req.params;

    await db.execute(
      "DELETE FROM autores WHERE id = ?",
      [id]
    );

    res.status(200).json({
      message: "Post deletado com sucesso"
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Erro interno do servidor"
    });

  }

});
app.get("/buscar", async (req, res) => {

  try {

    const [rows] = await db.execute(//rows é o resultado das linhas retornadas pela consulta SQL.
      "SELECT * FROM autores"
    );

    res.json(rows);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      erro: "Erro no servidor"
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