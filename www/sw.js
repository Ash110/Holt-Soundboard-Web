self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('holt-soundboard').then(function(cache) {
     return cache.addAll([
     	'https://soundboards.xyz/www/96.png',
        'https://soundboards.xyz/www/android-chrome-192x192.png',
		'https://soundboards.xyz/www/android-chrome-512x512.png',
		'https://soundboards.xyz/www/animate.css',
		'https://soundboards.xyz/www/apple-touch-icon-114x114.png',
		'https://soundboards.xyz/www/apple-touch-icon-120x120.png',
		'https://soundboards.xyz/www/apple-touch-icon-144x144.png',
		'https://soundboards.xyz/www/apple-touch-icon-152x152.png',
		'https://soundboards.xyz/www/apple-touch-icon-180x180.png',
		'https://soundboards.xyz/www/apple-touch-icon-57x57.png',
		'https://soundboards.xyz/www/apple-touch-icon-60x60.png',
		'https://soundboards.xyz/www/apple-touch-icon-72x72.png',
		'https://soundboards.xyz/www/apple-touch-icon-76x76.png',
		'https://soundboards.xyz/www/apple-touch-icon.png',
		'https://soundboards.xyz/www/bootstrap.min.css',
		'https://soundboards.xyz/www/bootstrap.min.js',
		'https://soundboards.xyz/www/Brooklyn-Nine-Nine.jpg',
		'https://soundboards.xyz/www/browserconfig.xml',
		'https://soundboards.xyz/www/contact.html',
		'https://soundboards.xyz/www/credits.html',
		'https://soundboards.xyz/www/dirlist.txt',
		'https://soundboards.xyz/www/favicon-16x16.png',
		'https://soundboards.xyz/www/favicon-32x32.png',
		'https://soundboards.xyz/www/favicon.ico',
		'https://soundboards.xyz/www/index.html',
		'https://soundboards.xyz/www/index2.html',
		'https://soundboards.xyz/www/index3.html',
		'https://soundboards.xyz/www/jquery-2.2.4.min.js',
		'https://soundboards.xyz/www/jquery.finger.js',
		'https://soundboards.xyz/www/listjpg.txt',
		'https://soundboards.xyz/www/manifest.json',
		'https://soundboards.xyz/www/materialize.min.css',
		'https://soundboards.xyz/www/materialize.min.js',
		'https://soundboards.xyz/www/mstile-150x150.png',
		'https://soundboards.xyz/www/offline.js',
		'https://soundboards.xyz/www/privacy.html',
		'https://soundboards.xyz/www/safari-pinned-tab.svg',
		'https://soundboards.xyz/www/Sans.ttf',
		'https://soundboards.xyz/www/script.js',
		'https://soundboards.xyz/www/site.webmanifest',
		'https://soundboards.xyz/www/site.webmanifest.json',
		'https://soundboards.xyz/www/stylesheet.css',
		'https://soundboards.xyz/www/support.html',
		'https://soundboards.xyz/www/temp.txt',
		'https://soundboards.xyz/www/upup.min.js',
		'https://soundboards.xyz/www/upup.sw.min.js',
		'https://soundboards.xyz/www/newSounds/Bingpot!.mp3',
		'https://soundboards.xyz/www/newSounds/Bold Personality.mp3',
		'https://soundboards.xyz/www/newSounds/Bone!.mp3',
		'https://soundboards.xyz/www/newSounds/Boooone!.mp3',
		'https://soundboards.xyz/www/newSounds/Boost my bottom.mp3',
		'https://soundboards.xyz/www/newSounds/BRB Time.mp3',
		'https://soundboards.xyz/www/newSounds/Case!.mp3',
		'https://soundboards.xyz/www/newSounds/Cool Cool Cool.mp3',
		'https://soundboards.xyz/www/newSounds/Cowabunga, Mother.mp3',
		'https://soundboards.xyz/www/newSounds/Cwazy Cupcakes.mp3',
		'https://soundboards.xyz/www/newSounds/Derek.mp3',
		'https://soundboards.xyz/www/newSounds/Dirtbag!.mp3',
		'https://soundboards.xyz/www/newSounds/Dismissed.mp3',
		'https://soundboards.xyz/www/newSounds/Everything is Garbage.mp3',
		'https://soundboards.xyz/www/newSounds/files.txt',
		'https://soundboards.xyz/www/newSounds/Funky Cold Medina.mp3',
		'https://soundboards.xyz/www/newSounds/Funniest Story Ever.mp3',
		'https://soundboards.xyz/www/newSounds/Get Some.mp3',
		'https://soundboards.xyz/www/newSounds/Halloween.mp3',
		'https://soundboards.xyz/www/newSounds/Hello Sexarella.mp3',
		'https://soundboards.xyz/www/newSounds/Holt Forced Laughing.mp3',
		'https://soundboards.xyz/www/newSounds/Holt tries a Marshmallow.mp3',
		"https://soundboards.xyz/www/newSounds/Holt's robot impression.mp3",
		'https://soundboards.xyz/www/newSounds/Hot Damn!.mp3',
		'https://soundboards.xyz/www/newSounds/How dare you Detective Diaz.mp3',
		'https://soundboards.xyz/www/newSounds/Huh.mp3',
		'https://soundboards.xyz/www/newSounds/I gained 3 pounds.mp3',
		'https://soundboards.xyz/www/newSounds/I was Hula-Hooping.mp3',
		"https://soundboards.xyz/www/newSounds/I'd like to play.mp3",
		"https://soundboards.xyz/www/newSounds/I'm a Curd-mudgeon.mp3",
		"https://soundboards.xyz/www/newSounds/I'm diffusing a situation.mp3",
		"https://soundboards.xyz/www/newSounds/I'm.mp3",
		"https://soundboards.xyz/www/newSounds/Is everything OK.mp3",
		"https://soundboards.xyz/www/newSounds/It's Halloween man.mp3",
		'https://soundboards.xyz/www/newSounds/Kwazy Cupcakes.mp3',
		"https://soundboards.xyz/www/newSounds/Let's get that Punk.mp3",
		"https://soundboards.xyz/www/newSounds/Let's unleash Hell.mp3",
		'https://soundboards.xyz/www/newSounds/Logic against me.mp3',
		'https://soundboards.xyz/www/newSounds/Made No,I birthed her.mp3',
		'https://soundboards.xyz/www/newSounds/Marco Polo, Punk.mp3',
		'https://soundboards.xyz/www/newSounds/Never been happier.mp3',
		'https://soundboards.xyz/www/newSounds/Never. Love. Anything..mp3',
		'https://soundboards.xyz/www/newSounds/Next Level.mp3',
		'https://soundboards.xyz/www/newSounds/Now put on a smile.mp3',
		'https://soundboards.xyz/www/newSounds/Oh Damn!.mp3',
		'https://soundboards.xyz/www/newSounds/Oopsie Doodle.mp3',
		'https://soundboards.xyz/www/newSounds/Painnn.mp3',
		"https://soundboards.xyz/www/newSounds/Peralta, you're a genius.mp3",
		'https://soundboards.xyz/www/newSounds/Raymond Holt.mp3',
		'https://soundboards.xyz/www/newSounds/Secret Weapon.mp3',
		'https://soundboards.xyz/www/newSounds/Situation diffused.mp3',
		'https://soundboards.xyz/www/newSounds/Stop playing this inane garbage.mp3',
		'https://soundboards.xyz/www/newSounds/Superior Officer.mp3',
		'https://soundboards.xyz/www/newSounds/The Full Bullpen!.mp3',
		'https://soundboards.xyz/www/newSounds/This is Balthazar.mp3',
		'https://soundboards.xyz/www/newSounds/This is.mp3',
		'https://soundboards.xyz/www/newSounds/Time to make Daddy proud.mp3',
		'https://soundboards.xyz/www/newSounds/Velvet Thunder.mp3',
		'https://soundboards.xyz/www/newSounds/Vindication!.mp3',
		'https://soundboards.xyz/www/newSounds/What are you doing.mp3',
		'https://soundboards.xyz/www/newSounds/Wuntch Insult 1.mp3',
		'https://soundboards.xyz/www/newSounds/Wuntch Insult 2.mp3',
		'https://soundboards.xyz/www/newSounds/Wuntch Insult 3.mp3',
		'https://soundboards.xyz/www/newSounds/Wuntch Insult 4.mp3',
		'https://soundboards.xyz/www/newSounds/Wuntch Insult 5.mp3',
		'https://soundboards.xyz/www/newSounds/Yabba Dabba Doo.mp3',
		'https://soundboards.xyz/www/newSounds/Yas Queen.mp3',
		'https://soundboards.xyz/www/newSounds/Yes.mp3',
		'https://soundboards.xyz/www/newSounds/You call that, dancing.mp3',
		"https://soundboards.xyz/www/newSounds/You're not Cheddar.mp3",
		'https://soundboards.xyz/www/newSounds/Zero interest in food.mp3',

        ]);
   })
 );
});

addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;     // if valid response is found in cache return it
        } else {
          return fetch(event.request)     //fetch from internet
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());    //save the response for future
                  return res;   // return the fetched data
                })
            })
            .catch(function(err) {       // fallback mechanism
              return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                .then(function(cache) {
                  return cache.match('/offline.html');
                });
            });
        }
      })
  );
});      