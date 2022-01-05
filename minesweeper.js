
const mineSweeper = (el) => {
    let element = el;
    let arrbig = [];
    
    for (let i = 0; i < el.length; i++) {
        for (let j = 0; j < el[i].length; j++) {
            process.stdout.write(`${el[i][j]} | `);
        }
        console.log('')
    }
    for (let num = 0; num < el.length-1; num++) {
        for (let j = 0; j < el[num].length; j++) {
            // console.log(num)
                if (el[num][j] == 7) {
                    element[num][j] = 9;
                    if (num >= 0 && j-1 >= 0) { if (element[num][j - 1] != undefined && element[num][j-1] != 7 && element[num][j-1] != 9) {element[num][j-1]++} }
                    if (num >= 0 && j+1 >= 0) { if (element[num][j + 1] != undefined && element[num][j+1] != 7 && element[num][j+1] != 9) {element[num][j+1]++} }
                    if (num-1 >= 0 && j >= 0) { if (element[num - 1][j] != undefined && element[num-1][j] != 7 && element[num-1][j] != 9) {element[num-1][j]++} }
                    if (num+1 >= 0 && j >= 0) { if (element[num + 1][j] != undefined && element[num+1][j] != 7 && element[num+1][j] != 9) {element[num+1][j]++} }
                    if (num+1 >= 0 && j-1 >= 0)  { if (element[num + 1][j - 1] != undefined && element[num+1][j-1] != 7 && element[num+1][j-1] != 9) {element[num+1][j-1]++} }
                    if (num+1 >= 0 && j+1 >= 0)  { if (element[num + 1][j + 1] != undefined && element[num+1][j+1] != 7 && element[num+1][j+1] != 9) {element[num+1][j+1]++} }
                    if (num-1 >= 0 && j-1 >= 0)  { if (element[num - 1][j - 1] != undefined && element[num-1][j-1] != 7 && element[num-1][j-1] != 9) {element[num-1][j-1]++} }
                    if (num-1 >= 0 && j+1 >= 0)  { if (element[num - 1][j + 1] != undefined && element[num-1][j+1] != 7 && element[num-1][j+1] != 9) {element[num-1][j+1]++} }
                }
        }
    }
    console.log('')
    for (let i = 0; i < element.length-1; i++) {
        for (let j = 0; j < el[i].length; j++) {
            process.stdout.write(`${element[i][j]} | `);
        }
        console.log('')
    }
}
// const mine = (arr) => {
//     let map9 = arr.map(el => {
//         return el.map(m => {
//             if (m == 1) {
//                 return 9;
//             }
//             else {
//                 return 0;
//             }
//         })
//     })


//     const isMine = (b, i, j) => {
//         if (i >= 0 && j >= 0 && i < b.length && j < b[i].length && b[i][j] == 9) {
//             return 1;
//         }
//         return 0;
//     }

//     const findMineNumber = (b, i, j) => {
//         return isMine(b, i - 1, j - 1) +
//             isMine(b, i - 1, j) +
//             isMine(b, i - 1, j + 1) +
//             isMine(b, i, j - 1) +
//             isMine(b, i, j + 1) +
//             isMine(b, i + 1, j - 1) +
//             isMine(b, i + 1, j) +
//             isMine(b, i + 1, j + 1)
//     }
//     return map9.map((el, i) => {
//         return el.map((n, j) => {
//             return n == 9 ? n.toString() : findMineNumber(map9, i, j).toString()
//         })
//     })


// }


let arr = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    []
]

mineSweeper(arr);
// const returnArr = [
//     [1, 9, 2, 1],
//     [1, 2, 9, 2],
//     [0, 2, 3, 9],
//     [0, 1, 9, 2]
// ]