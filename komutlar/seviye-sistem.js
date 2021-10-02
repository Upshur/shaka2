const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
let davet = "https://discord.com/oauth2/authorize?client_id=890967082555019315&scope=bot&permissions=268967998"//botunuzun davet linki
let destek = "https://discord.gg/wvDQDYs2Gr"//destek sunucusu linki
let dbl = ""//botunuz dbl ye ekli ise dbl profil linki
let site = ""//varsa site linki
    const DarkCode = new Discord.RichEmbed()
   .setColor("AQUA")
   .setDescription(`

●▬▬▬▬๑「 Supra Bot 」๑▬▬▬▬▬●
= Supra BOT Yardım Menüsü =

»s+seviye-aç :: seviye sistemini açarsiniz

»s+seviye-kapat :: seviye sistemini kapatirsiniz

»s+seviye-kanal :: belirtilen kanal da kim hangi seviyeye atladigini belirtir

»s+seviye-rol :: belirtiginiz seviyeye gelince rol verir

»s+seviye :: seviyenizi gosterir

»s+seviye-xp :: xp nizi gosterir

 **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=890967082555019315&scope=bot&permissions=268967998) \n  **Destek Sunucusu İçin** [TIKLA](https://discord.gg/wvDQDYs2Gr) \n  **Web Sitemizi Ziyaret etmek İçin** [TIKLA]()
`)
.setImage(`https://i.giphy.com/zN06pgHHndFGfLf9GT.gif`)

    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        message.channel.send(DarkCode);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["seviye-sistem" , "seviye-sistemi"],
  permLevel: 0
};
exports.help = {
  name: 'seviye-sistemi',
  description: 'Komut kategorilerini gösterir.',
  usage: 'seviye-help'
};