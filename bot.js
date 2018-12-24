const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);

client.on('message', message => {

  if(message.content === '-s1'){
message.channel.send('#daily')
  }
  if(message.content === '-ss1'){

    message.channel.send('#credits')
  }
  if(message.content.startsWith("1!say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client2.on('message', message => {

  if(message.content === '2daily'){
message.channel.send('#daily')
  }
  if(message.content === '2credit'){

    message.channel.send('#credits')
  }
  if(message.content.startsWith("2!say")) {
    var text = message.content.split(' ').slice(1).join(' ');
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
