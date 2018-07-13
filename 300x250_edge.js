/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='',
        aud='media/',
        vid='media/',
        js='',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg_blue_300',
                            type: 'image',
                            rect: ['-92px', '0px', '484px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_blue_300.jpg",'0px','0px']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['67px', '27px', '186px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                        },
                        {
                            id: 'text-12',
                            display: 'none',
                            type: 'image',
                            rect: ['222px', '102px', '272px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-1.png",'0px','0px']
                        },
                        {
                            id: 'text-22',
                            display: 'none',
                            type: 'image',
                            rect: ['204px', '157px', '169px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-2.png",'0px','0px']
                        },
                        {
                            id: 'wheel2',
                            display: 'none',
                            type: 'image',
                            rect: ['-237px', '32px', '355px', '355px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"wheel.png",'0px','0px'],
                            transform: [[],['885']]
                        },
                        {
                            id: 'wheel--logo2',
                            display: 'none',
                            type: 'image',
                            rect: ['-237px', '32px', '355px', '355px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"wheel--logo.png",'0px','0px']
                        },
                        {
                            id: 'arr-12',
                            type: 'image',
                            rect: ['127px', '168px', '175px', '83px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"arr-1.png",'0px','0px']
                        },
                        {
                            id: 'arr-22',
                            display: 'none',
                            type: 'image',
                            rect: ['127px', '168px', '175px', '83px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"arr-2.png",'0px','0px']
                        },
                        {
                            id: 'text-b-13',
                            display: 'none',
                            type: 'image',
                            rect: ['170px', '194px', '100px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-b-1.png",'0px','0px']
                        },
                        {
                            id: 'text-b-22',
                            display: 'none',
                            type: 'image',
                            rect: ['170px', '194px', '100px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-b-2.png",'0px','0px']
                        },
                        {
                            id: 'text-s-12',
                            display: 'none',
                            type: 'image',
                            rect: ['218px', '76px', '120px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-s-1.png",'0px','0px']
                        },
                        {
                            id: 'text-s-22',
                            display: 'none',
                            type: 'image',
                            rect: ['214px', '106px', '128px', '26px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-s-2.png",'0px','0px']
                        },
                        {
                            id: 'text-s-32',
                            display: 'none',
                            type: 'image',
                            rect: ['256px', '130px', '84px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-s-3.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(18,84,176,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 13865,
                    autoPlay: true,
                    data: [
                        [
                            "eid72",
                            "opacity",
                            9195,
                            486,
                            "easeOutQuad",
                            "${arr-22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            9681,
                            486,
                            "easeOutQuad",
                            "${arr-22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid107",
                            "opacity",
                            10167,
                            486,
                            "easeOutQuad",
                            "${arr-22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            10653,
                            486,
                            "easeOutQuad",
                            "${arr-22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "opacity",
                            11138,
                            486,
                            "easeOutQuad",
                            "${arr-22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "opacity",
                            11624,
                            486,
                            "easeOutQuad",
                            "${arr-22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            12110,
                            486,
                            "easeOutQuad",
                            "${arr-22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            12596,
                            486,
                            "easeOutQuad",
                            "${arr-22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${text-b-13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            4960,
                            0,
                            "easeInOutQuad",
                            "${text-b-13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            9130,
                            0,
                            "easeOutQuad",
                            "${text-b-13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "location",
                            95,
                            555,
                            "easeOutBack",
                            "${text-12}",
                            [[358, 125, 0, 0, 0, 0,0],[150, 125, 0, 0, 0, 0,208]]
                        ],
                        [
                            "eid138",
                            "opacity",
                            9630,
                            460,
                            "easeOutBack",
                            "${text-s-12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "opacity",
                            12750,
                            328,
                            "easeOutQuad",
                            "${text-s-12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid154",
                            "location",
                            10035,
                            460,
                            "easeOutBack",
                            "${text-s-22}",
                            [[278, 119, 0, 0, 0, 0,0],[228, 119, 0, 0, 0, 0,50]]
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wheel2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            4145,
                            0,
                            "easeInOutQuad",
                            "${wheel2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid177",
                            "display",
                            13075,
                            0,
                            "easeInOutQuad",
                            "${wheel2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid198",
                            "display",
                            13750,
                            0,
                            "easeInOutQuad",
                            "${wheel2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "rotateZ",
                            4145,
                            0,
                            "easeInOutQuad",
                            "${wheel2}",
                            '7deg',
                            '7deg'
                        ],
                        [
                            "eid90",
                            "rotateZ",
                            5722,
                            3058,
                            "easeOutCubic",
                            "${wheel2}",
                            '7deg',
                            '885deg'
                        ],
                        [
                            "eid180",
                            "rotateZ",
                            13750,
                            0,
                            "easeInOutQuad",
                            "${wheel2}",
                            '885deg',
                            '7deg'
                        ],
                        [
                            "eid156",
                            "location",
                            9630,
                            460,
                            "easeOutBack",
                            "${text-s-12}",
                            [[278, 90, 0, 0, 0, 0,0],[228, 90, 0, 0, 0, 0,50]]
                        ],
                        [
                            "eid7",
                            "opacity",
                            95,
                            555,
                            "easeOutBack",
                            "${text-12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            3915,
                            325,
                            "linear",
                            "${text-12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid53",
                            "opacity",
                            4145,
                            675,
                            "easeInOutQuad",
                            "${wheel2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            13075,
                            675,
                            "easeInOutQuad",
                            "${wheel2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "height",
                            4145,
                            675,
                            "easeInOutQuad",
                            "${logo}",
                            '67px',
                            '57px'
                        ],
                        [
                            "eid175",
                            "height",
                            13075,
                            675,
                            "easeInOutQuad",
                            "${logo}",
                            '57px',
                            '67px'
                        ],
                        [
                            "eid17",
                            "location",
                            650,
                            555,
                            "easeOutBack",
                            "${text-22}",
                            [[288.5, 187.5, 0, 0, 0, 0,0],[149.5, 187.5, 0, 0, 0, 0,139]]
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${text-22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            650,
                            0,
                            "easeOutBack",
                            "${text-22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            4240,
                            0,
                            "easeOutBack",
                            "${text-22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "opacity",
                            10035,
                            460,
                            "easeOutBack",
                            "${text-s-22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            12750,
                            328,
                            "easeOutQuad",
                            "${text-s-22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "location",
                            4145,
                            675,
                            "easeInOutQuad",
                            "${wheel--logo2}",
                            [[-109.34, 209.34, 0, 0, 0, 0,0],[20.66, 209.5, 0, 0, 0, 0,130]]
                        ],
                        [
                            "eid187",
                            "location",
                            13075,
                            675,
                            "easeInOutQuad",
                            "${wheel--logo2}",
                            [[20.66, 209.5, 0, 0, 0, 0,0],[-109.34, 209.34, 0, 0, 0, 0,130]]
                        ],
                        [
                            "eid49",
                            "location",
                            4145,
                            675,
                            "easeInOutQuad",
                            "${wheel2}",
                            [[-109.34, 209.34, 0, 0, 0, 0,0],[20.66, 209.5, 0, 0, 0, 0,130]]
                        ],
                        [
                            "eid182",
                            "location",
                            13075,
                            675,
                            "easeInOutQuad",
                            "${wheel2}",
                            [[20.66, 209.5, 0, 0, 0, 0,0],[-109.34, 209.34, 0, 0, 0, 0,130]]
                        ],
                        [
                            "eid67",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${arr-12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            4795,
                            0,
                            "easeInOutQuad",
                            "${arr-12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid201",
                            "display",
                            13075,
                            0,
                            "easeInOutQuad",
                            "${arr-12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${text-12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            95,
                            0,
                            "easeOutBack",
                            "${text-12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            4240,
                            0,
                            "easeOutBack",
                            "${text-12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "opacity",
                            10425,
                            460,
                            "easeOutBack",
                            "${text-s-32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            12750,
                            328,
                            "easeOutQuad",
                            "${text-s-32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${text-s-12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            9630,
                            0,
                            "easeOutQuad",
                            "${text-s-12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "display",
                            13078,
                            0,
                            "easeOutQuad",
                            "${text-s-12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "location",
                            10425,
                            460,
                            "easeOutBack",
                            "${text-s-32}",
                            [[298, 144, 0, 0, 0, 0,0],[248, 144, 0, 0, 0, 0,50]]
                        ],
                        [
                            "eid85",
                            "opacity",
                            4960,
                            510,
                            "easeOutQuad",
                            "${text-b-13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            8780,
                            350,
                            "easeOutQuad",
                            "${text-b-13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wheel--logo2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            4145,
                            0,
                            "easeInOutQuad",
                            "${wheel--logo2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            13075,
                            0,
                            "easeInOutQuad",
                            "${wheel--logo2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid199",
                            "display",
                            13750,
                            0,
                            "easeInOutQuad",
                            "${wheel--logo2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${text-b-22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            9195,
                            0,
                            "easeInOutQuad",
                            "${text-b-22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            13075,
                            0,
                            "easeInOutQuad",
                            "${text-b-22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "opacity",
                            9195,
                            350,
                            "easeOutQuad",
                            "${text-b-22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid196",
                            "opacity",
                            12750,
                            325,
                            "easeInOutQuad",
                            "${text-b-22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${arr-22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            9195,
                            0,
                            "easeInOutQuad",
                            "${arr-22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            9681,
                            0,
                            "easeInOutQuad",
                            "${arr-22}",
                            'block',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            10167,
                            0,
                            "easeInOutQuad",
                            "${arr-22}",
                            'block',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            10653,
                            0,
                            "easeInOutQuad",
                            "${arr-22}",
                            'block',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            11138,
                            0,
                            "easeInOutQuad",
                            "${arr-22}",
                            'block',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            11624,
                            0,
                            "easeInOutQuad",
                            "${arr-22}",
                            'block',
                            'block'
                        ],
                        [
                            "eid202",
                            "display",
                            13079,
                            0,
                            "easeInOutQuad",
                            "${arr-22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "width",
                            4145,
                            675,
                            "easeInOutQuad",
                            "${logo}",
                            '216px',
                            '186px'
                        ],
                        [
                            "eid176",
                            "width",
                            13075,
                            675,
                            "easeInOutQuad",
                            "${logo}",
                            '186px',
                            '216px'
                        ],
                        [
                            "eid128",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${text-s-32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            10425,
                            0,
                            "easeOutQuad",
                            "${text-s-32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            13078,
                            0,
                            "easeOutQuad",
                            "${text-s-32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "opacity",
                            650,
                            555,
                            "easeOutBack",
                            "${text-22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            3915,
                            325,
                            "linear",
                            "${text-22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "location",
                            4145,
                            675,
                            "easeInOutQuad",
                            "${logo}",
                            [[150, 52.5, 0, 0, 0, 0,0],[195, 40.5, 0, 0, 0, 0,46.57]]
                        ],
                        [
                            "eid174",
                            "location",
                            13075,
                            675,
                            "easeInOutQuad",
                            "${logo}",
                            [[195, 40.5, 0, 0, 0, 0,0],[150, 52.5, 0, 0, 0, 0,46.57]]
                        ],
                        [
                            "eid35",
                            "location",
                            4145,
                            675,
                            "easeInOutQuad",
                            "${bg_blue_300}",
                            [[150, 125, 0, 0, 0, 0,0],[179, 125, 0, 0, 0, 0,29]]
                        ],
                        [
                            "eid190",
                            "location",
                            13075,
                            675,
                            "easeInOutQuad",
                            "${bg_blue_300}",
                            [[179, 125, 0, 0, 0, 0,0],[150, 125, 0, 0, 0, 0,29]]
                        ],
                        [
                            "eid203",
                            "location",
                            13865,
                            0,
                            "easeInOutQuad",
                            "${bg_blue_300}",
                            [[150, 125, 0, 0, 0, 0,0],[150, 125, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid52",
                            "opacity",
                            4145,
                            675,
                            "easeInOutQuad",
                            "${wheel--logo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid188",
                            "opacity",
                            13075,
                            675,
                            "easeInOutQuad",
                            "${wheel--logo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${text-s-22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            10035,
                            0,
                            "easeOutQuad",
                            "${text-s-22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            13078,
                            0,
                            "easeOutQuad",
                            "${text-s-22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "opacity",
                            4795,
                            675,
                            "easeOutQuad",
                            "${arr-12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            12750,
                            325,
                            "easeInOutQuad",
                            "${arr-12}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("300x250_edgeActions.js");
})("EDGE-2081949590");
