const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    name:'suscheck',
    subnames:['sus'],
    description:'See how sus someone is',
    usage:'[mentioned user]',
    category:'Fun',
    execute(message, args){
        let user = message.mentions.members.first() || message.member;

        let randomNumber = Math.floor(Math.random() * 100);
        let text;

        if(randomNumber > 0 && randomNumber <= 25)
        text = "Not That Sus";
        
        else if(randomNumber >= 26 && randomNumber <= 51)
        text = "Kind of sus";
        
        else if(randomNumber >= 52 && randomNumber <= 76)
        text = "Very Sus";

        else if(randomNumber >= 77 && randomNumber <= 98)
        text = "Omegasus";

        else if(randomNumber >= 99 && randomNumber <= 100)
        text = "sus af to me";


        return message.channel.send({embeds:[{
            title:"Sus Check",
            description: "**" + user.displayName + "** is **" + randomNumber + "**% Sus.\n Seems **" + text + "** to me.",
            color: colors.random,
            footer:{
                text:"=sus [mentioned user]"
            }
        }]})
    }
}