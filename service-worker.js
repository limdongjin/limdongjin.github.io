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
    "revision": "64341020f9f2e812be40f3278c7c1d74"
  },
  {
    "url": "about/index.html",
    "revision": "6f938f5e21cbe8aa1b78415f549fabf6"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "0c0ca14b67d52bee5c58b94325606038"
  },
  {
    "url": "algorithms/index.html",
    "revision": "823368824d2adf8d5e590e0bb433c39b"
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
    "url": "assets/js/10.72d819f7.js",
    "revision": "d833e331d9b51b730ac9d1665d3164aa"
  },
  {
    "url": "assets/js/11.831aa073.js",
    "revision": "4a6c9d79fdc958e3e1db768fed9ef096"
  },
  {
    "url": "assets/js/12.3a1bbeea.js",
    "revision": "efd673f0e583069996e135fcd08759fe"
  },
  {
    "url": "assets/js/13.a024e158.js",
    "revision": "381976c5ed2c01581f81e27d2f343eea"
  },
  {
    "url": "assets/js/14.3561810a.js",
    "revision": "02d9fe239ee9ffdced82849339d7da15"
  },
  {
    "url": "assets/js/15.8e44acae.js",
    "revision": "913dc15b1ccd12322341b3efd0bbd91c"
  },
  {
    "url": "assets/js/16.3c9876c2.js",
    "revision": "77723433932c8590225ca1f972bfd28a"
  },
  {
    "url": "assets/js/17.3b8295f7.js",
    "revision": "88ccecb63c82778f2f88582d645f80ab"
  },
  {
    "url": "assets/js/18.d736fb4b.js",
    "revision": "9d257e78fecc413c1891201fd5b9e40e"
  },
  {
    "url": "assets/js/19.daf09bd0.js",
    "revision": "6e1f7b5b84493be775220ec5d4fe95c0"
  },
  {
    "url": "assets/js/2.b2d564fc.js",
    "revision": "092680b0fc7e5cb4b370827aa016bdb6"
  },
  {
    "url": "assets/js/20.f54caf1f.js",
    "revision": "dd572aa673ff999e1c959bdda6b3089f"
  },
  {
    "url": "assets/js/21.c2c72593.js",
    "revision": "e25323d87008305848bf6ecb67099e4e"
  },
  {
    "url": "assets/js/22.191807d7.js",
    "revision": "f7848865e82cbb32feafd27249b95237"
  },
  {
    "url": "assets/js/23.1b0f3c76.js",
    "revision": "3feaf3fca8d1a818b2cc20e9e3f5ab94"
  },
  {
    "url": "assets/js/24.79b5c293.js",
    "revision": "1ae2d5c1c98e66689548e9f9d04f20c9"
  },
  {
    "url": "assets/js/25.aa08825a.js",
    "revision": "750f4cdc549095842fe252d1bc2c99ea"
  },
  {
    "url": "assets/js/26.5535dfb8.js",
    "revision": "a86c3d7979a8f7d686168e2cf6308a12"
  },
  {
    "url": "assets/js/27.4945f214.js",
    "revision": "1c8356db31a65b788d84d9f1798b3bd6"
  },
  {
    "url": "assets/js/28.a16a8e5a.js",
    "revision": "8a08d4d70b12cb7881ace248520417d3"
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
    "url": "assets/js/30.58f63c8a.js",
    "revision": "8eda209e87d8b069d39264829f1a6948"
  },
  {
    "url": "assets/js/31.aa784d35.js",
    "revision": "5d6325c783053bf816cee5b42ddf4653"
  },
  {
    "url": "assets/js/32.de040fca.js",
    "revision": "3fa28ffcb1c85279e8b02f1f8e005e3e"
  },
  {
    "url": "assets/js/33.c6597d18.js",
    "revision": "0a901043cd82854546cdb7e34d35200d"
  },
  {
    "url": "assets/js/34.57b5772b.js",
    "revision": "01951d497fac92f6a16d939b8775306d"
  },
  {
    "url": "assets/js/35.6ed18d6b.js",
    "revision": "51f7794a68510404f567cb9946c08dae"
  },
  {
    "url": "assets/js/36.39fb407a.js",
    "revision": "8fdfe59505a7f46bef3142ffa252343f"
  },
  {
    "url": "assets/js/37.1bf2305f.js",
    "revision": "e50aa1225f41f19c07847000dbed26f8"
  },
  {
    "url": "assets/js/38.48440e28.js",
    "revision": "e494254054e940d185bcd666b107ab3c"
  },
  {
    "url": "assets/js/39.f2cb9512.js",
    "revision": "734683e12650dc4afe87dfeffff93fdc"
  },
  {
    "url": "assets/js/4.e0e8a1d5.js",
    "revision": "a9f510757f1af9e45bc9eaa15a1a68c5"
  },
  {
    "url": "assets/js/40.27262601.js",
    "revision": "fa3473d81b8d49f2cdb287ecab6c88d2"
  },
  {
    "url": "assets/js/41.1ceca2ec.js",
    "revision": "2ff98510efd9f8e39938f1b942c31b3d"
  },
  {
    "url": "assets/js/42.b04caa29.js",
    "revision": "c40170f36b3cc741314a8e831467948b"
  },
  {
    "url": "assets/js/43.eebf2eab.js",
    "revision": "a7c710af8ea62f2c181ff87b088349b0"
  },
  {
    "url": "assets/js/44.492c1842.js",
    "revision": "2d367b44af6c31f5edcb46875fbc8c3e"
  },
  {
    "url": "assets/js/45.b7d85f10.js",
    "revision": "bea6d0daf354ef66883655508a2a1883"
  },
  {
    "url": "assets/js/46.e34f5853.js",
    "revision": "61c523bee56c63f864e42141f6bd37b0"
  },
  {
    "url": "assets/js/47.c702ee9e.js",
    "revision": "8fea3f9081dd94f31306eefa5eeefe15"
  },
  {
    "url": "assets/js/48.6a4cdbaf.js",
    "revision": "b3d759702691d571c621dfb17db9db46"
  },
  {
    "url": "assets/js/49.ecd8f646.js",
    "revision": "215be9a12768fa2edae7cd649a352cf3"
  },
  {
    "url": "assets/js/5.1499ca33.js",
    "revision": "270dba07989260e63c7bb8dc1c5776d6"
  },
  {
    "url": "assets/js/50.74434250.js",
    "revision": "9a27ea9367bba9962a02ca36a7bb21b2"
  },
  {
    "url": "assets/js/51.df9ffbd6.js",
    "revision": "89c7fe91b6e1330ab5a379c220f04742"
  },
  {
    "url": "assets/js/52.fbe6610d.js",
    "revision": "38c6b96326f415d9bbb2f34c95e8c35d"
  },
  {
    "url": "assets/js/53.c3e91203.js",
    "revision": "6338e17d299f5974fa99ffc49c6d5b9b"
  },
  {
    "url": "assets/js/54.dd3cc1ef.js",
    "revision": "a0bce3dbd0c8462b6e4c97ac84f1c6f4"
  },
  {
    "url": "assets/js/55.6d4a418d.js",
    "revision": "48d05bcb98529dd8199ad39d55559ac8"
  },
  {
    "url": "assets/js/56.5b2cb799.js",
    "revision": "c20aa75aac0ad876b48c91c3c4d3a52a"
  },
  {
    "url": "assets/js/57.745e6bf9.js",
    "revision": "8cb296de3431fa96979e37bdc1250d71"
  },
  {
    "url": "assets/js/58.00cc4d36.js",
    "revision": "29b0682e1e27c83b2389e2a3fc282ab6"
  },
  {
    "url": "assets/js/59.e8eb7ac0.js",
    "revision": "d46f1c29c6468c498eab1e4906e7beb9"
  },
  {
    "url": "assets/js/6.bbeb2a63.js",
    "revision": "d9779b132b17c27199cb0438701ba25a"
  },
  {
    "url": "assets/js/60.5a4af6d6.js",
    "revision": "8f5cbd9e465f5ff8c8f381aaf71cb95b"
  },
  {
    "url": "assets/js/61.c6bea7de.js",
    "revision": "987587df20af52d2dc7a6a848802307b"
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
    "url": "assets/js/65.e7297027.js",
    "revision": "b82fdca6215f4c1d8a4b0eb53ddef736"
  },
  {
    "url": "assets/js/66.1e8c55dd.js",
    "revision": "1a8dc1f8dc60b33302262c278a73a02a"
  },
  {
    "url": "assets/js/67.1c415d56.js",
    "revision": "2865492f19b2f273f9c3356d1365c265"
  },
  {
    "url": "assets/js/68.671dc16e.js",
    "revision": "00372c9d7727250f4ad274b3d015a7e8"
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
    "url": "assets/js/70.43c58256.js",
    "revision": "e8810bcfa1f8120a87db1ec3bd00218c"
  },
  {
    "url": "assets/js/71.a5d3acc9.js",
    "revision": "b0102df0fc09ad7f9191121b7e206382"
  },
  {
    "url": "assets/js/72.bed2461b.js",
    "revision": "6786e1e59f892ee3e91d8d37982c5541"
  },
  {
    "url": "assets/js/73.cffa5dc5.js",
    "revision": "8d751d0f03b78152b32c1b964acbd813"
  },
  {
    "url": "assets/js/74.69dce263.js",
    "revision": "ccf96a554d227f6cb528b6e674ad8368"
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
    "url": "assets/js/app.c91d017e.js",
    "revision": "c723b50755b27ef306b6a9e4de063fff"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "ee98afaf82fdcdff35beaa0283a41ee5"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "cb857dee5d0417311716d45d1faaaa70"
  },
  {
    "url": "aws/index.html",
    "revision": "d54e1e5fb8a3fbf959c0d49d180d9034"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "2c4cb001a1d1f86f65e108868fc734da"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "18d14a0dc590b32cb02929f1e6ec4443"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "2f0ff46f41f45109d2c72adebdbc92d6"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "ecd2ff281062185929ca0bf010449067"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "08c1d5ec9dd3f82c0e42be26574747ca"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "64b60097ed731e82bd980f297872fa79"
  },
  {
    "url": "blockchain/index.html",
    "revision": "ddba7776703cec0f1fe043a70688ae91"
  },
  {
    "url": "category/index.html",
    "revision": "438d4f403ea6344d5d4fd0b5ac435583"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "80243265e7659476b2d7253230532ba5"
  },
  {
    "url": "database/index.html",
    "revision": "75ef1f5f817b0a51a51ccb9f6ce06d71"
  },
  {
    "url": "datastructure/index.html",
    "revision": "d4c53ae96acabab15f0c31527b155cd7"
  },
  {
    "url": "documenting/index.html",
    "revision": "949b4870c2df9a61954f6bdec37280fc"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "fb15eb53a1c51d2e1facc64437f5d80c"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "95c84a9f9f0478cecacb3fcfd274fb8a"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "f1a807574f2f33f59898a1503e870f16"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "437ce0e4392b7b49015053e8ea5bf00d"
  },
  {
    "url": "etc/index.html",
    "revision": "bc8bdd6943304ffe2ed6c4f61b9bedfa"
  },
  {
    "url": "git/index.html",
    "revision": "f776d268fd352c349c746b7123afa317"
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
    "revision": "c609de56154e6b7d0881d24df9c44ed0"
  },
  {
    "url": "java/class/index.html",
    "revision": "b679afc021a93e4f66fabb9d15c15144"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "b41f17b850378d56804bcb79a64413d3"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "f9e12c001207f0eb260489b035dc19ba"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "a9e0739fe6caeadee6b710647dae83ef"
  },
  {
    "url": "java/ds/index.html",
    "revision": "436ea17d6b23795e3f3451ad328a0305"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "0a6c2eab4f20cca13cc0f054e3c0cdd0"
  },
  {
    "url": "java/index.html",
    "revision": "37fa306a296dd55ee2cf502d47f3edad"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "ccedfc7e6825642ddc903a848b74e659"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "60c6dd38bfd3d82ce505c4907c7a0c0a"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "92fb9c5c19df7a1e19cddd5220558666"
  },
  {
    "url": "java/spring/index.html",
    "revision": "13cba62bf134b76cf27bd70fb964b129"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "ea158f6b4ac36bd06a22c5ae47f84eb5"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "32655a9040f5291a2073929f1d992bbc"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "21270333636678556b080ff117a934fe"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "afc090eb3f3153f501f167946ff63637"
  },
  {
    "url": "js/index.html",
    "revision": "38b372d0268bdfc4d3f9a73ab45c2375"
  },
  {
    "url": "nlp/index.html",
    "revision": "0befc306a6d8d2901a382739e03f3661"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "b304f79be209f7223a2b18fb84896392"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "2a1ba706bd1b5a109f707496265711fe"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "98c42046802fc939c5b05e38de65daa4"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "23fc8df4a7412134a211ebea8f4d4702"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "689c7ab2577bc16afcbf908a77a98e95"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "4fcbee2bfa36a501e649a5c66e080592"
  },
  {
    "url": "oop/index.html",
    "revision": "48fe403cffa7f40bdac16fa802acbdd6"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "0d68d712833e57e9e7775ffc52c96aed"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "698988a38b46eff879539f00596d7dd0"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "bf4e8efcd91b9ca68eb6f1f9733ed823"
  },
  {
    "url": "rails/index.html",
    "revision": "ff21c7c9e15a43e319677ec4ef1b61c2"
  },
  {
    "url": "rails/install/index.html",
    "revision": "fd0a506f7f3a2c69db3e5eee28caab8b"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "0f02429bc273ab346903a46ca240b37c"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "41646016598b1e24d94ed3b11b175072"
  },
  {
    "url": "tag/index.html",
    "revision": "70f85d90e56c47ffa02eeb4d8cdc6f44"
  },
  {
    "url": "tools/index.html",
    "revision": "78e110bec898581729f5a620d54c84dc"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "8da2bfcd6184691c93072b15538c1b96"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "875ad5cfaaa26060a5cdc0a93085a87f"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "81f3a0ed7667f8a3853f051e09c5d082"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "8155c0b9bb6b0ab4e7fdec16541ea59b"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "3b5a42919e09b3b2b844ba964f892590"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "ddf5e26b76b11134331e99c362a854bf"
  },
  {
    "url": "vuejs/index.html",
    "revision": "f33aa677ab649605e79aec1e06ae0d18"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "dd4ed336497d28aa778359e6d6a884d7"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "65438e41db2f620d8b1ee4ef8abfed66"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "a08455e8e781ac0aef4dd1caf207d3e2"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "f4c48461c9172c6e8ddae5a302158452"
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
