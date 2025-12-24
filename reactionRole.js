module.exports = (client) => {

  // 🔧 AYARLAR
  const MESSAGE_ID = "1453358985569894400";
  const EMOJI = ":oblvon:";
  const GIVE_ROLE_ID = "1452814296491884616";
  const REMOVE_ROLE_ID = "1452816860029390969";

  client.on("messageReactionAdd", async (reaction, user) => {
    if (user.bot) return;

    if (reaction.partial) await reaction.fetch();

    if (
      reaction.message.id === MESSAGE_ID &&
      reaction.emoji.name === EMOJI
    ) {
      const member = await reaction.message.guild.members.fetch(user.id);

      if (member.roles.cache.has(REMOVE_ROLE_ID)) {
        await member.roles.remove(REMOVE_ROLE_ID);
      }

      await member.roles.add(GIVE_ROLE_ID);
    }
  });

};
