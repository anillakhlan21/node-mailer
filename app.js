const nodemailer = require('nodemailer');
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env'})


const transport = nodemailer.createTransport(
    {
        service: 'gmail',
        auth : {
            user : process.env.AUTH_EMAIL,
            pass : process.env.AUTH_PASSWORD 
        }
    }
)

var mailOptions ={
    from : 'anilkumar15072000@gmail.com',
    to: process.env.RECEIVER_1 + ',' + process.env.RECEIVER_2,
    subject : 'Test mail',
    text : 'Hello world'
}

transport.sendMail(mailOptions, (err,info)=>{
    if(err) throw err;
    console.log(info); 
})