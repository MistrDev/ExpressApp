require("dotenv").config()

const { Client, MessageAttachment} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ["MESSAGE"]
}
);

//node stuff
client.setMaxListeners(Infinity);

//
client.on('ready', () => {
  console.log(`Logged in!` + Discord.version);
});

// bot commands
client.on('message', msg => {
  if (msg.content === '!hi') {
    msg.reply('Sup bruh!');
  }
});

client.on('message', msg => {
  if (msg.content === '!corg') {
    msg.channel.send('Hi im made of rocks, but dont let that scare you unless your a pair of scissors haha.. little rock, paper, scissors joke for yah');
  }
});

client.on('message', msg => {
  if (msg.content === '!where is cory?') {
    msg.reply('In your moms kitchen prolly');
  }
});

client.on('message', msg => {
  if (msg.content === '!seth') {
    msg.reply('Hi, my name is Seth, Im the leader of this place..');
  }
});

client.on('message', msg => {
  if (msg.content === '!skin') {
    msg.channel.send('thats a big one, ima save it for latah');
  }
});

client.on('message', msg => {
  if (msg.content === '!ape') {
    msg.reply('AMC TO THE MF MOON!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Are you working jarvis?') {
    msg.reply('Yes, I seem to be working correctly. Why do you ask?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Just making sure jarvis') {
    msg.reply(`Thank you for making me feel wanted..`);
  }
});

client.on('message', msg => {
  if (msg.content === '!mod-me') {
    msg.member.roles.add('790702092863537153');
  }
});

client.on('message', msg => {
  if (msg.content === '!eric') {
    msg.channel.send('Eric loves Jarvis!');
  }
});

client.on('message', msg => {
  if (msg.content === '!join') {
    msg.channel.send('You think you are better than me Rythm? Oh helllll nah!');
  }
});

client.on('message', msg => {
  if (msg.content === '!disconnect') {
    msg.channel.send('Yeah thats what I thought rythm.. better leave..pussy');
  }
});

client.on('messageDelete', msg => {
   msg.reply('Woahhhh, stop deleting messages bruh! Jarvis no likey..');
});

client.on('message', msg => {
  if (msg.content === 'I love jarvis') {
    msg.react('😍');
  }
});

client.on('message', message => {
  if (message.content === '!balloon') {
    const attachment = new MessageAttachment('https://www.zebrapen.com/wp-content/themes/zebra/js/fullPage/examples/imgs/bg5.jpg');
    message.channel.send(`${message.author},`, attachment);
  }
});

client.on('message', message => {
  if (message.content === '!patrick') {
    const attachment = new MessageAttachment('');
    message.channel.send(`${message.author},`, attachment);
  }
});
// end bot commands



client.login(process.env.DISCORD_TOK);