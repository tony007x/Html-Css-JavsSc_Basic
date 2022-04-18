// const person ={
//     name : "Tony",
//     age : 18,
//     like : false
// }

// console.log(person.name)

// person.name = "LordTony"
// person.age = 20

// console.log(person)

// person.aa ="55"
// console.log(person)

// const Animal = ["cat","dog","bird"]
// console.log(Animal)
// console.log(Animal[1])

// Animal.push("Cow")
// console.log(Animal)

// Animal.pop()
// console.log(Animal)

// Animal.unshift("Duck")
// console.log(Animal)

// Animal.shift()
// console.log(Animal)

// let result = 5+1
// console.log(result)
// console.log(result)

// let n = 5
// console.log(typeof(n))
// n=n.toString()
// console.log(typeof(n))




function Button(){
    const inp = document.querySelector("input").value
    
    if(inp >= 80){
        document.getElementById("content").innerHTML = "Grade: A"
    }
    else if(inp >=70){
        document.getElementById("content").innerHTML = "Grade: B"
    }
    else if(inp >=60){
        document.getElementById("content").innerHTML = "Grade: C"
    }
    else if(inp >=50){
        document.getElementById("content").innerHTML = "Grade: D"
    }
    else{
        document.getElementById("content").innerHTML = "Grade: F"
    }     
}

let price = Number(prompt("Price: "))
const quantity = Number(prompt("Each"))
let answer = 0
for(let i = 0 ; i < quantity ;i++){
    answer += price
    console.log(answer)
}




