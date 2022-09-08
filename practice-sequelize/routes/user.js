const express = require("express");
// express 쓰겠다.
const user = require("../controller/UserController");
//user는 controller 폴더에 UseController를 쓰겠다.
const router = express.Router();
//express 함수중에 Router를 쓰겠다.
router.get("/", user.index);

router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

router.get("/signin", user.signin);
router.post("/signin", user.post_signin);

router.post("/profile", user.profile);
router.post("/profile/edit", user.profile_edit);
router.post("/profile/delete", user.profile_delete);

module.exports = router;
