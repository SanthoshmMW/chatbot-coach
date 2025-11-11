const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist/mw-coach');

// Serve static files from the dist directory
app.use(express.static(distPath));

// Handle Angular routing - send all non-file requests to index.html
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`MW Coach server is running on port ${PORT}`);
  console.log(`Access it at: http://localhost:${PORT}`);
});
