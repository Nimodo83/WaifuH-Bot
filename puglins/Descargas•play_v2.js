import yts from 'yt-search' 
const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw m.reply(`Ejemplo: ${usedPrefix + command} bibi fogosa`, m ,rcanal);

    const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    let isVideo = /video$/.test(command);
    let urls = search.all[0].url;
    let imageUrl = `https://random-apis.shop/generate-card?titulo=${search.all[0].title}&autor=${search.all[0].author.name}&thumbnail=${search. all[0].thumbnail}&tempo=${search.all[0].timestamp}`;
    let textogoad = `╭ׁ̻۫─۪۬─۟─۪─۫─۪۬─۟─۪─۟─۪۬─۟─۪─۟─۪۬─۟─۪─۟┄۪۬┄۟┄۪┈۟┈۪. 
┟─⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🅳🄴🅂🄲🄰🅁🄶🄰🅂໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪
├ ⚘݄𖠵⃕⁖𖥔. \`YouTube Play\`
╰ׁ̻۫─۪۬─۟─۪─۫─۪۬─۟─۪─۟─۪۬─۟─۪─۟─۪۬─۟─۪─۟┄۪۬┄۟┄۪┈۟┈۪.\n\n\n
*╭ׅׄ̇─͓̗̗─ׅ̻ׄ╮۪̇߭⊹߭̇︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇߭︹ׅ۪ׄ̇߭̇⊹*
├» *Título:* ${search.all[0].title}
*├°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
├» *Vistas:* ${search.all[0].views}
*├°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
*├» *Duración:* ${search.all[0].timestamp}
*├°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
├» *Subido:* ${search.all[0].ago}
*├°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
├» *Url:* ${urls}
*╰ּ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︢︣ۛ۫۫۫۫۫۫ۜ⏝ּׅ︢︣ۛ۫۫۫۫۫۫ۜ⏝ּׅ︢︣ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︢︣ׄۛ۫۫۫۫۫۫ۜ⏝*\n\n\n\n🕒 *Su ${isVideo ? 'Video' : 'Audio'} se está enviando, espere un momento...*`;
    
   /* conn.sendMessage(m.chat, { 
        image: { url: imageUrl }, 
        caption: body
    }, { quoted: rcanal });*/
    conn.sendMessage(m.chat, { text: textogoad, contextInfo: { externalAdReply: { title: yt_play[0].title, body: dev, thumbnailUrl: imageUrl, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: fkontak })
    m.react('🪀')

    let res = await dl_vid(urls)
    let type = isVideo ? 'video' : 'audio';
    let video = res.data.mp4;
    let audio = res.data.mp3;
    conn.sendMessage(m.chat, { 
        [type]: { url: isVideo ? video : audio }, 
        gifPlayback: false, 
        mimetype: isVideo ? "video/mp4" : "audio/mpeg" 
    }, { quoted: m });
}

handler.command = ['audio', 'video'];
handler.help = ['play', 'play2'];
handler.tags = ['dl'];
handler.group = true
export default handler;

async function dl_vid(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url,
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}