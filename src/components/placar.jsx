export default function Placar({xis, bol, estilo, modo, estiloM, zerar, reset, troca, mensagem}){

    return(
        <>
            <div className={estilo}>
                <h1>
                    Placar
                </h1>
                <p> Jogador X: {xis} </p>
                <p> Jogador O: {bol}</p>
                <button onClick={zerar} className={reset}>
                    Zerar Placar
                </button>
            </div>

            <div className={estiloM}>
                <h2>Modo</h2>
                <p>{modo}</p>
                <button className={reset} onClick={troca} disabled={!mensagem}>
                    Trocar
                </button>
            </div>
        </>
        
    )

}