//-----------------------
// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Block scope
console.log(blockVar)
// console.log(blockLet)  - error
// console.log(blockConst) - error


//--------------------------------
function print() {
    var functionVar = "Function var";
    let functionLet = "Function let";
    const functionConst = "Function Const";

    // work
    console.log(functionVar);  
    console.log(functionLet);  
    console.log(functionConst);
    
}

print();

// console.log(functionVar);   - error
// console.log(functionLet);   - error
// console.log(functionConst); - error
