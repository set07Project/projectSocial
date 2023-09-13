import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { HTTP } from "../Error/mainError";
import cloudinary from "../utils/cloudinary";


const prisma = new PrismaClient()

export const createPost = async (req : any, res : Response) =>{
    try {
        const {userID} = req.params;
        const {post} = req.body;

        const user = await prisma.authModel.findUnique({
            where : {id : userID},
            include : {post : true}
        })

        const { secure_url, public_id } = await cloudinary.uploader.upload(
            req.file.path
          );

        if (user?.verified && user.token === "") {
            const posted = await prisma.postModel.create({
                data : {
                    post, avatar : secure_url, avatarID : public_id, userID
                }
            })
            res.status(HTTP.CREATED).json({
                message  : "Post created Successfully",
                data : posted
            })
        } else {
            res.status(HTTP.BAD).json({
                message  : "please check your Account"
            })
        }
        
    } catch (error) {
        res.status(HTTP.BAD).json({
            message  : "Error",
            data : error
        })
    }
}

export const viewAllPost = async( req : Request, res : Response) =>{
    try {
        const {userID} = req.params

        const user = await prisma.authModel.findUnique({
            where : {id : userID}
        })

        if (user?.verified && user.token === ""){
           const post = await prisma.postModel.findMany({
            include : {commented : true}
           })

            return res.status(HTTP.OK).json({
                message : "Viewing All post",
                data : post
            })
        }
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error",
            data : error
        })
    }
}

export const viewOnePost = async( req : Request, res : Response) =>{
    try {
        const {postID} = req.params

        const post = await prisma.postModel.findUnique({
            where : {id : postID},
            include : {commented : true}

        })
            return res.status(HTTP.OK).json({
                message : "Viewing One post",
                data : post
            })
        
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error",
            data : error
        })
    }
}

export const viewOneUserPost = async( req : Request, res : Response) =>{
    try {
        const {userID} = req.params

        const user = await prisma.authModel.findUnique({
            where : {id : userID},
            include : {post : true}
        })

        if (user?.verified && user.token === ""){
            await prisma.postModel.findMany({
                include : {commented : true}
            })

            return res.status(HTTP.OK).json({
                message : "Viewing one User post",
                data : user.post
            })
        }
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error",
            data : error
        })
    }
}

export const deleteUserPost = async( req : Request, res : Response) =>{
    try {
        const {userID, postID} = req.params

        const user = await prisma.authModel.findUnique({
            where : {id : userID},
            include : {post : true}
        })

            if (user?.id === userID) {
                await prisma.postModel.delete({
                    where : {id : postID}
                })
                return res.status(HTTP.CREATED).json({
                    message : "Deleting one post",
                    data : user.post
                })
            } else {
                return res.status(HTTP.BAD).json({
                    message : "Cant Delete this Post"
                })
            }

    } catch (error) {
        return res.status(HTTP.BAD).json({
            message : "Error",
            data : error
        })
    }
}

export const updateUserPost = async( req : any, res : Response) =>{
    try {
        const {userID, postID} = req.params
        const {post} = req.body

        const user = await prisma.authModel.findUnique({
            where : {id : userID},
            include : {post : true}
        })

        const { secure_url, public_id } = await cloudinary.uploader.upload(
            req.file.path);

            if (user?.id === userID) {
                await prisma.postModel.update({
                    where : {id : postID},
                    data : {post, avatar : secure_url, avatarID : public_id}
                })
                return res.status(HTTP.CREATED).json({
                    message : "updating one post",
                    data : user?.post
                })
            } else {
                return res.status(HTTP.BAD).json({
                    message : "Cant update this Post"
                })
            }

    } catch (error : any) {
        return res.status(HTTP.BAD).json({
            message : "Error",
            data : error.message
        })
    }
}
