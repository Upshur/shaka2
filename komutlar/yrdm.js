const Discord = require("discord.js");
const ab = new Discord.MessageEmbed()

.setTimestamp()
.setColor('RANDOM')
.setTitle('☂️Shaka bot moderasyon yardım menüsü')
.addField('s+ban', 'etiketlediğiniz kişiyi banlar', true)
.addField('Alan Başlığı', 'Alan Açıklama', true)
.addField('Alan Başlığı', 'Alan Açıklama', true)
.addField('Alan Başlığı', 'Alan Açıklama', true)


















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
  name: "taslak",
  description: "",
  usage: ""
};