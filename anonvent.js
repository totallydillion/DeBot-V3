const discord = require('discord.js');
var ventingPeople = new Array()
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
    name: "anonvent",
    description: "Vent anonomously for Inviticus & It's partnered servers.",
    usage: '[your vent] / "dm"',
    category:"Social",
    execute(message, args, client){
        
        if(message.author.id == 406897036315590656){
            client.channels.cache.get('699760845701382183').send("💬 " + message.content)
            message.delete();
        }

        else
        return message.reply("WIP")

    }
}