const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI; // Get this from your MongoDB Atlas Dashboard
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Failed to connect:', err);
    return;
  }
  console.log('Connected successfully to server');

  const db = client.db('DivyasClothingWarehouse'); 


  
  client.close();
});
