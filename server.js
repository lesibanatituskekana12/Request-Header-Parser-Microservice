const express = require('express');
const app = express();

app.set('trust proxy', true); // Required to get real IP address

app.get('/', (req, res) => {
  res.send('Header Parser Microservice is live');
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
  console.log(`App listening on port ${PORT}`);
});
