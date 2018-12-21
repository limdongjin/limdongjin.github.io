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
    "revision": "de2eac3284d9f1fcb250934e300aac66"
  },
  {
    "url": "about/index.html",
    "revision": "9e17a972682dc2fde51f53a1881d9b84"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "e0f47b66bbd96f3cbbbbc4769bd90534"
  },
  {
    "url": "algorithms/index.html",
    "revision": "4fe5d6f92c343efd410cd52db5336586"
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
    "url": "assets/js/10.1264128a.js",
    "revision": "0843014f466c3cb4443a37e4e8a5f405"
  },
  {
    "url": "assets/js/11.ba8e6ae6.js",
    "revision": "bb61e83c8e083e912a9093c0e6622c11"
  },
  {
    "url": "assets/js/12.3a1bbeea.js",
    "revision": "efd673f0e583069996e135fcd08759fe"
  },
  {
    "url": "assets/js/13.d3004717.js",
    "revision": "05740c632a8f71017dc647c90c1216f3"
  },
  {
    "url": "assets/js/14.2a954978.js",
    "revision": "a75f001dac19bcbafb51ff1d36219393"
  },
  {
    "url": "assets/js/15.e0a2e3d4.js",
    "revision": "c6f26547acb557c17cc170f26dfddcba"
  },
  {
    "url": "assets/js/16.63fa9f32.js",
    "revision": "ce6af6a6b80a395373cfd0532055338a"
  },
  {
    "url": "assets/js/17.3af0e671.js",
    "revision": "d92fee8518293fdd37266941e1eaa6a8"
  },
  {
    "url": "assets/js/18.5016d082.js",
    "revision": "5cc41dee890d85d302b27dd9b7385094"
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
    "url": "assets/js/21.c97c9202.js",
    "revision": "927ae4b3f8ac7594ae2a39bf20ee607d"
  },
  {
    "url": "assets/js/22.66901887.js",
    "revision": "ac32ec5729b04a0954c410057c8ac555"
  },
  {
    "url": "assets/js/23.ca1ef04e.js",
    "revision": "d5bd2be0bf96238f434f5e40aa7d0709"
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
    "url": "assets/js/28.6c33698f.js",
    "revision": "479bbc00f7a76d96a85074145526f742"
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
    "url": "assets/js/30.d4b5ce95.js",
    "revision": "bf349e95abe6a8cf2c29759c2c80b9f4"
  },
  {
    "url": "assets/js/31.61ab8db4.js",
    "revision": "90caabc7a56b7e1606f8cc8bd7bee63c"
  },
  {
    "url": "assets/js/32.09b6a912.js",
    "revision": "7fe5498bf118545305c1969281e870ff"
  },
  {
    "url": "assets/js/33.cab1fc82.js",
    "revision": "71c785a97b9ea1afb0cfad4205012349"
  },
  {
    "url": "assets/js/34.9453751e.js",
    "revision": "8a0586b484e4a124138f436cf5a622d3"
  },
  {
    "url": "assets/js/35.79383916.js",
    "revision": "12937ac9fd560a6df23aab1aad5ff13b"
  },
  {
    "url": "assets/js/36.8d2a6f6d.js",
    "revision": "8a44a2c5c1bb1ea4708224be1b8d049a"
  },
  {
    "url": "assets/js/37.236f7dcf.js",
    "revision": "73f01411d90adb4e17b260eb7770e575"
  },
  {
    "url": "assets/js/38.5a7de904.js",
    "revision": "830cc1acc24fe3ca0a7e949a99e9987b"
  },
  {
    "url": "assets/js/39.18f6bdf3.js",
    "revision": "119ccf1a7c839ff800f05780c8a8d2ea"
  },
  {
    "url": "assets/js/4.e0e8a1d5.js",
    "revision": "a9f510757f1af9e45bc9eaa15a1a68c5"
  },
  {
    "url": "assets/js/40.d65973c5.js",
    "revision": "04a36f79a8508757fa25df7b1ead0c4a"
  },
  {
    "url": "assets/js/41.2ba0d401.js",
    "revision": "2dab209e69ef7cca599c393fdb1ac881"
  },
  {
    "url": "assets/js/42.b7a1f526.js",
    "revision": "d2767ca03e5614640bfe4f0147ad96ad"
  },
  {
    "url": "assets/js/43.d88fda92.js",
    "revision": "3391d32d9c614d1a1ab495c48992d2a2"
  },
  {
    "url": "assets/js/44.ee24e377.js",
    "revision": "1c334990eba455184e3bae2e079500cc"
  },
  {
    "url": "assets/js/45.9b9ea37f.js",
    "revision": "fcfcbc489d8a8a02190ae2fa6fe71931"
  },
  {
    "url": "assets/js/46.f37dc581.js",
    "revision": "17137ce0c58d9e3d823a2dfceb5fd681"
  },
  {
    "url": "assets/js/47.b789dd8f.js",
    "revision": "908f96bfc45670ebcce9604ece57f137"
  },
  {
    "url": "assets/js/48.dac14c26.js",
    "revision": "18c5b1c2e9c5d84e682992c79afe4b4d"
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
    "url": "assets/js/50.1f005e22.js",
    "revision": "0369d9c1faacc4771c43c52bdbfba6aa"
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
    "url": "assets/js/54.79aa5a70.js",
    "revision": "396db61fb359854cd98a4f470213892f"
  },
  {
    "url": "assets/js/55.cd8861dc.js",
    "revision": "f973178289ec48562a0d7c49cd9de7a6"
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
    "url": "assets/js/58.0c1c65f9.js",
    "revision": "ce2b2e4c724c86427d206211a6579be9"
  },
  {
    "url": "assets/js/59.fdb533b0.js",
    "revision": "4846adf1b2cec5460d4804a4f9444fa2"
  },
  {
    "url": "assets/js/6.bbeb2a63.js",
    "revision": "d9779b132b17c27199cb0438701ba25a"
  },
  {
    "url": "assets/js/60.18cefe9d.js",
    "revision": "a377f6b72b33ae0d0d45c98a3bcc0126"
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
    "url": "assets/js/63.f9c06fdb.js",
    "revision": "5b6307506f62bbae30a68ce348719094"
  },
  {
    "url": "assets/js/64.a3e00bad.js",
    "revision": "1d81d63000b3668e547d42d8da9ce045"
  },
  {
    "url": "assets/js/65.e4d5a0c9.js",
    "revision": "c197a3bdef4a2954b0121e12a414f90a"
  },
  {
    "url": "assets/js/66.3cf2c1e2.js",
    "revision": "5d97c377f18d5b6b0648a52372fa237f"
  },
  {
    "url": "assets/js/67.c593fec9.js",
    "revision": "ed5a8ec03e18217de8529c91f097678d"
  },
  {
    "url": "assets/js/68.e00fa3f9.js",
    "revision": "aad7eb8692f4faaf5341dbd11833dfd2"
  },
  {
    "url": "assets/js/69.2f9a55f8.js",
    "revision": "50cd1755637114bf419267ccdff9face"
  },
  {
    "url": "assets/js/7.7810fa6c.js",
    "revision": "a1f25dd45c48890d1c9afd3cf2e04ba9"
  },
  {
    "url": "assets/js/70.4bcb459a.js",
    "revision": "8f35a746862656a7f7993b760075e94c"
  },
  {
    "url": "assets/js/71.a5d3acc9.js",
    "revision": "b0102df0fc09ad7f9191121b7e206382"
  },
  {
    "url": "assets/js/72.fe3a96a4.js",
    "revision": "5b7681d8154de4bd8d713fe02e01af3b"
  },
  {
    "url": "assets/js/73.1b52587a.js",
    "revision": "24d9a0a5e70a7f47f1bc69d8dba88027"
  },
  {
    "url": "assets/js/74.29de96c1.js",
    "revision": "4e28b833d5ca266652fe4248fa90354f"
  },
  {
    "url": "assets/js/8.7c8a6f60.js",
    "revision": "fd330866c983acef6967df790c68fea3"
  },
  {
    "url": "assets/js/9.e07f92c4.js",
    "revision": "c74d41f8bd85ab8210165246b2857f75"
  },
  {
    "url": "assets/js/app.c7d2f264.js",
    "revision": "dec6b6b0429ad964ea2a55f670361b22"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "603926faf2300d4c1551844a29466c20"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "d2b616d2842c1090b0c0b1fa90c47a98"
  },
  {
    "url": "aws/index.html",
    "revision": "0fe2a7490b74e724dc5100e0bdac9557"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "1338d33ddf060656820dde39b89eb133"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "7ab01cbf65ef4d473a0846cb65f8ddf2"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "0ea73fb375f3ea8cdc66ed9efeebbf89"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "c2f5fbc57b9bf3ad74ea62816ff1a8f7"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "e318642a42176d5022ff4853efff2021"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "512c0aa6354237315ee7895d22d7fe89"
  },
  {
    "url": "blockchain/index.html",
    "revision": "2d843faaa2374b63d3a15594107d56cf"
  },
  {
    "url": "category/index.html",
    "revision": "4a7d43070c04fe95ea6aba870c1a2ee7"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "7468400f13816a724c66858825b0e2f2"
  },
  {
    "url": "database/index.html",
    "revision": "8e8e38ccec1f492a168dfd7e3b0dcaeb"
  },
  {
    "url": "datastructure/index.html",
    "revision": "dea32ef42fd3a595414bfe604d7d922c"
  },
  {
    "url": "documenting/index.html",
    "revision": "6642228794e2aa13c99aab7e1d7bdbe7"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "44427a39d4547c645b59f0e06f4576bb"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "a1d88fa735bd10539eb82856fa2a7068"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "f22b271bfaf83e7b4942d0dbf9e708b0"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "235212c5b356231f21e3a957ad5c53b7"
  },
  {
    "url": "etc/index.html",
    "revision": "e7c8981af29cf296d268d86dfcef5b9a"
  },
  {
    "url": "git/index.html",
    "revision": "54e61878d00215c6c851903a6553b84a"
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
    "revision": "5d7acb3887fe69029f97ed79451bf1ac"
  },
  {
    "url": "java/class/index.html",
    "revision": "bcc09498ca1c7fb57fe5c5bd620a7fa6"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "fd9b361b19bd0297276900de2c42e960"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "629a4e7e76b064a1641e34693aaa1d8c"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "a2f80a68ef62aada0fd73bf55734dcf0"
  },
  {
    "url": "java/ds/index.html",
    "revision": "382a25d4deb14cc09a79b673d044276d"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "d27fb8aac469718fcb44f51acef40a95"
  },
  {
    "url": "java/index.html",
    "revision": "d5618b57b03091b60279cb4ecdb917f5"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "dae6f65c40de0055be11f1230be08ff7"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "2565b0effddbcf93f021e372d7f2827d"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "99050b5fd27856e444b557301da51f49"
  },
  {
    "url": "java/spring/index.html",
    "revision": "b83d64ba7c62702ee1feeb50ad629922"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "12c2073e120472e49cf91054a7eca159"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "880fc230d54bfebb08e47c4ecf06177f"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "e360bcd2828df7f6dcb62aaff4ed4632"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "c0555526ae8c0de6d51677c6e6d92101"
  },
  {
    "url": "js/index.html",
    "revision": "5a262517bd39bd92577e0a0a2e90e880"
  },
  {
    "url": "nlp/index.html",
    "revision": "0b877ac292a16f3677af6ca84a15ba8f"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "53efa50f603d8d009b3c1cb5576b9554"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "d1ea388961f224f8b16330a67d42e11a"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "d5a45a8502e7cd5f15f898e52e6710f0"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "5cb86a33913b2c4da230ca9edf042d98"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "af3ad3f889e5eed6ece32c3d4f99ef07"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "a5677163915cfdf09d54e989851cb5b1"
  },
  {
    "url": "oop/index.html",
    "revision": "8a27377acf4cf000f82bf7be35c725a5"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "4a7659024f0b951d58c714b706fa9023"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "6756e646eb9b663a240bc81559157906"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "4ddefb3cf0b1467b2120e1d2ecf306a8"
  },
  {
    "url": "rails/index.html",
    "revision": "2b2548d094347b0b147b401ab34da38f"
  },
  {
    "url": "rails/install/index.html",
    "revision": "43ec22399e4ab77598d2456c5ef2be75"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "13ae2cdefcb65790c1d0557fa1a166d9"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "58154ee0a59b64210e48a41600d09b77"
  },
  {
    "url": "tag/index.html",
    "revision": "20390424964a24171bdecd77844981cf"
  },
  {
    "url": "tools/index.html",
    "revision": "ffc7a82c837387fecda42a5f1910aeab"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "842bf7e70068de259f5705a046b7b971"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "a3acb4fbc74510b0514faf1d2a0bdc4b"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "fc7abf2f40ea9df80e922ebf5196fbb2"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "c3cb1db652a1fde5f2332114d54d2824"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "8060809cebbeab6ef682a0ecb80e66be"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "90d7f183134c6b11811c7453b78e89e1"
  },
  {
    "url": "vuejs/index.html",
    "revision": "664271967d1089217aadcf52f9390dbc"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "e8ee8a5c4854e8f0cb64beaa177c905e"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "a1c305fcc2f602f3d4d9eeeded5db852"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "f687bd8e74a3858dd1af1fe079212c44"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "de003340c5f2e7fbf025a1f39fffc9f1"
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
