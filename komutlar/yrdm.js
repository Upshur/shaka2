const Discord = require("discord.js");
const ab = new Discord.MessageEmbed()

.setTimestamp()
.setColor('RANDOM')
.setTitle('☂️Shaka bot moderasyon yardım menüsü')
.addField('<:ilri:895072006750490634>s+ban', 'etiketlediğiniz kişiyi banlar', true)
.addField('<:ilri:895072006750490634>s+otorol-ayarla', 'otorolü açmanızı sağlar.', true)
.addField('<:ilri:895072006750490634>s+otorol-kapat', 'otorolü kapatmanızı sağlar', true)
.addField('<:ilri:895072006750490634>s+herkeserolver @rol', 'herkese rol verir', true)
.addField('<:ilri:895072006750490634>s+herkestenrolal @rol', 'herkesten rol alır', true)
.addField('<:ilri:895072006750490634>s+küfür-ayarla aç,kapat', 'küfür engel açıp kapama', true)
.addField('<:ilri:895072006750490634>s+kick' ,'etiketlediğiniz kişiyi atar', true)
.addField('<:ilri:895072006750490634>s+allsesçıkar', 'seste bulunan tüm kullanıcıları çıkarır', true)
.addField('<:ilri:895072006750490634>s+snipe', 'silinen mesajı gosterir', true)
.addField('<:ilri:895072006750490634>s+sayaç #Kanal <Sayı>', 'sayaç ayarlar', true)
.addField('<:ilri:895072006750490634>s+aç', 'kanal kilidini açar', true)
.addField('<:ilri:895072006750490634>s+kapat', 'kanalı kilitler', true)
.addField('<:ilri:895072006750490634>s+kanal-koruma', 'kanal korumayı aktif veya deaktif eder', true)
.addField('<:ilri:895072006750490634>s+fakehesap-ayar', 'fake hesap korumasıdır', true)
.addField('<:ilri:895072006750490634>s+isim-değiştir', 'istediğiniz kullanıcının ismini değiştirir', true)
.addField('<:ilri:895072006750490634>s+sa-as', 'sa-as aktif veya deaktif eder', true)
.addField('<:ilri:895072006750490634>s+unbanall', 'sunucudaki tüm banlı kullanıcıların banını açar', true)
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