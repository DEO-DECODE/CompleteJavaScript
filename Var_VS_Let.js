// a();
// var a= function abc(){
//     console.log("Dev");
// }
// a();
function example(){
    if(true){
        var x=10;
    }
    console.log(x);
}
function example2(){
    if(true){
        let x=10;
    }
    console.log(x);
    // It will give a reference error
}
example();
example2();