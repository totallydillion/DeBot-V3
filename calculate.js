//folders
const colors = require('./Lists/EmbedColors.json')[0];

//guild stuff
var playingChannels = [];
var playingPlayers =  [];


//options :
var buttonCount = 6; // -1

//discord stuff
const { MessageActionRow, MessageButton, Message, ButtonInteraction } = require('discord.js')

module.exports = {
    name:'calculate',
    description:'I will give you a number, and numbers, you will have to enter numbers that add up to that number!',
    long:'Calculate is a game that DeBot will give you a number, and you will have to enter numbers that will add up to that number. Each number can be used twice per level, and it is endless. Theoretically, it is possible to go on forever, but all of the numbers, from the number that is given to you, to the answer choices, are random.',
    category:'Game',
    execute(message, args){
        
        /* error handling */
        
        if(playingChannels.includes(message.channel.id)) //if there is a game already being played in the channel
        return message.channel.send({embeds:[{
            title:'Game Already Being Played',
            color: colors.error,
            description:'There is already a game being played in this channel.',
            footer:{
                text:'=calculate'
            }
        }]})
        
        if(playingPlayers.includes(message.author.id)) //if there is a game already being played in the channel
        return message.channel.send({embeds:[{
            title:'Game Already Being Played',
            color: colors.error,
            description:'You Are Already Playing A Game!',
            footer:{
                text:'=calculate'
            }
        }]})
        
        /* end error handling */
        
        
        var calculatedNumber = GetNewNumber(1);
        
        var startButtons = new MessageActionRow()
        
        for(var i = 1; i < buttonCount; i++){
            startButtons.addComponents(
                new MessageButton()
                .setCustomId(`Option${i}`)
                .setLabel((GetNewNumber(calculatedNumber)).toString())
                .setStyle("PRIMARY")
                .setDisabled(false),
                )
            }
            
            return message.channel.send({embeds:[{
                title:'Calculate: ' +  calculatedNumber,
                description:"Using the buttons below, calcuate the number that adds up to the number that tells you to calculate!",
                color: colors.fun,
            }], components: [startButtons]}).then(function(CalculateMessage){
                // when the game starts
                
                //put people in the array
                playingChannels.push(message.channel.id);
                playingPlayers.push(message.author.id);
                
                //get the variables
                
                //the starting number
                var thisNumber = calculatedNumber;
                
                //the number that is current
                var currentNumber = thisNumber;
                
                //level
                var level = 1;
                
                const filter = (interaction) => {
                    if(interaction.user.id == message.author.id ) return true;
                    else interaction.reply({ content: 'This is not your game, type =calculate to start your own!', ephemeral: true });
                }
                const collector = CalculateMessage.createMessageComponentCollector({filter, time: 300000})
                
                var startBtn = startButtons;
                
                var chosenIDs = [];
                
                collector.on('collect', collected => {
                    
                    collected.deferUpdate();
                    
                    //upon clicking a number
                    var newNumber;
                    
                    for(var i = 0; i < CalculateMessage.components[0].components.length; i++){
                        
                        if(collected.customId == CalculateMessage.components[0].components[i].customId){
                            
                            let chosenNumber = CalculateMessage.components[0].components[i].label;
                            newNumber = currentNumber - chosenNumber
                            
                            if(chosenIDs.includes(collected.customId))
                                startBtn.spliceComponents(i, 1)
                            else 
                            chosenIDs.push(collected.customId)
                            
                        }
                    }
                    
                    if(newNumber == 0){
                        //on game end
                        level++;
                        chosenIDs = [];
                        
                        //when the new round has to start
                        var calculatedNumber = GetNewNumber(level);
                        
                        //the message buttons
                        var newLevelButton = new MessageActionRow()
                        
                        for(var i = 1; i < buttonCount; i++){
                            newLevelButton.addComponents(
                                new MessageButton()
                                .setCustomId(`Option${i}`)
                                .setLabel((GetNewNumber(calculatedNumber)).toString())
                                .setStyle("PRIMARY")
                                .setDisabled(false),
                                )
                            }
                            
                            //update the variables
                            thisNumber = calculatedNumber;
                            currentNumber = calculatedNumber;
                            startBtn = newLevelButton;
                            
                            CalculateMessage.edit({embeds:[{
                                title: `Calculate: ${calculatedNumber}`,
                                description:`**Level** ${level}\nUsing the buttons below, calcuate the number that adds up to the number that tells you to calculate!`,
                                color: colors.fun,
                            }], components: [newLevelButton]})
                        }
                        else if(newNumber <= 0)
                            collector.stop();
                            
                        else if (newNumber > 0){
                            //not wrong or right answer
                            
                            currentNumber = newNumber;
                            
                            CalculateMessage.edit({embeds:[{
                                title: `Calculate: ~~${thisNumber}~~ ${newNumber}`,
                                description:`**Level** ${level}\nUsing the buttons below, calcuate the number that adds up to the number that tells you to calculate!`,
                                color: colors.fun
                                
                            }], components: [startBtn]})
                        }
                    })
                    collector.on('end', collected => {
                        playingChannels.splice(playingChannels.indexOf(message.channel.id), 1);
                        playingPlayers.splice(playingPlayers.indexOf(message.author.id), 1);

                        return message.channel.send({embeds:[{
                            title:'Game Over',
                            description:'You entered numbers that went above the number that was needed to calculate, game over!',
                            color: colors.error
                        }]})
                    })
                })
            }
        }
        
        function GetNewNumber (maxNumber){
            return Math.floor(Math.random() * maxNumber + 1)
        }