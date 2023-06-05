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
    title: 'Sofiane story',
    subtitle: 'Lyon',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../lyon.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Sofiane',
            image: '../../riders/artwork/Sofiane/Sofiane 1.png',
            description: '<b>Location:</b> Lyon </br> <b>Date:</b> Date: Monday 12/12/2022 and Wednesday 08/02/2023 </br> <b>Platform:</b> Delieveroo </br> </br> 28 years old Sofiane left Rabat in 2018 to continue his management studies in Europe. After one year spent in Italy with a resident permit, the young Moroccan could not enrol at university and, one year later, decided to join his sister in France. He failed to register for studies in France as well and, without the right to work, he ended up renting and buying Deliveroo and Uber Eats accounts to earn a living as a courier. He has had seven accounts until now, but he could not hold onto any of them for too long: ‘You buy a fraudulent account for 1,200 euros, you work for six months, then Uber blocks it’. During the Covid lockdown he made nice money, but he also caught the virus three times. I asked Sofiane to keep record of one working day and, on another day, I followed him at work. Below are the voice notes collected at the end of 2022 and beginning of 2023. Sofiane used to ride a motorcycle, which got eventually stolen, so in December 2022 he switched to a rented e-bike. He summarises his sans papiers life in France with an anecdote: ‘One undocumented migrant went to president Macron and asked him “We don’t have any rights?” And Macron answered “First, you have duties and only afterwards rights”. Damn, it is such a cruel thing to say!` </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '16.35: It is very, very cold',
            audio: '../../riders/audio/Sofiane/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '16.40 Up the stairs to the 7th floor',
            audio: '../../riders/audio/Sofiane/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€8.92',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Sofiane/Sofiane 2.png',
            location: {},
            earnings: '€14.40',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '18.01: This doesn’t exist not even in Maro',
            audio: '../../riders/audio/Sofiane/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€19.23',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: '',
            image: '../../riders/artwork/Sofiane/Sofiane 3.png',
            description: '',
            location: {},
            earnings: '€26.54',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '22.01: I was in pain, I already had lung surgery',
            audio: '../../riders/audio/Sofiane/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 4.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€30.28',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '22.05: A weird noise on my motorcycle',
            audio: '../../riders/audio/Sofiane/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 5.txt"> Read Transcript </a> ',
            earnings: '€36.61',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

                // CHARTS AND SUMMARY
        {
            id: 'slide-10',
            title: '',
            earnings: '£61.07',
            image: '../../riders/data/Lyon/Sofiane Day 1.jpg',
            summaryzoom: 10,
            location: {
                center: [-2.244644, 53.483959],
                zoom: 15.23,
                pitch: 60.00,
                bearing: 43.61
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'slide-5',
            title: 'Day 2',
            image: '../../riders/artwork/Sofiane/Sofiane 4.jpeg',
            description: '',
            location: {},
            earnings: '€0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '15.31: School holidays',
            audio: '../../riders/audio/Sofiane/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 6.txt"> Read Transcript </a> ',
            earnings: '€18.04',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'drive-slide-6',
            title: '16.52: You need to change places to receive orders',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 7.txt"> Read Transcript </a> ',
            audio: '../../riders/audio/Sofiane/7.m4a',
            earnings: '€23.29',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '17.56: It is frustrating, you’ve seen I was pissed',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 8.txt"> Read Transcript </a> ',
            audio: '../../riders/audio/Sofiane/8.m4a',
            earnings: '€31.74',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: '19.23: I call it the `traditional method`',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 9.txt"> Read Transcript </a> ',
            audio: '../../riders/audio/Sofiane/9.m4a',
            earnings: '€42.03',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-6',
            title: '',
            image: '../../riders/artwork/Sofiane/Sofiane 5.png',
            description: '',
            location: {},
            earnings: '€48.57',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: '20.20: Inshallah!',
            description: '<a target="_blank" href="../../riders/transcript/Sofiane/03. Sofiane transcript 10.txt"> Read Transcript </a> ',
            audio: '../../riders/audio/Sofiane/10.m4a',
            earnings: '€52.43',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // CHARTS AND SUMMARY
        {
            id: 'slide-10',
            title: '',
            earnings: '€57.04',
            image: '../../riders/data/Lyon/Sofiane Day 2.jpg',
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