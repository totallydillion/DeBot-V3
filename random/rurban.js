const urban = require('urban');
const colors = require('./Lists/EmbedColors.json')[0]


module.exports = {
    name:'rurban',
    subnames:['randomurban', 'urbanrandom'],
    description:'Get a random definition off of Urban Dictionary!',
    category:'Random',
    execute(message){
        urban.random().first(json => {
            return message.channel.send({embeds:[{
                title: json.word,
                description: json.definition + "\n \n **Written By: " + json.author + "**",
                color: colors.helpful,
                footer:{
                    text:"👍" + json.thumbs_up+ " 👎" + json.thumbs_down
                }
            }]})
        })
    }
}