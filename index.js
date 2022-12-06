import puzzleInput from "./puzzleInput.js";
// // Dummy data
// const puzzleInput = `    [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`;
// Sorting toers into arrays
var cols = puzzleInput.split("\n\n")[0].split("\n");
var colsArrays = new Array(cols.length);
for (var i = 0; i < cols.length; i++) {
    colsArrays[i] = [];
}
var numberOfColumns = Number(cols[cols.length - 1]
    .replace(/\s/g, "")
    .charAt(cols[cols.length - 1].replace(/\s/g, "").length - 1));
// sorts columns into arrays
for (var i = 0; i < cols.length - 1; i++) {
    for (var j = 0; j < numberOfColumns; j++) {
        var func = 4 * j + 1;
        if (cols[i].charAt(func) !== " ") {
            colsArrays[j].unshift(cols[i].charAt(func));
        }
    }
}
// parsing out the instructions
var instructions = puzzleInput.split("\n\n")[1].split("\n");
var digitInstructions = [];
// converting strings to digits
for (var i = 0; i < instructions.length; i++) {
    var numberToMove = Number(instructions[i].charAt(5) + instructions[i].charAt(6));
    var location_1 = Number(instructions[i].charAt(12) + instructions[i].charAt(13));
    var target = Number(instructions[i].charAt(17) + instructions[i].charAt(18));
    digitInstructions[i] = [numberToMove, location_1, target];
}
// Carringing out instructions
for (var i = 0; i < digitInstructions.length; i++) {
    var numberToMove = digitInstructions[i][0];
    var from = digitInstructions[i][1] - 1;
    var target = digitInstructions[i][2] - 1;
    //   // Part 1
    //   for (let j = 0; j < numberToMove; j++) {
    //     colsArrays[target].push(colsArrays[from][colsArrays[from].length - 1]);
    //     colsArrays[from].pop();
    //   }
    var blockToMove = colsArrays[from].slice(Math.max(colsArrays[from].length - numberToMove));
    for (var j = 0; j < numberToMove; j++) {
        colsArrays[target].push(blockToMove[j]);
        colsArrays[from].pop(numberToMove);
    }
}
function getLastItem(arr) {
    var final = "";
    arr.forEach(function (a) {
        final += a[a.length - 1];
    });
    return final;
}
console.log(getLastItem(colsArrays));
