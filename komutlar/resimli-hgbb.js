const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
//dcs ekibi
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
if(!args[0]) return message.reply("s+kanal ayarla #kanal veya s+kanal sıfırla Yazmalısın!")

  if(args[0] === "ayarla"){
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(':x: | Kullanım: `!gkanal #kanal`')}
    
   
    message.channel.send(`:white_check_mark: | ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `)
await db.set('rgiris_'+message.guild.id, channel.id)
}
if(args[0] === "sıfırla"){
message.channel.send('GIRIS KANALI SIFIRLANDI!')
await db.delete('rgiris_'+message.guild.id)
}
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
}
//dcs ekibi
exports.help = {
    name: 'gkanal',
    description: 'Giriş Çıkış Kanalını Ayarlar.',
    usage: 'resimli-giriş-çıkış <#kanal>'
}