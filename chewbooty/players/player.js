// setup 
const data = {
  labels: ['TB1', 'TB2', 'TB3', 'TB4', 'TB5', 'TB6', 'TB7', 'TB8', 'TB9', 'TB10', 'TB11', ],
  datasets: [ {
    label: 'Guild Average - Waves',
    data: ['19.918367346938776', '22.612244897959183', '20.6734693877551', '23.020408163265305', '22.6', '25.82', '23.82', '23.18', '24.86', '24.86', '25.26', ],
    borderColor:  'rgb(0, 0, 0)',
    backgroundColor:  'rgb(0, 0, 0)',
    pointRadius: 10,
    hidden: false,
},{
    label: 'Guild Average - Attempts',
    data: ['15.387755102040817', '16.448979591836736', '15.673469387755102', '17.081632653061224', '16.84', '19.2', '17.54', '17.12', '18.36', '18.36', '18.02', ],
    borderColor:  'rgb(0, 0, 0)',
    pointRadius: 10,
    backgroundColor:  'rgb(0, 0, 0)',
    hidden: true,
},
 {
    label: '8',
    data: ['0', '4', '0', '1', '0', '0', '8', '11', '8', '8', '9', ],
    backgroundColor:  'rgb(68, 41, 171)',
    borderColor:  'rgb(68, 41, 171)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'A1Savage',
    data: ['0', '0', '0', '0', '5', '4', '2', '5', '0', '0', '7', ],
    backgroundColor:  'rgb(33, 165, 150)',
    borderColor:  'rgb(33, 165, 150)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Aceth',
    data: ['17', '19', '7', '9', '6', '18', '9', '5', '7', '7', '11', ],
    backgroundColor:  'rgb(59, 106, 158)',
    borderColor:  'rgb(59, 106, 158)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Akbahr',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '36', ],
    backgroundColor:  'rgb(246, 20, 100)',
    borderColor:  'rgb(246, 20, 100)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Bobandy',
    data: ['31', '30', '33', '24', '35', '29', '31', '45', '35', '35', '39', ],
    backgroundColor:  'rgb(51, 172, 115)',
    borderColor:  'rgb(51, 172, 115)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'C2',
    data: ['18', '24', '23', '26', '20', '36', '24', '27', '16', '16', '27', ],
    backgroundColor:  'rgb(158, 187, 72)',
    borderColor:  'rgb(158, 187, 72)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'CT69420',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '1', ],
    backgroundColor:  'rgb(138, 11, 140)',
    borderColor:  'rgb(138, 11, 140)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Daggo',
    data: ['6', '19', '21', '26', '14', '25', '23', '11', '32', '32', '28', ],
    backgroundColor:  'rgb(53, 154, 248)',
    borderColor:  'rgb(53, 154, 248)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Digolo Doorjam',
    data: ['2', '6', '5', '3', '4', '6', '3', '3', '4', '4', '4', ],
    backgroundColor:  'rgb(220, 55, 179)',
    borderColor:  'rgb(220, 55, 179)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'DocWho619',
    data: ['0', '7', '9', '5', '0', '6', '8', '3', '1', '1', '4', ],
    backgroundColor:  'rgb(60, 141, 99)',
    borderColor:  'rgb(60, 141, 99)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'DonKeyHoeTae',
    data: ['14', '25', '23', '16', '4', '10', '7', '25', '31', '31', '32', ],
    backgroundColor:  'rgb(207, 120, 225)',
    borderColor:  'rgb(207, 120, 225)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Excelsior 101',
    data: ['1', '4', '0', '2', '4', '5', '6', '2', '5', '5', '4', ],
    backgroundColor:  'rgb(140, 136, 194)',
    borderColor:  'rgb(140, 136, 194)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Falen Lacer',
    data: ['23', '25', '21', '23', '22', '19', '25', '24', '23', '23', '23', ],
    backgroundColor:  'rgb(64, 70, 229)',
    borderColor:  'rgb(64, 70, 229)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'FateHydro',
    data: ['20', '30', '24', '28', '30', '39', '35', '40', '36', '36', '44', ],
    backgroundColor:  'rgb(215, 111, 61)',
    borderColor:  'rgb(215, 111, 61)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Grogu',
    data: ['11', '11', '14', '0', '0', '2', '2', '0', '0', '0', '2', ],
    backgroundColor:  'rgb(194, 107, 211)',
    borderColor:  'rgb(194, 107, 211)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'ItzBerndern',
    data: ['65', '65', '66', '73', '69', '61', '22', '43', '39', '39', '61', ],
    backgroundColor:  'rgb(21, 27, 184)',
    borderColor:  'rgb(21, 27, 184)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'JangosJuggs',
    data: ['2', '3', '3', '2', '2', '4', '2', '5', '4', '4', '3', ],
    backgroundColor:  'rgb(224, 175, 16)',
    borderColor:  'rgb(224, 175, 16)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Laseracid',
    data: ['16', '23', '19', '18', '16', '33', '14', '17', '25', '25', '10', ],
    backgroundColor:  'rgb(84, 41, 128)',
    borderColor:  'rgb(84, 41, 128)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mc',
    data: ['36', '32', '25', '32', '25', '34', '29', '34', '36', '36', '32', ],
    backgroundColor:  'rgb(83, 122, 85)',
    borderColor:  'rgb(83, 122, 85)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mega Kicagemon',
    data: ['86', '80', '79', '88', '80', '87', '106', '90', '92', '92', '103', ],
    backgroundColor:  'rgb(231, 172, 246)',
    borderColor:  'rgb(231, 172, 246)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'MINI Mace Dymond',
    data: ['41', '44', '37', '42', '45', '40', '58', '44', '55', '55', '55', ],
    backgroundColor:  'rgb(75, 182, 69)',
    borderColor:  'rgb(75, 182, 69)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'MINIxur'kthan',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '44', ],
    backgroundColor:  'rgb(15, 128, 110)',
    borderColor:  'rgb(15, 128, 110)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mr Blargh',
    data: ['4', '10', '10', '8', '7', '12', '12', '12', '8', '8', '6', ],
    backgroundColor:  'rgb(30, 220, 162)',
    borderColor:  'rgb(30, 220, 162)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Mugami Chinzano',
    data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', ],
    backgroundColor:  'rgb(248, 139, 241)',
    borderColor:  'rgb(248, 139, 241)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'N7 Tesla',
    data: ['25', '37', '33', '41', '34', '34', '36', '23', '34', '34', '36', ],
    backgroundColor:  'rgb(94, 28, 214)',
    borderColor:  'rgb(94, 28, 214)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'OhMyPretzel',
    data: ['37', '38', '22', '24', '24', '40', '42', '34', '27', '27', '27', ],
    backgroundColor:  'rgb(179, 39, 27)',
    borderColor:  'rgb(179, 39, 27)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'pablomash',
    data: ['4', '4', '0', '2', '0', '3', '8', '3', '1', '1', '3', ],
    backgroundColor:  'rgb(231, 75, 93)',
    borderColor:  'rgb(231, 75, 93)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'PaulB086',
    data: ['3', '8', '10', '10', '11', '11', '20', '17', '18', '18', '16', ],
    backgroundColor:  'rgb(108, 29, 78)',
    borderColor:  'rgb(108, 29, 78)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Pflapjack',
    data: ['2', '5', '0', '4', '2', '6', '2', '8', '4', '4', '0', ],
    backgroundColor:  'rgb(101, 167, 162)',
    borderColor:  'rgb(101, 167, 162)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Philadelphia Collins',
    data: ['47', '56', '45', '53', '52', '53', '49', '59', '67', '67', '65', ],
    backgroundColor:  'rgb(97, 53, 155)',
    borderColor:  'rgb(97, 53, 155)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Ransom23',
    data: ['9', '19', '15', '38', '38', '38', '34', '32', '32', '32', '37', ],
    backgroundColor:  'rgb(193, 99, 163)',
    borderColor:  'rgb(193, 99, 163)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Reaper1010',
    data: ['16', '30', '33', '32', '23', '38', '38', '41', '41', '41', '33', ],
    backgroundColor:  'rgb(19, 73, 126)',
    borderColor:  'rgb(19, 73, 126)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Rensalaer',
    data: ['20', '19', '22', '13', '6', '17', '10', '20', '5', '5', '0', ],
    backgroundColor:  'rgb(191, 27, 145)',
    borderColor:  'rgb(191, 27, 145)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Rh Factor',
    data: ['0', '0', '4', '0', '9', '17', '3', '0', '0', '0', '0', ],
    backgroundColor:  'rgb(249, 59, 185)',
    borderColor:  'rgb(249, 59, 185)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'rockoffanddie',
    data: ['19', '23', '24', '25', '27', '33', '32', '31', '29', '29', '34', ],
    backgroundColor:  'rgb(20, 145, 236)',
    borderColor:  'rgb(20, 145, 236)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 's0da p0pinski',
    data: ['49', '58', '53', '54', '69', '62', '65', '56', '64', '64', '72', ],
    backgroundColor:  'rgb(133, 204, 20)',
    borderColor:  'rgb(133, 204, 20)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Saki',
    data: ['0', '0', '2', '2', '0', '15', '5', '10', '29', '29', '24', ],
    backgroundColor:  'rgb(96, 88, 26)',
    borderColor:  'rgb(96, 88, 26)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Salvare',
    data: ['24', '21', '13', '9', '32', '30', '28', '26', '36', '36', '29', ],
    backgroundColor:  'rgb(239, 235, 165)',
    borderColor:  'rgb(239, 235, 165)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'SecretId',
    data: ['0', '0', '0', '0', '3', '6', '3', '3', '2', '2', '5', ],
    backgroundColor:  'rgb(44, 181, 151)',
    borderColor:  'rgb(44, 181, 151)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'SithKebab',
    data: ['70', '57', '55', '84', '99', '66', '77', '62', '51', '51', '69', ],
    backgroundColor:  'rgb(112, 245, 137)',
    borderColor:  'rgb(112, 245, 137)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Skcampy',
    data: ['2', '5', '1', '12', '8', '16', '6', '8', '31', '31', '22', ],
    backgroundColor:  'rgb(171, 89, 119)',
    borderColor:  'rgb(171, 89, 119)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'TheMonkeyBuddha',
    data: ['0', '0', '0', '10', '15', '14', '14', '17', '17', '17', '16', ],
    backgroundColor:  'rgb(73, 206, 58)',
    borderColor:  'rgb(73, 206, 58)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Thessa Odai',
    data: ['0', '0', '0', '0', '0', '0', '15', '9', '2', '2', '11', ],
    backgroundColor:  'rgb(142, 251, 206)',
    borderColor:  'rgb(142, 251, 206)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Trate Daxson',
    data: ['6', '4', '8', '4', '10', '10', '6', '9', '5', '5', '11', ],
    backgroundColor:  'rgb(10, 140, 238)',
    borderColor:  'rgb(10, 140, 238)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Uhrrr ahhrrr aaargh',
    data: ['5', '11', '7', '3', '14', '12', '13', '14', '9', '9', '7', ],
    backgroundColor:  'rgb(221, 8, 32)',
    borderColor:  'rgb(221, 8, 32)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Wabba Dejabba',
    data: ['26', '31', '33', '26', '32', '50', '46', '39', '44', '44', '40', ],
    backgroundColor:  'rgb(164, 98, 177)',
    borderColor:  'rgb(164, 98, 177)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Yania May',
    data: ['18', '39', '34', '40', '31', '21', '9', '2', '18', '18', '13', ],
    backgroundColor:  'rgb(30, 33, 14)',
    borderColor:  'rgb(30, 33, 14)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Yodizzle',
    data: ['0', '0', '26', '26', '29', '35', '4', '26', '31', '31', '15', ],
    backgroundColor:  'rgb(4, 206, 233)',
    borderColor:  'rgb(4, 206, 233)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Zazztrain',
    data: ['62', '54', '53', '57', '55', '59', '67', '56', '68', '68', '58', ],
    backgroundColor:  'rgb(118, 143, 69)',
    borderColor:  'rgb(118, 143, 69)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Zick',
    data: ['25', '28', '22', '25', '24', '27', '28', '27', '37', '37', '35', ],
    backgroundColor:  'rgb(246, 198, 42)',
    borderColor:  'rgb(246, 198, 42)',
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
