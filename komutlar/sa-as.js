const db = require('quick.db')
const Discord = require('discord.js')
//OTTOMAN CODE
exports.run = async (bot, message, args) => { 
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanabilmek için yeterli yetkin yok')
  if (!args[0]) return message.channel.send('AÇ YADA KAPAT YAZ')
  //OTTOMAN CODE
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`artık sa yazıldığında bot as yazacak`)
  //OTTOMAN CODE  
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`artık sa yazdığında bot as yazmayacak`)
   //OTTOMAN CODE 
  }
}
//OTTOMAN CODE
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'sa-as',
  description: 'sa as',
  usage: 'sa-as'
};