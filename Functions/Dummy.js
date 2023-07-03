let compliment=(msg)=>{
    return (name)=>{
        return`${msg} ! ${name}`;
    }
}
let comp=compliment("Hello Bhaai");
console.log(comp("Dev"));