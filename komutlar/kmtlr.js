const Discord = require("discord.js");
const ab = new Discord.MessageEmbed()

.setTimestamp()
.setColor('RANDOM')
.setURL('https://discord.com/oauth2/authorize?client_id=890967082555019315&scope=bot&permissions=805314622')
.setTitle('<:nntfen:895050915961241621>Shaka bot yardım menüsü')
.addField('<:mod:895051124887941120>s+myardım', 'moderasyon yardım menüsünü açar', true)
.addField('<:odekk:895053305049382932>s+kyardım', 'kullanıcı yardım menüsünü açar.', true)
.addField('<:gayp:895050896411607060>s+eyardım', 'eğlence yardım menüsünü açar', true)
.addField('🔞s+nyardım', 'Nsfw yardım menüsünü açar(+18)', true)
.addField('<:kurbye:895071612213293108>s+gyardım', 'gif pp yardım menüsünü açar', true)
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