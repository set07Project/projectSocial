import { Router } from "express";
import {
  deleteComment,
  likeComment,
  makeComment,
  unLikeComment,
} from "../controller/commentController";

const router = Router();

router.route("/:userID/postID/make-comment").post(makeComment);
router.route("/:userID/postID/commentID/like-comment").post(likeComment);
router.route("/:userID/postID/commentID/unlike-comment").post(unLikeComment);
router.route("/:userID/postID/commentID/delete-comment").post(deleteComment);
