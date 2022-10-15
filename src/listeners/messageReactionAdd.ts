import { Client, EmbedBuilder, GuildEmoji, MessageReaction, PartialMessageReaction, PartialUser, ReactionEmoji, User } from "discord.js";


function GetEmojiStringFromEmoji(emoji: GuildEmoji | ReactionEmoji){
    if(emoji.name === null){
        return "Avisadme si sale esto xd";
    }

    if(emoji.id === null){
        return emoji.name;
    }

    let str = "<";
    if(emoji.animated){
        str += "a";
    }
    str += ":" + emoji.name + ":" + emoji.id + ">";

    return str;
}


export default (client: Client): void => {
    client.on("messageReactionAdd", (reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) => {
        if(client.user === null){ return; }
        if(user.username === null){ return; }
        if(reaction.message.author === null) { return; }
        if(!reaction.message.author.equals(client.user)) { return; }
        if(reaction.message.embeds.length == 0) { return; }

        let emojiStr = GetEmojiStringFromEmoji(reaction.emoji);
        const embed = reaction.message.embeds[0];
        const fields = embed.fields;
        let foundField = fields.find(field => field.name === emojiStr);
        let fieldValue = "";

        if(foundField !== undefined){
            fieldValue = foundField.value + "\n" + user.username;

            const editedEmbed = new EmbedBuilder(embed.data)
                .setFields(fields.filter(field => field.name !== emojiStr).concat({
                    name: emojiStr, value: fieldValue, inline: true
                }));

            reaction.message.edit({
                embeds: [editedEmbed]
            })
        }else{
            fieldValue = user.username

            const editedEmbed = new EmbedBuilder(embed.data)
                .addFields({
                    name: emojiStr, value: fieldValue, inline: true
                });

            reaction.message.edit({
                embeds: [editedEmbed]
            })
        }
    });
};