var puzzleInput = "    [D]    \n[N] [C]    \n[Z] [M] [P]\n 1   2   3 \n\nmove 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2";
var instructions = puzzleInput.split('\n\n')[1].split('\n');
var digitInstructions = [];
console.log(instructions);
