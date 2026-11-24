const BotaoPrincipal = ({ texto, onClick, type = "button", disabled = false }) => {
    return (
        <button 
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="bg-verde-medio text-creme
        font-nunito font-bold text-lg px-8 py-4
        rounded-full hover:scale-105 
        transition-transform cursor-pointer
        shadow-md disabled:opacity-60 disabled:cursor-wait">
            {texto}
        </button>
    )
}
export default BotaoPrincipal;
