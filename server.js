const express = require('express');
const app = express();

// Trust the proxy to get real IP address (important for Gitpod or similar environments)
app.set('trust proxy', true);

// Root endpoint (optional)
app.get('/', (req, res) => {
  res.send('Request Header Parser Microservice is running');
});

// The /api/whoami endpoint that returns the JSON object required by FreeCodeCamp
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
