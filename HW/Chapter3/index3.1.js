const express = require("express");
const app = express();
const port = 3000;
//요청 객체를 통한 body데이터를 정상적으로 받기 위한 설정
app.use(express.urlencoded({ extended: true }));
const objectToString = (obj) =>
  Object.keys(obj)
    .map((k) => `${k}: ${obj[k]}`)
    .join("\n");
app.get("/", (req, res) => res.send(objectToString(req.query)));
app.post("/", (req, res) => res.send(objectToString(req.body)));
app.put("/", (req, res) => res.send(objectToString(req.body)));
app.delete("/", (req, res) => res.send(objectToString(req.body)));
app.listen(port, () => console.log(`Server listening on port ${port}!`));

// app.set("views", `${__dirname}/views`);
// app.set("view engine", "pug");
// app.get("/", (req, res) => res.render("index3.1.pug"));
// app.post("/post", (req, res) => res.send("post success"));
