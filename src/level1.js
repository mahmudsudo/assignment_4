const dog = {

}
console.log(dog);
dog.name="bingo";
dog.legs=4;
dog.color = "brown";
dog.age=5;
dog.bark = ()=> {
    return "woof woof";
}
let name = dog.name;
let legs= dog.legs;
let color = dog.color;
let age = dog.age;
let bark = dog.bark();

dog.breed = "alsatian";
dog.getDogInfo= () => {
    return `
        name : ${dog.name},
        age : ${dog.age}
    `


}
console.log(dog);