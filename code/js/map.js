// Create layer types
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

// Story alignments
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

// FUNCTION: Apply paint layer type to map
function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

// FUNCTION: Apply opacity layer type to map
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

// (function (Peaks) {
//     const options = {
//         zoomview: {
//             container: document.getElementById('zoomview-container')
//         },
//         overview: {
//             container: document.getElementById('overview-container')
//         },
//         mediaElement: document.querySelector('audio'),
//         webAudio: {
//             audioContext: new AudioContext()
//         }
//     };

//     Peaks.init(options, function (err, peaks) {

//     });
// })(peaks);



// Create story elements
var story = document.getElementById('story');
var features = document.createElement('div');

features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

var header = document.createElement('div');

// CONFIG SET UP
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    var earnings = document.getElementById('earnings');

    if (record.title) {
        var title = document.createElement('h1');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        image.onclick = function () {
            window.location.href = record.image
        }
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }



    if (record.audio) {
        var audio = document.createElement('audio');
        audio.src = record.audio
        audio.id = 'audio-player';
        audio.controls = 'controls';
        audio.type = 'audio/mpeg';

        // var zc = document.createElement('div')
        // zc.id = 'zoomview-container'

        // var oc = document.createElement('div')
        // oc.id = 'overview-container'

        // chapter.appendChild(zc)
        // chapter.appendChild(oc)
        chapter.appendChild(audio)

        // chapter.appendChild('<div id="wave1"></div>')
        // var id=1;


        // var wavesurfer = WaveSurfer.create({
        //     container: '#wave1',
        //     waveColor: 'pink',
        //     progressColor: 'green'
        // });

        // wavesurfer.load(record.audio)

    }

    if (record.chart) {
        var chart = document.createElement('div')
        chart.id = 'my_dataviz'
        chapter.appendChild(chart)
    }

    if (record.earnings) {
        container.innerHTML = '<h3 style="background-color: #ff5722;"> Total Earnings: ' + record.earnings + '</h3>'
    }

    container.setAttribute('id', record.id);

    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }


    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    features.appendChild(container);


});

// Add features to story
story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}
// Fetch mapbox scrollytelling plugin
mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";

    return {
        url: url + suffix
    }
}

// Set up mapbox 
var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    scrollZoom: false,
    transformRequest: transformRequest
});

// Show markers
var marker = new mapboxgl.Marker();
if (config.showMarkers) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

function handleStepProgress(response) {

    let stepProgress;

    if (response.element.id.slice(0, 5) === 'drive') {
        let driveSlideNum = parseInt(response.element.id.slice(-1));

        if (driveSlideNum === 0) {
            map.setLayoutProperty('animatedLine', 'visibility', 'visible');
            stepProgress = Math.round(response.progress * driveSmoothness);
        } else {
            stepProgress = Math.round(response.progress * driveSmoothness + driveSmoothness * driveSlideNum);
        }
        changeCenter(stepProgress);
    }
}


// On load of mapbox map
map.on("load", function () {

    let w = window.innerWidth;
    let initBounds = routeData.features[0].geometry.coordinates;

    if (followPoint === false) {
        var bounds = initBounds.reduce(function (bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(initBounds[0], initBounds[0]));

        if (w >= 500) {
            map.fitBounds(bounds, {
                padding: {
                    top: 150,
                    bottom: 150,
                    right: -100,
                    left: 200
                },
                duration: 5
            });
            document.createElement('h1').innerHTML = "Manchester"
            append
        } else {
            map.fitBounds(bounds, {
                padding: 20,
                duration: 2
            });
        }
    } else {
        map.setZoom(followZoomLevel);
        map.setBearing(followBearing);
        map.setPitch(followPitch);
    }



    map.addSource('lineSource', {
        "type": "geojson",
        "data": geojsonPoint
    });

    map.addSource('pointSource', {
        "type": "geojson",
        "data": geojsonPoint
    });

    map.addLayer({
        "id": "animatedLine",
        "type": "line",
        "source": "lineSource",
        'paint': {
            'line-opacity': 1,
            'line-color': '#ff5722',
            'line-width': 3.5
        },
        'layout': {
            'visibility': 'none'
        }
    });

    map.addLayer({
        "id": "animatedPoint",
        "type": "circle",
        "source": "pointSource",
        'paint': {
            'circle-radius': 7,
            'circle-opacity': 0.7,
            'circle-color': '#ff5722'
        }
    });

    // setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {

            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');

            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }

            if (chapter.summaryzoom) {
                map.setZoom(chapter.summaryzoom);
            } else {
                map.setZoom(followZoomLevel);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        })
        .onStepProgress(handleStepProgress);

    createLine();
});

// setup resize event
window.addEventListener('resize', scroller.resize);

// Waveform
document.addEventListener('DOMContentLoaded', function () {
    var els = document.querySelectorAll("audio");
    for (var i = 0; i < els.length; i++) {
        let i_ = i;
        let src_ = els[i].src;
        let newNode = document.createElement("div")
        newNode.innerHTML = '<div class="wave"></div>'
        els[i_].parentNode.insertBefore(newNode, els[i_])
        els[i].remove();
        let wavesurfer = WaveSurfer.create({
            container: document.getElementsByClassName("wave")[i_],
            waveColor: '#909090',
            progressColor: '#443e3c',
            cursorColor: '#ffffff',
            backend: 'MediaElement',
            mediaControls: true,
            hideScrollbar: true,
            minPxPerSec: 120,
            normalize: true,
            height: 124,
        });
        wavesurfer.on('error', function (e) {
            console.warn(e);
        });
        wavesurfer.on('play', function (e) {
            document.getElementsByClassName("playicon")[i_].style.display = "none";
            document.getElementsByClassName("pauseicon")[i_].style.display = "block";
        });
        wavesurfer.on('pause', function (e) {
            document.getElementsByClassName("playicon")[i_].style.display = "block";
            document.getElementsByClassName("pauseicon")[i_].style.display = "none";
        });

        wavesurfer.load(src_);
    }
});