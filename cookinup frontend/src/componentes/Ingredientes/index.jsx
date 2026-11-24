import { useContext, useState } from "react";
import CardIngrediente from "../CardIngrediente";
import BotaoPrincipal from "../BotaoPrincipal";
import IngredientesSelecionados from "../IngredientesSelecionados"; 
import { IngredientesContext } from "../IngredientesContext";

const Ingredientes = () => {
    const { categorias, buscaCategorias, carregando, erroBusca } = useContext(IngredientesContext);
    
    const [termoBusca, setTermoBusca] = useState("");

    const handleBusca = (evento) => {
        evento.preventDefault();
        buscaCategorias(termoBusca);
    };

    return (
        <section className="bg-creme rounded-t-[60px] py-[100px] px-4 md:px-[120px]" aria-labelledby="titulo-ingredientes">
            <IngredientesSelecionados />
            
            <h1 id="titulo-ingredientes" className="text-verde-medio text-center font-paytone text-[37px] leading-[120%]">
                Ingredientes
            </h1>
            <p className="text-[#444444] text-center font-nunito text-[22px] my-8 leading-[150%]">
                Selecione abaixo os ingredientes que quer usar nesta receita:
            </p>
            
            <form onSubmit={handleBusca} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <input 
                    type="text" 
                    id="busca-categoria"
                    aria-label="Buscar categoria de ingredientes"
                    placeholder="Ex: Laticínios..."
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                    className="w-full sm:w-[400px] px-6 py-4 rounded-full border-2 border-verde-medio 
                               text-lg font-nunito text-[#444444] bg-transparent 
                               outline-none focus:ring-4 focus:ring-verde-medio/30 transition-all"
                />
                <BotaoPrincipal texto="Buscar Categoria" type="submit" disabled={carregando} />
            </form>

            {carregando ? (
                <p role="status" className="text-center font-nunito text-lg text-verde-medio py-10">Carregando categorias...</p>
            ) : erroBusca ? (
                <div role="alert" className="text-center font-nunito text-lg text-[#F0633C] py-10">
                    <p>{erroBusca}</p>
                    <button type="button" onClick={() => buscaCategorias(termoBusca)} className="mt-4 underline font-bold">Tentar novamente</button>
                </div>
            ) : categorias.length > 0 ? (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
                    {categorias.map((categoria) => (
                        <CardIngrediente key={categoria.id} categoria={categoria} />
                    ))}
                </section>
            ) : (
                <div className="text-center font-nunito text-lg text-[#F0633C] py-10">
                    Nenhuma categoria encontrada com esse nome.
                </div>
            )}

        </section>
    );
}

export default Ingredientes;
