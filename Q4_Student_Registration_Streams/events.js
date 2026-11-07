
// events.js

// Import EventEmitter
const EventEmitter = require("events");

// Create EventEmitter object
const registrationSystem = new EventEmitter();

// Register event listener
registrationSystem.on("studentRegistered", (student) => {

    console.log("\n===== STUDENT REGISTRATION =====");

    console.log(
        `Registration Successful! Student ID: ${student.id}, Name: ${student.name}`
    );

    // Schedule reminder after 3 seconds
    setTimeout(() => {
        console.log(
            `Reminder: Welcome ${student.name}! Your registration is complete.`
        );
    }, 3000);

});

// Function to register student
function registerStudent(id, name) {

    const student = {
        id: id,
        name: name
    };

    // Emit registration event
    registrationSystem.emit("studentRegistered", student);

}

// Register sample students
registerStudent(101, "Ali");

registerStudent(102, "Sara");
registerStudent(103, "Ahmed");