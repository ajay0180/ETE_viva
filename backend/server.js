const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const ItemRoute = require("./routes/ItemRoute");

dotenv.config({ path: "./config/.env" });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173" }));

//api's
app.use("/api/v1/Item", ItemRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening at port: ${port}`);
  connectDB();
});
