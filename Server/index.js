require("dotenv").config();
require("./config/DbConfig").config();
const express = require("express");
const cookieParser = require("cookie-parser");

//Routers
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");

const app = express();

const PORT = process.env.PORT || 8000;

//MiddleWares
app.use(express.json());
app.use(cookieParser());

//Routing
app.use("/auth", authRouter);
app.use("/profile", profileRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
