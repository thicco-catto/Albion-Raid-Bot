import { Client, ClientOptions, GatewayIntentBits, Partials } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import messageReactionAdd from "./listeners/messageReactionAdd";
import messageReactionRemove from "./listeners/messageReactionRemove";

const token = process.env.TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessageReactions
    ],
    partials: [Partials.Channel, Partials.Reaction, Partials.Message],
});

ready(client);
interactionCreate(client);
messageReactionAdd(client);
messageReactionRemove(client)

client.login(token);
