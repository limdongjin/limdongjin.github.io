/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c3f6d5944bd474aa9a9e03440e3486bc"
  },
  {
    "url": "about/index.html",
    "revision": "e7c479658b687bb31f958a19deeb18c1"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "fc91183cd6baf84592d2a933345ac66e"
  },
  {
    "url": "algorithms/index.html",
    "revision": "9b0b6b0a8209a88bfe78e58142f54785"
  },
  {
    "url": "assets/css/0.styles.c8af0e21.css",
    "revision": "b82f12bc917e5907748c4a54cfec0099"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.851bc2ce.js",
    "revision": "9919f141d3b72ee2e25d4e2d77b00006"
  },
  {
    "url": "assets/js/11.b769df79.js",
    "revision": "791f927768b05614c26dd665e457f9ed"
  },
  {
    "url": "assets/js/12.3a1bbeea.js",
    "revision": "efd673f0e583069996e135fcd08759fe"
  },
  {
    "url": "assets/js/13.d8c6af89.js",
    "revision": "181599a0cb1e66aad4af0e23b94c6ecf"
  },
  {
    "url": "assets/js/14.0b54a461.js",
    "revision": "642e6527d7cc598abaf4ed175ca40d36"
  },
  {
    "url": "assets/js/15.78cb316c.js",
    "revision": "412b167bcbb053cf0b73445001bc86e9"
  },
  {
    "url": "assets/js/16.ef7387e4.js",
    "revision": "0b15925369c823aedbc2af0a8cb39545"
  },
  {
    "url": "assets/js/17.3af0e671.js",
    "revision": "d92fee8518293fdd37266941e1eaa6a8"
  },
  {
    "url": "assets/js/18.1b8fc473.js",
    "revision": "b795d00d8424a8923d8979d9ef6bb95f"
  },
  {
    "url": "assets/js/19.552dc87e.js",
    "revision": "8883169ab399d5c62ded91f3560fe9ba"
  },
  {
    "url": "assets/js/2.b2d564fc.js",
    "revision": "092680b0fc7e5cb4b370827aa016bdb6"
  },
  {
    "url": "assets/js/20.f3896cd2.js",
    "revision": "15c04748340359a9d4e1a283bc3f0094"
  },
  {
    "url": "assets/js/21.a523f3bb.js",
    "revision": "1c207e4dcbde81deab9523fc5452df4f"
  },
  {
    "url": "assets/js/22.66901887.js",
    "revision": "ac32ec5729b04a0954c410057c8ac555"
  },
  {
    "url": "assets/js/23.2e594a21.js",
    "revision": "7d4e4b2a3f8b423f6358a2d1f866eecc"
  },
  {
    "url": "assets/js/24.b1325b39.js",
    "revision": "e99f083b2eab3006ffb7cd0a156dca14"
  },
  {
    "url": "assets/js/25.62c3e3a0.js",
    "revision": "b0f55a0c5e4dd026904138d746e880be"
  },
  {
    "url": "assets/js/26.fb55d5bf.js",
    "revision": "c539da89e6100b6eb3a094079e58a240"
  },
  {
    "url": "assets/js/27.4945f214.js",
    "revision": "1c8356db31a65b788d84d9f1798b3bd6"
  },
  {
    "url": "assets/js/28.ebda3c75.js",
    "revision": "98d13cb42a6006751cd0d5b11a2b61a5"
  },
  {
    "url": "assets/js/29.da0256ed.js",
    "revision": "d4ca3bd1f2ba94b437cea714db0c3169"
  },
  {
    "url": "assets/js/3.ea59e71c.js",
    "revision": "1d79b88c7c49f7a700974967a8a52afa"
  },
  {
    "url": "assets/js/30.57c8414b.js",
    "revision": "4753df4a1e280c59e3cd282c4eccf3fd"
  },
  {
    "url": "assets/js/31.3b1c47bd.js",
    "revision": "62cd59c72c33b14cfe96b11aea41a4ed"
  },
  {
    "url": "assets/js/32.f2e987e7.js",
    "revision": "318e8a59b72920648eafe0d35cf7a48a"
  },
  {
    "url": "assets/js/33.900c3561.js",
    "revision": "abce45c6f515f3ce0bcffa9ce90eab52"
  },
  {
    "url": "assets/js/34.57b5772b.js",
    "revision": "01951d497fac92f6a16d939b8775306d"
  },
  {
    "url": "assets/js/35.79383916.js",
    "revision": "12937ac9fd560a6df23aab1aad5ff13b"
  },
  {
    "url": "assets/js/36.1752f95f.js",
    "revision": "da3c413c998681d743ca86b193ebce04"
  },
  {
    "url": "assets/js/37.236f7dcf.js",
    "revision": "73f01411d90adb4e17b260eb7770e575"
  },
  {
    "url": "assets/js/38.48440e28.js",
    "revision": "e494254054e940d185bcd666b107ab3c"
  },
  {
    "url": "assets/js/39.eb8c0f7c.js",
    "revision": "55ab6aca9a376da40697a28bc0a48330"
  },
  {
    "url": "assets/js/4.e0e8a1d5.js",
    "revision": "a9f510757f1af9e45bc9eaa15a1a68c5"
  },
  {
    "url": "assets/js/40.3f5e3190.js",
    "revision": "e4b5ddea8dd31dba4798dc575d3fa3b5"
  },
  {
    "url": "assets/js/41.03388af2.js",
    "revision": "3e60e946f11f0d62e89578c13cdadb1b"
  },
  {
    "url": "assets/js/42.b04caa29.js",
    "revision": "c40170f36b3cc741314a8e831467948b"
  },
  {
    "url": "assets/js/43.d88fda92.js",
    "revision": "3391d32d9c614d1a1ab495c48992d2a2"
  },
  {
    "url": "assets/js/44.1e371335.js",
    "revision": "8a21f1dbc4fbf1d1d999ed7edf3ce7a3"
  },
  {
    "url": "assets/js/45.9b9ea37f.js",
    "revision": "fcfcbc489d8a8a02190ae2fa6fe71931"
  },
  {
    "url": "assets/js/46.35154291.js",
    "revision": "b4f86ecf7b0ef30d6f1a5cf21bbd1b29"
  },
  {
    "url": "assets/js/47.26c8091c.js",
    "revision": "bf952156d5f312c420537e010ae8eaf1"
  },
  {
    "url": "assets/js/48.2300ec1c.js",
    "revision": "65fb396aad13a26dc9b3b386a2a1a31c"
  },
  {
    "url": "assets/js/49.e646cc47.js",
    "revision": "cd305ac94e7f437a4359cbfd020e57dd"
  },
  {
    "url": "assets/js/5.1499ca33.js",
    "revision": "270dba07989260e63c7bb8dc1c5776d6"
  },
  {
    "url": "assets/js/50.c0ad4db6.js",
    "revision": "1edbd685be77ddf6d1f9a84c3727594f"
  },
  {
    "url": "assets/js/51.5825ced4.js",
    "revision": "5b281ae2076a2767cfd74846c85fe7bb"
  },
  {
    "url": "assets/js/52.03a4d2d6.js",
    "revision": "f80c23a3b25c0f22edb6a3a61cd096a9"
  },
  {
    "url": "assets/js/53.c3e91203.js",
    "revision": "6338e17d299f5974fa99ffc49c6d5b9b"
  },
  {
    "url": "assets/js/54.ee2f1a28.js",
    "revision": "714ea369e1bd058ae4d059d75bac7d12"
  },
  {
    "url": "assets/js/55.6d4a418d.js",
    "revision": "48d05bcb98529dd8199ad39d55559ac8"
  },
  {
    "url": "assets/js/56.f690d539.js",
    "revision": "c77565064c71dd7e5c5ccd57ba6d72e3"
  },
  {
    "url": "assets/js/57.2fa5cf09.js",
    "revision": "d0e6592e72ccad42020ecfb5470345be"
  },
  {
    "url": "assets/js/58.77aa8cf2.js",
    "revision": "bc2acdc26b7edcfac47876b82a631cc2"
  },
  {
    "url": "assets/js/59.4d4cd5b1.js",
    "revision": "5eadc22f65c1b499725447e01e2f4edd"
  },
  {
    "url": "assets/js/6.bbeb2a63.js",
    "revision": "d9779b132b17c27199cb0438701ba25a"
  },
  {
    "url": "assets/js/60.b19de4ad.js",
    "revision": "7ea9b2fa2318f9afda565a75e42f5a3f"
  },
  {
    "url": "assets/js/61.68830754.js",
    "revision": "6cf0b6267169aac2b075e91684d80ce5"
  },
  {
    "url": "assets/js/62.4065e7c2.js",
    "revision": "6ddef2408606acac8a864cb18084bbca"
  },
  {
    "url": "assets/js/63.d7b93eeb.js",
    "revision": "3ac405d12c02ebe6976769b6ef2b9ace"
  },
  {
    "url": "assets/js/64.a3e00bad.js",
    "revision": "1d81d63000b3668e547d42d8da9ce045"
  },
  {
    "url": "assets/js/65.e4d65277.js",
    "revision": "97f3a0243c86c27e82637bcf4ef8817a"
  },
  {
    "url": "assets/js/66.3cf2c1e2.js",
    "revision": "5d97c377f18d5b6b0648a52372fa237f"
  },
  {
    "url": "assets/js/67.1c415d56.js",
    "revision": "2865492f19b2f273f9c3356d1365c265"
  },
  {
    "url": "assets/js/68.8243c424.js",
    "revision": "156927084fb85b7e8b76de4182ef22cd"
  },
  {
    "url": "assets/js/69.a4418bd8.js",
    "revision": "263c25ab04fffc1b69af0a3c5d0072aa"
  },
  {
    "url": "assets/js/7.7810fa6c.js",
    "revision": "a1f25dd45c48890d1c9afd3cf2e04ba9"
  },
  {
    "url": "assets/js/70.43c58256.js",
    "revision": "e8810bcfa1f8120a87db1ec3bd00218c"
  },
  {
    "url": "assets/js/71.a5d3acc9.js",
    "revision": "b0102df0fc09ad7f9191121b7e206382"
  },
  {
    "url": "assets/js/72.02de2788.js",
    "revision": "2b08e7daccfb3e392d362ae00a65c9fb"
  },
  {
    "url": "assets/js/73.d506b267.js",
    "revision": "94473a76c28aff0f458d6ef6b9744ba8"
  },
  {
    "url": "assets/js/74.5fe4f239.js",
    "revision": "47767f8b7a73e1669c72b7a709819b38"
  },
  {
    "url": "assets/js/8.dcdd8d2a.js",
    "revision": "368b907129dbf5131984f6adbcb9024f"
  },
  {
    "url": "assets/js/9.028cf941.js",
    "revision": "6dd9b067c7a5188efbc3ba30096471cd"
  },
  {
    "url": "assets/js/app.b815e32b.js",
    "revision": "7d427973f7563d6f68d6df96177e4560"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "eaadefd35717277aac9c54cab36a2994"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "c32ced5d981f49180f24a951d469343b"
  },
  {
    "url": "aws/index.html",
    "revision": "63a96f85731498fceae3c522fc3d6986"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "c12fedafc41980108320e41108083910"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "f65dce93db536c37793278b9e7b4cbff"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "9f42a6becded414407cf9a691b65c7b8"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "8b703319da5ef0dbeba4661640d8520e"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "7ed998e3d0dcf4cd215cc8696734aad8"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "78e7e7081571eabdc520003c709cf98d"
  },
  {
    "url": "blockchain/index.html",
    "revision": "360ba3533990a682105aca284165f859"
  },
  {
    "url": "category/index.html",
    "revision": "406b04667b1e8b1e28f1f9e04a58fff6"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "dca5a363f6b417188880084e061fd9a3"
  },
  {
    "url": "database/index.html",
    "revision": "b35dae03972f66752d5f7c61f68a2f92"
  },
  {
    "url": "datastructure/index.html",
    "revision": "f384ea73b4445bd1f2cb147deef80d25"
  },
  {
    "url": "documenting/index.html",
    "revision": "56acbebaa289defe23ba3905ceba1354"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "9af47399e5e537df6298ad8f2d96f897"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "0e9941e5679fd243d13cfa38afe2c33c"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "3d15faa04f4924da36c29d9ee93a9b8e"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "9f92d22b2f3f8eb8c9bc6473c5bcd2ab"
  },
  {
    "url": "etc/index.html",
    "revision": "a35ac7e4abf12f85c696361f652f1dd6"
  },
  {
    "url": "git/index.html",
    "revision": "1b264edb695bcf1d60448e866bd1bda5"
  },
  {
    "url": "google1e33a9d36a5295f8.html",
    "revision": "0b32ecf17de7d488e3d6772b01454b75"
  },
  {
    "url": "images/메일건키.png",
    "revision": "b50140dd1d9be174e655aa568283df2b"
  },
  {
    "url": "images/annotation-check.png",
    "revision": "3b20106e71ed602f3f98ac93b30ae1e6"
  },
  {
    "url": "images/bitcoin-timestamp-en.png",
    "revision": "e1b78084514bdfd911157c3d669b1c6d"
  },
  {
    "url": "images/bitcoin-transaction-en.png",
    "revision": "343ac2270bb802046193acb2f8cb04ab"
  },
  {
    "url": "images/edit-configuration.png",
    "revision": "f345894b9f626ef4ac453644920e29ec"
  },
  {
    "url": "images/edit-configuration2.png",
    "revision": "8262d9c77a9588c7211bb6facfca9b6e"
  },
  {
    "url": "images/edit-configuration3.png",
    "revision": "8e968757365b4ed8367f70b5d1c78bec"
  },
  {
    "url": "images/edit-configuration4.png",
    "revision": "bbf9da713944d3171b6b67fd9a04513f"
  },
  {
    "url": "images/gradle-setting.png",
    "revision": "3ddcc24b278a907d479771232ec4b587"
  },
  {
    "url": "images/logo-144.png",
    "revision": "11230a21e063df376c75e8709af62a64"
  },
  {
    "url": "images/run.png",
    "revision": "39aa9d9fdb8ec745b061ec29c874fa90"
  },
  {
    "url": "images/sandbox.png",
    "revision": "11db3a56375c8a635d83852effb66660"
  },
  {
    "url": "images/spring-gradle.png",
    "revision": "ca37a96c51b18c6475fd44cfb34b3ac7"
  },
  {
    "url": "images/spring-gradle2.png",
    "revision": "be1333bc69e5d819e319ce20e1243adc"
  },
  {
    "url": "images/spring-gradle3.png",
    "revision": "6443b625fc9f20d02751f99f9b3216ba"
  },
  {
    "url": "images/spring-gradle4.png",
    "revision": "6dfbf620aa20d99234b47e23f68e0979"
  },
  {
    "url": "images/spring0.png",
    "revision": "17f5f978902f7302d81f80bc4a012f96"
  },
  {
    "url": "images/spring1.png",
    "revision": "ad3aff740d630929f78ff736c23aa37e"
  },
  {
    "url": "images/spring10.png",
    "revision": "84cbb0f9f7df7bf0d1bc18df0720d97a"
  },
  {
    "url": "images/spring11.png",
    "revision": "e9bf371da281c9e06de8f14a2aad76dc"
  },
  {
    "url": "images/spring12.png",
    "revision": "212508bb84ebcb8eefefafb2a3e08839"
  },
  {
    "url": "images/spring13.png",
    "revision": "9f04c93073caa0c41834fb364136bfa0"
  },
  {
    "url": "images/spring14.png",
    "revision": "7f8e5479c05bf2dc2aec2d6bd616f077"
  },
  {
    "url": "images/spring2.png",
    "revision": "8754a57a3e84b03fb89ddbea3006a0ac"
  },
  {
    "url": "images/spring3.png",
    "revision": "b9c1ae61c0952eca7e994f589eb7cd1b"
  },
  {
    "url": "images/spring4.png",
    "revision": "9b8d3f386dd1d6b95b519b2a9a2ac24e"
  },
  {
    "url": "images/spring5.png",
    "revision": "cf78d98ef5503cf6e5d56f95f2f2762a"
  },
  {
    "url": "images/spring6.png",
    "revision": "7f8b51b1062478364af796d8ce809ded"
  },
  {
    "url": "images/spring7.png",
    "revision": "14fe5e0d019589778d7916323f0e19b5"
  },
  {
    "url": "images/spring8.png",
    "revision": "01fbf45964471cf82b5404a8dba40795"
  },
  {
    "url": "images/spring9.png",
    "revision": "765d995c9b1cc2708960ec789d96eb1b"
  },
  {
    "url": "images/uml-template-pattern-house.png",
    "revision": "8322b300c0080dc53614a6b2853e7986"
  },
  {
    "url": "images/uml-template-pattern.jpg",
    "revision": "7d3570299dbd1ccd38b9e2f532db237d"
  },
  {
    "url": "images/zetbrain_diagram0.png",
    "revision": "b6d53b00a1ffd88e2b1f32f6e09b5ff3"
  },
  {
    "url": "images/zetbrain_diagram1.png",
    "revision": "abf03405237e2e761d262e22c46a9158"
  },
  {
    "url": "index.html",
    "revision": "35e0faf77cfc53eaced2d369bcd44eed"
  },
  {
    "url": "java/class/index.html",
    "revision": "417946b2f7e44f8d3eed24c19b5d6849"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "9b77f346e4b95a257286c78f26632063"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "b8e83331f40eafc0c88376c85e69c767"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "7e33322a3f10ee443b93d3ca73f8229a"
  },
  {
    "url": "java/ds/index.html",
    "revision": "95f0c2866cffb7bded056f7c3ba858a2"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "0c4c2eb1e9f578538943aa4e707a65c4"
  },
  {
    "url": "java/index.html",
    "revision": "203f83a8fcaab354d84d6a493e26b20e"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "6c50eef60af3e1b2417dfecf17ccce87"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "bce2721c7485a0dc618bf5d93c73f799"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "059da7fda805696be22c07ad1f890a32"
  },
  {
    "url": "java/spring/index.html",
    "revision": "a031f19a4d305839b72f207d0b58da01"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "d5fc0ae42b2da8526cd39b4c9ce778e2"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "6ce22f2a9a79ef2a3862e7477ddf9813"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "191ff21c2d9ebfaa34a1bd6431e023e0"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "665074494d06a702f64d3a82a6528531"
  },
  {
    "url": "js/index.html",
    "revision": "a7831563d1a8888c5329d9c94452fe44"
  },
  {
    "url": "nlp/index.html",
    "revision": "6d5026ed3d7c1d498cf8d81bac0b143d"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "ab6ae2633209424f93b22f64b54ddb5d"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "da8fe6f3fdc69a064e30afd0b58d093d"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "ceba378272882c376dfc708c9044de30"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "2f0571e9a18292d12e3ca9caec079e27"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "c6538f3903bc6d9e71ebd81207a49f95"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "3420630e5672e032d446e5b669a9a5bf"
  },
  {
    "url": "oop/index.html",
    "revision": "41ef17348272621ba5209150f46606df"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "b8303bfd9c9e6e84d3cf45c2a9f6bb89"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "318a4466be200c195a7fdc59801f7277"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "c6157ff317254d2a5a5b515c2d621c2c"
  },
  {
    "url": "rails/index.html",
    "revision": "d59e87ec31cb3a965d9ad542dd1d9283"
  },
  {
    "url": "rails/install/index.html",
    "revision": "f8a1e4d3dc8ebf1c4ebe8c3d646f2d02"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "aaeb7a60e3fb1684e45244a6dcdcfbb4"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "c45f0938a789ce740ac45b351dae4146"
  },
  {
    "url": "tag/index.html",
    "revision": "8371f13de51e7e3f05e711ce10252de6"
  },
  {
    "url": "tools/index.html",
    "revision": "bf0e96b02320b2ead865bda59a7fc791"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "c129876e7acdccac4ae0b06f1720d887"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "51ffd9d71c046ccb67e751389274480f"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "252d0318692c539ff84caa3038cfd4ab"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "5b69f0883bf1498e85222c9cc7acdd3d"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "a852c58cf998e5dfe648d49e54142b24"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "f30e25d372cd91a96277b26d160cc280"
  },
  {
    "url": "vuejs/index.html",
    "revision": "1339051fd8103099aa92e0f66430a85c"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "0274e128cc7f1b0c8ec089ec670dc040"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "4b06ba966c31976d5443634127a846c9"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "d5b7863958a8d3de11e6e165834efaf2"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "16f90599595fe88134f3f30aa288c9ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
