const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s+";
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    const codwaembed = new Discord.MessageEmbed()
      .setDescription("**Ne yazık ki bu komutu kullanmaya yetkin yok.**")
      .setColor("BLACK");

    message.channel.send(codwaembed);
    return;
  }
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

   const sa = new Discord.MessageEmbed()
    .setAuthor("• 31")
    .setDescription(`Sohbet yazılamaz hale geldi`)
    .setFooter('a') 
    .setTimestamp()
    message.channel.send(sa)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};