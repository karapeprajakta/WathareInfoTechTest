// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const SampleData = require('../models/SampleData');

// Import raw sample data
router.post('/import', async (req, res) => {
  try {
    // Logic to import raw sample data
    res.json({ message: 'Sample data imported successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch data based on timestamps
router.get('/', async (req, res) => {
  try {
    const { startTime, endTime } = req.query;
    const data = await SampleData.find({ timestamp: { $gte: startTime, $lte: endTime } });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Filter data based on time range
router.get('/filter', async (req, res) => {
  try {
    // Logic to filter data based on time range
    res.json({ message: 'Data filtered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
