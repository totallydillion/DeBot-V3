const fs = require('fs');
const colors = require('./Lists/EmbedColors.json')[0];

const { MessageActionRow, MessageButton, Message, ButtonInteraction } = require('discord.js')
const ChangePage = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('Back')
    .setLabel('<<')
    .setStyle("PRIMARY"),
    new MessageButton()
    .setCustomId('Next')
    .setLabel('>>')
    .setStyle("PRIMARY"),
    )
    
    module.exports = {
        name:'additions',
        description:'Look at the things that were added to the bot for this month!',
        category:'Misc',
        execute(message, args){
            fs.readFile('./commands/Lists/additions.json', "utf-8", function(err, data){
                let obj = JSON.parse(data);
                let indexNumber = 0;
                message.channel.send({embeds:[{
                    title: obj[indexNumber].Date.toString(),
                    description: "Total Additions:**" + obj[indexNumber].NewCommands.length +"**\n"+ obj[indexNumber].NewCommands.join('\n'),
                    color: colors.misc,
                    footer:{
                        text:'=additions | =bugs | =comingsoon'
                    }
                }], components: [ChangePage]}).then(function(addMessage){
                    
                    const filter = (interaction) => {
                        if(interaction.user.id == message.author.id ) return true;
                        else interaction.reply({ content: 'You do not have permission to change the page!', ephemeral: true });
                    }
                    const collector = addMessage.createMessageComponentCollector({filter, time: 120000})
                    
                    
                    collector.on('collect', collected => {
                        collected.deferUpdate();
                        
                        let choice = collected.customId;
                        
                        if(choice == "Next")
                        indexNumber++;
                        
                        else if(choice == 'Back')
                        indexNumber--;
                        
                        if(indexNumber < 0)
                        indexNumber = obj.length - 1;
                        
                        else if(indexNumber >= obj.length)
                        indexNumber = 0;
                        
                        collected.message.edit({embeds:[{
                            title: obj[indexNumber].Date.toString(),
                            description: "Total Additions:**" + obj[indexNumber].NewCommands.length +"**\n"+ obj[indexNumber].NewCommands.join('\n'),
                            color: colors.misc,
                            footer:{
                                text:'=additions | =bugs | =comingsoon'
                            }
                        }], components: [ChangePage]})
                    })
                })
            })
        }
    }