
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

// Main route
app.get('/', (req, res) => {
  try {
    const response = {
      email: "belloibrahimolawale@gmail.com", 
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/ibraheembello/Public-API-to-Retrieve-Basic-Information" 
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});