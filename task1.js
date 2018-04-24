function outer() {


    function inner() {

        var obj = {
            name: 'kishor',
            address: 'ktm',
            phone: '939949'
        };
        return obj;
    }
    var innerFn = inner();
    return innerFn;

    console.log(inner()); //obj
}

console.log('full obj', outer    ());
// var a = outer();
// var prop = a.phone;
// console.log('property only', prop);