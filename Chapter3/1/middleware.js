const express = require("express");
const app = express();
const port = 3000;
app.use((req, res, next) => {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(`Random Number: ${randomNumber}`);
  if (randomNumber % 3) return next();
  else return res.sendStatus(403);
});
app.use((req, res, next) => {
  const { method, path } = req;
  console.log(`${method} ${path}`);
  return next();
});

app.get("/", (req, res) =>
  res.send(` 
<h1>POST 요청</h1>
<form action="/post_method" method="post">
    <input type="submit" value="post">
</form>
`)
);
app.post("/post_method", (req, res) => res.send("POST requested"));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
