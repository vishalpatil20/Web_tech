// controllers/userController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('../utils/bycrpt');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists based on the email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hashPassword(password);

    // Create the new user
    const user = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    });

    res.json({ message: 'Registration successful!', user });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  registerUser,
};
