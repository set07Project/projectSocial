import { Router } from "express";
import { changeUserPassword, deleteUserInfo, getAllUsers, getOneUsers, registerUser, resetUserPassword, signInUser, updateAvatar, updateUserInfo, verifiedUser } from "../controller/authController";

const authRouter = Router();

authRouter.route("/register").post(registerUser)
authRouter.route("/sign-in").post(signInUser)
authRouter.route("/get-all").get(getAllUsers)
authRouter.route("/get-one-user").get(getOneUsers)
authRouter.route("/authID/update-avatar").patch(updateAvatar)
authRouter.route("/authID/update-user").patch(updateUserInfo)
authRouter.route("/authID/delete-user").delete(deleteUserInfo)
authRouter.route("/authID/verify-user").patch(verifiedUser)
authRouter.route("/reset-user-password").patch(resetUserPassword)
authRouter.route("/authID/change-user-password").patch(changeUserPassword)

export default authRouter