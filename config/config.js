const config = {
  env: process.env.NODE_ENV || "development",
  port: process.nextTick.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
  "mongodb+srv://user2020:potato@cluster0.k1bzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
};

export default config;
