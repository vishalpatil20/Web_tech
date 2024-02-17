// controllers/dataController.js
const dataModel = require('../models/data');

async function storeData(req, res) {
  const { title, text } = req.body;

  try {
    const storedData = await dataModel.storeData(title, text);
    res.status(200).json({ message: 'Data stored successfully', data: storedData });
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { storeData };
