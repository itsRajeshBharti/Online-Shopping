require("dotenv").config();
const express = require("express");
const upload = require("express-fileupload");
const bodyparse = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors()); // accepting routes from all origin.
app.use(upload()); // used for accepting multipart-form-data.
app.use("/content", express.static("public")); // used to serve static content from the server.
app.use(bodyparse.json()); // used for accepting raw(json) data.
app.use(bodyparse.urlencoded({ extended: true })); // used for accepting x-www-form-urlencoded

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: true, message: "Welcome to Online Shopping App." });
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
