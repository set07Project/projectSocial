import express, { Request, Response } from "express"
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
import crypto from "crypto"

const prisma = new PrismaClient()

export const registerUser = async(req:Request, res:Response) =>{
    try {
        const {userName, email,password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const harsh = await bcrypt.hash(password, salt)

        const value = crypto.randomBytes(36).toString("hex")
        // const token = jwt.sign(value, "justRand")

        const user = await prisma.authModel.create({
            data:{
                userName,
                email,
                password: harsh,
             token:value
            }
        });

        // const tokenID = jwt.sign({id: user.id});
        return res.status(201).json({
            message: "user Registered",
            data: user
        })
    } catch (error) {
        return res.status(404).json({
            message: "error  ",
            data: error
        })
    }
}

export const signInUser = async(req:Request, res:Response) =>{
    try {
        const {email, password} = req.body;

        const user = await prisma.authModel.findUnique({
          where:{email}
        }) 

        if(user){
            const check = await bcrypt.compare(password)
            if(check){
                if(user.verified && user.token === ""){
                    return res.status(201).json({
                        message:`welcome back ${user.userName}`,
                        data:user.id
                    })
                }else{
                    return res.status(404).json({
                        message: "please go and verify "
                    })
                }
            }
        }
    } catch (error) {
        return res.status(404).json({
            message: "please register "
        })
    }
}

export const getAllUsers = async(req:Request, res:Response) =>{
    try {

        const user = await prisma.authModel.findMany({}) 

        return res.status(200).json({
            message:"reading all users",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message: "can't read users "
        })
    }
}

export const getOneUsers = async(req:Request, res:Response) =>{
    try {
        const {authID} = req.params;

        const user = await prisma.authModel.findUnique({
            where:{id:authID}
        }) 

        return res.status(200).json({
            message:"reading one user",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message: "can't read this user "
        })
    }
}

export const updateUserInfo = async(req:Request, res:Response) =>{
    try {
        const {authID} = req.params;
        const {userName} = req.body;

        const user = await prisma.authModel.update({
            where:{id:authID},
            data:{userName}
        }) 

        return res.status(201).json({
            message:"user info updated",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message: "information not updated "
        })
    }
}

export const updateAvatar = async(req:Request, res:Response) =>{
    try {
        const {authID} = req.params;

        const user = await prisma.authModel.update({
            where:{authID},
          
        }) 
        return res.status(201).json({
            message:"profile updated",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message: "can't update profile "
        })
    }
}

export const deleteUserInfo = async(req:Request, res:Response) =>{
    try {
        const {authID} = req.params;

        const user = await prisma.authModel.delete({
            where:{id:authID},
        }) 
        return res.status(200).json({
            message:"user deleted",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message: "can't delete "
        })
    }
}

export const verifiedUser = async(req:Request, res:Response)=>{
    try {
 
        const {authID} = req.params;
        
        // const getID = jwt.verified(token, "justRand",(error: any, payload: any)=>{

        //     if(error){
        //         return error
        //     }else{
        //         return payload.id
        //     }
             
        // })

        const user = await prisma.authModel.update({
           where:{id:authID},
           data: {
            verified:true,
            token: ""
           }
        })

        return res.status(201).json({
            message: "user verified",
            data: user
        })

    } catch (error) {
       return res.status(404).json({
        message: "error",
        data: error
       }) 
    }
}

export const resetUserPassword = async(req:Request, res:Response)=>{
    try {
        const {email} = req.body
        
        const user = await prisma.authModel.findUnique({
            where: {email}
        })

        if (user.verified && user.token === "") {
            const value = crypto.randomBytes(16).toString("hex")
            // const token = jwt.sign(value, "justRand");
            await prisma.authModel.update({
                where:{id: user.id},
                data: {
                    token:value
                }
            })
        }
        return res.status(201).json({
            message:"password can now be changed",
            data: user
        })
    } catch (error) {
        return res.status(404).json({
            message: "can't reset password"
        })
    }
}

export const changeUserPassword = async(req:Request, res:Response)=>{
    try {

        const {authID} = req.params;
        const {password} = req.body;

        // const getID = jwt.verified(token, "justRand", (error: any, payload:any)=>{
        //     if(error){
        //         return error
        //     }else{
        //         return payload.id
        //     }
        // })
        const user = await prisma.authModel.findUnique({
            where:{id: authID}
        })

        if(user.verified && user.token !== ""){
        const salt = await bcrypt.genSalt(10);
        const harsh = await bcrypt.hash(password, salt);

        await prisma.authModel.update({
            where:{id:authID},
            data: {password:harsh, token: ""}
        })
        }

        return res.status(201).json({
            message:"changed password",
            data: user
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"password not changed"
        })
    }
}