// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 7;

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
    title: 'Lilianas story',
    subtitle: 'Manchester',
    byline: 'Nathanael Sheehan',
    footer: '  <a target="_blank" href="../cluj.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
    // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Liliana',
            image: '../../riders/artwork/Liliana/1.jpeg',
            description: '<b>Location:</b> Cluj-Napoca </br> <b>Date:</b> Thursday 25/11/2021 </br> <b>Platform:</b> Bolt </br> </br> 32 years old Liliana drives everyday back and forth 60 kilometres from a village north-west of Cluj-Napoca. Early in the morning she brings her two children, 3 and 5 years old, to the nursery before she starts her 10 hours shift of deliveries for Glovo or Bolt. She has an undergraduate degree in foreign languages and her dream is to set up her own interior design studio. In the meantime, she needs to support her family, but the long working hours spent away from home don’t allow her to see them for as long as she would like. ‘I sometimes feel the boys don’t grow as they should because I’m not spending enough time with them’, she confesses to me as I follow her at work, in the same car with the kids that she just picked up from the nursery. Aside from the regular waiting around for hours at McDonald’s to collect an order or the constant frictions with the police and taxi drivers whenever she tries to park in the city centre, Liliana encounters casual misogyny episodes. She says she’s used to this harassment and the whole multi-tasking. What she’s not managed to overcome yet are the fears she might fall asleep at any time. This often happens to her when she drives back home, late in the evening. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '09:15: Delivering food and three humans too',
            audio: '../../riders/audio/Liliana/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Liliana/Liliana.txt"> Read Transcript </a> ',
            location: {},
            earnings: '0 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '11:02: I didn’t have the time to put any make-up',
            audio: '../../riders/audio/Liliana/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Liliana/Liliana1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '28.21 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: '',
            image: '../../riders/artwork/Liliana/2.jpeg',
            description: '',
            location: {},
            earnings: '28.21 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '13.49: A day in the life of a mum',
            audio: '../../riders/audio/Liliana/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Liliana/Liliana2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '62.01 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '14.48: I am hungry',
            audio: '../../riders/audio/Liliana/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Liliana/Liliana3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '92.10 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            title: '',
            image: '../../riders/artwork/Liliana/3.jpeg',
            description: '',
            location: {},
            earnings: '92.10 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '18.45: The break was not long enough',
            audio: '../../riders/audio/Liliana/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Liliana/Liliana4.txt"> Read Transcript </a> ',
            earnings: '120.95 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        // BREAK
        {
            id: 'drive-slide-5',
            title: '19.47: ‘What if?’',
            audio: '../../riders/audio/Liliana/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Liliana/Liliana5.txt"> Read Transcript </a> ',
            earnings: '153.15 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            title: '',
            image: '../../riders/artwork/Liliana/4.jpeg',
            description: '',
            location: {},
            earnings: '153.15 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        // END BREAK        
        {
            id: '21.19: I didn’t feel like working today',
            audio: '../../riders/audio/Liliana/7.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Liliana/Liliana6.txt"> Read Transcript </a> ',
            earnings: '192.39 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '23.04: The new job',
            audio: '../../riders/audio/Liliana/8.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Liliana/Liliana7.txt"> Read Transcript </a> ',
            earnings: '224.57 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '',
            image: '../../riders/artwork/Liliana/5.jpeg',
            description: '',
            location: {},
            earnings: '224.57 lei',
            onChapterEnter: [],
            onChapterExit: []
        },

        // CHARTS AND SUMMARY
        {
            id: 'slide-6',
            title: '',
            earnings: '253.26 lei',
            image: '../../riders/data/Cluj/Liliana.jpg',
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