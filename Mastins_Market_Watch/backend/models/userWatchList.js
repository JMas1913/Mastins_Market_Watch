const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserWatchList = new Schema(
  {
    user: { type: String, required: true },
    stocks: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('userWatchLists', UserWatchList);
