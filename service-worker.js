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
    "revision": "ef002ae5fc6327ceb0337cf2e25fa06e"
  },
  {
    "url": "about/index.html",
    "revision": "90fa5dcbf7030bf90ed377a86e7ca74b"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "209f94b24c91ed8b8fd76d8e5eb35f71"
  },
  {
    "url": "algorithms/index.html",
    "revision": "8f52d63a37a92b777e6eeb60ae2d6c7f"
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
    "url": "assets/js/12.131e2510.js",
    "revision": "eef4f4793459397b19d7bc7bbd1f5d26"
  },
  {
    "url": "assets/js/13.d8c6af89.js",
    "revision": "181599a0cb1e66aad4af0e23b94c6ecf"
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
    "url": "assets/js/16.63fa9f32.js",
    "revision": "ce6af6a6b80a395373cfd0532055338a"
  },
  {
    "url": "assets/js/17.3b8295f7.js",
    "revision": "88ccecb63c82778f2f88582d645f80ab"
  },
  {
    "url": "assets/js/18.b2e2f3eb.js",
    "revision": "608b4810fdd240baf5e5065dcb625be0"
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
    "url": "assets/js/22.b1136b5c.js",
    "revision": "8d19f5193908dfdcbd8639f1e5be0b04"
  },
  {
    "url": "assets/js/23.1f28be82.js",
    "revision": "c720447308b6d8cdfbf4622ec4cdb6a8"
  },
  {
    "url": "assets/js/24.86eee323.js",
    "revision": "a02d25d38c7ddc10086d4791800a9fd7"
  },
  {
    "url": "assets/js/25.62c3e3a0.js",
    "revision": "b0f55a0c5e4dd026904138d746e880be"
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
    "url": "assets/js/29.510d9f4b.js",
    "revision": "99c1e87bce451c6ef3ed939713f75369"
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
    "url": "assets/js/32.8e3cb3a8.js",
    "revision": "9b455914ee1e6731604071e5bcb715be"
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
    "url": "assets/js/35.6ed18d6b.js",
    "revision": "51f7794a68510404f567cb9946c08dae"
  },
  {
    "url": "assets/js/36.dab08db5.js",
    "revision": "5e4cddea6c10a8aad25f7ddf31c97e45"
  },
  {
    "url": "assets/js/37.14546f3d.js",
    "revision": "1ee7ae26726d23058c5ec467192a483f"
  },
  {
    "url": "assets/js/38.47689640.js",
    "revision": "9bf49cdb66e8ca6348b1d517106d1e41"
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
    "url": "assets/js/43.eebf2eab.js",
    "revision": "a7c710af8ea62f2c181ff87b088349b0"
  },
  {
    "url": "assets/js/44.1e371335.js",
    "revision": "8a21f1dbc4fbf1d1d999ed7edf3ce7a3"
  },
  {
    "url": "assets/js/45.9b9ea37f.js",
    "revision": "fcfcbc489d8a8a02190ae2fa6fe71931"
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
    "url": "assets/js/48.5a391c29.js",
    "revision": "e5e9919fcc0e64d7dc382fc00d8e4868"
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
    "url": "assets/js/51.1fb04d01.js",
    "revision": "3d42500113c2f2fcd75f4a20aadfa622"
  },
  {
    "url": "assets/js/52.fe195c93.js",
    "revision": "46b752ae3e1f22bc7bd96ca0c816609a"
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
    "url": "assets/js/58.77aa8cf2.js",
    "revision": "bc2acdc26b7edcfac47876b82a631cc2"
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
    "url": "assets/js/60.fb953298.js",
    "revision": "8b294af3c286d6e3153e76d59076859c"
  },
  {
    "url": "assets/js/61.c7cd6367.js",
    "revision": "80ae6a1131043db0990663391f8d5694"
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
    "url": "assets/js/65.68b32cb4.js",
    "revision": "1b449812692fc580e921e47ebc60a159"
  },
  {
    "url": "assets/js/66.86a382bd.js",
    "revision": "92912101a2e2f239dab6e99fc0508442"
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
    "url": "assets/js/69.fa298be9.js",
    "revision": "10633c3c80ed96ace0880e1897c16ca2"
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
    "url": "assets/js/74.e7c5bbdd.js",
    "revision": "f079b6cb773bea2a2a4bddc1a9ca2e9c"
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
    "url": "assets/js/app.95cc7668.js",
    "revision": "813808a93854c4cadf43f81e9e22835d"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "c43110aee91dc970712d3292b54b2978"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "ddd59a0b3f5e590ca248ec1f8e6f6c8f"
  },
  {
    "url": "aws/index.html",
    "revision": "e7fd5ba82044015ed9aa7daa7c2e3b28"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "e1e47b73a1014a74a895d838b0007f54"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "d6c5b3f167c6a334a9103e41a342c45a"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "a684dbc4ffeb1b976db3352356b81c08"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "b79f1bc07dae1ad80f01771d6e90a6e3"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "f992dacf1d637b269d669359e6f96fab"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "0f52bb84279de049dd2c0ad9116b9218"
  },
  {
    "url": "blockchain/index.html",
    "revision": "1a46ac3de05ff1f4a29537c9e007e4bb"
  },
  {
    "url": "category/index.html",
    "revision": "194f6ae74aa7d9193bbd949922e4374b"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "ca5b38b425c872cb9ab880b35bb88855"
  },
  {
    "url": "database/index.html",
    "revision": "02b3655e1073b162fa1e7823b03b5566"
  },
  {
    "url": "datastructure/index.html",
    "revision": "6f45ecaaa60d54afa3639786f62b65f5"
  },
  {
    "url": "documenting/index.html",
    "revision": "35894dda70a474d50d79465668a8ef01"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "e1fc1d7787bf47ed34d9a2697bf39cb7"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "5480039250ce58f40c4a23c2282e4831"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "4035dc63771f85ea97c766b037bdf404"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "82bb58892e8ef4ac1076a79c249c1b7b"
  },
  {
    "url": "etc/index.html",
    "revision": "7f4cb786abe26e3ecb2400af486b7bdc"
  },
  {
    "url": "git/index.html",
    "revision": "b8a0c6ae86422b14e0af3346bea2147e"
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
    "revision": "3ae7103e3771b6cfeb7dcc765ea8ca9a"
  },
  {
    "url": "java/class/index.html",
    "revision": "130eb7877bf1488d860076307a0f649c"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "b477e98c5af3dbc745b28b912a0ad0de"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "29ebf6d86f5f8c45b38e22bf6e11cf6f"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "2faa9bba50dacf609115691ec09bdc0b"
  },
  {
    "url": "java/ds/index.html",
    "revision": "e0eda676f3bf3a8893462fb4983b0e4f"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "26a16c2c77cfcab17d7ec0b18fa90f6b"
  },
  {
    "url": "java/index.html",
    "revision": "bcaa03fdd9d5e8b16edc604c309b4e44"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "a441fca762269c1ae5b8cbbe8466d67a"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "9c91bbce010bc51affaa36a20a20ded7"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "e9e99d675703a0c05127fdf1bf5f9056"
  },
  {
    "url": "java/spring/index.html",
    "revision": "b25afc651373c43ecfb9778674644f55"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "7e8c1be37ccc1bffc7872728542c0d9a"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "22d416f84a2232c8b92782578194793d"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "35c2673833a31edcd626acae8b7a54d6"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "5303b710ad53e32072462709c6e10969"
  },
  {
    "url": "js/index.html",
    "revision": "1a22542923017d29bceabbf67c26f999"
  },
  {
    "url": "nlp/index.html",
    "revision": "0ec2c51c6684457a199230990c72a7b9"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "cfa470843965f70992f83b0aaaf7e74a"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "b0835ad80cdc3bad8614e0ce7b8c74b3"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "8febaae0c5e92482d3f3ebd1221e183a"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "9e2f89f34c597da60de0b27a85e1d463"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "3ba164bbba21a96033b40163267c5c44"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "b89895f4bfcd245f7c0d8e104c80e027"
  },
  {
    "url": "oop/index.html",
    "revision": "e815dd47f9f54266c789f6e52b244bd5"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "4274efb30fedd30e2340093d3a8b25d9"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "f0491b5f9d818c2c1e2e825533752337"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "d127499126fb45a6432829c45c523c5c"
  },
  {
    "url": "rails/index.html",
    "revision": "48f5a96a654f84f8f9e1e869ec420922"
  },
  {
    "url": "rails/install/index.html",
    "revision": "a4963dccc6f8f382b804fd5e2ebeb06a"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "18c2c8f30b375e0f3a7956080e8d1bbc"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "397ee63de7e57b67591a23baaeddcca0"
  },
  {
    "url": "tag/index.html",
    "revision": "e7535489bf4f7782d1db22f10d82c8aa"
  },
  {
    "url": "tools/index.html",
    "revision": "923a43a763e4eb0b16556e84a4ffef49"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "344c950ec26950e98b48c4b978772677"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "dd327efa48f981357a8198b32c8b5ad8"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "71367c662d485797fb9a43fee46b9122"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "be5a818e9a06356789981ee1ff2310a2"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "d273069d48ec5b435a0edb6aa54f286c"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "a07e83e481a6f8e28d4ed44e5c2d5f7c"
  },
  {
    "url": "vuejs/index.html",
    "revision": "431d970215caa40a0e839f9435ec106d"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "b6203cd1676ab86684b1c85e403225ec"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "bb81c1b14857b360f1c96904b8eabc4b"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "f69faa3eae567b547f21bd0171af3820"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "5996d00ae1754ed19156e9ee32c2358e"
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
