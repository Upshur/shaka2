const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi! - ottomancode`);
  console.log(`ALT YAPI OTTOMAN CODE'YE AİTTİR`)
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${client.user.username} ismi ile giriş yapıldı! - ottomancode`); 
  client.user.setStatus("idle");
  client.user.setActivity(`🌟prefix s+`);
};