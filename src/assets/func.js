
export const Vencer = [
  [0,1,2], [3,4,5], [6,7,8], 
  [0,3,6], [1,4,7], [2,5,8], 
  [0,4,8], [2,4,6]           
];


export function vitoria(tabuleiro, jogador) {
  return Vencer.some(combinacao =>
    combinacao.every(index => tabuleiro[index] === jogador)
  );
}


export function empate(tabuleiro) {
  return tabuleiro.every(casa => casa !== null) &&
         !vitoria(tabuleiro, 'x') &&
         !vitoria(tabuleiro, 'o');
}
