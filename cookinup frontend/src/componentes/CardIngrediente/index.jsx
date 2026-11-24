import TagIngrediente from '../TagIngrediente';

const CardIngrediente = ({ categoria }) => {
    return (
        <div
            className="flex flex-col items-center
       justify-center bg-white rounded-3xl p-8
       shadow-lg gap-6 hover:scale-105
       transition-transform">
         <div className="flex flex-col items-center gap-2">
             <img
                src={categoria.icone}
                alt={categoria.nome}
                className="w-16 h-16"
            />
            <h4 className='font-paytone text-xl text-verde-medio text-center'>
                {categoria.nome}
            </h4>
         </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {categoria.ingredientes.map((ingrediente) => (
                    <TagIngrediente key={ingrediente.nome} ingrediente={ingrediente} />
                ))}
            </div>
        </div>
    );
}

export default CardIngrediente;