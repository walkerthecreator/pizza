let orders = []

// nitin
function takeOrder(name){
    let id = Math.ceil(Math.random() * 10000 ) //789
    let order = { name : name , orderId : id  } //{ name : "nitin" , orderId : 789  }
    orders.push(order)
    // prepareOrder()
    return order
}

function prepareOrder(){
        let prepared = orders.shift()
        console.log("Your order is Ready " + prepared.orderId + " " + prepared.name )
        return orders.length
}

module.exports = { takeOrder , prepareOrder }