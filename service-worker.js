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
    "revision": "e98074ba917f06bd38559d774095d9d4"
  },
  {
    "url": "about/index.html",
    "revision": "ce079a4fe1043a0db9e2a0fe3772da38"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "9796440c5f854aecee311572ec2fda40"
  },
  {
    "url": "algorithms/index.html",
    "revision": "800bf7749c970faa8c7fb368d878fa7d"
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
    "url": "assets/js/10.187ff02c.js",
    "revision": "2e2fc49b2618bca6931d5dd4fb105d80"
  },
  {
    "url": "assets/js/11.ba8e6ae6.js",
    "revision": "bb61e83c8e083e912a9093c0e6622c11"
  },
  {
    "url": "assets/js/12.51cf5b85.js",
    "revision": "c98d24711cc5b09b3a5067fe1af8afcb"
  },
  {
    "url": "assets/js/13.8eb22e93.js",
    "revision": "1c0482bd52780b7e8c018a450fa3c3ae"
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
    "url": "assets/js/49.eb0529e2.js",
    "revision": "ccab06bd18bbabed67f6ca9c94087197"
  },
  {
    "url": "assets/js/5.1499ca33.js",
    "revision": "270dba07989260e63c7bb8dc1c5776d6"
  },
  {
    "url": "assets/js/50.788716f5.js",
    "revision": "42ea202af411e1c09adec1d4024d649b"
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
    "url": "assets/js/74.b0c60a8b.js",
    "revision": "ca98f5a4d24f9fcca936e8cce1d5d2f3"
  },
  {
    "url": "assets/js/8.dcdd8d2a.js",
    "revision": "368b907129dbf5131984f6adbcb9024f"
  },
  {
    "url": "assets/js/9.55bf5185.js",
    "revision": "8d6706f0e3307b0fbbb24b6af74d7f87"
  },
  {
    "url": "assets/js/app.9e57bbc4.js",
    "revision": "5b54835a51fc1f91d516cc812579f75a"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "d113847fe6c201970732b3700ca2a5d4"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "61f20c5482e1a2dafe5919aa7269c63c"
  },
  {
    "url": "aws/index.html",
    "revision": "2377636ecfd3a405e6ef9ef9fe370e24"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "ec077f42e8c03537d8775d2aabf88bf7"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "04cfccea49ab62d216b2d6e8bc71e1af"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "090c6149d894b233e8126f1d92e1fbf3"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "455901cae6ee53c17b0705ec1f01fd67"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "955dc2cef39a48083a3c183ed814f29e"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "4cfd938d0e6b6c64b39708c7b1985149"
  },
  {
    "url": "blockchain/index.html",
    "revision": "f0e5562510508b4f1b3486b73cfad4c3"
  },
  {
    "url": "category/index.html",
    "revision": "78703742e8358a872763628fdf9fa72b"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "e6e2d5e9d94d86843d8ec0786ccf2611"
  },
  {
    "url": "database/index.html",
    "revision": "2ac58b5e00063f8a0c23bb8537c3798a"
  },
  {
    "url": "datastructure/index.html",
    "revision": "a123e690f904000dfab047aaf38f7077"
  },
  {
    "url": "documenting/index.html",
    "revision": "491a762ef37b04c46156ebac96241169"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "db7d1e130e182a56d5b92833ef3ca028"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "60edf35084f8f180ed65e402f08ef6d6"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "0054d0af3646a320b048decb0f87cdca"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "293da101793e24a4f2590f4c6a26c7be"
  },
  {
    "url": "etc/index.html",
    "revision": "c704252f1e8728c6adb03fa01cfb81d3"
  },
  {
    "url": "git/index.html",
    "revision": "ad8b4f4e9475844414c95ae143504652"
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
    "revision": "088c7b081e6a3463a6f54778bdbb914a"
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
    "revision": "8bab8a87cf01699f647fb18f344ed445"
  },
  {
    "url": "java/class/index.html",
    "revision": "1df55b1eadc0755914cef40faeb63e5a"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "6add8f0b592114c0ac8c86e7855e37d1"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "92d8029da2e813cd981ef9c3e074e3bf"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "a95d1536e21731953ce69b33b0d5c5e8"
  },
  {
    "url": "java/ds/index.html",
    "revision": "d28a03a895af6966d4a05b3e553f0735"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "9c875d32dc70b757d2ed5450f976be14"
  },
  {
    "url": "java/index.html",
    "revision": "6566743523eb99865f7078ffa4e900f2"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "7143ca99a6263541baca35845033d737"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "76273c414230897601d08f8bbbfad938"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "8efda6dd07c038c245d0a7f1a55d0db7"
  },
  {
    "url": "java/spring/index.html",
    "revision": "69f4097d04c48c2297c9076cb2bfd384"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "3a8180044638d7a3f1dca74f4eda27d3"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "4d5ae429094c18f2fe88100f6384efe2"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "3e4f85143102abe46c4fff28178c1cb9"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "843093c90efc2245c1c01f57f732e3bc"
  },
  {
    "url": "js/index.html",
    "revision": "c7bedaaf5b4f2b657f099e5b71b2d78a"
  },
  {
    "url": "nlp/index.html",
    "revision": "98010b1312b6b1abe07692aacb83cbf7"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "c6eb8967566c157f869a920aaa912f54"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "26087eebcafcd0df94579042bcc3f879"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "0c5c16e4504c4b893c730b55be504bd9"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "52cfa27d0bae23b992a23c4e4b1f74f7"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "5b1445cbaa6811b8660cc25f43ad93b2"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "88c82a7b6d452a45e1d3ae3aa2d9e7db"
  },
  {
    "url": "oop/index.html",
    "revision": "6d4ee2485b3109813ebeb3509056a343"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "c5f75ba8ce5ba5ff72755cdf5fd36726"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "4da9783c0df675a80e170bc86646a5ff"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "811b1fb848c92931c074bf3c6feebf72"
  },
  {
    "url": "rails/index.html",
    "revision": "0270921272e88418374eb209c00220ad"
  },
  {
    "url": "rails/install/index.html",
    "revision": "1c3eb09138dc48ab6924bfad1fe1d99b"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "06da6c127de3a449ae7946036d048483"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "023cc1a374a1a6c81eea001ba5f5d868"
  },
  {
    "url": "tag/index.html",
    "revision": "2428e7931e94b1ad5ffa481840f3b5d9"
  },
  {
    "url": "tools/index.html",
    "revision": "18d35988bb9357ff872c490855a27ce5"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "137e6add9129476659fcabe6a57c374b"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "b09a03a18d4eb9a545c38157cddea62d"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "9ef3f8bf1d7c3e6a1838ac97ac3d92fe"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "e40180577a7fe7e2528aff7669705a6c"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "684057c5fa0302ce5d3de72338570def"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "11448ca292a3be7d81693740681fe2eb"
  },
  {
    "url": "vuejs/index.html",
    "revision": "1d08de3aa848a804fd9ba683c2b746c0"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "3283740a806d762b70f75c649acfe6df"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "8e87935afd97e18dadba0359d94491fa"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "5fde836ece636b16146ef16dc806dfe2"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "5d24c887807a109d825862905c2715ef"
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
