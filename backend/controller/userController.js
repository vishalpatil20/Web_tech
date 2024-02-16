// controllers/userController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('../utils/bycrpt');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    });

    res.json({ message: 'Registration successful!', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  registerUser,
};
