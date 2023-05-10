const router = require("express").Router();
const { catchErrors } = require("../handlers/error.handler")
const auth = require("../middlewares/auth.middleware")
const chatController = require("../controllers/chatroom.controller");


router.post("/", auth, catchErrors(chatController.createChartroom))

module.exports = router