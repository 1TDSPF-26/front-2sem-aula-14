// cardProduto.tsx
import type { TipoProduto } from "../../types/types";

export default function CardProduto({ nome, preco, descricao, avatar }: TipoProduto) {
    return (
        <div className="card">
            <img src={avatar} alt={nome} />
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <strong>R$ {preco.toFixed(2)}</strong>
        </div>
    );
}