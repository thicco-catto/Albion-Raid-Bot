import { CommandInteraction, Client, SlashCommandBuilder } from "discord.js";
import { Command } from "../Command";


export const Betis = new Command(
    new SlashCommandBuilder()
    .setName("betis")
    .setDescription("Viva el Betis y viva Bobobo"),

    async (client: Client, interaction: CommandInteraction) => {
        const content = "Vivalbetis";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
);