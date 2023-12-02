const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const morgan = require("morgan");
const authRouter = require("./routes/authRoutes");

//Middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi");
});
app.use("/api/v1/auth", authRouter);

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
