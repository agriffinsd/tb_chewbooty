// setup 
const data = {
  labels: ['TB1', 'TB2', 'TB3', 'TB4', 'TB5', 'TB6', 'TB7', 'TB8', ],
  datasets: [ {
    label: 'Guild Average - Waves',
    data: ['43.62', '42.204081632653065', '40.58', '43.9', '47.64', '49.02', '50.40816326530612', '49.8', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: false,
},{
    label: 'Guild Average - Attempts',
    data: ['44.24', '38.83673469387755', '40.54', '42.54', '40.8', '40.6', '41.38775510204081', '40.3', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: true,
},
 {
    label: 'ArtVandalay',
    data: ['50', '63', '52', '55', '56', '67', '70', '66', ],
    borderColor:  'rgb(125, 197, 138)',
    hidden: true,
},
 {
    label: 'Avatany',
    data: ['18', '10', '15', '29', '14', '30', '24', '33', ],
    borderColor:  'rgb(155, 124, 142)',
    hidden: true,
},
 {
    label: 'Blattu',
    data: ['68', '78', '67', '74', '76', '82', '88', '91', ],
    borderColor:  'rgb(185, 202, 90)',
    hidden: true,
},
 {
    label: 'BobaChuck91',
    data: ['0', '0', '0', '0', '0', '0', '0', '41', ],
    borderColor:  'rgb(251, 172, 11)',
    hidden: true,
},
 {
    label: 'BobbyMarshal',
    data: ['38', '26', '36', '43', '42', '43', '43', '37', ],
    borderColor:  'rgb(34, 200, 196)',
    hidden: true,
},
 {
    label: 'Chikiller',
    data: ['34', '37', '27', '25', '42', '41', '36', '35', ],
    borderColor:  'rgb(246, 115, 195)',
    hidden: true,
},
 {
    label: 'DarthDax',
    data: ['54', '51', '50', '39', '56', '60', '48', '56', ],
    borderColor:  'rgb(162, 154, 41)',
    hidden: true,
},
 {
    label: 'DarthRevanNL',
    data: ['0', '0', '0', '0', '0', '0', '38', '17', ],
    borderColor:  'rgb(136, 75, 8)',
    hidden: true,
},
 {
    label: 'Delara Exibil',
    data: ['56', '47', '65', '51', '63', '61', '75', '77', ],
    borderColor:  'rgb(131, 81, 195)',
    hidden: true,
},
 {
    label: 'El Jefe',
    data: ['0', '0', '0', '39', '46', '53', '48', '52', ],
    borderColor:  'rgb(136, 182, 92)',
    hidden: true,
},
 {
    label: 'Enigma',
    data: ['0', '0', '0', '0', '0', '0', '0', '83', ],
    borderColor:  'rgb(42, 106, 160)',
    hidden: true,
},
 {
    label: 'Excessive Fist',
    data: ['40', '23', '37', '38', '33', '32', '31', '25', ],
    borderColor:  'rgb(22, 27, 254)',
    hidden: true,
},
 {
    label: 'Fidget92',
    data: ['40', '42', '50', '46', '43', '46', '57', '52', ],
    borderColor:  'rgb(175, 251, 148)',
    hidden: true,
},
 {
    label: 'G4reth',
    data: ['56', '56', '59', '60', '57', '61', '65', '72', ],
    borderColor:  'rgb(175, 200, 111)',
    hidden: true,
},
 {
    label: 'Geralt of Rivia',
    data: ['38', '29', '29', '29', '33', '37', '30', '23', ],
    borderColor:  'rgb(202, 156, 177)',
    hidden: true,
},
 {
    label: 'Isaac72',
    data: ['0', '0', '0', '0', '0', '0', '40', '46', ],
    borderColor:  'rgb(33, 168, 46)',
    hidden: true,
},
 {
    label: 'Javin Fis',
    data: ['63', '59', '61', '62', '73', '72', '75', '64', ],
    borderColor:  'rgb(101, 176, 28)',
    hidden: true,
},
 {
    label: 'JediAhsoka',
    data: ['23', '28', '24', '28', '31', '26', '31', '33', ],
    borderColor:  'rgb(234, 155, 250)',
    hidden: true,
},
 {
    label: 'JediScum',
    data: ['26', '26', '26', '17', '20', '14', '37', '30', ],
    borderColor:  'rgb(29, 27, 202)',
    hidden: true,
},
 {
    label: 'Jeeves',
    data: ['52', '50', '46', '48', '50', '59', '56', '59', ],
    borderColor:  'rgb(4, 81, 126)',
    hidden: true,
},
 {
    label: 'JHang',
    data: ['59', '46', '42', '54', '52', '52', '60', '59', ],
    borderColor:  'rgb(227, 212, 29)',
    hidden: true,
},
 {
    label: 'Jonesmalones',
    data: ['71', '78', '79', '83', '77', '87', '77', '82', ],
    borderColor:  'rgb(157, 72, 16)',
    hidden: true,
},
 {
    label: 'Kdizyl',
    data: ['0', '0', '17', '20', '28', '22', '23', '16', ],
    borderColor:  'rgb(8, 107, 45)',
    hidden: true,
},
 {
    label: 'Kÿłë škÿwäłkër',
    data: ['0', '0', '0', '0', '0', '33', '46', '35', ],
    borderColor:  'rgb(76, 3, 221)',
    hidden: true,
},
 {
    label: 'Lambert',
    data: ['52', '47', '44', '45', '47', '44', '46', '49', ],
    borderColor:  'rgb(116, 127, 254)',
    hidden: true,
},
 {
    label: 'LordPolunXo',
    data: ['0', '0', '0', '0', '20', '10', '19', '19', ],
    borderColor:  'rgb(122, 210, 101)',
    hidden: true,
},
 {
    label: 'Marl Jewel',
    data: ['50', '52', '50', '51', '53', '51', '60', '49', ],
    borderColor:  'rgb(219, 234, 156)',
    hidden: true,
},
 {
    label: 'MINI DarthAzazel',
    data: ['59', '54', '51', '58', '59', '53', '63', '57', ],
    borderColor:  'rgb(217, 128, 70)',
    hidden: true,
},
 {
    label: 'Nomad',
    data: ['49', '51', '51', '51', '52', '53', '59', '57', ],
    borderColor:  'rgb(20, 51, 245)',
    hidden: true,
},
 {
    label: 'non7top',
    data: ['35', '36', '41', '41', '52', '36', '46', '43', ],
    borderColor:  'rgb(232, 252, 171)',
    hidden: true,
},
 {
    label: 'OwningXylophone',
    data: ['40', '27', '28', '30', '34', '32', '30', '29', ],
    borderColor:  'rgb(221, 124, 216)',
    hidden: true,
},
 {
    label: 'Patrick4',
    data: ['44', '47', '55', '49', '59', '56', '59', '66', ],
    borderColor:  'rgb(34, 92, 20)',
    hidden: true,
},
 {
    label: 'Puck',
    data: ['56', '50', '51', '49', '55', '57', '60', '59', ],
    borderColor:  'rgb(99, 170, 63)',
    hidden: true,
},
 {
    label: 'Rhil Margos',
    data: ['41', '39', '32', '44', '47', '53', '38', '48', ],
    borderColor:  'rgb(148, 112, 111)',
    hidden: true,
},
 {
    label: 'RoTahn Taske',
    data: ['50', '50', '52', '49', '59', '61', '64', '62', ],
    borderColor:  'rgb(158, 112, 164)',
    hidden: true,
},
 {
    label: 'Scof',
    data: ['33', '29', '17', '27', '25', '25', '32', '30', ],
    borderColor:  'rgb(89, 1, 228)',
    hidden: true,
},
 {
    label: 'Skaar',
    data: ['61', '71', '74', '81', '73', '75', '79', '80', ],
    borderColor:  'rgb(88, 49, 2)',
    hidden: true,
},
 {
    label: 'Squanchy420',
    data: ['36', '35', '36', '31', '34', '35', '33', '37', ],
    borderColor:  'rgb(191, 174, 110)',
    hidden: true,
},
 {
    label: 'T',
    data: ['0', '0', '0', '0', '64', '68', '52', '58', ],
    borderColor:  'rgb(113, 71, 132)',
    hidden: true,
},
 {
    label: 'Taco Hat',
    data: ['26', '20', '18', '22', '23', '22', '22', '19', ],
    borderColor:  'rgb(122, 192, 222)',
    hidden: true,
},
 {
    label: 'Tani Mayse',
    data: ['40', '37', '34', '38', '34', '38', '44', '45', ],
    borderColor:  'rgb(36, 82, 131)',
    hidden: true,
},
 {
    label: 'Tranced',
    data: ['64', '73', '67', '72', '67', '73', '87', '86', ],
    borderColor:  'rgb(133, 174, 125)',
    hidden: true,
},
 {
    label: 'Trask droll',
    data: ['59', '56', '58', '44', '56', '68', '70', '59', ],
    borderColor:  'rgb(26, 136, 81)',
    hidden: true,
},
 {
    label: 'Tyrian',
    data: ['29', '25', '33', '31', '34', '37', '38', '30', ],
    borderColor:  'rgb(242, 116, 129)',
    hidden: true,
},
 {
    label: 'Username',
    data: ['51', '51', '48', '51', '64', '65', '48', '62', ],
    borderColor:  'rgb(172, 67, 142)',
    hidden: true,
},
 {
    label: 'Verage Valoor',
    data: ['35', '36', '30', '35', '36', '32', '35', '34', ],
    borderColor:  'rgb(181, 37, 169)',
    hidden: true,
},
 {
    label: 'WharfRat',
    data: ['50', '46', '46', '50', '43', '49', '54', '53', ],
    borderColor:  'rgb(8, 55, 190)',
    hidden: true,
},
 {
    label: 'XCAL',
    data: ['62', '85', '72', '75', '80', '84', '88', '87', ],
    borderColor:  'rgb(236, 40, 146)',
    hidden: true,
},
 {
    label: 'Yosh',
    data: ['0', '0', '0', '29', '27', '31', '32', '24', ],
    borderColor:  'rgb(195, 179, 97)',
    hidden: true,
},
 {
    label: 'Zarlis Rahn',
    data: ['48', '41', '38', '41', '44', '58', '45', '64', ],
    borderColor:  'rgb(123, 148, 145)',
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
