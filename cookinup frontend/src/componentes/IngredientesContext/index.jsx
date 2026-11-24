import { createContext, useState, useEffect, useRef } from "react";

export const IngredientesContext = createContext();

export const IngredientesProvider = (props) => {
    const [categorias, setCategorias] = useState([]);
    const [ingredientesSelecionados, setIngredientesSelecionados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erroBusca, setErroBusca] = useState("");
    const requisicaoAtual = useRef(null);

    const buscaCategorias = async (termoBusca = "") => {
        requisicaoAtual.current?.abort();
        const controller = new AbortController();
        requisicaoAtual.current = controller;
        const apiUrl = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");
        const termo = termoBusca.trim();
        const query = termo ? `?busca=${encodeURIComponent(termo)}` : "";

        setCarregando(true);
        setErroBusca("");

        try {
            const resposta = await fetch(`${apiUrl}/categorias${query}`, { signal: controller.signal });
            if (!resposta.ok) {
                throw new Error(`A API respondeu com status ${resposta.status}.`);
            }
            const dados = await resposta.json();
            if (!Array.isArray(dados)) {
                throw new Error("A resposta da API está em um formato inesperado.");
            }
            setCategorias(dados);
        } catch (erro) {
            if (erro.name !== "AbortError") {
                setErroBusca("Não foi possível carregar as categorias. Verifique se a API está funcionando e tente novamente.");
            }
        } finally {
            if (!controller.signal.aborted) {
                setCarregando(false);
            }
        }
    };

    useEffect(() => {
        buscaCategorias();
        return () => requisicaoAtual.current?.abort();
    }, []);

    const alternarIngrediente = (ingrediente) => {
        setIngredientesSelecionados((selecionados) =>
            selecionados.some((item) => item.id === ingrediente.id)
                ? selecionados.filter((item) => item.id !== ingrediente.id)
                : [...selecionados, ingrediente]
        );
    };

    const ingredienteEstaSelecionado = (ingrediente) => {
        return ingredientesSelecionados.some(item => item.id === ingrediente.id);
    }
    return (
        <IngredientesContext.Provider
            value={{
                categorias,
                carregando,
                erroBusca,
                ingredientesSelecionados, 
                alternarIngrediente, 
                ingredienteEstaSelecionado,
                buscaCategorias
            }}>
            {props.children}
        </IngredientesContext.Provider>
    )
}
