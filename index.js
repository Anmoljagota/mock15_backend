const express = require("express");
const { connection } = require("./Config/db");
const { postDataroute } = require("./Route/PostData.route");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", postDataroute);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running on port ${process.env.PORT}`);
});
