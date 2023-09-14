import express from "express";
import { createPost, deleteUserPost, updateUserPost, viewAllPost, viewOnePost, viewOneUserPost } from "../controller/postController";
import multer from "multer"

const router = express.Router()

const uploads = multer().single("image")

router.route("/:userID/viewAllPost").get(viewAllPost)
router.route("/:postID/viewOnePost").get(viewOnePost)
router.route("/:userID/viewOneUserPost").get(viewOneUserPost)

router.route("/:userID/createPost").post(uploads, createPost)

router.route("/:userID/:postID/deletePost").delete(deleteUserPost)

router.route("/:userID/:postID/updatePost").patch(updateUserPost)

export default router