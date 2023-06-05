var driveSlides = 10; // number of slides
var driveSmoothness = 200; // smoothness of scroll 
var driveTime = driveSlides * driveSmoothness; // time it takes to drive
var followPoint = true; // BOOL to follow point
var followZoomLevel = 13; // Zoom scale
var followBearing = 29; // bearing follow
var followPitch = 0; // pitch follow

var config = {
    style: 'mapbox://styles/nathanaelisamapper/cky28yemc34w215pc71g6p6oz',
    //mapbox://styles/nathanaelisamapper/ckyglczpt23y714pfw1wh7rox
    //style: 'mapbox://styles/nathanaelisamapper/ckxxwjfz05iz514mujwqq827q',
    accessToken: 'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Ismael story',
    subtitle: 'Lyon',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../lyon.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Ismael',
            image: '../../riders/artwork/smael/Ismael 1.jpg',
            description: '<b>Location:</b> Lyon </br> <b>Date:</b> Saturday 30/07/2022 and Saturday 20/08/202 </br> <b>Platform:</b> Uber Eats </br> </br> Ismael is a 31-year-old refugee from a small village in south-east Sudan. He arrived in France, but his dream was to find work in neighbouring Libya. He crossed the border separating Sudan from the war-ravaged country in 2015, hoping to earn money to buy a tractor and farming equipment for his plot of land back home. ‘We are all peasants where I am coming from. We have guava and mango trees, watermelons, vegetables, and cereals. Everyone has their small farm, but we don’t have the tools’, he tells me. After two years in Libya, it was no longer safe to return to Sudan, so Ismael decided to cross the Mediterranean to try and reach Europe. Following a few tough months spent in the makeshift camp in Calais, he eventually arrived in Lyon. While waiting for his asylum claim, he started volunteering for Red Cross and Amnesty International to improve his French and integrate in the city. He lives now in a small town 60 km outside Lyon where he is following a training programme to become an electric engineer. In the meantime, he spends his weekends visiting friends in Lyon where he often does deliveries for Uber Eats to top up his meagre income. I followed Ismael at work in the torrid summer of 2022: the orders were scarce and far away. At a point we even had to take a metro to complete a 5 km order to Vaulx-en-Velin, in the outskirts of the city. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://oanalohan.ultra-book.com/"">Oana Lohan</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '12.36: It’s hot, so it’s very difficult',
            audio: '../../riders/audio/Ismael/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Ismael/01. Ismael transcript 1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '13.32: White zones are areas where we do not receive orders',
            audio: '../../riders/audio/Ismael/2.m4a',
            description: '<a target="_blank" href="01. Ismael transcript 2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€9.04',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/smael/Ismael 2.jpg',
            location: {},
            earnings: '€16.42',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '14.13: More shadows, but no orders',
            audio: '../../riders/audio/Ismael/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Ismael/01. Ismael transcript 3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€28.12',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: '',
            earnings: '€28.12',
            image: '../../riders/data/Lyon/Ismael Day 1.jpg',
            summaryzoom: 10,
            location: {
                center: [-2.244644, 53.483959],
                zoom: 15.23,
                pitch: 60.00,
                bearing: 43.61
            },
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'slide-4',
            title: 'Day 2',
            image: '../../riders/artwork/smael/Ismael 3.jpg',
            description: '',
            location: {},
            earnings: '€0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '‘11.59: My bike was stolen, so I couldn’t work for two days',
            audio: '../../riders/audio/Ismael/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Ismael/01. Ismael transcript 4.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '12.49: You need to move a lot, even during a heatwave ',
            audio: '../../riders/audio/Ismael/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Ismael/01. Ismael transcript 5.txt"> Read Transcript </a> ',
            earnings: '€4.20',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '',
            image: '../../riders/artwork/smael/Ismael 4.jpeg',
            description: '',
            location: {},
            earnings: '€8.29.',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '15.15: 13 euros in four hours.',
            audio: '../../riders/audio/Ismael/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Ismael/01. Ismael transcript 6.txt"> Read Transcript </a> ',
            earnings: '€13.29',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'drive-slide-6',
            title: '17.35: So, I decided to take the tube',
            description: '<a target="_blank" href="../../riders/transcript/Ismael/01. Ismael transcript 7.txt"> Read Transcript </a> ',
            audio: '../../riders/audio/Ismael/7.m4a',
            earnings: '€18.68',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },


        // CHARTS AND SUMMARY
        {
            id: 'slide-10',
            title: '',
            earnings: '€18.68',
            image: '../../riders/data/Lyon/Ismael Day 2.jpg',
            summaryzoom: 10,
            location: {
                center: [-2.244644, 53.483959],
                zoom: 15.23,
                pitch: 60.00,
                bearing: 43.61
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};