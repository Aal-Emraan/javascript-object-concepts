const bottle = {name: 'bottle', capacity: '3 litre', weight: 499, isClean: true};

const keys = Object.keys(bottle);
console.log(keys)

const values = Object.values(bottle);
console.log(values)

// it will return a 2 dimantional array...

const pairs = Object.entries(bottle)
console.log(pairs)

delete bottle.isClean;
console.log(bottle)

bottle.name = 'rfl bottle';
console.log(bottle);

bottle.color = 'yellow'

// seal an object protect deleting properties but can be updated....
Object.seal(bottle);
delete bottle.capacity;
console.log(bottle)
// unable to delete but can be updated....
bottle.capacity = '5 litre';
console.log(bottle)

// freez can freez all action of an object.... can't be updated as well....

Object.freeze(bottle);
delete bottle.weight;
console.log(bottle);
bottle.name = 'no name';
console.log(bottle)