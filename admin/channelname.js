
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
    name:"channelname",
    description:"Change the name of a channel!",
    category:"Admin",
    usage:"[mentioned text channel] [new channel name]",
    execute(message, args){
        let textChannel = message.mentions.channels.first();
        var oldName, newName;    

        if(!textChannel){
            textChannel = message.channel
            oldName = message.channel.name
            newName = args.join("-")
        }
        else {
            oldName = textChannel.name
            args = args.slice(1);
            newName = args.join("-")
        }
        
        
        /* if the user doesnt have the right perms */
        if(!message.member.permissions.has("MANAGE_CHANNELS"))
        return message.channel.send({embeds:[{
            title:"Invalid Permissions!",
            description:"To preform this action, you must need the following permission: **MANAGE_CHANNELS**",
            color: colors.error
        }]})
        
        /* if the bot doesnt have the right perms */		
        else if(!message.guild.me.permissions.has("MANAGE_CHANNELS"))
        return message.channel.send({embeds:[{
            title:"Invalid Permissions!",
            description:"To preform this action, I need the following permission: **MANAGE_CHANNELS**",
            color: colors.error
        }]})
        
        textChannel.setName(args.join(" ")).then(function(){
            return message.channel.send({embeds:[{
                title:"Channel Updated!",
                color: colors.admin,
                fields:[{
                    name: "Old Name",
                    value: oldName.toString(),
                    inline: true,
                },
                {
                    name: "New Name",
                    value: newName,
                    inline: true,
                }]
            }]})
        }).catch(err => {
            if(err)
            message.channel.send({embeds:[{
                title:'Error!',
                description: err.toString(),
                color: 0xff0000,
            }]
        })
    })
}
}