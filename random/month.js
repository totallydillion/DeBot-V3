var months = new Array("January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    name:"month",
    description:"Get a month in the year",
    category: 'Random',
    execute(message){
        return message.channel.send({embeds:[{
            title: months[Math.floor(Math.random()* months.length)],
            color: colors.random,
        }]
    })
}
}