var puzzleInput = "    [D]    \n[N] [C]    \n[Z] [M] [P]\n 1   2   3 \n\nmove 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2";
var cols = puzzleInput.split("\n\n")[0].split("\n");
var colsArrays = new Array(cols.length - 1);
for (var i = 0; i < cols.length - 1; i++) {
    colsArrays[i] = [];
}
var instructions = puzzleInput.split("\n\n")[1].split("\n");
var digitInstructions = [];
for (var i = 0; i < instructions.length; i++) {
    var numberToMove = Number(instructions[i].charAt(5));
    var location_1 = Number(instructions[i].charAt(12));
    var target = Number(instructions[i].charAt(17));
    digitInstructions[i] = [numberToMove, location_1, target];
}
var numberOfColumns = Number(cols[cols.length - 1]
    .replace(/\s/g, "")
    .charAt(cols[cols.length - 1].replace(/\s/g, "").length - 1));
// for (let i = 0; i < cols.length - 1; i++) {
//   if (cols[i].charAt(1) !== " ") {
//     colsArrays[0].unshift(cols[i].charAt(1));
//   }
//   if (cols[i].charAt(5) !== " ") {
//     colsArrays[1].unshift(cols[i].charAt(5));
//   }
//   if (cols[i].charAt(9) !== " ") {
//     colsArrays[2].unshift(cols[i].charAt(9));
//   }
// }
// sorts columns into arrays
for (var i = 0; i < cols.length - 1; i++) {
    for (var j = 0; j < numberOfColumns; j++) {
        var func = 4 * j + 1;
        if (cols[i].charAt(func) !== " ") {
            colsArrays[j].unshift(cols[i].charAt(func));
        }
    }
}
for (var i = 0; i < digitInstructions.length; i++) {
    var numberToMove = digitInstructions[i][0];
    var from = digitInstructions[i][1] - 1;
    var target = digitInstructions[i][2] - 1;
    for (var j = 0; j < numberToMove; j++) {
        colsArrays[target].push(colsArrays[from][colsArrays[from].length - 1]);
        colsArrays[from].pop();
    }
}
function getLastItem(arr) {
    var final = "";
    arr.forEach(function (a) {
        final += a[a.length - 1];
    });
    return final;
}
console.log(digitInstructions);
console.log(colsArrays);
console.log(getLastItem(colsArrays));
