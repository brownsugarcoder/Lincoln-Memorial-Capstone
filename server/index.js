// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('Hello from the Lincoln Memorial backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
