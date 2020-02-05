const members = data.results[0].members


//.....Table1.....
var	democrat = {
	number:0,
	votes:0,
	percentage:0
}
var independent = {
	number:0,
	votes:0,
	percentage:0
}
var republican = {
	number:0,
	votes:0,
	percentage:0
}


members.forEach (members => {
	if (members.party == "R") {
		republican.number += 1
		republican.votes += members.votes_with_party_pct
		republican.percentage = parseFloat(republican.votes/republican.number).toFixed(2)
	} 
	else if (members.party == "D") {
		democrat.number += 1
		democrat.votes += members.votes_with_party_pct
		democrat.percentage = parseFloat(democrat.votes/democrat.number).toFixed(2)
	}
	else if (members.party == "I"){
		independent.number += 1
		independent.votes += members.votes_with_party_pct
		independent.percentage = parseFloat(independent.votes/independent.number).toFixed(2)
	}
})


var table1 = document.getElementById ("table1")

table1.innerHTML = `<tr>
						<td>Republican</td>
						<td>${republican.number}</td>
						<td>% ${republican.percentage}</td>
					</tr>
					<tr>
						<td>Democrat</td>
						<td>${democrat.number}</td>
						<td>% ${democrat.percentage}</td>
					</tr>
					<tr>
						<td>Independent</td>
						<td>${independent.number}</td>
						<td>% ${independent.percentage}</td>
					</tr>
					<tr>
						<td>Total</td>
						<td>${republican.number += independent.number += democrat.number}</td>
						<td></td>
					</tr>`

//.....Table2.....

var missedVotesPct = []

members.forEach(members =>{
	missedVotesPct.push(members.missed_votes_pct)
	missedVotesPct.sort (function(a, b){return a - b})
})


var menor10pct = []

function tenPct (Pct, tenPctArray){
	var aux = []
	var aux2 = []

	

	for (let i=0; i<Pct.length; i++){
		if (Pct[i] !=0 && aux2.length < Pct.length * 10 / 100){
			aux2.push (Pct[i])
		}
		if (Pct[i] !=0 && Pct[i] == aux2[aux2.length-1]){
			tenPctArray.push (Pct[i])
		}
	}
	console.log(tenPctArray)
}

tenPct (missedVotesPct, menor10pct)


//.....Table3.....


var missedVotesPctTop = missedVotesPct.reverse()

var mayor10cpt = []

tenPct (missedVotesPctTop, mayor10cpt)