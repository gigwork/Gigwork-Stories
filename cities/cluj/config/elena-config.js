    // Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 8;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 400;

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
    title: 'Elenas story',
    subtitle: 'Manchester',
    byline: 'Nathanael Sheehan',
    footer: '  <a target="_blank" href="../manchester.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
    // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Elena',
            image: '../../riders/artwork/Elena/1.jpeg',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Saturday 27/03/2020 </br> <b>Platform:</b> Uber Eats </br> </br> <b></b> At 22 years old, Elena’s sense of financial independence is magnified by the earnings she makes at the first serios job she’s ever had. As a Glovo courier, driving a car in Cluj-Napoca, the recent university graduated can earn up to 1,000 euros per month, an income stream than none of her friends have access to. She’s working hard for this money, often 12 hours per day, for five or six days a week, she has hardly any social life, but she’s very proud to be able to support her mother with some of the household expenses. Her parents, both running their own small businesses, instilled her an entrepreneurial spirit that she believes will drive her to open one day, with the Glovo earnings, her own hairstyle studio. Until then, she keeps reminding herself that she needs to eat more often and avoid frozen meals, that make sure she doesn’t break her back carrying heavy boxes of water up the many stairs she needs to climb and, most importantly, that she doesn’t fall asleep at work. This already happened to her a few months ago, when she worked for two weeks without stop and hit a fence in the city centre. Thankfully, the only thing she damaged was the car. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            earnings: 'lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '08.12: A twelve-hour shift? It’s not worth it, it’s slavery',
            audio: '../../riders/audio/Elena/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Elena/Elena.txt"> Read Transcript </a> ',
            location: {},
            earnings: '2.45 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '09.34 Coffee, better cold than spilled',
            audio: '../../riders/audio/Elena/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Elena/Elena1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '15.32 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: '',
            image: '../../riders/artwork/Elena/2.jpeg',
            description: '',
            location: {},
            earnings: '15.32 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '11.27: I paid 50 lei out of my own pocket!',
            audio: '../../riders/audio/Elena/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Elena/Elena2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '22.86 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '13.09: I feel like sinking into the abyss',
            audio: '../../riders/audio/Elena/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Elena/Elena3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '25.97 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            title: '',
            image: '../../riders/artwork/Elena/3.jpeg',
            description: '',
            location: {},
            earnings: '15.32 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        // CHARTS AND SUMMARY
        {
            id: 'slide-4',
            title: '',
            earnings: '49.79 lei',
            image: '../../riders/data/Cluj/Elena.jpg',
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
        },

        {
            id: 'slide-5',
            title: 'Elena (day 2)',
            image: '../../riders/artwork/Elena/4.jpeg',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Saturday 27/03/2020 </br> <b>Platform:</b> Uber Eats </br> </br> <b></b> At 22 years old, Elena’s sense of financial independence is magnified by the earnings she makes at the first serios job she’s ever had. As a Glovo courier, driving a car in Cluj-Napoca, the recent university graduated can earn up to 1,000 euros per month, an income stream than none of her friends have access to. She’s working hard for this money, often 12 hours per day, for five or six days a week, she has hardly any social life, but she’s very proud to be able to support her mother with some of the household expenses. Her parents, both running their own small businesses, instilled her an entrepreneurial spirit that she believes will drive her to open one day, with the Glovo earnings, her own hairstyle studio. Until then, she keeps reminding herself that she needs to eat more often and avoid frozen meals, that make sure she doesn’t break her back carrying heavy boxes of water up the many stairs she needs to climb and, most importantly, that she doesn’t fall asleep at work. This already happened to her a few months ago, when she worked for two weeks without stop and hit a fence in the city centre. Thankfully, the only thing she damaged was the car. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            earnings: '£',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '19.12: I work so many hours, I need a day off',
            audio: '../../riders/audio/Elena2/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Elena2/Elena.txt"> Read Transcript </a> ',
            location: {},
            earnings: '£2.45',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '20.30: For every 100 orders, I can reject four',
            audio: '../../riders/audio/Elena2/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Elena2/Elena1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '£15.32',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: '22.10: Stomach-ache, the price I have to pay',
            audio: '../../riders/audio/Elena2/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Elena2/Elena2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '£22.86',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '',
            image: '../../riders/artwork/Elena/5.jpeg',
            description: '',
            location: {},
            earnings: '£15.32',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '23.58: Waiting 20 minutes for a customer',
            audio: '../../riders/audio/Elena2/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Elena2/Elena3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '£25.97',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        // CHARTS AND SUMMARY
        {
            id: 'slide-6',
            title: '',
            earnings: '£49.79',
            image: '../../riders/data/Cluj/Elena.jpg',
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