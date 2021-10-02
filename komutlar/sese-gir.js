const Discord = require('discord.js');
exports.run = async (client, message, args) => {

if(!message.member.roles.cache.has('Kullanabilecek Rol ID') && !message.member.hasPermission('ADMINISTRATOR') ) return message.channel.send('Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin!')

 let kanal = args[0]
 if (!kanal) return message.channel.send("Bir Kanal ID'si Belirt")  

 client.channels.cache.get(kanal).join();

message.channel.send("<:53b25c714fc14921a390f0f7b8ad034e:876838546709807105>Başarıyla Ses Kanalına Girdim!")

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sesgir","ses-gir"],
  permLevel: 0
}
exports.help = {
  name: 'ses-kanalına-gir',
  description: "Bot ID'sini Girdiğiniz Ses Kanalına Girer",
  usage: 'ses-kanalına-gir'
}
