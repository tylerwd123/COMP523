
var people = ["A","B","C"];
var actions = ["is sitting", "is eating", "is juggling"];
var truthfunctions = ["AND", "OR", "IMPLIES"];

// exportable function which generates a "truth table" 
// generates three statements
// begins with 3 ideas essentially consisting of 3 unique people paired with a non-unique verb (action)
// Then 
exports.generate = function() {
	var peopleindex = threerand(people.length);
	var i1 = people[peopleindex[0]] + " " + actions[Math.floor(Math.random()*actions.length)];
	var i2 = people[peopleindex[1]] + " " + actions[Math.floor(Math.random()*actions.length)];
	var i3 = people[peopleindex[2]] + " " + actions[Math.floor(Math.random()*actions.length)];
	var ideas = [i1,i2,i3];
	var ideaindex = tworand(ideas.length);
	var functionindex = threerand(truthfunctions.length);
	var s1 = [ideas[ideaindex[0]], truthfunctions[functionindex[0]], ideas[ideaindex[1]]];
	ideaindex = tworand(ideas.length);
	var s2 = [ideas[ideaindex[0]], truthfunctions[functionindex[1]], ideas[ideaindex[1]]];
	ideaindex = tworand(ideas.length);
	var s3 = [ideas[ideaindex[0]], truthfunctions[functionindex[2]], ideas[ideaindex[1]]];
	value = {
	statement1:s1,
	statement2:s2,
	statement3:s3
	};
	return value;
}


// function which returns an array of two random positive integers from 0 to len which are unique
// function fails if len <= 1 (not enough to get 2 random values)
tworand = function(len){
	if(typeof len != "number"){
		console.log("not a number");
		return false;
	}
	if(len <= 1){
		console.log("invalid length");
		return false;
	}
	var a = Math.floor(Math.random()*len);
	var b = Math.floor(Math.random()*len);
	while(a == b){
		b = Math.floor(Math.random()*len);
	}
	return [a,b]

}

threerand = function(len){
	if(typeof len != "number"){
		console.log("not a number");
		return false;
	}
	if(len <= 2){
		console.log("invalid length");
		return false;
	}
	var a = Math.floor(Math.random()*len);
	var b = Math.floor(Math.random()*len);
	var c = Math.floor(Math.random()*len);
	while(a == b){
		b = Math.floor(Math.random()*len);
	}
	while(a == c || b == c){
		c = Math.floor(Math.random()*len);
	}
	return [a,b,c]


}
