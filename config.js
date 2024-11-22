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

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})