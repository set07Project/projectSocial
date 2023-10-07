import {Router} from "express"
import { deleteRequest, makeRequest } from "../controller/RequestController";

const router = Router();

router.route("/:userID/friendID/make-request").post(makeRequest)
router.route("/:userID/friendID/delete-request").post(deleteRequest)