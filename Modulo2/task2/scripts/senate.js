//var senate_data = document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
const members = data.results[0].members
const tbody = document.querySelector("tbody")
members.forEach (members =>{
	let full_name = [members.first_name, members.middle_name, members.last_name].join (" ")
	let row = tbody.insertRow(-1)
	row.innerHTML = (`<td><a href="${members.api_uri}">${full_name}</a></td>
		<td>${members.party}</td>
		<td>${members.state}</td>
		<td>${members.seniority}</td>
		<td>${"%"} ${members.votes_with_party_pct}</td>`)
})