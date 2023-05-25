const colors = require('./Lists/EmbedColors.json')[0];
const fs = require('fs');

module.exports = {
    name:'bugs',
    description:'Get a list of the known bugs in the bot!',
    category: 'Misc',
    usage:'add [bug]',
    execute(message, args){
        if(args[0] == 'add'){
            args.shift();
            
            if(message.author.id != '699750640993173522' && message.author.id != "406897036315590656" && message.author.id != "347115260643115028" && message.author.id != "302162620742369281")
            return message.channel.send({embeds:[{
                title:'Invalid Permisisons',
                description: 'You do not have permission to do this command. If there is a bug that you would like to report, feel free to hit up the bot owner in **=inviticus**',
                color: colors.error
            }]})
            
            else {
                fs.readFile('./commands/Lists/bugs.json', 'utf-8', function(err, data){
                    if(err) return message.reply(err);
                    
                    let bug = args.join(" ");
                    var bugs = JSON.parse(data)
                    bugs.push(bug)
                    
                    fs.writeFile('./commands/Lists/bugs.json', JSON.stringify(bugs, null, 4), function(err){
                        if(err) return message.reply(err)
                        
                        return message.channel.send({embeds:[{
                            title:"Bug Added!",
                            description:"**Bug:**\n" + bug + "\n\n**Current Bug Count**\n" + bugs.length,
                            color: colors.misc
                        }]})
                    })
                })
            }
        }

        else
        fs.readFile('./commands/Lists/bugs.json', 'utf-8', function(err, data){
            if(err) return message.reply(err);
            
            var bugs = JSON.parse(data)

            return message.channel.send({embeds:[{
                title:"Known Bugs",
                description:"There are currently **" + bugs.length + "** Known Bugs:\n\n`[*]`" + bugs.join("\n`[*]`"),
                color: colors.misc,
                footer:{
                    text:"=help bugs \nWant to report a bug? Let us know in =inviticus"
                }
            }]})
        })
    }
}