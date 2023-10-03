import ejs from "ejs"
import { google } from "googleapis"
import nodemailer from "nodemailer"
import path from "path"

const Google_ID = "383228458426-eivffdpod6vurfpvqa5ig20joreqsohb.apps.googleusercontent.com"
const Google_Refresh_Token = "1//04mSNvC2rZqrPCgYIARAAGAQSNwF-L9IrP2ZJHlCpxI6YaFAxF1LuN8Yz8pTInEpUAHPVddc3qHORgsJG0tJySHJbz5VX-BttNXk"
const Google_URl = "https://developers.google.com/oauthplayground"
const Google_SECRET = "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"

const oAuth = new google.auth.OAuth2(Google_ID, Google_URl, Google_SECRET)
oAuth.setCredentials({access_token : Google_Refresh_Token})

const URl : string = "localhost://1234/api/"

export const verifyAccount = async (user : any, tokenID : string) =>{
    try {
        
        const getAccess : any = (await oAuth.getAccessToken()).token

        const transport = nodemailer.createTransport({
            service : "gmail",
            auth : {
                type : "OAuth2",
                user : "ajConnect@gmail.com",
                clientId : Google_ID,
                clientSecret : Google_SECRET,
                refreshToken : Google_Refresh_Token,
                accessToken : getAccess
            }
        })

        const DataTobePassedToVerify = {
            url : `${URl}/${tokenID}/verify`,
            name : user?.name
        }

        const join = path.join(__dirname, "../views/verifyAccount.ejs")

        const data = await ejs.renderFile(join, DataTobePassedToVerify)

        const mail = {
            from : "Verify Account <ajConnect@gmail.com> ",
            to : user?.email,
            subject : "Verify Your Account",
            html : data
        }

        transport.sendMail(mail)

    } catch (error) {
        console.log(error);
    }
}