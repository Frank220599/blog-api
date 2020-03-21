const nodemailer = require('nodemailer');

const sendMail = async (mailOptions) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zoha7878@gmail.com',
            pass: 'Fara2205',
        },
    });

    await transporter.sendMail(mailOptions);
};


module.exports = sendMail;