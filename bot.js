require("dotenv").config()


const { Client, MessageAttachment} = require('discord.js');
const Discord = require('discord.js');
const DIG = require("discord-image-generation");
const client = new Discord.Client({
  partials: ["MESSAGE"]
}
);

//node stuff
client.setMaxListeners(Infinity);

client.on('ready', () => {
  console.log(`Logged in! `  + Discord.version);
});

// bot commands
client.on('message', msg => {
  if (msg.content === '!commands') {
    const commands = ('-!hi    -!Thanks    -!corg    -!where is cory?    -!seth    -!skin    -!ape    -!bo    -!jess    -!eric    -I love jarvis     -!balloon     -!what is my avatar?    -!github     -!linked      -!creator     -!meme-me     -!beautiful     -!rip     -!lisa     -!trash     -!triggered')
    msg.reply(commands);
  }
});

client.on('message', msg => {
  if (msg.content === '!hi') {
    msg.reply('Sup bruh!');
  }
});

client.on('message', msg => {
  if (msg.content === '!Thanks') {
    msg.reply('Any time sunshine!');
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
    msg.reply('Oy seth, I hope you have a good one ol chap');
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
  if (msg.content === '!bo') {
    msg.channel.send('Bo loves jarvis!');
  }
});

client.on('message', msg => {
  if (msg.content === '!jess') {
    msg.reply('Bo loves jess & jarvis!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Are you working jarvis?') {
    msg.reply('Yes, I seem to be working correctly. Why do you ask?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Just making sure jarvis') {
    msg.reply('Thank you for making me feel wanted..');
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
    msg.channel.send('You think you are better than me Rythm? Ight bet!');
  }
});

client.on('message', msg => {
  if (msg.content === '!disconnect') {
    msg.channel.send('Yeah thats what I thought rythm.. better leave..pussy');
  }
});

client.on('message', msg => {
  if (msg.content === '!dc') {
    msg.channel.send('Yeah thats what I thought rythm.. better leave..pussy');
  }
});

client.on('messageDelete', msg => {
   msg.channel.send('Woahhhh, stop deleting messages bruh! Jarvis no likey..');
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
  if (message.content === '!what is my avatar?') {
    message.reply(message.author.displayAvatarURL());
  }
});

// link commands
client.on('message', message => {
  if (message.content === '!creator') {
    const botInfo = new Discord.MessageEmbed()
    .setDescription('[To Dads House!](https://www.mistrdev.dev/)')
    message.channel.send('Here is Mistr Dev, my creator. Check out his website below!')
    message.channel.send(botInfo);
    
  }
});

client.on('message', message => {
  if (message.content === '!github') {
    const botInfo = new Discord.MessageEmbed()
    .setDescription('[To Dads Code!](https://github.com/MistrDev)')
    message.channel.send('Here is Mistr Devs github! Check out his commits to his projects! Is he even human..?')
    message.channel.send(botInfo);
    
  }
});

client.on('message', message => {
  if (message.content === '!linked') {
    const botInfo = new Discord.MessageEmbed()
    .setDescription('[To Dads Work](https://www.linkedin.com/in/cory-williams-5672841b0/)')
    message.channel.send('Here is Mistr Devs LinkedIn! Check out how professional he is.. wow')
    message.channel.send(botInfo);
    
  }
});

client.on('guildMemberAdd', member => {
  channel = member.guild.channels.cache.get("845844678657048587");
  channel.send("Welcome " + member.displayName + "\n Member Count: " + member.guild.memberCount);
});

// command for the DIG images
client.on('message', async (message) => {
  if (message.content === '!meme-me') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Affect().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
})

client.on('message', async (message) => {
  if (message.content === '!beautiful') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Beautiful().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
})

client.on('message', async (message) => {
  if (message.content === '!rip') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Rip().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
})

client.on('message', async (message) => {
  if (message.content === '!trash') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Trash().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
})

client.on('message', async (message) => {
  if (message.content === '!triggered') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Triggered().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
})

client.on('message', async (message) => {
  if (message.content === '!lisa') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.LisaPresentation().getImage(`Buy AMC.    Thank you, Have a good day.`);
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
})
// end bot commands



client.login(process.env.DISCORD_TOK);