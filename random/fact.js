const colors = require('./Lists/EmbedColors.json')[0]
const webscrape = require('webscrape'); //for scraping websites
var scraper = webscrape.default(); //for scraping websites


module.exports = {
    name:'fact',
    description:'Get a random fact!',
    category:'Random',
    async execute(message, args){
        let fact = await GetFact();

        return message.channel.send({embeds:[{
            title:'Did You Know?',
            description:fact.toString(),
            color: colors.random
        }]})
    }
}
async function GetFact(){
    //called after getting a pokemon, and before starting the game
    
    
    //try to get a pokemon with the id between 1-898 [the amount of pokemon the pokeAPI has without being weird]
    let rawResults = await scraper.get(`https://uselessfacts.jsph.pl/random.json?language=en`).catch(function(err){
    //if there is an error, ie the PokeAPI website did not have the pokemon, redo
    if(err) GetFact()
})

//if there are results, return them
return rawResults.json.text;
}