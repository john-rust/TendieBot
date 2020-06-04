const fs = require('fs')

module.exports = {
  name: 'help',
  description: 'List of all commands mothafucka.',
  execute(message) {
    let str = '';
    const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = require(`./${file}`);
      str += `- **;;${command.name}**  :  ${command.description} \n`;
    }

    message.channel.send('>>> ' + str);
  },
};
