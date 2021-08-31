const student = {
    name: 'aal emraan',
    money: 4999,
    age: 23,
    major: 'Physics',
    subjects: ['atomic and molicular physics', 'neuclear', 'solid state', 'computer fundamental'],
    bestFriend: {
        name: 'alex costa',
        age: 25,
        occupation: 'lifestyle influencer',
        job: 'youtube'
    },
    work: function(){
        return "aal is coding right now."
    },
    treat: function(treatAmount){
        this.money = this.money - treatAmount;
        return this.money
    }
}

console.log(student.bestFriend.age)
console.log(student.subjects[2])

const treat = student.treat(500);
const treat2 = student.treat(500);
const treat3 = student.treat(900);
console.log(treat)
console.log(treat2)
console.log(treat3)