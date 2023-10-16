const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create an SQLite database or open it if it exists
const db = new sqlite3.Database('newsletter.db');

// Create a table for subscriptions if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE
    )
  `);
});

// Subscribe a user
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Insert the email into the SQLite database
  db.run('INSERT OR IGNORE INTO subscriptions (email) VALUES (?)', email, function (error) {
    if (error) {
      res.status(500).json({ message: 'Failed to subscribe' });
    } else if (this.changes === 0) {
      res.json({ message: 'Already subscribed' });
    } else {
      res.json({ message: 'Subscribed successfully' });
    }
  });
});

// Unsubscribe a user
app.post('/unsubscribe', (req, res) => {
  const { email } = req.body;

  // Delete the email from the SQLite database
  db.run('DELETE FROM subscriptions WHERE email = ?', email, function (error) {
    if (error) {
      res.status(500).json({ message: 'Failed to unsubscribe' });
    } else if (this.changes === 0) {
      res.json({ message: 'Email not found' });
    } else {
      res.json({ message: 'Unsubscribed successfully' });
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
