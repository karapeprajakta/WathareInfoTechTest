// backend/routes/weatherRoutes.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Fetch temperature data from third-party API
router.get('/', async (req, res) => {
  try {
    // Logic to fetch temperature data from third-party API
    res.json({ message: 'Temperature data fetched successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
