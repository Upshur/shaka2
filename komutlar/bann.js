const Discord = require("discord.js");

module.exports.run = async (client, message, args, utils, data) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    return message.channel.send("bu komutu kullanmaya yetkin yetmiy");
  }
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send("yetkim yok özür dilerim ._.");


  let question = args.slice(1).join(" ") || "sebep uok";
  const user = message.mentions.users.first();

  if (!user) {
    return message.channel.send("kimi banlıyım ?_?");
  }
  if (!question) question = "sebep uok";
  if (user.id === message.author.id) return;
  let embed = new Discord.MessageEmbed().setDescription(
    `
  <:lukiban:815941402469990440> ${user.username}#${user.discriminator} banlıcam eminmisib 
  **sebep:** **${question}**
  `
  );
  const newMessage = await message.channel.send(embed);

  newMessage.react("✅").then(() => newMessage.react("❌"));

  const filter = (reaction, user) => {
    return (
      ["✅", "❌"].includes(reaction.emoji.name) &&
      user.id === message.author.id
    );
  };

  newMessage
    .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
    .then(async collected => {
      const reaction = collected.first();

      if (reaction.emoji.name === "✅") {
 
        let embed = new Discord.MessageEmbed().setDescription(
          `
  <:lukiban:815941402469990440> ${user.username}#${user.discriminator} banlandı 
  **sebep:** **${question}**?
  `
        );
        let btn = new Discord.MessageButton()
          .setStyle("red")
          .setLabel("geri al")
          .setID("undobutton");
        let msg = await message.channel.send({ embed: embed, component: btn });
        client.on("clickButton", async button => {
          if (button.id === "undobutton") {
            await button.defer();
            if (!button.clicker.member.permissions.has("MANAGE_CHANNELS"))
              return;
            button.channel.send(
              new Discord.MessageEmbed().setDescription(
                `REDO | ${user.username}#${user.discriminator} banı açıldı`
              )
            );

            btn = new Discord.MessageButton()
              .setStyle("red")
              .setLabel("undo")
              .setID("redobutton")
              .setDisabled(true);
            msg.edit({ embed: embed, component: btn });
            message.guild.members.unban(user);
          }
        });
  
      message.guild.members.ban(user);
      } else {
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Tamam, hiçbir şey olmayacak");

        message.channel.send(embed);
      }
    })
    .catch(collected => {
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Tamam, bu kullanıcıyı burada tutacağız.");

      message.channel.send(embed);
    });
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban"],
  permLevel: 0
};
module.exports.help = {
  name: "yasakla",
  description: "birini banlarsınız",
  usage: "yasakla"
};
