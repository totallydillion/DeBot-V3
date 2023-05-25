const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    name: "ban",
    description: "Ban someone from the discord server!", 
    usage: "[mentioned member/ID] [reason]",
    category: "Admin",
    execute(message, args){
        
        var target = message.mentions.members.first()
        var id = parseInt(args[0])
        let isThereAnId = !isNaN(id)
        
        
        
        /* if no member was mentioned */
        if(!target && !isThereAnId)
        return message.channel.send({embeds:[{
            title:"No User Mentioned!",
            description:"You must provide a user to ban!",
            color: colors.error,
        }]})
        
        /* if the user doesnt have the right perms */
        if(!message.member.permissions.has("BAN_MEMBERS"))
        return message.channel.send({embeds:[{
            title:"Invalid Permissions!",
            description:"To preform this action, you must need the following permission: **BAN_MEMBERS**",
            color: colors.error,
        }]})
        
        /* if the bot doesnt have the right perms */		
        else if(!message.guild.me.permissions.has("BAN_MEMBERS"))
        return message.channel.send({embeds:[{
            title:"Invalid Permissions!",
            description:"To preform this action, I need the following permission: **BAN_MEMBERS**",
            color: colors.error,
        }]})
        
        /* higher role */
        if(message.mentions.members.first().roles.highest.position >= message.guild.members.resolve(message.guild.me.user).roles.highest.position)
        return message.channel.send({embeds:[{
            title:("Role Is Higher!"), 
            description: 'I can not ban this person, because they are in a higher role than me!',
            color: colors.error,
            footer:{
                text:'=nick [mentioned user] [new name]',
            }
        }]})
        
        
        let reason = "", targetName = "";
        
        
        
        if(!reason) reason = "No reason provided.";
        let bannedList = [];
        
        if(isThereAnId)
        try {
            const bannedMember = message.guild.members.cache.get(args[0]);
            message.guild.members.ban(bannedMember)
            
        }catch (err) { if(err) message.reply(err)}
        
        else{
            try {           
                message.mentions.members.forEach(member => {
                    bannedList.push("**" + member.displayName + "**")
                    member.ban();
                    reason = args.splice(1);
                    logging.SendMessage(message.guild.id, "banned", reason, message.author, member.user, client)
                    
                })}catch (err) { if(err) message.reply(err)}
            }
            
            reason = args.join(" ")
            if(!reason) reason = "No reason provided.";
            
            return message.channel.send({embeds:[{
                title:(bannedList.length < 1 ? bannedList[0] + " Was" : bannedList.length + " Members Were")+ " banned By " + message.member.displayName,
                description : "Reason: " + reason,	
                color: colors.admin
            }]
        })
        
    }
}
