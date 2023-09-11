import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { HTTP } from "../Error/mainError";


const prisma = new PrismaClient

export const createPost = async (req : Request, res : Response) =>{
    try {
        const {email} = req.body;

        const user = await prisma.authModel.findUnique({
            where : {email}
        })
        
    } catch (error) {
        res.status(HTTP.OK).json({
            message  : "Error"
        })
    }
}