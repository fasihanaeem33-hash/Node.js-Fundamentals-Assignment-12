
// app.js

// Import core modules
const os = require("os");
const path = require("path");
const fs = require("fs");

console.log("===== COMPUTER INFORMATION =====");

// Operating system information
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());

console.log(
    "Total Memory:",
    (os.totalmem() / (1024 ** 3)).toFixed(2),
    "GB"
);

console.log(
    "Free Memory:",
    (os.freemem() / (1024 ** 3)).toFixed(2),
    "GB"
);

console.log("Home Directory:", os.homedir());

// Create data folder if it does not exist
const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("\nData folder created.");
} else {
    console.log("\nData folder already exists.");
}

// Build file path using path.join()
const filePath = path.join(dataFolder, "student-notes.txt");

// Display file name and extension
console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));

// Create and write notes
const notes = `
1. I learned about the Node.js runtime.
2. I learned how to use built-in modules.
3. I learned how to read and write files using fs.
`;

fs.writeFileSync(filePath, notes);

console.log("\n===== ORIGINAL NOTES =====");

// Read file
let fileContent = fs.readFileSync(filePath, "utf8");
console.log(fileContent);

// Append another line
fs.appendFileSync(
    filePath,
    "4. I learned how to use the path module in Node.js.\n"
);

console.log("===== UPDATED NOTES =====");

// Read updated file
fileContent = fs.readFileSync(filePath, "utf8");
console.log(fileContent);

// Rename file
const renamedPath = path.join(dataFolder, "class-notes.txt");

fs.renameSync(filePath, renamedPath);

console.log("File renamed successfully to class-notes.txt");

// Create temporary file
const tempFile = path.join(dataFolder, "temporary.txt");

fs.writeFileSync(tempFile, "This is a temporary file.");

console.log("Temporary file created.");

// Remove temporary file after all other operations
fs.unlinkSync(tempFile);

console.log("Temporary file deleted successfully.");

console.log("\nAll file operations completed.");
