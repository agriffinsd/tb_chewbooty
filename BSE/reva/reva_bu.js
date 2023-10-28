//define some sample data
var tabledata = [
 	{id:1, name:"Skaar", revaready:"true", rate:"100%", tb10:"true",tb11:"true"},
    {id:2, name:"JonesMalones", revaready:"true", rate:"100%", tb10:"false", tb11:"true"},
 	{id:3, name:"Tyrian", revaready:"false", rate:"0%", tb10:"", tb11:""},

];
 
 //create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#reva-table", {
 	height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	data:tabledata, //assign data to table
 	layout:"fitColumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Player", field:"name", width:150},
	 	{title:"Ready", field:"revaready", hozAlign:"left", formatter:"tickCross", formatterParams:{
            allowEmpty:true,
            allowTruthy:true,
            tickElement:"<i class='fa fa-check'></i>",
            crossElement:"<i class='fa fa-times'></i>",
        }},
	 	{title:"Success Rate", field:"rate", },
        {title:"TB 10", field:"tb10", hozAlign:"left", formatter:"tickCross", formatterParams:{
            allowEmpty:true,
            allowTruthy:false,
            tickElement:"<i class='fa fa-check'></i>",
            crossElement:"<i class='fa fa-times'></i>",
        }},
        {title:"TB 11", field:"tb11", hozAlign:"left", formatter:"tickCross", formatterParams:{
            allowEmpty:true,
            allowTruthy:false,
            tickElement:"<i class='fa fa-check'></i>",
            crossElement:"<i class='fa fa-times'></i>",
        }},
 	],
});
