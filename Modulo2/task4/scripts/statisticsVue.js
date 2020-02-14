function statistics (data){

	var app = new Vue({
	  	el: '#app',
	  	data: {
	    	members: data.results[0].members,
	    	parties: [
	    		democrat = {
	    			name: "Democrat",
					nMembers:0,
					votes:0,
					percentage:0
				},
				independent = {
					name: "Independent",
					nMembers:0,
					votes:0,
					percentage:0
				},
				republican = {
					name: "Republican",
					nMembers:0,
					votes:0,
					percentage:0
				},
	    	]
	  	}
	  	created (){
	  		this.members.forEach (members => {
				if (app.members.party == "R") {
					app.parties.republican.nMembers += 1
					app.parties.republican.votes += app.members.votes_with_party_pct
					app.parties.republican.percentage = parseFloat(app.parties.republican.votes/app.parties.republican.nMembers).toFixed(2)
				} 
				else if (app.members.party == "D") {
					app.parties.nMembers += 1
					app.parties.democrat.votes += members.votes_with_party_pct
					app.parties.democrat.percentage = parseFloat(app.parties.democrat.votes/app.parties.democrat.nMembers).toFixed(2)
				}
				else if (app.members.party == "I"){
					app.parties.independent.nMembers += 1
					app.parties.independent.votes += app.members.votes_with_party_pct
					app.parties.independent.percentage = parseFloat(app.parties.independent.votes/app.parties.independent.nMembers).toFixed(2)
				}
			})

	  	}
	  	// methods:{
	  	// 	partyNumbers (nameParty, letra){
	  	// 		this.members.forEach (member =>{
	  	// 			if (app.members.party == letra) {
				// 		app.parties.nameParty.nMembers += 1
				// 		app.parties.nameParty.votes += app.members.votes_with_party_pct
				// 		app.parties.nameParty.percentage = parseFloat(app.parties.nameParty.votes/app.parties.nameParty.nMembers).toFixed(2)
				// 	} 
	  	// 		})
	  	// 	}
	  	// }
	});


	//.....Table1.....

	

	//.....Table2.....

	//array con todos los porcentajes de votos perdidos de members
	var missedVotesPct = []
	members.forEach(members =>{
		missedVotesPct.push(members.missed_votes_pct)
		missedVotesPct.sort (function(a, b){return a - b})
	})

	//funcion para el 10%
	function tenPct (Pct, tenPctArray, table){
		var aux = []//array para el 10% sin repetidos
		var aux2 = []//array para el 10% con repetidos
		for (let i=0; i<Pct.length; i++){
			if (Pct[i] !=0 && aux.length < Pct.length * 10 / 100){
				aux.push (Pct[i])//mete 10% en aux
			}
			if (Pct[i] !=0 && Pct[i] == aux[aux.length-1]){
				aux2.push (Pct[i])//suma repetidos al aux en aux2
			}
		}
		console.log(aux2)

	//funcion para obtener miembros correspondientes a array2
		var aux3 = members.filter (function (members) {
			for (var i = 0; i < aux2.length; i++) {
				if (members.missed_votes_pct == aux2[i] || members.votes_with_party_pct == aux2[i]) {
					tenPctArray.push(members)
					return members
				}
			}
		})	
	}

	//10% de asistencia superior
	var mostEngaged = []
	tenPct (missedVotesPct, mostEngaged)
	mostEngaged.sort (function(a, b){return a.missed_votes_pct - b.missed_votes_pct})//ordena por porsentaje de votos perdidos
	console.log(mostEngaged)


	//.....Table3.....
	var missedVotesPctBottom = missedVotesPct.reverse()

	//10% de asistencia inferior
	var leastEngaged = []
	tenPct (missedVotesPctBottom, leastEngaged)
	leastEngaged.sort (function(a, b){return a.missed_votes_pct - b.missed_votes_pct}).reverse()//ordena por porsentaje de votos perdidos
	console.log(leastEngaged)


	//.....Table4.....
	//array con todos los porcentajes de votos con partido de members
	var votesPartyPct = []
	members.forEach(members =>{
		votesPartyPct.push(members.votes_with_party_pct)
		votesPartyPct.sort (function(a, b){return a - b})
	})

	//10% menos leales
	var leastLoyal = []
	tenPct (votesPartyPct, leastLoyal)
	leastLoyal.sort (function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct})

	console.log (leastLoyal)


	//.....table5.....
	var votesPartyPctTop = votesPartyPct.reverse()

	//10% mas leales
	var mostLoyal = []
	tenPct (votesPartyPctTop, mostLoyal)
	mostLoyal.sort (function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct}).reverse()
	console.log (mostLoyal)

	//.....Pasaje a tablas.....

	if (document.getElementById ("table2") && document.getElementById ("table3")) {
		var table2 = document.getElementById ("table2")
		var table3 = document.getElementById ("table3")

		// funcion tablas 2 y 3
		function tablesEngaged (tnumber, valores){
			for (var i = 0; i < valores.length; i++){
				let name = [valores[i].first_name, valores[i].middle_name, valores[i].last_name].join (" ")
				let row = tnumber.insertRow(-1)
				row.innerHTML = `<td>${name}</td>
						<td>${valores[i].missed_votes}</td>
						<td>% ${valores[i].missed_votes_pct}</td>`
			}
		}
		tablesEngaged (table2, mostEngaged)
		tablesEngaged (table3, leastEngaged)
	}
	else if (document.getElementById ("table4") && document.getElementById ("table5")) {
		var table4 = document.getElementById ("table4")
		var table5 = document.getElementById ("table5")

		//funcion tablas 4 y 5
		function tablesLoyal (tnumber, valores){
			for (var i = 0; i < valores.length; i++){
				let name = [valores[i].first_name, valores[i].middle_name, valores[i].last_name].join (" ")
				let votes_with_party = (valores[i].total_votes * valores[i].votes_with_party_pct / 100).toFixed()
				let row = tnumber.insertRow(-1)
				row.innerHTML = `<td>${name}</td>
						<td>${votes_with_party}</td>
						<td>% ${valores[i].votes_with_party_pct}</td>`
			}
		}
		tablesLoyal (table4, leastLoyal)
		tablesLoyal (table5, mostLoyal)
	}

}