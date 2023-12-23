const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors'); // Import the 'cors' package
const PORT = 3000;

// Middleware
app.use(express.json()); // Body parser middleware
app.use(express.static(path.join(__dirname, '..', 'client_side'))); // Static files serving
app.use(cors());


require('dotenv').config();

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '8088713340',
  database: 'user_auth'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    // Handle connection error here
  } else {
    console.log('Connected to MySQL database');
  }
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the server!'); // Or render an HTML file here
  });

app.get('/users', async (req, res) => {

    try {
      // Fetch users from the database and send as JSON response
      const users = await getUserDataFromDatabase(); // Implement this function
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
    }
  });
// user get
const getUserDataFromDatabase = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  app.get('/register', (req, res) => {
    res.send(); // Or render an HTML file here
  });

// Register/Create User endpoint
app.post('/register', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = { username: req.body.username, password: hashedPassword };
      console.log(username);
      let sql ="INSERT INTO users (username, password) VALUES (?, ?)"
      connection.query(sql, [newUser.username, newUser.password], (err, result) => {
        if (err) {
          console.error('Error creating user:', err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('User created successfully');
          res.status(201).send('User created successfully');
        }
      });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
// Login endpoint (currently using in-memory array, replace with DB logic)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query the database to find the user based on the provided username
    connection.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
      if (error) {
        console.error('Error finding user:', error);
        return res.status(500).send('Internal Server Error');
      }

      if (results.length === 0) {
        return res.status(400).send('Cannot find user');
      }

      const user = results[0]; // Assuming username is unique, so we take the first result

      try {
        // Compare the submitted password with the hashed password retrieved from the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Unauthorized');
        }
      } catch (compareError) {
        console.error('Password comparison error:', compareError);
        res.status(500).send('Internal Server Error');
      }
    });
  } catch (queryError) {
    console.error('Query error:', queryError);
    res.status(500).send('Internal Server Error');
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
