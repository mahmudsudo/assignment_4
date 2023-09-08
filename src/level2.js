const users = {

    Alex: {

        email: 'alex@alex.com',

        skills: ['HTML', 'CSS', 'JavaScript'],

        age: 20,

        isLoggedIn: false,

        points: 30

    },

    Asab: {

        email: 'asab@asab.com',

        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],

        age: 25,

        isLoggedIn: false,

        points: 50

    },

    Brook: {

        email: 'daniel@daniel.com',

        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],

        age: 30,

        isLoggedIn: true,

        points: 50

    },

    Daniel: {

        email: 'daniel@alex.com',

        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],

        age: 20,

        isLoggedIn: false,

        points: 40

    },

    John: {

        email: 'john@john.com',

        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],

        age: 20,

        isLoggedIn: true,

        points: 50

    },

    Thomas: {

        email: 'thomas@thomas.com',

        skills: ['HTML', 'CSS', 'JavaScript', 'React'],

        age: 20,

        isLoggedIn: false,

        points: 40

    },

    Paul: {

        email: 'paul@paul.com',

        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],

        age: 20,

        isLoggedIn: false,

        points: 40

    }

}
let skill = 0;
let mostSkilled;
let loggedUsers = [];
let overAcheivers = [];
let mernStackers = [];
for (let key in users) {
    if (users[key].skills.length > skill) {
        skill = users[key].skills.length;
        mostSkilled = users[key];
    }
    if (users[key].isLoggedIn === true) {
        loggedUsers.push(users[key]);
    }
    if (users[key].points >= 50) {
        overAcheivers.push(users[key])
    }
    if (users[key].skills.includes('MongoDB') && users[key].skills.includes('Express') && users[key].skills.includes('React') && users[key].skills.includes('Node')) {
        mernStackers.push(users[key])
    }
}
console.log(mostSkilled);

console.log(loggedUsers.length);
console.log(overAcheivers.length);
console.log(mernStackers);


users.myname = "anonymous";

let keys = Object.keys(users);
let values = Object.values(users);