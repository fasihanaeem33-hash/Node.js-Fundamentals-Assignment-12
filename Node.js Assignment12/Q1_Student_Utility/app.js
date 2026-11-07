
// app.js

// Import functions from student.js
const {
    studentIntroduction,
    calculatePercentage
} = require("./student");

// Sample student data
const name = "Fasiha";
const course = "Web Development";
const obtainedMarks = 425;
const totalMarks = 500;

// Call functions
const introduction = studentIntroduction(name, course);
const percentage = calculatePercentage(obtainedMarks, totalMarks);

// Display information
console.log("===== STUDENT INFORMATION =====");

console.log(introduction);

console.log("Obtained Marks:", obtainedMarks);
console.log("Total Marks:", totalMarks);

console.log("Percentage:", percentage + "%");

// Display Node.js version
console.log("Node.js Version:", process.version);
