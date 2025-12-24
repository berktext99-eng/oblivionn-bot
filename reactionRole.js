module.exports = (client) => {

  const MESSAGE_ID = "1453358985569894400";
  const EMOJI_ID = "1453458869899759677";
  const ROLE_ID = "1452814296491884616";

  client.on("messageReactionAdd", async (reaction, user) => {
    if (user.bot) return;
    if (reaction.partial) await reaction.fetch();

    if (reaction.message.id !== MESSAGE_ID) return;
    if (reaction.emoji.id !== EMOJI_ID) return;

    const member = await reaction.message.guild.members.fetch(user.id);

    if (member.roles.cache.has(ROLE_ID)) return;

    await member.roles.add(ROLE_ID);
    console.log("ROL VERILDI");
  });

};
