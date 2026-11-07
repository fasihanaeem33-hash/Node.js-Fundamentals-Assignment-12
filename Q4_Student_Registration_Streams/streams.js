
// streams.js

// Import fs module
const fs = require("fs");

console.log("===== READING FILE USING STREAM =====");

// Create readable stream
const readableStream = fs.createReadStream(
    "large.txt",
    { encoding: "utf8" }
);

// Handle received chunks
readableStream.on("data", (chunk) => {
    console.log("Received Chunk:");
    console.log(chunk);
});

// Handle reading completion
readableStream.on("end", () => {

    console.log("\nFile reading completed successfully.");

    console.log("\n===== COPYING FILE USING PIPE =====");

    // Create readable stream for copying
    const source = fs.createReadStream("large.txt");

    // Create writable stream
    const destination = fs.createWriteStream("copy.txt");

    // Handle read errors
    source.on("error", (error) => {
        console.error("Reading Error:", error.message);
    });

    // Handle write errors
    destination.on("error", (error) => {
        console.error("Writing Error:", error.message);
    });

    // Copy using pipe
    source.pipe(destination);

    // Display success after copying
    destination.on("finish", () => {
        console.log("File copied successfully to copy.txt");
    });

});
    
// Handle initial reading errors
readableStream.on("error", (error) => {
    console.error("File Reading Error:", error.message);
});
