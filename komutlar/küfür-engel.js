const ottoman = require('quick.db')
//OTTOMAN CODE
exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
ottoman.set(`ottomanküfürengel_${message.guild.id}`, true)
return message.channel.send('aktif edildi')}
//OTTOMAN CODE
if (args[0] === 'kapat') {
ottoman.delete(`ottomanküfürengel_${message.guild.id}`)
return message.channel.send('kapatıldı')}
//OTTOMAN CODE
 message.channel.send('aç veya kapat yaz!')};
exports.conf = {enabled: true,guildOnly: false,aliases: [],permLevel: 0};
exports.help = {name: 'küfür-ayarla'};