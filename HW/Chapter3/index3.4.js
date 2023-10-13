const express = require("express");
const app = express();
const port = 3000;
//요청 객체를 통한 body데이터를 정상적으로 받기 위한 설정
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.send(
    `<form method="post" action="/login">
<div>
<label>Username:</label>
<input id="username-input" name="username" type="text">
</div>
<div>
<label>Password:</label>
<input id="password-input" name="password" type="password">
</div>
<div>
<button type="submit">Submit</button>
</form>`
  )
);
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.send(`Username = ${username} <br> Password = ${password}`);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));
