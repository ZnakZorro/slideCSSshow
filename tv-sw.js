var WIZUT = 0;
var TV_WI_1 = 1;
// usuniete zostaną wszystkie cache oprocz bialej listy
var cacheWhitelist = ['cache_WIZUT-v3','cache_TV_WI-vv'];

var CACHE_NAME = cacheWhitelist[TV_WI_1];

var urlsToCache = 
[
	"./",
	"./index.html",
	"./js/tablica.js",
	"./js/skrypty.js.php",
	"./img/favicon.ico",
	"./img/wi-32.png",
	"./img/wi-144.png",
	"./img/wi-360.png",
	"./img/wi-512.png",
	"./wi1.json",
	"./wi2.json",
	"tv.manifest"
];

/****/
//var arr = ["/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-001.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-002.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-004.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-007.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-011.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-012.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-013.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-015.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-016.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-017.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-018.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-019.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-021.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-023.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-024.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-025.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-028.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-029.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-031.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-032.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-033.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-034.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-035.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-036.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-037.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-038.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-039.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-040.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-041.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-042.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-043.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-047.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-048.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-049.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-054.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-055.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-057.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-058.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-060.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-062.jpg","/tvinfo/tv/tvfoto/Ogrody_Hortulus_2019.06.01-064.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-001.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-002.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-003.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-004.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-005.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-006.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-007.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-009.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-010.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-011.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-013.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-014.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-016.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-017.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-018.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-019.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-020.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-021.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-022.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-023.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-024.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-025.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-026.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-027.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-028.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-029.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-030.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-031.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-032.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-033.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-034.jpg","/tvinfo/tv/tvfoto/Teren w czerwcu 2019-035.jpg"];
//urlsToCache = urlsToCache.concat(arr);
/****/
/*
[
	"./",
	"https://www.wi.zut.edu.pl/tvinfo/tv/index.html",
	"https://www.wi.zut.edu.pl/tvinfo/tv/js/tablica.js",
	"https://www.wi.zut.edu.pl/tvinfo/tv/js/skrypty.js.php",
	"https://www.wi.zut.edu.pl/tvinfo/tv/img/favicon.ico",
	"https://www.wi.zut.edu.pl/media/system/img/wizut-144.png",
	"https://www.wi.zut.edu.pl/tvinfo/tv/wi1.json",
	"https://www.wi.zut.edu.pl/tvinfo/tv/wi2.json",
	"tv.manifest"
];

*/

function handleDelete(){
	// delete old caches
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
			console.log('ddddddddddddddd',(cacheName),cacheWhitelist.indexOf(cacheName))
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })	  
	// delete old caches
}
self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
	
	caches.open(CACHE_NAME)
		.then(function(cache) {
			console.log('Opened cache');
			handleDelete();
			return cache.addAll(urlsToCache);
		})
	);
	event.waitUntil(
		handleDelete()
	);
});
self.addEventListener('activate', function(event) {
  event.waitUntil(
		handleDelete()
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
    );
});
