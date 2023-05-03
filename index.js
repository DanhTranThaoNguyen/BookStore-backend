const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// Install Server
app.listen(8000, () => {
  console.log("Server is running...");
});

// CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Cannot connect to MongoDB", err);
    process.exit();
  });
// ROUTER
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

// const port = process.env.SERVER_PORT || 3000
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })

// mongoose.connect((process.env.MONGODB_URI), () => {
//     console.log("Connected to MongoDB");
// })
