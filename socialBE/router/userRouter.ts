import express from "express";
import { changeAccountPassword, createUser, deleteUser, resetAccountPassword, signInUser, updateUserAvatar, updateUserName, verifyUser, viewUser, viewUsers } from "../controller/userController";
import multer from "multer"
// import { createAccountValidator } from "../utils/validator";
// import validatorHolder from "../utils/validatorHolder";

const router = express.Router()

const uploads = multer().single("image")

router.route("/viewUsers").get(viewUsers)
router.route("/:authID/viewUser").get(viewUser)

router.route("/createUser").post( createUser)
router.route("/signInUser").post(signInUser)

router.route("/:authID/verifyUser").patch(verifyUser)
router.route("/:authID/updateUserName").patch(updateUserName)
router.route("/:authID/updateUserAvatar").patch(uploads, updateUserAvatar)
router.route("/resetPassword").patch(resetAccountPassword)
router.route("/:token/changePassword").patch(changeAccountPassword)

router.route("/:authID/deleteUser").delete(deleteUser)

export default router