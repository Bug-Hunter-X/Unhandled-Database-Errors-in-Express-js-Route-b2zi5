const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      // Handle database errors explicitly
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to fetch user' });
    } else if (!user) {
      // Handle the case where the user is not found
      return res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});