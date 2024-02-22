const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

const authRouter = require("./api/auth/index");
const productRouter = require("./api/product/index");
const userRouter = require("./api/user/index");

app.use(cors());

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
