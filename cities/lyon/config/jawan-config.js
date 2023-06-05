var driveSlides = 10; // number of slides
var driveSmoothness = 200; // smoothness of scroll 
var driveTime = driveSlides * driveSmoothness; // time it takes to drive
var followPoint = true; // BOOL to follow point
var followZoomLevel = 13; // Zoom scale
var followBearing = 29; // bearing follow
var followPitch = 0; // pitch follow

var config = {
    style: 'mapbox://styles/nathanaelisamapper/clij0ndxz00dh01r02kgu8out',
    //mapbox://styles/nathanaelisamapper/ckyglczpt23y714pfw1wh7rox
    //style: 'mapbox://styles/nathanaelisamapper/ckxxwjfz05iz514mujwqq827q',
    accessToken: 'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Jawan story',
    subtitle: 'Lyon',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../lyon.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Jawan',
            image: '../../riders/artwork/Jawan/Jawan 1.jpg',
            description: '<b>Location:</b> Lyon </br> <b>Date:</b> Date: Friday 18/11/202 </br> <b>Platform:</b> Delieveroo </br> </br> Jawan is almost 30 years old, and he is a refugee from Taliban occupied Afghanistan. He has been living in France, away from his children and wife, for almost three years. Aside from Pashto, his native language, Jawan has picked up other languages during his long and strenuous two-year journey from Afghanistan to Lyon. He learned Urdu in Pakistan, a bit of English in Turkey, Greece and Germany, Italian in Italy and French. He feels most attached to Italian, which he set up as default language for voice navigation on Google Maps while he is doing deliveries. Uber Eats is his back up job in between various temporary contracts as kitchen assistant, gardener, or car manufacturing worker: ‘Uber will always be a side job, even when I will have a permanent contract. If I have a day off, I will do deliveries. I don’t like staying at home’. Yet, riding a bicycle full-time to do deliveries is not always easy. The day I followed him at work, a drink spilled in his insulated bag: by the time Jawan delivered it to the client, the drink was half gone. Indeed, it is not usual to get thumbs down from clients who are unhappy with the delivery services. ‘When this happens, I risk losing my account. So, I try to rise the client satisfaction rating on my profile and ask them for thumbs up’. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://oanalohan.ultra-book.com/">Oana Lohan</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '12.44: Charging the phone at the shopping mall',
            audio: '../../riders/audio/Jawan/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan/05. Jawan transcript 1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€6.43',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '13.52: Asking clients for a thumbs up',
            audio: '../../riders/audio/Jawan/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan/05. Jawan transcript 2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€19.80',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Jawan/Jawan 2.jpg',
            location: {},
            earnings: '€24.49',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '14.54: Five orders and a break',
            audio: '../../riders/audio/Jawan/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan/05. Jawan transcript 3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€29.93',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: '',
            image: '../../riders/artwork/Jawan/Jawan 3.jpg',
            description: '',
            location: {},
            earnings: '€36.04',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '118.42: The client can`t receive a soaked meal',
            audio: '../../riders/audio/Jawan/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan/05. Jawan transcript 4.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€40.28',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '20.20: It`s hard to cycle in this area',
            audio: '../../riders/audio/Jawan/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan/05. Jawan transcript 5.txt"> Read Transcript </a> ',
            earnings: '€48.66',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '',
            image: '../../riders/artwork/Jawan/Jawan 4.jpg',
            description: '',
            location: {},
            earnings: '€55.05',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '21.39: I called two times and he rejected',
            audio: '../../riders/audio/Jawan/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan/05. Jawan transcript 6.txt"> Read Transcript </a> ',
            earnings: '€61.06',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'drive-slide-6',
            title: '23.05: It`s difficult to bring my children from Afghanistan',
            description: '<a target="_blank" href="../../riders/transcript/Jawan/05. Jawan transcript 7.txt"> Read Transcript </a> ',
            audio: '../../riders/audio/Jawan/7.m4a',
            earnings: '€68.03',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-6',
            title: '',
            image: '../../riders/artwork/Jawan/Jawan 5.jpg',
            description: '',
            location: {},
            earnings: '€73.97',
            onChapterEnter: [],
            onChapterExit: []
        },


        // CHARTS AND SUMMARY
        {
            id: 'slide-10',
            title: '',
            earnings: '£61.07',
            image: '../../riders/data/Lyon/Jawan.jpg',
            summaryzoom: 10,
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