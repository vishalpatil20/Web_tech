// models/data.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function storeData(title, text) {
  const storedData = await prisma.data.create({
    data: {
      title: title,
      text: text,
    },
  });

  return storedData;
}
async function deleteData(req, res) {
  const id = parseInt(req.params.id, 10);

  try {
    await prisma.data.deleteDataById(id);
    res.json({ success: true, message: 'Data deleted successfully' });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = {
  storeData,
  deleteData,
};
