import express, {Application} from "express"
import { mainApp } from "./mainApp"
import env from "dotenv"
env.config()

const port : number = parseInt(process.env.PORT!)

const app : Application = express()

mainApp(app)

const server = app.listen(process.env.PORT || port , ()=>{
    console.log("Server is up and Running")
})

process.on("unhandledRejection" , (error : any)=>{
    console.log(`Server is Shutting down due to unhandledRejection : ${error}`);
    
    console.log(error);
    process.exit(1)
})

process.on("uncaughtException" , (reason : any) => {
    console.log(`Server is Shutting down due to uncaughtException : ${reason}`);
    console.log(reason);
    server.close(()=>{
        process.exit(1)
    })
})