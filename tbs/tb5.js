// setup 
const data = {
  labels: ['XCAL', 'Hego Damask', 'Jonesmalones', 'Blattu', 'Magnafael', 'Javin Fis', 'Skaar', 'Tranced', 'Username', 'T', 'Delara Exibil', 'Patrick4', 'RoTahn Taske', 'MINI DarthAzazel', 'G4reth', 'DarthDax', 'ArtVandalay', 'Trask droll', 'Puck', 'Marl Jewel', 'non7top', 'Nomad', 'JHang', 'Jeeves', 'Rhil Margos', 'Lambert', 'El Jefe', 'Zarlis Rahn', 'Fidget92', 'WharfRat', 'WinduFallen', 'BobbyMarshal', 'Chikiller', 'Verage Valoor', 'Quinlan Vos', 'Tyrian', 'Tani Mayse', 'OwningXylophone', 'Squanchy420', 'Geralt of Rivia', 'Excessive Fist', 'JediAhsoka', 'Kdizyl', 'Yosh', 'Scof', 'Taco Hat', 'LordPolunXo', 'JediScum', 'Calaveylon Kwai', 'Avatany', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['80', '78', '77', '76', '74', '73', '73', '67', '64', '64', '63', '59', '59', '59', '57', '56', '56', '56', '55', '53', '52', '52', '52', '50', '47', '47', '46', '44', '43', '43', '42', '42', '42', '36', '36', '34', '34', '34', '34', '33', '33', '31', '28', '27', '25', '23', '20', '20', '19', '14', ],
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
    data: ['56', '59', '51', '54', '55', '47', '49', '51', '48', '50', '44', '44', '53', '48', '43', '53', '42', '45', '47', '46', '42', '40', '40', '42', '46', '42', '37', '35', '40', '43', '38', '33', '43', '34', '41', '30', '46', '39', '36', '38', '29', '25', '35', '32', '30', '29', '20', '24', '34', '12', ],
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
    data: ['5', '6', '4', '6', '6', '6', '4', '6', '4', '6', '6', '4', '5', '5', '6', '6', '6', '6', '6', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '4', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '5', '6', '5', ],
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
    data: ['15', '30', '41', '7', '17', '7', '28', '26', '13', '8', '26', '18', '10', '20', '1', '25', '7', '17', '11', '14', '10', '13', '9', '13', '22', '5', '6', '0', '14', '22', '37', '9', '14', '19', '8', '16', '9', '12', '11', '19', '4', '17', '13', '2', '18', '5', '2', '1', '1', '4', ],
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
