const colors = require('./Lists/EmbedColors.json')[0]
const logging = require('./log.js')
module.exports = {
    name: "kick",
    description: "Kick someone from the discord server!", 
    usage: "[member] [reason]",
    category: "Admin",
    execute(message, args, client){
        
        var target = message.mentions.members.first()

        /* if no role was mentioned */
        if(!target)
        return message.channel.send({embeds:[{
            title:"No User Mentioned!",
            description:"You must provide a user to kick!",
            color: colors.admin
        }]})
        
        /* if the user doesnt have the right perms */
        if(!message.member.permissions.has("KICK_MEMBERS"))
        return message.channel.send({embeds:[{
            title:"Invalid Permissions!",
            description:"To preform this action, you must need the following permission: **KICK_MEMBERS**\n\nIf you are trying to physically kick a user, type **=punt [mentioned user]**",
            color: colors.admin
        }]})
        
        /* if the bot doesnt have the right perms */		
        else if(!message.guild.me.permissions.has("KICK_MEMBERS"))
        return message.channel.send({embeds:[{
            title:"Invalid Permissions!",
            description:"To preform this action, I need the following permission: **KICK_MEMBERS**",
            color: colors.admin
        }]})

        /* higher role */
        if(message.mentions.members.first().roles.highest.position >= message.guild.members.resolve(message.guild.me.user).roles.highest.position)
		return message.channel.send({embeds:[{
			title:("Role Is Higher!"), 
			description: 'I can not kick this person, because they are in a higher role than me!',
			color: colors.error,
			footer:{
				text:'=nick [mentioned user] [new name]',
			}
		}]})
        
        let reason = ""
        let kickedList = [];
        reason = args.join(" ");
        if(!reason) reason = "No reason provided.";

        try { 
            message.mentions.members.forEach(member => {
                kickedList.push("**" + member.displayName + "**")
                member.kick();
                reason = args.splice(1);
                logging.SendMessage(message.guild.id, "kicked", reason, message.author, member.user, client)
            })
        }catch (err) { if(err) message.reply(err)}
        
        
        
        return message.channel.send({embeds:[{
            title: (kickedList[0] ? kickedList[0] + " Was" : kickedList.length + " Members Were") + "  kicked By " + message.member.displayName,
            description : "Reason: " + reason,	
            color: colors.admin
        }]})        
    }
}