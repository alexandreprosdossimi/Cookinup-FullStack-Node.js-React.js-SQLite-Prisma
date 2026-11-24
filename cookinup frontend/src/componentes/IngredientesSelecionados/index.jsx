import { useContext } from "react";
import TagIngrediente from "../TagIngrediente";
import { IngredientesContext } from "../IngredientesContext";

const IngredientesSelecionados = () => {
    // Pegando a lista REAL e a função de remover do Contexto
    const { ingredientesSelecionados, alternarIngrediente } = useContext(IngredientesContext);

    // Se a lista estiver vazia, não renderiza nada na tela!
    if (ingredientesSelecionados.length === 0) {
        return null;
    }

    return (
        <section className="mb-20">
            <h3 className="text-[#F0633C] text-center font-nunito text-[31px] mb-6 leading-[150%]">
                Sua lista:
            </h3>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
                {ingredientesSelecionados.map((ingrediente) => (
                    <div 
                        key={ingrediente.id} 
                        className="flex flex-col items-center gap-1"
                    >
                        {/* A tag já sabe ficar laranja sozinha por causa do contexto! */}
                        <TagIngrediente ingrediente={ingrediente} />
                        
                        <button
                            type="button"
                            aria-label={`Remover ${ingrediente.nome} da lista`}
                            className="text-[#D1451E] font-nunito text-[12.5px] flex items-center gap-1 cursor-pointer"
                            onClick={() => alternarIngrediente(ingrediente)}
                        >
                            <img src="/icones/close.png" alt="remover" className="w-3" /> Remover
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default IngredientesSelecionados;
