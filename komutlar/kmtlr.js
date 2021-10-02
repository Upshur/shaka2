const Discord = require("discord.js");
const ab = new Discord.MessageEmbed()

.setTimestamp()
.setColor('RANDOM')
.setTitle('☂️Shaka bot yardım menüsü')
.addField('Prefix:s+','davet', true)
.addField('myardım', 'moderasyon yardım menüsünü açar', true)
.addField('kyardım', 'kullanıcı yardım menüsünü açar.', true)
.addField('eyardım', 'eğlence yardım menüsünü açar', true)
.addField('syardım', 'seviye yardım menüsünü açar', true)
.setImage("https://cdn.discordapp.com/attachments/856935661902626848/893872633064615967/Shaka.png")
.setThumbnail("https://cdn.discordapp.com/attachments/856935661902626848/893872633064615967/Shaka.png")
.setFooter('☂️Shaka bot', 'https://cdn.discordapp.com/avatars/890967082555019315/cba9f99227093d53d7cf4566113eb9d3.png?size=4096');

module.exports.run = async (client, message) => {
  
   message.react(":white_check_mark:");
  
message.channel.send(ab);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["taslak"]
};

module.exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};