const express = require('express');
const router = express.Router();

// Import route files
const userRoutes = require('./api/userRoutes'); 


// Use route files
router.use('/api/users', userRoutes);


module.exports = router;
