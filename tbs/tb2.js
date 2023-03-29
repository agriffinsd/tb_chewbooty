// setup 
const data = {
  labels: ['XCAL', 'Blattu', 'Jonesmalones', 'Tranced', 'Skaar', 'ArtVandalay', 'Javin Fis', 'Hego Damask', 'Trask droll', 'G4reth', 'MINI DarthAzazel', 'Marl Jewel', 'Username', 'DarthDax', 'Nomad', 'Puck', 'RoTahn Taske', 'Jeeves', 'Lol face', 'Patrick4', 'Delara Exibil', 'Lambert', 'WharfRat', 'JHang', 'Fidget92', 'Ravened Stormchaser', 'Zarlis Rahn', 'Rhil Margos', 'Tani Mayse', 'Chikiller', 'non7top', 'Verage Valoor', 'Quinlan Vos', 'Squanchy420', 'Scof', 'Geralt of Rivia', 'JediAhsoka', 'OwningXylophone', 'JediScum', 'BobbyMarshal', 'Tyrian', 'Excessive Fist', 'Anci', 'Taco Hat', 'Galatea', 'Calaveylon Kwai', 'Kerrin TyrianBSE', 'Avatany', 'Darrow Starfall', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['85', '78', '78', '73', '71', '63', '59', '57', '56', '56', '54', '52', '51', '51', '51', '50', '50', '50', '49', '47', '47', '47', '46', '46', '42', '42', '41', '39', '37', '37', '36', '36', '36', '35', '29', '29', '28', '27', '26', '26', '25', '23', '22', '20', '17', '16', '15', '10', '7', ],
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
    data: ['59', '51', '52', '46', '51', '45', '45', '50', '51', '46', '47', '47', '40', '49', '44', '46', '40', '43', '39', '47', '42', '43', '45', '41', '45', '43', '35', '40', '46', '43', '37', '34', '37', '33', '38', '38', '19', '35', '37', '25', '30', '18', '28', '30', '25', '34', '24', '13', '7', ],
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
    data: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '5', '6', '5', '6', '5', '6', '6', '6', '6', '5', '5', '6', '6', '6', '6', '6', '5', '6', '5', '6', '6', '6', '5', '6', '5', '5', '6', '5', '6', '6', '5', '6', '6', '6', '5', ],
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
    data: ['12', '2', '15', '7', '20', '5', '3', '12', '18', '1', '10', '2', '5', '18', '1', '3', '4', '6', '5', '4', '8', '3', '3', '2', '4', '2', '3', '6', '2', '3', '5', '8', '1', '9', '11', '0', '17', '2', '1', '0', '6', '2', '0', '0', '1', '0', '5', '0', '1', ],
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
