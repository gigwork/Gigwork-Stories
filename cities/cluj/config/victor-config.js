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
    style: 'mapbox://styles/nathanaelisamapper/ckz65ko8i001t15qol26t2azj',
    //mapbox://styles/nathanaelisamapper/ckyglczpt23y714pfw1wh7rox
    //style: 'mapbox://styles/nathanaelisamapper/ckxxwjfz05iz514mujwqq827q',
    accessToken: 'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Victors story',
    subtitle: 'Cluj',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../cluj.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
    // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Victor',
            // image: '../../riders/artwork/Victor/Victor.jpeg',
            description: '<b>Location:</b> Cluj </br> <b>Date:</b> Saturday 27/03/2020 </br> <b>Platform:</b> Uber Eats </br> </br> <b></b> At 46, Victor has had some rough time. Raised in an orphanage, he didn’t get a ‘proper’ education and attended a vocational school instead. Since he was 18, he worked as a concrete mixer until a few years ago when he got asthmatic bronchitis and had to settle for less physically demanding jobs. These days he’s installing optic fibres as a full-time job, to which he then adds as many extra hours (plus full weekends) as he can delivering food for Tazz. Describing himself as completely addicted to adrenaline, Victor suffered a bicycle accident during one of his shifts at work. Despite having a broken shoulder, he got back into the saddle straight away. He did an upgrade nevertheless, from two to three wheels, to alleviate his pain. Riding his three-speed tricycle up and down the hills in the city is arguably a less demanding job than the previous ones he’s had, but Victor doesn’t complain even when he needs to get off and push the cycle. He has bigger problems to worry about at work, such as the constant fear his wages are stolen by the platform before his very eyes. A vivid fear we can witness as we follow him at work. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            earnings: '£',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '10:25: Start of the day',
            audio: '../../riders/audio/Victor/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor.txt"> Read Transcript </a> ',
            location: {},
            earnings: '£2.45',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '11:33 Four orders later',
            audio: '../../riders/audio/Victor/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '£15.32',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '12:17: Less than the minimum wage',
            audio: '../../riders/audio/Victor/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '£22.86',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '13:28: A very quiet day',
            audio: '../../riders/audio/Victor/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '£25.97',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '13:30: Its good to speak French',
            audio: '../../riders/audio/Victor/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor4.txt"> Read Transcript </a> ',
            earnings: '£30.15',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        // BREAK
        {
            id: 'drive-slide-5',
            title: '14:01:  A break to charge the batteries',
            audio: '../../riders/audio/Victor/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor5.txt"> Read Transcript </a> ',
            earnings: '£30.15',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        // END BREAK        
        {
            id: 'drive-slide-6',
            title: '18:04: Back from the break',
            audio: '../../riders/audio/Victor/7.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor6.txt"> Read Transcript </a> ',
            earnings: '£34.39',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '18:42: Cancel order, move on',
            audio: '../../riders/audio/Victor/8.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor7.txt"> Read Transcript </a> ',
            earnings: '£39.57',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: '19:33: An order that takes me home ',
            audio: '../../riders/audio/Victor/9.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor8.txt"> Read Transcript </a> ',
            earnings: '£46.82',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: '20:20: End of the day',
            audio: '../../riders/audio/Victor/10.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Victor/Victor9.txt"> Read Transcript </a> ',
            earnings: '£49.79',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // CHARTS AND SUMMARY
        {
            id: 'slide-6',
            title: '',
            earnings: '£49.79',
            image: '../../riders/data/Cluj/Victor.jpg',
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