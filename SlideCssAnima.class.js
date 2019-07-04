
"use strict"
//const $=(y)=>document.querySelector(y);
//const $$=(y)=>document.querySelectorAll(y);

class SlideCssAnima {
	constructor(element,option) {
	
	this.option={
		element:"#slideshow",
		direction:"vertical",
		time :20,
		background: "#888f88",
		color: "#fff",
		revers:false
	}
	
	if (element) this.option['element']=element;
	if (option){
		for (let o in option){
			
			this.option[o] = option[o];
		}
	}

	this.imagesLen=0;
	this.imagesCounter=0;
	console.log(this.option);
}


	play() {
		this.jsonGET("/tvinfo/tv/tvfoto.json.php",this.wstawFotosy);
	}
	
	createTittle(path) {		
		let out = path.split('/').pop();
		let arr = out.split('.');
		let rest =arr.pop();
		out = arr.join('.');
		out = out.replace(/(-\d+$)/,'');
		out = out.replace(/(^\d+_)/,'');
		out = out.replace('_',' ');
		out = out.replace('!!!','<br />');
		if (out==='Stanley') out='';
		return out;
	}
	
	wstawFotosy(ret,self){
		let obj = JSON.parse(ret);
		const eleslide = document.querySelector(self.option.element);
		eleslide.innerHTML ='';
		obj.forEach(function(img,i){				
			let title= self.createTittle(img);
			console.log('#=',title)
			//document.body.innerHTML+='<pre>'+title+'</pre>';
			eleslide.innerHTML += '<div class="slide"><img src="'+img+'" /><br />'+title+'</div>';
		});	
		let imagesnodelist = document.querySelectorAll(self.option.element+ ' img');
		let images = Array.prototype.slice.call(imagesnodelist);
		//console.log(images);
		
		images.forEach(function(img){
			img.addEventListener( 'load', function(){self.incrementCounter(self)}, false );
			self.imagesLen++;
		});
	}


	incrementCounter(self){
		self.imagesCounter++;
		//console.log('#96===incrementCounter',self.imagesCounter,self.imagesLen)
		if (self.imagesCounter===self.imagesLen) self.installAnimation(self);
	}

	installAnimation(self){
		// if ff to time / 10;
		var sekund = self.imagesLen*self.option.time;
			console.log(self.option.direction);
			console.log(self.option.revers);
			var w = window.innerWidth;
			var h = window.innerHeight;
			var el = self.option.element;
			var koniec = document.querySelector(el);
			var botttom    = Math.round(koniec.getBoundingClientRect().bottom);
			var sheet = document.styleSheets[0];
			console.log(sheet)
				sheet.insertRule("#row {overflow: hidden;}");
				sheet.insertRule(el+" div{width:100%;}");
				sheet.insertRule(el+" div img{width:100%;}");
				sheet.insertRule(el+"{background: "+self.option.background+";}");
				sheet.insertRule(el+"{color: "+self.option.color+";}");
				sheet.insertRule(el+"{animation-name: move;}");
				sheet.insertRule(el+"{animation-duration: "+sekund+"s;}");
				sheet.insertRule(el+"{animation-iteration-count: infinite;}");
				sheet.insertRule(el+"{animation-timing-function: linear;}");
				sheet.insertRule(el+":hover  {animation-play-state: paused;}");
				// tylko w gore
				sheet.insertRule("@keyframes move {0% {margin-top: 0px;} 100% {margin-top: -"+botttom+"px;}}");
				// w gore i w dol
				//sheet.insertRule("@keyframes move {0% {margin-top: 0px;} 10% {margin-top: -"+botttom+"px;} 0% {margin-top: 0px;}}");		
	}


	
	jsonGET (url,callback){
		let self=this;
			let request;
			if (window.XMLHttpRequest) {
			  request = new XMLHttpRequest();
			} else if (window.ActiveXObject) {
			  try {
				request = new ActiveXObject('Msxml2.XMLHTTP');
			  } catch (e) {
				try {
				  request = new ActiveXObject('Microsoft.XMLHTTP');
				} catch (e) {}
			  }
			}
			request.open('GET', url, true);
			request.send();
			request.onreadystatechange = function() {
			
				if(request.readyState === 4) {
					if(request.status === 200) {
						callback(request.responseText,self)
					}
				}
			};
	}
	
	//get pole() {return this.liczPole();}
	//static odleglosc(a, b) {return b-a;}
	//liczPole() {return this.wysokosc * this.szerokosc;}
	
}

