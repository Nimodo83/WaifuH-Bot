let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/TGsfR.png')

user.registered = false

let txt = `\`REGISTRO ANULADO\`\n\nπ€ *User* Β» ${m.pushName || 'AnΓ³nimo'}\nπ *Pais* Β» ${global.userNationality}\nπΊ *Bot* Β» ${packname}`.trim()
await conn.sendMessage(global.idchannel, { text: txt, contextInfo: {
externalAdReply: {
title: "γ? π π‘π’π§ππππππππ’Μπ‘ π γ?",
body: 'πΏ Β‘Un usuario menos en mi base de datos!',
thumbnailUrl: perfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })

return conn.reply(m.chat, `π© Tu registro ha sido anulado correctamente.`, m, rcanal)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = ['unreg', 'unregister']
handler.register = true
export default handler
