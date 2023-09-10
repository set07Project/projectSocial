import { error } from "console"
import express, {Application} from "express"

const port : number = 1234

const app : Application = express()


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