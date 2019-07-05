
function ajaxx(url,callback){
		var request;
		if (window.XMLHttpRequest) { //Netscape, Safari, ...
		  request = new XMLHttpRequest();
		} else if (window.ActiveXObject) { //IE
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
					callback(request.responseText)
				}
			}
		};
}


function ajaxxPOST(url,posty,callback){
		var request;
		if (window.XMLHttpRequest) { //Netscape, Safari, ...
		  request = new XMLHttpRequest();
		} else if (window.ActiveXObject) { //IE
		  try {
			request = new ActiveXObject('Msxml2.XMLHTTP');
		  } catch (e) {
			try {
			  request = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {}
		  }
		}
	
		request.open('POST', url, true);
		request.send(posty);
		request.onreadystatechange = function() {
			if(request.readyState === 4) {
				if(request.status === 200) {    
					callback(request.responseText)
				}
			}
		};
}