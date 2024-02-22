// server.js
const express = require('express');
const cors = require('cors');

const routes = require('./route/getDataRoute');
const userRoutes = require('./route/userRoutes');
const dataRoute = require('./route/dataRoute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// get requests
app.use('/api', routes);
// post requests
app.use('/user', userRoutes);
app.use('/api', dataRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});