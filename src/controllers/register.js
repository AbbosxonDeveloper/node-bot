import bot from "../config/bot.config.js";

const register = bot.onText(/\/start/, (msg) => {
    bot.sendSticker(
        msg.chat.id,
        "CAACAgQAAxkBAANWY2QEPlzq3vim0i9HELYo0hRrhwkAAhUDAAIv2CUOAnTLZ07ySQMqBA"
    );
    bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}`, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Register📝",
                    callback_data: "register",
                }, ],
            ],

            resize_keyboard: true,
        },
    });
})

const check = bot.onText(/\/message/, (msg) => {
    bot.sendMessage(msg.chat.id, 'message bu')
})


export default {
    register,
    check
}