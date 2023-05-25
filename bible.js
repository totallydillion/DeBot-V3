const webscrape = require('webscrape');
const scraper = webscrape.default();
const colors = require('./Lists/EmbedColors.json')[0];

module.exports = {
    name:'bible',
    description:'Get your daily dose of Jesus, with the Bible command! By default, the version will be NIV.',
    category:'Inform',
    usage:'[book] [chapter] [verse(s)] [version]',
    async execute(message, args){
        
        /* error handling */
        if(!args[0])
        return message.channel.send({embeds:[{
            title:'Invalid Arguments!',
            description:'You must provide a book, chapter and verse for this command!',
            color: colors.error,
            footer:{
                text:'=bible [book] [chapter] [verse(s)] [version]'
            }
        }]})
        /* end error handling */

        //turning 'John 1:1-2' to 'John 1 1-2', not needed, but it is good when you are outputting.
        args = args.join(" ").replace(":", " ").split(" ");
        
        //=bible John 1:1-2 KJV
        
        //"John"
        let book = args[0];
        //"1"
        let chapter = args[1];

        //if no chapter, default it to 1.
        if(!chapter) chapter = 1;

        //"1-2"
        let verses = args[2];

        //if no verse, default it to 1.
        if(!verses) verses = 1;

        //"KJV", but if none is there, then NIV.
        let version = args[3] ? args[3] : "NIV"
        
        //run GetVerses, returns verses
        var OutputtedVerses = await GetVerses(book, chapter, verses, version);
        
        //output the results
        return message.channel.send({embeds:[{
            title:`${book} ${chapter}:${verses} | ${version.toUpperCase()}`,
            description: OutputtedVerses.substr(0, 4000),
            color: colors.helpful,
            footer:{
                text:'=bible [book] [chapter] [verse(s)] [version]'
            }
        }]})
    }
}


async function GetVerses(book, chapter, verses, version){//on getting a verse
    //read and scrape the webpage
    const defaultHTML = await scraper.get(`https://ibibles.net/quote.php?${version}-${book}/${chapter}:${verses}`);
    
    //get the body from the webpage, then split each new line, then join together with a new line.
    return defaultHTML.$(`body`).text().split("<br>").join("\n");
}