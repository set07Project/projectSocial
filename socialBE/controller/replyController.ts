import {Request , Response} from "express"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export const replyComment = async (req : Request , res : Response) => {
    try {
        const { userID , postID , commentID } = req.params;
        const { reply } = req.body;

        const user = await prisma.authModel.findUnique({
            where : { id : userID}
        })

        if (user) {
            const comment : any = await prisma.commentModel.findUnique({
                where : { id : commentID}
            })
            const replied = await prisma.replyModel.create({
                data : {
                    reply,
                    userID
                }
            })

            comment?.replies.push(replied);
            comment.save()

            return res.status(200).json({
                message : "Replied Comment Successfully",
                data : replied
            })
        } else {
            return res.status(404).json({
                message : "User Not Found"
         
            })
        }
    } catch (error) {
        return res.status(400).json({
            message : "Error Replying Comment",
            data : error
        })
    }
}

export const likeReply = async (req : Request , res : Response) => {
    try {
        const { userID , postID , commentID , replyID} = req.params;

        const user = await prisma.authModel.findUnique({
            where : { id : userID}
        })

        if (user) {
            const reply : any = await prisma.replyModel.findUnique({
                where : { id : replyID }
            })

             reply.likes.push(userID)

            return res.status(200).json({
                message : "Liked Reply Successfully"
            })
        } else {
            return res.status(400).json({
                message : "User Not Found"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message : "Error Liking Reply",
            data : error
        })
    }
}


export const unLikeReply = async (req : Request , res : Response) => {
    try {
        const { userID , postID , commentID , replyID} = req.params;

        const user = await prisma.authModel.findUnique({
            where : { id : userID }
        })

        if (user) {
            const reply : any = await prisma.replyModel.findUnique({
                where : { id : replyID }
            })

             reply.likes.pull(userID)

            return res.status(200).json({
                message : "Unliked Reply Successfully"
            })
        } else {
            return res.status(400).json({
                message : "User Not Found"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message : "Error Unliking Reply",
            data : error
        })
    }
}

export const deleteReply = async (req : Request , res : Response) => {
    try {
        const { userID , postID , commentID , replyID} = req.params;

        const user = await prisma.authModel.findUnique({
            where : { id : userID}
        })

        if (user) {
            const reply : any = await prisma.replyModel.findUnique({
                where : { id : replyID }
            })

            if (user.id === reply.userID) {
                const deleted = await prisma.replyModel.delete({
                    where : { id : replyID}
                })
            } else {
                return res.status(400).json({
                    message : "Users Not Found"
                })
            }
            return res.status(200).json({
                message : "Reply Deleted Successfully"
            })
        } else {
            return res.status(400).json({
                message : "User Not Found"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message : "Error Deleting Reply",
            data : error
        })
    }
}