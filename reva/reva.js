//define some sample data
var tabledata = [
{id:1, name:"ArtVandalay", revaready:"true", rate:"42.8571428571429%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"false",tb18:"true",tb19:"false",tb20:"false",tb21:"false",tb22:"true",},
{id:2, name:"Avatany", revaready:"true", rate:"76.9230769230769%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"false",tb21:"false",tb22:"false",},
{id:3, name:"Blattu", revaready:"true", rate:"83.3333333333333%",tb10:"",tb11:"false",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"false",tb20:"true",tb21:"true",tb22:"true",},
{id:4, name:"BobaChuck91", revaready:"true", rate:"60%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",tb18:"false",tb19:"false",tb20:"true",tb21:"true",tb22:"true",},
{id:5, name:"BobbyMarshal", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:6, name:"Chikiller", revaready:"true", rate:"61.5384615384615%",tb10:"true",tb11:"false",tb12:"false",tb13:"true",tb14:"true",tb15:"true",tb16:"false",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"false",tb22:"false",},
{id:7, name:"Dârth Jungle Asian", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:8, name:"DarthDax", revaready:"true", rate:"83.3333333333333%",tb10:"",tb11:"false",tb12:"true",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:9, name:"Darthsyn", revaready:"true", rate:"50%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",tb18:"",tb19:"true",tb20:"false",tb21:"false",tb22:"true",},
{id:10, name:"Delara Exibil", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:11, name:"El Jefe", revaready:"true", rate:"66.6666666666667%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"false",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"false",tb21:"true",tb22:"false",},
{id:12, name:"Enigma", revaready:"true", rate:"58.3333333333333%",tb10:"true",tb11:"false",tb12:"true",tb13:"false",tb14:"true",tb15:"true",tb16:"true",tb17:"false",tb18:"true",tb19:"false",tb20:"",tb21:"false",tb22:"true",},
{id:13, name:"Excessive Fist", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",tb18:"",tb19:"",tb20:"",tb21:"",tb22:"",},
{id:14, name:"Fidget92", revaready:"true", rate:"61.5384615384615%",tb10:"true",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",tb16:"false",tb17:"false",tb18:"true",tb19:"false",tb20:"true",tb21:"true",tb22:"true",},
{id:15, name:"G4reth", revaready:"true", rate:"85.7142857142857%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"false",},
{id:16, name:"Geralt of Rivia", revaready:"true", rate:"66.6666666666667%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",tb18:"",tb19:"",tb20:"true",tb21:"false",tb22:"true",},
{id:17, name:"Javin Fis", revaready:"true", rate:"100%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:18, name:"JakeY", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:19, name:"JediAhsoka", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:20, name:"Jeeves", revaready:"true", rate:"75%",tb10:"",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",tb18:"true",tb19:"false",tb20:"true",tb21:"true",tb22:"true",},
{id:21, name:"JHang", revaready:"true", rate:"76.9230769230769%",tb10:"false",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"false",tb20:"true",tb21:"false",tb22:"true",},
{id:22, name:"Jonesmalones", revaready:"true", rate:"76.9230769230769%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",tb18:"false",tb19:"true",tb20:"true",tb21:"false",tb22:"true",},
{id:23, name:"Kirath Tyria", revaready:"true", rate:"33.3333333333333%",tb10:"",tb11:"",tb12:"",tb13:"false",tb14:"false",tb15:"",tb16:"",tb17:"",tb18:"",tb19:"",tb20:"",tb21:"",tb22:"true",},
{id:24, name:"Lambert", revaready:"true", rate:"75%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",tb18:"",tb19:"true",tb20:"true",tb21:"true",tb22:"false",},
{id:25, name:"Marl Jewel", revaready:"true", rate:"76.9230769230769%",tb10:"false",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:26, name:"Manolis", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:27, name:"MINI DarthAzazel", revaready:"true", rate:"69.2307692307692%",tb10:"true",tb11:"false",tb12:"true",tb13:"true",tb14:"false",tb15:"true",tb16:"false",tb17:"true",tb18:"true",tb19:"true",tb20:"false",tb21:"true",tb22:"true",},
{id:28, name:"Nomad", revaready:"true", rate:"100%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:29, name:"non7top", revaready:"true", rate:"85.7142857142857%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"false",tb21:"true",tb22:"true",},
{id:30, name:"OwningXylophone", revaready:"true", rate:"58.3333333333333%",tb10:"",tb11:"true",tb12:"false",tb13:"false",tb14:"true",tb15:"true",tb16:"false",tb17:"true",tb18:"true",tb19:"false",tb20:"false",tb21:"true",tb22:"true",},
{id:31, name:"Patrick4", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:32, name:"Puck", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:33, name:"QRyker25", revaready:"true", rate:"85.7142857142857%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"false",},
{id:34, name:"Rhil Margos", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:35, name:"RoTahn Taske", revaready:"true", rate:"84.6153846153846%",tb10:"false",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"false",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:36, name:"Scof", revaready:"true", rate:"85.7142857142857%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",tb18:"false",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:37, name:"Skaar", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:38, name:"Squanchy420", revaready:"true", rate:"83.3333333333333%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"false",tb15:"true",tb16:"true",tb17:"false",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:39, name:"T", revaready:"true", rate:"71.4285714285714%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"false",tb18:"true",tb19:"true",tb20:"true",tb21:"false",tb22:"true",},
{id:40, name:"Taco Hat", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",tb18:"",tb19:"",tb20:"",tb21:"",tb22:"",},
{id:41, name:"Tani Mayse", revaready:"true", rate:"33.3333333333333%",tb10:"",tb11:"false",tb12:"false",tb13:"false",tb14:"false",tb15:"true",tb16:"false",tb17:"true",tb18:"true",tb19:"false",tb20:"false",tb21:"false",tb22:"true",},
{id:42, name:"Tranced", revaready:"true", rate:"91.6666666666667%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"false",tb22:"true",},
{id:43, name:"Trask droll", revaready:"true", rate:"92.3076923076923%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:44, name:"Tyrian", revaready:"true", rate:"83.3333333333333%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"false",},
{id:45, name:"Tyron Brandt", revaready:"true", rate:"75%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"true",tb16:"true",tb17:"true",tb18:"false",tb19:"true",tb20:"true",tb21:"false",tb22:"true",},
{id:46, name:"Verage Valoor", revaready:"true", rate:"92.3076923076923%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"false",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:47, name:"WharfRat", revaready:"true", rate:"92.3076923076923%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"false",tb21:"true",tb22:"true",},
{id:48, name:"XCAL", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",tb18:"true",tb19:"true",tb20:"true",tb21:"true",tb22:"true",},
{id:49, name:"Yosh", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",tb18:"",tb19:"",tb20:"",tb21:"",tb22:"",},
{id:50, name:"Dava", revaready:"true", rate:"66.6666666666667%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",tb18:"",tb19:"",tb20:"true",tb21:"false",tb22:"true",},

];
 
 //create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#reva-table", {
 	height:800, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	data:tabledata, //assign data to table
 	layout:"fitcolumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Player", field:"name", width:150},
	 	{title:"Ready", field:"revaready", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
            allowEmpty:true,
            allowTruthy:false,
            tickElement:"<i class='fa fa-check'></i>",
            crossElement:"<i class='fa fa-times'></i>",
        }},
	 	{title:"Success Rate (TB10+)", field:"rate", },
{title:"TB 10 (Partial Data)", field:"tb10", hozAlign:"left", formatter:"tickCross", formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 11", field:"tb11", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 12", field:"tb12", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 13", field:"tb13", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 14", field:"tb14", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 15", field:"tb15", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 16", field:"tb16", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 17", field:"tb17", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 18", field:"tb18", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 19", field:"tb19", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 20", field:"tb20", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 21", field:"tb21", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},{title:"TB 22", field:"tb22", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
 allowEmpty:true, allowTruthy:false, tickElement:"<i class='fa fa-check'></i>", crossElement:"<i class='fa fa-times'></i>",
}},
 	],
});
