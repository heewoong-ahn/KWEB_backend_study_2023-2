const { runQuery } = require("./database");

(async () => {
  console.dir(await runQuery("select * from trains"));
})();
