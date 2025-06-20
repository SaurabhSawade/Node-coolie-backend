const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;

app.use(cors({ origin: 'https://node-cookie-frontend.vercel.app', credentials: true }));
app.use(cookieParser());
app.use(express.json());

//Set Cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'Saurabh', { httpOnly: true });
  // res.cookie('username', 'Saurabh');
  res.status(200).json({ message: 'Cookie set!' });
});

//Get Cookie
app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.status(200).json({ message: `Hello, ${username}` });
  } else {
    res.status(404).json({ error: 'Cookie not found' });
  }
});

//Status Code Test Routes
app.get('/status/200', (req, res) => {
  res.status(200).json({ message: 'Success (200)' });
});

app.get('/status/201', (req, res) => {
  res.status(201).json({ message: 'Resource created (201)' });
});

app.get('/status/400', (req, res) => {
  res.status(400).json({ error: 'Bad Request (400)' });
});

app.get('/status/404', (req, res) => {
  res.status(404).json({ error: 'Not Found (404)' });
});

app.get('/status/500', (req, res) => {
  res.status(500).json({ error: 'Internal Server Error (500)' });
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));