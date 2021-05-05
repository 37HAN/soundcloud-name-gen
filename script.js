function generate(){
	var firstname = ["Lil", "Yung", "NLE", "Joyce", "NBA", "Young", "Kill", "Chief", "Isiah", "Emo", "Leo", "Jordyn", "Money", "Ca$h", "Wayne", "Trap"];
	var lastname= ["Cash", "Money", "47", "Hines", "ASAP", "Dank", "Ku$h", "Y$L", "Eyes", "Ban$", "Love", "Guerra", "Boi", "Gucci", "Cap", "The Rapper"];
	var rand_first = Math.floor(Math.random()*firstname.length); 
	var rand_last = Math.floor(Math.random()*lastname.length); 
	document.getElementById('result').innerHTML = "<h1>Essssskkktt!</h1><div class='alert alert-success'><h2>"+firstname[rand_first]+" "+lastname[rand_last]+"</h2></div>";
	
}