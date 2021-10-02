 exports.run = (client, message) => {
   //OTTOMAN CODE
   message.channel.send('zar atılıyor').then(message => {
   var ottoman = ['1','2','3','4','5','6'];
   var ottomancode = ottoman[Math.floor(Math.random() * ottoman.length)];
   message.edit(`${ottomancode}`)})}
   //OTTOMAN CODE
   exports.conf = {enabled: true,guildOnly: false,aliases: [],permLevel: 0};
   //OTTOMAN CODE
   exports.help = {name: 'zar-at'};