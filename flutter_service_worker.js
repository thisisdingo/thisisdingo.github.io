'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cc0c46ee4ef5c7c73388a8aa5f2259d2",
"index.html": "4baa7965b4a556183d4c2f3c2257b53e",
"/": "4baa7965b4a556183d4c2f3c2257b53e",
"main.dart.js": "8d919578f674d7d4d8419a113862a529",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0b55e80b85a72f70b72ce26e3580bac9",
"assets/AssetManifest.json": "93a70984d95493da07a2d77c581f144d",
"assets/NOTICES": "73169c87300550dec7cbb36bc732ed77",
"assets/FontManifest.json": "993424a453afb8a4cbef84c7c2d9531c",
"assets/packages/flutter_smartlook/lib/smartlook.png": "49cb46409394bd16d0a8f924a54b7cc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "b766e321742d36a9a8680e39be47deef",
"assets/fonts/MaterialIcons-Regular.otf": "d6b31c83efcc4148d1936c7afe5ecc3d",
"assets/assets/info.png": "a59b7fd759f707904d2a9f5b185605c7",
"assets/assets/pony_logo.svg": "9ef8e39e1c3cea710aa2cc0758696413",
"assets/assets/translation.png": "61113bcb3ffcdc82775451a41e372d0c",
"assets/assets/pause_black.png": "1b5789b7200baebd45034604574d78c0",
"assets/assets/fill_the_gapps_empty_white.png": "97db3fa205ee79510c0e23c44ec468b2",
"assets/assets/check.png": "1c42ef13d1da8fe25e1b5405b56b2250",
"assets/assets/flag_pt.svg": "6c7d9ca156b5419aa2c9964eb6a0c489",
"assets/assets/add_file.png": "64a60c6226325eaac134d6978a8e6fcb",
"assets/assets/flag_it.svg": "1d72a5dec3acd073763570e3e5fdf784",
"assets/assets/star_white.png": "5513cd0fa33affc4dbe662436ed09e9e",
"assets/assets/intro_button_bg.png": "fefdb0451d8471aa4c7ab37a0acade82",
"assets/assets/rate_red.png": "d6184a4f49bf02c605cfad32d9fd542f",
"assets/assets/flag_de.svg": "78feb91bfda2ddce6bcfdcbab050995b",
"assets/assets/active_auto_pause.png": "d5417a057d91564d12f4f82f54100e71",
"assets/assets/neutral.png": "e59cfd6f0a3af6d99baf98dd953e1d57",
"assets/assets/book.png": "a575a6ad060e663fae6d765a3e71a17e",
"assets/assets/force.png": "6ba11733d231299e4f33dcd73710b4df",
"assets/assets/flag_hu.svg": "966f49336f7466efd6f8dbe19f9fc300",
"assets/assets/drag_burger.png": "e072245cd14fab6b9fbe5b275ff075a1",
"assets/assets/download.png": "6534875d62f3fde37c0ac7be435b3228",
"assets/assets/flag_fi.svg": "0e5ef3f583daa1a415330bed83ce8c4a",
"assets/assets/flag_ps.svg": "d5bd54618d08cafed312fb87c3ec1dd2",
"assets/assets/fill_the_gapps.png": "877d2dbe855bb47280e41ff02433477a",
"assets/assets/profile_white.png": "41ca91a28cd70dcef00e0538f99b84fb",
"assets/assets/flag_es.svg": "91221aeba452aeb57c55826c70920835",
"assets/assets/settings.png": "075e602a1a861b6d52806370c6518544",
"assets/assets/no_words_in_glossary.png": "b3c6cf8b79953df57de808fe797d5839",
"assets/assets/auto_pause_black.png": "81df0d6eb6fe5d9799efa3e93803110c",
"assets/assets/eye_white.png": "a124721e68683fe29e76ec9355d29300",
"assets/assets/intro_footer.svg": "07726802f4bb880859b18b9a3c866ecf",
"assets/assets/lock.png": "3378e7e090560bb806ee8e319c04ecf4",
"assets/assets/radio_unselected_disabled.png": "05514b6c3a7b150585925ad3eab637be",
"assets/assets/back_black.png": "a9d9c5075a811d5875ba291301424e0a",
"assets/assets/no_connection.png": "73c1edb5ae0b56cd6e8cce6e41c16852",
"assets/assets/active_auto_pause_black.png": "705d3f101ed1d9a48ccd995fe1d56736",
"assets/assets/mic_white.png": "8c811d3af9c54eae8a379dc6e2e17241",
"assets/assets/eye_remove_white.png": "f2df4e6e54ae3d5fdfed7af6af0b4e4e",
"assets/assets/attention_red.png": "3e12cdc66c6457f6aca9466020f8b0ff",
"assets/assets/intro_8_5.png": "48b52d66ae8e24e32fec8a35a02eec9c",
"assets/assets/logout.png": "cfb867939f6064b83d0dd309bad7a331",
"assets/assets/radio_unselected.png": "0c6c3b3e69eb31af5ebded124fc2e245",
"assets/assets/intro_8_4.png": "ad5b2e964864486532080fa67542e122",
"assets/assets/checkbox_white.png": "fd16509b315ad55bcd1675b41de93b69",
"assets/assets/home.png": "ac1dfe249472319707776ceb7c7dbff9",
"assets/assets/intro.png": "c244920dbaecd0662005fccd7cb635bd",
"assets/assets/glossary_check.png": "1c42ef13d1da8fe25e1b5405b56b2250",
"assets/assets/fill_the_gapps_white.png": "56974df55752564bc7c5f73d8c3091e4",
"assets/assets/account.png": "079fe006bd7f16bf4627d2fb159f3ac9",
"assets/assets/remove_file.png": "dc1608c9013d99807f779b739ada6c4e",
"assets/assets/home_no_connection.png": "2cdaea082d1eb48c7181e19ab9c25589",
"assets/assets/wrong_answer.png": "80f6b2c1326ac5962f7a947e6f6c21f7",
"assets/assets/intro_8_1.png": "1b62858c1a15ecdbcdbbc7e8d7621463",
"assets/assets/success.mp3": "78dccfdb37e2486661a3126b424a40c5",
"assets/assets/repeat.png": "2138a91850a0bb666e72c74a2cf7a279",
"assets/assets/rate_green.png": "8b1f170c1ed8fb3ecc7b630ce3d25111",
"assets/assets/intro_8_3.png": "3540653e72d790576710b7ad591b0e0a",
"assets/assets/download_black.png": "54ad70d672ce5990c352f176a902c38e",
"assets/assets/no_connection_light.png": "1a161777f3d932a379c960ebe74fb897",
"assets/assets/bulb.png": "ce4ba4f3c907002492e6972eeca69a50",
"assets/assets/intro_8_2.png": "b581633a2d94e90402efd7d8b3c3f495",
"assets/assets/search.png": "93a1abbe1a548342145a9ebc6264868b",
"assets/assets/start_learn_2.png": "83ba382606b177cd2c779b99c1cf5f59",
"assets/assets/intro_2_4.png": "1f4fe7398884942556640f16cf9f3fdb",
"assets/assets/history.png": "0b554d10a19bfde0405a32104f5f6f8e",
"assets/assets/check_white.png": "062ab368e631de2cce676cb8843ec562",
"assets/assets/intro_2_5.png": "ca5a66ab764f66cb781efdb28d46469a",
"assets/assets/checkbox_white_filled.png": "8a0f3d87e1f246880cc8cd22e7fcb086",
"assets/assets/block.png": "cff6dfb6b4a8b43f7c13b9dde92a3895",
"assets/assets/union_light_bg.svg": "31d8cc76ee5e00d2413972c1bd02344c",
"assets/assets/locked.png": "ba83a8e5e84e6d393781120554812e0e",
"assets/assets/apple.png": "52ba6a948045cbe05e67382fb6036a9c",
"assets/assets/intro_6_1.png": "6bd743cb580835ab754a20f41bf57003",
"assets/assets/avatar.png": "23d42a55459c72ecc1ee08251e1f8ec6",
"assets/assets/auto_pause.png": "f3cc28284dfe30296021b919bc0e5415",
"assets/assets/intro_4_1.png": "091871c6994b144a402fecf3823fcebc",
"assets/assets/force_black.png": "6503a0aa3f3b73a4c91e07be8f213aa1",
"assets/assets/glossary_close.png": "3f25d3d2d61fcf272ec9fd7556bacf25",
"assets/assets/flag_zh.svg": "347824ed3b1806718c8881e7e2f13697",
"assets/assets/play_black.png": "bf20f67e0a81e80c6eac52068d920169",
"assets/assets/intro_2_6.png": "b581633a2d94e90402efd7d8b3c3f495",
"assets/assets/flag_nl.svg": "f685765a298db5ba59fddfa6de08020e",
"assets/assets/chevrone_right.png": "beee381494fd43a3e9b1cc61eb78f8f7",
"assets/assets/friendly.png": "d9f95d49b3d4b6902c6fd15210ab8ad2",
"assets/assets/pause.png": "47df1523876b62dbae036fae8f88e0fb",
"assets/assets/postpone.png": "033b815d016e49f30437112d17c5786c",
"assets/assets/intro_2_2.png": "84ec677268d8b1cc92db94fb0fde684d",
"assets/assets/chevrone_left.png": "f623bd4df9a2d61aa9c967be89e57615",
"assets/assets/filter.png": "a9d603b4884f37163cda29c89b13a62c",
"assets/assets/intro_2_3.png": "e4063cb7b3accd94525e53c27acd8613",
"assets/assets/comment.png": "1926a36b7be918a0415a84903aa5dd0d",
"assets/assets/text_size_white.png": "06c22d5e0386f2bf270f52253178bb67",
"assets/assets/start_learn_bg.png": "43ffa66d526cb6e1269fa453d03cb4f3",
"assets/assets/flag_ua.svg": "6d944bf795f95c09b2f78819af42db89",
"assets/assets/flag_tr.svg": "4dd4b60c8a5e3dad5e65fdfa9745c03f",
"assets/assets/intro_2_1.png": "403753d187cee9e782af5af5e6de8cc2",
"assets/assets/correct_answer.png": "80e7b822d656ef080618bc566a1b3e23",
"assets/assets/close_player.png": "492280ff850836c06e178a2039f7892a",
"assets/assets/eye_black.png": "9c0f8f434f69484165a9a897b41f2405",
"assets/assets/flag_ar.svg": "42d71570eaa84e61032f934cc8296e79",
"assets/assets/rude.png": "06c4ea802f1227993063aad00f45e656",
"assets/assets/union_dark_bg.svg": "f03e3204c1581763c2b776b24ad793ed",
"assets/assets/clock.png": "fef282031aca43c8a58147ab92355572",
"assets/assets/intro_vector.svg": "1ebb9c17471a4b878985612eff734b44",
"assets/assets/pencil.png": "f614909c5649dc793f2ea1a35127015c",
"assets/assets/intro_5_1.png": "f5d5c7709ae3b117a8226001f197cf71",
"assets/assets/remove_downloaded_content.png": "b98d72fd68484bf5bfe31c0acc03074d",
"assets/assets/fill_the_gapps_empty.png": "f2de210f17f71a29b95c331fc175379a",
"assets/assets/speaker_black.png": "59ad4d8bf7729d2e4e83fdbb5981c780",
"assets/assets/intro_7_2.png": "30138904196e9a3822dafe8e2c67e88e",
"assets/assets/eye_remove_black.png": "fbec733fc5b7bbab4157c94295248e79",
"assets/assets/star.png": "434563bdca983a7398a8103b9c9d5452",
"assets/assets/flag_fr.svg": "1359039ac6468ef0d4bcdb6ca17a44a6",
"assets/assets/trash.png": "f55723ba8e2d2065467bfd7a03c21e76",
"assets/assets/intro_5_2.png": "3b5fc00601505f6a5df6e2af930613d1",
"assets/assets/rate_yellow.png": "6102703555ab908c02e08bf68c73001c",
"assets/assets/bg_gradient.png": "23d1e759a73f58df3068d243abbd9a93",
"assets/assets/intro_7_1.png": "a26933a68de616a04d74c2568d581dce",
"assets/assets/fonts/NotoSans-Regular.ttf": "2a1861cd1ca7030ae9bb29f3192bb1e3",
"assets/assets/fonts/NotoSans-Medium.ttf": "42b6fa652971de0a49b3df511da65245",
"assets/assets/fonts/NotoSans-Bold.ttf": "b20e2d260790596b6f6624a42b9c7833",
"assets/assets/fonts/NotoSans-SemiBold.ttf": "4723ed1f1d9485302c3bb3e65e3d7693",
"assets/assets/fonts/NotoSans-Light.ttf": "1632b83b314172172674db7afca635e4",
"assets/assets/fonts/NotoSans-ExtraLight.ttf": "c6c6709da314a8eb047ac35f78f893d5",
"assets/assets/fonts/NotoSans-ExtraBold.ttf": "378d7e386ebfc63cad4207bc36d9fa70",
"assets/assets/glossary.png": "3dbc807f1004035bb60194e5facda20b",
"assets/assets/google.png": "579fb2d871a5697e7eb67f132aa38354",
"assets/assets/facebook.png": "18d5037e3476e66407c111a06a235916",
"assets/assets/intro_3_1.png": "a53135edf423dff20f4039a4b4746398",
"assets/assets/speaker.png": "38ac02f9aac2d38b7532d67ada89a692",
"assets/assets/glossary_play.png": "a2dc2321ffe6ee97563ef280105d30f4",
"assets/assets/flag_el.svg": "71452bbd08d693543125cc15f5943637",
"assets/assets/flag_pl.svg": "f7adaa942c63ca98f1d2362bc67c45e3",
"assets/assets/radio_selected.png": "27900ce9c1890b2eea3f94eb1b7d0ba2",
"assets/assets/play.png": "f07df9842efe71d66f0c93fccdf93ad1",
"assets/assets/back.png": "77ef2c1e821a53d31453f93432cde95d",
"assets/assets/intro_3_2.png": "50e23e8eb1b8a69d0a04a36458111490",
"assets/assets/flag_en.svg": "fcfef6780b36bef537381474df9d0be9",
"assets/assets/flag_ja.svg": "766ca913ae6b75768804134257ffae80",
"assets/assets/intro_1_1.png": "dd1d06fa9f38f68996249e2a569aff8e",
"assets/assets/close.png": "c354fc4e0691253fced0fc9e7b5cf66f",
"assets/assets/speaker_off.png": "79e64bfe1ee796f30df00ed0d5b21868",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
