const express = require('express');
const router = express.Router();
const getDataController = require('../controller/getDataController');

// Define routes
router.get('/data', getDataController.getData); // Assuming getData is the function you want to call in the controller
router.delete('/data/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      console.log('Deleting data with ID:', id);
  
      // Uncomment the following line for testing without actually deleting data
      // return res.json({ success: true, message: 'Data deleted successfully' });
  
      const result = await getDataController.deleteData(req, res);
      res.json(result);
    } catch (error) {
      console.error('Error deleting data:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

module.exports = router;
