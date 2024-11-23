import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
['5213318360934', 'Creador 👑', true],
['5218713339906', 'Owner 🍭', true],
['5218711426787', 'Colaborador 🐢', true]
] //Agrega tu número aquí.

//Nombre Bot
global.botname = '𝗪𝗮𝗶𝗳𝘂𝗛-𝗕𝗼𝘁 ☁️'
global.wm = '© ᥕᥲі𝖿ᥙһ-ᑲ᥆𝗍-mძ'
global.creator = 'Xi_Crew'
global.packname = '⪛✰ 𝗪𝗮𝗶𝗳𝘂𝗛-𝗕𝗼𝘁 ✰⪜'
global.author = 'Powered By Xi_Crew'
global.dev = '© Create By Xi_Crew'
global.textbot = 'WaifuH-Bot Powered By Xi_Crew'

//Información del bot
global.isBaileysFail = false
global.vs = '1.0 (Beta)'
global.libreria = 'Baileys'
global.baileys = '^6.7.5'
global.sessions = 'WaifuSession'
global.jadi = 'WaifuJadiBot'
global.languaje = 'Español'

// Enlaces WaifuH-Bot 
global.channel = 'https://whatsapp.com/channel/0029VaspIib2ER6gHE5Z1G0G'
global.grupo = 'https://chat.whatsapp.com/EuDfTPrTaYGH1pH5x1loXP'
global.git = 'https://github.com/Nimodo83/WaifuH-Bot'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
