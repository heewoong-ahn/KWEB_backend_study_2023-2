const express = require("express");
const app = express();
const port = 3000;

//:page 형식은 req.params 형식으로 받아옴.
app.get("/board/page/:page", (req, res) => {
  const { page } = req.params;
  res.send(`This is page # ${page}`);
});
app.post("/", (req, res) => res.send(objectToString(req.body)));
app.put("/", (req, res) => res.send(objectToString(req.body)));
app.delete("/", (req, res) => res.send(objectToString(req.body)));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
