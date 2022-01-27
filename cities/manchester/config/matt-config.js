// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 6;

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
    title: 'Matts story',
    subtitle: 'Manchester',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../manchester.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Matt',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Wednesday 03/03/2021 </br> <b>Platform:</b> Deliveroo, Just Eat & Uber Eats </br> </br> <b>Bio:</b> In his spare time from being a stressed cabin manager for a flight company, Matt relaxes himself by doing deliveries for Deliveroo. At 41 and without family responsibilities, Matt has been driving his car to work for almost three years now, heading every weekend evening from a town nearby Manchester to the city centre. Once there, he gets on his fast racing bike for a few hours in the hope to earn enough money to cover his monthly utility bills. As someone who lived in the city centre for some years, he has been effortlessly navigating the empty streets during the pandemic. But his shifts as a food courier have not always been without incidents. On the cold January day in 2021 I followed him at work he’s had his patience challenged by an order for which he had to do two separate journeys to the same client without being paid accordingly. On other occasions, Matt recollects similar struggles he’s encountered as a gig worker, which range from finding a place to pee in a locked down city, to being sent by the not-so-smart app to restaurants which closed in the meantime or even almost getting attacked in a park by someone who wanted to steal his rather expensive bicycle.</br> <h3 style="text-align:center"> Art by <a target="_blank" href="http://www.hyestudio.com/">Alin Tămășan</a> </h3>',
            location: {},
            earnings: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Matt/Matt.png',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '16:54: Chasing some bonuse',
            audio: '../../riders/audio/Matt/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Matt/Matt.txt"> Read Transcript </a>',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '17:31: Two journeys, paid only once',
            audio: '../../riders/audio/Matt/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Matt/Matt1.txt"> Read Transcript </a>',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '17:40: Dealing 3 orders at a time',
            audio: '../../riders/audio/Matt/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Matt/Matt2.txt"> Read Transcript </a>',
            location: {},
            earnings: '12.94',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            image: '../../riders/artwork/Matt/Matt1.png',
            description: '',
            location: {},
            earnings: '12.94',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '17.53: Waiting for orders in the cold',
            audio: '../../riders/audio/Matt/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Matt/Matt3.txt"> Read Transcript </a>',
            location: {},
            earnings: '18.84',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '18:45: Being local, knowing the shortcuts',
            audio: '../../riders/audio/Matt/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Matt/Matt4.txt"> Read Transcript </a>',
            location: {},
            earnings: '33.41',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            image: '../../riders/artwork/Matt/Matt2.png',
            description: '',
            location: {},
            earnings: '33.41',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '20:03: One minute? That’s bullshit!',
            audio: '../../riders/audio/Matt/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Matt/Matt5.txt"> Read Transcript </a>',
            earnings: '33.41',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-6',
            image: '../../riders/artwork/Matt/Matt3.png',
            description: '',
            location: {},
            earnings: '45.28',
            onChapterEnter: [],
            onChapterExit: []
        },     
        {
            id: 'drive-slide-6',
            title: '20:39: Still coughing, I better stop',
            audio: '../../riders/audio/Matt/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Matt/Matt6.txt"> Read Transcript </a>',
            earnings: '45.28',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-7',
            image: '../../riders/artwork/Matt/Matt4.png',
            description: '',
            location: {},
            earnings: '63.47',
            onChapterEnter: [],
            onChapterExit: []
        },     
        // CHARTS AND SUMMARY
        {
            id: 'slide-8',
            title: '',
            earnings: '63.47',
            image: '../../riders/data/Manchester/Matt.jpg',
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