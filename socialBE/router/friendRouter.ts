import { Router } from "express";
import { acceptRequest, unFriend } from "../controller/friendController";

const router = Router();

router.route("/:userID/friendID/accept-request").get(acceptRequest);
router.route("/:userID/friendID/unfriend").get(unFriend);
