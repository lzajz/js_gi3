var cutPizzaSlices = 8

function sharePizza(number){
    return `each person gets ${ cutPizzaSlices / number} of pizza`
}
console.log(sharePizza(2))