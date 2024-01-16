const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');
const app = express();


app.use(cors());

app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
