const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  client.user.setActivity("Alfred")


});



client.login('ODE3NDM1MzczOTc3MzM3ODU2.YEJeBA.Z62wSYoEXByiB8sgaAI6NrjEUEo');
