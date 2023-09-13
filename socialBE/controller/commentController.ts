import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { HTTP } from "../Error/mainError";

const prisma = new PrismaClient()

export const createComment = async (req : Request, res : Response)=>{
    try {
        const {userID, postID} = req.params
        const {comments} = req.body

        const user = await prisma.authModel.findUnique({
            where : {id : userID}
        })

        const post = await prisma.postModel.findUnique({
            where : {id : postID},
        })

        if (user && post) {
            const comment = await prisma.commentModel.create({
                data: {
                postID, comments
                }
            })

            return res.status(HTTP.CREATED).json({
                message : "comment created Successfully",
                user : comment
            })
        } else {
            return res.status(HTTP.BAD).json({
                message : "please Log in"
            })
        }
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error",
            data : error
        })
    }
}

export const viewAllComment = async (req : Request, res : Response)=>{
    try {
        const {userID, postID} = req.params

        const user = await prisma.authModel.findUnique({
            where : {id : userID}
        })

        const post = await prisma.postModel.findUnique({
            where : {id : postID},
            include : {commented : true}
        })

        if (user && post) {
            const comment = await prisma.commentModel.findMany({  
            })

            return res.status(HTTP.CREATED).json({
                message : "comment viewed Successfully",
                user : comment
            })
        } else {
            return res.status(HTTP.BAD).json({
                message : "please Log in"
            })
        }
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error",
            data : error
        })
    }
}