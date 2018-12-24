const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-s1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-ss1'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-say'){
    let say = args.join(' ');
        message.channel.send(say);
    }
});

client2.on('message', message => {
    if(message.content === '-s2'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-ss2'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-sss2'){
        message.channel.send('#credits')
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




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
