import express from "express";
import { createComment, viewAllComment } from "../controller/commentController";

const router = express.Router()

router.route("/:userID/:postID/viewAllComment").get(viewAllComment)

router.route("/:userID/:postID/createComment").post(createComment)

export default router