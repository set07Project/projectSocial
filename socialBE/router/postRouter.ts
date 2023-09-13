import express from "express";
import { createPost, deleteUserPost, updateUserPost, viewAllPost, viewOnePost, viewOneUserPost } from "../controller/postController";
import { upload } from "../utils/multer";

const router = express.Router()

router.route("/:userID/viewAllPost").get(viewAllPost)
router.route("/:postID/viewOnePost").get(viewOnePost)
router.route("/:userID/viewOneUserPost").get(viewOneUserPost)

router.route("/:userID/createPost").post(upload,createPost)

router.route("/:userID/:postID/deletePost").delete(deleteUserPost)

router.route("/:userID/:postID/updatePost").patch(upload,updateUserPost)

export default router