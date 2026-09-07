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


// 3.USE REST PARAMETER
function createScores(...scores) {
    return scores;
}

// 4.Use Destructuring
const scores = createScores(8, 9, 10)
const student = new Student("Bùi Đăng Anh", 25, scores)

const { name, age, scores: studentScores } = student;
console.log("========== DESTRUCTURING ==========");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);


// 5. USE SPREAD OPERATOR
// Existing score list
const existingScores = student.scores;

// New scores
const newScores = [7.5, 8.5];

// Merge existing scores and new scores
student.scores = [...existingScores, ...newScores];

console.log("\n========== SPREAD OPERATOR ==========");
console.log("Updated scores:", student.scores);



// 6. USE ARRAY METHODS
// filter()
// Filter passing scores >= 5
const passingScores = student.scores.filter(
    score => score >= 5
);

console.log("\n========== FILTER ==========");
console.log("Passing scores:", passingScores);


// map()
const processedScores = student.scores.map(
    score => score + 0.5
);

console.log("\n========== MAP ==========");
console.log("Processed scores:", processedScores);


// reduce()
const totalScore = student.scores.reduce(
    (total, score) => total + score,
    0
);

console.log("\n========== REDUCE ==========");
console.log("Total score:", totalScore);


// Calculate average
const averageScore = student.scores.reduce(
    (total, score) => total + score,
    0
) / student.scores.length;

console.log("Average score:", averageScore.toFixed(2));