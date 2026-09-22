import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";


export default function Produtos() {
    // Para alterar o título da página:
    document.title = "Produtos"


    const [produtos, setprodutos] = useState<TipoProduto[]>([]);

    useEffect( ()=>{
        
        const carregarProdutos = async () => {
            
            try {
                const response = await fetch("http://localhost:3001/produtos");

                if(!response.ok){
                    throw new Error("A listagem de produtos teve um erro!");
                }

                const data:TipoProduto[] = await response.json();
                console.log(data);

            } catch (error) {
                console.error(error);
            }
        
        }

        carregarProdutos();


    },[]);

    //Apresente a lista de produtos em CARDS utilizando Props...

    return (
        <main>
            <h2>Produtos.</h2>
        </main>
    )
}
