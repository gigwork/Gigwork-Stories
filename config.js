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
            title: 'Jerome',
            description: '<b>Location:</b> Manchester </br> <b>Time:</b> 23/03/2020 | 10:45AM </br> <b>Platform:</b> Uber Eats </br> </br> <b>Bio:</b> <b>Jerome</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet vulputate leo, eget auctor massa. In eget ex convallis, lacinia risus sed, suscipit tortor. Suspendisse efficitur, mi id dictum feugiat, quam turpis gravida nulla, at viverra sem turpis quis orci. Ut fringilla nibh quis volutpat tempus. Curabitur condimentum nec urna eu iaculis. Quisque nec nisi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar lorem nisi, tincidunt hendrerit lectus bibendum ac. Aenean velit lectus, cursus non feugiat non, bibendum ac lacus. Proin placerat luctus nisl eu fermentum. </br> </br> <h3 style="text-align:center"> Art by <a href="#">Rafeal</a> </h3>',
            location: {},
            earnings: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            title: '1st Audio',
            audio: './riders/audio/Jerome/1.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            location: {},
            earnings: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '',
            description: '<p style="text-align:center;"> privileged </p>',
            image: './riders/artwork/Jerome/jerome.png',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '',
            audio: './riders/audio/Jerome/2.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            location: {},
            earnings: '6.41',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '',
            image: './riders/artwork/Jerome/jerome2.png',
            description: '',
            location: {},
            earnings: '6.41',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '',
            audio: './riders/audio/Jerome/3.m4a',
            description: '<a href="#"> Read Transcript </a> ',
            location: {},
            earnings: '6.41',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '',
            image: './riders/artwork/Jerome/jerome3.png',
            description: '',
            earnings: '12.21',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        // You can add a normal slide in the middle of the drive slides to take a break
        {
            id: 'slide-4',
            title: '14:28PM',
            description: 'Jerome signs off Uber Eats',
            image: './riders/artwork/Jerome/jerome4.png',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '16:58PM',
            description: 'Jerome signs on Uber Eats',
            image: './riders/artwork/Jerome/jerome5.png',
            location: {},
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
        {
            id: 'drive-slide-6',
            title: '',
            audio: './riders/audio/Jerome/5.m4a',
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