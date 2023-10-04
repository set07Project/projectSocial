import ejs from "ejs"
import { google } from "googleapis"
import nodemailer from "nodemailer"
import path from "path"

const GOOGLE_ID =
  "83509147636-ncej2dav18r4ncpd6o4vkk9a7u9o5ujl.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";
const GOOGLE_REFRESH_TOKEN =
  "1//04FiKCxv8yqgrCgYIARAAGAQSNwF-L9Irq-kKiqtvWBSIC0FvcyrtYLc2hMDAztyfQeu6hCcAwSADtf9znZ9pr4YjwTdqn_2xVkg";
const GOOGLE_URL = "https://developers.google.com/oauthplayground";

// const GOOGLE_ID =
//   "848542784186-9os7noa7qvcg3nckfu38s3bhob8u6oga.apps.googleusercontent.com";
// const GOOGLE_SECRET = "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";
// const GOOGLE_REFRESH_TOKEN =
//   "1//04GgN8ydoI_ZdCgYIARAAGAQSNwF-L9IrKCOkFE95PncupZNTb3WCiygNcFb1vp20oW-1SMJTKzSWxnWw2B6nf4S85GXSTpgR44M";
// const GOOGLE_URL = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL)
oAuth.setCredentials({access_token : GOOGLE_REFRESH_TOKEN})

const url = "http://localhost:1234/api"

export const verifyAccount = async (user : any, tokenID : string)=>{
    try {
        const getAccess : any = (await oAuth.getAccessToken()).token

        const transport = nodemailer.createTransport({
            service : "gmail",
            auth : {
                type : "OAuth2",
                // user : "codelabbest@gmail.com",
                user : "ajconnect801@gmail.com",
                clientId : GOOGLE_ID,
                clientSecret : GOOGLE_SECRET,
                refreshToken : GOOGLE_REFRESH_TOKEN,
                accessToken : getAccess,
            }
        })

        const userDetails = {
            name : user.name,
            url : `${url}/${tokenID}/verify`
        }

        const data = path.join(__dirname, "../views/verifyAccount.ejs")

        const realData = await ejs.renderFile(data, userDetails)

        const mail = {
            from : "verify <ajconnect801@gmail.com>",
            to : user.email,
            subject : "verify",
            html : realData
        }

        transport.sendMail(mail)

    } catch (error) {
        console.log(error);
        
    }
}