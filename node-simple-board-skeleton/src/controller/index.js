const { Router } = require("express");
const ctrl = require("./ctrl");
const auth = require("./auth");
const article = require("./article");
const router = Router();
router.get("/", ctrl.indexPage);
router.get("/articles/page/:page(\\d+)", ctrl.listArticle);
router.get("/articles", ctrl.latestArticles);

router.use("/article", article);
router.use("/auth", auth);
// /auth로 시작하는 요청은 import한 auth=./auth.index.js에서 export한 router를 써라
module.exports = router;
