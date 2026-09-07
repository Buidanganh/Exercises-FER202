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
    calculateAverageScore() {
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
        console.log(`Average Score: ${this.calculateAverageScore().toFixed(2)}`);
        console.log("=========================================");
    }
}

const person = new Person("Anh", 25);
person.introduce();


// 4.Use Destructuring
function createScores(...scores) {
    return scores;
}

const scores = createScores(8, 9, 10)
const student = new Student("Bùi Đăng Anh", 25, scores)

const { name, age, scores: studentScores } = student;
console.log("========== DESTRUCTURING ==========");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);