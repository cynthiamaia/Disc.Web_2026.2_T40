import  { useState, useEffect } from "react";
import api from "../services/api";

function RegisterPost() {
  const [posts, setPosts] = useState([]);//variavel posts que guarda varios posts vindos da API, posts começa como array vazio
  //posts = []
  //buscar todos os posts
  const fetchPosts = async () => {//Essa função busca os posts no backend.
    try {
      //await api.get("/buscar"); 
      const response = await api.get("/buscar");
      setPosts(response.data);//pega os dados vindos da API e coloca dentro do posts
      console.log(posts)
    }catch (error){
      console.log("Erro")
    }
  };
  useEffect(() => {  //Quando a tela carregar, execute fetchPosts()
     fetchPosts();//// busca os posts lá no backend
    }, []);//Lista vazia = nada pra observar = roda só na abertura
//verificar com dependencias especificas - 3 tipos de effect
  const handleDelete = async (id) => {
  if (!window.confirm("Tem certeza que deseja excluir este post?")) return;
  try{
    await api.delete(`/delete/${id}`)
    setMessage("Post deletado com sucesso")
  } catch (error){
    setMessage("Erro ao deletar o post")
  }
}
 return (
   <div>
      <h3>Livros Cadastrados</h3>
      <div>
        {posts.map((post) => ( /*O map percorre cada item do array.O .map() pega a lista e passa por cada item, um por um.*/
          <div  className="list-group-item mb-3">
            <h5>Titulo: {post.title}</h5>
            <p>Content: {post.content}</p>
            <small>Autor: {post.author || "Anônimo"} </small>
          <button
                  onClick={() => handleDelete(post.id)}>Deletar
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisterPost;