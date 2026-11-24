import { useContext } from "react";
import { IngredientesContext } from "../IngredientesContext";

const TagIngrediente = ({ ingrediente }) => {
  const { alternarIngrediente, ingredienteEstaSelecionado } = useContext(IngredientesContext);

  const ativo = ingredienteEstaSelecionado(ingrediente);

  return (
    <button
      type="button"
      aria-pressed={ativo}
      onClick={() => alternarIngrediente(ingrediente)}
      className={`
        font-nunito text-lg px-4 py-2 rounded-md font-bold text-center inline-block cursor-pointer transition-colors
        ${ativo ? 'bg-[#F0633C] text-white' : 'bg-creme text-gray-800'}
      `}
    >
      {ingrediente.nome}
    </button>
  );
}

export default TagIngrediente;
