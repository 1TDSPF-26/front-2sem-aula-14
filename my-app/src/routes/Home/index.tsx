import { useEffect, useState } from "react";
import type { TipoUsuarioGit } from "../../types/types";


export default function Home() {
  // Para alterar o título da página:
  document.title = "Home";

  const [usuarios, setUsuarios] = useState<TipoUsuarioGit[]>([]);

  useEffect( ()=>{

    async function loadingData(){
        
        try {
            const response = await fetch("https://api.github.com/users");
            
            if(!response.ok){
                throw new Error("A listagem de usuários falhou!");
            }

            const data:TipoUsuarioGit[] = await response.json();
            setUsuarios(data);

       } catch (error) {
        console.error(error);
       }
       
    }

    loadingData();

  },[] );

  return (
    <main>
      <h2>Home</h2>
      <div>
        <ul>
            {usuarios.map((u,i)=>(
                    <li key={i}>{u.id} - {u.login} - <img src={u.avatar_url} alt={u.login} width={30}/></li>
            ))}
        </ul>
      </div>

    </main>
  );
}