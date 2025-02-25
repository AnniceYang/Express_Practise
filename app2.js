const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// app.get("/:name", (req, res) => {
//   let { name } = req.params;
//   // JS中 出现object 属性与variable相同的状况
//   res.render("index", { name });
// });

app.get("/", (req, res) => {
  const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
    { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
    { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
    { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
  ];

  res.render("index", { languages });
});

app.get("/example1", (req, res) => {
  let { name, age } = req.query;
  res.render("response", { name, age });
});

//port, callback
app.listen(3000, () => {
  console.log("伺服器正在聆听port 3000...");
});
