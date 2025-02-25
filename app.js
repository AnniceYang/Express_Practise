const express = require("express"); //得到function
const app = express(); //执行这个function得到一个物件app
const port = 3000;

//middlewares  定义一个中间件函数
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HTTP request, GET, POST, PUT, DELETE

app.get("/", (req, res) => {
  res.send("Hello World! 欢迎来到网站首页");
});

app.get("/anotherPage", (req, res) => {
  res.send("欢迎来到另一个页面~");
});

// app.get("/example", (req, res) => {
//   // res.send("<h1>这是一个h1标签的示范</h1>"); // express帮我们设定了header部分
//   // res.send("<p>这是一个段落</p>"); //这行会使得express又帮我们设定一次header部分

//   res.sendFile(__dirname + "/example.html");
// });

// app.get("/example", (req, res) => {
//   let obj = {
//     title: "Web Design",
//     website: "udemy",
//   };
//   res.json(obj);
// });

app.get("/actualExample", (req, res) => {
  res.send("真正的资源在这里");
});

// app.get("/example", (req, res) => {
//   res.redirect("/actualExample");
// });

app.get("/example", (req, res) => {
  res.sendFile(__dirname + "/example.html");
});

app.get("/fruit", (req, res) => {
  res.send("欢迎来到水果页面");
});

app.get("/fruit/:someFruit", (req, res) => {
  res.send("欢迎来到" + req.params.someFruit + "页面");
});

app.post("/formhandling", (req, res) => {
  let { email, password } = req.body;
  res.send("你的信箱是" + email);
});

app.get("*", (req, res) => {
  res.send("你所找的页面不存在");
});

//port, callback
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
