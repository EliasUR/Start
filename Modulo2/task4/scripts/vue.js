function main (data){
	var app = new Vue({
	  	el: '#app',
	  	data: {
	    	members: data.results[0].members
	  	}
	  	computed:{
            filterStudents(){
                return this.students.filter(e => app.teams.includes(e.team))
            }
        }
	});
}