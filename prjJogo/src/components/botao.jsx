

function botao({value, onClick, estilo}){
    return(
        <>
            <button onClick={onClick} className={estilo} >{value}</button>
        </>
    )
}

export default botao