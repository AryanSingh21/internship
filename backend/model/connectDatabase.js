const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/intern").then(() => {
    console.log("MongoDb is connected");
  });
};
connectDatabase();
module.exports = connectDatabase;
