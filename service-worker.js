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
    "revision": "715ef86786f16d4df5c690ba0b727b42"
  },
  {
    "url": "about/index.html",
    "revision": "e696e5d14f3c97613d8f2beab29dbf2f"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "df894905adf9c2de78df8f49044140d5"
  },
  {
    "url": "algorithms/index.html",
    "revision": "0a6b2dfb284210c9b1832a94cf39f4b8"
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
    "url": "assets/js/10.99f5329e.js",
    "revision": "8527df04a8b5717470e76c7aff77bae1"
  },
  {
    "url": "assets/js/11.02ee34d3.js",
    "revision": "800627765fe2411a8b153e73b9b3cd3c"
  },
  {
    "url": "assets/js/12.9b0b9923.js",
    "revision": "e22f506d8a04e7aff511951821957adf"
  },
  {
    "url": "assets/js/13.c00c30b3.js",
    "revision": "a134547b7fccd88f03adcbe1b39a7c38"
  },
  {
    "url": "assets/js/14.144dbab3.js",
    "revision": "82042287c30178b73efb3d1c0cd2afa8"
  },
  {
    "url": "assets/js/15.8e44acae.js",
    "revision": "913dc15b1ccd12322341b3efd0bbd91c"
  },
  {
    "url": "assets/js/16.a7daae96.js",
    "revision": "3c5720214a7f651f5ad652f98c83cde2"
  },
  {
    "url": "assets/js/17.d7796ce3.js",
    "revision": "b84fe3952c638e6acc10d6f9292d2f0b"
  },
  {
    "url": "assets/js/18.d736fb4b.js",
    "revision": "9d257e78fecc413c1891201fd5b9e40e"
  },
  {
    "url": "assets/js/19.57eff64a.js",
    "revision": "500dd006b94612e17383c0804ec288e4"
  },
  {
    "url": "assets/js/2.b2d564fc.js",
    "revision": "092680b0fc7e5cb4b370827aa016bdb6"
  },
  {
    "url": "assets/js/20.f437d644.js",
    "revision": "a6fb519f2c2c42c334e86ed2e361e19e"
  },
  {
    "url": "assets/js/21.c2c72593.js",
    "revision": "e25323d87008305848bf6ecb67099e4e"
  },
  {
    "url": "assets/js/22.542aacb3.js",
    "revision": "d9327becb65c35dadbca9a887f932b95"
  },
  {
    "url": "assets/js/23.46c6ae36.js",
    "revision": "90f9f0354874e64d6615a977a44b993f"
  },
  {
    "url": "assets/js/24.9759c323.js",
    "revision": "0c29655c97a5f850ed3e84c9ad204f80"
  },
  {
    "url": "assets/js/25.3d8b8e9d.js",
    "revision": "18770fd50f928c9c40c0f87cedb2ca22"
  },
  {
    "url": "assets/js/26.d77e45d3.js",
    "revision": "539f9d85a1d9eda71c90fd5fe6ab4768"
  },
  {
    "url": "assets/js/27.e6f4a834.js",
    "revision": "072c0e03a0db66badbce901ad50ff4aa"
  },
  {
    "url": "assets/js/28.6c525a01.js",
    "revision": "7439e07701e753a9d4ed578affa5cf45"
  },
  {
    "url": "assets/js/29.420ec208.js",
    "revision": "95d979a0040abb210c01ba384251e166"
  },
  {
    "url": "assets/js/3.ea59e71c.js",
    "revision": "1d79b88c7c49f7a700974967a8a52afa"
  },
  {
    "url": "assets/js/30.6722b279.js",
    "revision": "ec87317e130a06e9888f096f69bde8a1"
  },
  {
    "url": "assets/js/31.10a386df.js",
    "revision": "354b0ebbcb25245eaac780d3351ef25a"
  },
  {
    "url": "assets/js/32.8e3cb3a8.js",
    "revision": "9b455914ee1e6731604071e5bcb715be"
  },
  {
    "url": "assets/js/33.c6597d18.js",
    "revision": "0a901043cd82854546cdb7e34d35200d"
  },
  {
    "url": "assets/js/34.ac0f9be8.js",
    "revision": "884e8f229965b4ddacbbeb8c382f215f"
  },
  {
    "url": "assets/js/35.dcaa72d7.js",
    "revision": "b6664fa8c68c9bf48303f0b64c59ca44"
  },
  {
    "url": "assets/js/36.8330a4a6.js",
    "revision": "b4571a3f096030ca9dab814ee4b96f69"
  },
  {
    "url": "assets/js/37.236f7dcf.js",
    "revision": "73f01411d90adb4e17b260eb7770e575"
  },
  {
    "url": "assets/js/38.ae700099.js",
    "revision": "371ffd178b29dd644a655f12a32509ed"
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
    "url": "assets/js/42.3adc908d.js",
    "revision": "63f5b695100a0fb71ef03f07378cbc61"
  },
  {
    "url": "assets/js/43.f9fb187a.js",
    "revision": "6e2c839efa73a387eefaf2673e57e012"
  },
  {
    "url": "assets/js/44.f7530d19.js",
    "revision": "25237a725f54d4bba073b84f14444250"
  },
  {
    "url": "assets/js/45.888a25b8.js",
    "revision": "c5cb0f26419b9dfe3575fcb9f9591619"
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
    "url": "assets/js/48.5513e239.js",
    "revision": "b961bb54b21d785daaca5ee093787611"
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
    "url": "assets/js/50.46feb9e3.js",
    "revision": "ca0d48d2957447584d9ae586a74d7c87"
  },
  {
    "url": "assets/js/51.b83dfc4a.js",
    "revision": "6b6e1ade2b36711ad0fff3a917b8b103"
  },
  {
    "url": "assets/js/52.a7b5174f.js",
    "revision": "128b2b1cbc6339b68df54322c59093f7"
  },
  {
    "url": "assets/js/53.1faa6769.js",
    "revision": "e3d214ea5c45f5978acea5a3d6094aaf"
  },
  {
    "url": "assets/js/54.4b7e32f5.js",
    "revision": "5901556099b064bc28930fdde8752756"
  },
  {
    "url": "assets/js/55.5ffc567c.js",
    "revision": "f39577cc42f788279e468c8c47b2bc9b"
  },
  {
    "url": "assets/js/56.74f692f4.js",
    "revision": "34c39bae049632c84b7b04f45ab5d7ac"
  },
  {
    "url": "assets/js/57.31ef1b96.js",
    "revision": "4b5153d640be8b3fc2ef84978e61ed17"
  },
  {
    "url": "assets/js/58.683e0c08.js",
    "revision": "1f1ada39b9b6ada1055a54407e2d3780"
  },
  {
    "url": "assets/js/59.2de2e0c2.js",
    "revision": "25fa6eac1c9c6e0581d723c75a044320"
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
    "url": "assets/js/61.c5b66cec.js",
    "revision": "a767e34e327544db698ba8655369677f"
  },
  {
    "url": "assets/js/62.4065e7c2.js",
    "revision": "6ddef2408606acac8a864cb18084bbca"
  },
  {
    "url": "assets/js/63.3ae6151e.js",
    "revision": "234586284dc6a4a9470d29703b6ff714"
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
    "url": "assets/js/67.a3ddf727.js",
    "revision": "eb8b049997b7541bd77225919d127f62"
  },
  {
    "url": "assets/js/68.e00fa3f9.js",
    "revision": "aad7eb8692f4faaf5341dbd11833dfd2"
  },
  {
    "url": "assets/js/69.5fc8b036.js",
    "revision": "5ca981dc9ed17b1063250a56c05f2029"
  },
  {
    "url": "assets/js/7.7810fa6c.js",
    "revision": "a1f25dd45c48890d1c9afd3cf2e04ba9"
  },
  {
    "url": "assets/js/70.c0f8c757.js",
    "revision": "fc056e2ef9b61e896818a7a026d83e54"
  },
  {
    "url": "assets/js/71.150f8be5.js",
    "revision": "0576182631102e945a68fcbabd457b19"
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
    "url": "assets/js/74.4c8cd7f1.js",
    "revision": "fc6605688d2497cbebc96e8863d13455"
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
    "url": "assets/js/app.5ff35dc9.js",
    "revision": "4cdb7d30cc07e5ddf54b74d6ab821dbe"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "1332c697f42709a71ea9e5164563e773"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "b1abd172d01f4e29e445977a1e09a69b"
  },
  {
    "url": "aws/index.html",
    "revision": "06bb4ca9321e4d9d76234f1a843429e7"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "9151f7162527360591a77412a3a78f94"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "1398994bbbd8289ffede523dc25a9a7b"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "5e77df7f39211668ad44e0d4aee7e5e0"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "70d064dfc14c68f4bac7559176f75772"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "fdd5660bfb0657bb905e2f1db7edb21d"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "6b0a6eba38dcfed83ab38e8ccc2ac53b"
  },
  {
    "url": "blockchain/index.html",
    "revision": "60d97ff8362bcd05958153054fa435d1"
  },
  {
    "url": "category/index.html",
    "revision": "053563f4d0265beff1bff9f04334955b"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "6ff8c5d8415b71c55dc8c401eed2cf85"
  },
  {
    "url": "database/index.html",
    "revision": "a7f51fe798870d520450a00d91925b93"
  },
  {
    "url": "datastructure/index.html",
    "revision": "6a846b64c9c6bb65df72f43821ce2fe2"
  },
  {
    "url": "documenting/index.html",
    "revision": "44b74668388fe8040a1c692c892ff15a"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "74341bb3940c1cf8ffd1a391eb940ffe"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "1fe3b9a42941f6acf7591094be221a1a"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "fd55c80f14dd473f60581531fc7fa77b"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "6eb6f05b0814fe4a20d596710e236d27"
  },
  {
    "url": "etc/index.html",
    "revision": "8e0937a8989649d1449c4bb90527366e"
  },
  {
    "url": "git/index.html",
    "revision": "28a7e4dd32c5a4f29eea64b4d5a23303"
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
    "revision": "6f1364e98e178526b2d0989e049b278b"
  },
  {
    "url": "java/class/index.html",
    "revision": "76f6524b264696e9644c6cefcb1da2db"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "fb736c45eb13dda5f486958231a48329"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "0e68393b2de8cfc0a3b426abfeebe548"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "7c6f167ef9a655e72edcb16b2a6a8716"
  },
  {
    "url": "java/ds/index.html",
    "revision": "6e4e5c643a2bf6f23b79f70341800a82"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "34c8a295519b2e88246f813d084927da"
  },
  {
    "url": "java/index.html",
    "revision": "77940a773f5abe394f89b9cf9726d1a7"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "217915b957fb9786cfdd7a629ed19627"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "0b11383b6b2c7fe7b897d8fab65489e3"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "c1ce95bf800321af53311f2045d82988"
  },
  {
    "url": "java/spring/index.html",
    "revision": "93f10cef512ea4d360c6a01e653c1bd4"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "a91e5c8663c2e9b6889c2a553fb2b327"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "430dd74b3b3e7d293fe6ab32dbd0ed6a"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "934876c43b4dc0b5569e005927b7fa0f"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "c8465cda3c287ad51bc1033914da06d6"
  },
  {
    "url": "js/index.html",
    "revision": "d9fbb861628e45f62ac7a985966366d8"
  },
  {
    "url": "nlp/index.html",
    "revision": "93c1e058776224849be42670a1158aa0"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "807f85d3fe8f26de3581fe8b92c6cbe2"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "39c548e6a2dcd14f93ca8d45fa7750e2"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "f049f88aa88847b152b4ae9af63f4d20"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "1d588a93f3b0eff6252877d41f573157"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "b50f7a7999d38ba7f45cd708a4c2275a"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "9b2134d310f93d993fda1dfc76e83d34"
  },
  {
    "url": "oop/index.html",
    "revision": "60133cf6366ed360b70c18f2ebdf9803"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "98835835e20556aa89cb7cd6a6440462"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "430b94d949ed9b9568acd6880a9a3693"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "95539289d75ac77948f0924e9c2ae300"
  },
  {
    "url": "rails/index.html",
    "revision": "3b66dcc6e10992f02ce7dbf701b7feb0"
  },
  {
    "url": "rails/install/index.html",
    "revision": "e139df8b926b4531faec35b668ceba9d"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "c6ed851d7fb4186ac5af2ff14061781d"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "aedc446b54bacd8b5bcf39ed2fbae439"
  },
  {
    "url": "tag/index.html",
    "revision": "8ccfaec3f49679af76c543fde06f7657"
  },
  {
    "url": "tools/index.html",
    "revision": "da8a56e92b2d2b4400b0114ccc665b4a"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "2b3edda98f46e0034c79b478c9f856c3"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "b3c96698d8d9a1b8eb6b7132a1640633"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "b72bf030e50f93aadce42036e623abd1"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "287b7ab18a928471ffcbfc188acf4796"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "af0c9576f172feef96dbade7b03c70bc"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "5e7803f4e237dd6b5dc283f4eaaabdc3"
  },
  {
    "url": "vuejs/index.html",
    "revision": "cc8ef23698bc68e4d7e87b7ffef27954"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "882f559bfd6accbd1c221d4a7943a9d7"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "9e8f34c1bf3f9e1b9576e64ee829c124"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "ef55abd4e57cf0c35619fe5b33fae895"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "edaf72722feaf2bd132014fb8304f112"
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
