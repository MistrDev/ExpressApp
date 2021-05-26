require("dotenv").config()

const { Client, MessageAttachment} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const broadcast = client.voice.createBroadcast();

client.on('ready', () => {
  console.log(`Logged in!`);
});

// bot commands
client.on('message', msg => {
  if (msg.content === '!hi') {
    msg.reply('Sup bruh!');
  }
});

client.on('message', msg => {
  if (msg.content === '!corg') {
    msg.reply('Hi im made of rocks, but dont let that scare you unless your a pair of scissors haha.. little rock, paper, scissors joke for yah');
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
  if (msg.content === '!skin') {
    msg.reply('thats a big one, ima save it for latah');
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

client.on('message', message => {
  if (message.content === '!balloon') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://www.zebrapen.com/wp-content/themes/zebra/js/fullPage/examples/imgs/bg5.jpg');
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author},`, attachment);
  }
});
// end bot commands



client.login(process.env.DISCORD_TOK);