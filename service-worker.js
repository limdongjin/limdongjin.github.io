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
    "revision": "2208e33571f6332cadc4e9411edfe64a"
  },
  {
    "url": "about/index.html",
    "revision": "f6ea41eb14fd8f8f30417d3e5f88e347"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "1b9e3fa8fa6b5b031abeb2cb2ad8f414"
  },
  {
    "url": "algorithms/index.html",
    "revision": "029e197f868faa675eb299911e045c7d"
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
    "url": "assets/js/10.e48f8cf6.js",
    "revision": "e786c52adf265d3648caac4ea0d50ad1"
  },
  {
    "url": "assets/js/11.5e5f08fa.js",
    "revision": "e288ccd6a2b008c86248e231e2a20e64"
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
    "url": "assets/js/18.cf046cd9.js",
    "revision": "be3c32e5bd7dfbd8d0ee69603e8b0a3c"
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
    "url": "assets/js/20.5285a7b2.js",
    "revision": "468fa4ec40fed1df2f5c2e95393addca"
  },
  {
    "url": "assets/js/21.a523f3bb.js",
    "revision": "1c207e4dcbde81deab9523fc5452df4f"
  },
  {
    "url": "assets/js/22.8bd4f039.js",
    "revision": "847df2fa5f01a67a6d48358df0694dab"
  },
  {
    "url": "assets/js/23.2481084d.js",
    "revision": "538875a27e8446308a10a7ec1c98c206"
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
    "url": "assets/js/26.f5241f84.js",
    "revision": "dabb8a042c5fac2b5fa51a0d76c50779"
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
    "url": "assets/js/33.900c3561.js",
    "revision": "abce45c6f515f3ce0bcffa9ce90eab52"
  },
  {
    "url": "assets/js/34.9453751e.js",
    "revision": "8a0586b484e4a124138f436cf5a622d3"
  },
  {
    "url": "assets/js/35.65aaba0f.js",
    "revision": "418eb2cb332cc4551bdc1a8867d46b80"
  },
  {
    "url": "assets/js/36.8d2a6f6d.js",
    "revision": "8a44a2c5c1bb1ea4708224be1b8d049a"
  },
  {
    "url": "assets/js/37.bb8b38cb.js",
    "revision": "2728fc35b2e8e61dcff88f934d5d9181"
  },
  {
    "url": "assets/js/38.ae700099.js",
    "revision": "371ffd178b29dd644a655f12a32509ed"
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
    "url": "assets/js/40.e78fd1bf.js",
    "revision": "072361347cf66b3589904afdbb9754af"
  },
  {
    "url": "assets/js/41.ff09ea82.js",
    "revision": "2d58c6828de7d3c24f73894b04e06da3"
  },
  {
    "url": "assets/js/42.b7a1f526.js",
    "revision": "d2767ca03e5614640bfe4f0147ad96ad"
  },
  {
    "url": "assets/js/43.537d6644.js",
    "revision": "04beed5231427880c1a3324af895de01"
  },
  {
    "url": "assets/js/44.690c0bd6.js",
    "revision": "e154a48724653768af2d74165f49e984"
  },
  {
    "url": "assets/js/45.df99aba2.js",
    "revision": "b3977cdd821a2686a04d5aa3b41a7472"
  },
  {
    "url": "assets/js/46.1721bbf8.js",
    "revision": "8e79d186e57f22aaab44d0647bfdb4d3"
  },
  {
    "url": "assets/js/47.67394e46.js",
    "revision": "1ce31b114c9462a9c94c1caa927dfdde"
  },
  {
    "url": "assets/js/48.dac14c26.js",
    "revision": "18c5b1c2e9c5d84e682992c79afe4b4d"
  },
  {
    "url": "assets/js/49.a2b5d050.js",
    "revision": "2f18a7602dca4f99abcd9a10d1f4e7ce"
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
    "url": "assets/js/51.1fb04d01.js",
    "revision": "3d42500113c2f2fcd75f4a20aadfa622"
  },
  {
    "url": "assets/js/52.1493cd71.js",
    "revision": "60c35f69a51160921f9400a2a3be9018"
  },
  {
    "url": "assets/js/53.bc153861.js",
    "revision": "19cc2a96ab13fa062aa484a6af03522c"
  },
  {
    "url": "assets/js/54.ba0f7474.js",
    "revision": "95295a72ff6e0906b68228cadc72bebb"
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
    "url": "assets/js/57.745e6bf9.js",
    "revision": "8cb296de3431fa96979e37bdc1250d71"
  },
  {
    "url": "assets/js/58.0c1c65f9.js",
    "revision": "ce2b2e4c724c86427d206211a6579be9"
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
    "url": "assets/js/60.18cefe9d.js",
    "revision": "a377f6b72b33ae0d0d45c98a3bcc0126"
  },
  {
    "url": "assets/js/61.68830754.js",
    "revision": "6cf0b6267169aac2b075e91684d80ce5"
  },
  {
    "url": "assets/js/62.eb7ea906.js",
    "revision": "83c9ea7520879d4548a2eeab1105b526"
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
    "url": "assets/js/65.a03c3640.js",
    "revision": "6dcae37d39581893d3f7248e6cc1133f"
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
    "url": "assets/js/68.5bb3f18d.js",
    "revision": "5f1e7083cc29b384dab38a04bd307379"
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
    "url": "assets/js/70.6813433f.js",
    "revision": "e41346455c1811ed572c8bd91f72ea77"
  },
  {
    "url": "assets/js/71.dbf7d01b.js",
    "revision": "bd9ef25449ed36e2dce338ce03c1eef8"
  },
  {
    "url": "assets/js/72.28b3a0ae.js",
    "revision": "d53143d4dca96702cbf08b284a58ec03"
  },
  {
    "url": "assets/js/73.419b802d.js",
    "revision": "cd285a485713b4c8a17d71b51b17eb70"
  },
  {
    "url": "assets/js/74.d3e2485d.js",
    "revision": "43e6cd8a88f40f19354cf44d6a4c6e62"
  },
  {
    "url": "assets/js/8.14dc5f0d.js",
    "revision": "27e483d4b5b1265c5959a3475f28f43a"
  },
  {
    "url": "assets/js/9.48e67eb9.js",
    "revision": "a689a90b2dc9075813ccb5bf1f093a53"
  },
  {
    "url": "assets/js/app.18b4d207.js",
    "revision": "35023bdb018477dbd9cbdddec2ad6303"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "b2af7cb872a62f14db5c1f45c42b8927"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "6ac3a3b715276a400f869082b6a935e2"
  },
  {
    "url": "aws/index.html",
    "revision": "0863abf75a6c928a6ab9f59fd4394c85"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "c0e07ad2f6f7436c84648e0f8f4c5247"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "d15634446fac8a9889033e451239ec66"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "43d51c62dba234a2be1a8cf07a999c54"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "ed52b89aa4fa5c2f413a7ecfb7a8d916"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "5e2f3eefa36c57fd3570bf877df4fb17"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "95dd8087ca0a1897f17928f1b3cc8490"
  },
  {
    "url": "blockchain/index.html",
    "revision": "f6fc1850565c3c7ea519565636c5b4d9"
  },
  {
    "url": "category/index.html",
    "revision": "695d0958e5cbf4b73d7c34e1ce2a84b6"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "e81862bd010c1995b8d4b0f069d752ac"
  },
  {
    "url": "database/index.html",
    "revision": "d3500085f82613e0ce2b7fb31f099aa4"
  },
  {
    "url": "datastructure/index.html",
    "revision": "11741451c26065a926b0db53e7268147"
  },
  {
    "url": "documenting/index.html",
    "revision": "9573852be27c97a6154e2975eae4d485"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "cf74fa6f9653c7ebb16bfb389d6a8a0b"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "0a6f9fc78aa88e8e9ddb39ecf50734d1"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "7462b38a4a7490f05939869d4ec02df2"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "9360f6e3a5ac8e98568c62cb92893fea"
  },
  {
    "url": "etc/index.html",
    "revision": "cdc04381ea9a7de3f785fe12e04f1701"
  },
  {
    "url": "git/index.html",
    "revision": "767d0d3a5ab76ed539f08319f1e9de14"
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
    "revision": "bbfd71a6ec52be2b43b1fe25f5921ea2"
  },
  {
    "url": "java/class/index.html",
    "revision": "aecf9523da757e4c558c0cc20e80a997"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "ebba3f6cb3320cd2db9feabf260875cc"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "e6206eb9e3f43e355def15d9b6ca630b"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "97baa45a09a60388e5681f0644a09189"
  },
  {
    "url": "java/ds/index.html",
    "revision": "7a8aa6880f88da0c26eed18a4d6baff9"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "c176b53d726140169e3ef6e56f74ccb6"
  },
  {
    "url": "java/index.html",
    "revision": "d48c4c6d853d3b017c945385d8330213"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "c04e2a478f4dbd42f7065c99a32f4d2e"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "3b76ade5cb55e02dcb6b5ff8ee3fd9a2"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "b1d1d2987ac9c93f0844e45c63d8317d"
  },
  {
    "url": "java/spring/index.html",
    "revision": "78cde9cbea6a499fc821644d5bf60775"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "e33e0493220fc39555c981b0625a04ce"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "f47c4fe6c3248bf97a427043ee9c2cf8"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "3a277f6f00b78938831babba77eb88fb"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "7734b9352d523d8bc262f3a1facaa22c"
  },
  {
    "url": "js/index.html",
    "revision": "785c07dd659fdaa7d86866d0b0631879"
  },
  {
    "url": "nlp/index.html",
    "revision": "280227d50796061900a9116fad3ff80d"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "cf8661eb19669d4bc830660a7ad5cd8d"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "a8d81a4294a1425399c2f4c64856af40"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "7b276965210b8e712489a91047410ce8"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "f3e52c6bcdfaf103c7ebd4240013cf80"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "eefbe9e548a3ee8c59ae4b0693505057"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "9023fa09f80ee49598b01c18df2d7559"
  },
  {
    "url": "oop/index.html",
    "revision": "7fe2aa99db2120125a16974dc2e1d19f"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "4dc18faa2667c04be01aab84828070af"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "9d0ebc7dbca6ff14ed73e6392c9289f0"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "0e5c4acbb6a48637c009000f9066abe0"
  },
  {
    "url": "rails/index.html",
    "revision": "3fcd5d48e98c9d7988071b890d65c6c5"
  },
  {
    "url": "rails/install/index.html",
    "revision": "bc63e9457087e05eb78a69b1bcbb8826"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "939007411f7cffa89668e42617d4e7e0"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "349b7096cc8b3acff64308fe81b079e5"
  },
  {
    "url": "tag/index.html",
    "revision": "45a67aa4269f869a713450a9ff71a1a8"
  },
  {
    "url": "tools/index.html",
    "revision": "a09f32dea598714f3d428da7a8f2c846"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "3370c563c0cb79c4aeb65c64b1673063"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "c7616f1e87895290d32f29ca423b1750"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "e4c399d5fa4ae547b6d8739b4832c704"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "9e1ea93bf49a7c34bcfdff3985e44083"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "c23e2e577a36482e459a3d732e8c246a"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "72f97e1a58699d12038483d8d3fddd8d"
  },
  {
    "url": "vuejs/index.html",
    "revision": "587db8a2d4094c2a161bfbcff87ae8fa"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "e6f0afb024bf54eb6ef84f64fa9607f5"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "78b9e948c2e805b40539e42a9e7e7e8b"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "1384703c1347264616a6477b2e75a0ee"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "8f3c190894d12db7409c521e8af34e1d"
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
