const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Custom routes for different pages
app.get('/code', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'code.html'));
});

app.get('/code1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'code1.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/Next', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Next.html'));
});

app.get('/spinner2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'spinner2.html'));
});

app.get('/spiner3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'spinner3.html'));
});

app.get('/spinner4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'spinner4.html'));
});

app.get('/spiner5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'spinner5.html'));
});

app.get('/spinner6', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'spinner6.html'));
});

app.get('/spiner7', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'spinner7.html'));
});

app.get('/verify', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'verify.html'));
});

app.get('/verified', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'verified.html'));
});

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and apply timeout protection
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});

// Timeout protection: useful for slow users or external APIs
server.keepAliveTimeout = 120000; // 2 minutes
server.headersTimeout = 120000;