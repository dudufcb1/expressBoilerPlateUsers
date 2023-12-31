const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

//Middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/api/v1", (req, res) => {
  //console.log(req.cookies); solo sirve si estan sin firmar, si no no muestra nada
  console.log(req.signedCookies);

  res.send("Hi");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server started, listening in the port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
