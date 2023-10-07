import { Router } from "express";
import {
  deleteReply,
  likeReply,
  replyComment,
  unLikeReply,
} from "../controller/replyController";

const router = Router();

router.route("/:userID/postID/commentID/reply-comment").post(replyComment);
router.route("/:userID/postID/commentID/like-reply").post(likeReply);
router.route("/:userID/postID/commentID/unlike-reply").post(unLikeReply);
router.route("/:userID/postID/commentID/delete-reply").post(deleteReply);
