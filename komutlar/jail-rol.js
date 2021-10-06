const discord = require('discord.js');
const db = require('narcos-db');
exports.run = async(client, message, args) =>  {
let jailrol = message.mentions.roles.first()
if(!jailrol) return message.channel.send('Lütfen bir rol belirt!')

db.set(`jailrol_${message.guild.id}`, jailrol.id)
return message.channel.send(`Jail rolü başarı ile <@&${jailrol.id}> olarak ayarlandı`)


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 4,
    aliases: ["jailrol"]
     };
     exports.help = {
    name: "jail-rol"
     };