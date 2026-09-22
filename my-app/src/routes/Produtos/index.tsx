import { useEffect, useState } from "react"
import type { TipoProduto } from "../../types/types";
import CardProduto from "../../components/CardProduto/cardProduto";

export default function Produtos(){
    document.title = "Produtos"

    const [produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(() => {

        const carregaProdutos = async () => {

            try {
                const response = await fetch("http://localhost:3001/produtos");

                if(!response.ok){
                    throw new Error("Erro na listagem dos produtos");
                }

                const data: TipoProduto[] = await response.json();
                setProdutos(data);

            } catch (error){
                console.error(error);
            }

        }

        carregaProdutos();

    },[]);

    return(
        <main>
            <h2>Produtos</h2>
            <div className="lista-produtos">
                {produtos.map((produto) => (
                    <CardProduto key={produto.id} {...produto} />
                ))}
            </div>
        </main>
    )
}