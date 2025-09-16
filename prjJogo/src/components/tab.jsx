import { useState } from "react";
import Bot from './botao'
import Styles from '../stylesComp/styles.module.css'

function Tabuleiro() {
  const [jogadas, setJogadas] = useState(Array(9).fill(null))
  const [jogadorX, setJogadorX] = useState(true)
  const [mensagem, setMensagem] = useState(null) // mensagem de vitória/empate

  const vencer = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]

  function vitoria(tabuleiro, jogador) {
    return vencer.some(combinacao =>
      combinacao.every(index => tabuleiro[index] === jogador)
    )
  }

  function empate(tabuleiro) {
    return tabuleiro.every(casa => casa !== null) &&
           !vitoria(tabuleiro, 'x') &&
           !vitoria(tabuleiro, 'o')
  }

  function coloca(i) {
    if (jogadas[i] || mensagem) return // bloqueia se já acabou

    const novaJogada = [...jogadas]
    const simbolo = jogadorX ? 'x' : 'o'
    novaJogada[i] = simbolo

    if (vitoria(novaJogada, simbolo)) {
      setJogadas(novaJogada)
      setMensagem(`Jogador ${jogadorX ? 'X' : 'O'} venceu!`)
      return
    }

    if (empate(novaJogada)) {
      setJogadas(novaJogada)
      setMensagem("Empate!")
      return
    }

    setJogadas(novaJogada)
    setJogadorX(!jogadorX)
  }

  function reiniciar() {
    setJogadas(Array(9).fill(null))
    setJogadorX(true)
    setMensagem(null)
  }

  return (
    <div className={Styles.cont}>
      <div className={Styles.grid}>
        {jogadas.map((jogada, idx) => (
          <Bot
            key={idx}
            value={jogada}
            onClick={() => coloca(idx)}
            estilo={Styles.botao}
          />
        ))}
      </div>

      {mensagem && (
        <div className={Styles.mensagem}>
          {mensagem}
        </div>
      )}

      <button className={Styles.reset} onClick={reiniciar}>
        Reiniciar
      </button>
    </div>
  )
}

export default Tabuleiro
