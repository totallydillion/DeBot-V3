const colors = require('./Lists/EmbedColors.json')[0];
const fs = require('fs');

module.exports = {
    name:'comingsoon',
    description:'Get a list of things that are coming soon to the bot!',
    category: 'Misc',
    usage:'add [comingsoon(bot owner only)]',
    execute(message, args){
        if(args[0] == 'add'){
            args.shift();
            
            if(message.author.id != '699750640993173522')
            return message.channel.send({embeds:[{
                title:'Invalid Permisisons',
                description: 'Only the bot owner can do this command. If there is a suggestion that you would like the bot owner to know, feel free to hit up the bot owner in **=inviticus**',
                color: colors.error
            }]})
            
            else {
                fs.readFile('./commands/Lists/comingsoon.json', 'utf-8', function(err, data){
                    if(err) return message.reply(err);
                    
                    let bug = args.join(" ");
                    var bugs = JSON.parse(data)
                    bugs.push(args.join(" "))
                    
                    fs.writeFile('./commands/Lists/comingsoon.json', JSON.stringify(bugs, null, 4), function(err){
                        if(err) return message.reply(err)
                        
                        return message.channel.send({embeds:[{
                            title:"Item Added!",
                            description:"**Added:**\n" + bug + "\n\n**Amount Of Things You're Never Going To Do**\n" + bugs.length,
                            color: colors.misc
                        }]})
                    })
                })
            }
        }

        else
        fs.readFile('./commands/Lists/comingsoon.json', 'utf-8', function(err, data){
            if(err) return message.reply(err);
            
            var comingsoon = JSON.parse(data)

            return message.channel.send({embeds:[{
                title:"Plans",
                description:"There are currently **" + comingsoon.length + "** Things Tagged With 'Coming Soon' \n`[*]`" + (comingsoon[0] ? comingsoon.join("\n`[*]`") : "Error 404, No Idea Found!"),
                color: colors.misc,
                footer:{
                    text:"=help comingsoon \nWant to suggest something? Let us know in =inviticus"
                }
            }]})
        })
    }
}