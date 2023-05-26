var driveSlides = 10; // number of slides
var driveSmoothness = 200; // smoothness of scroll 
var driveTime = driveSlides * driveSmoothness; // time it takes to drive
var followPoint = true; // BOOL to follow point
var followZoomLevel = 13; // Zoom scale
var followBearing = 29; // bearing follow
var followPitch = 0; // pitch follow

var config = {
    style: 'mapbox://styles/nathanaelisamapper/cky28yemc34w215pc71g6p6oz',
    //mapbox://styles/nathanaelisamapper/ckyglczpt23y714pfw1wh7rox
    //style: 'mapbox://styles/nathanaelisamapper/ckxxwjfz05iz514mujwqq827q',
    accessToken: 'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Abdoulaye story',
    subtitle: 'Lyon',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../lyon.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Adeeb',
            image: '../../riders/artwork/Abdoulaye/Abdoulaye 1.jpeg',
            description: '<b>Location:</b> Lyon </br> <b>Date:</b> Tuesday 2022-09-27 </br> <b>Platform:</b> Uber Eats </br> </br> Born and raised in Banjul, the Gambia, 23 years old Abdoulaye smiles and tells me that, after all, he is still young and optimistic about the future. It is difficult to picture this against the backdrop of his dangerous, three-year long journey across the Mediterranean first and then the Alps. He arrived in France from Italy through the mountains and relied on the stars in the sky to find his way to Briançon in a dark September night in 2018. When I met him in the autumn of 2022, Abdoulaye just had his asylum claim rejected and was struggling to hold onto a rented Uber Eats account. Account renting is never a winning game, yet it is a common practice amongst platform food couriers in France, where more than half are undocumented migrants and do not have access to the labour market. Abdoulaye pays 130 euros a week for an account he can lose at any time and for which he needs to meet almost daily with the owner: ‘Uber Eats asks for facial recognition, so I need to cycle 7 km from Guillotière to Vénissieux to get a selfie from him’. When we met at a squat in Guillotière, where he stops to warm up and charge batteries, Abdoulaye sounded resolute: ‘I don’t give up yet. I still have the courage and the confidence that I will have documents here. But nobody knows, only God knows’. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://www.instagram.com/ionut_dulamita/"">Ionuț Dulămiță</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '10.10:Today we are planning to work hard',
            audio: '../../riders/audio/Abdoulaye/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Abdoulaye.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '12.13:Let them give us more orders',
            audio: '../../riders/audio/Abdoulaye/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Abdoulaye.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€7.74',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Abdoulaye/Abdoulaye 2.jpeg',
            location: {},
            earnings: '€7.74',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '13.58: Many people do not have money at the end of the month',
            audio: '../../riders/audio/Abdoulaye/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Abdoulaye.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€20.48',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: '',
            image: '../../riders/artwork/Abdoulaye/Abdoulaye 3.jpeg',
            description: '',
            location: {},
            earnings: '€20.48',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '16.21:I come here to charge batteries and collect food',
            audio: '../../riders/audio/Abdoulaye/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Abdoulaye.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€24.82',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '20.06:I dont know if youre tired, but we can work until 11',
            audio: '../../riders/audio/Abdoulaye/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Abdoulaye.txt"> Read Transcript </a> ',
            earnings: '€34.73',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '',
            image: '../../riders/artwork/Abdoulaye/Abdoulaye 4.jpeg',
            description: '',
            location: {},
            earnings: '€34.73',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '21.46: 36% on the phone and 3 on the bike.',
            audio: '../../riders/audio/Abdoulaye/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Abdoulaye.txt"> Read Transcript </a> ',
            earnings: '€42.7',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'drive-slide-6',
            title: '23.36: Rain and no more orders',
            description: '<a target="_blank" href="../../riders/transcript/Abdoulaye.txt"> Read Transcript </a> ',
            audio: '../../riders/audio/Abdoulaye/7.m4a',
            earnings: '€42.7',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },


        // CHARTS AND SUMMARY
        {
            id: 'slide-10',
            title: '',
            earnings: '£61.07',
            image: '../../riders/data/Lyon/Abdoulaye.jpg',
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