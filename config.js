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
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/nathanaelisamapper/cky28yemc34w215pc71g6p6oz',
    //style: 'mapbox://styles/nathanaelisamapper/ckxxwjfz05iz514mujwqq827q',
    accessToken: 'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [{
            id: 'slide-0',
            title: 'Jérôme',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Saturday 27/03/2020 </br> <b>Platform:</b> Uber Eats </br> </br> <b>Bio:</b> <b>Jerome</b> At 36, Jérôme is using an instantly recognisable e-bike with fat tyres to do deliveries for Uber Eats. Born in Congo, he lived for most of his life in Paris before moving to Manchester in 2019 as he was fed up with France and wanted to improve his English. Since his Parisian school cafeteria business was brought to a standstill during the pandemic, Jérôme is saving up money for another business idea, based on Uber’s model: an app for those who want their garden trimmed in an instant. His entrepreneurial dreams were recently punctured by a horrible episode at work, when a client accused him of rape. It took a whole month to prove his innocence, but the emotional scars are still there, as are the rent arrears resulting from Uber automatically suspending his account for this period. While he praises the platform for its innovative approach to work, Jérôme finds appalling the way it treats the workers: What they call partners its not actually partners, its fake employees. In this job, we are vulnerable in all aspects, at all levels. If I have an accident tomorrow, I am left without pay. </br> </br> <h3 style="text-align:center"> Art by <a href="#">Rafeal</a> </h3>',
            location: {},
            earnings: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            title: '1st Audio',
            image: './riders/artwork/Jerome/jerome.png',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '',
            audio: './riders/audio/Jerome/1.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            location: {},
            earnings: '2.45',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '',
            audio: './riders/audio/Jerome/2.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            location: {},
            earnings: '5.73',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '',
            image: './riders/artwork/Jerome/jerome2.png',
            description: '',
            location: {},
            earnings: '11.85',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '',
            audio: './riders/audio/Jerome/3.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            location: {},
            earnings: '15.32',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '',
            audio: './riders/audio/Jerome/4.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            location: {},
            earnings: '15.32',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '',
            audio: './riders/audio/Jerome/4.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            earnings: '12.21',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },


        // You can add a normal slide in the middle of the drive slides to take a break
        {
            id: 'slide-4',
            title: '14:01PM',
            description: 'Jerome signs off Uber Eats',
            audio: './riders/audio/Jerome/6.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '17:40PM',
            description: 'Jerome signs on Uber Eats',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: '',
            image: './riders/artwork/Jerome/jerome4.png',
            audio: './riders/audio/Jerome/4.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            earnings: '12.21',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '',
            audio: './riders/audio/Jerome/5.m4a',
            image: './riders/artwork/Jerome/jerome5.png',
            description: '<a href="#"> Read Transcript </a> ',
            earnings: '19.21',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: '',
            earnings: '32.21',
            chart: {},
            description: '',
            location: {
                center: [-77.07567, 38.89583],
                zoom: 15.23,
                pitch: 60.00,
                bearing: 43.61
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};