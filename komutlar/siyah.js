const db = require("orio.db");

exports.run = async (client, message, args) => {

    var developer = [
        "Black List Komutunu Kullanabilecek Kişiler",
        "",
        ""
    ]

    if (!developer.includes(message.author.id)) return;

    var members = client.users.cache.get(args[1]);

    if (!args[0]) return message.channel.send(`Yanlış kullanım = \`at | çıkar\``)

    if (args[0] === "at") {
        if (!members) return message.channel.send(`Bir ID yazmalısın.`)

        var data = db.get(`blacklist.${members.id}`);

        if (data === true) return message.channel.send(`Zaten blacklist'e bulunuyor.`);

        message.channel.send(`Başarıyla ${members} blackliste atıldı.`)
        await db.set(`blacklist.${members.id}`, true)
    }

    if (args[0] === "çıkar") {
        if (!members) return message.channel.send(`Bir ID yazmalısın.`)

        var data = db.get(`blacklist.${members.id}`);

        if (data === false) return message.channel.send(`Zaten blacklist'e bulunmuyor.`);

        message.channel.send(`Başarıyla ${members} blacklisten çıkartıldı.`)
        await db.set(`blacklist.${members.id}`, false)
    }
}
exports.conf = {
    aliases: []
};

exports.help = {
    name: "karaliste"
};