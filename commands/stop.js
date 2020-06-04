module.exports = {
  name: 'stop',
  description: 'Stop dat shit.',
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!message.member.voice.channel) return message.channel.send('> You have to be in a voice channel to do that, dumbass.');
    var lastSong = serverQueue.songs[0].title;
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    message.channel.send(`> Stopped playing : ${lastSong}`)
  },
};
