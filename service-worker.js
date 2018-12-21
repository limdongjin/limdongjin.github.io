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
    "revision": "834e2f92492a5ac76ce38eba8872bd78"
  },
  {
    "url": "about/index.html",
    "revision": "b5813811e3a6192a02ec825f09704eaa"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "a53f7f2ec1a01ffcf9d5c74b79b4ee40"
  },
  {
    "url": "algorithms/index.html",
    "revision": "a8543ac4c37fa1c1bfbdd97b77a5df71"
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
    "url": "assets/js/10.5cdfc0bd.js",
    "revision": "6fcb86b552933977c952d3309da33b99"
  },
  {
    "url": "assets/js/11.4daaa5bb.js",
    "revision": "0818b9c8bf84a991586cfcb3c02ed73d"
  },
  {
    "url": "assets/js/12.68538b01.js",
    "revision": "10ec5d6259171ee9554c93e3ad7ea5e0"
  },
  {
    "url": "assets/js/13.8eb22e93.js",
    "revision": "1c0482bd52780b7e8c018a450fa3c3ae"
  },
  {
    "url": "assets/js/14.3561810a.js",
    "revision": "02d9fe239ee9ffdced82849339d7da15"
  },
  {
    "url": "assets/js/15.e0a2e3d4.js",
    "revision": "c6f26547acb557c17cc170f26dfddcba"
  },
  {
    "url": "assets/js/16.42c9cee5.js",
    "revision": "42505a18042dbacdd079d36680df348e"
  },
  {
    "url": "assets/js/17.d26f23bc.js",
    "revision": "5c7ae999a472a80574df7be0912efc9b"
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
    "url": "assets/js/20.f54caf1f.js",
    "revision": "dd572aa673ff999e1c959bdda6b3089f"
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
    "url": "assets/js/23.1f28be82.js",
    "revision": "c720447308b6d8cdfbf4622ec4cdb6a8"
  },
  {
    "url": "assets/js/24.79b5c293.js",
    "revision": "1ae2d5c1c98e66689548e9f9d04f20c9"
  },
  {
    "url": "assets/js/25.3d8b8e9d.js",
    "revision": "18770fd50f928c9c40c0f87cedb2ca22"
  },
  {
    "url": "assets/js/26.c9980a92.js",
    "revision": "1259fb411144a6587f4c394e9f30e98a"
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
    "url": "assets/js/34.b9007882.js",
    "revision": "42104dd3fb1f61101e62a573e232047a"
  },
  {
    "url": "assets/js/35.9c845013.js",
    "revision": "ed1c167274806aab934f7074cdd97d0a"
  },
  {
    "url": "assets/js/36.1752f95f.js",
    "revision": "da3c413c998681d743ca86b193ebce04"
  },
  {
    "url": "assets/js/37.e46d65f1.js",
    "revision": "7699181ffa35799e629af952da5535d8"
  },
  {
    "url": "assets/js/38.e6b59554.js",
    "revision": "f8182a4d734ea86323ec44ba52f1df06"
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
    "url": "assets/js/42.1a9c68c1.js",
    "revision": "dd69f2af1d111035f86ca60641a4ed0c"
  },
  {
    "url": "assets/js/43.f9fb187a.js",
    "revision": "6e2c839efa73a387eefaf2673e57e012"
  },
  {
    "url": "assets/js/44.492c1842.js",
    "revision": "2d367b44af6c31f5edcb46875fbc8c3e"
  },
  {
    "url": "assets/js/45.84c7baf6.js",
    "revision": "efd9fdb4421838429272cbd319cbb78b"
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
    "url": "assets/js/48.83e38654.js",
    "revision": "27b717b9df4fd90d09d669f1d537ef12"
  },
  {
    "url": "assets/js/49.eb0529e2.js",
    "revision": "ccab06bd18bbabed67f6ca9c94087197"
  },
  {
    "url": "assets/js/5.1499ca33.js",
    "revision": "270dba07989260e63c7bb8dc1c5776d6"
  },
  {
    "url": "assets/js/50.2ae74343.js",
    "revision": "39d42e51e48816a079e6b806d394edb7"
  },
  {
    "url": "assets/js/51.df9ffbd6.js",
    "revision": "89c7fe91b6e1330ab5a379c220f04742"
  },
  {
    "url": "assets/js/52.a7b5174f.js",
    "revision": "128b2b1cbc6339b68df54322c59093f7"
  },
  {
    "url": "assets/js/53.903ed65e.js",
    "revision": "36f9ded53a5e1b3388b92c3a142914d8"
  },
  {
    "url": "assets/js/54.ee2f1a28.js",
    "revision": "714ea369e1bd058ae4d059d75bac7d12"
  },
  {
    "url": "assets/js/55.d9303931.js",
    "revision": "1fe03303674831a92c5197dcad878401"
  },
  {
    "url": "assets/js/56.a352c83a.js",
    "revision": "3dc1f0d2abb2d73956e5314acbdaa9ec"
  },
  {
    "url": "assets/js/57.2e847eac.js",
    "revision": "2ac873cf525da1de18fc4316ea00132a"
  },
  {
    "url": "assets/js/58.683e0c08.js",
    "revision": "1f1ada39b9b6ada1055a54407e2d3780"
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
    "url": "assets/js/60.e6e4ef56.js",
    "revision": "3b3fe1c948c63d119e91e29c19521b6c"
  },
  {
    "url": "assets/js/61.cc869925.js",
    "revision": "b952815f3866c581754ea5a4b9c6e70f"
  },
  {
    "url": "assets/js/62.9295b9f8.js",
    "revision": "bccd49026ac7ff46b2785c458b596f29"
  },
  {
    "url": "assets/js/63.f9c06fdb.js",
    "revision": "5b6307506f62bbae30a68ce348719094"
  },
  {
    "url": "assets/js/64.815623d8.js",
    "revision": "8503baa3ab91d323d0a16e89356074d0"
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
    "url": "assets/js/70.3a734182.js",
    "revision": "fcfe0cd26717d84e2052f6f1d1430ea7"
  },
  {
    "url": "assets/js/71.e287075e.js",
    "revision": "05e127a199628a7b2ea962318156cd2f"
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
    "url": "assets/js/74.8d5fe17a.js",
    "revision": "826588fd1b3aa51ef9641023b60bbd92"
  },
  {
    "url": "assets/js/8.dcdd8d2a.js",
    "revision": "368b907129dbf5131984f6adbcb9024f"
  },
  {
    "url": "assets/js/9.78e44d2a.js",
    "revision": "929924dd527021762aabc993206d5bd9"
  },
  {
    "url": "assets/js/app.1bcc352c.js",
    "revision": "44d3bc941ab6d83a23ca221ed53bf86d"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "a455596295c4c0624211ec0e38d1c81f"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "09ec8ad8806e83773486af9681e4c816"
  },
  {
    "url": "aws/index.html",
    "revision": "3db65508f92e8f31f766def1038bd36f"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "87e8a54eb6fe87a9d1eafe77e9aab742"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "ae2f4c13f9e1eb13c288506ef50b8759"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "27fa7d87fd1175382f896f20f193cc85"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "17e02d69d3e866e425486bf2be28cec7"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "ec32addea12988a807f62de78fee137e"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "8cd4f517cbba587eac86e298baf4b784"
  },
  {
    "url": "blockchain/index.html",
    "revision": "c7dbe15389c961d9a14d03c687d78c87"
  },
  {
    "url": "category/index.html",
    "revision": "6ab8d55403fee5ef65ae622f83415287"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "4d4c8ff225e9c6afe9ccefa014056b3e"
  },
  {
    "url": "database/index.html",
    "revision": "f766de92b29ab7d1052f30176159fed8"
  },
  {
    "url": "datastructure/index.html",
    "revision": "ea6c2eb75be907a360701c2d2b518c01"
  },
  {
    "url": "documenting/index.html",
    "revision": "24a3c05a8c1b3eaa31586dc671ec5d5b"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "25c4673c62ea9f4c33519a020b3650fb"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "f1e94dfa009defefe899f73a8004c0a3"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "08b66242939463dbe39c2f29538e3a62"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "70debb286db2e91c63030780d5288b33"
  },
  {
    "url": "etc/index.html",
    "revision": "cffa62e007d1971b90741ce1af3c20c9"
  },
  {
    "url": "git/index.html",
    "revision": "d8268e31a21ebc8aa83b8460199dacf5"
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
    "revision": "608b8d2c613201f76d7bc453246f469e"
  },
  {
    "url": "java/class/index.html",
    "revision": "4bb8b6811f8cc80e63d9057bc0bc9bef"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "2620454c068926f8a3d5980a1acea3fd"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "2240b31a6f09f730d9f61f7e6cbec9bb"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "0c4d25b1d3ffd3504fd571acbb6fc7fa"
  },
  {
    "url": "java/ds/index.html",
    "revision": "e9498ef9cb9f357ce3ec432fdc78b418"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "8cc6e67cda914de42e9dbbbd49426d28"
  },
  {
    "url": "java/index.html",
    "revision": "fd20af747ea3ceb9f6e5b869e791f403"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "bbe172015d6b1db5d514dce1bcde51c2"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "29a4b15b02ec516c52fc268db7ab3847"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "23222f59b43bf3c4c37ad2a2e1687675"
  },
  {
    "url": "java/spring/index.html",
    "revision": "cf47a5d11fc960cb367cd639a4452690"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "6a1e6f280fe4342b0ff2c3e163f64b9a"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "ba3e1da2807741b05233e63564ceedf5"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "0c4c79e61c6c67a895ebfca1c6b3bfe7"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "4adffbc358fe61a886d21200e03d324d"
  },
  {
    "url": "js/index.html",
    "revision": "28ff38e755f3725931d779e193d633d6"
  },
  {
    "url": "nlp/index.html",
    "revision": "7cd760e3ef849c37979a0c2c18aeaebb"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "dda8de85cd15c5c213bcea24ca959d8e"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "487367d8ce4f3481da277ec314aa0744"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "b0a597264a63260fb9f02e90fbe5c2fb"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "681b144a393e90114d8602b52c88de05"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "3a546459e20e7329c0bf073c576ce0ce"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "82c7d21160c66d21a7c754a71b05bfd2"
  },
  {
    "url": "oop/index.html",
    "revision": "305f573cf9a26c64414acbff93ab2320"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "5c9582ddcdbf954edf17d54e65950fda"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "fcae3bbe0c9f7bd42964d7e1ad7ac491"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "0f549aff40aaa6e8dfb061509e142802"
  },
  {
    "url": "rails/index.html",
    "revision": "c6398617cdd0e10b92c9b00cbe8b7c18"
  },
  {
    "url": "rails/install/index.html",
    "revision": "5d3d2584f8fb8b081f287eb823dd3afe"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "6d3aae78bff6e18bd924a88e22b2ff46"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "12d1de9062941fc00485f1197003ed5e"
  },
  {
    "url": "tag/index.html",
    "revision": "613f27c5b7496dc88c310ea0fb10f7d5"
  },
  {
    "url": "tools/index.html",
    "revision": "5446e7330509bc30f68010996ac6d81d"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "ed197962ef55db839e5e77a0dfe7de2a"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "9d55f514e58f42c884306b132b3df521"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "cc9c720d9c2d92bebe455c8a6c0d1ae2"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "f498a2c2b434022f557f4f6362189582"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "10ea778c2cbe0e23033c609ae1f5030b"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "1c6adf97f357d52ffaa137d7f48333b3"
  },
  {
    "url": "vuejs/index.html",
    "revision": "b73a12ef5f3748269cac0a0475428979"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "b3de515bbc7fe90f3272f23b0d60bf90"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "8efafa14ba692ffe4b3c6cf30032cb4b"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "0085165f64ff382cfbb56631032be658"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "d88b4ae34df0f7e315c223dd830c7699"
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
