require("dotenv").config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in!`);
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Sup bruh!');
  }
});


client.login(process.env.DISCORD_TOK);