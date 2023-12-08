//const pi = 3.142
//let name = "John"
//console.log("My name is", name)
//console.log("Pi is", pi)

// If name is Oduor then print favourite food is fish
//If name is Melissa then favourite food is pizza

//findFavouriteFood = function(name){
    //or
// function findFavouriteFood(name){
//     if(name == "Oduor"){
//         console.log("Your favourite food is fish.")
//     }
    
//     else if(name == "Melissa"){
//         console.log("Your favourite food is pizza.")
//     }
    
//     else {
//         console.log("Sorry! I seem not to remember your favourite food.")
//     }
// }

// findFavouriteFood("Melissa")

// function add(a,b){
//     return a+b
    
// }

// result = add(2750000,1975000)
// console.log("Your result is ", result)

function calculator(a, b, operator){
    //use if statements
    if(operator == "+"){
        return a + b
    }
    
    else if(operator == "-"){
        return a - b
    }

    else if(operator == "*"){
        return a * b
    }

    else if(operator == "/"){
        return a / b
    }

    else{
        return "Invalid operator"
    }
}

result = calculator(27, 9, "*")
console.log( result )
