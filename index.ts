

const puzzleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

let instructions = puzzleInput.split('\n\n')[1].split('\n')

let digitInstructions = [];


console.log(instructions);