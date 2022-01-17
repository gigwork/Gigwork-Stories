// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 9;

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
    footer: 'Source: source citations, etc.',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Dianka',
            description: '<b>Location:</b> Manchester </br> <b>Date:</b> Tuesday 11/02/2021 </br> <b>Platform:</b> Deliveroo & Uber Eats </br> </br> <b>Bio:</b> 31 years old Dianka is one of the few women doing food deliveries in Manchester. Originally from Czech Republic, which she left six years ago, Dianka has a bachelors’ degree in economics and management that wasn’t of much use once arrived in the UK. Instead, she’s been doing warehouse, cleaning and hospitality jobs for which she was often paid less than the minimum wage. While she initially started doing deliveries on an e-bike as a side job, it quickly became a full-time enterprise out of necessity. It was both the covid pandemic and a partner with medical problems who needed constant looking after which forced her into a more flexible job. As many other couriers, she’s ‘multiapping’, doing Deliveroo and Uber Eats at the same time in order to earn enough money. While the delivery money is good to cover for everyday expenses, being a woman comes at a hefty price as she receives unwarranted attention from men, who are often colleagues at work. As a result, she always carries a pepper spray, a ‘present’ she’s received from her partner’s sister. Outside work, she loves nature and spends as much time as she can in Drinkwater Park, north of Manchester.</br> <h3 style="text-align:center"> Art by <a href="#">Rafeal</a> </h3>',
            location: {},
            earnings: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '06:59AM An early start',
            audio: '../../riders/audio/Dianka/1.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka.txt"> Read Transcript </a>',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Dianka/Dianka.jpg',
            location: {},
            earnings: '0',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '07:29: A glitch in the app',
            audio: '../../riders/audio/Dianka/2.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka1.txt"> Read Transcript </a>',
            location: {},
            earnings: '5.13',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '08:41: A fragile delivery and some merchanical problems',
            audio: '../../riders/audio/Dianka/3.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka2.txt"> Read Transcript </a>',
            location: {},
            earnings: '15.05 (£5 tip)',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            image: '../../riders/artwork/Dianka/Dianka2.jpg',
            description: '',
            location: {},
            earnings: '15.05',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '11:32: A break, a hot shower and back at work',
            audio: '../../riders/audio/Dianka/4.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka3.txt"> Read Transcript </a>',
            location: {},
            earnings: '18:64',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '13:00: Busy Uber, quiet Deliveroo',
            audio: '../../riders/audio/Dianka/5.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka4.txt"> Read Transcript </a>',
            location: {},
            earnings: '30.29',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            image: '../../riders/artwork/Dianka/Dianka3.jpg',
            description: '',
            location: {},
            earnings: '30.29',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '13:53: Lunch break, games and bike fixing',
            audio: '../../riders/audio/Dianka/5.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka5.txt"> Read Transcript </a>',
            earnings: '36.51',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            description: 'Dianka signs out of Deliveroo',
            location: {},
            earnings: '36.51',
            onChapterEnter: [],
            onChapterExit: []
        },
        // BREAK
        {
            id: 'slide-5',
            description: 'Dianka signs in Deliveroo and Uber Eats',
            location: {},
            earnings: '36.51',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: '19:01: More hot showers, more clothes',
            audio: '../../riders/audio/Dianka/6.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka6.txt"> Read Transcript </a>',
            earnings: '36.51',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-6',
            image: '../../riders/artwork/Dianka/Dianka4.jpg',
            description: '',
            location: {},
            earnings: '30.29',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: '20:32: Six kilometres for an ice-cream',
            audio: '../../riders/audio/Dianka/7.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka7.txt"> Read Transcript </a>',
            earnings: '44',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },     
        {
            id: 'drive-slide-8',
            title: '21:15: A cold that wears you down',
            audio: '../../riders/audio/Dianka/8.m4a',
            description: '<a href="../../riders/transcript/dianka/dianka8.txt"> Read Transcript </a>',
            earnings: '47.48',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },        
        // CHARTS AND SUMMARY
        {
            id: 'slide-6',
            title: '',
            earnings: '47.48',
            chart: {},
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