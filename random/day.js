var days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    name:"day",
    description:"Get a random day of the week!",
    category: 'Random',
    execute(message){
        return message.channel.send({embeds:[{
            title: days[Math.floor(Math.random()* days.length)],
            color: colors.random,
        }]
    })
}
}