const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
let davet = ""//botunuzun davet linki
let destek = ""//destek sunucusu linki
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

 **Botun Davet Linki İçin** [TIKLA](https://discord.com/api/oauth2/authorize?client_id=764173042510463006&permissions=8&scope=bot) \n  **Destek Sunucusu İçin** [TIKLA]() \n  **Web Sitemizi Ziyaret etmek İçin** [TIKLA](https://elma-bot-discord-.glitch.me/)
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