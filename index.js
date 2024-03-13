const { prepareOrder , takeOrder } = require('./order.js')
// #1 create a function which takes user name as argument then generate an order id and return it 
// #2 after every 3 sec a order will be cooked 


takeOrder("nitin")
takeOrder("aman")
takeOrder("arpit")

 let timer =  setInterval(()=>{

    let length = prepareOrder() // 2

    if(length == 0 ){
        clearInterval(timer)
    }
    
} , 1000)

