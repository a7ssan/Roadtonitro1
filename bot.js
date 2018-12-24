const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);

client.on('message', message => {
  var prefix = '++'

  if(message.content === '-s1'){
message.channel.send('#daily')
  }
  if(message.content === '-ss1'){

    message.channel.send('#credits')
  }
  if(message.content.startsWith("!l say")) {
    var text = message.content.split(' ').slice(1).join(' ');
    if(!text) return message.reply("Incorrect Usage. Ex. !l say hi");
     message.channel.send(text);
  }
});

client2.on('message', message => {
  var prefix = '+'

  if(message.content === 'daily'){
message.channel.send('#daily')
  }
  if(message.content === 'credit'){

    message.channel.send('#credits')
  }
  if(message.content.startsWith('${prefix}say')) {
    var text = message.content.split(' ').slice(1).join(' ');
    if(!text) return message.reply("Incorrect Usage. Ex. !l say hi");
     message.channel.send(text);
  }
});


client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Hassan:tm: , Farm Credit By Hassan:tm:, ez Farm - ههههههههههههههههههههه**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Hassan:tm: , Farm Credit By Hassan:tm:, ez Farm - ههههههههههههههههههههه**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
