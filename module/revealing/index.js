// imroved version of module pattern
// stille IIFE with no need to create new public functions to call private functions 

const myRevealingModule = (function () {

    // Private variable
    let privateVariable = 'John';

    // Private function
    function privateMethod() {
        console.log(`name: ${privateVariable}`);
    }

    //‌ Public API 
    return {
        publicMethod: privateMethod
    }

})();

const privateVariable = 'same name variable but differnet scope';
myRevealingModule.publicMethod()