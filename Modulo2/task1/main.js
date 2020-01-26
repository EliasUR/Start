var algo="Starting javascript..."
console.log (algo)

console.log ("Writing expressions with variables")

//.....Exercise 1.....

console.log ("Exercise 1: myName")
var myName="Elías"
console.log (myName)

//.....Exercise 2.....

console.log ("Exercise 2: age")
var age=17
console.log (age)

//.....Exercise 3.....

console.log ("Exercise 3: ageDiff")
var ignasiAge=32
var ageDiff= age - ignasiAge
console.log (ageDiff)


console.log ("Writing code with conditionals")

//.....Exercise 4.....

console.log ("Exercise 4")
if (age>21){console.log("You are older than 21")}
	else{console.log("You are not older than 21")}

//.....Exercise 5.....

console.log ("Exercise 5")
if (age>ignasiAge) {console.log ("Ignasi is younger than you")}
	else if (age<ignasiAge) {console.log ("Ignasi is older than you")}
		else {console.log ("You have the same age as Ignasi")}


console.log ("JavaScript Array Functions")

//.....Exercise 1.....

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

//.....Exercise 2.....

console.log ("Exercise 2: Looping over an array")
var ages = [17, 19, 20, 19, 20, 20, 20, 23, 20, 20, 19, 19, 19, 17, 18, 24, 
24, 20, 18, 23, 23, 22, 17, 23, 25, 26, 32]
ages.sort()
var i = 0
while (i<ages.length){
	console.log (ages[i]); i++
}


console.log ("Pares")
var i = 0
var pares = []
while (i<ages.length){
	if (ages[i]%2===0){pares.push(ages[i])};i++
}
var i = 0
while (i<pares.length){
	console.log (pares[i])
	i++
}


console.log ("Pares en for")
for (var i = 0; i<pares.length; i++) {
	console.log (pares[i])
}

//.....Exercise 3.....

console.log ("Exercise 3: num mas chico")
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function min (array){
	var numChico = Math.min (...array)
	console.log (numChico)
}
min (numbers)

//.....Exercise 4.....

console.log ("Exercise 4: num mas grande")
function max (array){
	var numGrande = Math.max (...array)
	console.log (numGrande)
}
max (numbers)

//.....Exercise 5.....

console.log ("Exercise 5: num indicado")
function numindicado (array, index){
	console.log (array[index])
}
numindicado (numbers, 1)

//.....Exercise 6.....

console.log ("Exercise 6: nums que se repiten")
var repetidos = [3,6,6,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
function solorepetidos (array){
	let repeti2 = []
	for (var i=0; i<array.length; i++){
		if(array.indexOf(array[i], i+1)!=-1 && repeti2.indexOf(array[i])==-1){
			repeti2.push(array [i])
		}
	}
console.log(repeti2)
}
solorepetidos (repetidos)

//.....Exercise 7.....

console.log ("Exercise 7")
var myColor = ["Red", "Green", "White", "Black"]
function e7 (array){
	e7join = array.join (",")
	console.log (e7join)
}
e7 (myColor)



console.log ("JavaScript String Functions")

//.....Exercise 1.....

console.log ("Exercise 1")
var x = 32443
function alReves (n){
	let num = n.toString().split("").reverse().join("")
	console.log (+ num)
}
alReves (x)

//.....Exercise 2.....

console.log("Exercise 2")
var frase1 = "algo escrito"
function abcdario (string){
	let abc = string.split("").sort().join("").trim()
	console.log (abc)
}
abcdario (frase1)

//.....Exercise 3.....

console.log ("Exercise 3")
var frase2 = "algo sin creatividad"
function mayusculas (string){
	let split = string.split(" ")
	var mayusArray = []
	for (var i=0; i<split.length; i++){
		let split2 = split[i].split("")
		var mayus = split2[0].toUpperCase () 
		for (var x=1; x<split2.length; x++){
		mayus = mayus + split2[x]
		}
		mayusArray.push(mayus)
	}
	var mayusString = mayusArray.join(" ")
	console.log(mayusString)
}
mayusculas (frase2)

//.....Exercise 4.....

console.log ("Exercise 4")
var frase3 = "Susanita tiene un ratón, un ratón chiquitiiito"
function palabraMasLarga (string){
	let split = string.split(" ")
	var pLarga = split[0]
	for (var i=1; i<split.length; i++){
		if (pLarga.length < split[i].length){
			pLarga = split[i]
		}
	}
	console.log (pLarga)
}
palabraMasLarga (frase3)