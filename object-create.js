// Different way of creating object....


// 1. normal way

const info = {name: 'aal', age: 23, occupation: 'student'};

// 2. constructor way
const newObject = new Object({name: 'aal'});
console.log(newObject);

// 3. inharitance way

const names = Object.create(info);
console.log(names.name);
console.log(names.age);

// 4. object from class

class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const peop = new People('aal emraan', 23);
console.log(peop)

// 5. object from function

function Manus(name, age){
    this.name = name;
    this.age = age;
}

const newman = new Manus('sakib', 33)
console.log(newman)