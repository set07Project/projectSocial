import express, { Application, Request, Response } from "express"
import cors from "cors"

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
}
