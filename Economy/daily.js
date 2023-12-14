const economy = require('discord-economy-super');
const eco = new economy({
dailyAmount: 500  
})
const colors = require('./Lists/EmbedColors.json')[0]


module.exports = {
    name:"daily",
    description:"Get some daily money!",
    category:"Economy",
    execute(message,args){
        const daily = eco.rewards.daily(message.author.id, message.guild.id);

        if(!daily.status)
        return message.channel.send({embeds:[{
            title:'Already Claimed!',
            description: `You already claimed your daily bonus for today. You will be able to claim your next bonus in: **${daily.value.hours}** hours, **${daily.value.minutes}** minutes and **${daily.value.seconds}** seconds.`,
            color: colors.error,
        }]})        
        
        return message.channel.send({embeds:[{
            title: "Success!",
            description:"You have received your **500 Coin** Daily Bonus!",
            color: colors.economy,
        }]})
    }
}