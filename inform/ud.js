const urban = require('urban');
const colors = require('./Lists/EmbedColors.json')[0]

const { MessageActionRow, MessageButton, Message, ButtonInteraction } = require('discord.js')
const PageFlip = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('Back')
    .setLabel('<<')
    .setStyle("PRIMARY"),
    new MessageButton()
    .setCustomId('Shuffle')
    .setLabel('🔀')
    .setStyle("PRIMARY"),
    new MessageButton()
    .setCustomId('Next')
    .setLabel('>>')
    .setStyle("PRIMARY"),
    )
    
    module.exports = {
        name: "ud",
        description: "Look up a word and definition on urban dictionary!",
        subnames:['urban'],
        category: "Inform",
        usage: "[word]",
        execute(message, args){
            let search = args.join(" ");
            
            if(!search)
            return message.channel.send({embeds:[{
                title: "Invalid Arguments",
                description:'In order to search something on urban dictionary, you must provide a search!',
                color: colors.error,
                footer:{
                    text:'=ud [word]'
                }
            }]})

            
            urban(search).res(json => {
                
                if(!json || !json[0])
                return message.channel.send({embeds:[{
                    title: "No Results Found!",
                    description:'There was no results for: **' + search + "**",
                    color: colors.error,
                    footer:{
                        text:'=ud [word]'
                    }
                }]})
                
                return message.channel.send({embeds:[{
                    title: json[0].word,
                    author:{
                        name: '0 / ' + (json.length - 1)
                    },
                    description: json[0].definition + "\n \n **Written By: " + json[0].author + "**",
                    color: colors.helpful,
                    footer:{
                        text:"👍" + json[0] .thumbs_up+ " 👎" + json[0].thumbs_down
                    }
                }], components: [PageFlip]}).then(function(wordMessage){
                    const filter = (interaction) => {
                        if(interaction.user.id == message.author.id ) return true;
                        else interaction.reply({ content: 'You do not have permission to change the page!', ephemeral: true });
                    }
                    const collector = wordMessage.createMessageComponentCollector({filter, time: 120000})
                    let pageNumber = 0
                    
                    collector.on('collect', async (interaction) => {  
                        let choice = interaction.customId
                        if(choice == "Back"){              
                            //if you try to go back on page 1, then it just starts over
                            if(pageNumber == 0)
                            pageNumber = json.length - 1;
                            
                            //otherwise, it just goes back 1.
                            else 
                            pageNumber--;
                        }
                        
                        if(choice == "Next"){              
                            
                            //if you try to go forward on the last page, it just starts over
                            if(pageNumber == json.length - 1)
                            pageNumber = 0;
                            
                            //otherwise, it just goes forward by 1.
                            else
                            pageNumber++;
                        } 
                        
                        if(choice == "Shuffle")
                        pageNumber = Math.floor(Math.random() * (json.length > 99 ? 99 : json.length))
                        
                        //editing the message
                        interaction.update({embeds:[{
                            title: json[pageNumber].word,
                            author:{
                                name: pageNumber + ' / ' + (json.length - 1)
                            },
                            description: json[pageNumber].definition + "\n \n **Written By: " + json[pageNumber].author + "**",
                            color: colors.helpful,
                            footer:{
                                text:"👍" + json[pageNumber] .thumbs_up+ " 👎" + json[pageNumber].thumbs_down
                            }
                        }]
                    })
                })
            })
        })
    }
}