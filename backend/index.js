const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');  // We'll need this for cross-origin requests

// Basic middleware
app.use(express.json());

// Enable CORS
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Environment is working correctly!');
});

// Test API endpoint
app.get('/api/test', (req, res) => {
  res.json({
    status: 'success',
    message: 'API is working',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Your development environment is ready!');
});
