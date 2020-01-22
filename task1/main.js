var algo="Starting javascript..."
console.log (algo)

console.log ("Writing expressions with variables")

console.log ("Exercise 1: myName")
var myName="Elías"
console.log (myName)

console.log ("Exercise 2: age")
var age=17
console.log (age)

console.log ("Exercise 3: ageDiff")
var ignasiAge=32
var ageDiff= age - ignasiAge
console.log (ageDiff)

console.log ("Writing code with conditionals")

console.log ("Exercise 4")
if (age>21){console.log("You are older than 21")}
	else{console.log("You are not older than 21")}

console.log ("Exercise 5")
if (age>ignasiAge) {console.log ("Ignasi is younger than you")}
	else if (age<ignasiAge) {console.log ("Ignasi is older than you")}
		else {console.log ("You have the same age as Ignasi")}

console.log ("JavaScript Array Functions")

console.log ("Exercise 1: Sorting an Array")
var names = ["Agustín", "Alan", "Ariel","Branko", "Diego", "Eduardo", "Elías", 
"Erica", "Ezequiel", "Gabriel", "Gian", "Iván", "Jose Luis", "Lean", "Lucas H.", 
"Lucas I.", "Lucio", "Mauro (Meji)", "Matías", "Nahuel J.", "Nahuel L.", 
"Nico F.", "Nico S.", "Rocio", "Rodri", "Roman", "Teo"]
console.log (names [0]) 
console.log (names [26])
for (var i = 0; i<names.length; i++) {
	console.log (names[i])
}

console.log ("Exercise 2: Looping over an array")
var ages = [17, 19, 20, 19, 20, 20, 20, 23, 20, 20, 19, 19, 19, 17, 18, 24, 
24, 20, 18, 23, 23, 20, 17, 23, 25, 26, 32]
ages.sort()
var i = 0
while (i<ages.length){
	console.log (ages[i]); i++
}
