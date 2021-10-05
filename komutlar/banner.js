const { MessageEmbed } = require("discord.js");
const axios = require('axios');

exports.run = async (client, message, args) => {

    var user = message.mentions.members.first() || client.users.cache.get(args[0]) || message.member;

    axios({
        method: 'GET',
        url: `https://discord.com/api/v8/users/${user.id}`,
        headers: {
            Authorization: `Bot ${client.token}`
        }
    })
        .then(function (response) {
            try {
                if (response.data.banner.includes(".null")) return message.channel.send(`Kullanıcının banner verisini çekemedim.`)
                var embed = new MessageEmbed()
                    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                    .setImage(`https://cdn.discordapp.com/banners/${response.data.id}/${response.data.banner}?size=512&quot`)
                    .setColor("FFFFFF")
                message.channel.send(embed)
            } catch (err) {
                message.channel.send(`Kullanıcının banner verisini çekemedim.`)
            }
        })
}
exports.conf = {
    aliases: []
};

exports.help = {
    name: "banner"
};
