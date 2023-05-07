// setup 
const data = {
  labels: ['TB1', 'TB2', 'TB3', 'TB4', 'TB5', 'TB6', 'TB7', 'TB8', 'TB9', 'TB10', 'TB11', ],
  datasets: [ {
    label: 'Guild Average - Waves',
    data: ['43.62', '42.204081632653065', '40.58', '43.9', '47.64', '49.02', '50.40816326530612', '49.8', '51.38', '49.44', '53.28', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: false,
},{
    label: 'Guild Average - Attempts',
    data: ['44.24', '38.83673469387755', '40.54', '42.54', '40.8', '40.6', '41.38775510204081', '40.3', '39.64', '40.54', '41.7', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: true,
},
 {
    label: 'ArtVandalay',
    data: ['50', '63', '52', '55', '56', '67', '70', '66', '62', '58', '52', ],
    borderColor:  'rgb(119, 34, 19)',
    hidden: true,
},
 {
    label: 'Avatany',
    data: ['18', '10', '15', '29', '14', '30', '24', '33', '27', '36', '33', ],
    borderColor:  'rgb(190, 126, 202)',
    hidden: true,
},
 {
    label: 'Blattu',
    data: ['68', '78', '67', '74', '76', '82', '88', '91', '97', '87', '91', ],
    borderColor:  'rgb(140, 201, 99)',
    hidden: true,
},
 {
    label: 'BobaChuck91',
    data: ['0', '0', '0', '0', '0', '0', '0', '41', '42', '26', '43', ],
    borderColor:  'rgb(58, 78, 154)',
    hidden: true,
},
 {
    label: 'BobbyMarshal',
    data: ['38', '26', '36', '43', '42', '43', '43', '37', '35', '46', '52', ],
    borderColor:  'rgb(218, 228, 238)',
    hidden: true,
},
 {
    label: 'Chikiller',
    data: ['34', '37', '27', '25', '42', '41', '36', '35', '42', '53', '53', ],
    borderColor:  'rgb(241, 82, 11)',
    hidden: true,
},
 {
    label: 'DarthDax',
    data: ['54', '51', '50', '39', '56', '60', '48', '56', '47', '56', '80', ],
    borderColor:  'rgb(192, 185, 240)',
    hidden: true,
},
 {
    label: 'DarthRevanNL',
    data: ['0', '0', '0', '0', '0', '0', '38', '17', '21', '16', '27', ],
    borderColor:  'rgb(119, 218, 81)',
    hidden: true,
},
 {
    label: 'Delara Exibil',
    data: ['56', '47', '65', '51', '63', '61', '75', '77', '77', '70', '76', ],
    borderColor:  'rgb(66, 4, 86)',
    hidden: true,
},
 {
    label: 'Dârth Jungle Asian',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '48', '52', ],
    borderColor:  'rgb(71, 55, 3)',
    hidden: true,
},
 {
    label: 'El Jefe',
    data: ['0', '0', '0', '39', '46', '53', '48', '52', '54', '43', '47', ],
    borderColor:  'rgb(28, 153, 112)',
    hidden: true,
},
 {
    label: 'Enigma',
    data: ['0', '0', '0', '0', '0', '0', '0', '83', '86', '78', '77', ],
    borderColor:  'rgb(157, 36, 180)',
    hidden: true,
},
 {
    label: 'Excessive Fist',
    data: ['40', '23', '37', '38', '33', '32', '31', '25', '29', '30', '25', ],
    borderColor:  'rgb(81, 130, 66)',
    hidden: true,
},
 {
    label: 'Fidget92',
    data: ['40', '42', '50', '46', '43', '46', '57', '52', '58', '45', '38', ],
    borderColor:  'rgb(174, 173, 5)',
    hidden: true,
},
 {
    label: 'G4reth',
    data: ['56', '56', '59', '60', '57', '61', '65', '72', '69', '67', '70', ],
    borderColor:  'rgb(71, 248, 140)',
    hidden: true,
},
 {
    label: 'Geralt of Rivia',
    data: ['38', '29', '29', '29', '33', '37', '30', '23', '19', '36', '35', ],
    borderColor:  'rgb(80, 106, 214)',
    hidden: true,
},
 {
    label: 'Javin Fis',
    data: ['63', '59', '61', '62', '73', '72', '75', '64', '66', '71', '74', ],
    borderColor:  'rgb(67, 199, 199)',
    hidden: true,
},
 {
    label: 'JediAhsoka',
    data: ['23', '28', '24', '28', '31', '26', '31', '33', '31', '33', '32', ],
    borderColor:  'rgb(106, 27, 88)',
    hidden: true,
},
 {
    label: 'JediScum',
    data: ['26', '26', '26', '17', '20', '14', '37', '30', '25', '25', '29', ],
    borderColor:  'rgb(201, 14, 14)',
    hidden: true,
},
 {
    label: 'Jeeves',
    data: ['52', '50', '46', '48', '50', '59', '56', '59', '66', '54', '58', ],
    borderColor:  'rgb(155, 163, 216)',
    hidden: true,
},
 {
    label: 'JHang',
    data: ['59', '46', '42', '54', '52', '52', '60', '59', '49', '34', '53', ],
    borderColor:  'rgb(234, 136, 60)',
    hidden: true,
},
 {
    label: 'Jonesmalones',
    data: ['71', '78', '79', '83', '77', '87', '77', '82', '83', '75', '76', ],
    borderColor:  'rgb(134, 12, 84)',
    hidden: true,
},
 {
    label: 'Kÿłë škÿwäłkër',
    data: ['0', '0', '0', '0', '0', '33', '46', '35', '30', '37', '44', ],
    borderColor:  'rgb(171, 83, 141)',
    hidden: true,
},
 {
    label: 'Lambert',
    data: ['52', '47', '44', '45', '47', '44', '46', '49', '42', '49', '47', ],
    borderColor:  'rgb(72, 68, 25)',
    hidden: true,
},
 {
    label: 'Marl Jewel',
    data: ['50', '52', '50', '51', '53', '51', '60', '49', '58', '48', '59', ],
    borderColor:  'rgb(223, 200, 229)',
    hidden: true,
},
 {
    label: 'MINI DarthAzazel',
    data: ['59', '54', '51', '58', '59', '53', '63', '57', '82', '58', '65', ],
    borderColor:  'rgb(87, 56, 247)',
    hidden: true,
},
 {
    label: 'Nomad',
    data: ['49', '51', '51', '51', '52', '53', '59', '57', '54', '44', '54', ],
    borderColor:  'rgb(17, 165, 54)',
    hidden: true,
},
 {
    label: 'non7top',
    data: ['35', '36', '41', '41', '52', '36', '46', '43', '38', '44', '46', ],
    borderColor:  'rgb(179, 37, 228)',
    hidden: true,
},
 {
    label: 'OwningXylophone',
    data: ['40', '27', '28', '30', '34', '32', '30', '29', '45', '41', '48', ],
    borderColor:  'rgb(140, 62, 35)',
    hidden: true,
},
 {
    label: 'Patrick4',
    data: ['44', '47', '55', '49', '59', '56', '59', '66', '63', '56', '65', ],
    borderColor:  'rgb(30, 235, 253)',
    hidden: true,
},
 {
    label: 'Puck',
    data: ['56', '50', '51', '49', '55', '57', '60', '59', '66', '66', '65', ],
    borderColor:  'rgb(242, 189, 42)',
    hidden: true,
},
 {
    label: 'Q Ryker',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '45', ],
    borderColor:  'rgb(232, 231, 159)',
    hidden: true,
},
 {
    label: 'Rhil Margos',
    data: ['41', '39', '32', '44', '47', '53', '38', '48', '53', '51', '41', ],
    borderColor:  'rgb(10, 16, 48)',
    hidden: true,
},
 {
    label: 'RoTahn Taske',
    data: ['50', '50', '52', '49', '59', '61', '64', '62', '61', '59', '65', ],
    borderColor:  'rgb(3, 160, 136)',
    hidden: true,
},
 {
    label: 'Scof',
    data: ['33', '29', '17', '27', '25', '25', '32', '30', '34', '36', '40', ],
    borderColor:  'rgb(62, 4, 127)',
    hidden: true,
},
 {
    label: 'Skaar',
    data: ['61', '71', '74', '81', '73', '75', '79', '80', '82', '76', '82', ],
    borderColor:  'rgb(218, 152, 9)',
    hidden: true,
},
 {
    label: 'Squanchy420',
    data: ['36', '35', '36', '31', '34', '35', '33', '37', '39', '36', '48', ],
    borderColor:  'rgb(252, 110, 249)',
    hidden: true,
},
 {
    label: 'T',
    data: ['0', '0', '0', '0', '64', '68', '52', '58', '62', '53', '68', ],
    borderColor:  'rgb(77, 57, 136)',
    hidden: true,
},
 {
    label: 'Taco Hat',
    data: ['26', '20', '18', '22', '23', '22', '22', '19', '21', '18', '26', ],
    borderColor:  'rgb(44, 100, 245)',
    hidden: true,
},
 {
    label: 'Tani Mayse',
    data: ['40', '37', '34', '38', '34', '38', '44', '45', '48', '41', '45', ],
    borderColor:  'rgb(152, 70, 128)',
    hidden: true,
},
 {
    label: 'thirteensuns',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '34', '46', '44', ],
    borderColor:  'rgb(49, 79, 146)',
    hidden: true,
},
 {
    label: 'Tranced',
    data: ['64', '73', '67', '72', '67', '73', '87', '86', '93', '84', '92', ],
    borderColor:  'rgb(170, 127, 93)',
    hidden: true,
},
 {
    label: 'Trask droll',
    data: ['59', '56', '58', '44', '56', '68', '70', '59', '68', '60', '67', ],
    borderColor:  'rgb(29, 47, 77)',
    hidden: true,
},
 {
    label: 'Tyrian',
    data: ['29', '25', '33', '31', '34', '37', '38', '30', '31', '27', '31', ],
    borderColor:  'rgb(73, 181, 224)',
    hidden: true,
},
 {
    label: 'Username',
    data: ['51', '51', '48', '51', '64', '65', '48', '62', '48', '58', '44', ],
    borderColor:  'rgb(96, 238, 67)',
    hidden: true,
},
 {
    label: 'Verage Valoor',
    data: ['35', '36', '30', '35', '36', '32', '35', '34', '36', '35', '37', ],
    borderColor:  'rgb(159, 229, 122)',
    hidden: true,
},
 {
    label: 'WharfRat',
    data: ['50', '46', '46', '50', '43', '49', '54', '53', '56', '47', '53', ],
    borderColor:  'rgb(23, 156, 107)',
    hidden: true,
},
 {
    label: 'XCAL',
    data: ['62', '85', '72', '75', '80', '84', '88', '87', '95', '80', '85', ],
    borderColor:  'rgb(126, 220, 133)',
    hidden: true,
},
 {
    label: 'Yosh',
    data: ['0', '0', '0', '29', '27', '31', '32', '24', '13', '27', '28', ],
    borderColor:  'rgb(71, 223, 163)',
    hidden: true,
},
 {
    label: 'Zarlis Rahn',
    data: ['48', '41', '38', '41', '44', '58', '45', '64', '67', '52', '57', ],
    borderColor:  'rgb(126, 136, 244)',
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
