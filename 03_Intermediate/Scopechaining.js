var name="Dev";
console.log(`Line number 2 ${name}`);
function sayName(){
    var name="Mr. D";
    console.log(`Line number 7 ${name}`);
    sayNameTwo();
    function sayNameTwo(){
        console.log(`Line number 8 ${name}`);
    }
}
sayName();