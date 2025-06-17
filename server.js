const express = require('express');
const app = express();

// Enable trust proxy to get real IP address when hosted
app.set('trust proxy', true);

app.get('/', (req, res) => {
  res.send('Request Header Parser Microservice');
});

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
