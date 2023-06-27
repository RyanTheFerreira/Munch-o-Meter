const express = require('express');
const foodRoutes = require('./foodRoutes');

const app = express();

app.use('api', foodRoutes);






app.listen(3000, () => {
    console.log('Server is running on port 3000');
});