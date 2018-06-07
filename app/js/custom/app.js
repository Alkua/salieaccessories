//string Variable
var name = "value";

//object variable
var my_object = {
	baseball : "Yankee",
	basketball : "Knicks",
	Hockey : "Ranger"
};

//Array variable
var my_array = [
	"is the NYC's baseball team",
	"is the NYC's basketball teams",
	"is the NYC's Hockey team"
];

function loop_object(obj){

	for(var i in obj){
		console.log(i, obj[i]);
		//document.getElementById('ok').innerHTML += obj[i];
		
	}
}

loop_object(my_object);

function loop_array(arr) {

	for(var i = 0;i < my_array.length; i++){
		console.log(i, arr[i]);
		document.getElementById('ok').innerHTML += arr[i];
		
	}
	
}

loop_array(my_array);

function dumper_text (arg1,arg2){
	console.log("dump",my_object);
	console.log("dump", my_array);
	
	return name + " that gets returned with "+ arg1 + " and " + arg2;
}


dumper_text('a function', 'javascript');


console.log(my_array[1]);
console.log('find the secret word from the sentence');

function word_is(arg){
	var secret_word = 'numeric';

	if(arg === secret_word){

		console.log('you got it');
		
	}
	else if(arg === 'using'){

		console.log('Almost!');
	}
	else{
		console.log('NOP!');
		
	}
}

