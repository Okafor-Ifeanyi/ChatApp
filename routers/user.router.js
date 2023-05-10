const router = require("express").Router();
const { catchErrors } = require("../handlers/error.handler")

const userController = require("../controllers/user.controller");

router.post("/login", catchErrors(userController.login))
router.post("/register", catchErrors(userController.register))

module.exports = router