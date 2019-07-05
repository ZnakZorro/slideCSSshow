console.log('+++++++++++++++++++++++++++++')

var opispost = function(ret){
	zapisano = true;
	console.log('#5 opispost=',ret);
	console.log(zapisano);
	var modalx = document.getElementById("modalx");
		modalx.innerHTML = '<p>Zapisano</p>';
		modalx.style.display="block";
	setTimeout(function(){
		modalx.innerHTML = '?';
		modalx.style.display="none";
	},500);
}

var zapisano = false;

setInterval(function(){
	zapisano=false; 
	//console.log(zapisano);
},5000);

function zapiszEdycje(editContent){
	//if (zapisano) return;
	//console.log('zapiszEdycje');
	//console.log(editContent);
	var posty = JSON.stringify(editContent);
	ajaxxPOST('./zapis.php',posty,opispost);
}
var saveEdit = function(ten){
	
	if (this.id){
		console.log(this.id,this.textContent)
		editContent.info[this.id]=this.textContent;
	}
	
	if (this.parentElement.nodeName==='TR'){
		var txt = this.parentElement.textContent;
		var dzieciTabeli = this.parentElement.parentElement.children;
		var dzieciTR       = this.parentElement.children;
		//console.log(dzieciTabeli);
		//console.log(dzieciTR.length,dzieciTR);
		var ktory = null;
		for (var c in dzieciTabeli){
			if (typeof(dzieciTabeli[c])==='object'){
				var toto = txt===dzieciTabeli[c].textContent;
				if (toto) ktory = c;
				//console.log(toto,c,txt,dzieciTabeli[c].textContent)
			}
		}
		var arr =[];
		for (var c in dzieciTR){
			if (typeof(dzieciTR[c])==='object'){
				//console.log(dzieciTR[c],dzieciTR[c].textContent)
				arr.push(dzieciTR[c].textContent)
			}
		}
		
	}
	//console.log(arr);
	//console.log(ktory);
	//console.log(editContent.pokoje[ktory]);
	if (ktory){
		editContent.pokoje[ktory].pietro = arr[0].trim();
		editContent.pokoje[ktory].pokoj  = arr[1].trim();
		editContent.pokoje[ktory].kto    = arr[2].trim();
	}
	
	zapiszEdycje(editContent);
}





var edycjaTablicy = function(){
	//document.designMode='on';
	var atr = "contenteditable";
	//console.log('atr=',atr);
	var edity = document.querySelectorAll("div#infoTAB table th,div#infoTAB table td, p.adres,h1 span,div#komunikat");
	//console.log(edity);
	edity.forEach(function(y,i){
		y.contentEditable = 'true';
		y.addEventListener("input", saveEdit, false);		
	});
	
}


function refreshPage(){
	console.log('refreshPage();')
	
	var posty = '{"budynek":"'+editContent.info.budynek+'"}';
	//ajaxxPOST('./refresh.php','3',function(ret){
	ajaxx('./refresh.php?step=6',function(ret){
		console.log('refresh.php=',ret);
	})
}


// DOM READY
document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function(){
		edycjaTablicy();
		document.body.insertAdjacentHTML('afterbegin', '<button onClick="document.location.href=\'./?tv=test\';">tv test</button>');
		document.body.insertAdjacentHTML('afterbegin', '<button onClick="document.location.href=\'./?tv=WI2\';">tv WI2</button>');
		document.body.insertAdjacentHTML('afterbegin', '<button onClick="document.location.href=\'./?tv=WI1\';">tv WI1</button>');
		document.body.insertAdjacentHTML('afterbegin', '<button onClick="document.location.href=\'./\';">tv WIZUT</button>');
		document.body.insertAdjacentHTML('afterbegin', '<button onClick="refreshPage();">refresh</button>');
	},1500);
	
	
});
//dom ready