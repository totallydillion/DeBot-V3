const economy = require('discord-economy-super');
const eco = new economy();
const colors = require('./Lists/EmbedColors.json')[0]
const managers = require('../Managers/EconomyManager.js');

module.exports = {
    name:"bal",
    description:"Check you or another users balance!",
    category:"Economy",
    usage:"[mentioned user]",
    async execute(message){
        let target = message.mentions.members.first() || message.member;
        
        // const balance = eco.balance.fetch(target.id, message.guild.id)
        // const bank = eco.bank.fetch(target.id, message.guild.id)

        var balance = await managers.GetBalance(message.author.id, message.guild.id);

        
        return message.channel.send({embeds:[{
            title: target.displayName +"'s Balance".toString(),
            color: colors.economy,
            fields:[{
                name:"Cash:",
                value: balance.wallet + "c",
                inline: true,
            },
            {
                name:"Bank:",
                value: balance.bank + "c",
                inline: true,
            }],
            footer:{
                text:"=bal [mentioned user]"
            }
        }]})
    }
}
