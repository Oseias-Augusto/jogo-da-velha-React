export default function Menu({ setModo, titulo, reset, menu }){
    return (
        <>
            <div className={menu}> 
                <h2 className={titulo}>Modo de Jogo</h2> 
                <button className={reset} onClick={() => setModo('normal')}>Normal</button> 
                <button className={reset} onClick={() => setModo('limitado')}>Limitado</button> 
            </div>
        
        </>

    );
}