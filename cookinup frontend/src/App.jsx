import Cabecalho from "./componentes/Cabecalho";
import Ingredientes from "./componentes/Ingredientes";
import { IngredientesProvider } from "./componentes/IngredientesContext";
import Rodape from "./componentes/Rodape";

function App() {

  return (
    <IngredientesProvider>
      <div className="min-h-screen bg-verde-escuro bg-fundo bg-top bg-repeat bg-[length:100%_auto]">
        <Cabecalho />
        <div>
          <Ingredientes />
        </div>
        <Rodape />
      </div>
    </IngredientesProvider>
  )
}

export default App;
