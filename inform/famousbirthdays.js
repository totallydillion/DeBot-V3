//this is the API used to webscrap
const webscrape = require('webscrape');

//all of the months of the year
var monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "fbday",
	description: "Look at the famous birthdays today!!",
    usage: "[month] [day]",
    category: "Inform",
    async execute(message, args){
     var date;
     var month;
     var day;
     var searchDay;

        //assigning all the variables

        //if there is no arguments, then get the date for today!
        if(args[0]){
            month = args[0];
            day = args[1];
            searchDay = (month + day).toLowerCase();
        }
        else{
            date = new Date();
            month = monthsOfTheYear[date.getMonth()];
            day = date.getDate();
            searchDay = (month + day).toLowerCase();
        }

        //getting the webpage
        var scraper = webscrape.default();

        const result = await scraper.get('https://www.famousbirthdays.com/' + searchDay + '.html');

        //all the source code in the webpage
        let rawHTML = result.$(`div`).text();


        //so here comes the process where we extract what we need


        //removing the google push functions / adsense?

        //split up the html by each line
        rawHTML = rawHTML.split("\n")


        //these arrays make it easier on me, the only one that is useful is "outputedArray",
        //things that aren't being used / extras, will be in "unusedStuff"
        let outputedArray = new Array();
        let unusedStuff = new Array();

        for(var i = 0; i < rawHTML.length; i++)
        {  //for every line in the html 

            //if it is just a blank line, then just make it into a space
            if(rawHTML[i] == "\n")
                rawHTML[i] = " ";

            // if the line includes "google" [typically advertisement],
            // or if outputtedArray already has the line [typically duplicates]
            // send it to unusedStuff

            if(rawHTML[i].includes("google") || outputedArray.indexOf(rawHTML[i]) > -1)
                unusedStuff.push(rawHTML[i]);

            //otherwise, send it to outputedArray
            else
                outputedArray.push(rawHTML[i])
        }

        // fixedText removes things like "Random Button!" and things that are on the website
        let fixedText = outputedArray.slice(10, outputedArray.length - 6);

    //birthdayList is the actual list of birthdays
    let birthdayList = new Array();


    for(var i = 0; i < fixedText.length; i++)
    {
    //for everything else that remains on the website,

    //if it does not include a comma, send it to unusedStuff
    if(!fixedText[i].includes(","))
    {
        unusedStuff.push(fixedText[i])
    }

    // if the line does include a comma (which is how the website does birthdays),
    // or if the line includes parenthesis (typically for people that are no longer with us)
    // send to birthdayList
    else if(fixedText[i].includes(",") || fixedText[i].includes("(") )
        birthdayList.push(fixedText[i] + "\n")

}

    //birthdayList contains everything that is needed, everything past this point is just making it look pretty on discord

//this is just cutting it up into two separate parts
let birthdayListPart1 = birthdayList.slice(0, birthdayList.length  / 2 - 1).join("")
let birthdayListPart2 = birthdayList.slice(birthdayList.length / 2, birthdayList.length).join("")


//sending the message into discord
return message.channel.send({embeds:[{
    title: "Famous Birthdays On " + month + " " + day,
        color: colors.helpful,
        footer:
        {
          text: "This information is provided by famousbirthdays.com/",
      },
      fields:[
      {   
        name: "Happy",
        value: birthdayListPart1,
        inline: true,
    },
    {
        name: "Birthday!",
        value: birthdayListPart2,
        inline: true,
    },
    ]
}]
})
}
}
