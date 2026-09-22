import { useEffect, useState } from "react"
import type { tipoProduto } from "../../types/types";

export default function Produtos() {
  document.title = "Home"

  const [produtos, setProdutos] = useState<tipoProduto[]>([]);

  useEffect( ()=>{
    const carregarProdutos = async ()=> {

      try{
        const response = await fetch("http://localhost:3001/produtos");
        
        if(!response.ok){
          throw new Error("Erro na listagem dos produtos");
        }

        const data:tipoProduto[] = await response.json();

        console.log(data);

      } catch (error){
        console.error(error);
      }

    }

    //carregarProdutos();

  }, []);

  //apresente a lista de produtos em cards, utilizando props

  return (
    <main>
        <h2>Produtos</h2>

    </main>
  )
}
