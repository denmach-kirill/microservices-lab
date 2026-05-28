const express = require('express');
const axios = require('axios');
const app = express();

app.get('/info', async (req, res) => {
  try {
    const response = await axios.get('http://user-service:3001/user');
    res.json({
      message: "Data received from user-service",
      user: response.data
    });
  } catch (error) {
    res.status(500).json({
      error: "Cannot connect to user-service"
    });
  }
});

app.listen(3002, () => {
  console.log('Info service running on port 3002');
});
