const human = {
    name: 'boss',
    age: 30,
    designation: 'ceo',
    height: '5 feet and 5 inches',
    title: 'hero'
}

// of is used for array and in is used for object

for(const prop in human){
    console.log(prop,' => ', human[prop])
}

const keys = Object.keys(human);
for(const prop of keys){
    console.log(prop, ' => ', human[prop])
}
for(const i in keys){
    console.log(i)
}

// advanced way of loop...
for(const [key, value] of Object.entries(human)){
    console.log(key, ' => ', value)
}

const [x , y] = [5, 6];
console.log(x)