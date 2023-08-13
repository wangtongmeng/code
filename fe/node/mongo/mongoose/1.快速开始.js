const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  const studentSchema = new mongoose.Schema({
    name: String,
  });

  studentSchema.methods.speak = function speak() {
    const greeting = this.name ? "我的名字是 " + this.name : "我没有名字";
    console.log(greeting);
  };

  const Student = mongoose.model("Student", studentSchema);

  const lisi = new Student({ name: "lisi" });

  await lisi.save();
  lisi.speak(); // 我的名字是 lisi
  console.log(lisi.name); //  lisi

  const students = await Student.find();
  console.log(students); // [{_id: new ObjectId("64d816f38f98e419cd4fe658"), name: 'lisi',__v: 0}]
}
