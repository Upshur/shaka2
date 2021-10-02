const db = require('quick.db');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
let eskinot = db.get(`not_${message.author.id}`)

  if(!args[0]) return message.channel.send(`ayarla veya sıfırla yaz`)
  
      if(args[0] === "ayarla"){
     if (!args[1]) return message.channel.send('lutfen notu yaz')
        //ottomancode
let ottomannot = args.slice(1).join(' ')
    db.set(`not_${message.author.id}`, ottomannot)
    message.channel.send(`notunu ${ottomannot} olarak ayarladım`)
   }
    if(args[0] === "sıfırla") {
    if(!eskinot) {
      message.channel.send('zaten daha once not ayarlanmamış')      
    }else{db.delete(`prefix_${message.guild.id}`)
    message.channel.send('notu sıfırladım')   }
     }
  
      if(args[0] === "göster") {
        if(!eskinot){
          message.channel.send("daha önce not ayarlamamışsın")
        }else {
         message.channel.send(`işte senin notun: \n ${eskinot}`) 
        }
      }
  
};
//ottoman
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["not"]
};
 exports.help = {
    name: 'not',
    description: 'ottoman',
   usage: 'ottoman'
};