const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/mw-coach')));

// Handle Angular routing - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mw-coach/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`MW Coach server is running on port ${PORT}`);
  console.log(`Access it at: http://localhost:${PORT}`);
});
