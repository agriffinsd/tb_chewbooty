// setup 
const data = {
  labels: ['Jonesmalones', 'Skaar', 'XCAL', 'Blattu', 'Tranced', 'Hego Damask', 'Magnafael', 'Javin Fis', 'G4reth', 'MINI DarthAzazel', 'ArtVandalay', 'JHang', 'Username', 'Delara Exibil', 'Nomad', 'Marl Jewel', 'WharfRat', 'RoTahn Taske', 'Puck', 'Patrick4', 'Jeeves', 'Fidget92', 'Lambert', 'Rhil Margos', 'Trask droll', 'BobbyMarshal', 'non7top', 'Zarlis Rahn', 'DarthDax', 'El Jefe', 'Tani Mayse', 'Excessive Fist', 'Quinlan Vos', 'Verage Valoor', 'Ravened Stormchaser', 'Tyrian', 'Squanchy420', 'OwningXylophone', 'Avatany', 'Yosh', 'Geralt of Rivia', 'JediAhsoka', 'Scof', 'Chikiller', 'Galatea', 'Taco Hat', 'Kdizyl', 'JediScum', 'Calaveylon Kwai', 'Anci', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['83', '81', '75', '74', '72', '70', '66', '62', '60', '58', '55', '54', '51', '51', '51', '51', '50', '49', '49', '49', '48', '46', '45', '44', '44', '43', '41', '41', '39', '39', '38', '38', '37', '35', '34', '31', '31', '30', '29', '29', '29', '28', '27', '25', '24', '22', '20', '17', '16', '14', ],
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
    data: ['54', '52', '57', '56', '53', '59', '54', '49', '50', '50', '47', '43', '46', '45', '47', '50', '45', '58', '48', '46', '47', '45', '44', '47', '50', '36', '44', '38', '39', '32', '50', '32', '40', '36', '43', '31', '34', '43', '27', '37', '41', '26', '27', '40', '34', '35', '33', '28', '35', '24', ],
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
    data: ['5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '6', '6', '6', '4', '6', '6', '6', '5', '6', '5', ],
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
    data: ['40', '21', '17', '8', '25', '20', '21', '9', '1', '17', '7', '4', '3', '24', '13', '4', '10', '11', '14', '10', '8', '8', '8', '19', '20', '6', '11', '2', '23', '2', '5', '8', '5', '16', '5', '19', '13', '10', '6', '2', '15', '17', '17', '15', '4', '5', '10', '1', '0', '11', ],
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
