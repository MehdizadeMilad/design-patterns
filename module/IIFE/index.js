// Module: keep codes clean, seperated and organized; 
// simulates access modifiers 


const myModule = (function () {

    // Private Variable
    const privateVariable = 'Hello World';

    // Private function
    function privateMethod() {
        console.log(privateVariable);
    }

    // public API
    return {
        publicMethod: function () {
            privateMethod();
        }
    }
})();

const privateVariable = 'same name variable but differnet scope';
myModule.publicMethod();