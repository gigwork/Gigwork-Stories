// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides =9;

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
    footer: '  <a target="_blank" href="../manchester.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Adeeb',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Thursday 21/01/2021 </br> <b>Platform:</b> Deliveroo & Uber Eats </br> </br> <b>Bio: 28 years old Adeeb is riding an e-bike and ‘multiapping’ for both Deliveroo and Uber Eats: sometimes one is busier than the other, other times he can even deliver two orders at the same time for both platforms. The Pakistani migrant initially moved to London in 2012 to do an undergraduate degree in business studies. He dropped university when his father unexpectedly died, then moved to Manchester, got married and now has a 3-month-old son who often keeps him awake at night. After other few other jobs in supermarkets and hotels, he started doing deliveries in October 2019, a job that gives him more flexibility than the previous ones. He enrolled just before the pandemic, when there were fewer couriers, the pay was still good and using one single app was enough to earn a living. Despite putting in more hours for less money than a year ago and being the only breadwinner at home, Adeeb is hopeful that in one year he will have enough money to open a burger place, together with other Pakistani friends. In January 2021, I followed him at work in the cold rain in what he described as the worst day at work so far. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt"">Rafeal</a> </h3>',
            location: {},
            earnings: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Adeeb/1.jpg',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            image: '../../riders/artwork/Adeeb/2.jpg',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            image: '../../riders/artwork/Adeeb/3.jpg',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '13:13: A slow start ',
            audio: '../../riders/audio/Adeeb/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            location: {},
            earnings: '3.06',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '13:42: Multiple orders, multiple apps',
            audio: '../../riders/audio/Adeeb/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            location: {},
            earnings: '6.69',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            image: '../../riders/artwork/Adeeb/4.jpg',
            location: {},
            earnings: '6.69',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '13:45: £20/hour, it’s very nice!',
            audio: '../../riders/audio/Adeeb/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            location: {},
            earnings: '21.47',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '',
            image: '../../riders/artwork/Adeeb/5.jpg',
            description: '',
            location: {},
            earnings: '21.47',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '16:26: Lunch break and video games',
            audio: '../../riders/audio/Adeeb/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            location: {},
            earnings: '24.94',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '16:57: It’s quiet, I feel like: Just go home',
            audio: '../../riders/audio/Adeeb/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            earnings: '24.94',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-6',
            title: '',
            image: '../../riders/artwork/Adeeb/6.jpg',
            description: '',
            location: {},
            earnings: '24.94',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-7',
            title: '',
            image: '../../riders/artwork/Adeeb/7.jpg',
            description: '',
            location: {},
            earnings: '24.94',
            onChapterEnter: [],
            onChapterExit: []
        },
        // BREAK
        {
            id: 'drive-slide-5',
            title: '17:47: Meeting friends again. Or maybe not',
            audio: '../../riders/audio/Adeeb/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            earnings: '34.85',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        // END BREAK        
        {
            id: 'drive-slide-6',
            title: '18:06: My wife gets bored at home',
            audio: '../../riders/audio/Adeeb/7.m4a',
            earnings: '38.03',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-8',
            title: '',
            image: '../../riders/artwork/Adeeb/8.jpg',
            description: '',
            location: {},
            earnings: '38.03',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '18:14: More than 50 jobs rejected',
            audio: '../../riders/audio/Adeeb/8.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            earnings: '38.03',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: '18:45: Waiting 10 minutes for the order',
            audio: '../../riders/audio/Adeeb/9.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            earnings: '46.82',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-9',
            title: '',
            image: '../../riders/artwork/Adeeb/9.jpg',
            description: '',
            location: {},
            earnings: '46.82',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-10',
            title: '19:09: Cold hands, wet feet',
            audio: '../../riders/audio/Adeeb/10.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            earnings: '58.79',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-11',
            title: '20:16: The worst day ever',
            audio: '../../riders/audio/Adeeb/11.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Adeeb/Adeeb.txt""> Read Transcript </a> ',
            earnings: '61.07',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-12',
            title: '',
            image: '../../riders/artwork/Adeeb/10.jpg',
            description: '',
            location: {},
            earnings: '61.07',
            onChapterEnter: [],
            onChapterExit: []
        },

        // CHARTS AND SUMMARY
        {
            id: 'slide-13',
            title: '',
            earnings: '61.07',
            image: '../../riders/data/Manchester/Adeeb.jpg',
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