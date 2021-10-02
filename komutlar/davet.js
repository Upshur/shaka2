const dc = require('discord.js');
//OTTOMAN CODE
exports.run = async (client , message, args ) => {
//OTTOMAN CODE
const ottomancode = new dc.MessageEmbed()
.setDescription(`DAVET LİNKİM [TIKLA](https://discord.com/oauth2/authorize?client_id=890967082555019315&scope=bot&permissions=805314622)`)
message.channel.send(ottomancode)};
//OTTOMAN CODE
exports.conf = {enabled: true,guildOnly: true,aliases: [],permLevel: 0}
exports.help = {name: 'davet'};