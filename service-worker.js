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
    "revision": "8f3892d836ecc1d306e98fad2cd61192"
  },
  {
    "url": "about/index.html",
    "revision": "14c26106164f940a22ca9d57c3cbfb3e"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "8e0817336f7fbcd0e45d879377d5a4ff"
  },
  {
    "url": "algorithms/index.html",
    "revision": "75264035b63910bfe81daff24324b16c"
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
    "url": "assets/js/11.ad5cf5bb.js",
    "revision": "fb259f3f0355aa950480949c64f3b123"
  },
  {
    "url": "assets/js/12.3a1bbeea.js",
    "revision": "efd673f0e583069996e135fcd08759fe"
  },
  {
    "url": "assets/js/13.9dca5325.js",
    "revision": "5df8087baf32956bbbfda2b4fa313632"
  },
  {
    "url": "assets/js/14.144dbab3.js",
    "revision": "82042287c30178b73efb3d1c0cd2afa8"
  },
  {
    "url": "assets/js/15.e0a2e3d4.js",
    "revision": "c6f26547acb557c17cc170f26dfddcba"
  },
  {
    "url": "assets/js/16.7a3ab40e.js",
    "revision": "7deed0ae33785c703fd1c85df0c646a4"
  },
  {
    "url": "assets/js/17.d7796ce3.js",
    "revision": "b84fe3952c638e6acc10d6f9292d2f0b"
  },
  {
    "url": "assets/js/18.385260d3.js",
    "revision": "3a361044b357f6873725dd24c0aca090"
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
    "url": "assets/js/23.38459060.js",
    "revision": "0775720ea0c2b3f9738aa649248f4da8"
  },
  {
    "url": "assets/js/24.731afef9.js",
    "revision": "c67823e93631016357506c52a68d5992"
  },
  {
    "url": "assets/js/25.3e9e20be.js",
    "revision": "d17067d717519a98045d8218257d1ceb"
  },
  {
    "url": "assets/js/26.c9980a92.js",
    "revision": "1259fb411144a6587f4c394e9f30e98a"
  },
  {
    "url": "assets/js/27.30636890.js",
    "revision": "a9ecd119238b5987ccd912ae91c1723c"
  },
  {
    "url": "assets/js/28.6c525a01.js",
    "revision": "7439e07701e753a9d4ed578affa5cf45"
  },
  {
    "url": "assets/js/29.510d9f4b.js",
    "revision": "99c1e87bce451c6ef3ed939713f75369"
  },
  {
    "url": "assets/js/3.ea59e71c.js",
    "revision": "1d79b88c7c49f7a700974967a8a52afa"
  },
  {
    "url": "assets/js/30.150a93f5.js",
    "revision": "9afc036a322cf8ebd3e5b15de401457c"
  },
  {
    "url": "assets/js/31.3b1c47bd.js",
    "revision": "62cd59c72c33b14cfe96b11aea41a4ed"
  },
  {
    "url": "assets/js/32.de040fca.js",
    "revision": "3fa28ffcb1c85279e8b02f1f8e005e3e"
  },
  {
    "url": "assets/js/33.110bb3a6.js",
    "revision": "2a6072f112674487371496ccce5662c3"
  },
  {
    "url": "assets/js/34.57b5772b.js",
    "revision": "01951d497fac92f6a16d939b8775306d"
  },
  {
    "url": "assets/js/35.d9f3d86b.js",
    "revision": "c25c46b0714a0c8c184063c434b80920"
  },
  {
    "url": "assets/js/36.dab08db5.js",
    "revision": "5e4cddea6c10a8aad25f7ddf31c97e45"
  },
  {
    "url": "assets/js/37.236f7dcf.js",
    "revision": "73f01411d90adb4e17b260eb7770e575"
  },
  {
    "url": "assets/js/38.47689640.js",
    "revision": "9bf49cdb66e8ca6348b1d517106d1e41"
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
    "url": "assets/js/41.efbae53b.js",
    "revision": "c514d6af4e352e73c3475f7429e76ceb"
  },
  {
    "url": "assets/js/42.b04caa29.js",
    "revision": "c40170f36b3cc741314a8e831467948b"
  },
  {
    "url": "assets/js/43.537d6644.js",
    "revision": "04beed5231427880c1a3324af895de01"
  },
  {
    "url": "assets/js/44.1e371335.js",
    "revision": "8a21f1dbc4fbf1d1d999ed7edf3ce7a3"
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
    "url": "assets/js/50.74434250.js",
    "revision": "9a27ea9367bba9962a02ca36a7bb21b2"
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
    "url": "assets/js/53.9fd0a67a.js",
    "revision": "fa63ac10d756f191597d25e7516a1bd8"
  },
  {
    "url": "assets/js/54.dd3cc1ef.js",
    "revision": "a0bce3dbd0c8462b6e4c97ac84f1c6f4"
  },
  {
    "url": "assets/js/55.5ffc567c.js",
    "revision": "f39577cc42f788279e468c8c47b2bc9b"
  },
  {
    "url": "assets/js/56.8afb08a3.js",
    "revision": "c2c41f94428962004fca6f1e55494c14"
  },
  {
    "url": "assets/js/57.4a798483.js",
    "revision": "c54a8d12d32ddb3fafa39e461bec4652"
  },
  {
    "url": "assets/js/58.0c1c65f9.js",
    "revision": "ce2b2e4c724c86427d206211a6579be9"
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
    "url": "assets/js/60.19cda0ef.js",
    "revision": "23b2e35b8996156f653e5f44fe09a89d"
  },
  {
    "url": "assets/js/61.652d5248.js",
    "revision": "a17737e1c740a3739cbf4181ede466e9"
  },
  {
    "url": "assets/js/62.0e7dab09.js",
    "revision": "7d0b19d91eacb1826c4c7ebcd266c557"
  },
  {
    "url": "assets/js/63.d7b93eeb.js",
    "revision": "3ac405d12c02ebe6976769b6ef2b9ace"
  },
  {
    "url": "assets/js/64.2bd34cfc.js",
    "revision": "13ec7ebd1aeccaef68500498a68193f5"
  },
  {
    "url": "assets/js/65.e0647953.js",
    "revision": "4b8ca7159efa3445fdcb1cb8f2287313"
  },
  {
    "url": "assets/js/66.1e8c55dd.js",
    "revision": "1a8dc1f8dc60b33302262c278a73a02a"
  },
  {
    "url": "assets/js/67.aa4120a1.js",
    "revision": "f56e9d7019ecff277ec09a4f1df66b3f"
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
    "url": "assets/js/70.3a734182.js",
    "revision": "fcfe0cd26717d84e2052f6f1d1430ea7"
  },
  {
    "url": "assets/js/71.68eb6566.js",
    "revision": "6afd305222bade6fd97a729a8d80431e"
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
    "url": "assets/js/74.995cea29.js",
    "revision": "61f84d3c30b845f76547d7fd73009b2d"
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
    "url": "assets/js/app.d9d077a3.js",
    "revision": "73ffa3c5ad195a7abe6462de23ac979e"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "0a58979576c471a103acac56f3e75e30"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "62a23d718299c65a295a2562582ca8e2"
  },
  {
    "url": "aws/index.html",
    "revision": "933cd75ee003380c277b1e715a561d18"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "3f8851d07cbcc0776e7bc98aab3d4f0e"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "4ec92daad1a50350f55c4f8e125cac43"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "417fbb815c7e88b7788de4afc4b53371"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "68d3ef73e4a28688cae72eb041320461"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "5d71b469b5302bf6debacf19ff110058"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "0f5accb2bae0bfe033180f340f512cff"
  },
  {
    "url": "blockchain/index.html",
    "revision": "b260b53dc8c50af786f554c57bca4077"
  },
  {
    "url": "category/index.html",
    "revision": "f3b2a6c4a5fca68a174ea69ce5f69ec8"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "c351d91311e5040e4b7f9018cc8f37a9"
  },
  {
    "url": "database/index.html",
    "revision": "b36071e5ffaa5b99df1e38060e5286db"
  },
  {
    "url": "datastructure/index.html",
    "revision": "5964b0887ba011a852faca5dbbfa37c5"
  },
  {
    "url": "documenting/index.html",
    "revision": "334c13ba62403292f5b6c246c88c7c28"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "c426e7ce6612086616c9df23ff387746"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "2a29599c3d0c4d6556d7fc3cd696d538"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "6bed14c1041efbd231b2d5717ee9a617"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "d738b7214a5af7aac2281e4c34931419"
  },
  {
    "url": "etc/index.html",
    "revision": "bc50212722845ea68cda51f8f06a6ba4"
  },
  {
    "url": "git/index.html",
    "revision": "ab7ef0637c836167835292eb4b35e1df"
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
    "url": "images/vuepress-logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
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
    "revision": "760c32e37fb114356e0dc05f31f3da37"
  },
  {
    "url": "java/class/index.html",
    "revision": "441e306451712f036e15b81898e69ace"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "87160a4e64cfd9842d3f05d6b2346280"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "f4ff034477c7799881ec5bd82786f062"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "53f733516bab7270d15ade25564de08a"
  },
  {
    "url": "java/ds/index.html",
    "revision": "fc8488f8030e617860667ed40a8b46fa"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "65089acee1995de91dee435c6452b323"
  },
  {
    "url": "java/index.html",
    "revision": "feb3f0b1e9220f0b2d1688841743a743"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "e91975030dcff3b8182d294ce2bf6209"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "d503be06bd2d2673eda364e5a28ab2bc"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "134d01330d420056b06aea691741249e"
  },
  {
    "url": "java/spring/index.html",
    "revision": "1c82e620abb84a8d03c44923f4697fe2"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "3ad332702681a93bab1c0729041524ae"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "93c7e22c8265da21e1a36056e7f76cd9"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "744c3afc2b99525a43fe1598af8423b0"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "302c5d8536b5f7477f621e0cef9a240a"
  },
  {
    "url": "js/index.html",
    "revision": "405364a6ef438f5df408f1e34ef5b572"
  },
  {
    "url": "nlp/index.html",
    "revision": "d93a45f2cc0e93418f6085fe63cc623b"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "4655988d9e43e73d0174793b1716bd5c"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "db00912f21963942f1315adaf48ac5be"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "93f8e5b3aaa0bbbbd58bbf50f0beb892"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "f3d579ddeba7a64557628a671937ca09"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "115b19180d2946f524a5ac02c5c66c20"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "d301672d55121d2fc678ae153ad0ad84"
  },
  {
    "url": "oop/index.html",
    "revision": "2805440b31bb3dea05ac1e7a67013466"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "e59c834a944fb5b01da6d6c842f0b437"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "ec7028b9d91513dbae4dfd415a78f205"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "32055ec09151d80de1ecdef1fd53ae0e"
  },
  {
    "url": "rails/index.html",
    "revision": "838afa1ecb38c22cc06dfc58c77f223f"
  },
  {
    "url": "rails/install/index.html",
    "revision": "b67a11e20ce55ce4dfcf93e748e194b2"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "643bde21bb6b2ba598d0fe4471d88298"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "060cf86729e0d3b989a349ce0418648b"
  },
  {
    "url": "tag/index.html",
    "revision": "d80a50cb020587cafe94e77e5bab8e66"
  },
  {
    "url": "tools/index.html",
    "revision": "9c5db23b47111ae7b38c58a6ce0f2096"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "cd3892059aca2e860356da5a47093b56"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "3424fa1495fb41547daa013acf1c60cf"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "af4c086f700e522058374db1c221eb03"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "1478204652fa6c3dc1f703b57cbf023f"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "29df8ef1958f11d27c71c9310742efb9"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "5039dcf38c02b309b590af7d4e8caba7"
  },
  {
    "url": "vuejs/index.html",
    "revision": "57886d157eece162462271c32c7f543f"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "919f6a00413a0e84dcfa0abbb72aee6a"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "268cd2e150ccf4092a715c4dd2e72fb1"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "6d47514928646e5e593edf4aa625ba0c"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "f47ec08c1b6d3149fe4ae84e439c1ef9"
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
