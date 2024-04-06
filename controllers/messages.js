const nodemailer = require("nodemailer");

const SENDER_EMAIL = 'centrprosto.ru@yandex.ru'
const RECIPIENT_MAILLIST = ["photokub@yandex.ru", "info@centrprosto.ru"]

transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
        user: SENDER_EMAIL,
        pass: 'pgejbalxfncsknml',
    },
});

const sendMessage = async (req, res, next) => {
    try {
        const message = await ({
            from: SENDER_EMAIL,
            to: RECIPIENT_MAILLIST,
            subject: `Сообщение формы ОС | Отправитель: ${req.body.name} | ${req.body.email}`,
            text: `${req.body.message}`
        });
        return res.status(200).send(transporter.sendMail(message))
    } catch (err) {
        next(err)
    }
}

const sendCallBackMessage = async (req, res, next) => {
    try {
        const message = await ({
            from: SENDER_EMAIL,
            to: RECIPIENT_MAILLIST,
            subject: `Обратный звонок для ${req.body.name}.`,
            text: `Контактное лицо: ${req.body.name}. Контактный телефон: ${req.body.phone}`
        });
        return res.status(200).send(transporter.sendMail(message))
    } catch (err) {
        next(err)
    }
}

module.exports = {
    sendCallBackMessage,
    sendMessage,
}