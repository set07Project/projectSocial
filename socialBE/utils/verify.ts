import { PrismaClient } from "@prisma/client"
import express, { NextFunction, Request, Response } from "express"
// import jwt from "jsonwebtoken"


const prisma = new PrismaClient()

export const verifyDispatcher = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const value = req.headers.authorization
        if(value){
            const realValue = value.split(" ")[1]
            if(realValue){
               
            }else{
                return res.status(404).json({
                    message:"incorrect token number"
                })
            }
        }else{
            return res.status(404).json({
                message:"invalid token"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message:"Error found"
        })
    }
}