// setup 
const data = {
  labels: ['TB1', 'TB2', 'TB3', 'TB4', 'TB5', 'TB6', 'TB7', 'TB8', 'TB9', 'TB10', 'TB11', 'TB12', ],
  datasets: [ {
    label: 'Guild Average - Waves',
    data: ['43.62', '42.204081632653065', '40.58', '43.9', '47.64', '49.02', '50.40816326530612', '49.8', '51.38', '49.44', '53.28', '52.26', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: false,
},{
    label: 'Guild Average - Attempts',
    data: ['44.24', '38.83673469387755', '40.54', '42.54', '40.8', '40.6', '41.38775510204081', '40.3', '39.64', '40.54', '41.7', '40.74', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: true,
},
 {
    label: 'ArtVandalay',
    data: ['50', '63', '52', '55', '56', '67', '70', '66', '62', '58', '52', '52', ],
    borderColor:  'rgb(186, 105, 12)',
    hidden: true,
},
 {
    label: 'Avatany',
    data: ['18', '10', '15', '29', '14', '30', '24', '33', '27', '36', '33', '28', ],
    borderColor:  'rgb(84, 252, 78)',
    hidden: true,
},
 {
    label: 'Blattu',
    data: ['68', '78', '67', '74', '76', '82', '88', '91', '97', '87', '91', '95', ],
    borderColor:  'rgb(255, 168, 162)',
    hidden: true,
},
 {
    label: 'BobaChuck91',
    data: ['0', '0', '0', '0', '0', '0', '0', '41', '42', '26', '43', '41', ],
    borderColor:  'rgb(42, 3, 197)',
    hidden: true,
},
 {
    label: 'BobbyMarshal',
    data: ['38', '26', '36', '43', '42', '43', '43', '37', '35', '46', '52', '41', ],
    borderColor:  'rgb(210, 139, 123)',
    hidden: true,
},
 {
    label: 'Chikiller',
    data: ['34', '37', '27', '25', '42', '41', '36', '35', '42', '53', '53', '59', ],
    borderColor:  'rgb(9, 64, 24)',
    hidden: true,
},
 {
    label: 'DarthDax',
    data: ['54', '51', '50', '39', '56', '60', '48', '56', '47', '56', '80', '88', ],
    borderColor:  'rgb(181, 227, 171)',
    hidden: true,
},
 {
    label: 'DarthRevanNL',
    data: ['0', '0', '0', '0', '0', '0', '38', '17', '21', '16', '27', '8', ],
    borderColor:  'rgb(171, 150, 176)',
    hidden: true,
},
 {
    label: 'Delara Exibil',
    data: ['56', '47', '65', '51', '63', '61', '75', '77', '77', '70', '76', '85', ],
    borderColor:  'rgb(24, 62, 91)',
    hidden: true,
},
 {
    label: 'Dârth Jungle Asian',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '48', '52', '58', ],
    borderColor:  'rgb(92, 77, 64)',
    hidden: true,
},
 {
    label: 'El Jefe',
    data: ['0', '0', '0', '39', '46', '53', '48', '52', '54', '43', '47', '56', ],
    borderColor:  'rgb(221, 81, 151)',
    hidden: true,
},
 {
    label: 'Enigma',
    data: ['0', '0', '0', '0', '0', '0', '0', '83', '86', '78', '77', '82', ],
    borderColor:  'rgb(28, 74, 163)',
    hidden: true,
},
 {
    label: 'Excessive Fist',
    data: ['40', '23', '37', '38', '33', '32', '31', '25', '29', '30', '25', '11', ],
    borderColor:  'rgb(153, 83, 182)',
    hidden: true,
},
 {
    label: 'Fidget92',
    data: ['40', '42', '50', '46', '43', '46', '57', '52', '58', '45', '38', '38', ],
    borderColor:  'rgb(33, 12, 55)',
    hidden: true,
},
 {
    label: 'G4reth',
    data: ['56', '56', '59', '60', '57', '61', '65', '72', '69', '67', '70', '72', ],
    borderColor:  'rgb(194, 27, 87)',
    hidden: true,
},
 {
    label: 'Geralt of Rivia',
    data: ['38', '29', '29', '29', '33', '37', '30', '23', '19', '36', '35', '40', ],
    borderColor:  'rgb(99, 4, 105)',
    hidden: true,
},
 {
    label: 'Javin Fis',
    data: ['63', '59', '61', '62', '73', '72', '75', '64', '66', '71', '74', '71', ],
    borderColor:  'rgb(56, 125, 21)',
    hidden: true,
},
 {
    label: 'JediAhsoka',
    data: ['23', '28', '24', '28', '31', '26', '31', '33', '31', '33', '32', '30', ],
    borderColor:  'rgb(99, 220, 4)',
    hidden: true,
},
 {
    label: 'JediScum',
    data: ['26', '26', '26', '17', '20', '14', '37', '30', '25', '25', '29', '0', ],
    borderColor:  'rgb(199, 12, 8)',
    hidden: true,
},
 {
    label: 'Jeeves',
    data: ['52', '50', '46', '48', '50', '59', '56', '59', '66', '54', '58', '60', ],
    borderColor:  'rgb(126, 67, 247)',
    hidden: true,
},
 {
    label: 'JHang',
    data: ['59', '46', '42', '54', '52', '52', '60', '59', '49', '34', '53', '51', ],
    borderColor:  'rgb(41, 11, 246)',
    hidden: true,
},
 {
    label: 'Jonesmalones',
    data: ['71', '78', '79', '83', '77', '87', '77', '82', '83', '75', '76', '87', ],
    borderColor:  'rgb(70, 61, 88)',
    hidden: true,
},
 {
    label: 'Kÿłë škÿwäłkër',
    data: ['0', '0', '0', '0', '0', '33', '46', '35', '30', '37', '44', '33', ],
    borderColor:  'rgb(194, 252, 82)',
    hidden: true,
},
 {
    label: 'Lambert',
    data: ['52', '47', '44', '45', '47', '44', '46', '49', '42', '49', '47', '44', ],
    borderColor:  'rgb(209, 43, 80)',
    hidden: true,
},
 {
    label: 'Marl Jewel',
    data: ['50', '52', '50', '51', '53', '51', '60', '49', '58', '48', '59', '67', ],
    borderColor:  'rgb(236, 148, 12)',
    hidden: true,
},
 {
    label: 'MINI DarthAzazel',
    data: ['59', '54', '51', '58', '59', '53', '63', '57', '82', '58', '65', '55', ],
    borderColor:  'rgb(200, 36, 181)',
    hidden: true,
},
 {
    label: 'Nomad',
    data: ['49', '51', '51', '51', '52', '53', '59', '57', '54', '44', '54', '52', ],
    borderColor:  'rgb(14, 189, 173)',
    hidden: true,
},
 {
    label: 'non7top',
    data: ['35', '36', '41', '41', '52', '36', '46', '43', '38', '44', '46', '48', ],
    borderColor:  'rgb(121, 64, 189)',
    hidden: true,
},
 {
    label: 'OwningXylophone',
    data: ['40', '27', '28', '30', '34', '32', '30', '29', '45', '41', '48', '51', ],
    borderColor:  'rgb(39, 41, 73)',
    hidden: true,
},
 {
    label: 'Patrick4',
    data: ['44', '47', '55', '49', '59', '56', '59', '66', '63', '56', '65', '66', ],
    borderColor:  'rgb(86, 203, 87)',
    hidden: true,
},
 {
    label: 'Puck',
    data: ['56', '50', '51', '49', '55', '57', '60', '59', '66', '66', '65', '69', ],
    borderColor:  'rgb(110, 23, 171)',
    hidden: true,
},
 {
    label: 'Q Ryker',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '45', '43', ],
    borderColor:  'rgb(149, 179, 104)',
    hidden: true,
},
 {
    label: 'Rhil Margos',
    data: ['41', '39', '32', '44', '47', '53', '38', '48', '53', '51', '41', '47', ],
    borderColor:  'rgb(46, 121, 176)',
    hidden: true,
},
 {
    label: 'RoTahn Taske',
    data: ['50', '50', '52', '49', '59', '61', '64', '62', '61', '59', '65', '66', ],
    borderColor:  'rgb(27, 193, 193)',
    hidden: true,
},
 {
    label: 'Scof',
    data: ['33', '29', '17', '27', '25', '25', '32', '30', '34', '36', '40', '39', ],
    borderColor:  'rgb(249, 33, 159)',
    hidden: true,
},
 {
    label: 'Skaar',
    data: ['61', '71', '74', '81', '73', '75', '79', '80', '82', '76', '82', '66', ],
    borderColor:  'rgb(156, 19, 13)',
    hidden: true,
},
 {
    label: 'Squanchy420',
    data: ['36', '35', '36', '31', '34', '35', '33', '37', '39', '36', '48', '48', ],
    borderColor:  'rgb(177, 156, 115)',
    hidden: true,
},
 {
    label: 'T',
    data: ['0', '0', '0', '0', '64', '68', '52', '58', '62', '53', '68', '69', ],
    borderColor:  'rgb(172, 60, 214)',
    hidden: true,
},
 {
    label: 'Taco Hat',
    data: ['26', '20', '18', '22', '23', '22', '22', '19', '21', '18', '26', '15', ],
    borderColor:  'rgb(197, 200, 167)',
    hidden: true,
},
 {
    label: 'Tani Mayse',
    data: ['40', '37', '34', '38', '34', '38', '44', '45', '48', '41', '45', '38', ],
    borderColor:  'rgb(237, 15, 201)',
    hidden: true,
},
 {
    label: 'thirteensuns',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '34', '46', '44', '34', ],
    borderColor:  'rgb(235, 139, 51)',
    hidden: true,
},
 {
    label: 'Tranced',
    data: ['64', '73', '67', '72', '67', '73', '87', '86', '93', '84', '92', '97', ],
    borderColor:  'rgb(133, 219, 7)',
    hidden: true,
},
 {
    label: 'Trask droll',
    data: ['59', '56', '58', '44', '56', '68', '70', '59', '68', '60', '67', '53', ],
    borderColor:  'rgb(218, 145, 50)',
    hidden: true,
},
 {
    label: 'Tyrian',
    data: ['29', '25', '33', '31', '34', '37', '38', '30', '31', '27', '31', '35', ],
    borderColor:  'rgb(208, 38, 55)',
    hidden: true,
},
 {
    label: 'Username',
    data: ['51', '51', '48', '51', '64', '65', '48', '62', '48', '58', '44', '58', ],
    borderColor:  'rgb(204, 82, 122)',
    hidden: true,
},
 {
    label: 'Verage Valoor',
    data: ['35', '36', '30', '35', '36', '32', '35', '34', '36', '35', '37', '36', ],
    borderColor:  'rgb(88, 245, 63)',
    hidden: true,
},
 {
    label: 'WharfRat',
    data: ['50', '46', '46', '50', '43', '49', '54', '53', '56', '47', '53', '52', ],
    borderColor:  'rgb(183, 246, 89)',
    hidden: true,
},
 {
    label: 'XCAL',
    data: ['62', '85', '72', '75', '80', '84', '88', '87', '95', '80', '85', '94', ],
    borderColor:  'rgb(7, 144, 127)',
    hidden: true,
},
 {
    label: 'Yosh',
    data: ['0', '0', '0', '29', '27', '31', '32', '24', '13', '27', '28', '28', ],
    borderColor:  'rgb(74, 227, 71)',
    hidden: true,
},
 {
    label: 'Zarlis Rahn',
    data: ['48', '41', '38', '41', '44', '58', '45', '64', '67', '52', '57', '57', ],
    borderColor:  'rgb(120, 48, 83)',
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
      y: {
        beginAtZero: true
      }
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
