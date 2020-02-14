let data
let url = "https://api.propublica.org/congress/v1/113/senate/members.json"
let init = {
	method: 'GET',
	headers: {
		"X-API-Key": "VH5Ah3AWIPG55lr4Zdm8EbSISDe0rJ1aKWCUGAqd"		
	}
}

fetch(url, init)
		.then(function(res){
			if(res.ok){
				return res.json()
			} else{
				throw new Error(res.status)
			}
		})
		.then(function(json){
			data = json
			if (document.getElementById("main")){
				main (data)
			}
			if (document.getElementById("statistics")) {
				statistics (data)
			}
			
		})
		.catch(function(error){
            console.log(error)
        })