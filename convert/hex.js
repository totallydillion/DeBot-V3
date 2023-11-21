var hexCodeSymbols = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C","D", "E", "F")
const colors = require('./Lists/EmbedColors.json')[0]


const { MessageActionRow, MessageButton, Message, ButtonInteraction } = require('discord.js')
const RerollRandom = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('ReRoll')
    .setLabel('🎲')
    .setStyle("PRIMARY"),
    )
    
    
    module.exports = {
        name: "hex",
        description: "Input a HEX and see how it looks",
        usage: "[HEX CODE] or 'random'",
        category: "Convert",
        async execute(message, args){
            if(args.join(" ") == "random"){
                let hexCode = ""
                for(var i = 0; i < 6; i++)
                {
                    hexCode += hexCodeSymbols[Math.floor(Math.random() * hexCodeSymbols.length)]
                }
                
                return message.channel.send({embeds:[{
                    title: hexCode,
                    color: parseInt("0x" + hexCode),
                    footer:
                    {
                        text: "=hex [hex code]"
                    },
                }],components: [RerollRandom]
            }).then(function(randomMessage){
                const filter = (interaction) => {
                    if(interaction.user.id == message.author.id ) return true;
                    else interaction.reply({ content: 'You do not have permission to get a new color. If you would like a random color, type **=hex random**', ephemeral: true });
                }
                const collector = randomMessage.createMessageComponentCollector({filter, time: 120000})
                
                
                collector.on('collect', async (interaction) => {  
                    let choice = interaction.customId
                    let hexCode = ""
                    if(choice == "ReRoll"){              
                        for(var i = 0; i < 6; i++)
                        {
                            hexCode += hexCodeSymbols[Math.floor(Math.random() * hexCodeSymbols.length)]
                        }
                    }
                    //editing the message
                    interaction.update({embeds:[{
                        title: hexCode,
                        color: parseInt("0x" + hexCode),
                        footer:
                        {
                            text: "=hex [hex code]"
                        },
                    }]
                })
            })
            
            collector.on('end', collected => {
                randomMessage.edit({embeds:[{
                    title: hexCode,
                    color: parseInt("0x" + hexCode),
                    footer:
                    {
                        text: "=hex [hex code]"
                    },
                }],components: [RerollRandom]
            })
        })
    })
}

try{
    return await message.channel.send({embeds:[{
        title: args[0],
        color: parseInt("0x" + args[0])
    }]
})
}    
catch(err) {
    if(err)
    return message.channel.send({embeds:[{
        title: "An Error Has Occured!",
        description: "The number you have entered may not be a valid hex code!",
        color: colors.error,
        footer:
        {
            text: "=hex [hex code]"
        },
    }]
})
}
}
}