// Função CRIANDO O TABULEIRO 
const createBoard = (rows ,columns) => {
  return Array(rows).fill(0).map((_,row) => {
    return Array(columns).fill(0).map((_,column) => {
      return {
        row,
        column,
        opened:false,
        flagged:false,
        mined: false,
        exploded:false,
        nearMines:0
      }

    })

  })
}
// Função USANDO O TABULEIRO E CRIANDO AS MINAS ESPALHANDO ELAS
const spreadMines = (board,minesAmount) => {
  const rows = board.length
  const columns = board[0].length
  let minesPlanted = 0

  while (minesPlanted < minesAmount){
    const rowSel = parseInt(Math.random () * rows, 10)
    const columnSel = parseInt(Math.random()* columns, 10)

    if(!board[rowSel] [columnSel].mined){
      board[rowSel] [columnSel].mined =true
      minesPlanted++
    }

  }

} 

//Função  CRIANDO TABULEIRO COM MINAS JA PLANTADAS
const createMinedBoard =(rows,columns,minesAmount) => {
  const board = createBoard(rows,columns)
  spreadMines(board,minesAmount)
  return board
}

export {createMinedBoard}