import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import { HTTP, mainError } from "./Error/mainError"
import { errHandler } from "./Error/errorHandler"
import morgan from "morgan"
import helmet from "helmet"
import user from "./router/userRouter"
import post from "./router/postRouter"
import comment from "./router/commentRouter"

export const mainApp = (app : Application) => {
    app.use(cors())
    app.use(express.json())

    app.set("view engine", "ejs")
    app.use(morgan("dev"))
    app.use(helmet())

    app.use("/api/v1", user)
    app.use("/api/v1", post)
    app.use("/api/v1", comment)

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

