var outer=function outer(){
	function inner(){
		var obj={
			name:'Manoj',
			address:'bkt',
			phone:98512
		}
		return obj;
	}
	// console.log(inner());
	var innerFn=inner();
	return innerFn;
}
console.log('Full object',outer());
var prop=outer();
console.log(prop.phone);