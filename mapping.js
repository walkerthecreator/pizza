let arr = [10 , 20, 30 , 40]

let users = [
     {
    name : "nitin" ,
    isActive : false ,
    balance : 789
} , 
     {
    name : "arman" ,
    isActive : false ,
    balance : 201
} , 
     {
    name : "rohit" ,
    isActive : false ,
    balance : 456
} , 
     {
    name : "rahul" ,
    isActive : false ,
    balance : 678
} ]


let ans = arr.findIndex((item)=>{
    return item == 200
})

console.log(ans)

