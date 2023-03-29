// setup 
const data = {
  labels: ['XCAL', 'Blattu', 'Tranced', 'Skaar', 'Jonesmalones', 'Javin Fis', 'Delara Exibil', 'ArtVandalay', 'Trask droll', 'Magnafael', 'G4reth', 'RoTahn Taske', 'MINI DarthAzazel', 'Puck', 'Marl Jewel', 'JHang', 'Patrick4', 'Nomad', 'Fidget92', 'Jeeves', 'WharfRat', 'T', 'Username', 'DarthDax', 'El Jefe', 'Kÿłë škÿwäłkër', 'Lambert', 'non7top', 'Zarlis Rahn', 'Tani Mayse', 'BobbyMarshal', 'Isaac72', 'Tyrian', 'Rhil Margos', 'DarthRevanNL', 'JediScum', 'Chikiller', 'Verage Valoor', 'Squanchy420', 'Yosh', 'Scof', 'JediAhsoka', 'Excessive Fist', 'OwningXylophone', 'Geralt of Rivia', 'Avatany', 'Kdizyl', 'Taco Hat', 'LordPolunXo', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['88', '88', '87', '79', '77', '75', '75', '70', '70', '69', '65', '64', '63', '60', '60', '60', '59', '59', '57', '56', '54', '52', '48', '48', '48', '46', '46', '46', '45', '44', '43', '40', '38', '38', '38', '37', '36', '35', '33', '32', '32', '31', '31', '30', '30', '24', '23', '22', '19', ],
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
    data: ['56', '60', '57', '51', '49', '49', '49', '46', '54', '48', '46', '57', '43', '54', '48', '41', '44', '46', '49', '48', '45', '42', '33', '41', '37', '39', '43', '40', '33', '49', '37', '37', '28', '43', '32', '38', '46', '32', '32', '35', '28', '27', '28', '41', '41', '24', '36', '31', '15', ],
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
    label: 'Number of phases deployed',
    data: ['5', '6', '6', '4', '4', '6', '6', '6', '6', '6', '6', '6', '5', '6', '5', '6', '6', '6', '6', '6', '6', '5', '4', '6', '5', '6', '6', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '5', '6', '6', '3', ],
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
    data: ['22', '15', '40', '46', '67', '10', '38', '11', '29', '25', '3', '10', '21', '17', '12', '13', '22', '24', '14', '15', '13', '8', '31', '27', '6', '3', '10', '10', '0', '6', '15', '3', '27', '24', '8', '1', '20', '26', '13', '13', '22', '17', '5', '14', '24', '7', '13', '5', '1', ],
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
