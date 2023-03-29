// setup 
const data = {
  labels: ['Jonesmalones', 'Skaar', 'XCAL', 'Tranced', 'Blattu', 'Delara Exibil', 'Javin Fis', 'G4reth', 'Hego Damask', 'Trask droll', 'Patrick4', 'RoTahn Taske', 'ArtVandalay', 'Puck', 'Nomad', 'MINI DarthAzazel', 'Fidget92', 'DarthDax', 'Marl Jewel', 'Username', 'WharfRat', 'Jeeves', 'Lambert', 'JHang', 'Ravened Stormchaser', 'non7top', 'Zarlis Rahn', 'Excessive Fist', 'BobbyMarshal', 'Squanchy420', 'Quinlan Vos', 'Tani Mayse', 'Tyrian', 'Rhil Margos', 'Verage Valoor', 'Geralt of Rivia', 'OwningXylophone', 'Chikiller', 'JediScum', 'Galatea', 'JediAhsoka', 'Calaveylon Kwai', 'Kerrin TyrianBSE', 'Taco Hat', 'Kdizyl', 'Scof', 'Avatany', 'Darrow Starfall', 'Anci', 'Winddancer', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['79', '74', '72', '67', '67', '65', '61', '59', '58', '58', '55', '52', '52', '51', '51', '51', '50', '50', '50', '48', '46', '46', '44', '42', '41', '41', '38', '37', '36', '36', '36', '34', '33', '32', '30', '29', '28', '27', '26', '25', '24', '20', '19', '18', '17', '17', '15', '13', '9', '0', ],
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
    data: ['55', '52', '56', '54', '56', '49', '50', '48', '56', '55', '46', '54', '43', '51', '46', '49', '45', '53', '51', '46', '47', '46', '45', '39', '46', '40', '34', '30', '34', '38', '43', '48', '34', '43', '37', '41', '41', '41', '36', '35', '20', '38', '27', '29', '30', '23', '15', '8', '24', '0', ],
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
    data: ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '5', '6', '6', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '6', '6', '6', '6', '5', '6', '1', ],
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
    data: ['33', '24', '34', '11', '11', '14', '4', '1', '18', '19', '13', '12', '3', '10', '11', '8', '6', '27', '4', '15', '10', '16', '4', '10', '8', '6', '0', '3', '6', '2', '4', '6', '15', '16', '14', '8', '3', '10', '2', '3', '21', '1', '13', '4', '7', '13', '5', '11', '11', '0', ],
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
