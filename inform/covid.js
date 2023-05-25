const covid = require('novelcovid');
const colors = require('./Lists/EmbedColors.json')[0];

module.exports = {
    name:'covid',
    description:'Get information about covid!',
    usage:'[country]',
    subnames:['corona'],
    category:'Inform',
    async execute(message, args){
        let userCountry = args.join(" ").toLowerCase();
        
        /* getting all of the countries */
        
        if(userCountry){
            await covid.countries({country: userCountry}).then(function(results){
                
                if(!results || !results.country || !results.cases)
                return message.channel.send({embeds:[{
                    title:'No Data Found',
                    description: "I was unable to find data for the country: **" + userCountry +"**",
                    color: colors.error,
                    footer:{
                        text:'=covid [country]'
                    }
                }]})
                
                
                return message.channel.send({embeds:[{
                    title:results.country,
                    description: results.country + " has a population of **" + results.population + "** people.",
                    color: colors.helpful,
                    thumbnail:{
                        url: results.countryInfo.flag
                    },
                    fields:[{
                        name: 'Total Cases',
                        value: results.cases.toString(),
                    },
                    {
                        name:'Active Cases',
                        value: results.active.toString(),
                    },
                    {
                        name: 'Critical Cases',
                        value: results.critical.toString(),
                    },
                    {
                        name:'Cases Today',
                        value: results.todayCases.toString(),
                    },
                    {
                        name:'Recovered',
                        value: results.recovered.toString(),
                    },
                    {
                        name:'Recovered Today',
                        value: results.todayRecovered.toString(),
                    },
                    {
                        name: 'Deaths',
                        value: results.deaths.toString(),
                    },
                    {
                        name:'Deaths Today',
                        value: results.todayDeaths.toString(),
                    }
                ],
                footer:{
                    text:'=covid [country]'
                }
            }]})
        }).catch(err => {
            if(err)
            return message.channel.send({embeds:[{
                title:'An Unknown Error Has Occured!',
                description: err.toString()+ "\nPlease Try Again!",
                color: colors.error,
                footer:{
                    text:'=covid [country]'
                }
            }]})
        })
    }
    else
    {
        await covid.all().then(function(results){
            return message.channel.send({embeds:[{
                title:'The World',
                description: 'The World has a population of **' + results.population + '** people.',
                color: colors.helpful,
                fields:[{
                    name: 'Total Cases',
                    value: results.cases.toString(),
                },
                {
                    name:'Active Cases',
                    value: results.active.toString(),
                },
                {
                    name: 'Critical Cases',
                    value: results.critical.toString(),
                },
                {
                    name:'Cases Today',
                    value: results.todayCases.toString(),
                },
                {
                    name:'Recovered',
                    value: results.recovered.toString(),
                },
                {
                    name:'Recovered Today',
                    value: results.todayRecovered.toString(),
                },
                {
                    name: 'Deaths',
                    value: results.deaths.toString(),
                },
                {
                    name:'Deaths Today',
                    value: results.todayDeaths.toString(),
                }
            ],
            footer:{
                text:'=covid [country]'
                
            }
        }]
    })
})
}
}
}
