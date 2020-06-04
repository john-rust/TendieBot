module.exports = {
  name: 'skip',
  description: 'Skip dat shit.',
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!message.member.voice.channel) return message.channel.send('> You have to be in a voice channel to do that, dumbass.');
    if (!serverQueue) return message.channel.send('> There is not song to skip, dumbass.');
    serverQueue.connection.dispatcher.end();
  },
};
