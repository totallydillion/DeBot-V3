const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    name:"year",
    description:"Get a random year!",
    category: 'Random',
    execute(message){
        return message.channel.send({embeds:[{
            title: Math.floor(Math.random() * new Date().getFullYear()),
            color: colors.random,
            footer:{
                text:'=year'
            }
        }]
    })
}
}