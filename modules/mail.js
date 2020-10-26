const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pogjapjspofjpaof@gmail.com',
        pass: 'Zxcvbnm658932147'
    }
})


const confirmEmail = async (mail, code) => await transporter.sendMail({
    from: '"Library app" <system@library.app>',
    to: mail,
    subject: 'Confirmation mail',
    text: 'Please confirm that this is your mail',
    html: `This activation code <strong><i>${code}</i></strong>, enter it in the confirmation code field on the site.`
})

const generateCode = (min, max) => {
    let _code = []
    let code = ''
    for (let i = 0; i < 6; i++){
        _code.push(Math.floor(min + Math.random() * (max + 1 - min)).toString())
    }
    for (let j = 0; j < 6; j++){
        code += _code[j]
    }
    return code
}

module.exports.confirmEmail = confirmEmail
module.exports.generateCode = generateCode
