const { Router } = require("express");
const ctrl = require("./ctrl");
const router = Router();
router.get("/sign_in", ctrl.signInForm);
// /sign_in으로 get요청이 되면 ctrl.signInForm을 실행하라
router.post("/sign_in", ctrl.signIn);
router.get("/sign_up", ctrl.signUpForm);
router.post("/sign_up", ctrl.signUp);
router.get("/sign_out", ctrl.signOut);
module.exports = router;
