import { CommandInteraction, Client, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../Command";


function GetAuthor(client: CommandInteraction){
    if(client.user === null){
        return null;
    }

    const user = client.user;
    const username = user.username;
    const avatar = user.avatarURL();
    
    return {name: username, iconURL: avatar === null? "" : avatar}
}


export const NewRaid = new Command(
    new SlashCommandBuilder()
    .setName("raid")
    .setDescription("Crea una nueva raid."),

    async (client: Client, interaction: CommandInteraction) => {
        const RaidEmbed = new EmbedBuilder()
            .setTitle("Nueva Raid")
            .setDescription("Reacciona con un emoticono para elegir tu rol");

        const author = GetAuthor(interaction);
        if(author !== null){
            RaidEmbed.setAuthor(author)
        }

        await interaction.followUp({
            ephemeral: true,
            embeds : [RaidEmbed]
        });
    }
);