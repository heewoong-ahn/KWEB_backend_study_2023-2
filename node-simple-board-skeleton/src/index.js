require("./env");
const app = require("./app");

const port = process.env.PORT || 4000;

const { ArticleDAO, UserDAO } = require("./DAO");

app.listen(port, () => {
  console.log(`KWEB Project: Listening on port ${port}.`);

  // (async () => {
  //   await UserDAO.create("username1", "password1", "nickname1");
  //   await UserDAO.create("username2", "password2", "nickname2");
  //   await ArticleDAO.create("title1", "content1", { id: 1 });
  //   console.log("Done");
  // })();
});
