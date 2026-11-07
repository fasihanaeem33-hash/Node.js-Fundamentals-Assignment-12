
// student.js

// Function to generate student introduction
function studentIntroduction(name, course) {
    return `Student Name: ${name}\nCourse: ${course}`;
}

// Function to calculate percentage
function calculatePercentage(obtainedMarks, totalMarks) {
    if (totalMarks <= 0) {
        return "Invalid total marks";
    }

    return (obtainedMarks / totalMarks) * 100;
}

// Export both functions
module.exports = {
    studentIntroduction,
    calculatePercentage
};
