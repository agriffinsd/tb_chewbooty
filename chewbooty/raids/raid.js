// setup 
const data = {
  labels: ['11/24/2023', '12/01/2023', ],
  datasets: [ {
    label: 'Guild Average - Score',
    data: ['2651495.0', '2671465.0', ],
    borderColor:  'rgb(0, 0, 0)',
    backgroundColor:  'rgb(0, 0, 0)',
    pointRadius: 10,
    hidden: false,
},
 {
    label: '144m Guild Crate',
    data: ['2880000.0', '2880000.0', ],
    borderColor:  'rgb(64, 83, 149)',
    backgroundColor:  'rgb(64, 83, 149)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: '208m Guild Crate',
    data: ['4160000.0', '4160000.0', ],
    borderColor:  'rgb(14, 15, 159)',
    backgroundColor:  'rgb(14, 15, 159)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: '424m Guild Crate',
    data: ['8480000.0', '8480000.0', ],
    borderColor:  'rgb(54, 80, 109)',
    backgroundColor:  'rgb(54, 80, 109)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: '8',
    data: ['1720000.0', '2953500.0', ],
    borderColor:  'rgb(123, 98, 90)',
    backgroundColor:  'rgb(123, 98, 90)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'A1Savage',
    data: ['217000.0', '207000.0', ],
    borderColor:  'rgb(253, 229, 218)',
    backgroundColor:  'rgb(253, 229, 218)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Aceth',
    data: ['832250.0', '1616500.0', ],
    borderColor:  'rgb(219, 147, 98)',
    backgroundColor:  'rgb(219, 147, 98)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Akbahr',
    data: ['0.0', '5958000.0', ],
    borderColor:  'rgb(9, 154, 142)',
    backgroundColor:  'rgb(9, 154, 142)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Bobandy',
    data: ['3274250.0', '3507750.0', ],
    borderColor:  'rgb(19, 212, 120)',
    backgroundColor:  'rgb(19, 212, 120)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'C2',
    data: ['5240000.0', '6169000.0', ],
    borderColor:  'rgb(154, 94, 211)',
    backgroundColor:  'rgb(154, 94, 211)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'CT69420',
    data: ['1910000.0', '2994250.0', ],
    borderColor:  'rgb(34, 198, 89)',
    backgroundColor:  'rgb(34, 198, 89)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Daggo',
    data: ['5094500.0', '4532750.0', ],
    borderColor:  'rgb(78, 30, 90)',
    backgroundColor:  'rgb(78, 30, 90)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Digolo Doorjam',
    data: ['878500.0', '667000.0', ],
    borderColor:  'rgb(231, 134, 163)',
    backgroundColor:  'rgb(231, 134, 163)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'DocWho619',
    data: ['1737500.0', '0.0', ],
    borderColor:  'rgb(127, 205, 200)',
    backgroundColor:  'rgb(127, 205, 200)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'DonKeyHoeTae',
    data: ['6916500.0', '6031500.0', ],
    borderColor:  'rgb(47, 117, 175)',
    backgroundColor:  'rgb(47, 117, 175)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Excelsior 101',
    data: ['1060000.0', '203000.0', ],
    borderColor:  'rgb(193, 140, 143)',
    backgroundColor:  'rgb(193, 140, 143)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Falen Lacer',
    data: ['1593500.0', '1680000.0', ],
    borderColor:  'rgb(184, 115, 115)',
    backgroundColor:  'rgb(184, 115, 115)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'FateHydro',
    data: ['2524250.0', '2829250.0', ],
    borderColor:  'rgb(240, 172, 179)',
    backgroundColor:  'rgb(240, 172, 179)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Grogu',
    data: ['4198750.0', '4686500.0', ],
    borderColor:  'rgb(236, 153, 47)',
    backgroundColor:  'rgb(236, 153, 47)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'ItzBerndern',
    data: ['4052250.0', '4672500.0', ],
    borderColor:  'rgb(161, 37, 165)',
    backgroundColor:  'rgb(161, 37, 165)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'JangosJuggs',
    data: ['1140000.0', '1090500.0', ],
    borderColor:  'rgb(34, 66, 108)',
    backgroundColor:  'rgb(34, 66, 108)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Laseracid',
    data: ['123500.0', '208500.0', ],
    borderColor:  'rgb(69, 220, 94)',
    backgroundColor:  'rgb(69, 220, 94)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mc',
    data: ['300000.0', '857000.0', ],
    borderColor:  'rgb(207, 185, 160)',
    backgroundColor:  'rgb(207, 185, 160)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mega Kicagemon',
    data: ['6828000.0', '7798000.0', ],
    borderColor:  'rgb(148, 241, 26)',
    backgroundColor:  'rgb(148, 241, 26)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'MINI Mace Dymond',
    data: ['3344500.0', '3727000.0', ],
    borderColor:  'rgb(158, 56, 159)',
    backgroundColor:  'rgb(158, 56, 159)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'MINIxurkthan',
    data: ['4210750.0', '4733250.0', ],
    borderColor:  'rgb(139, 80, 168)',
    backgroundColor:  'rgb(139, 80, 168)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mr Blargh',
    data: ['436000.0', '393000.0', ],
    borderColor:  'rgb(198, 57, 180)',
    backgroundColor:  'rgb(198, 57, 180)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mugami Chinzano',
    data: ['3486000.0', '0.0', ],
    borderColor:  'rgb(130, 149, 11)',
    backgroundColor:  'rgb(130, 149, 11)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'N7 Tesla',
    data: ['1655000.0', '2289000.0', ],
    borderColor:  'rgb(162, 176, 142)',
    backgroundColor:  'rgb(162, 176, 142)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'OhMyPretzel',
    data: ['2518250.0', '2197000.0', ],
    borderColor:  'rgb(29, 205, 127)',
    backgroundColor:  'rgb(29, 205, 127)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'pablomash',
    data: ['3208500.0', '3045000.0', ],
    borderColor:  'rgb(134, 128, 89)',
    backgroundColor:  'rgb(134, 128, 89)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'PaulB086',
    data: ['2182000.0', '2626000.0', ],
    borderColor:  'rgb(187, 160, 221)',
    backgroundColor:  'rgb(187, 160, 221)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Pflapjack',
    data: ['3259500.0', '3321750.0', ],
    borderColor:  'rgb(89, 211, 10)',
    backgroundColor:  'rgb(89, 211, 10)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Philadelphia Collins',
    data: ['3730250.0', '3945250.0', ],
    borderColor:  'rgb(77, 242, 198)',
    backgroundColor:  'rgb(77, 242, 198)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Ransom23',
    data: ['1774500.0', '2162750.0', ],
    borderColor:  'rgb(218, 140, 134)',
    backgroundColor:  'rgb(218, 140, 134)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Reaper1010',
    data: ['1480500.0', '681500.0', ],
    borderColor:  'rgb(66, 62, 65)',
    backgroundColor:  'rgb(66, 62, 65)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Rensalaer',
    data: ['3098500.0', '3822000.0', ],
    borderColor:  'rgb(60, 32, 167)',
    backgroundColor:  'rgb(60, 32, 167)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Rh Factor',
    data: ['906500.0', '669000.0', ],
    borderColor:  'rgb(40, 215, 127)',
    backgroundColor:  'rgb(40, 215, 127)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'rockoffanddie',
    data: ['2067500.0', '2730250.0', ],
    borderColor:  'rgb(119, 245, 151)',
    backgroundColor:  'rgb(119, 245, 151)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 's0da p0pinski',
    data: ['6216000.0', '6447000.0', ],
    borderColor:  'rgb(39, 214, 153)',
    backgroundColor:  'rgb(39, 214, 153)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Saki',
    data: ['1626500.0', '1530750.0', ],
    borderColor:  'rgb(161, 57, 160)',
    backgroundColor:  'rgb(161, 57, 160)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Salvare',
    data: ['2897250.0', '3263500.0', ],
    borderColor:  'rgb(122, 141, 124)',
    backgroundColor:  'rgb(122, 141, 124)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'SecretId',
    data: ['1202500.0', '1093500.0', ],
    borderColor:  'rgb(214, 221, 151)',
    backgroundColor:  'rgb(214, 221, 151)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'SithKebab',
    data: ['7642500.0', '1998000.0', ],
    borderColor:  'rgb(84, 139, 2)',
    backgroundColor:  'rgb(84, 139, 2)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Skcampy',
    data: ['1838500.0', '1729500.0', ],
    borderColor:  'rgb(34, 149, 83)',
    backgroundColor:  'rgb(34, 149, 83)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'TheMonkeyBuddha',
    data: ['3091500.0', '2734500.0', ],
    borderColor:  'rgb(28, 124, 63)',
    backgroundColor:  'rgb(28, 124, 63)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Thessa Odai',
    data: ['1094000.0', '675500.0', ],
    borderColor:  'rgb(197, 116, 176)',
    backgroundColor:  'rgb(197, 116, 176)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Trate Daxson',
    data: ['966750.0', '2016500.0', ],
    borderColor:  'rgb(61, 182, 253)',
    backgroundColor:  'rgb(61, 182, 253)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Uhrrr ahhrrr aaargh',
    data: ['201500.0', '436500.0', ],
    borderColor:  'rgb(46, 253, 38)',
    backgroundColor:  'rgb(46, 253, 38)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Wabba Dejabba',
    data: ['1155000.0', '1582000.0', ],
    borderColor:  'rgb(18, 77, 42)',
    backgroundColor:  'rgb(18, 77, 42)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Yania May',
    data: ['3360500.0', '419000.0', ],
    borderColor:  'rgb(87, 108, 12)',
    backgroundColor:  'rgb(87, 108, 12)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Yodizzle',
    data: ['2687750.0', '2187250.0', ],
    borderColor:  'rgb(98, 174, 175)',
    backgroundColor:  'rgb(98, 174, 175)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Zazztrain',
    data: ['7946000.0', '9413000.0', ],
    borderColor:  'rgb(17, 220, 39)',
    backgroundColor:  'rgb(17, 220, 39)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Zick',
    data: ['3649500.0', '3041500.0', ],
    borderColor:  'rgb(149, 240, 4)',
    backgroundColor:  'rgb(149, 240, 4)',
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
