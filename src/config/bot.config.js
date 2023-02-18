import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
dotenv.config()
const Token = process.env.TOKEN

const bot = new TelegramBot(Token, { polling: true })
export default bot