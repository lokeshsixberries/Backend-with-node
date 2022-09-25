const expess = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");
const hbs = require("hbs");
const bcrypt = require("bcrypt");

const Student = require("./mongo/models/Student");
const connect = require("./mongo/Connection");
const { toast } = require("react-toastify");
const app = expess();

//use the required module
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.set("view engine", "hbs");

// Data base connection
connect();

//for password crypt
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const salt = bcrypt.genSaltSync(saltRounds);

//render the html pages
app.get("/", (req, res) => {
  Student.find()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.render("index");
});

app.post("/", (req, res) => {
  const Student_insert = new Student({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
  });

  Student_insert.save().then(() => {
    toast.success("Data saved Successfully !!!");
    res.redirect("/");
  });
});

//run the app on port
app.listen(3000);
