const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db_bucketlist"),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("🍪 connected to database!");
(error: any) => {
  if (error) return console.log(error);
};

export = mongoose;
