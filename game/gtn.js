const discord = require('discord.js');

const winAmount = 150;
const {AdjustMoney} = require('../Managers/EconomyManager.js')


var TurnAmount = 5;
var TimeLength = 60;
var isGameDone = false;
var channels = new Array();

const colors = require('./Lists/EmbedColors.json')[0]


module.exports = {
    name: 'gtn',
    description: "Guess a number between 0-100 within a minute, or within 5 tries!",
    category: 'Game',
    async execute(message, args, client){
        
        if(channels.includes(message.channel.id))
        return message.channel.send({embeds:[{
            title:"Game Already In Progress!",
            description: "There is already a game in progress in this channel!",
            color: colors.error
        }]})
        
        
        var num = Math.floor(Math.random() * 100)
        channels.push(message.channel.id);
        
        message.channel.send({embeds:[{
            title:"A Game Of Guess The Number Has Started!",
            description: "You have 5 attempts (Or 60 seconds) To guess a number between 1-100!",
            color: colors.success
        }]}).then(function(game){        
            const randomNumber = num;
            
            const filter = (msg) =>
            {
                if(msg.author.id == message.author.id) return true
                else return false
            }
            
            const collector = new discord.MessageCollector(game.channel, filter, {
                max: TurnAmount,
                time: TimeLength * 1000
            });
            
            collector.on('collect', async guess => {
                
                if(guess.author.id == message.author.id){
                    
                    let guessedNumber = guess.content;
                    var titleOfEmbed, descriptionOfEmbed;
                    
                    if(isGameDone || TurnAmount <= 0){
                        collector.stop()
                    }	
                    
                    if(isNaN(guessedNumber)){
                        TurnAmount--;
                        message.channel.send({embeds:[{
                            title: "Not A Number!",
                            description: TurnAmount + " turns remaining.",
                            color: colors.error,
                        }]})
                    }
                    
                    if(guessedNumber < randomNumber){
                        TurnAmount--;
                        
                        message.channel.send({embeds:[{
                            title: "Too Low!",
                            description: TurnAmount + " turns remaining.",
                            color: colors.error,
                        }]})
                        
                    }
                    else if(guessedNumber > randomNumber)
                    {
                        TurnAmount--;
                        message.channel.send({embeds:[{
                            title: "Too High!",
                            description: TurnAmount + " turns remaining.",
                            color: colors.error,
                        }]})
                    }
                    else if(guessedNumber == randomNumber){
                        isGameDone = true;
                        titleOfEmbed = "Correct!",
                        descriptionOfEmbed = "You guessed the correct number: **" + randomNumber + "**"
                        
                        AdjustMoney(winAmount, message.author.id, message.guild.id, false) 

                        collector.stop(); 
                        
                        message.channel.send({embeds:[{
                            title: "Correct",
                            color: colors.success,
                            description: "You guessed the correct number: **" + randomNumber + "**"
                        }]})
                    }
                    
                    if(TurnAmount == 0 && !isGameDone){
                        collector.stop()
                    }
                }
            })
            
            collector.on('end', session => {
                
                //removing from array
                channels.splice(channels.indexOf(message.channel.id), 1);				
                
                TurnAmount = 5;
                
                if(!isGameDone){
                    return message.channel.send({embeds:[{
                        title:"Game Over!",
                        description: "The Correct Number Was: **" + randomNumber +  "**",
                        color: colors.error,
                        
                    }]})
                }
            })
        })
    }	
}
