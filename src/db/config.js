const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/e-commerce-data")
.then(() => {
    console.log('Connected to MongoDB');

    // Start your application or perform database operations here

  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });