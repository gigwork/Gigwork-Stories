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
    title: 'Jacob story',
    subtitle: 'Lyon',
    byline: 'Nathanael Sheehan',
    footer: '  <a href="../lyon.html"  style="text-align: center;font-size: 4em;display: block;"> Return </a>',
   // BEGIN CHAPTERS
    chapters: [{
            id: 'slide-0',
            title: 'Jacob',
            image: '../../riders/artwork/Jacob/Jacob 1.jpg',
            description: '<b>Location:</b> Lyon </br> <b>Date:</b> Friday 2022-11-18 </br> <b>Platform:</b> Delieveroo </br> </br> It took Jacob three and a half years to reach Lyon from Nigeria. ‘Before I arrived here, Europe wasn’t in my mind. I didn’t know what to imagine. This person told me about Europe, then I decided to go’, says the car electrician turned Deliveroo rider. One day back in 2014, the 39 years old left his two boys and their mother behind and arrived in a squat in the outskirts of Lyon shortly after Christmas 2017. Jacob’s journey to Europe is as dramatic as that of many other young African men: multiple attempts at jumping fences in Melilla (Morocco), followed by a dangerous crossing of the Mediterranean. ‘Before taking the boat, I had a dream: I was in my workshop and saw this ju-ju. I took a plastic cup, I peed inside and threw it on the ju-ju, which turned into kittens. I woke up and I knew I broke the ju-ju and I could cross safely to Europe’. Without papers and living in different squats in Lyon, in 2021 Jacob began renting Deliveroo accounts for 130-150 euros per week. He has rented seven until now as they do not last more than two months before they are blocked. The circle is vicious: he saves some money but uses it to rent another account. </br> </br> <h3 style="text-align:center"> Art by <a target="_blank" href="https://twitter.com/letha_laetitia/">Letizia Bonann</a> </h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: '12.11: S’il vous plaît, parlez anglai',
            audio: '../../riders/audio/Jacob/1.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jacob/04. Jacob transcript 1.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€8.43',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: '12.59: I lock my bike and I walk',
            audio: '../../riders/audio/Jacob/2.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jacob/04. Jacob transcript 2.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€14.20',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            image: '../../riders/artwork/Jacob/Jacob 2.jpg',
            location: {},
            earnings: '€22.39',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: '13.47: I went there and the restaurant was closed',
            audio: '../../riders/audio/Jacob/3.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jacob/04. Jacob transcript 3.txt"> Read Transcript </a> ',
            location: {},
            earnings: '€27.39',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: '',
            image: '../../riders/artwork/Jacob/Jacob 3.jpg',
            description: '',
            location: {},
            earnings: '€33.04',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: '16.46: I have a spare inner tube for you!',
            audio: '../../riders/audio/Jacob/4.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jacob/04. Jacob transcript 4.txt"> Read Transcript </a> ',
            location: {},
            earnings: '39.82',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: '17.58: From 10 am to 6 pm, no order, nothing',
            audio: '../../riders/audio/Jacob/5.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jacob/04. Jacob transcript 5.txt"> Read Transcript </a> ',
            earnings: '€45.11',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: '',
            image: '../../riders/artwork/Jacob/Jacob 4.jpg',
            description: '',
            location: {},
            earnings: '€51.83',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: '20.10: My trousers and my socks are soaked',
            audio: '../../riders/audio/Jacob/6.m4a',
            description: '<a target="_blank" href="../../riders/transcript/Jacob/04. Jacob transcript 6.txt"> Read Transcript </a> ',
            earnings: '€59.88',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'drive-slide-6',
            title: '21.20: I will go and charge my phone',
            description: '<a target="_blank" href="../../riders/transcript/Jacob/04. Jacob transcript 7.txt"> Read Transcript </a> ',
            audio: '../../riders/audio/Jacob/7.m4a',
            earnings: '€64.43',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },


        // CHARTS AND SUMMARY
        {
            id: 'slide-10',
            title: '',
            earnings: '£61.07',
            image: '../../riders/data/Lyon/Jacob.jpg',
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