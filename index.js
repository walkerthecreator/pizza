const express = require('express')
const path = require('path')

let app = express()

let arr = [{ name : "admin" , email : "admin@123"  }]

app.use(express.json()) // will parse body comes from frontend

app.get('/', (req , res)=>{
    let loc = path.join(__dirname , 'base.html')
    return res.status(200).sendFile(loc)
})

app.post('/' , (req , res) => {
    const email = req.body.email //nitin@123
    const name = req.body.name 
    const userPassword = req.body.password

    let checkingUser = arr.findIndex((item)=>{
        return item.email == email 
    })

    if(checkingUser == -1){
        arr.push({ name : name , email : email , password : userPassword })
        res.send(arr)
    }
    else{
        res.send("User Already exsist")
    }

})

app.get('/about' , (req , res)=>{
    res.send('<mark>about</mark>')
})


app.listen(3000 , () =>{
    console.log('server started on 3000')
})

// download underscore 1.10.1
// update it to the latest version 
// then uninstall it 