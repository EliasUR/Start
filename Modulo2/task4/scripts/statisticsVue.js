var app = new Vue({
	el: '#app',
	data: {
	    members: [],
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
	    ],
	    url: undefined,
	  	init: {
			method: 'GET',
			headers: {
				"X-API-Key": "VH5Ah3AWIPG55lr4Zdm8EbSISDe0rJ1aKWCUGAqd"		
			},
		}
	},
	created (){
		if (document.getElementById("senate")) {
	  		this.url = "https://api.propublica.org/congress/v1/113/senate/members.json"
	        fetch(this.url, this.init)
	            .then(function(res){
	                if(res.ok){
	               		return res.json()
	                } else{
	                    throw new Error(res.status)
	                }
	            })
                .then(function(json){
                    app.members = json.results[0].members
                    console.log(app.members)
                })
                .catch(function(error){
                	console.log(error)
                })
        }else if (document.getElementById("house")) {
	  		this.url = "https://api.propublica.org/congress/v1/113/house/members.json"
	        fetch(this.url, this.init)
	            .then(function(res){
	                if(res.ok){
	               		return res.json()
	                } else{
	                    throw new Error(res.status)
	                }
	            })
                .then(function(json){
                    app.members = json.results[0].members
                    console.log(app.members)
                })
                .catch(function(error){
                	console.log(error)
                })
        }
	},
	methods:{
		table1(){}
	}
})
	  		