module.exports = (client) => {

  const MESSAGE_ID = "1453358985569894400";
  const EMOJI_ID = "1453458869899759677"; // <-- emoji ID burada
  const GIVE_ROLE_ID = "1452814296491884616";
  const REMOVE_ROLE_ID = "1452816860029390969";

  client.on("messageReactionAdd", async (reaction, user) => {
    if (user.bot) return;
    if (reaction.partial) await reaction.fetch();

    // yanlış mesaja basıldıysa
    if (reaction.message.id !== MESSAGE_ID) return;

    // yanlış emoji ise
    if (reaction.emoji.id !== EMOJI_ID) return;

    const member = await reaction.message.guild.members.fetch(user.id);

    // eski rolü al
    if (member.roles.cache.has(REMOVE_ROLE_ID)) {
      await member.roles.remove(REMOVE_ROLE_ID);
    }

    // yeni rolü ver
    if (!member.roles.cache.has(GIVE_ROLE_ID)) {
      await member.roles.add(GIVE_ROLE_ID);
    }
  });

};





