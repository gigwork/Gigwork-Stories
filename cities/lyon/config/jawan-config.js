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
    title: 'Jawan story',
    subtitle: 'Lyon',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../lyon.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Jawan',
            image: '../../riders/artwork/Jawan/Jawan 1.jpg',
            description: '<b>Location:</b> Lyon </br> <b>Date:</b> Friday 2022-11-18 </br> <b>Platform:</b> Delieveroo </br> </br> It took Jawan three and a half years to reach Lyon from Nigeria. ‘Before I arrived here, Europe wasn’t in my mind. I didn’t know what to imagine. This person told me about Europe, then I decided to go’, says the car electrician turned Deliveroo rider. One day back in 2014, the 39 years old left his two boys and their mother behind and arrived in a squat in the outskirts of Lyon shortly after Christmas 2017. Jawan’s journey to Europe is as dramatic as that of many other young African men: multiple attempts at jumping fences in Melilla (Morocco), followed by a dangerous crossing of the Mediterranean. ‘Before taking the boat, I had a dream: I was in my workshop and saw this ju-ju. I took a plastic cup, I peed inside and threw it on the ju-ju, which turned into kittens. I woke up and I knew I broke the ju-ju and I could cross safely to Europe’. Without papers and living in different squats in Lyon, in 2021 Jawan began renting Deliveroo accounts for 130-150 euros per week. He has rented seven until now as they do not last more than two months before they are blocked. The circle is vicious: he saves some money but uses it to rent another account. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://www.instagram.com/ionut_dulamita/"">Ionuț Dulămiță</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '12.44: Charging the phone at the shopping mall',
            audio: '../../riders/audio/Jawan/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€6.43',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '13.52: Asking clients for aÊthumbs up',
            audio: '../../riders/audio/Jawan/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan.txt"> Read Transcript </a> ',
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
            description: '<a target="_blank" href="../../riders/transcript/Jawan.txt"> Read Transcript </a> ',
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
            title: '118.42: The client cant receive a soaked meal',
            audio: '../../riders/audio/Jawan/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€40.28',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '20.20: Its hard to cycle in this area',
            audio: '../../riders/audio/Jawan/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jawan.txt"> Read Transcript </a> ',
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
            description: '<a target="_blank" href="../../riders/transcript/Jawan.txt"> Read Transcript </a> ',
            earnings: '€61.06',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'drive-slide-6',
            title: '23.05: Its difficult to bring my children from Afghanistan',
            description: '<a target="_blank" href="../../riders/transcript/Jawan.txt"> Read Transcript </a> ',
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