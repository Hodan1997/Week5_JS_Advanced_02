// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results

function Person(greeting,name, age, hobby,){
    this.greeting = greeting;
    this.name = name;
    this.age = age;
    this.hobby = hobby;

}
Person.prototype.speak = function() {
    return `${this.greeting}, my name is ${this.name} and I'm ${this.age} years old. I love ${this.hobby}`
}

const Me = new Person("hello", "Amina", "20", "football")

console.log(Me.speak())