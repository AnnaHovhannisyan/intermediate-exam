const nodemailer = require('nodemailer');
const config = require('../config/email');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.user,
        pass: config.pass
    },
});

const email = async (to, subject, html) => {
    await transporter.sendMail({
        from: '"Sunny School" <'+config.user+'>',
        to: to,
        subject:'Շնորհակալություն գրանցման համար',
        html: html
    });
};

module.exports = email;