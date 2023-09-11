import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import { HTTP, mainError } from "./Error/mainError"
import { errHandler } from "./Error/errorHandler"

export const mainApp = (app : Application) => {
    app.use(cors())
    app.use(express.json())

    app.set("view engine", "ejs")

    app.get("/", (req : Request, res: Response) =>{
        try {
            return res.status(200).json({
                message : "Welcome Home"
            })

            // return res.status(200).render("index")
        } catch (error) {
            return res.status(404).json({
                message : "Error"
            })
        }
    })

    app.all("*", (req : Request, res : Response, next : NextFunction)=>{
        next(
             new mainError({
                name : "Router Error",
                message : `This Error is due to router error so check it please ${req.originalUrl} `,
                success : false,
                status : HTTP.BAD,
            })
        )
    })

    app.use(errHandler)
}

