const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "OttomaN Destek & Botlist & Code v12 Altyapı Başarıyla Hostlandı!");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

//afk

client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){

       msg.reply(`Afk'lıktan Çıktınız`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});


///etiket-prefix

client.on('message', message => {
if (message.mentions.users.first()) { if (message.mentions.users.first().id === client.user.id){
message.channel.send(`Buyur prefixim ${prefix}`)
}}});


///fake-hesap


client.on("guildMemberAdd", async(member, message, msg) => {
 const fakehesapp = db.get(`fake_${member.guild.id}`)

  if(fakehesapp == "açık"){
  var moment = require("moment");
  require("moment-duration-format");
  moment.locale("tr");
  var { Permissions } = require("discord.js");
  var x = moment(member.user.createdAt)
    .add(20, "days")
    .fromNow();
  var user = member.user;
  x = x.replace("birkaç saniye önce", " ");
  if (!x.includes("önce") || x.includes("sonra") || x == " ") {
    let rol = db.get(`fakerol_${member.guild.id}`);


    member.user.send(
          "Hesabınız 20 günden önce açıldığı için cezalıya atıldınız, yetkililere bildirerek açtırabilirsiniz.");

    ////////////////
    let kanalcık = await db.fetch(`fakekanal_${member.guild.id}`);
    let kanal = member.guild.channels.find(r => r.id === kanalcık);
    ////////////////
    const embedd = new Discord.RichEmbed()

      .setTitle("Fake hesap yakalandı!!")
      .setTimestamp()
      .setDescription(
        `Bir fake hesap sisteme yakalandı ve rolü verildi. **${member}**`
      )
      .setTimestamp()
      .setColor("RED");
    kanal.send(embedd);
    member.addRole(rol);
  } else {
  }
  }
});

///kanal-koruma

//KanalKoruma

client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})

///eklendim-atıldım

client.on("guildCreate", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const kanal = "881947004253667389" //Eklendim mesajının atılacağı kanal ID'sini giriniz.
const ottoman = new Discord.MessageEmbed()
.setTitle(`Yeni bir sunucuya eklendim`)
.setColor("BLACK")
.addField(`Sunucu Adı`, guild.name)
.addField(`Sunucu Sahibi`, owner.username + "#" +owner.discriminator)
.addField(`Sunucu Üye Sayısı`, guild.memberCount)
client.channels.cache.get(kanal).send({embed: ottoman}).catch(err => console.log("Kanala mesaj atamıyorum!"))
})
//
  
//Atıldım
client.on("guildDelete", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const kanal = "881947004253667389" //Atıldım mesajının atılacağı kanal ID'sini giriniz.
const ottoman = new Discord.MessageEmbed()
.setTitle(`Bir sunucudan atıldım`)
.setColor("BLACK")
.addField(`Sunucu Adı`, guild.name)
.addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)
.addField(`Sunucu Üye Sayısı`, guild.memberCount)
client.channels.cache.get(kanal).send({embed: ottoman}).catch(err => console.log("Kanala mesaj atamıyorum!"))
})

///otorol

client.on("guildMemberAdd", async member => {
  
 let kanal = db.fetch(`codwakanal_${member.guild.id}`)   
 let rol = db.fetch(`codwarol_${member.guild.id}`)
 let mesaj = db.fetch(`codwamesaj_${member.guild.id}`)
  
if(!kanal) return
member.roles.add(rol)
  client.channels.cache.get(kanal).send(':loudspeaker: :inbox_tray: Otomatik Rol Verildi Seninle Beraber **`'+member.guild.memberCount+'`** Kişiyiz!  Hoşgeldin! **`'+member.user.username+'`**')

});

///dm-hg

client.on("guildMemberAdd", member => {
  const hosgeldin = new Discord.MessageEmbed()
  
   .setColor('#8A2BE2')
   .setTitle('Sunucumuza Hoşgeldin')
   .setDescription(`・ Sunucumuza geldiğin için teşekkür ederiz.`)
   .setTimestamp()
   .setFooter('☂️𝐒𝐡𝐚𝐤𝐚☂️')
  member.send(hosgeldin)
  });

///sa-as

