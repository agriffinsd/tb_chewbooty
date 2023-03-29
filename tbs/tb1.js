// setup 
const data = {
  labels: ['Jonesmalones', 'Blattu', 'Hego Damask', 'Tranced', 'Javin Fis', 'XCAL', 'Skaar', 'MINI DarthAzazel', 'Trask droll', 'JHang', 'Puck', 'Delara Exibil', 'G4reth', 'DarthDax', 'Lambert', 'Jeeves', 'Username', 'Lol face', 'WharfRat', 'Marl Jewel', 'RoTahn Taske', 'ArtVandalay', 'Nomad', 'Zarlis Rahn', 'Ravened Stormchaser', 'Patrick4', 'Rhil Margos', 'Tani Mayse', 'OwningXylophone', 'Excessive Fist', 'Fidget92', 'BobbyMarshal', 'Geralt of Rivia', 'Squanchy420', 'non7top', 'Verage Valoor', 'Chikiller', 'Scof', 'Quinlan Vos', 'wilecoyotegenius', 'Tyrian', 'Taco Hat', 'Galatea', 'JediScum', 'JediAhsoka', 'Anci', 'Darrow Starfall', 'Calaveylon Kwai', 'Avatany', 'Kerrin TyrianBSE', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['71', '68', '65', '64', '63', '62', '61', '59', '59', '59', '56', '56', '56', '54', '52', '52', '51', '51', '50', '50', '50', '50', '49', '48', '47', '44', '41', '40', '40', '40', '40', '38', '38', '36', '35', '35', '34', '33', '32', '32', '29', '26', '26', '26', '23', '20', '19', '19', '18', '14', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1
  },{
    label: 'Missions Attempted',
    data: ['52', '56', '54', '54', '51', '55', '54', '50', '55', '48', '50', '50', '52', '53', '50', '50', '53', '50', '50', '51', '54', '50', '50', '49', '47', '50', '47', '52', '42', '35', '41', '38', '43', '40', '38', '40', '35', '40', '44', '47', '35', '34', '36', '32', '20', '30', '18', '38', '17', '32', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    data: ['5', '6', '5', '6', '6', '5', '4', '6', '6', '6', '6', '6', '6', '6', '5', '6', '5', '6', '6', '6', '3', '4', '6', '5', '6', '6', '4', '6', '6', '5', '4', '6', '6', '6', '5', '5', '6', '6', '4', '5', '4', '6', '5', '4', '6', '6', '4', '6', '5', '6', ],
    data: ['6', '6', '6', '6', '5', '6', '6', '6', '5', '5', '5', '6', '3', '6', '6', '6', '6', '4', '5', '6', '6', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '6', '6', '5', '5', '4', '6', '6', '5', '3', '6', '5', '6', '5', '6', '5', '5', '3', '5', '6', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Operation Units Deployed',
    data: ['8', '4', '5', '4', '1', '2', '22', '10', '3', '3', '2', '5', '0', '5', '1', '16', '2', '3', '2', '0', '2', '1', '2', '0', '1', '3', '3', '1', '1', '1', '1', '5', '0', '0', '3', '5', '1', '4', '0', '1', '5', '8', '0', '0', '7', '0', '2', '0', '0', '2', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  }]
};

// config 
const config = {
  type: 'bar',
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
