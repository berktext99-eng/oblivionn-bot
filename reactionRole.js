module.exports = (client) => {

  client.on("messageReactionAdd", async (reaction, user) => {
    if (user.bot) return;
    if (reaction.partial) await reaction.fetch();

    console.log("REACTION ALGILANDI");
    console.log("1453458869899759677", reaction.emoji.id);
    console.log("1453358985569894400", reaction.message.id);
  });

};



