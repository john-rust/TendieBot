module.exports = {
  name: 'replaycurrent',
  description: 'Replay dat shit.',
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send('> There is nothing playing, dumbass.');
    var currentSong = serverQueue.songs[0];
    serverQueue.songs.push(currentSong);
    return message.channel.send(`> ${currentSong.title} has been added to the queue.`);
  },
};
