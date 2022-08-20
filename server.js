const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// var authRoutes = require("./routes/auth");

const app = express();

const { PORT } = require("./core/index");
const { Student } = require("./dbmodule/module");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("short"));

app.post("/student", (req, res, next) => {
  if (!req.body.StudentId) {
    res.status(409).send(`
    Please send DefaultLocationName  in json body
    e.g:
    "StudentId":"1",
`);
    return;
  } else {
    const newStudent = new Student({
      StudentId: req.body.StudentId,
      StudentName: req.body.StudentName,
      StudentClass: req.body.StudentClass,
    });

    newStudent.save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "an error occured : " + err,
        });
      });
  }
});




app.get("/", (req, res, next) => {
  Student.find({}, (data) => {
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
