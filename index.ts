

const puzzleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

let instructions = puzzleInput.split('\n\n')[1].split('\n')
let cols = puzzleInput.split('\n\n')[0].split('\n')

let colsArrays = new Array(cols.length - 1)
let digitInstructions = [];

for (let i = 0; i < instructions.length; i++) {   
    let numberToMove = Number(instructions[i].charAt(5))
    let location = Number(instructions[i].charAt(12))
    let target = Number(instructions[i].charAt(17))
    
    digitInstructions[i] = [numberToMove, location, target]
}

let numberOfColumns = cols[cols.length - 1].replace(/\s/g, "").charAt(cols[cols.length - 1].replace(/\s/g, "").length - 1)
console.log(numberOfColumns);

//for (let i = 0; i < )


console.log(colsArrays);