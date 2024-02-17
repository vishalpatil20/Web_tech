// Controller (controller.js or similar)
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getData = async (req, res) => {
  try {
    const data = await prisma.data.findMany(); // Replace 'data' with your actual table name
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function deleteData(req, res) {
  const id = parseInt(req.params.id, 10);
  try {
    await prisma.data.delete({
      where: {
        id: id,
      },
    });
    res.json({ success: true, message: 'Data deleted successfully' });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = {
  getData,
  deleteData,
};
