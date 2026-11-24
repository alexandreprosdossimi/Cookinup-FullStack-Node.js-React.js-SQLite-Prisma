import Logo from "./Logo"

const Cabecalho = () => {
    return (
        <header className="w-full">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center py-16 px-4">
                <div className="flex flex-col gap-8">
                    <Logo />
                    <h1 className="font-paytone text-[54px] leading-[120%] text-creme">
                        <strong className="font-normal text-verde-medio">
                            Um banquete de ideias para
                        </strong>{" "}
                        despertar o chef que há em você!
                    </h1>
                    <h2 className="font-nunito text-[31px] leading-[150%] text-creme font-normal">
                        Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
                    </h2>
                </div>
                <img
                    src="/banner.png"
                    alt="Banner do CookInUp"
                    className="max-w-[560px] hidden md:block" />
            </div>
        </header>
    )
}

export default Cabecalho;