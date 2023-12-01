function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    return "Hello Jay!";
}

console.log("before outer() call");
debugger;
console.log(outer());
console.log("after outer() call");
