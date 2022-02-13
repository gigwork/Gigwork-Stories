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
    footer: '  <a href="../manchester.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Hazeem',
            image: '../../riders/artwork/Hazeem/Hazeem.jpg',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Wednesday 03/03/2021 </br> <b>Platform:</b> Deliveroo, Just Eat & Uber Eats </br> </br> <b></b> At 21, Hazeem’s first job in the UK, where he moved from Pakistan, is food courier for Just Eat and Uber Eats. He started on an e-bike, before upgrading to a motorbike to be faster but also because he was frustrated to see that motorised vehicles were prioritised for orders over cycles and e-bikes, without notice or explanation. Together with his dad, they run four accounts in total and sometimes, as is the case on this day, they work together with the car so they can be more efficient. Being motorised allows them to work more hours and ride more kilometres than cyclists, but it also means that they are most of the time pushed to travel far away from where they live in Manchester. The money they earn running four account helps them sustain their mother (who doesn’t speak English) and three other minor sisters, but Hazeem is concerned that another account suspension as the one described below is imminent: "It`s happening with a lot of couriers these days, so you might be the next in the queue’.</br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '16:26: At work with my dad',
            audio: '../../riders/audio/Hazeem/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/Hazeem.txt"> Read Transcript </a>',
            location: {},
            earnings: '£0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '16:40: Away from Manchester, working on 4 apps',
            audio: '../../riders/audio/Hazeem/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/hazeem1.txt"> Read Transcript </a>',
            location: {},
            earnings: '£0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '17:40: Dealing 3 orders at a time',
            audio: '../../riders/audio/Hazeem/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/hazeem2.txt"> Read Transcript </a>',
            location: {},
            earnings: '£12.94',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Hazeem/Hazeem1.jpg',
            description: '',
            location: {},
            earnings: '£12.94',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '17:44: I am here waiting for these two orders',
            audio: '../../riders/audio/Hazeem/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/hazeem3.txt"> Read Transcript </a>',
            location: {},
            earnings: '£18.84',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '18:47: A break and a Covid test',
            audio: '../../riders/audio/Hazeem/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/hazeem4.txt"> Read Transcript </a>',
            location: {},
            earnings: '£33.41',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            image: '../../riders/artwork/Hazeem/Hazeem2.jpg',
            description: '',
            location: {},
            earnings: '£33.41',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '18:48: A bit cold, but we`re in the car, it doesn`t matter',
            audio: '../../riders/audio/Hazeem/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/hazeem5.txt"> Read Transcript </a>',
            earnings: '£33.41',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: '19:55: Out of Deliveroo`s reach',
            audio: '../../riders/audio/Hazeem/7.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/hazeem6.txt"> Read Transcript </a>',
            earnings: '£61.37',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            image: '../../riders/artwork/Hazeem/Hazeem3.jpg',
            description: '',
            location: {},
            earnings: '£65.28',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '20:52: It’s not that busy, so we’ll finish at 9',
            audio: '../../riders/audio/Hazeem/8.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/hazeem7.txt"> Read Transcript </a>',
            earnings: '£65.28',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },     
        {
            id: 'drive-slide-8',
            title: '21:26: Five hours, £80',
            audio: '../../riders/audio/Hazeem/9.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Hazeem/hazeem8.txt"> Read Transcript </a>',
            earnings: '£71.67',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },        
        {
            id: 'slide-4',
            image: '../../riders/artwork/Hazeem/Hazeem4.jpg',
            description: '',
            location: {},
            earnings: '£65.28',
            onChapterEnter: [],
            onChapterExit: []
        },
        // CHARTS AND SUMMARY
        {
            id: 'slide-5',
            title: '',
            earnings: '£71.67',
            image: '../../riders/data/Manchester/Hazeem.jpg',
            description: '',
            summaryzoom: 10,
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};