require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const DbConnect = require("./database.js");
const routes = require("./routes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api", routes);

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

const PORT = process.env.PORT || 5000;

DbConnect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server connected to http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
