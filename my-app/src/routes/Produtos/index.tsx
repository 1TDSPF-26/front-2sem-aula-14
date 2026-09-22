import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";




export default function Produtos() {
    /* Para alterar o título da página */
    document.title = "Produtos"

    const[produtos,setProdutos] = useState<TipoProduto[]>([]);

    useEffect(()=>{

      const carregaProdutos = async ()=>{
        try {
        const response = await fetch("http://localhost:3001/produtos")

        if (!response.ok){
            throw new Error ("Erro na listagem dos produtos!")
        }

        const data:TipoProduto[] = await response.json();


        }catch(error){
          console.error(error);
        }
      

      }

      carregaProdutos();

    },[]);

  //Apresente a lista de produtos em CARDS utilizando PROPS
  return (
      <main><h2>Produtos</h2></main>
  )
}