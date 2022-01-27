// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 10;

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
    style: 'mapbox://styles/nathanaelisamapper/cky28yemc34w215pc71g6p6oz',
    //mapbox://styles/nathanaelisamapper/ckyglczpt23y714pfw1wh7rox
    //style: 'mapbox://styles/nathanaelisamapper/ckxxwjfz05iz514mujwqq827q',
    accessToken: 'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Jérômes story',
    subtitle: 'Manchester',
    byline: 'Nathanael Sheehan',
    footer: '  <a target="_blank" href="../manchester.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
    // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Jérôme',
            image: '../../riders/artwork/Jerome/1.jpeg',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Saturday 27/03/2020 </br> <b>Platform:</b> Uber Eats </br> </br> <b></b> At 36, Jérôme is using an instantly recognisable e-bike with fat tyres to do deliveries for Uber Eats. Born in Congo, he lived for most of his life in Paris before moving to Manchester in 2019 as he was fed up with France and wanted to improve his English. Since his Parisian school cafeteria business was brought to a standstill during the pandemic, Jérôme is saving up money for another business idea, based on Uber’s model: an app for those who want their garden trimmed in an instant. His entrepreneurial dreams were recently punctured by a horrible episode at work, when a client accused him of rape. It took a whole month to prove his innocence, but the emotional scars are still there, as are the rent arrears resulting from Uber automatically suspending his account for this period. While he praises the platform for it`s innovative approach to work, Jérôme finds appalling the way it treats the workers: What they call partners it`s not actually partners, it`s fake employees. In this job, we are vulnerable in all aspects, at all levels. If I have an accident tomorrow, "I am left without pay". </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            earnings: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '10:25: Start of the day',
            audio: '../../riders/audio/Jerome/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome.txt"> Read Transcript </a> ',
            location: {},
            earnings: '2.45',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '11:33 Four orders later',
            audio: '../../riders/audio/Jerome/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '15.32',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: '',
            image: '../../riders/artwork/Jerome/jerome1.png',
            description: '',
            location: {},
            earnings: '15.32',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '12:17: Less than the minimum wage',
            audio: '../../riders/audio/Jerome/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '22.86',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '13:28: A very quiet day',
            audio: '../../riders/audio/Jerome/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '25.97',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            title: '',
            image: '../../riders/artwork/Jerome/jerome2.png',
            description: '',
            location: {},
            earnings: '19.75',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '13:30: Its good to speak French',
            audio: '../../riders/audio/Jerome/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome4.txt"> Read Transcript </a> ',
            earnings: '30.15',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        // BREAK
        {
            id: 'drive-slide-5',
            title: '14:01:  A break to charge the batteries',
            audio: '../../riders/audio/Jerome/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome5.txt"> Read Transcript </a> ',
            earnings: '30.15',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        // END BREAK        
        {
            id: 'drive-slide-6',
            title: '18:04: Back from the break',
            audio: '../../riders/audio/Jerome/7.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome6.txt"> Read Transcript </a> ',
            earnings: '34.39',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: '',
            image: '../../riders/artwork/Jerome/jerome4.png',
            description: '',
            location: {},
            earnings: '34.59',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '18:42: Cancel order, move on',
            audio: '../../riders/audio/Jerome/8.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome7.txt"> Read Transcript </a> ',
            earnings: '39.57',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: '19:33: An order that takes me home ',
            audio: '../../riders/audio/Jerome/9.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome8.txt"> Read Transcript </a> ',
            earnings: '46.82',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '',
            image: '../../riders/artwork/Jerome/jerome5.png',
            description: '',
            location: {},
            earnings: '46.82',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: '20:20: End of the day',
            audio: '../../riders/audio/Jerome/10.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jerome/Jerome9.txt"> Read Transcript </a> ',
            earnings: '49.79',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // CHARTS AND SUMMARY
        {
            id: 'slide-6',
            title: '',
            earnings: '49.79',
            image: '../../riders/data/Manchester/Jerome.jpg',
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