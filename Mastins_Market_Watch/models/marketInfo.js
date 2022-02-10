const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarketInfo = new Schema(
  {
    stocks: { type: String, required: false },
    userWatchList: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('marketInfos', MarketInfo);
