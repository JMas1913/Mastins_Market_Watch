const db = require('../db');
const User = require('../models/user');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const users = [
    { name: 'John Doe', password: 'AbCd1234' },
    { name: 'Jane Smith', password: '1234AbCd' },
    { name: 'Joe Miller', password: '123abc' }
  ];

  await User.insertMany(users);
  console.log('Created some users!');
};
const run = async () => {
  await main();
  db.close();
};

run();
