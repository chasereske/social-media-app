import express from "express";
import userCtrl from "../controllers/user.controller";
import user from "../models/user";

const router = express.Router();

router.route("/api/users")
    .get(userCtrl.list)
    .post(userCtrl.create)

router.route('/api/user/:userId')
    .get(userCtrol.read)
    .put(userCtrl.update)
    .delete(userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
