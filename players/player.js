// setup 
const data = {
  labels: ['TB1', 'TB2', 'TB3', 'TB4', 'TB5', 'TB6', 'TB7', 'TB8'],
  datasets: [ {
    label: 'Guild Average - Waves',
    data: ['1', '1', '1', '1', '1', '1', '1', '1', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: true,
},{
    label: 'Guild Average - Attempts',
    data: ['1', '1', '1', '1', '1', '1', '1', '1', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: true,
},
 {
    label: 'Delara Exibil - Waves',
    data: ['56', '47', '65', '51', '63', '61', '75', '77', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Delara Exibil - Attempts',
    data: ['50', '42', '49', '45', '44', '43', '49', '50', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Verage Valoor - Waves',
    data: ['35', '36', '30', '35', '36', '32', '35', '34', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Verage Valoor - Attempts',
    data: ['40', '34', '37', '36', '34', '30', '32', '28', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Username - Waves',
    data: ['51', '51', '48', '51', '64', '65', '48', '62', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Username - Attempts',
    data: ['53', '40', '46', '46', '48', '49', '33', '46', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Enigma - Waves',
    data: ['0', '0', '0', '0', '0', '0', '0', '83', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Enigma - Attempts',
    data: ['0', '0', '0', '0', '0', '0', '0', '55', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Javin Fis - Waves',
    data: ['63', '59', '61', '62', '73', '72', '75', '64', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Javin Fis - Attempts',
    data: ['51', '45', '50', '49', '47', '49', '49', '43', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Patrick4 - Waves',
    data: ['44', '47', '55', '49', '59', '56', '59', '66', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Patrick4 - Attempts',
    data: ['50', '47', '46', '46', '44', '45', '44', '44', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'XCAL - Waves',
    data: ['62', '85', '72', '75', '80', '84', '88', '87', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'XCAL - Attempts',
    data: ['55', '59', '56', '57', '56', '57', '56', '56', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'non7top - Waves',
    data: ['35', '36', '41', '41', '52', '36', '46', '43', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'non7top - Attempts',
    data: ['38', '37', '40', '44', '42', '38', '40', '43', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Jeeves - Waves',
    data: ['52', '50', '46', '48', '50', '59', '56', '59', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Jeeves - Attempts',
    data: ['50', '43', '46', '47', '42', '49', '48', '46', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Squanchy420 - Waves',
    data: ['36', '35', '36', '31', '34', '35', '33', '37', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Squanchy420 - Attempts',
    data: ['40', '33', '38', '34', '36', '30', '32', '30', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'El Jefe - Waves',
    data: ['0', '0', '0', '39', '46', '53', '48', '52', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'El Jefe - Attempts',
    data: ['0', '0', '0', '32', '37', '39', '37', '36', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Isaac72 - Waves',
    data: ['0', '0', '0', '0', '0', '0', '40', '46', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Isaac72 - Attempts',
    data: ['0', '0', '0', '0', '0', '0', '37', '41', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Fidget92 - Waves',
    data: ['40', '42', '50', '46', '43', '46', '57', '52', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Fidget92 - Attempts',
    data: ['41', '45', '45', '45', '40', '42', '49', '45', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Kdizyl - Waves',
    data: ['0', '0', '17', '20', '28', '22', '23', '16', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Kdizyl - Attempts',
    data: ['0', '0', '30', '33', '35', '35', '36', '33', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Avatany - Waves',
    data: ['18', '10', '15', '29', '14', '30', '24', '33', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Avatany - Attempts',
    data: ['17', '13', '15', '27', '12', '21', '24', '32', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Tyrian - Waves',
    data: ['29', '25', '33', '31', '34', '37', '38', '30', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Tyrian - Attempts',
    data: ['35', '30', '34', '31', '30', '33', '28', '26', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'JediAhsoka - Waves',
    data: ['23', '28', '24', '28', '31', '26', '31', '33', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'JediAhsoka - Attempts',
    data: ['20', '19', '20', '26', '25', '23', '27', '23', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Yosh - Waves',
    data: ['0', '0', '0', '29', '27', '31', '32', '24', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Yosh - Attempts',
    data: ['0', '0', '0', '37', '32', '34', '35', '27', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Tani Mayse - Waves',
    data: ['40', '37', '34', '38', '34', '38', '44', '45', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Tani Mayse - Attempts',
    data: ['52', '46', '48', '50', '46', '46', '49', '48', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'OwningXylophone - Waves',
    data: ['40', '27', '28', '30', '34', '32', '30', '29', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'OwningXylophone - Attempts',
    data: ['42', '35', '41', '43', '39', '40', '41', '36', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'BobbyMarshal - Waves',
    data: ['38', '26', '36', '43', '42', '43', '43', '37', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'BobbyMarshal - Attempts',
    data: ['38', '25', '34', '36', '33', '33', '37', '34', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'DarthDax - Waves',
    data: ['54', '51', '50', '39', '56', '60', '48', '56', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'DarthDax - Attempts',
    data: ['53', '49', '53', '39', '53', '54', '41', '45', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Excessive Fist - Waves',
    data: ['40', '23', '37', '38', '33', '32', '31', '25', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Excessive Fist - Attempts',
    data: ['35', '18', '30', '32', '29', '25', '28', '19', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Blattu - Waves',
    data: ['68', '78', '67', '74', '76', '82', '88', '91', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Blattu - Attempts',
    data: ['56', '51', '56', '56', '54', '55', '60', '60', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Jonesmalones - Waves',
    data: ['71', '78', '79', '83', '77', '87', '77', '82', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Jonesmalones - Attempts',
    data: ['52', '52', '55', '54', '51', '52', '49', '53', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Scof - Waves',
    data: ['33', '29', '17', '27', '25', '25', '32', '30', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Scof - Attempts',
    data: ['40', '38', '23', '27', '30', '27', '28', '28', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Rhil Margos - Waves',
    data: ['41', '39', '32', '44', '47', '53', '38', '48', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Rhil Margos - Attempts',
    data: ['47', '40', '43', '47', '46', '46', '43', '49', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Puck - Waves',
    data: ['56', '50', '51', '49', '55', '57', '60', '59', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Puck - Attempts',
    data: ['50', '46', '51', '48', '47', '53', '54', '51', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'RoTahn Taske - Waves',
    data: ['50', '50', '52', '49', '59', '61', '64', '62', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'RoTahn Taske - Attempts',
    data: ['54', '40', '54', '58', '53', '55', '57', '54', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'MINI DarthAzazel - Waves',
    data: ['59', '54', '51', '58', '59', '53', '63', '57', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'MINI DarthAzazel - Attempts',
    data: ['50', '47', '49', '50', '48', '40', '43', '47', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Tranced - Waves',
    data: ['64', '73', '67', '72', '67', '73', '87', '86', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Tranced - Attempts',
    data: ['54', '46', '54', '53', '51', '52', '57', '57', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'ArtVandalay - Waves',
    data: ['50', '63', '52', '55', '56', '67', '70', '66', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'ArtVandalay - Attempts',
    data: ['50', '45', '43', '47', '42', '43', '46', '40', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'WharfRat - Waves',
    data: ['50', '46', '46', '50', '43', '49', '54', '53', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'WharfRat - Attempts',
    data: ['50', '45', '47', '45', '43', '41', '45', '45', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Skaar - Waves',
    data: ['61', '71', '74', '81', '73', '75', '79', '80', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Skaar - Attempts',
    data: ['54', '51', '52', '52', '49', '50', '51', '51', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'DarthRevanNL - Waves',
    data: ['0', '0', '0', '0', '0', '0', '38', '17', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'DarthRevanNL - Attempts',
    data: ['0', '0', '0', '0', '0', '0', '32', '24', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Lambert - Waves',
    data: ['52', '47', '44', '45', '47', '44', '46', '49', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Lambert - Attempts',
    data: ['50', '43', '45', '44', '42', '43', '43', '44', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Trask droll - Waves',
    data: ['59', '56', '58', '44', '56', '68', '70', '59', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Trask droll - Attempts',
    data: ['55', '51', '55', '50', '45', '53', '54', '48', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Chikiller - Waves',
    data: ['34', '37', '27', '25', '42', '41', '36', '35', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Chikiller - Attempts',
    data: ['35', '43', '41', '40', '43', '43', '46', '40', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Geralt of Rivia - Waves',
    data: ['38', '29', '29', '29', '33', '37', '30', '23', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Geralt of Rivia - Attempts',
    data: ['43', '38', '41', '41', '38', '41', '41', '26', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'JHang - Waves',
    data: ['59', '46', '42', '54', '52', '52', '60', '59', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'JHang - Attempts',
    data: ['48', '41', '39', '43', '40', '38', '41', '41', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Nomad - Waves',
    data: ['49', '51', '51', '51', '52', '53', '59', '57', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Nomad - Attempts',
    data: ['50', '44', '46', '47', '40', '44', '46', '45', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'T - Waves',
    data: ['0', '0', '0', '0', '64', '68', '52', '58', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'T - Attempts',
    data: ['0', '0', '0', '0', '50', '50', '42', '45', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Marl Jewel - Waves',
    data: ['50', '52', '50', '51', '53', '51', '60', '49', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Marl Jewel - Attempts',
    data: ['51', '47', '51', '50', '46', '50', '48', '42', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'G4reth - Waves',
    data: ['56', '56', '59', '60', '57', '61', '65', '72', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'G4reth - Attempts',
    data: ['52', '46', '48', '50', '43', '45', '46', '50', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Kÿłë škÿwäłkër - Waves',
    data: ['0', '0', '0', '0', '0', '33', '46', '35', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Kÿłë škÿwäłkër - Attempts',
    data: ['0', '0', '0', '0', '0', '26', '39', '33', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'BobaChuck91 - Waves',
    data: ['0', '0', '0', '0', '0', '0', '0', '41', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'BobaChuck91 - Attempts',
    data: ['0', '0', '0', '0', '0', '0', '0', '35', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Taco Hat - Waves',
    data: ['26', '20', '18', '22', '23', '22', '22', '19', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Taco Hat - Attempts',
    data: ['34', '30', '29', '35', '29', '30', '31', '26', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'Zarlis Rahn - Waves',
    data: ['48', '41', '38', '41', '44', '58', '45', '64', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'Zarlis Rahn - Attempts',
    data: ['49', '35', '34', '38', '35', '44', '33', '45', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'LordPolunXo - Waves',
    data: ['0', '0', '0', '0', '20', '10', '19', '19', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'LordPolunXo - Attempts',
    data: ['0', '0', '0', '0', '20', '8', '15', '17', ],
    borderColor:  'rgb(200, 75, 75)',
    hidden: true,
},
 {
    label: 'JediScum - Waves',
    data: ['26', '26', '26', '17', '20', '14', '37', '30', ],
    borderColor:  'rgb(75, 200, 200)',
    hidden: true,
},{
    label: 'JediScum - Attempts',
    data: ['32', '37', '36', '28', '24', '16', '38', '33', ],
    borderColor:  'rgb(200, 75, 75)',
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
