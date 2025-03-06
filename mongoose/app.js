const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { Schema } = mongoose;
const fs = require("fs");

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

const studentSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 25 },
    age: { type: Number, min: [0, "年龄不能小于0"] },
    major: {
      type: String,
      required: function () {
        return this.scholarship.merit >= 3000;
      },
      enum: [
        "Chemistry",
        "Computer Science",
        "Mathematices",
        "Civil Engineering",
        "undecided",
      ],
    },
    scholarship: {
      merit: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
    },
  }
  // {
  //   statics: {
  //     findAllMajorStudents(major) {
  //       return this.find({ major: major }).exec();
  //     },
  //   },
  // }
);

// studentSchema.statics.findAllMajorStudents = function (major) {
//   return this.find({ major: major }).exec();
// };

studentSchema.static("findAllMajorStudents", function (major) {
  return this.find({ major: major }).exec();
});

studentSchema.methods.printTotalScholarship = function () {
  return this.scholarship.merit + this.scholarship.other;
};

studentSchema.pre("save", () => {
  fs.writeFile("record.txt", "A new data will be saved...", (e) => {
    if (e) throw e;
  });
});

// const studentSchema = new Schema(
//   {
//     name: { type: String, required: true, maxlength: 25 },
//     age: { type: Number, min: [0, "年龄不能小于0"] },
//     major: {
//       type: String,
//       required: function () {
//         return this.scholarship.merit >= 3000;
//       },
//       enum: [
//         "Chemistry",
//         "Computer Science",
//         "Mathematices",
//         "Civil Engineering",
//         "undecided",
//       ],
//     },
//     scholarship: {
//       merit: { type: Number, default: 0 },
//       other: { type: Number, default: 0 },
//     },
//   },
//   {
//     methods: {
//       printTotalScholarship() {
//         return this.scholarship.merit + this.scholarship.other;
//       },
//     },
//   }
// );

const Student = mongoose.model("Student", studentSchema); //students

let newStudent = new Student({
  name: "小明",
  age: 30,
  major: "Computer Science",
  scholarship: {
    merit: 5000,
    other: 1000,
  },
});

newStudent
  .save()
  .then((data) => {
    console.log("资料已经储存");
  })
  .catch((e) => {
    console.log(e);
  });

// Student.findAllMajorStudents("Mathematics")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Student.find({})
//   .exec()
//   .then((arr) => {
//     arr.forEach((student) => {
//       console.log(
//         student.name + "的总奖学金金额是" + student.printTotalScholarship()
//       );
//     });
//   });

// let newStudent = new Student({
//   name: "Max",
//   age: 27,
//   major: "Civil Engineering",
//   scholarship: {
//     merit: 1500,
//     other: 2000,
//   },
// });

// newStudent
//   .save()
//   .then((data) => {
//     console.log("资料储存成功");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Student.find({ "scholarship.merit": { $gte: 5000 } })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

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
