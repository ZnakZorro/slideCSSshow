/*-------------------------------*/
/*==============================*/
/*==============================*/


if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        fun.call(thisp, this[i], i, this);
    }
  };
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

/*==============================*/
/*==============================*/
/*==============================*/


function uid(t){
	if (typeof(t)==='undefined') return 99999;
	var suma=0;
	for (var i in t) {suma+=i*t.charCodeAt(i);}
	return suma % 99999;
}
function remove(id) {
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}

function installScript(url){
	var id = 'id'+uid(url); 
	if (document.getElementById(id)) remove(id); 
	//console.log(id);
	var head = document.getElementsByTagName('script')[0]; 
	skrypt = document.createElement('script'); 
	skrypt.type = 'text/javascript'; 
	skrypt.async = true;
	skrypt.id=id;
	skrypt.src=url
	//skrypt.addEventListener("load", zapakowany(r,ostatniDOC), false); 
	head.parentNode.insertBefore(skrypt, head);	
}

function przyrost(ret){
	//         faktor
	var deltaT = 2  * Math.round(10* (( (0.5 * ret[1]['temp'])   + (0.3 * ret[2]['temp'])   + (0.2 * ret[3]['temp']) )   - (ret[0]['temp'])))   / 10;
	var deltaP = 10 * Math.round(10* (( (0.5 * ret[1]['press'])  + (0.3 * ret[2]['press'])  + (0.2 * ret[3]['press']) )  - (ret[0]['press'])))  / 10;
	var deltaD = 2  * Math.round(10* (( (0.5 * ret[1]['deszcz']) + (0.3 * ret[2]['deszcz']) + (0.2 * ret[3]['deszcz']) ) - (ret[0]['deszcz']))) / 10;
	var deltaW = 2  * Math.round(10* (( (0.5 * ret[1]['wiatr'])  + (0.3 * ret[2]['wiatr'])  + (0.2 * ret[3]['wiatr']) )  - (ret[0]['wiatr'])))  / 10;	
	return {'t':deltaT,'p':deltaP,'w':deltaW,'d':deltaD}
}

function wstawPrognozePogody(ret){
	var temp   = Math.round(ret[0]['temp']);
	var press  = Math.round(ret[0]['press']);
	var wiatr  = Math.round(ret[0]['wiatr']);
	var deszcz = Math.round(ret[0]['deszcz']);
	
	var stylTemp, stylPress, stylWiatr, stylDeszcz = 'color:initial;';
	
	var delta = przyrost(ret);
		if (delta.t > 1)  stylTemp = 'color:red';
		if (delta.t < -1) stylTemp = 'color:blue';
		if (delta.p > 1)  stylPress = 'color:red';
		if (delta.p < -1) stylPress = 'color:blue';
		if (delta.w > 1)  stylWiatr = 'color:red';
		if (delta.w < -1) stylWiatr = 'color:blue';
		if (delta.d > 1)  stylDeszcz = 'color:red';
		if (delta.d < -1) stylDeszcz = 'color:blue';
		
	var pog_div = document.getElementById('pogoda');
	pog_div.innerHTML = '<span style="'+stylTemp+'">'+temp+'°C,</span>';
	pog_div.innerHTML += ' <span style="'+stylPress+'">'+press+'hPa,</span>';
	
	if (deszcz !=0 || delta.d !=0 ) {
		pog_div.innerHTML += ' <span style="'+stylDeszcz+'">'+deszcz+'<small>mm</small></span>';
	} else if (wiatr  !=0 || delta.w !=0 ) {
		pog_div.innerHTML += ' <span style="'+stylWiatr+'">'+wiatr+'m/s</span>';
	}
}


var wstawPrognozeYahoo = function(ret){
   //console.log('wstawPrognozeYahoo=',ret);
   //if (ret===undefined) return;
   if (!ret) return;
   //if (ret==='undefined') return;
	var yahootemp = ret.query.results.channel.item.condition.temp;
	var chill     = getCelTemp(ret.query.results.channel.wind.chill);
	
	//console.log(ret.query.results)
	//console.log(chill,ret.query.results.channel.wind.chill)
	//console.log(ret.query.results.channel.item)
	var tera = (ret.query.results.channel.item.forecast[0]);
	//console.log(tera);
	var divtemp = document.querySelector('#pogoda span');
	
	if (yahootemp && divtemp){
		//console.log(yahootemp,divtemp);
		setTimeout(function(){
			divtemp.innerHTML = yahootemp+'&deg;C';
			divtemp.innerHTML += ' ('+tera.high+'|'+tera.low+') {'+chill+'}';
		},3000);
	}
	
	
}


