import { useEffect, useState } from "react";
import type { TipoUsuarioGit } from "../../types/types";
// Tipagem TypeScript definindo o formato dos dados do usuário que virão da API

export default function Home() {
  // Para alterar o título da página:
  document.title = "Home";
  // Cria a memória do componente para guardar a lista de usuários.(altera o estado), Começa como um array vazio ([]).
  const [usuarios, setUsuarios] = useState<TipoUsuarioGit[]>([]);

  useEffect( ()=>{ //Executa o código dentro dele assim que o componente é montado.

    async function loadingData(){ // Função assíncrona para buscar os dados na API do GitHub
        
        try {
            const response = await fetch("https://api.github.com/users"); // Inicia a solicitação assíncrona à API
            
            if(!response.ok){ // Valida se o código de status HTTP está entre 200 e 299 (sucesso)
                throw new Error("A listagem de usuários falhou!");
            }

            const data:TipoUsuarioGit[] = await response.json(); // Converte o corpo da resposta de JSON para um array JavaScript
            setUsuarios(data); // Guarda os dados obtidos na memória do componente, o que faz a tela atualizar

       } catch (error) {
        console.error(error);
       }
       
    }

    loadingData(); // Chama a função de busca

  },[] );

  return (
    <main>
      <h2>Home</h2>
      <div>
        <ul>
            {usuarios.map((u,i)=>( //O map percorre a lista e cria um elemento HTML para cada usuário
            // A prop 'key' é essencial para o React identificar de forma única cada item da lista
                    <li key={i}>{u.id} - {u.login} - <img src={u.avatar_url} alt={u.login} width={30}/></li>
            ))}
        </ul>
      </div>

    </main>
  );
}
