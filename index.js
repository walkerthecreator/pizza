const fs = require('node:fs') 

// fs.readFile('index.txt' , "utf-8" , (err , data)=>{

//     if(err){
//         console.log("oops something went wrong" , err)
//     }
//     else{
//         console.log(data)
//     }
// }  )
// console.log(data2 , "returned")


// const data = fs.readFileSync("index.txt" , "utf-8")
// console.log(data)



// fs.readFileSync
//   (filepath , encoding , callback)


// syntax = (filepath, data you want to add in file )
// fs.writeFile('inde.txt' , "hello from index js " , (err , data)=>{
//     if(err) console.log(err)
// })

// fs.writeFileSync('new.html' , "<h1>heello</h1>")

// fs.appendFile("index.txt" , "new line added" , (err , data) =>  {
//     if(err){
//         console.log('error ' , err)
//     }

//     console.log(data)
// })

// fs.appendFileSync("index.htm" , "new line async" )

fs.unlink("index.htm" , (err )=>{
    if(err) console.log('err')
})