
// const whereIsWaldo = (el) => {
//     // console.log(el.length)
//     let uld = '', too, utga;
//     let arr = [];
//     for (let num = 0; num < el.length; num++) {
//         for (let i = 0; i < el[num].length; i++) {
//             if (uld == '') {
//                     if (el[num][i] == el[num][i-1] || el[num][i] == el[num][i-1])   uld = el[num][i];
//             }else {
//                 if (uld != el[num][i] && el[num][i] != el[num][i+1] && el[num][i] != el[num][i-1]) {
//                     too = i + 1;
//                     utga = num + 1;
//                 }
//             }

//         }
//             if (uld == '') {
//                 if (el[i] == el[i-1] || el[i] == el[i-s])
//                 uld == el[i];
                
//             }
//     }
//     arr.push(utga);
//     arr.push(too);
//     return arr;
// } 


const whereiswaldo = (arr) => {
    let rowid, colid;
    const flat = arr.reduce((acc, cur) => acc.concat(cur))
    const lettercount = flat.reduce((counter, letter) => {
        counter[letter] = (counter[letter] == undefined ? 1 : counter[letter] + 1)
        return counter;
    }, {})
    const oddletter = Object.keys(lettercount).filter((letter) => lettercount[letter] == 1)[0];

    rowid = arr.findIndex((row) => row.includes(oddletter));
    colid = arr[rowid].findIndex((col) => col == oddletter);
    return [rowid + 1, colid + 1];

}


let first = [
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"]
];
// => [5, 1]

let second = [
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "B", "A"]
];
// => [3, 2]

let third = [
    ["c", "c", "c", "c"],
    ["c", "c", "c", "o"]
]
//  => [2, 4]
console.log(whereiswaldo(third))

