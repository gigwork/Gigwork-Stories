// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 5;

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
    title: 'Farhods story',
    subtitle: 'Manchester',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../Cluj.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
    // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Farhod',
            image: '../../riders/artwork/Farhod/1.JPG',
            description: '<b>Location:</b> Cluj </br> <b>Date:</b> Saturday 08/10/2021 </br> <b>Platform:</b> Glovo </br> </br> <b></b> Six years ago, when he was only 18, Farhod left Uzbekistan to do a business degree in Cluj. The Romanian ambassador in Tashkent advised him to apply for a Romanian government scholarship that brought him to Transylvania, even as he didn’t know anything about the country nor speak the language. Now he’s very fluent in Romanian but has a ‘Moldovan accent’ that he picked from Moldovan colleagues living together with him in the student residences. He only started doing deliveries in the autumn of 2020, after he had to repeat his final year, which made him lose his scholarship and the subsidised rent in campus. Fairly new to everyday city cycling, he bought himself nevertheless a not very solid second-hand bicycle that he needs to constantly fix and push uphill when he needs to deliver food in areas such as Zorilor or Gruia. Despite being constantly and visibly tired from the sustained effort he engages himself in five days a week, Farhod agreed nevertheless to meet and cycle for about five hours in a mild October in 2020. For now it’s still fine, he tells me, but he’s considering buying a car to make his work and life easier during the cold months ahead. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://josesherwood.com/">José Sherwood González</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '12.00: I hope to avoid the hills',
            audio: '../../riders/audio/Farhod/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Farhod/Farhod.txt"> Read Transcript </a> ',
            location: {},
            earnings: '0 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            title: '',
            image: '../../riders/artwork/Farhod/2.jpeg',
            description: '',
            location: {},
            earnings: '0 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '13.04: A wobbly pedal',
            audio: '../../riders/audio/Farhod/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Farhod/Farhod1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '27.32 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: '',
            image: '../../riders/artwork/Farhod/3.JPG',
            description: '',
            location: {},
            earnings: '27.32 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '13.58: Ordering food on the client’s behalf',
            audio: '../../riders/audio/Farhod/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Farhod/Farhod2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '42.86 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '15.27: Walked the bike for 20 minutes',
            audio: '../../riders/audio/Farhod/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Farhod/Farhod3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '52.86 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            title: '',
            image: '../../riders/artwork/Farhod/4.JPG',
            description: '',
            location: {},
            earnings: '52.86 lei',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '16.16: Back from the break',
            audio: '../../riders/audio/Farhod/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Farhod/Farhod4.txt"> Read Transcript </a> ',
            earnings: '71.22 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: '',
            image: '../../riders/artwork/Farhod/5.JPG',
            description: '',
            location: {},
            earnings: '72.22 lei',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'drive-slide-5',
            title: '18.05: I earned what I had in plan',
            audio: '../../riders/audio/Farhod/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Farhod/Farhod5.txt"> Read Transcript </a> ',
            earnings: '89.25 lei',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
    
        // CHARTS AND SUMMARY
        {
            id: 'slide-6',
            title: '',
            earnings: '110.34 lei',
            image: '../../riders/data/Cluj/Farhod.jpg',
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