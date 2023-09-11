import express, {Application} from "express"
import { mainApp } from "./mainApp"

const port : number = 1234

const app : Application = express()

mainApp(app)

const server = app.listen(port , ()=>{
    console.log("Server is up and Running")
})

process.on("uncaughtException" , (error)=>{
    console.log(error);
    process.exit(1)
})

process.on("unhandledRejection" , (reason) => {
    console.log(reason);
    server.close(()=>{
        process.exit(1)
    })
})