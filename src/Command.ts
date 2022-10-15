import { CommandInteraction, ChatInputApplicationCommandData, Client, SlashCommandBuilder } from "discord.js";
import { Commands } from "./Commands";

export class Command{
    slashCommand: SlashCommandBuilder;
    response: (Client: Client, Interaction: CommandInteraction) => void;

    constructor(slashCommand :SlashCommandBuilder, response: (Client: Client, Interaction: CommandInteraction) => void){
        this.slashCommand = slashCommand;
        this.response = response
    }
}
