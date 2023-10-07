import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const makeRequest = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;
    const user: any = await prisma.authModel.findUnique({
      where: { id: userId },
    });
    const friend: any = await prisma.authModel.findUnique({
      where: { id: friendId },
    });
    if (user && friend) {
      await friend.requests.push(user);
      friend.save();
        };
        return res. status(200).json({
            message : "Request Made Successfully"
        })
  } catch (error) {
    return res.status(400).json({
      message: "Error Making Request",
      data: error,
    });
  }
};

export const deleteRequest = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;
    const user: any = await prisma.authModel.findUnique({
      where: { id: userId },
    });
    const friend: any = await prisma.authModel.findUnique({
      where: { id: friendId },
    });
    if (user && friend) {
      await friend.requests.pull(user.id)
    }
    return res. status(200).json({
        message : "Deleted Request Successfully"
    })
  } catch (error) {
    return res.status(400).json({
      message: "Error Deleting Request",
      data: error,
    });
  }
};

export const viewRequests = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user: any = await prisma.authModel.findUnique({
      where: { id: userId },
    });

    const data = await prisma.authModel.findUnique({
        where : {id : userId},
        include : {
      
        }
    })
  
    return res. status(200).json({
        message : "Deleted Request Successfully"
    })
  } catch (error) {
    return res.status(400).json({
      message: "Error Making Request",
      data: error,
    });
  }
};
