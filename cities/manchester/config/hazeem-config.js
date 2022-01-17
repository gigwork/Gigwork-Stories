// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 9;

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
    title: 'Adeeb story',
    subtitle: 'Manchester',
    byline: 'Nathanael Sheehan',
    footer: 'Source: source citations, etc.',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Hazeem',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Tuesday 11/02/2021 </br> <b>Platform:</b> Deliveroo & Uber Eats </br> </br> <b>Bio:</b> At 21, Hazeem’s first job in the UK, where he moved from Pakistan, is food courier for Just Eat and Uber Eats. He started on an e-bike, before upgrading to a motorbike to be faster but also because he was frustrated to see that motorised vehicles were prioritised for orders over cycles and e-bikes, without notice or explanation. Together with his dad, they run four accounts in total and sometimes, as is the case on this day, they work together with the car so they can be more efficient. Being motorised allows them to work more hours and ride more kilometres than cyclists, but it also means that they are most of the time pushed to travel far away from where they live in Manchester. The money they earn running four account helps them sustain their mother (who doesn’t speak English) and three other minor sisters, but Hazeem is concerned that another account suspension as the one described above is imminent: "Its happening with a lot of couriers these days, so you might be the next in the queue’.</br> <h3 style="text-align:center"> Art by <a href="#">Rafeal</a> </h3>',
            location: {},
            earnings: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '06:59AM An early start',
            audio: '../../riders/audio/Hazeem/1.m4a',
            description: '<a href="../../riders/transcript/Hazeem/Hazeem.txt"> Read Transcript </a>',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Hazeem/Hazeem.jpg',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '07:29: A glitch in the app',
            audio: '../../riders/audio/Hazeem/2.m4a',
            description: '<a href="../../riders/transcript/Hazeem/dianka1.txt"> Read Transcript </a>',
            location: {},
            earnings: '5.13',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '08:41: A fragile delivery and some merchanical problems',
            audio: '../../riders/audio/Hazeem/3.m4a',
            description: '<a href="../../riders/transcript/Hazeem/dianka2.txt"> Read Transcript </a>',
            location: {},
            earnings: '15.05 (£5 tip)',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            image: '../../riders/artwork/Hazeem/Hazeem2.jpg',
            description: '',
            location: {},
            earnings: '15.05',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '11:32: A break, a hot shower and back at work',
            audio: '../../riders/audio/Hazeem/4.m4a',
            description: '<a href="../../riders/transcript/Hazeem/dianka3.txt"> Read Transcript </a>',
            location: {},
            earnings: '18:64',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '13:00: Busy Uber, quiet Deliveroo',
            audio: '../../riders/audio/Hazeem/5.m4a',
            description: '<a href="../../riders/transcript/Hazeem/dianka4.txt"> Read Transcript </a>',
            location: {},
            earnings: '30.29',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            image: '../../riders/artwork/Hazeem/Hazeem4.jpg',
            description: '',
            location: {},
            earnings: '30.29',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '13:53: Lunch break, games and bike fixing',
            audio: '../../riders/audio/Hazeem/5.m4a',
            description: '<a href="../../riders/transcript/Hazeem/dianka5.txt"> Read Transcript </a>',
            earnings: '36.51',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            description: 'Hazeem signs out of Deliveroo',
            location: {},
            earnings: '36.51',
            onChapterEnter: [],
            onChapterExit: []
        },
        // BREAK
        {
            id: 'slide-5',
            description: 'Hazeem signs in Deliveroo and Uber Eats',
            location: {},
            earnings: '36.51',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: '19:01: More hot showers, more clothes',
            audio: '../../riders/audio/Hazeem/6.m4a',
            description: '<a href="../../riders/transcript/Hazeem/dianka6.txt"> Read Transcript </a>',
            earnings: '36.51',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '20:32: Six kilometres for an ice-cream',
            audio: '../../riders/audio/Hazeem/7.m4a',
            description: '<a href="../../riders/transcript/Hazeem/dianka7.txt"> Read Transcript </a>',
            earnings: '44',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },     
        {
            id: 'drive-slide-8',
            title: '21:15: A cold that wears you down',
            audio: '../../riders/audio/Hazeem/8.m4a',
            description: '<a href="../../riders/transcript/Hazeem/dianka8.txt"> Read Transcript </a>',
            earnings: '47.48',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },        
        // CHARTS AND SUMMARY
        {
            id: 'slide-6',
            title: '',
            earnings: '47.48',
            chart: {},
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