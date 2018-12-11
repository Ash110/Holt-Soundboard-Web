/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["96.png","e933976539accd680347e76acecbf944"],["Brooklyn-Nine-Nine.jpg","dda86dfd4c120ac55ec25c840e54a022"],["Sans.ttf","eae9c18cee82a8a1a52e654911f8fe83"],["android-chrome-192x192.png","64d7ed5cb6523038a0fe054db3cb0ce9"],["android-chrome-512x512.png","2238e7dbc79d9469fec02c745196ef53"],["animate.css","346964e149ad49ccf4f3da77b66fa086"],["apple-touch-icon-114x114.png","559277bd35bd42f3013409deb395f024"],["apple-touch-icon-120x120.png","b99f7f246b7aa70e7e1394e532b7f2e1"],["apple-touch-icon-144x144.png","61d31e43b91817d566d437d33d8965ce"],["apple-touch-icon-152x152.png","fde0f6c5924196ab639c6e5cbd22b869"],["apple-touch-icon-180x180.png","fa80266bf77b5e61030ba7273f25cf7f"],["apple-touch-icon-57x57.png","20017cbb17c076ecbb15e50cddfd01e9"],["apple-touch-icon-60x60.png","96c6fecfee77cb0b9f1466b8fc6886ad"],["apple-touch-icon-72x72.png","e7fb25bd4580a6be592164c91dddd813"],["apple-touch-icon-76x76.png","627e0977f844ad7ece1adfce498fe0f4"],["apple-touch-icon.png","fa80266bf77b5e61030ba7273f25cf7f"],["bootstrap.min.css","de693e85ce8d70309e59c69b03c2e123"],["bootstrap.min.js","67176c242e1bdc20603c878dee836df3"],["browserconfig.xml","a493ba0aa0b8ec8068d786d7248bb92c"],["contact.html","fdba1cf34741f676ae9afa1451bb9c7e"],["credits.html","b36cb217ea6adf0e30cfe4d0c8fb41b5"],["favicon-16x16.png","867ceb283e98d03d6904982ad71c1681"],["favicon-32x32.png","272838d4d00101a66953b0d0cdc6a6bf"],["favicon.ico","230cbe5f5a43a23749cf27a9b617bdf8"],["index.html","db0f0c844397eba9507f38f3fa0ebef7"],["index2.html","a28e1a1f3780884579e32ad6dcb8db0f"],["index3.html","e5fd82c19e1bc7dd90a1a753880f07fa"],["jquery-2.2.4.min.js","2f6b11a7e914718e0290410e85366fe9"],["jquery.finger.js","1bd3835fc5d1a621d718e81bc163b698"],["js/app.js","d43c150579244614b7b85ac1d1287e05"],["manifest.json","ac2673899f246cd594328489aff636a0"],["materialize.min.css","d9a631ac78c545bbf55304db25b96c97"],["materialize.min.js","d923fe16aca408daba23ca2c7795e08b"],["mstile-150x150.png","b4b874a4258ab2933b97411bb82ae414"],["newSounds/BRB Time.mp3","8bed46a6516433fca6ecf45b4faaa20f"],["newSounds/Bingpot!.mp3","7c8ae0d51299b4c0fea37322bbd73231"],["newSounds/Bold Personality.mp3","4db9ddd11a796d299db5c56696bc5f10"],["newSounds/Bone!.mp3","5508b8d18dc81e915af726d4766d719b"],["newSounds/Boooone!.mp3","7d35d181adb29b83f20924b8f55a274f"],["newSounds/Boost my bottom.mp3","dc10dc21e2c1ebfddf8a7e94181179d7"],["newSounds/Case!.mp3","6fb3ea4a4d5320c234c00c0266256d66"],["newSounds/Cool Cool Cool.mp3","89ffb7bcb5505c4d8a6fb59e0744a065"],["newSounds/Cowabunga, Mother.mp3","5d4e084227d7c44a9a6b625c6f8cdcb6"],["newSounds/Cwazy Cupcakes.mp3","28596c292579540586a900ec74bc4418"],["newSounds/Derek.mp3","d89d170332eb007bb150ddbccb8442b1"],["newSounds/Dirtbag!.mp3","63262b21eedbc35fb1378a3e946bae46"],["newSounds/Dismissed.mp3","58fc2e80174e35e29faf8d3c49863982"],["newSounds/Everything is Garbage.mp3","05b9eaa3003662a989ac5f98c63fab8a"],["newSounds/Extra/Velvet Thunder.ogg","639462edfa30bd45f0c55b935617d9f9"],["newSounds/Funky Cold Medina.mp3","e2b8e7f02a0ea109daf484f75e116ba1"],["newSounds/Funniest Story Ever.mp3","898a6f672cc6874ff7a919e9afb0ecec"],["newSounds/Get Some.mp3","051d4427a071e4e67e71298dd813abe3"],["newSounds/Halloween.mp3","e3841032ba7781087466e7366e3cf079"],["newSounds/Hello Sexarella.mp3","3367bfe848b512d092f441919a392e7f"],["newSounds/Holt Forced Laughing.mp3","79de2c8dbdee2009b50c1ab07879a4c3"],["newSounds/Holt tries a Marshmallow.mp3","3bb4868caa246671d246e8f033a5f5a7"],["newSounds/Holt's robot impression.mp3","42cee3bc40736d365948f13ab862a016"],["newSounds/Hot Damn!.mp3","274c152c5358266e1e1710f05ead2693"],["newSounds/How dare you Detective Diaz.mp3","c6cf40d37a7fbe4b87f037418e840da7"],["newSounds/Huh.mp3","d98075731360d924b4da501511bd1ad5"],["newSounds/I gained 3 pounds.mp3","d9324139e6e85aedd4d27473b83c9c0d"],["newSounds/I was Hula-Hooping.mp3","1117092147adc489a42e68cc618bc4f7"],["newSounds/I'm a Curd-mudgeon.mp3","9a2d41047e749018ab2916ae038ebafc"],["newSounds/I'm diffusing a situation.mp3","d9dd40d8856bccaf9d3d8eed52b86b92"],["newSounds/I'm.mp3","88a1a83004071f45348ef3141feaaf66"],["newSounds/Is everything OK.mp3","5a2322171c9176efab40e497d981a3d6"],["newSounds/It's Halloween man.mp3","38f3f08c9ab15791b9ea8668ab05998c"],["newSounds/Kwazy Cupcakes.mp3","269c71b8c832cba0bfab51734ce77c6c"],["newSounds/Let's get that Punk.mp3","a96237a1c04e1eb709119345f354eda7"],["newSounds/Let's unleash Hell.mp3","6d04670f1dcf0dddc7aededfcc3fcc87"],["newSounds/Logic against me.mp3","50c992129bf3c4df63018e2782dd8db0"],["newSounds/Made No,I birthed her.mp3","9f015b8c5d8af1748cb44ed0160bb01c"],["newSounds/Marco Polo, Punk.mp3","d66786f5ebcc07cbd10537a89302de95"],["newSounds/Never been happier.mp3","216dbe8b0c43a41825706f282764b429"],["newSounds/Never. Love. Anything..mp3","3d33e9e3a05a7935d5c742364629422d"],["newSounds/Next Level.mp3","8046e4685d269c465a4851a6bb04a0ba"],["newSounds/Now put on a smile.mp3","4d97e46f6e21df30737c7cb4007d91d8"],["newSounds/Oh Damn!.mp3","0272ad8ecf099355b92eddcfaca0e991"],["newSounds/Oopsie Doodle.mp3","8769b055ee74dd602432aa7db17ff714"],["newSounds/Painnn.mp3","ee2d99ebe31a817d3a9f780d09f9844b"],["newSounds/Peralta, you're a genius.mp3","3c30c99ed2766c81988bfba12b60faa7"],["newSounds/Raymond Holt.mp3","fce612064cecfff122fab65c26ec9c41"],["newSounds/Secret Weapon.mp3","fa941c72b03dd46e65fa47571337c88a"],["newSounds/Situation diffused.mp3","ee0d24fd17f6aa9deaa83d2ea09e55b9"],["newSounds/Stop playing this inane garbage.mp3","f9b4cf65931441659b10b7d8582759e3"],["newSounds/Superior Officer.mp3","930bb494d4ba96e7f2d81d0651603688"],["newSounds/The Full Bullpen!.mp3","1611d8210e242ef4a33c6480feca73cd"],["newSounds/This is Balthazar.mp3","d595eb0a7cf4176ac8fe705c9135e093"],["newSounds/This is.mp3","3b0b880b18454f9dcd152f3fc4834385"],["newSounds/Time to make Daddy proud.mp3","cae3eeda79e022dd9169ec225ea14a61"],["newSounds/Velvet Thunder.mp3","d19a8091506865e114ae0c51c2a47e46"],["newSounds/Vindication!.mp3","099a96d4b266e1b6a00de2c36173d35b"],["newSounds/What are you doing.mp3","e19f652e62e66e2d120f8c3d142c73a6"],["newSounds/Wuntch Insult 1.mp3","472a8cfab4973d840b6c67d53111800c"],["newSounds/Wuntch Insult 2.mp3","9b2cbbb834ff96a8609aede2e96f6b2a"],["newSounds/Wuntch Insult 3.mp3","2110111cb76abeff176d5dda3ba8f5e2"],["newSounds/Wuntch Insult 4.mp3","1c3afa2abd3cdfe3b0254778feed3195"],["newSounds/Wuntch Insult 5.mp3","f810edcdd55381235054bc738da55772"],["newSounds/Yabba Dabba Doo.mp3","4b81fd44a0ea29fabb322bbf9c61b7c4"],["newSounds/Yas Queen.mp3","08b5d5739e44761a7d0422b1c77d0ab9"],["newSounds/Yes.mp3","ab773aec13cfe724a930ba558802a24a"],["newSounds/You call that, dancing.mp3","ed33e5bc9c7050d05369b73e59a463a2"],["newSounds/You're not Cheddar.mp3","38b06b85d05a0d5212fe86ed906766bf"],["newSounds/Zero interest in food.mp3","6e1039b9ca42ad4ba4ac1bd5fbbf9dec"],["privacy.html","1c40db605ca5cf9d6bb40a80ca84cabc"],["safari-pinned-tab.svg","6e63fb6f2192e92a3518674125f87778"],["script.js","02c8b8709df6f98c10f319974eb42eaa"],["site.webmanifest","a496033c93e5ad4802a7bfc31617eb21"],["stylesheet.css","8f02331cf766eb7e10965bf61d01f084"],["support.html","75cbf0ba84d64ab852c6d19a73ecee9b"],["sw.js","67843e9021f092d950f6a26ac4cc56df"],["temp.txt","f01d914d77547da8389853d0ccb29703"],["xdk/init-dev.js","5bbac46284697ff0e4abfdad2a789db4"],["xdk/project-info.json","fcb1fefcdc94e92332faa5b68670a7cd"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







