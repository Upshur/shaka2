const Discord = require("discord.js");
const ab = new Discord.MessageEmbed()

.setTimestamp()
.setColor('RANDOM')
.setURL('https://discord.com/oauth2/authorize?client_id=890967082555019315&scope=bot&permissions=805314622')
.setTitle('☂️Shaka bot eğlence yardım menüsü')
.addField('s+öp', 'etiketledğiniz kullanıcıyı öpersiniz', true)
.addField('s+sarıl', 'etiketlediğiniz kullanıcıya sarılırsınız.', true)
.addField('s+fbi', 'fbi basar', true)
.addField('s+aykutelmas', 'aykut elmas sozleri atar', true)
.addField('s+vine', 'rastgele vine atar', true)
.addField('s+dans', 'dans gifi atar', true)
.addField('s+sayı-tahmin', 'çıkan sayıyı tahmin etmeye çalışırsınız', true)
.addField('s+not', 'not alırsınız', true)
.addField('s+zar-at', 'zar atarsınız', true)
.addField('s+hata', 'bot sahibine botta olan hatayı bildirirsiniz', true)
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
  name: "eyardım",
  description: "",
  usage: ""
};