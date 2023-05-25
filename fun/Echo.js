module.exports = {
	name: "echo",
	description: "I'll repeat what you say, what's the worst thing that can happen?!",
	usage: "[message]",
	category: "Fun",
	execute(message, args){
		return message.channel.send(args.join(" "));
	}
}