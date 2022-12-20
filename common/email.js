const nodemailer = require('nodemailer');
const ejs = require('ejs');

module.exports = function sendEmail (customer,cours){  
  
    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });
  
//mail options
    let template;
    ejs.renderFile('./templates/confirmEmail.ejs',{customer : customer.firstName, cours : `${cours.name } :  ${cours.description}`}, (err ,data)=>{
        if (err) {
            console.log(err)
        }else{
            template = data;
            
            }
    })
   var  mailOptions = {
        from: process.env.EMAIL,
        to: customer.email,
        subject: "Purchase confirmation",
        html : template
    }
 //send mail with defined transport object
    transporter.sendMail(mailOptions, (err,info)=> {
        if (err) {
        console.log(err)
        } else {
             console.log('Mail sent to ',  info.envelope.to)
        }
    })     
} 
 
  