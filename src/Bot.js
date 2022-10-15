import { Client, GatewayIntentBits, Partials } from "discord.js";
import interactionCreate from "./listeners/interactionCreate.js";
import ready from "./listeners/ready.js";
import messageReactionAdd from "./listeners/messageReactionAdd.js";
import messageReactionRemove from "./listeners/messageReactionRemove.js";

const token = "MTAzMDU4NDM2MTg2NDY3NTM4MA.GJXic7.ZeD6FVr1J_vwHOVkxshF1MBh9NyYLmY5tfKMuw"; // add your token here

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
