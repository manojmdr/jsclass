function callSomething(){
	console.log('function called');
	var a=confirm('La programming start garum na ta hai?');
	if (a){
		document.getElementById('test').innerHTML="js ko code garum na ta hai ";
		  }
		else
		   { document.getElementById('test').innerHTML="You need more time";
		  }	
}
//callSomething();