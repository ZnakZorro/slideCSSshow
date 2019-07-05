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
	
	var delta = przyrost(ret);
	var stylTemp, stylPress, stylWiatr, stylDeszcz = '';
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
	if (wiatr  !=0 || delta.w !=0 ) pog_div.innerHTML += ' <span style="'+stylWiatr+'">'+wiatr+'m/s</span>';
	if (deszcz !=0 || delta.d !=0 ) pog_div.innerHTML += ' <span style="'+stylDeszcz+'">'+deszcz+'mm</span>';
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


setTimeout(function(){
	wstawPasek('informacje');	
},1000);

