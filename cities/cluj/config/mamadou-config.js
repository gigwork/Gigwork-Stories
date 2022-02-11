// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 8;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides * driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 13;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/nathanaelisamapper/ckz65ko8i001t15qol26t2azj',
    //mapbox://styles/nathanaelisamapper/ckyglczpt23y714pfw1wh7rox
    //style: 'mapbox://styles/nathanaelisamapper/ckxxwjfz05iz514mujwqq827q',
    accessToken: 'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Mamadou story',
    subtitle: 'Cluj',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../cluj.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Mamadou',
            image: '../../riders/artwork/Mamadou/01.png',
            description: '<b>Location:</b> Cluj-Napoca </br> <b>Date:</b> Wednesday 06/11/2021 </br> <b>Platform:</b> Tazz </br> </br> <b></b>Mamadou is a 28-year-old master’s student in management from Guinea who moved to Cluj-Napoca in November 2020 to study here, together with his sister, who’s barely 18. He paid 3,000 euros to a study abroad agency from his country to assist him with travelling from Africa, but upon arriving in the city, he found out that the university classes were not taught in French, as he was promised. Following a compulsory preparatory year to learn Romanian, most of it spent in lockdown, away from local colleagues that would have helped him practice the language, Mamadou is still not proficient enough for a fluent conversation. His sister, in the meantime, managed to travel with a fake passport to France, where she is currently staying with a foster family. Mamadou decided instead to give Cluj-Napoca a chance and settled for a food courier job with Tazz which, he hopes, will allow him to pay the tuition fees for his first academic year as well as the high costs of living in the city. As he rides his electric bike up and down the city hills, he has witnessed many racist episodes, ranging from people in the street shouting ‘nigger’ at him, to clients who run away as soon he brings the food to their doorsteps.</br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://oanalohan.ultra-book.com/">Oana Lohan</a> </h3>',
            location: {},
            earnings: 'lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '10.53: Low battery, low expectations',
            audio: '../../riders/audio/Mamadou/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Mamadou/Mamadou.txt"> Read Transcript </a>',
            location: {},
            earnings: '0 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '12.24: Long distances on flat roads, please!',
            audio: '../../riders/audio/Mamadou/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Mamadou/Mamadou1.txt"> Read Transcript </a>',
            location: {},
            earnings: '5.13 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Mamadou/02.png',
            earnings: '5.13 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '13.01 I don’t touch the alcohol, the clients don’t touch me',
            audio: '../../riders/audio/Mamadou/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Mamadou/Mamadou2.txt"> Read Transcript </a>',
            location: {},
            earnings: '15.05 (5 tip) lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '15.03: Break, clean, cook, pray',
            audio: '../../riders/audio/Mamadou/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Mamadou/Mamadou3.txt"> Read Transcript </a>',
            location: {},
            earnings: '18:64 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            image: '../../riders/artwork/Mamadou/03.png',
            earnings: '5.13 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '18.01: Nice weather, fewer orders',
            audio: '../../riders/audio/Mamadou/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Mamadou/Mamadou4.txt"> Read Transcript </a>',
            location: {},
            earnings: '30.29 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '19.05: Three rejections and I am out',
            audio: '../../riders/audio/Mamadou/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Mamadou/Mamadou5.txt"> Read Transcript </a>',
            earnings: '36.51 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            image: '../../riders/artwork/Mamadou/04.png',
            earnings: '5.13 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: '19.28: No orders, watching the football match',
            audio: '../../riders/audio/Mamadou/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Mamadou/Mamadou6.txt"> Read Transcript </a>',
            earnings: '36.51 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '20.12: Using cash from clients for my own food',
            audio: '../../riders/audio/Mamadou/7.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Mamadou/Mamadou7.txt"> Read Transcript </a>',
            earnings: '44 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },     
        {
            id: 'slide-4',
            image: '../../riders/artwork/Mamadou/05.png',
            earnings: '5.13 lei',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'slide-5',
            title: '',
            earnings: '47.48 lei',
            image: '../../riders/data/Cluj/Mamadou.jpg',
            description: '',
            summaryzoom: 12,
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