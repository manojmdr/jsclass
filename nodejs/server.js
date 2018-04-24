//r=[5', '4', '3'];
// var arr1=[8,9,0];
// var arr2=[1,2,3]
// console.log(arr1.concat(arr2));//.'); ,
// [;m/;

var http=require('http');

var server=http.createServer(function(req,res){
	if(req.url=='/'){
		res.end('you are at home page');
	}
	else if(req.url=='/about'){
		res.end('you are at about page');
	}
		else
		{
			res.end('you are at no where');
		}
	
	//console.log(req.url);
	//res.end('hello and welcome Manoj,');
});
		
server.listen(7777);
