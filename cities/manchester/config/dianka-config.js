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
            title: 'Dianka',
            image: '../../riders/artwork/Dianka/Dianka.jpg',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Tuesday 11/02/2021 </br> <b>Platform:</b> Deliveroo & Uber Eats </br> </br> <b></b> In her early 30s, Dianka is one of the few women doing food deliveries in Manchester. Originally from an Eastern European country, which she left a few years ago, Dianka is well educated but couldn’t make use of her degree when she arrived in the UK. Instead, she’s been doing warehouse, cleaning and hospitality jobs for which she was often paid less than the minimum wage. While she initially started doing deliveries on an e-bike as a side job, it  quickly became a full-time enterprise out of necessity. It was both the Covid pandemic and family circumstances which forced her into a more flexible job. As many other couriers, she’s ‘multiapping’, doing Deliveroo and Uber Eats at the same time in order to earn enough money. While the delivery money is good to cover for everyday expenses, being a woman comes at a hefty price as she receives unwarranted attention from men, who are often colleagues  at work. As a result, she needs a pepper spray, a ‘present’ she’s received from a friend. Outside work, she loves nature and spends as much time as she can in one of the many parks in Manchester.</br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://oanalohan.ultra-book.com/">Oana Lohan</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '06:59: An early start',
            audio: '../../riders/audio/Dianka/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka.txt"> Read Transcript </a>',
            location: {},
            earnings: '£0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '07:29: A glitch in the app',
            audio: '../../riders/audio/Dianka/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka1.txt"> Read Transcript </a>',
            location: {},
            earnings: '£5.13',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '08:41: A fragile delivery and some merchanical problems',
            audio: '../../riders/audio/Dianka/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka2.txt"> Read Transcript </a>',
            location: {},
            earnings: '£15.05 (£5 tip)',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Dianka/Dianka1.jpg',
            description: '',
            location: {},
            earnings: '£15.05',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '11:32: A break, a hot shower and back at work',
            audio: '../../riders/audio/Dianka/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka3.txt"> Read Transcript </a>',
            location: {},
            earnings: '£18:64',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '13:00: Busy Uber, quiet Deliveroo',
            audio: '../../riders/audio/Dianka/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka4.txt"> Read Transcript </a>',
            location: {},
            earnings: '£30.29',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            image: '../../riders/artwork/Dianka/Dianka2.jpg',
            description: '',
            location: {},
            earnings: '£30.29',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '13:53: Lunch break, games and bike fixing',
            audio: '../../riders/audio/Dianka/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka5.txt"> Read Transcript </a>',
            earnings: '£36.51',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: '19:01: More hot showers, more clothes',
            audio: '../../riders/audio/Dianka/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka6.txt"> Read Transcript </a>',
            earnings: '£36.51',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            image: '../../riders/artwork/Dianka/Dianka3.jpg',
            description: '',
            location: {},
            earnings: '£30.29',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '20:32: Six kilometres for an ice-cream',
            audio: '../../riders/audio/Dianka/7.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka7.txt"> Read Transcript </a>',
            earnings: '£44',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },     
        {
            id: 'drive-slide-8',
            title: '21:15: A cold that wears you down',
            audio: '../../riders/audio/Dianka/8.m4a',
            description: '<a target="_blank" href="../../riders/transcript/dianka/dianka8.txt"> Read Transcript </a>',
            earnings: '£47.48',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'slide-4',
            image: '../../riders/artwork/Dianka/Dianka4.jpg',
            description: '',
            location: {},
            earnings: '£30.29',
            onChapterEnter: [],
            onChapterExit: []
        },      
        // CHARTS AND SUMMARY
        {
            id: 'slide-5',
            title: '',
            earnings: '£47.48',
            image: '../../riders/data/Manchester/Dianka.jpg',
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