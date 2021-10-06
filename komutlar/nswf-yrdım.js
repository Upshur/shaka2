const Discord = require("discord.js");
const ab = new Discord.MessageEmbed()

.setTimestamp()
.setColor('RANDOM')
.setURL('https://discord.com/oauth2/authorize?client_id=890967082555019315&scope=bot&permissions=805314622')
.setTitle('☂️Shaka bot Nswf yardım menüsü')
.addField('<:ilri:895072006750490634>s+hentai-feet', 'rastgele hentai porno resmi atar', true)
.addField('<:ilri:895072006750490634>s+pgif', 'porno gifi atar.', true)
.addField('<:ilri:895072006750490634>s+ass', 'rastgele porno gifi atar', true)
.addField('<:ilri:895072006750490634>s+hentai-thigs', 'hentai porno atar', true)
.addField('<:ilri:895072006750490634>s+panties', 'restgele değişik porno giflerş atar', true)
.addField('<:ilri:895072006750490634>s+thighs', 'porno resmi atar', true)
.setImage("https://cdn.discordapp.com/attachments/881203219567640647/895311530168553502/nsfw-1200x675.jpg")
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
  name: "nyardım",
  description: "",
  usage: ""
};