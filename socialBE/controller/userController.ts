import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { HTTP } from "../Error/mainError";
import crypto from "crypto";
import bcrypt from "bcrypt";
import cloudinary from "../utils/cloudinary";
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const value = crypto.randomBytes(32).toString("hex");

    const token = jwt.sign(value, "secret")

    const user = await prisma.authModel.create({
      data: { userName, email, password: hash, token },
    });

    // const tokenID = jwt.sign({id : user.id}, "secret")

    return res.status(HTTP.CREATED).json({
      message: "User created Sucessfully",
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "User not created Sucessfully",
      data: error,
    });
  }
};

export const viewUsers = async (req: Request, res: Response) => {
  try {
    const user = await prisma.authModel.findMany({
      include : {post : true}
    });
    return res.status(HTTP.OK).json({
      message: "users viewed Succefully",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "users not viewed Succefully",
      data: error.message,
    });
  }
};

export const viewUser = async (req: Request, res: Response) => {
  try {
    const { authID } = req.params;

    const user = await prisma.authModel.findUnique({
      where: { id: authID },
      include : {post : true}
    });
    return res.status(HTTP.OK).json({
      message: "user viewed Succefully",
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "user not viewed Succefully",
      data: error,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { authID } = req.params;

    await prisma.authModel.delete({
      where: { id: authID },
    });
    return res.status(HTTP.OK).json({
      message: "user deleted Succefully",
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "user not deleted Succefully",
      data: error,
    });
  }
};

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    // const getID : any = jwt.verify(token, "secret", (err, payload: any)=>{
    //     if(err){
    //         return err;
    //     }else{
    //         return payload
    //     }
    // })

    const user = await prisma.authModel.update({
      where: { id: userID },
      data: {
        token: "",
        verified: true,
      },
    });

    return res.status(HTTP.OK).json({
      message: "user verified Succefully",
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "user not verified Succefully",
      data: error,
    });
  }
};

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.authModel.findUnique({
      where: { email },
    });

    if (user) {
      const check = await bcrypt.compare(password, user.password);

      if (check) {
        if (user.verified && user.token === "") {
          return res.status(HTTP.CREATED).json({
            message: `welcome back ${user.userName}`,
            data: user.id,
          });
        } else {
          return res.status(HTTP.BAD).json({
            message: "please go and verify your account",
          });
        }
      } else {
        return res.status(HTTP.BAD).json({
          message: "please check your password",
        });
      }
    } else {
      return res.status(HTTP.BAD).json({
        message: "Account not found",
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "user not verified Succefully",
      data: error,
    });
  }
};

export const updateUserName = async (req: Request, res: Response) => {
  try {
    const { authID } = req.params;
    const { userName } = req.body;

    const user = await prisma.authModel.update({
      where: { id: authID },
      data: { userName },
    });

    return res.status(HTTP.CREATED).json({
      message: "user info updated Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "user info not updated Successfully",
      data: error,
    });
  }
};

export const updateUserAvatar = async (req: any, res: Response) => {
  try {
    const { authID } = req.params;

    const { secure_url, public_id } = await cloudinary.uploader.upload(
      req.path.file
    );

    const user = await prisma.authModel.update({
      where: { id: authID },
      data: {
        avatar: secure_url,
        avatarID: public_id,
      },
    });

    return res.status(HTTP.CREATED).json({
      message: "user avatar updated Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD).json({
      message: "user avatar not updated Successfully",
      data: error,
    });
  }
};

export const resetAccountPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await prisma.authModel.findUnique({
      where: { email },
    });

    if (user?.verified && user.token === "") {
      const token = jwt.sign({ id: user.id }, "justRand");

      await prisma.authModel.update({
        where: { id: user.id },
        data: {
          token,
        },
      });

      // resetAccountPasswordMail(user, token);

      return res.status(201).json({
        message: "You can now change your Password",
        data: token,
      });
    } else {
      return res.status(404).json({
        message: "can't reset this password",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error verifying Account",
    });
  }
};

export const changeAccountPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

      const getID: any = jwt.verify(token, "justRand", (err, payload: any) => {
        if (err) {
          return err;
        } else {
          return payload.id;
        }
      });

    const user = await prisma.authModel.findUnique({
      where: { id: getID },
    });

    if (user?.verified && user.token !== "") {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      await prisma.authModel.update({
        where: { id: user.id },
        data: {
          password: hashed,
          token: "",
        },
      });

      return res.status(201).json({
        message: "Your password has been changed",
      });
    } else {
      return res.status(404).json({
        message: "can't reset this password",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error verifying Account",
    });
  }
};
