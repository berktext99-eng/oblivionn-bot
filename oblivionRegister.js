const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require("discord.js");

module.exports = (client) => {

  const NULL_ROLE = "1452793005999259688";
  const NEOPHYTE_ROLE = "1452814296491884616";

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand() && !interaction.isButton()) return;

    // /kayıt komutu
    if (interaction.isChatInputCommand()) {
      if (interaction.commandName !== "kayıt") return;

      const embed = new EmbedBuilder()
        .setColor(0x0b0b0b)
        .setTitle("⛧ OBLIVION KAYIT ⛧")
        .setDescription(
          "🗝️ **NULL olarak doğdun.**\n\n" +
          "Bu kapıdan geçenler geri dönmez.\n\n" +
          "🌑 **Neophyte** yolunu seç ve Oblivion’a adım at."
        )
        .setFooter({ text: "Oblivion V • The Gate Is Open" });

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("neophyte_register")
          .setLabel("🌑 Neophyte Ol")
          .setStyle(ButtonStyle.Secondary)
      );

      return interaction.reply({
        embeds: [embed],
        components: [row]
      });
    }

    // BUTON TIKLANDI
    if (interaction.isButton()) {
      if (interaction.customId !== "neophyte_register") return;

      const member = interaction.member;

      // NULL rolü yoksa işlem yapma
      if (!member.roles.cache.has(NULL_ROLE)) {
        return interaction.reply({
          content: "⛔ **Bu kapı sana açık değil.**",
          ephemeral: true
        });
      }

      // NULL alınır
      await member.roles.remove(NULL_ROLE);

      // Neophyte verilir
      await member.roles.add(NEOPHYTE_ROLE);

      return interaction.reply({
        content: "🌑 **Neophyte olarak işaretlendin. Oblivion seni kabul etti.**",
        ephemeral: true
      });
    }
  });
};
