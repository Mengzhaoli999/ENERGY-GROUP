var config = {
    style: 'mapbox://styles/jobeepan/cluqp09y100sb01ntbf4fcstc',
    accessToken: 'pk.eyJ1Ijoiam9iZWVwYW4iLCJhIjoiY2tuem9qMGltMDZtYzJvbnNyNTc3cjRvbCJ9.s9iMy72LmnzYVB1ci4QWGg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Solar photovoltaic electricty tacker',
    subtitle: '',
    byline: 'By Xiongjie',
    footer: 'Source: <a href="https://beta.data.gov.sg/" target="_blank">https://beta.data.gov.sg/</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Food deserts in Singapore',
            description: '',
            location: {
                center: [103.38950, 1.45380],
                zoom: 9.29,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'singapore-energy-consumption',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'singapore-industrial-building',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'energy-demand',
                    opacity: 0,
                    duration: 0                
                }
            ],  
            onChapterExit: [
                {
                    layer: 'water',
                    opacity: 0,
                    duration: 1000
                }
            ],
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Electricty consumption by househoulds',
            description: '',
            location: {
                center: [103.66759, 1.34714],
                zoom: 10.63,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'singapore-energy-consumption',
                    opacity: 1,
                    duration: 200
                }
            ],
            onChapterExit: [
                {
                    layer: 'singapore-energy-consumption',
                    opacity: 0,
                    duration: 200
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Electricty consumption by industrial-related',
            description: '',
            location: {
                center: [103.66759, 1.34714],
                zoom: 10.63,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'singapore-industrial-building',
                    opacity: 1,
                    duration: 200                              
                }
            ],
            onChapterExit: [
                {
                    layer: 'singapore-industrial-building',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Energy demand in SKED',
            description: '',
            location: {
                center: [103.75061, 1.42273],
                zoom: 15.47,
                pitch: 49.14,
                bearing: -56.11,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'energy-demand',
                    opacity: 1,
                    duration: 200
                }
            ],
            onChapterExit: [
                {
                    layer: 'energy-demand',
                    opacity: 0,
                    duration: 0
                }
            ],
        },
    ]
};