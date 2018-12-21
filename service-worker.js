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
    "revision": "f677776160d1bdc63219b788f99aea1c"
  },
  {
    "url": "about/index.html",
    "revision": "7baa17c5f95792547b374c16af09b00c"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "14667433af85268379e21acac4c66bff"
  },
  {
    "url": "algorithms/index.html",
    "revision": "b5bfbd047d8c713e8bfc56083fbfe65a"
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
    "url": "assets/js/11.3744a28f.js",
    "revision": "92c010d9026c50686956026cfd176074"
  },
  {
    "url": "assets/js/12.fb89db52.js",
    "revision": "fb5d198e6a5becf6f69978dbb962962f"
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
    "url": "assets/js/16.42c9cee5.js",
    "revision": "42505a18042dbacdd079d36680df348e"
  },
  {
    "url": "assets/js/17.3b8295f7.js",
    "revision": "88ccecb63c82778f2f88582d645f80ab"
  },
  {
    "url": "assets/js/18.1b8fc473.js",
    "revision": "b795d00d8424a8923d8979d9ef6bb95f"
  },
  {
    "url": "assets/js/19.80a46090.js",
    "revision": "e9e30992ec73d8b8e7833d23d55d45f9"
  },
  {
    "url": "assets/js/2.b2d564fc.js",
    "revision": "092680b0fc7e5cb4b370827aa016bdb6"
  },
  {
    "url": "assets/js/20.dfd7502d.js",
    "revision": "51fe741ee6d9b2c3b15226e30fe6c515"
  },
  {
    "url": "assets/js/21.a523f3bb.js",
    "revision": "1c207e4dcbde81deab9523fc5452df4f"
  },
  {
    "url": "assets/js/22.191807d7.js",
    "revision": "f7848865e82cbb32feafd27249b95237"
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
    "url": "assets/js/26.c9980a92.js",
    "revision": "1259fb411144a6587f4c394e9f30e98a"
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
    "url": "assets/js/30.d4b5ce95.js",
    "revision": "bf349e95abe6a8cf2c29759c2c80b9f4"
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
    "url": "assets/js/36.39fb407a.js",
    "revision": "8fdfe59505a7f46bef3142ffa252343f"
  },
  {
    "url": "assets/js/37.14546f3d.js",
    "revision": "1ee7ae26726d23058c5ec467192a483f"
  },
  {
    "url": "assets/js/38.e6b59554.js",
    "revision": "f8182a4d734ea86323ec44ba52f1df06"
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
    "url": "assets/js/50.c3b0ab57.js",
    "revision": "eee9f19187fa759c846805676b0a6551"
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
    "url": "assets/js/53.903ed65e.js",
    "revision": "36f9ded53a5e1b3388b92c3a142914d8"
  },
  {
    "url": "assets/js/54.ee2f1a28.js",
    "revision": "714ea369e1bd058ae4d059d75bac7d12"
  },
  {
    "url": "assets/js/55.5ffc567c.js",
    "revision": "f39577cc42f788279e468c8c47b2bc9b"
  },
  {
    "url": "assets/js/56.f690d539.js",
    "revision": "c77565064c71dd7e5c5ccd57ba6d72e3"
  },
  {
    "url": "assets/js/57.745e6bf9.js",
    "revision": "8cb296de3431fa96979e37bdc1250d71"
  },
  {
    "url": "assets/js/58.0c1c65f9.js",
    "revision": "ce2b2e4c724c86427d206211a6579be9"
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
    "url": "assets/js/60.e6e4ef56.js",
    "revision": "3b3fe1c948c63d119e91e29c19521b6c"
  },
  {
    "url": "assets/js/61.cc869925.js",
    "revision": "b952815f3866c581754ea5a4b9c6e70f"
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
    "url": "assets/js/64.a3e00bad.js",
    "revision": "1d81d63000b3668e547d42d8da9ce045"
  },
  {
    "url": "assets/js/65.9f4a50be.js",
    "revision": "b9de5bb5526b1cb3203fdbfb893c2b68"
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
    "url": "assets/js/72.38a5ab20.js",
    "revision": "e4ceab52d58c64a52ce89cb454d2269d"
  },
  {
    "url": "assets/js/73.1b52587a.js",
    "revision": "24d9a0a5e70a7f47f1bc69d8dba88027"
  },
  {
    "url": "assets/js/74.7b5f0738.js",
    "revision": "5a9248df5bf97f427ec376a99b713ebb"
  },
  {
    "url": "assets/js/8.dcdd8d2a.js",
    "revision": "368b907129dbf5131984f6adbcb9024f"
  },
  {
    "url": "assets/js/9.6832c728.js",
    "revision": "599691f34cbf2846a676fd9eb11afa6c"
  },
  {
    "url": "assets/js/app.6bd49dc6.js",
    "revision": "091f4173cad8a6f3fc5c8d982c76caaa"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "f1b2419f5bc76db2cd02792907b5d04e"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "d7db262e7cb5359649baf5d4e03e6e2a"
  },
  {
    "url": "aws/index.html",
    "revision": "2c555bc233fb9d27d0bd55c16f853b83"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "f0ece3f763902e0d69eba041dfffb8ca"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "0e2ff96fedb7b4b2bfa33b3e33c9c44a"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "1592d4aedae4167f47462dba3f4c69b9"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "28bdd230714bd3d7dae2fa9dbf33d092"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "3a24695b2da84ff83f5e7a52c14684aa"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "3532cff0d5b7a6670e66226d91a55d8e"
  },
  {
    "url": "blockchain/index.html",
    "revision": "f59452bd1574902255a109873dcb7846"
  },
  {
    "url": "category/index.html",
    "revision": "97d08e2eb86aaa24c77c140b3f95e577"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "301ce81e91d021ad7b4de5c5db8fefa1"
  },
  {
    "url": "database/index.html",
    "revision": "86468b6e8257d93e10e6306b10a397fb"
  },
  {
    "url": "datastructure/index.html",
    "revision": "9f18b9b306b2eeb122d7d1775942f14c"
  },
  {
    "url": "documenting/index.html",
    "revision": "11f27bef9d291adfbb44d2000f44b1a9"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "b0b4b8ebf056f7eaa6a9bb8b46164df6"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "517bde1fc3140863328131fb230757f1"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "3eee7c1c75b2b93b3ca3949a97352617"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "2368020621638988d4f2b2379a242fc8"
  },
  {
    "url": "etc/index.html",
    "revision": "4b071562f4bac9cb68b41b683b836e49"
  },
  {
    "url": "git/index.html",
    "revision": "612e608831106fa0a730483e3747014a"
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
    "revision": "05a525bb5dc7a22b1161df3dd0882913"
  },
  {
    "url": "java/class/index.html",
    "revision": "7c170cb6315a274df9e8384435008a71"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "633d16b5dacf7de10a52840c7058babc"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "1c88a26bd9b6fe751f4bdde92939678c"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "b09c051e31c35e2bd26842a3e36405f9"
  },
  {
    "url": "java/ds/index.html",
    "revision": "69989e0cda47b913dabdbbab8c8e9dd1"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "1d6f8b77d34ea8c58e76cc8b21782ec1"
  },
  {
    "url": "java/index.html",
    "revision": "e402bce0eb03f217bb191f3df02c0df8"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "cf57b2e949dd63e43e65b6fc69897449"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "7503352855a62aee5f23ab7228314631"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "42da39c2f31c95222a1ccdd8e66ef2bb"
  },
  {
    "url": "java/spring/index.html",
    "revision": "7bda7f2da335f75b4dffcd4facc04705"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "34453453be7bb0388ad12d4eebe5190c"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "cf374d8c274ce0a68e3f83780e66955a"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "5bbc64f0ddc5278d821452ec32176963"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "ac464274ea63b562497f9ef0f494beb8"
  },
  {
    "url": "js/index.html",
    "revision": "6b6ed7dafa4841b63e1c2d72b8ba58f2"
  },
  {
    "url": "nlp/index.html",
    "revision": "34207f75c7e15e6cf0570e21d095d08e"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "6c98b17ac023a5322f04198f8b6292b6"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "dea68660f047f0fe01e873d67103f2ac"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "c65f390f7bf763a0920df051a68feb84"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "5833c79c585f6db83b5e5ba5ef9a6b62"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "c9b7db86df71516daac7c331f3c3ea4b"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "a223591a179a94dbeafa139a6bf26beb"
  },
  {
    "url": "oop/index.html",
    "revision": "231799e1d0118bb6c611ec8851ebb290"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "e8f8e7a110a0026a35547283218400d0"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "9226bae3055199c4437e00074f7e0bd5"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "d224f2d785a1453794b1d41184466601"
  },
  {
    "url": "rails/index.html",
    "revision": "95f5da19309467c09ad182efc23eb83a"
  },
  {
    "url": "rails/install/index.html",
    "revision": "3d14895349eab140444e8d3dd308074b"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "bde6b4da1c6848d041f75c4684f4eba3"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "f989c156b7b79a4313bff0df849586fb"
  },
  {
    "url": "tag/index.html",
    "revision": "55c13ca55eb7f2b40ee48a1eab625f0a"
  },
  {
    "url": "tools/index.html",
    "revision": "4d1875869832651db0d122a4400c00b5"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "4565180c101dabf7f2e7eecbd234ff77"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "f4e0ff082d9785dfb947c4ae22c7743d"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "33a57b31a3bd7509434ac21ff2f0d05f"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "b2c4bd2da3c43d7a03c1ef4942234e4a"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "572e095ba5d977adb5efe0503ac4638f"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "cb416118ec0a9b801b762f0d9340c8f6"
  },
  {
    "url": "vuejs/index.html",
    "revision": "201c979f0909e46684f8a8d2d854c0cb"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "1b681a75a8492d9f6688f75f010a2ed5"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "5c69480848ae7a12671e82fede0e0d97"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "92e9a07678f1958bf8caff0c02827289"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "3e64030dcd1ffbdaf6ce2ecbe63c9a63"
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
