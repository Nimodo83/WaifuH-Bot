let WAMessageStubType = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://qu.ax/cGluV.mp3';
  let vn2 = 'https://qu.ax/cTDa.mp3';
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);
  let textwel = `*⭒─ׄ─ׅ─ׄ─⭒ Welcome User ⭒─ׄ─ׅ─ׄ─⭒*
    
╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Welcome : @${m.messageStubParameters[0].split`@`[0]}⁩*
┊•*⁀➷ °⭒⭒⭒ *【 ✯ ${groupMetadata.subject} ✰ 】*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩`;
  let textbey = `*⭒─ׄ─ׅ─ׄ─⭒ Bye User ⭒─ׄ─ׅ─ׄ─⭒*
    
╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*
┊ ‹‹ *Bye : @${m.messageStubParameters[0].split`@`[0]}⁩*
┊•*⁀➷ °⭒⭒⭒ *【 ✯ ${groupMetadata.subject} ✰ 】*
╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩`;
  let imgwel = 'https://qu.ax/NhSLQ.png';
  let imgbey = 'https://qu.ax/RAjhU.png';
  let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/TGsfR.png')
  
 if (chat.welcome && m.messageStubType === 27) {
    await conn.sendMini(m.chat, `Welcome: ${userName}\n${groupMetadata.subject}`, dev, textwel, imgwel, perfil, channel, m)
}

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    await conn.sendMini(m.chat, `Bye: ${userName}\n${groupMetadata.subject}`, dev, textbey, imgbey, perfil, channel, m)
  }
}