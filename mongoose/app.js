const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { Schema } = mongoose;

app.set("view engine", "ejs");

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/exampleDB")
  .then(() => {
    console.log("成功连结mongoDB....");
  })
  .catch((e) => {
    console.log(e);
  });

const studentSchema = new Schema({
  name: String,
  age: Number,
  major: String,
  scholarship: {
    merit: Number,
    other: Number,
  },
});

const Student = mongoose.model("Student", studentSchema); //students

Student.find({ "scholarship.merit": { $gte: 5000 } })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

// Student.findOneAndUpdate(
//   { name: "Jerry" },
//   { name: "Myer" },
//   { runValidators: true, new: false }
// )
//   .exec()
//   .then((newData) => {
//     console.log(newData);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Student.updateOne({ name: "Esther" }, { name: "Esther Lam" })
//   .exec()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Student.find({})
//   .exec()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// //制作一个route
// app.get("/", async (req, res) => {
//   try {
//     let data = await Student.findOne({ name: "Grace" }).exec(); //用了await就是返回直接array，应为后面是个fullfill状态
//     console.log(data);
//     res.send(data);
//   } catch (e) {
//     console.log(e);
//   }
// });

// Student.find({})
//   .exec()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   }); //返回一个promise,.find那里是query, 加.exec（）可返回promise

// const newObject = new Student({
//   name: "Esther",
//   age: 27,
//   major: "Mathematics",
//   scholarship: {
//     merit: 6000,
//     other: 7000,
//   },
// });

// newObject
//   .save()
//   .then((saveObject) => {
//     console.log("资料已经储存完毕，储存的资料是:");
//     console.log(saveObject);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.listen(3000, () => {
  console.log("伺服器正在聆听port 3000....");
});
