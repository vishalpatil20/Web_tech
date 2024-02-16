const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async ({ username, email, password }) => {
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
};
