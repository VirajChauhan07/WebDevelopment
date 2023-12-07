const mongoose = require("mongoose");

// Connecting to a local port
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number },
  reviews: { type: String },
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Pineapple",
  rating: 5,
  reviews: "This is the best pineapples I have ever tasted",
});

// const personSchema = new mongoose.Schema({
//     name:{type: String, required:true},
//     age:{type:Number},
// })

// const Person = mongoose.model("Person",personSchema);

// const person = new Person({
//     name:"Aditya",
//     age:24
// });

// Fruit.insertMany([fruit])
//     .then(function () {
//         console.log("Successfully saved defult items to DB");
//       }).catch(function (err) {
//         console.log(err);
//       });
