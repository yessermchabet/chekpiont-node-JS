const fs = require('fs')


console.log('Start')

// fs.readFile('./wolcome.txt',(err,data)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

console.log(fs.readFileSync('./wolcome.txt','utf-8'))

console.log('End')