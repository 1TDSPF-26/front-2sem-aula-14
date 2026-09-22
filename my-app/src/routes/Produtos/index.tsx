import { useEffect, useState } from "react"
import type { tipoProduto } from "../../Types/types";

export default function Produtos() {
    // Para alterar o título da página:
    document.title = "Produtos"

    const[produtos,setProdutos] = useState<tipoProduto[]>([]);

    useEffect (()=>{

        const carregarProdutos = async() =>{
            try{
                const response = await fetch("http://localhost:3001/produtos");
                if (!response.ok){
                    throw new Error ("Erro na listagem dos Produtos");
                }
                const data:tipoProduto = await response.json();
                console.log(data);

            }catch(error){
                console.log(error);
            }
        }
        carregarProdutos();

    },[])



    return (
        <main>
            <h2>Produtos</h2>
        </main>
    )
}
