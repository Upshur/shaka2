const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const dm = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(dm); }
    if (message.channel.type !== 'dm') {
      const dans = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Bizden bir dans istedi!")
    .setColor('RANDOM')
    .setTimestamp()
      .setImage('https://media1.tenor.com/images/47dd72833ec7ba9fd5559de00dfc3ead/tenor.gif')
    return message.channel.send(dans);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dans',
  description: 'Dans eder',
  usage: 'dans'
};