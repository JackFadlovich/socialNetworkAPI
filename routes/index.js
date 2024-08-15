const express = require('express');
const router = express.Router();

// Import route files
const userRoutes = require('./api/userRoutes'); 
const thoughtRoutes = require('./api/thoughtRoutes');

// Use route files
router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes); 

module.exports = router;
