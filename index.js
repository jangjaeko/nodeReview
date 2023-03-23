const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dog", (req, res) => {
  res.json({ sound: "멍멍" });
});

app.get("/cat", (req, res) => {
  res.send({ sound: "야옹" });
});
// json send
app.get("/user/:id", (req, res) => {
  // const q = req.params
  // console.log(q.id)
  const q = req.query;
  console.log(q);
  console.log(q.name);
  // res.send(q.id)
  // json 향식으로 query 받기
  res.json({ userid: q.name });
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);
  if (name == "dog") {
    res.json({
      sound: "멍멍",
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F39547%2Ffwaokgjxtaex7chz__1080_790.jpg&w=1000&q=75",
    });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(3000);
