module.exports = {
  name: 'nowplaying',
  description: 'See wuss playin.',
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send('> There is nothing playing, dumbass.');
    return message.channel.send(`> Now playing : ${serverQueue.songs[1].title}`);
  },
};
