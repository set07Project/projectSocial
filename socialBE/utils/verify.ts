import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken"


const prisma = new PrismaClient()

 const verifyAccount = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const value = req.headers.authorization
        if(value){
            const realValue = value.split(" ")[1]
            if(realValue){
                // jwt.verify(realValue,"justRand",async (err,payload:any)=>{
                //     if(err){
                //         return err
                //     }else{
                //         const user = await prisma.authModel.findUnique({
                //             where:{id:payload},
                //         })
                //         if(user?.role === "admin" || user?.role === "dispatcher"){
                //             next()
                //         }else{
                //             return res.status(404).json({
                //                 message:"you're not authorized to see this page"
                //             })
                //         }
                //     }
                // })
            }else{
                return res.status(404).json({
                    message:"invalid token"
                })
            }
        }else{
            return res.status(404).json({
                message:"Error found"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message:"Error found"
        })
    }
}