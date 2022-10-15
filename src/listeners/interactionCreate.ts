import { CommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.slashCommand.name === interaction.commandName);

    if (!slashCommand) {
        await interaction.reply({ content: "An error has occurred" });
        return;
    }

    await interaction.deferReply();

    slashCommand.response(client, interaction);
};