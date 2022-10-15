import { CommandInteraction, Client, SlashCommandBuilder } from "discord.js";
import { Command } from "../Command.js";


export const Duncan = new Command(
    new SlashCommandBuilder()
    .setName("duncan")
    .setDescription("duncan"),

    async (client, interaction) => {
        const content = "1000 mujeres amadas con pasion son 1000 mujeres reales";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
);