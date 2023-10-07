import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const acceptRequest = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;

    const user : any = await prisma.authModel.findUnique({
      where: { id: userId },
    });
    const friend : any = await prisma.authModel.findUnique({
      where: { id: friendId }
    });

    if (user) {
        if (friend) {
            await user.friends.push(friend.id)
            user.save();
            await friend.friends.push(user.id)
            friend.save();
        } else {
            return res.status(400).json({
                message: "Friend not found"
              });
        }
    } else {
        return res.status(400).json({
            message: "User not found"
          });
    }
    return res.status(200).json({
        message : "Accepted Request Successfully"
    })
  } catch (error) {
    return res.status(400).json({
      message: "Error Accepting Request",
      data: error,
    });
  }
};

export const unFriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;

    const user : any = await prisma.authModel.findUnique({
      where: { id: userId },
    });
    const friend : any = await prisma.authModel.findUnique({
      where: { id: friendId }
    });

    if (user) {
        if (friend) {
            await user.friends.pull(friend.id)
            user.save();
            await friend.friends.pull(user.id)
            friend.save();
        } else {
            return res.status(400).json({
                message: "Friend not found"
              });
        }
    } else {
        return res.status(400).json({
            message: "User not found"
          });
    }
    return res.status(200).json({
        message : "Unfriend Successful"
    })
  } catch (error) {
    return res.status(400).json({
      message: "Error Unfriending Friend",
      data: error,
    });
  }
};
