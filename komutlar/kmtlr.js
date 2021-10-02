const Discord = require("discord.js");
const ab = new Discord.MessageEmbed()

.setTimestamp()
.setColor('RANDOM')
.setTitle('☂️Shaka bot yardım menüsü')
.setTitle('☂️Prefix')
.addField('myardım', 'etiketlediğiniz kişiyi banlar', true)
.addField('s+otorol-ayarla', 'otorolü açmanızı sağlar.', true)
.addField('s+otorol-kapat', 'otorolü kapatmanızı sağlar', true)
.addField('s+herkeserolver @rol', 'herkese rol verir', true)
.addField('s+herkestenrolal @rol', 'herkesten rol alır', true)
.addField('s+küfür-ayarla aç,kapat', 'küfür engel açıp kapama', true)
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
  name: "myardım",
  description: "",
  usage: ""
};