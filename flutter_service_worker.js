'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "0bb46348eb88e30f73160d791c93470b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dddcf82ee4a2c19ec969017bd7b82ba4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42a73e94e0cc272c7228f6af97992762",
".git/logs/refs/heads/main": "b68f93409b3f0689b9782d2988d22d74",
".git/logs/refs/remotes/origin/main": "d6327d48a0cf60113f355bbe1d3d3ab0",
".git/objects/05/de6bfaba5de28d19651bdd221f8dea633cc79a": "5607f5aad49c46224470937cbd77634a",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/4280ff3c8165499f8aa4dc908d0f540d05b6f3": "186859696440f95124cd0afbd298a4ed",
".git/objects/07/f43d491846af874e35b7989458416bf02cfdd2": "6448be51d7124df6efa0f454a58e6526",
".git/objects/08/890959879be302e345918c0378ece2b3a37b7b": "e5b5018f6aad857e73f2f4723be5c246",
".git/objects/09/a001ccfa5c27f2adad7d07185c3b094f8eecaf": "7321aa98b5a81fc965b8261fe65486e4",
".git/objects/0a/81fbc886e9cde7c97ed0d6e2b7f3749a95e58d": "1dbcd70daaa5f84093b3047aefc9b5a8",
".git/objects/0a/cf41eca2b888bd69c15f8edbc6b409ccded2d1": "dc9c30868774c061d3d6773b50101151",
".git/objects/0b/bdbc16642a657cdf425762827b91490cbba22c": "72885817e1f47b8c1c4bc565961a1fee",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/17/be4aa23a151504eb809c59483eebfbb10149f4": "d172db4a7830f3d4f978005e404001c8",
".git/objects/18/5556229e3891b94c452c4fdd7695437ba1172b": "2f38e3d48a6ae41f995a38dc46f98ea1",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/82e7038556783df79e8ecf4ef37e2412eabc84": "f6186d7fb30a7d8a6d614ff5f3f01632",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/2754050ce2f345d9b78eced29ce1e5fd38f3a5": "2d7377cf607e513bb2c76ea7f801a73b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/fd56842fda8230d987cd852df65c0af232bb9c": "84492d06f91a76b9e5d2d814d6b54b0a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/79bea9c54d5e637755915ed6d0196360e01913": "85fb91b8c6519ffee5625d0f98cbeba9",
".git/objects/2a/257d666f334b87ea9c4f487103c8e46973c060": "89e2ef7fa36d4e8da94422d899c9586e",
".git/objects/2d/c4c5a7a63b5e0c444cc5e7a8236f06ca378e8f": "6a4213b35674ebc41d20e6ade55656aa",
".git/objects/31/3b30ff76a94cfa36da265e78503efaf4ecc8da": "9cd5356b3d7db24a736b7d3d7880cf2d",
".git/objects/35/a0e32f6c0aab02d7def0f035c4c3cbab54fb89": "a043c33b26c38b86498aa32444958251",
".git/objects/36/5854eed7c3e7ea4c6dc869e6c53a7729dede81": "84181ed0856a8192d18d338cbfe5f6d8",
".git/objects/3e/04e927a7a722b0701a191c8604ab921d89cec0": "14a7d36962c4817a53c7fb20cf1073ba",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/ad1cd833da110eb3bf7137f0f0996fc504fb0a": "b1f1081f89ef28c0a2790dfef4141416",
".git/objects/4d/7f62b4d9d354245a910de555fd9a3dd8ead0de": "250a0119437a59ec789d9f57d8e8b37a",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/70395e10241331178d121fc4a2a7107fcc0318": "57ea081dec4e189418075932c1d81587",
".git/objects/57/bc1df1880225324b89187ed1179b9dc8e88be0": "e9e719e58dcd02108f891b4054730c68",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/5370e160dfc70949b404b6c03bef9aa64f8412": "2b8f2f1d3b1cdd360f2d75ee4a587890",
".git/objects/5d/e9b5559fdc0470265700a5cdf1c35a6156b027": "09b628ba0f19cbc2ed70f69bdccf7d29",
".git/objects/5e/8a30e5a8c815a0b19bb3bcc91c257ce7fdc84b": "a42b480afe0955f235e5ec277c5d3694",
".git/objects/61/9dfdd8141ffa197f316554ea6359043bf3e205": "6f0271937ebb5871c620ba9821dfbeaf",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/52f785bb112927bf1438748305a554ced9e93d": "bb7d60bcf02ab40ea3e7f9f381323372",
".git/objects/6a/a547f99c5b24a5a1b792d2755dec0b75caf92b": "4e748660d0b5327093738254953fe5b7",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/bc365dd50f957ed81547daf1d4379fe4dae140": "8d022c978edcb47fc4739c344833cd16",
".git/objects/7b/bc214d1ed9652913feb35274510cead0d31d12": "e872a738c601dbefd894db2092c0c3e1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/ba36022e786b84613514fdf81c2fede4844d27": "91f196873fc56caba3f5ccf7d01c1a03",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/6f59e8a1d1501f020c4a268d165481fab700e7": "cdd68b4e0aa85df5baca78ac6c334ee2",
".git/objects/8f/5b1f56371f76f1197ee0fc03306c50c794edf3": "d5ffc3d55053ff8e8cc16015ac909299",
".git/objects/90/ce4ce9bd66f9698d1c5e4c3d940a1b00b9ca4b": "b544057ac184562d287de45e57538700",
".git/objects/91/1851144ebb3e5f7f5739430a313aa3228bbfdf": "8f0cab7eba228a9d983e3780ff3cb7e1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/4fb2c9e788555431a55e65dce5ff12844c9152": "a37808a441a9357780440ade9e4c04bf",
".git/objects/9a/89da45fd3b852a1186fec7597f38f1e427b759": "b38c8e54f36d91e327a6493052d99888",
".git/objects/9b/1958350e450080aa149eb747afcf08238d0328": "049d015d7f1a799256066d2200db2f40",
".git/objects/9f/a5c4d5d2260a093144ed93c632339565f7cfcb": "b3793dd283aafdbe714315da1d74d564",
".git/objects/ab/d2b0abc6e10e4998b75a84167bdba1c7ddb95e": "0897896d7766d389b27a86b19f4b52d5",
".git/objects/af/934cfb3beb594d2c5901bf99e6eca4be44e9e0": "5fa998235b56201ad9a327ae920d7684",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/66ca07a762b4644220f5068c187992721d8337": "59aaf5c7b670e9b1d52b5ad6411ba1d5",
".git/objects/b7/25722cc7b7ec036fe2013d37061f09ae70221a": "16808a0d54a530603bd34f2efeda0e3e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/3ea0eeb94e868b736a79e3dc3b3e5506d74acd": "7af1223f93e6424330a54e333e9307fc",
".git/objects/bd/e02baff7e9f042554d1a209af4f28b5ae9739d": "bef615dc9f182bde558ada01fdd8b68e",
".git/objects/bf/42368c9b01ac596cd8c1f117a864f2f7f40e33": "b3b7cdc36641e185fb561ac0aa6fb524",
".git/objects/c0/256a0af2ab6b4742a6f14c7fdb47482864aae2": "e3601ad3c75c30accb457b71e2c68849",
".git/objects/c2/2fc8fff754eaf51d12d7779a4cd98a44490b31": "0a9541b51daaa1e66d6f9a9f5ec49e09",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/0673672b91224e0231c3ef9e9aa250b36d7b71": "3da52840f73eaa626113ac647dbfad0f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f2861eea60329e8252beb89afe66833a893e42": "a84bccfeaecaec79b8662d4f1cdba857",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/6d30540c619f89d04acf84d8aab196b2001c6e": "e6026801a57110887568cdf74e8fb891",
".git/objects/de/3513487e30b603b16c69e62567d45bdb08c0e9": "5f39f7c568a950371c14940edd127d15",
".git/objects/e3/9d9bde96fa6953612d7e95cd0ef0a8990b304a": "c02c864113c8db57280271379a140010",
".git/objects/e3/bae8d532862d78324b3a9cc53901949b97be4b": "2d4e96f74718e9d33bd7ce9c73194ab6",
".git/objects/eb/11b558bd9684cad64f0731b03a798b93852911": "14f3399c2204e51b1305e6356f0c785e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d6d24bffc94d6b26dfcf82b04af6cac8fc592a": "1666b328160742dd692c850bcc618747",
".git/objects/f1/47c09678d5b58d876756c51d04ce1970670c7e": "20162ebc182a11a75f6654027d8a8a86",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/4d14aa931ad6cf42a7fc2d2402cdd0e37e0791": "8a9f8eeaf32cce86ccc069aa82dc9109",
".git/objects/f8/4330da2ccbc8583f9ea9e3f659d8126d0a02cc": "1c031423957cf5c71da0af141773d940",
".git/objects/fb/e11de0a4ed3d9d799394908a2d7edbd36b2fdc": "5853d7d8f41892671f77811e5a7913cc",
".git/objects/fb/f2a5b6e48375ff4b417b62ee5be75178755eb7": "00bcbd7ebb0cd6cf875752d82a6189d6",
".git/objects/ff/5b486ac85c64e1d4bc0f90d85870abcbb8203f": "ea7654d6fab417721503d8a8e53bc1d9",
".git/objects/ff/afb2ea2eb10aced9a6a86628170baf94cc7f9b": "fb45c06b0516e22bd50015d7e0139cf9",
".git/refs/heads/main": "090a5b7f36f92cbf407a09190c5cc6a6",
".git/refs/remotes/origin/main": "090a5b7f36f92cbf407a09190c5cc6a6",
"assets/AssetManifest.bin": "f822d2e705a24c57cdc55232e0d8107f",
"assets/AssetManifest.bin.json": "692c950850c63fe6a7cab76d4ee621c2",
"assets/AssetManifest.json": "d2374e0e504fb156a8ad005a428eab2b",
"assets/assets/icons/dartlang-icon.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/icons/firebase-ar21.svg": "c2ad47d09a673b4f415b054e8f7cdded",
"assets/assets/icons/firebase-icon.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/icons/flutterio-ar21.svg": "f810ecd5efa6b2f7a3db1468d159aff8",
"assets/assets/icons/flutterio-icon.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/icons/git-scm-icon.svg": "adcab6a564a11096dc35f681cfb02ce6",
"assets/assets/icons/postgresql-icon.svg": "7c6cf29f431681cc68b7665bf63ca85e",
"assets/assets/images/cardume1.jpeg": "78321dcd368d6475d11723839c13a75b",
"assets/assets/images/cardume2.jpeg": "880a2c422a7fce0a9af56102897f34fa",
"assets/assets/images/cardume3.jpeg": "2d063877d6dd6a653aa3a2aa37c8592e",
"assets/assets/images/cardume4.jpeg": "653842b224b49ff876c2863e739b5e7c",
"assets/assets/images/cinego1.jpeg": "a17001d1f32990bc9a11807f12571310",
"assets/assets/images/cinego2.jpeg": "61e249b8369bc8a5fc444be6c18deb73",
"assets/assets/images/cinego3.jpeg": "8b24c09c3e179020201bc25de8d6ad8f",
"assets/assets/images/cinego4.jpeg": "f49f63aa3e096a3191dabe370db366d9",
"assets/assets/images/cinego5.jpeg": "b326d679a7b131ea4b4fecac608083cc",
"assets/assets/images/cinego6.jpeg": "622a4dff04c6ec35e3c6e5d674e1852b",
"assets/assets/images/cinego7.jpeg": "09c7e8c3c810eb790fad96d564093052",
"assets/assets/images/cinego8.jpeg": "9a5a5562754e362a31f3e3f6241b692f",
"assets/assets/images/profile.jpg": "7f49d0ba09bebbd1cd90bc8dc8c2e3de",
"assets/assets/images/tbcb1.jpeg": "ebbd8fb41e69bb2fa6c24ed4cb7546dd",
"assets/assets/images/tbcb2.jpeg": "d4bebb8aae07dd5a6432cfc87ec9ae13",
"assets/assets/images/tbcb3.jpeg": "fefb98cb7b448a531f6b6a07c771d5d5",
"assets/assets/images/tbcb4.jpeg": "df550e29ba2d1fb24c5ec6029e15efa9",
"assets/assets/images/tractian1.jpeg": "78e3f2791cc8cebc317d52ea223dd6db",
"assets/assets/images/tractian2.jpeg": "a3c04948c7fe0a0e79fe326f61059e70",
"assets/assets/images/tractian3.jpeg": "227825cba44bba4e8ece04bc18b1e755",
"assets/assets/images/tractian4.jpeg": "674efa494ead1accc4bb7d5d4046f163",
"assets/assets/images/tractian5.jpeg": "97a190acfac3a513eb700516b503dc2e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c89e508e5f2cbafda30e07b594c96332",
"assets/NOTICES": "780cad4f7fc577c3d3592b63c5695806",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bf2cff6a887439e713425d98e2433c9f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a74a64e0acc9e5fb2d4c070f597f89cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1851b95094b4d7d89a426de0e679c33f",
"/": "1851b95094b4d7d89a426de0e679c33f",
"main.dart.js": "27cf2a4a8e5e6aba39a13d916cab96e7",
"manifest.json": "f6a0f5c58ef80c28b4e2892d2df9c9b6",
"README.md": "874ed448e6ccfb47d1cb3aa66777c58b",
"version.json": "6aee002cc0f2fb97d0814be52cc49aaf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
