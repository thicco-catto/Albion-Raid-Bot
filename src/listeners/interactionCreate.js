import { Commands } from "../Commands.js";

export default (client) => {
    client.on("interactionCreate", async (interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client, interaction) => {
    const slashCommand = Commands.find(c => c.slashCommand.name === interaction.commandName);

    if (!slashCommand) {
        await interaction.reply({ content: "An error has occurred" });
        return;
    }

    await interaction.deferReply();

    slashCommand.response(client, interaction);
};