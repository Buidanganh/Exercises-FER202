// 1.Create a Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method introduce()
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}



// 2. CREATE STUDENT CLASS EXTENDS PERSON
class Student extends Person {
    constructor(name, age, scores = []) {
        super(name, age);
        this.scores = scores;
    }

    // Calculate average score
    caculateAverageScore() {
        if (this.scores.length === 0) {
            return 0;
        }
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }

    // Display full student information
    displayInfo() {
        console.log("\n========== STUDENT INFORMATION ==========");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Scores: ${this.scores.join(", ")}`);
        console.log(`Average Score: ${this.calculateAverage().toFixed(2)}`);
        console.log("=========================================");
    }
}

const person = new Person("An", 20);
person.introduce();
