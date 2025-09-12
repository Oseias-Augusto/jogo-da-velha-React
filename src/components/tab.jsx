import { use, useState } from "react";
import Bot from './botao'
import Styles from '../stylesComp/styles.module.css'


function tabuleiro(){
    const [jogadas, setJogadas] = useState(Array(9).fill(null))
    const [jogadorX, setJogadorX] = useState(true)
    vencer = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    
    function vitoria(j){
        
        let xis = []
        let bol = []

        for (i in jogadas)
        {
            if (jogadas[i] == 'x')
            {
                xis.push(i)
            }else if(jogadas[i] == 'o'){
                bol.push(i)
            }
        }
        
        if (xis.every(element => vencer.includes(element)) == true)
        {
            
        }

    }

    function coloca(i){
        const novaJogada = jogadas.slice()

        if (jogadorX){
            novaJogada[i] = 'x'
            
        }else{
            novaJogada[i] = 'o'
        }

        setJogadas(novaJogada)

        vitoria(i)
        setJogadorX(!jogadorX)
    }

    return(
        <div className={Styles.cont}>
            <div className={Styles.grid}>
                {jogadas.map((jogada, idx) => <Bot key={idx} value={jogada} onClick={() => coloca(idx)} estilo={Styles.botao}/>)}
            </div>
        </div>
    )
}

export default tabuleiro