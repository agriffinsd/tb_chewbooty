//define some sample data
var tabledata = [
{id:1, name:"ArtVandalay", revaready:"true", rate:"50%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"false",},
{id:2, name:"Avatany", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:3, name:"Blattu", revaready:"true", rate:"85.7142857142857%",tb10:"",tb11:"false",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:4, name:"BobaChuck91", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",},
{id:5, name:"BobbyMarshal", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:6, name:"Chikiller", revaready:"true", rate:"62.5%",tb10:"true",tb11:"false",tb12:"false",tb13:"true",tb14:"true",tb15:"true",tb16:"false",tb17:"true",},
{id:7, name:"Dârth Jungle Asian", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:8, name:"DarthDax", revaready:"true", rate:"71.4285714285714%",tb10:"",tb11:"false",tb12:"true",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",},
{id:9, name:"Delara Exibil", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"true",},
{id:10, name:"El Jefe", revaready:"true", rate:"75%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"false",tb15:"true",tb16:"true",tb17:"true",},
{id:11, name:"Enigma", revaready:"true", rate:"62.5%",tb10:"true",tb11:"false",tb12:"true",tb13:"false",tb14:"true",tb15:"true",tb16:"true",tb17:"false",},
{id:12, name:"Excessive Fist", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",},
{id:13, name:"Fidget92", revaready:"true", rate:"50%",tb10:"true",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",tb16:"false",tb17:"false",},
{id:14, name:"G4reth", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:15, name:"Geralt of Rivia", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",},
{id:16, name:"Javin Fis", revaready:"true", rate:"100%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:17, name:"JakeY", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:18, name:"JediAhsoka", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:19, name:"Jeeves", revaready:"true", rate:"71.4285714285714%",tb10:"",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",},
{id:20, name:"JHang", revaready:"true", rate:"87.5%",tb10:"false",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:21, name:"Jonesmalones", revaready:"true", rate:"87.5%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",},
{id:22, name:"Kirath Tyria", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"false",tb14:"false",tb15:"",tb16:"",tb17:"",},
{id:23, name:"Lambert", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",},
{id:24, name:"Marl Jewel", revaready:"true", rate:"62.5%",tb10:"false",tb11:"true",tb12:"false",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",},
{id:25, name:"Manolis", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"true",tb16:"true",tb17:"true",},
{id:26, name:"MINI DarthAzazel", revaready:"true", rate:"62.5%",tb10:"true",tb11:"false",tb12:"true",tb13:"true",tb14:"false",tb15:"true",tb16:"false",tb17:"true",},
{id:27, name:"Nomad", revaready:"true", rate:"100%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:28, name:"non7top", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:29, name:"OwningXylophone", revaready:"true", rate:"57.1428571428572%",tb10:"",tb11:"true",tb12:"false",tb13:"false",tb14:"true",tb15:"true",tb16:"false",tb17:"true",},
{id:30, name:"Patrick4", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:31, name:"Puck", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:32, name:"QRyker25", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:33, name:"Rhil Margos", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:34, name:"RoTahn Taske", revaready:"true", rate:"75%",tb10:"false",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"false",},
{id:35, name:"Scof", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"true",},
{id:36, name:"Skaar", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:37, name:"Squanchy420", revaready:"true", rate:"71.4285714285714%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"false",tb15:"true",tb16:"true",tb17:"false",},
{id:38, name:"T", revaready:"true", rate:"50%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"true",tb17:"false",},
{id:39, name:"Taco Hat", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",},
{id:40, name:"Tani Mayse", revaready:"true", rate:"28.5714285714286%",tb10:"",tb11:"false",tb12:"false",tb13:"false",tb14:"false",tb15:"true",tb16:"false",tb17:"true",},
{id:41, name:"thirteensuns", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"true",},
{id:42, name:"Tranced", revaready:"true", rate:"100%",tb10:"",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:43, name:"Trask droll", revaready:"true", rate:"87.5%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"false",tb16:"true",tb17:"true",},
{id:44, name:"Tyrian", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"true",},
{id:45, name:"Tyron Brandt", revaready:"true", rate:"100%",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"true",tb16:"true",tb17:"true",},
{id:46, name:"Verage Valoor", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:47, name:"WharfRat", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:48, name:"XCAL", revaready:"true", rate:"100%",tb10:"true",tb11:"true",tb12:"true",tb13:"true",tb14:"true",tb15:"true",tb16:"true",tb17:"true",},
{id:49, name:"Yosh", revaready:"false", rate:"N/A",tb10:"",tb11:"",tb12:"",tb13:"",tb14:"",tb15:"",tb16:"",tb17:"",},
{id:50, name:"Zarlis Rahn", revaready:"true", rate:"66.6666666666667%",tb10:"",tb11:"",tb12:"true",tb13:"false",tb14:"true",tb15:"false",tb16:"true",tb17:"true",},

];
 
 //create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#reva-table", {
 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	data:tabledata, //assign data to table
 	layout:"fitDataTable", //fit columns to width of table (optional)
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
}},
 	],
});
