const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    
    name: "calc",
    subnames:['calculator'],
    description: "I shall help you with your easiest math homework, just give me a question!",
    usage: "[expression]",
    category: "Inform",
    //usage = command
    execute(message, args){
        let equation = args.join(" ");
        let answer = "";
        try{
            //try to solve the question
            answer = eval(equation);
        } catch (err) {
            return message.channel.send({embeds:[{
                title: " ❌ Error ❌",
                description: "Not A Valid Problem?",
                color: colors.error,
                
                fields: [{
                    name: "Specific Error",
                    value: err.toString()
                }],
                footer:
                {
                    text: "=calc [expression]"
                },
            }]})}
            
            return message.channel.send({embeds:[{
                title: "`" + equation + "`",
                description: "= **" + answer + "**",
                color : colors.helpful,       
                footer:{
                    text:'=calc [expression]'
                }
            }]})}
        }
