const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const ottoman = new Discord.MessageEmbed()
  .addField(` »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(` » Yapımcım` ,`!    ❅ `,true)
  .addField(` » Node.js`, `${process.version}`, true)
 .addField(` » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(` » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(` » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Destek Sunucusu](DESTEK SUNUCUNUZ) | [Davet](DAVET LİNKİNİZ)`, true)
  message.channel.send(ottoman)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun İstatistiklerini Atar',
  usage: 'istatistik'
};