
// server.js

// Import HTTP module
const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {

    // Home route
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to ABC College!");
    }

    // About route
    else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(
            "ABC College is a leading educational institute providing quality education and professional training."
        );
    }

    // Courses route
    else if (req.url === "/courses") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Available Courses</h1>
            <ul>
                <li>Web Development</li>
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
                <li>Graphic Designing</li>
            </ul>
        `);
    }

    // Students route
    else if (req.url === "/students") {
        const students = [
            {
                id: 1,
                name: "Ali",
                course: "Web Development"
            },
            {
                id: 2,
                name: "Sara",
                course: "Artificial Intelligence"
            },
            {
                id: 3,
                name: "Ahmed",
                course: "Data Science"
            }
        ];

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(students, null, 2));
    }

    // Unknown route
    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page Not Found");
    }

});

// Start server on port 3000
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Campus server running at http://localhost:${PORT}`);
});
