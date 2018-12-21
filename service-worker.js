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
    "revision": "9eeba4c7159403ab10f2bb891a7ecd60"
  },
  {
    "url": "about/index.html",
    "revision": "c5844e6c580f426bf1eae9468c15224b"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "ece35f6cd747808a9f5ca982131c1bbb"
  },
  {
    "url": "algorithms/index.html",
    "revision": "c48041145ea85e8ab04e7e076280c2a6"
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
    "url": "assets/js/12.024d83e9.js",
    "revision": "d9da1bed2f7d969771cb7d3c91bfc4a0"
  },
  {
    "url": "assets/js/13.cdf9698a.js",
    "revision": "1ff01ca5ab360d4c2faed36d592a3105"
  },
  {
    "url": "assets/js/14.144dbab3.js",
    "revision": "82042287c30178b73efb3d1c0cd2afa8"
  },
  {
    "url": "assets/js/15.1f6cffb1.js",
    "revision": "1dbd35fd37f774cbb49b3cdda594c3d8"
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
    "url": "assets/js/18.b2e2f3eb.js",
    "revision": "608b4810fdd240baf5e5065dcb625be0"
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
    "url": "assets/js/21.6232d39d.js",
    "revision": "c7c81af22ddb393fe7993378fc0f661a"
  },
  {
    "url": "assets/js/22.542aacb3.js",
    "revision": "d9327becb65c35dadbca9a887f932b95"
  },
  {
    "url": "assets/js/23.2481084d.js",
    "revision": "538875a27e8446308a10a7ec1c98c206"
  },
  {
    "url": "assets/js/24.86eee323.js",
    "revision": "a02d25d38c7ddc10086d4791800a9fd7"
  },
  {
    "url": "assets/js/25.7d36986e.js",
    "revision": "3089d679fcfd54c14c6c363c518078f1"
  },
  {
    "url": "assets/js/26.9ba6d4a4.js",
    "revision": "c7cdd5a44bd416d28b8ebafdeddbc590"
  },
  {
    "url": "assets/js/27.49c55868.js",
    "revision": "1ff42d8a39a5b3e7fc52d7cd39315e81"
  },
  {
    "url": "assets/js/28.a16a8e5a.js",
    "revision": "8a08d4d70b12cb7881ace248520417d3"
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
    "url": "assets/js/31.6fec4368.js",
    "revision": "d151be6837a73db71255d9748f326c03"
  },
  {
    "url": "assets/js/32.7a3376b1.js",
    "revision": "11b9cb6616aa3c5d36ebd09b83b1b45d"
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
    "url": "assets/js/35.6ed18d6b.js",
    "revision": "51f7794a68510404f567cb9946c08dae"
  },
  {
    "url": "assets/js/36.dab08db5.js",
    "revision": "5e4cddea6c10a8aad25f7ddf31c97e45"
  },
  {
    "url": "assets/js/37.f8a4a2b0.js",
    "revision": "6cb6a910cea7c5689c7fdd4fcf28704d"
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
    "url": "assets/js/41.265d73c1.js",
    "revision": "5a33ccb20f5c87784a881f53dd0adc1f"
  },
  {
    "url": "assets/js/42.3adc908d.js",
    "revision": "63f5b695100a0fb71ef03f07378cbc61"
  },
  {
    "url": "assets/js/43.8ad8c6c9.js",
    "revision": "9b49547a3c6531d671139fa125e02aed"
  },
  {
    "url": "assets/js/44.23a20984.js",
    "revision": "2628f7c66603f0218ccb9a588ccea87d"
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
    "url": "assets/js/48.5a391c29.js",
    "revision": "e5e9919fcc0e64d7dc382fc00d8e4868"
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
    "url": "assets/js/50.c3b0ab57.js",
    "revision": "eee9f19187fa759c846805676b0a6551"
  },
  {
    "url": "assets/js/51.22e09fac.js",
    "revision": "685830757304e7c1f196971be089bb75"
  },
  {
    "url": "assets/js/52.1493cd71.js",
    "revision": "60c35f69a51160921f9400a2a3be9018"
  },
  {
    "url": "assets/js/53.09560400.js",
    "revision": "9419a924786165864f00044caf4d200d"
  },
  {
    "url": "assets/js/54.102fc0e8.js",
    "revision": "7c0093f5c024a494bac09f89e1372000"
  },
  {
    "url": "assets/js/55.6d4a418d.js",
    "revision": "48d05bcb98529dd8199ad39d55559ac8"
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
    "url": "assets/js/58.74317b8b.js",
    "revision": "8d91ade3cf690b7586e16d7d6e7c7c8c"
  },
  {
    "url": "assets/js/59.cd3464ab.js",
    "revision": "cbab21ce7ca9e2e9098c142583b027b4"
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
    "url": "assets/js/61.652d5248.js",
    "revision": "a17737e1c740a3739cbf4181ede466e9"
  },
  {
    "url": "assets/js/62.eb7ea906.js",
    "revision": "83c9ea7520879d4548a2eeab1105b526"
  },
  {
    "url": "assets/js/63.c4b36072.js",
    "revision": "d8cf2c40cd3d207e9d3ecd3ee8b9f2a9"
  },
  {
    "url": "assets/js/64.439edf78.js",
    "revision": "6ecaeedfffc9fb4223f139fb75348839"
  },
  {
    "url": "assets/js/65.a03c3640.js",
    "revision": "6dcae37d39581893d3f7248e6cc1133f"
  },
  {
    "url": "assets/js/66.f5b90b34.js",
    "revision": "7b7360a0f07b43a73abf8096c915cd7b"
  },
  {
    "url": "assets/js/67.ca9464f8.js",
    "revision": "7ebe5e08e48ac259967791bf1f5f115b"
  },
  {
    "url": "assets/js/68.388600e6.js",
    "revision": "5ed4ab0effcc40b8bb1031820f93e2e3"
  },
  {
    "url": "assets/js/69.d3625dd2.js",
    "revision": "2d66f182261c0a7c0552aac823dd624e"
  },
  {
    "url": "assets/js/7.7810fa6c.js",
    "revision": "a1f25dd45c48890d1c9afd3cf2e04ba9"
  },
  {
    "url": "assets/js/70.75ca4dcf.js",
    "revision": "2d283ef95361cfc5e1205e390fe88f21"
  },
  {
    "url": "assets/js/71.c3e0e02e.js",
    "revision": "5aa3ac72023db27fa2b9296d86670685"
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
    "url": "assets/js/app.722c1feb.js",
    "revision": "34c395b682d254af04aca02d6ed307c5"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "e3d5d75dcc3aa67b44e3805666e7cc12"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "6445c7897990fcc0c9d94fb2018e9dd7"
  },
  {
    "url": "aws/index.html",
    "revision": "31d3ad67056af142dc4aaad589d4c78f"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "6fe57a569c379966648bd612bab14da5"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "869785c3da82b1d7e2b0e544bec761a1"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "a9850336e190e3157a5b1f96358fc8dc"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "e89431429f1d9936891bb508fc8567f4"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "3bae788aae11b211bcb9d40c48e44bd4"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "4a5d69404f8d299ea185f513e453d28b"
  },
  {
    "url": "blockchain/index.html",
    "revision": "8c43ff4af03b54e19c86193326eee098"
  },
  {
    "url": "category/index.html",
    "revision": "1d7497ecca20bd69c72c739001f3d04e"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "2bda6ec3830cdf2690238776aec278dc"
  },
  {
    "url": "database/index.html",
    "revision": "cdca51e7cb7b2d80ce8b3369af68a384"
  },
  {
    "url": "datastructure/index.html",
    "revision": "a2dc6c45ca01781e20721fda670affed"
  },
  {
    "url": "documenting/index.html",
    "revision": "ebc9fa989418f22e73211d81fe95d632"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "62b1de8a3455f1681a4da1e787098294"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "ffa0542c6b81e32991dc6d0b84d550f9"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "9002c366e65c116a8c4c6c9c225f9429"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "834db4fd00d68749fdafb5c1d0b94a22"
  },
  {
    "url": "etc/index.html",
    "revision": "80fd678dc633eda35127abd0b51da38f"
  },
  {
    "url": "git/index.html",
    "revision": "f4056f2b6de60a83e9bb8caae326e556"
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
    "revision": "da786414072b63852897aa527cf7dcff"
  },
  {
    "url": "java/class/index.html",
    "revision": "234270175eebe09cdc1d837553f20502"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "0695e8483fb860151b9d04398027db05"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "867b6b9d4574801545803c2fffede1ee"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "893b3cbf6ea77be6c965fd56d0bb4bae"
  },
  {
    "url": "java/ds/index.html",
    "revision": "fce666bef7937ebc3f78ec547f59de1e"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "cc6b61f4df5ad1110c290024292335eb"
  },
  {
    "url": "java/index.html",
    "revision": "1acc5d9f00b67ba5c9e19191be8466c4"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "54f3c125dbd87412d0d50bd5c1231883"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "80f0be7e3da659b6a9fcd2667ff53fac"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "4caa80b7da77a7a6236ae467918a16fd"
  },
  {
    "url": "java/spring/index.html",
    "revision": "baa9d896eedc40cd06e28fe3afce5059"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "7a1d4e75ccfc0a7abc6c493464d35a56"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "437edd46f154d61a5d7726b1136fa056"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "1ee6a2cc6dc13258b9603e4ca66cb2c9"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "3d955a22d79d3cdaf9708eaa6b1f0c79"
  },
  {
    "url": "js/index.html",
    "revision": "ca39a5f3fcaf2dd1d63a1b0e88e123bd"
  },
  {
    "url": "nlp/index.html",
    "revision": "df799817882aaddc5d8690e7b5e173f7"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "e5acdd50beff6ee095399627f6243731"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "397bbf3d4e5b7d167f0011d0df797e57"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "107c7ec9d4259777f3be09006f824310"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "fad96f1561275d6416cf6c4f88391ef0"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "a9f73fb0d135d3768b8ac9cf1828b521"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "c12949d8da93a330a468d197cf3d84bc"
  },
  {
    "url": "oop/index.html",
    "revision": "1a4c014453f64f545fa42a2bd6cd547e"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "4fa3230c921ae15f2a8560cfd3e4b043"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "910bd54c50c2552a08302e9e65a9f984"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "c2f78d8c047dbc92414372259830de1c"
  },
  {
    "url": "rails/index.html",
    "revision": "62c0d810111937e36d2dfae4e775089d"
  },
  {
    "url": "rails/install/index.html",
    "revision": "3b960317227b57c1d0419f27cc93e183"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "6bdfdea78aa49dc0d807bde43f72f13a"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "f75b0edab419edfec84d204b4173d6c3"
  },
  {
    "url": "tag/index.html",
    "revision": "f099fbadc5d4c99c2664562b5eba606e"
  },
  {
    "url": "tools/index.html",
    "revision": "8a5f14f69e7ee7eb0d2d409536beff22"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "d4981c632ca348f3b3b59ff66481f772"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "a9d1d36e68b3488aa1a8b08bb278354a"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "cb53c955c4b5a26621f1f41e6da61695"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "d5076e17f03cf283f9da54f84e221b8c"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "0c5ab6ac5d47f2039690b4d90be158cc"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "076f5801ec7fd1b5ab0c6cf15f353826"
  },
  {
    "url": "vuejs/index.html",
    "revision": "29e79fe51aca70bc5928e1801524e7af"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "1504d0641780cdc97366e3b591af93db"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "cee43335ef7e8adb58060cb89244950f"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "aeddb705af09b4bfab746cf127151d00"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "30c59a459e844c939a51a3631c8176ee"
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
