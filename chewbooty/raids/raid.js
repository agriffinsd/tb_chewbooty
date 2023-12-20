// setup 
const data = {
  labels: ['11/24/2023', '12/01/2023', '12/14/2023', ],
  datasets: [ {
    label: 'Guild Average - Score',
    data: ['2651495.0', '2671465.0', '3126480.0', ],
    borderColor:  'rgb(0, 0, 0)',
    backgroundColor:  'rgb(0, 0, 0)',
    pointRadius: 10,
    hidden: false,
},
 {
    label: '144m Guild Crate',
    data: ['2880000.0', '2880000.0', '2880000.0', ],
    borderColor:  'rgb(114, 155, 142)',
    backgroundColor:  'rgb(114, 155, 142)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: '208m Guild Crate',
    data: ['4160000.0', '4160000.0', '4160000.0', ],
    borderColor:  'rgb(67, 58, 236)',
    backgroundColor:  'rgb(67, 58, 236)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: '424m Guild Crate',
    data: ['8480000.0', '8480000.0', '8480000.0', ],
    borderColor:  'rgb(142, 87, 117)',
    backgroundColor:  'rgb(142, 87, 117)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: '8',
    data: ['1720000.0', '2953500.0', '4614000.0', ],
    borderColor:  'rgb(193, 102, 191)',
    backgroundColor:  'rgb(193, 102, 191)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'A1Savage',
    data: ['217000.0', '207000.0', '1017500.0', ],
    borderColor:  'rgb(147, 7, 53)',
    backgroundColor:  'rgb(147, 7, 53)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Aceth',
    data: ['832250.0', '1616500.0', '1756750.0', ],
    borderColor:  'rgb(232, 231, 7)',
    backgroundColor:  'rgb(232, 231, 7)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Akbahr',
    data: ['0.0', '5958000.0', '5488500.0', ],
    borderColor:  'rgb(105, 197, 117)',
    backgroundColor:  'rgb(105, 197, 117)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Bobandy',
    data: ['3274250.0', '3507750.0', '3495250.0', ],
    borderColor:  'rgb(159, 124, 60)',
    backgroundColor:  'rgb(159, 124, 60)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'C2',
    data: ['5240000.0', '6169000.0', '7032000.0', ],
    borderColor:  'rgb(65, 95, 57)',
    backgroundColor:  'rgb(65, 95, 57)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Chelli',
    data: ['0.0', '0.0', '4999500.0', ],
    borderColor:  'rgb(233, 183, 203)',
    backgroundColor:  'rgb(233, 183, 203)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'CT69420',
    data: ['1910000.0', '2994250.0', '2743500.0', ],
    borderColor:  'rgb(35, 97, 169)',
    backgroundColor:  'rgb(35, 97, 169)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Daggo',
    data: ['5094500.0', '4532750.0', '2951500.0', ],
    borderColor:  'rgb(244, 59, 169)',
    backgroundColor:  'rgb(244, 59, 169)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Digolo Doorjam',
    data: ['878500.0', '667000.0', '1037000.0', ],
    borderColor:  'rgb(159, 84, 179)',
    backgroundColor:  'rgb(159, 84, 179)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'DocWho619',
    data: ['1737500.0', '0.0', '0.0', ],
    borderColor:  'rgb(92, 62, 138)',
    backgroundColor:  'rgb(92, 62, 138)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'DonKeyHoeTae',
    data: ['6916500.0', '6031500.0', '10766000.0', ],
    borderColor:  'rgb(51, 142, 206)',
    backgroundColor:  'rgb(51, 142, 206)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Excelsior 101',
    data: ['1060000.0', '203000.0', '0.0', ],
    borderColor:  'rgb(65, 216, 153)',
    backgroundColor:  'rgb(65, 216, 153)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Falen Lacer',
    data: ['1593500.0', '1680000.0', '1573000.0', ],
    borderColor:  'rgb(195, 66, 17)',
    backgroundColor:  'rgb(195, 66, 17)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'FateHydro',
    data: ['2524250.0', '2829250.0', '3151000.0', ],
    borderColor:  'rgb(87, 120, 112)',
    backgroundColor:  'rgb(87, 120, 112)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'ItzBerndern',
    data: ['4052250.0', '4672500.0', '4738250.0', ],
    borderColor:  'rgb(97, 112, 166)',
    backgroundColor:  'rgb(97, 112, 166)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'JangosJuggs',
    data: ['1140000.0', '1090500.0', '925500.0', ],
    borderColor:  'rgb(191, 187, 220)',
    backgroundColor:  'rgb(191, 187, 220)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Laseracid',
    data: ['123500.0', '208500.0', '1126500.0', ],
    borderColor:  'rgb(214, 13, 58)',
    backgroundColor:  'rgb(214, 13, 58)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mc',
    data: ['300000.0', '857000.0', '1107500.0', ],
    borderColor:  'rgb(209, 217, 127)',
    backgroundColor:  'rgb(209, 217, 127)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mega Kicagemon',
    data: ['6828000.0', '7798000.0', '11066500.0', ],
    borderColor:  'rgb(130, 59, 123)',
    backgroundColor:  'rgb(130, 59, 123)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'MINI Mace Dymond',
    data: ['3344500.0', '3727000.0', '3940750.0', ],
    borderColor:  'rgb(90, 190, 128)',
    backgroundColor:  'rgb(90, 190, 128)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'MINIxurkthan',
    data: ['4210750.0', '4733250.0', '3859000.0', ],
    borderColor:  'rgb(168, 43, 236)',
    backgroundColor:  'rgb(168, 43, 236)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mr Blargh',
    data: ['436000.0', '393000.0', '1286000.0', ],
    borderColor:  'rgb(106, 32, 191)',
    backgroundColor:  'rgb(106, 32, 191)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mugami Chinzano',
    data: ['3486000.0', '0.0', '2257500.0', ],
    borderColor:  'rgb(83, 120, 127)',
    backgroundColor:  'rgb(83, 120, 127)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'N7 Tesla',
    data: ['1655000.0', '2289000.0', '3521000.0', ],
    borderColor:  'rgb(32, 198, 225)',
    backgroundColor:  'rgb(32, 198, 225)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'OhMyPretzel',
    data: ['2518250.0', '2197000.0', '0.0', ],
    borderColor:  'rgb(53, 33, 244)',
    backgroundColor:  'rgb(53, 33, 244)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'pablomash',
    data: ['3208500.0', '3045000.0', '3609000.0', ],
    borderColor:  'rgb(173, 243, 153)',
    backgroundColor:  'rgb(173, 243, 153)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'PaulB086',
    data: ['2182000.0', '2626000.0', '2466000.0', ],
    borderColor:  'rgb(152, 140, 131)',
    backgroundColor:  'rgb(152, 140, 131)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Pflapjack',
    data: ['3259500.0', '3321750.0', '0.0', ],
    borderColor:  'rgb(241, 29, 22)',
    backgroundColor:  'rgb(241, 29, 22)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Philadelphia Collins',
    data: ['3730250.0', '3945250.0', '4359250.0', ],
    borderColor:  'rgb(187, 238, 228)',
    backgroundColor:  'rgb(187, 238, 228)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Ransom23',
    data: ['1774500.0', '2162750.0', '2492250.0', ],
    borderColor:  'rgb(12, 219, 192)',
    backgroundColor:  'rgb(12, 219, 192)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Reaper1010',
    data: ['1480500.0', '681500.0', '1456000.0', ],
    borderColor:  'rgb(177, 104, 19)',
    backgroundColor:  'rgb(177, 104, 19)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Rensalaer',
    data: ['3098500.0', '3822000.0', '2137500.0', ],
    borderColor:  'rgb(108, 56, 237)',
    backgroundColor:  'rgb(108, 56, 237)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Rh Factor',
    data: ['906500.0', '669000.0', '1092000.0', ],
    borderColor:  'rgb(194, 215, 117)',
    backgroundColor:  'rgb(194, 215, 117)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'rockoffanddie',
    data: ['2067500.0', '2730250.0', '2444000.0', ],
    borderColor:  'rgb(163, 18, 102)',
    backgroundColor:  'rgb(163, 18, 102)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 's0da p0pinski',
    data: ['6216000.0', '6447000.0', '6625250.0', ],
    borderColor:  'rgb(126, 252, 113)',
    backgroundColor:  'rgb(126, 252, 113)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Saki',
    data: ['1626500.0', '1530750.0', '1547750.0', ],
    borderColor:  'rgb(114, 18, 14)',
    backgroundColor:  'rgb(114, 18, 14)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Salvare',
    data: ['2897250.0', '3263500.0', '3345500.0', ],
    borderColor:  'rgb(224, 52, 189)',
    backgroundColor:  'rgb(224, 52, 189)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'SecretId',
    data: ['1202500.0', '1093500.0', '1041500.0', ],
    borderColor:  'rgb(142, 14, 51)',
    backgroundColor:  'rgb(142, 14, 51)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'SithKebab',
    data: ['7642500.0', '1998000.0', '7988500.0', ],
    borderColor:  'rgb(47, 60, 15)',
    backgroundColor:  'rgb(47, 60, 15)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Skcampy',
    data: ['1838500.0', '1729500.0', '1719500.0', ],
    borderColor:  'rgb(112, 194, 67)',
    backgroundColor:  'rgb(112, 194, 67)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'TheMonkeyBuddha',
    data: ['3091500.0', '2734500.0', '2562500.0', ],
    borderColor:  'rgb(236, 141, 251)',
    backgroundColor:  'rgb(236, 141, 251)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Thessa Odai',
    data: ['1094000.0', '675500.0', '2774750.0', ],
    borderColor:  'rgb(159, 168, 142)',
    backgroundColor:  'rgb(159, 168, 142)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Trate Daxson',
    data: ['966750.0', '2016500.0', '1369000.0', ],
    borderColor:  'rgb(105, 253, 122)',
    backgroundColor:  'rgb(105, 253, 122)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Uhrrr ahhrrr aaargh',
    data: ['201500.0', '436500.0', '2481500.0', ],
    borderColor:  'rgb(95, 103, 202)',
    backgroundColor:  'rgb(95, 103, 202)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Wabba Dejabba',
    data: ['1155000.0', '1582000.0', '2068000.0', ],
    borderColor:  'rgb(216, 106, 209)',
    backgroundColor:  'rgb(216, 106, 209)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Yania May',
    data: ['3360500.0', '419000.0', '2611500.0', ],
    borderColor:  'rgb(119, 231, 1)',
    backgroundColor:  'rgb(119, 231, 1)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Yodizzle',
    data: ['2687750.0', '2187250.0', '2903750.0', ],
    borderColor:  'rgb(104, 214, 53)',
    backgroundColor:  'rgb(104, 214, 53)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Zazztrain',
    data: ['7946000.0', '9413000.0', '8093000.0', ],
    borderColor:  'rgb(12, 83, 89)',
    backgroundColor:  'rgb(12, 83, 89)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Zick',
    data: ['3649500.0', '3041500.0', '4682000.0', ],
    borderColor:  'rgb(79, 82, 45)',
    backgroundColor:  'rgb(79, 82, 45)',
    pointRadius: 10,
    hidden: true,
},
]

};

// config 
const config = {
  type: 'line',
  data,
  options: {
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            }
        },
	    plugins: {
			tooltip: {
				mode: 'index',
				intersect: false
		    },
		}
    }

};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
