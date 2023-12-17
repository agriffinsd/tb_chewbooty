//define some sample data
var tabledata = [
{id:1, name:"s0da p0pinski", revaready:"true", rate:"100%",tb10:"true",tb11:"true",},
{id:2, name:"Zazztrain", revaready:"true", rate:"100%",tb10:"true",tb11:"true",},
{id:3, name:"MINI Mace Dymon", revaready:"true", rate:"91%",tb10:"false",tb11:"true",},
{id:4, name:"MINIxur'kthan", revaready:"true", rate:"91%",tb10:"false",tb11:"true",},
{id:5, name:"Mega Kicagemon", revaready:"true", rate:"90%",tb10:"false",tb11:"true",},
{id:6, name:"ItzBerndern", revaready:"true", rate:"64%",tb10:"false",tb11:"false",},
{id:7, name:"OhMyPretzel", revaready:"true", rate:"64%",tb10:"true",tb11:"false",},
{id:8, name:"pablomash", revaready:"true", rate:"73%",tb10:"false",tb11:"false",},
{id:9, name:"Daggo", revaready:"true", rate:"64%",tb10:"true",tb11:"false",},
{id:10, name:"Philadelphia Co", revaready:"true", rate:"64%",tb10:"false",tb11:"true",},
{id:11, name:"Salvare", revaready:"true", rate:"70%",tb10:"true",tb11:"false",},
{id:12, name:"SithKebab", revaready:"true", rate:"45%",tb10:"false",tb11:"true",},
{id:13, name:"Bobandy", revaready:"false", rate:"60%",tb10:"false",tb11:"true",},
{id:14, name:"N7 Tesla", revaready:"true", rate:"45%",tb10:"false",tb11:"false",},
{id:15, name:"rockoffanddie", revaready:"true", rate:"50%",tb10:"true",tb11:"false",},
{id:16, name:"Wabba Dejabba", revaready:"true", rate:"63%",tb10:"true",tb11:"",},
{id:17, name:"Trate Daxson", revaready:"true", rate:"57%",tb10:"",tb11:"",},
{id:18, name:"8", revaready:"true", rate:"100%",tb10:"",tb11:"",},
{id:19, name:"Rensalaer", revaready:"true", rate:"33%",tb10:"false",tb11:"",},
{id:20, name:"Akbahr", revaready:"true", rate:"50%",tb10:"true",tb11:"false",},
{id:21, name:"Yania May", revaready:"true", rate:"50%",tb10:"",tb11:"false",},
{id:22, name:"Zick", revaready:"true", rate:"33%",tb10:"",tb11:"false",},
{id:23, name:"Laseracid", revaready:"true", rate:"17%",tb10:"",tb11:"",},
{id:24, name:"Digolo Doorjam", revaready:"true", rate:"0%",tb10:"",tb11:"",},
{id:25, name:"Pflapjack", revaready:"true", rate:"33%",tb10:"",tb11:"",},
{id:26, name:"Yodizzle", revaready:"true", rate:"0%",tb10:"",tb11:"",},
{id:27, name:"TheMonkeyBuddha", revaready:"true", rate:"100%",tb10:"",tb11:"",},
{id:28, name:"CT69420", revaready:"true", rate:"67%",tb10:"",tb11:"",},
{id:29, name:"Ransom23", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:30, name:"Mc", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:31, name:"Falen Lacer", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:32, name:"Aceth", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:33, name:"Mugami Chinzano", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:34, name:"Skcampy", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:35, name:"Grogu", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:36, name:"PaulB086", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:37, name:"FateHydro", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:38, name:"Excelsior 101", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:39, name:"Uhrrr ahhrrr aaargh", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:40, name:"DonKeyHoeTae", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:41, name:"C2", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:42, name:"Mr Blargh", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:43, name:"DocWho619", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:44, name:"Saki", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:45, name:"Rh Factor", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:46, name:"JangosJuggs", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:47, name:"Reaper1010", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:48, name:"SecretId", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:49, name:"A1Savage", revaready:"false", rate:"0%",tb10:"",tb11:"",},
{id:50, name:"Thessa Odai", revaready:"false", rate:"0%",tb10:"",tb11:"",},

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
}},
 	],
});
