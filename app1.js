const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("*", (req, res) => {
  res.status(404).send("错误页面。。。");
});

//port, callback
app.listen(3000, () => {
  console.log("伺服器正在聆听port 3000...");
});
