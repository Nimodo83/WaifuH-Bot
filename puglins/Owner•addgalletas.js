import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('⚠️️ *Taguea al usuario*')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) return m.reply('⚠️️ Ingrese la cantidad de *H-Coins* que quiere añadir')
    if (isNaN(txt)) return m.reply('⚠️ *sólo números*')
    let dmt = parseInt(txt)
    let hcoin = dmt
    let pjk = Math.ceil(dmt * impts)
    hcoin += pjk
    if (hcoin < 1) return m.reply('⚠️️ Mínimo es  *1*')
    let users = global.db.data.users
   users[who].hcoin += dmt

    await conn.reply(m.chat, `⊜ *💰 AÑADIDO*
┏━━━━━━━━━━━⬣
┃⋄ *Total:* ${dmt}
┗━━━━━━━━━━━⬣`, m, rcanal)
   conn.fakeReply(m.chat, `⊜ *_Recibiste_* \n\n *_+${dmt} 💰 H-Coins_*`, who, m.text)
}

handler.help = ['addhcoin *<@user>*']
handler.tags = ['owner']
handler.command = ['addhcoin', 'addhcoins'] 
handler.rowner = true

export default handler