const colors = require('./Lists/EmbedColors.json')[0];
const fs = require('fs');
const ServerInformation = require('./PerServer/Servers.json');
const extraFunctions = require('./Extras/ExtraFunctions.js')
const mongoose = require('mongoose');


module.exports ={
    name:"banword",
    description:"Blacklist a word from being said in your server!",
    category:"Admin",
    usage:"[word/list]",
    CheckForBannedWords(message){
        if(message.member.permissions.has("MANAGE_MESSAGES") || message.author.bot)
        return;
        
        ServerInformation.find(servers => {
            if(servers.GuildID == message.guild.id){
                for(var i = 0; i < servers.bannedWords.length; i++){
                    if(message.content.toLowerCase().includes(servers.bannedWords[i])){
                        message.delete();
                        break;
                    }
                }
            }
        })
        
        return;
    },
    execute(message, args){
        /* member invalid permissions */
        if(!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send({embeds:[{
            title:'Invalid Permissions!',
            description:'In order to run this command, you must have **MANAGE_MESSAGES**',
            color: colors.error,
            footer:{
                text:'=banword [word/list]'
            }
        }]})
        
        /* bot invalid permissions */
        else if(!message.guild.me.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send({embeds:[{
            title:"Invalid Permissions!",
            description:"To preform this action, I need the following permission: **MANAGE_ROLES**",
            color: colors.error
        }]})
        
        let Server = ServerInformation.find(servers => servers.GuildID == message.guild.id);
        
        if(!Server){
            //server does not exist
            Server = extraFunctions.AddToServersJson(message.guild.id);
        }
        
        if(!Server.bannedWords){
            //the servers there, but there is no banned words
           extraFunctions.AddElementToServers("banword", message.guild.id)
        }
        
        /* getting the list */  
        if(args[0].toLowerCase() == "list")
        return message.channel.send({embeds:[{
            title:`${message.guild.name}'s Banned Words`,
            description: Server.bannedWords ? ("**"+ Server.bannedWords.join(",\n") +"**") : "No Banned Words.",
            color: colors.admin,
            footer:{
                text:'=banword [word/list]'
            }
        }]})
        
        /* adding a word */
        else {
            let wordToBan = args.join(" ").toLowerCase();
            
            fs.readFile("\\DBOT V3\\commands\\PerServer\\Servers.json", 'utf-8', function(err, data){
                var obj = JSON.parse(data); 
                
                let ServerIndex = ServerInformation.findIndex(servers => servers.GuildID == message.guild.id);
                
                if(obj[ServerIndex].bannedWords.includes(wordToBan)){
                    
                    /* already in the banned words list */
                    obj[ServerIndex].bannedWords.splice(obj[ServerIndex].bannedWords.indexOf(wordToBan), 1)
                    
                    message.channel.send({embeds:[{
                        title:'Word Removed!',
                        description:"**"+wordToBan + '** has been removed from the banned words list!',
                        color: colors.admin,
                        footer:{
                            text:'=banword [word/list]'
                        }
                    }]})
                    
                } else {
                    /* adding it in */
                    obj[ServerIndex].bannedWords.push(wordToBan);
                    
                    message.channel.send({embeds:[{
                        title:'Word Added!',
                        description:"**"+wordToBan + '** has been added to the banned words list!\n\n**NOTICE:** Because you have **MANAGE_MESSAGES**, the bot will not delete your message!',
                        color: colors.admin,
                        footer:{
                            text:'=banword [word/list]'
                        }
                    }]})
                    
                }
                
                /* saving */
                fs.writeFile('\\DBOT V3\\commands\\PerServer\\Servers.json', JSON.stringify(obj, null, 4), function(err){
                    if(err) console.log("Error Trying To Add Server To Json: " + err)
                    else return;
                })
                return obj[obj.length];
                
            })
        }
    }
}