function wstawPasek(blok){
	document.getElementById('informacje').style.display='block';
	
	
	setTimeout(function(){
		installScript('https://www.wi.zut.edu.pl/components/com_atut/helpers/tv/pogoda.porta.json.php?callback=wstawPrognozePogody');
		//installScript('https://www.wi.zut.edu.pl/components/com_atut/helpers/tv/yahoo.porta.json.php?callback=wstawPrognozeYahoo');
	},1000);	
}

function wpisz(tx,id){
	document.getElementById(id).textContent=tx;
}

var editContent=null;

var opiszTablice = function(dane){
	//console.log('======================================',typeof(dane));
	if (typeof(dane)==='string') dane = JSON.parse(dane);
	//console.log(dane);
	editContent = dane;
	if (dane.info){
		if (dane.info.budynek)		{console.log('budynek=',dane.info.budynek)};
		if (dane.info.adres1) 		{wpisz(dane.info.adres1,'adres1');};
		if (dane.info.adres2) 		{wpisz(dane.info.adres2,'adres2');};
		if (dane.info.header1) 		{wpisz(dane.info.header1,'header1');};
		if (dane.info.header2) 		{wpisz(dane.info.header2,'header2');};
		
		// to na przyszlosc do wyswietlania innych stron np władze
		//if (dane.info.timeINFO) 	{console.log('timeINFO=',dane.info.timeINFO)};
		//if (dane.info.timeEXTRA)	{console.log('timeEXTRA=',dane.info.timeEXTRA)};
		
		if (dane.info.strony){
			dane.info.strony.forEach(function(strona){
				//console.log("\tstrona=",strona);
			});
		}
	}
	if (dane.info.komunikat)		{ document.getElementById('komunikat').innerHTML = '<p>'+dane.info.komunikat+' </p>';}
	if (dane.pokoje){
		var pokojeTAB = document.getElementById('infoTAB');
			var tabla = document.createElement('table');
				//tabla.classList.add('table');
				tabla.className = 'table table-dark';
			dane.pokoje.forEach(function(pokoj){
				//console.log(pokoj);
				var tr = document.createElement('tr');
				tr.innerHTML='<th>'+pokoj.pietro.replace(' ','&nbsp;')+'</th><th>'+pokoj.pokoj+'</th><td>'+pokoj.kto+'</td>';
				tabla.appendChild(tr);
			});
			pokojeTAB.appendChild(tabla);

	}
	//console.log('======================================');
}



// DOM READY
document.addEventListener('DOMContentLoaded', function() {
	
				var extraTAB = document.getElementById('extraTAB');
				var infoTAB  = document.getElementById('infoTAB');
					//console.log(extraTAB);
					//console.log(infoTAB);
				var dok = document.getElementById('one');
				var tabprzed = '<div class="col-sm"><p id="adres1" class="adres">ul. Żołnierska 49,</p><p id="adres2" class="adres">71-210 Szczecin</p></div>';
				var tabpo    = '<div class="col-sm" id="informacje" style="text-align:right; display:block;"><span id="czas"></span><span id="pogoda"></div>';
				var tabinfo  =  '<h1><span id="header1">WI-1 Tablica</span><br /><span id="header2">informacyjna</span></h1>';
				extraTAB.innerHTML = tabinfo;
				extraTAB.insertAdjacentHTML('beforebegin', tabprzed);
				extraTAB.insertAdjacentHTML('afterend', tabpo);
				//beforebegin afterbegin beforeend afterend
					//console.log(extraTAB);
					//console.log(infoTAB);
	
	
	
	
	/*var w = window.innerWidth;
	var h = window.innerHeight;
	document.getElementById('info').textContent=w+'x'+h;*/
	/*
	setInterval(function(){
		var czas = (new Date()).toLocaleString();
		document.getElementById('czas').textContent=czas;		
	},1000);
	*/
	setTimeout(function(){
		wstawPasek('informacje');	
	},1000);
	
		
	//var jsonurl = "./wi1.json?it="+(new Date()).getTime();
	/*fetch(jsonurl)
	.then(function(resp) {return resp.json();})
	.then(function(json) {opiszTablice(json);})
	.catch(function(err) {console.log(err);  });*/
	
//ajaxx(jsonurl,opiszTablice);




	
});// dom ready
