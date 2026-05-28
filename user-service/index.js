const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  res.json({
    id: 1,
    name: "Kirill",
    role: "student"
  });
});

app.listen(3001, () => {
  console.log('User service running on port 3001');
});
