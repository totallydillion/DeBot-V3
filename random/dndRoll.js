const { SlashCommandBuilder, ChannelType, messageLink } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dndroll')
    .setDescription('Roll a D&D Dice!')
    .addIntegerOption(option => 
        option.setName('dice')
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)
        .setDescription('How many dice are you trying to roll?'))
        .addIntegerOption(option => 
            option.setName('sides')
            .setMinValue(1)
            .setMaxValue(100)
            .setDescription('How many sides are on the dice?')
            .setRequired(true)),
            async execute(interaction) {
                //declaring
                let dice = interaction.options.getInteger('dice');
                let sides = interaction.options.getInteger('sides');
                let results = [];

                //rolling
                for(var i = 0; i < dice; i++){
                  // if the result is 0, default it to one
                    results != 0 ? results.push(Math.floor(Math.random() * sides)) : results.push(1);
                }

                //displaying
                return interaction.reply({embeds:[{
                    title:results.join(", ")
                }]})

        }
    }
    
