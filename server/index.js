const connectDB = require("./starter/db");
const express = require("express");
const app = express();
const cors = require("cors");
import cookieParser from 'cookie-parser';
import compress from 'compression';
import helmet from 'helmet';

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors());

// ASSIGN PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
