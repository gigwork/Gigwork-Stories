// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 11;

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
    title: 'Adrians story',
    subtitle: 'Manchester',
    byline: 'Nathanael Sheehan',
    footer: '  <a target="_blank" href="../cluj-napoca.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
    // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Adrian',
            image: '../../riders/artwork/Adrian/01.jpeg',
            description: '<b>Location:</b> Cluj-Napoca </br> <b>Date:</b> Friday 08/10/2021 </br> <b>Platform:</b> Uber Eats </br> </br> <b></b>Like most of the food couriers using their personal cars to do deliveries in Cluj-Napoca, Adrian, who’s 39 years old, does more than a full-time job with Glovo. He often works twelve hours per day, six days a week, for a salary that’s worth 800-1,000 euros, depending on how much time he spends stuck in traffic or waiting for orders to be prepared at McDonald’s or the supermarkets. Qualified as a video producer in Italy, where he’s lived for many years, he returned recently to Romania and chose Cluj-Napoca as a city where he eventually wants to succeed as a freelance real estate agent. While he’s still trying to make a breakthrough in this more lucrative business, Adrian ends up waiting without pay, sometimes hours in a row, to pick up a Deluxe Crispy Chicken Sandwich Combo Meal at McDonald’s that needs to be delivered 500 metres away for a total of 2.5 euros. Frustrations and many smoked cigarettes aside, it’s a good opportunity for Andrei to be on the phone with prospective customers he might convince to pay 200,000 euros for a fancy flat in the most fashionable residential quarters of the city. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '10:25: Start of the day',
            audio: '../../riders/audio/Adrian/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian.txt"> Read Transcript </a> ',
            location: {},
            earnings: ' lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '11:33 Four orders later',
            audio: '../../riders/audio/Adrian/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '15.32',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: '',
            image: '../../riders/artwork/Adrian/02.jpeg',
            description: '',
            location: {},
            earnings: '15.32 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '12:17: Less than the minimum wage',
            audio: '../../riders/audio/Adrian/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '22.86 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '13:28: A very quiet day',
            audio: '../../riders/audio/Adrian/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '25.97 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            title: '',
            image: '../../riders/artwork/Adrian/03.jpeg',
            description: '',
            location: {},
            earnings: '19.75 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '13:30: Its good to speak French',
            audio: '../../riders/audio/Adrian/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian4.txt"> Read Transcript </a> ',
            earnings: '30.15 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // BREAK
        {
            id: 'drive-slide-5',
            title: '14:01:  A break to charge the batteries',
            audio: '../../riders/audio/Adrian/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian5.txt"> Read Transcript </a> ',
            earnings: '30.15 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: '',
            image: '../../riders/artwork/Adrian/04.jpeg',
            description: '',
            location: {},
            earnings: '19.75 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: '18:04: Back from the break',
            audio: '../../riders/audio/Adrian/7.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian6.txt"> Read Transcript </a> ',
            earnings: '34.39 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '18:42: Cancel order, move on',
            audio: '../../riders/audio/Adrian/8.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian7.txt"> Read Transcript </a> ',
            earnings: '39.57 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            title: '',
            image: '../../riders/artwork/Adrian/05.jpeg',
            description: '',
            location: {},
            earnings: '19.75 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: '19:33: An order that takes me home ',
            audio: '../../riders/audio/Adrian/9.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian8.txt"> Read Transcript </a> ',
            earnings: '46.82 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: '20:20: End of the day',
            audio: '../../riders/audio/Adrian/10.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adrian/Adrian9.txt"> Read Transcript </a> ',
            earnings: '49.79 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        // CHARTS AND SUMMARY
        {
            id: 'slide-6',
            title: '',
            earnings: '49.79 lei',
            image: '../../riders/data/Cluj/Adrian.jpg',
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