client.on("message", async (message, member, guild) => {
  let ottoman = await db.fetch(`saas_${message.guild.id}`);
  if (ottoman === "açık") {
    if (message.content.toLowerCase() === "sa") {
message.channel.send(new MessageEmbed()
.setDescription(`Aleyküm Selam`)
.setColor('#8A2BE2')).then(x => x.delete({timeout: 5000}));    }
//OTTOMAN CODE
  }
});

///sayaç

client.on('guildMemberAdd', async member => {
let sayaç = db.fetch(`ottoman.sayaç_${member.guild.id}`)
let sayaçk = db.fetch(`ottoman.sayaçk_${member.guild.id}`)
if(!sayaç) return;
if(!sayaçk) return;
if(member.guild.memberCount >= sayaç) {

client.channels.cache.get(sayaçk).send(`Tebrikler! Sunucunuz başarıyla ayarlanmış olan \`${sayaç}\` kişiye ulaştı. Sayaç sistemi sıfırlandı.`)
db.delete(`ottoman.sayaç_${member.guild.id}`)
db.delete(`ottoman.sayaçk_${member.guild.id}`)
} else {
client.channels.cache.get(sayaçk).send(`╔▬▬▬▬▬▬▬ Maxy Sayaç Sistemi     ▬▬▬▬▬▬▬▬▬
║İşte Karşısınızda **${member}** Giriş Yaptı
║**${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kişi Kaldı
║Seninle Beraber **${member.guild.memberCount}** Kişiyiz !
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)


}
})

client.on('guildMemberRemove', async member => {
let sayaç = db.fetch(`ottoman.sayaç_${member.guild.id}`)
let sayaçk = db.fetch(`ottoman.sayaçk_${member.guild.id}`)
if(!sayaç) return;
if(!sayaçk) return;
if(member.guild.memberCount >= sayaç) {

client.channels.get(sayaçk).send(`Tebrikler! Sunucunuz başarıyla ayarlanmış olan \`${sayaç}\` kişiye ulaştı. Sayaç sistemi sıfırlandı.`)
db.delete(`ottoman.sayaç_${member.guild.id}`)
} else {
   
client.channels.cache.get(sayaçk).send(`╔▬▬▬▬▬▬▬ Maxy Sayaç Sistemi ▬▬▬▬▬▬▬▬▬
║**${member}** Aramızdan Ayrıldı
║**${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kişi Kaldı
║Toplam **${member.guild.memberCount}** Kişiyiz !
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
}

})

///küfür-engel

  const ottomandb = require('quick.db')
    client.on("message" , async (message, member, guild) => {
    let ottoman = await ottomandb.fetch(`ottomanküfürengel_${message.guild.id}`)
    if(!ottoman) return;
    let kelimeler = message.content.slice(" ").split(/ +/g)
    let ottomanküfürler = ["oç","am","göt","orusbu","sikim","porno","anneni","amk","yarrak", "amq", "piç"]
    if (ottomanküfürler.some(word => message.content.toLowerCase().includes(word))) {
    if (message.member.hasPermission("BAN_MEMBERS")) return;
    message.delete()
    message.channel.send('küfür yasak').then(x => x.delete({timeout: 3000}));}})

///snipe

  client.on('messageDelete', message => {
  const data = require("quick.db")
  data.set(`snipe.mesaj.${message.guild.id}`, message.content)
  data.set(`snipe.id.${message.guild.id}`, message.author.id)

})

///resimli-hgbb

client.on("guildMemberAdd", async member => {
    let gkanal = await db.fetch('rgiris_'+member.guild.id)
    const gözelkanal = member.guild.channels.get(gkanal)
    if (!gözelkanal) return; //dcs ekibi
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
  
          const bg = await Jimp.read("https://cdn.discordapp.com/attachments/596076560293953565/613821209880297502/giris_yapt.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(300, 300);
            await bg.composite(userimg, 50, 20).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })
client.on("guildMemberRemove", async member => {
   let gkanal = await db.fetch('rgiris_'+member.guild.id)
    const gözelkanal = member.guild.channels.get(gkanal)
    if (!gözelkanal) return; //dcs ekibi
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {              
           const bg = await Jimp.read("https://cdn.discordapp.com/attachments/596076560293953565/613821573249499177/cksyapt.png");
            const userimg = await Jimp.read(member.user.avatarURL);
          var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(300, 300);
            await bg.composite(userimg, 50, 20).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              
              }, 10000);
        }
    })    






























































client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
