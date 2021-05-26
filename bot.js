require("dotenv").config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in!`);
});

client.on('message', msg => {
  if (msg.content === '!hi') {
    msg.reply('Sup bruh!');
  }
});

client.on('message', msg => {
  if (msg.content === '!where is cory?') {
    msg.reply('In your moms kitchen prolly');
  }
});

client.on('message', msg => {
  if (msg.content === '!where is cory?') {
    msg.reply('In your moms kitchen prolly');
  }
});

client.on('message', msg => {
  if (msg.content === '!seth') {
    msg.reply('Hi, my name is corg, Im the leader of this place..');
  }
});


client.on('message', msg => {
  if (msg.content === '!ape') {
    msg.reply('AMC TO THE MF MOON!');
  }
});

client.on('message', msg => {
  if (msg.content === '!mod-me') {
    msg.member.roles.add('846396573193207849');
  }
});




client.login(process.env.DISCORD_TOK);