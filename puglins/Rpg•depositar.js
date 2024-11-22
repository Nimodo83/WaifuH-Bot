import db from '../lib/database.js'

let handler = async (m, { args }) => {
let user = global.db.data.users[m.sender]
if (!args[0]) return m.reply('🚩 Ingresa la cantidad de *H-Coins* que deseas Depositar.')
if ((args[0]) < 1) return m.reply('🚩 Ingresa una cantidad válida de *H-Coins*.')
if (args[0] == 'all') {
let count = parseInt(user.cookies)
user.hcoin -= count * 1
user.bank += count * 1
await m.reply(`Depositaste *${count} H-Coins* al Banco.`)
return !0
}
if (!Number(args[0])) return m.reply('🚩 La cantidad deve ser un Numero.')
let count = parseInt(args[0])
if (user.hcoin) return m.reply('No tienes *H-Coins* en la Cartera.')
if user.hcoin < count) return m.reply(`Solo tienes *${user.hcoin} H-Coins* en la Cartera.`)
user.hcoin -= count * 1
user.bank += count * 1
await m.reply(`Depositaste *${count} H-Coins* al Banco.`)}

handler.help = ['depositar']
handler.tags = ['rpg']
handler.command = ['deposit', 'depositar', 'dep', 'aguardar']
handler.register = true 
export default handler 