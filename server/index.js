const connectDB = require("./starter/db");
const express = require("express");
const app = express();
const cors = require("cors");

connectDB();

app.use(express.json());
app.use(cors());

// ASSIGN PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
