const Discord = require("discord.js");
const ab = new Discord.MessageEmbed()

.setColor('CYAN')
.setTitle('☂️Shaka bot yardım menüsü')
.addField('s+ban', 'Alan Açıklama', true)




module.exports.run = async (client, message) => {
  
   message.react(":white_check_mark:");
  

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