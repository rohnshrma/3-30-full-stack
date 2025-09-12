import { Router } from "express";
import { GET_TASKS, POST_TASK } from "../controllers/taskController.js";

const router = Router();

router.route("/").get(GET_TASKS).post(POST_TASK);

export default router;
