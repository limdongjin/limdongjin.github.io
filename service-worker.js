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
    "revision": "6928c035eed536bddf47d167918a7b1b"
  },
  {
    "url": "about/index.html",
    "revision": "27c12969bdeacfc4e2a7b20a875cfec1"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "8634945d1455c4d87f08972987f68fbf"
  },
  {
    "url": "algorithms/index.html",
    "revision": "da56823d2e7108ed11f7050d0033fd5d"
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
    "url": "assets/js/11.ba8e6ae6.js",
    "revision": "bb61e83c8e083e912a9093c0e6622c11"
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
    "url": "assets/js/15.8357fbd0.js",
    "revision": "1b36d8d95a0e96c695e6a67110ddd9a3"
  },
  {
    "url": "assets/js/16.a7daae96.js",
    "revision": "3c5720214a7f651f5ad652f98c83cde2"
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
    "url": "assets/js/24.15710f31.js",
    "revision": "526d7209ba1ed0721f94d8db9cbc93b2"
  },
  {
    "url": "assets/js/25.aa08825a.js",
    "revision": "750f4cdc549095842fe252d1bc2c99ea"
  },
  {
    "url": "assets/js/26.9f91a9df.js",
    "revision": "458b06ff38da5f58f91b5177fcd7768f"
  },
  {
    "url": "assets/js/27.30636890.js",
    "revision": "a9ecd119238b5987ccd912ae91c1723c"
  },
  {
    "url": "assets/js/28.7f01dabe.js",
    "revision": "e45977a266f41eada39156dc70c0f071"
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
    "url": "assets/js/31.aa784d35.js",
    "revision": "5d6325c783053bf816cee5b42ddf4653"
  },
  {
    "url": "assets/js/32.8e3cb3a8.js",
    "revision": "9b455914ee1e6731604071e5bcb715be"
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
    "url": "assets/js/35.703aecf6.js",
    "revision": "580283d5f179451cbe0a28eaa21044c9"
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
    "url": "assets/js/38.ae700099.js",
    "revision": "371ffd178b29dd644a655f12a32509ed"
  },
  {
    "url": "assets/js/39.f0f8ae61.js",
    "revision": "d2b5bc4c0e5753d21c656406e8ddca97"
  },
  {
    "url": "assets/js/4.e0e8a1d5.js",
    "revision": "a9f510757f1af9e45bc9eaa15a1a68c5"
  },
  {
    "url": "assets/js/40.e78fd1bf.js",
    "revision": "072361347cf66b3589904afdbb9754af"
  },
  {
    "url": "assets/js/41.0bc6c292.js",
    "revision": "ef6eb503ec4b816924856fdd155d2538"
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
    "url": "assets/js/47.26c8091c.js",
    "revision": "bf952156d5f312c420537e010ae8eaf1"
  },
  {
    "url": "assets/js/48.341c93e7.js",
    "revision": "1cfec818edd8bba835c800ab8f7c1962"
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
    "url": "assets/js/50.bc9be299.js",
    "revision": "47fec42c5ca05bc798b6ef49ffbe2932"
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
    "url": "assets/js/53.c3e91203.js",
    "revision": "6338e17d299f5974fa99ffc49c6d5b9b"
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
    "url": "assets/js/56.9b689199.js",
    "revision": "3948480dd440fb92cc11aaee8e79246d"
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
    "url": "assets/js/59.fdb533b0.js",
    "revision": "4846adf1b2cec5460d4804a4f9444fa2"
  },
  {
    "url": "assets/js/6.bbeb2a63.js",
    "revision": "d9779b132b17c27199cb0438701ba25a"
  },
  {
    "url": "assets/js/60.61f57088.js",
    "revision": "182a9fe93614ae08f0c4dbf08f47ffa4"
  },
  {
    "url": "assets/js/61.652d5248.js",
    "revision": "a17737e1c740a3739cbf4181ede466e9"
  },
  {
    "url": "assets/js/62.c970db9f.js",
    "revision": "5fbf3278938e95070cf99f17ff1964ec"
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
    "url": "assets/js/66.f5b90b34.js",
    "revision": "7b7360a0f07b43a73abf8096c915cd7b"
  },
  {
    "url": "assets/js/67.1c415d56.js",
    "revision": "2865492f19b2f273f9c3356d1365c265"
  },
  {
    "url": "assets/js/68.7785e063.js",
    "revision": "8cc6620694aed5dc27b1e51bd93e40b0"
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
    "url": "assets/js/72.34768287.js",
    "revision": "ebfcb1b09a9ec9ed8d790a743708a8a0"
  },
  {
    "url": "assets/js/73.d506b267.js",
    "revision": "94473a76c28aff0f458d6ef6b9744ba8"
  },
  {
    "url": "assets/js/74.4c8cd7f1.js",
    "revision": "fc6605688d2497cbebc96e8863d13455"
  },
  {
    "url": "assets/js/8.6f8d0cfe.js",
    "revision": "02da0e1d38fef75f58fa0cd8ee37536f"
  },
  {
    "url": "assets/js/9.e07f92c4.js",
    "revision": "c74d41f8bd85ab8210165246b2857f75"
  },
  {
    "url": "assets/js/app.275bde43.js",
    "revision": "636fb603a565e9d9b66738f19b0cddb9"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "ac1ee05db066b95c857c84269f3b3fb1"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "0b90188e462bbb375b12235dd05da90e"
  },
  {
    "url": "aws/index.html",
    "revision": "2d9d306c99c8c947ea9d475906113013"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "ea8c42b8b183c2de4607630987aa0716"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "c390c5f67779bb0870b35049d27f45a4"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "c37dc1daaa4b6ceb19de0099302fa2f2"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "4d40696f7598f96c677a86d3891664a0"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "eec966d7eda223ddc8b7a33723c62888"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "04dbdbabaacacf1dedcda143e4a570df"
  },
  {
    "url": "blockchain/index.html",
    "revision": "7c8d5cb55172342f683de6a555dcd685"
  },
  {
    "url": "category/index.html",
    "revision": "5d4d51995c88c30a3af09b5b532993b4"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "da8d81fdc34078781a7e173d4c0a2473"
  },
  {
    "url": "database/index.html",
    "revision": "b261b9fda028fb5de21dbafc2c1a64b0"
  },
  {
    "url": "datastructure/index.html",
    "revision": "9deaadc7c3049fd4a5c38aa9de50814c"
  },
  {
    "url": "documenting/index.html",
    "revision": "2dacc2acfe4a9f302b8b08427721c70a"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "3161e034850b48c29b945ef7707cdb37"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "34e154c9b47f43340a8f5d596488db6a"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "8635fdbcfaf43c81fb6715ebdd96115d"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "28455dd4d708388c17da27203c523006"
  },
  {
    "url": "etc/index.html",
    "revision": "248c4acd1fcf7b62c83b37101b070df5"
  },
  {
    "url": "git/index.html",
    "revision": "bbd681b6a6f94fb7746bf7c12a65d35d"
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
    "revision": "10ad4e219b87bf05d7826662ff067aff"
  },
  {
    "url": "java/class/index.html",
    "revision": "95ac48467a618e992e4f6273d7560733"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "5aad754c6d8e8ccd7294361e62c3a48b"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "a45e8546e9e78da4430b65d8635e1778"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "6f3cdb27bd3cb01a6e9f9ac5e89aaef2"
  },
  {
    "url": "java/ds/index.html",
    "revision": "5fd6593ee09151a17932a9757b28fc7f"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "2ece7a8e84371481e6141dcd2ae17128"
  },
  {
    "url": "java/index.html",
    "revision": "9bea32498917f026f1a4ce0b16c9f399"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "27f24e2308c8a7aa841a3abf3dc6888c"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "d54fdddf4967e7ef1f85b6b7f31cd0a9"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "6a8b5717615030fd59be3023ac000927"
  },
  {
    "url": "java/spring/index.html",
    "revision": "d5f201d824254f11483e57a427325176"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "ec23c8724591ef4aadb9a718996e77a1"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "5f33653e4e6d0bbfc0c8b80a2485327a"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "1456b7375d47899444018a465a557c16"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "79dd927672f86f3ca3a503ce48a18742"
  },
  {
    "url": "js/index.html",
    "revision": "5bf3c520913fad699773c4a50f70e9c5"
  },
  {
    "url": "nlp/index.html",
    "revision": "0226caaaeb4cd3a03af4fa4ba64f6ccc"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "7e79da857e52f755cf91f8a58f162508"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "b4d6b9b55307330fd4ef56a304c3a1d2"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "44e18ffcf82dc220be7e7854baf80ce9"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "351b92b8b1ea4b00be58f8f8484af280"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "0e4a297b1cc03f10941d2f4f5bb44503"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "33502591db2a120483f64859c7f21ba6"
  },
  {
    "url": "oop/index.html",
    "revision": "7726c4027203d1cb552af3c615b1bcb2"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "9a34c354e2c043368f8a79f8a2be40bb"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "7354b650f5e36e3c4b54934087e9e2de"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "3081079032c1e04b3582c117d4286f9d"
  },
  {
    "url": "rails/index.html",
    "revision": "789c9aef2621c4052eb7c462c42516a5"
  },
  {
    "url": "rails/install/index.html",
    "revision": "97c44586c5c572c260b2f290a9f3676b"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "08a2fd672406c00cc01d7aa0e142b60b"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "5d613e56ac69a4b58323451fb536c1c4"
  },
  {
    "url": "tag/index.html",
    "revision": "8e79f410c45e06fa99adbbc65086f902"
  },
  {
    "url": "tools/index.html",
    "revision": "3a6de549a54b5589d47e2c1dc1ac9317"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "b99d1493f58bb65b4869665e0cc89da1"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "5d2d1f017f543f844fa65bdf81f9e09c"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "9588b364e998508180eb1efda0390309"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "cd55765478bf1167235fd96309c34d42"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "d96cecc9db3b5ba45ce8dabd8bb69f85"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "0e6549728373575180f0f9f5b0ea5803"
  },
  {
    "url": "vuejs/index.html",
    "revision": "92f95a36b493ce7a0628055739483868"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "b16b48409d46636f4495c8e871c18322"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "ee9bb76d9ec7184263a9d9b2536f248a"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "cb3f563bc6e37515746f8925c8c78f0a"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "7dacb70f09358bd41573bb1ca3cc7e3b"
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
