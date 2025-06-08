// Include express module, and create an instance of express
const express = require('express');
const app = express();

// Set listen IP and port
const listenPort = 8080;
const listenIP = '127.0.0.1';

// Middleware to parse JSON bodies
app.use(express.json());

// GET /
app.get('/', (req, res) => {
  res.status(200).type('html');
  res.send('<h1>Hello from Express GET / route!</h1>');
});

// GET /name
app.get('/name', (req, res) => {
  // Destructure query params with default values
  const { first = 'Guest', last = '' } = req.query;

  // Use ternary to combine names or default
  const name = last ? `${first} ${last}` : first;

  // Return styled HTML response
  res.status(200).type('html');
  res.send(`<h1>Hello, ${name}</h1>`);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(listenPort, listenIP, () => {
  console.log(`Server running at http://${listenIP}:${listenPort}`);
});
