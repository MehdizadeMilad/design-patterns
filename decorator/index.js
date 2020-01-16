// to extend the functionality of an object //! on the fly

function Car(name) {
    this.name = name;

    //Default value
    this.color = 'white';
}


// Object to decorate
const juke = new Car('juke sport');

//Decoration: add a new function on the fly
juke.getInfo = function () {
    console.log(this.name, this.color);
}

juke.getInfo()