// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 7;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/nathanaelisamapper/ckxxwjfz05iz514mujwqq827q',
    accessToken: 'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slide-0',
            title: 'Jerome',
            description: '<b>Location:</b> Manchester </br> <b>Time:</b> 23/03/2020 | 10:45AM </br> <b>Platform:</b> Uber Eats </br> </br> <b>Artist:</b> Lorem Ipsum',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            title: '1st Audio',
            audio: './riders/audio/Jerome/20210327_103636.m4a',
            description: '<h3> Transcript </h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet vulputate leo, eget auctor massa. In eget ex convallis, lacinia risus sed, suscipit tortor. Suspendisse efficitur, mi id dictum feugiat, quam turpis gravida nulla, at viverra sem turpis quis orci. Ut fringilla nibh quis volutpat tempus. Curabitur condimentum nec urna eu iaculis. Quisque nec nisi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar lorem nisi, tincidunt hendrerit lectus bibendum ac. Aenean velit lectus, cursus non feugiat non, bibendum ac lacus. Proin placerat luctus nisl eu fermentum. Integer elit sapien, scelerisque semper tempor in, ultricies sit amet arcu. Donec a vehicula metus.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: 'privileged',
            image: './images/jerome.png',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'Second Title',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Second Title',
            image: './images/jerome4.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'Second Title',
            image: './images/jerome5.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        

        // You can add a normal slide in the middle of the drive slides to take a break
        {
            id: 'slide-4',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-2.244644, 53.483959],
                zoom: 1.5,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
