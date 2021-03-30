const connectDB = require("./starter/db");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const helmet = require("helmet");
//const userRoutes = require("./routes/user.routes");
//const authRoutes = require("./routes/auth.routes");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

//mount routes
//app.use("/", userRoutes);
//app.use("/", authRoutes);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

// ASSIGN PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
