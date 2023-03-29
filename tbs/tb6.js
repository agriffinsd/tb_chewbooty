// setup 
const data = {
  labels: ['Jonesmalones', 'XCAL', 'Blattu', 'Skaar', 'Tranced', 'Javin Fis', 'Trask droll', 'T', 'ArtVandalay', 'Magnafael', 'Username', 'RoTahn Taske', 'Delara Exibil', 'G4reth', 'DarthDax', 'Jeeves', 'Zarlis Rahn', 'Puck', 'Patrick4', 'Rhil Margos', 'Nomad', 'El Jefe', 'MINI DarthAzazel', 'Hego Damask', 'JHang', 'Marl Jewel', 'WharfRat', 'Fidget92', 'Quinlan Vos', 'WinduFallen', 'Lambert', 'BobbyMarshal', 'Chikiller', 'Tani Mayse', 'Tyrian', 'Geralt of Rivia', 'non7top', 'Squanchy420', 'Kÿłë škÿwäłkër', 'OwningXylophone', 'Excessive Fist', 'Verage Valoor', 'Yosh', 'Avatany', 'JediAhsoka', 'Scof', 'Kdizyl', 'Taco Hat', 'JediScum', 'LordPolunXo', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['87', '84', '82', '75', '73', '72', '68', '68', '67', '65', '65', '61', '61', '61', '60', '59', '58', '57', '56', '53', '53', '53', '53', '52', '52', '51', '49', '46', '46', '44', '44', '43', '41', '38', '37', '37', '36', '35', '33', '32', '32', '32', '31', '30', '26', '25', '22', '22', '14', '10', ],
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
    data: ['52', '57', '55', '50', '52', '49', '53', '50', '43', '50', '49', '55', '43', '45', '54', '49', '44', '53', '45', '46', '44', '39', '40', '38', '38', '50', '41', '42', '44', '38', '43', '33', '43', '46', '33', '41', '38', '30', '26', '40', '25', '30', '34', '21', '23', '27', '35', '30', '16', '8', ],
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
    data: ['6', '5', '6', '5', '6', '6', '6', '6', '6', '5', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '4', '5', '6', '6', '6', '6', '6', '5', '6', '6', '6', '3', '6', '4', '6', '6', '6', '6', '6', '6', '6', '3', '4', ],
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
    data: ['47', '24', '11', '59', '25', '5', '24', '19', '7', '21', '13', '10', '23', '4', '27', '14', '0', '19', '31', '22', '24', '5', '17', '35', '7', '14', '9', '13', '11', '39', '8', '10', '18', '6', '25', '19', '11', '14', '2', '12', '8', '21', '3', '7', '18', '20', '9', '7', '2', '7', ],
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
