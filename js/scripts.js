

function getCellsWithPieces(){
  var blackRook1 = document.getElementsByClassName("black rook 1")[0]
  var blackpawn1 = document.getElementsByClassName("black pawn 1")[0]
  var pieces = [blackRook1, blackpawn1]
return pieces
}

class NewMove{

  constructor(){
    this.inicializar = this.inicializar.bind(this)
    this.inicializar()
  }

  inicializar(){
    this.pieces = getCellsWithPieces()
    this.agregarEventosClick()
  }

  move(ev){
    const allPieces = [
      "rook", 
      "knight", 
      "bishop", 
      "king",
      "queen",
      "pawn",
    ]
    var pieceToMove

    var letterToNumbers = new Map()
      letterToNumbers.set("a", 1)
      letterToNumbers.set("b", 2)
      letterToNumbers.set("c", 3)
      letterToNumbers.set("d", 4)
      letterToNumbers.set("e", 5)
      letterToNumbers.set("f", 6)
      letterToNumbers.set("g", 7)
      letterToNumbers.set("h", 8)
      letterToNumbers.set(1, "a")
      letterToNumbers.set(2, "b")
      letterToNumbers.set(3, "c")
      letterToNumbers.set(4, "d")
      letterToNumbers.set(5, "e")
      letterToNumbers.set(6, "f")
      letterToNumbers.set(7, "g")
      letterToNumbers.set(8, "h")

    window.globalPieceToMove = ev

    for(let i = 0; i < allPieces.length; i++){
      if(ev.srcElement.classList.contains(allPieces[i])){
        pieceToMove = allPieces[i]
        break
      }
    }

    switch(pieceToMove){
// Rook
      case allPieces[0]:
        console.log("TORRE")
        console.log(ev.target.id)
        var startID = ev.target.id
        var startLetter = startID[0]
        var startNumber = parseInt(startID[1], 10)
        var startLetterInNumber = letterToNumbers.get(startLetter)

        // console.log(startID)
        // console.log(startLetter)
        // console.log(startNumber)
        // console.log(startLetterInNumber)
        

        var posiblePathTop = []
        var posiblePathBottom = []
        var posiblePathLeft = []
        var posiblePathRight = []

        // var canEat

          let y = [startNumber, startNumber]
          let x = [startLetterInNumber, startLetterInNumber]
          
          for(let j = 0; j < 8; j++){
//Path in Y
            if((y[0] - 1) >= 1){
              let cell = y[0] - 1
              posiblePathTop.push(cell.toString())
            }

            if((y[1] + 1) <= 8) {
              let cell = y[1] + 1
              posiblePathBottom.push(cell.toString())
            }
//Path in x
            if((x[0] - 1) >= 1){
              let cell = x[0] - 1
              posiblePathLeft.push(cell.toString())
              
            }

            if((x[1] + 1) <= 8) {
              let cell = x[1] + 1
              posiblePathRight.push(cell.toString())
            }
            y[0] -= 1
            y[1] += 1

            x[0] -= 1
            x[1] += 1
          }
          console.log(posiblePathTop) 
          console.log(posiblePathBottom)
          console.log(posiblePathRight)
          console.log(posiblePathLeft)

          var posiblePathLeftID = []
          var posiblePathRightID = []
          for(let i = 0; i < posiblePathLeft.length; i++){
            // IDToNumbers.get(posiblePathLeft[i])
            posiblePathLeftID.push(letterToNumbers.get(parseInt(posiblePathLeft[i],10)) + startNumber)
            console.log(posiblePathLeftID[i])
          }

          for(let i = 0; i < posiblePathRight.length; i++){
            // letterToNumbers.get(posiblePathRight[i])
            posiblePathRightID.push(letterToNumbers.get(parseInt(posiblePathRight[i],10)) + startNumber)
            console.log(posiblePathRightID[i])
          }

        break
    }   
  } 

  agregarEventosClick(){
    
    for (let i = 0 ; i < this.pieces.length; i++) {
      console.log(this.pieces[i])
      console.log(this.pieces[i].id)
      document.getElementById(this.pieces[i].id).addEventListener('click', this.move, false ) 
    }
  }

}



function start(){
  newMove = new NewMove()
}