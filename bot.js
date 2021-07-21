require("dotenv").config()



const { Client, MessageAttachment} = require('discord.js');
const Discord = require('discord.js');
const DIG = require("discord-image-generation");
const { DiscordTogether } = require('discord-together');

const client = new Discord.Client({
  partials: ["MESSAGE"]
}
);

//node stuff
client.setMaxListeners(Infinity);
client.discordTogether = new DiscordTogether(client);
client.on('ready', () => {
  console.log(`Logged in! `  + Discord.version);
});

// bot commands
client.on('message', msg => {
  if (msg.content === '!commands') {
    const commands = ('-!hi    -!Thanks    -!korg    -!where is cory?    -!seth    -!skin    -!ape    -!bo    -!jess    -!eric    -I love jarvis     -!balloon     -!what is my avatar?    -!github     -!linked      -!creator     -!meme     -!beautiful     -!rip     -!lisa     -!trash     -!triggered     -!invert      -!poker      -!youtube       -!fishing')
    msg.channel.send(commands);
  }
});

client.on('message', msg => {
  if (msg.content === '!hi my names Jarvis!') {
    msg.reply('Sup bruh!');
  }
});

client.on('message', msg => {
  if (msg.content === '!Thanks') {
    msg.reply('Any time sunshine!');
  }
});

client.on('message', msg => {
  if (msg.content === '!korg') {
    const attachment = new MessageAttachment('https://media.tenor.com/images/8f9e3fa80f0e9529811ee1a732600e9a/tenor.gif');
    const attachment2 = new MessageAttachment('https://media.tenor.com/images/0e467ab6c3959ca3b0de995a6a3ad475/tenor.gif');
    msg.channel.send('Hey, hey, hey. Hey. Take it easy, man. Over here. The pile of rocks waving at you. Here. Yeah, Im actually a thing. Im a being. Allow me to introduce myself. My name is Korg. Im kind of like the leader in here. Im made of rocks, as you can see..' , attachment);
    msg.channel.send(attachment2)
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
    msg.channel.send('Bo loves jarvis and Cory, my master!');
  }
});

client.on('message', msg => {
  if (msg.content === '!jess') {
    msg.reply('Bo loves jess & jarvis!');
  }
});

client.on('message', msg => {
  if (msg.content === 'are you working jarvis?') {
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


// 8ball command
client.on('message', msg => {
  if (msg.content === '!8ball') {
    const responses = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
    msg.reply(responses[Math.floor(Math.random() * responses.length)]);
  }
});

//dice command
client.on('message', msg => {
  if (msg.content === '!dice') {
    const responses = ['1', '2', '3', '4', '5', '6'];
    msg.reply(responses[Math.floor(Math.random() * responses.length)]);
  }
});

//coin command
client.on('message', msg => {
  if (msg.content === '!coin') {
    const responses = ['Heads', 'Tails'];
    msg.reply(responses[Math.floor(Math.random() * responses.length)]);
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
    .setDescription('[To Dads Work!](https://www.linkedin.com/in/cory-williams-5672841b0/)')
    message.channel.send('Here is Mistr Devs LinkedIn! Check out how professional he is.. wow')
    message.channel.send(botInfo);
    
  }
});


// command for the DIG images
client.on('message', async (message) => {
  if (message.content === '!meme') {
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

client.on('message', async (message) => {
  if (message.content === '!invert') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Invert().getImage(avatar);
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
})

client.on('message', async (message) => {
  if (message.content === '!AMC') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Stonk().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
})


//Discord-together youtube , poker, fishing
client.on('message', async message => {
  if (message.content === '!youtube') {
      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
          return message.channel.send(`${invite.code}`);
      });
      };
  };
});

client.on('message', async message => {
  if (message.content === '!poker') {
      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
          return message.channel.send(`${invite.code}`);
      });
      };
  };
});

client.on('message', async message => {
  if (message.content === '!fishing') {
      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
          return message.channel.send(`${invite.code}`);
      });
      };
  };
});
// end bot commands


client.login(process.env.DISCORD_TOK);