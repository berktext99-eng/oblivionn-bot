const { Client, GatewayIntentBits, Partials } = require("discord.js");
const reactionRole = require("./reactionRole");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.once("ready", () => {
  console.log(`Bot açıldı: ${client.user.tag}`);
});

reactionRole(client);

client.once("ready", () => {
  console.log(`Bot açıldı: ${client.user.tag}`);

  client.user.setActivity("OBLIVION NEVER SLEEPS.", {
    type: 1 // PLAYING
  });
});
client.login(process.env.TOKEN);


