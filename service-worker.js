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
    "revision": "bc3040ce1af144915be4175c2eef0076"
  },
  {
    "url": "about/index.html",
    "revision": "94e7280417f45e6854ef5436b8ae5538"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "1e7a3b19e04dc61aef52760307b3e502"
  },
  {
    "url": "algorithms/index.html",
    "revision": "ed8997ecc59fef5dcd99d060fe76f6a3"
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
    "url": "assets/js/11.831aa073.js",
    "revision": "4a6c9d79fdc958e3e1db768fed9ef096"
  },
  {
    "url": "assets/js/12.3a1bbeea.js",
    "revision": "efd673f0e583069996e135fcd08759fe"
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
    "url": "assets/js/16.d68cf6f8.js",
    "revision": "09e23b1dfb9a45428b754a1a0b8ae460"
  },
  {
    "url": "assets/js/17.d26f23bc.js",
    "revision": "5c7ae999a472a80574df7be0912efc9b"
  },
  {
    "url": "assets/js/18.d736fb4b.js",
    "revision": "9d257e78fecc413c1891201fd5b9e40e"
  },
  {
    "url": "assets/js/19.011bb8f7.js",
    "revision": "c95d6bbf7c4821db296699b1e481d3cc"
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
    "url": "assets/js/23.0f3cc0c7.js",
    "revision": "98a79959c5e6088899d8f4316181d0f0"
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
    "url": "assets/js/28.f7cb0e4f.js",
    "revision": "82dae42009acdfa1c9d9d46c3175ef74"
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
    "url": "assets/js/39.dcfdf2f5.js",
    "revision": "0a68e681420d2bf45bb16881a4d1c2fd"
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
    "url": "assets/js/41.0bc6c292.js",
    "revision": "ef6eb503ec4b816924856fdd155d2538"
  },
  {
    "url": "assets/js/42.f740a346.js",
    "revision": "80afc9171a956e427c9717e53e4e5e09"
  },
  {
    "url": "assets/js/43.2342a8d1.js",
    "revision": "49aa8710105e1c9aa424dc6e89bc46ea"
  },
  {
    "url": "assets/js/44.492c1842.js",
    "revision": "2d367b44af6c31f5edcb46875fbc8c3e"
  },
  {
    "url": "assets/js/45.888a25b8.js",
    "revision": "c5cb0f26419b9dfe3575fcb9f9591619"
  },
  {
    "url": "assets/js/46.a7a2aa53.js",
    "revision": "6587601f01685956159bbf5d6170e150"
  },
  {
    "url": "assets/js/47.fe295d26.js",
    "revision": "6ddebf63894330655e5b7a53605c099a"
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
    "url": "assets/js/50.74434250.js",
    "revision": "9a27ea9367bba9962a02ca36a7bb21b2"
  },
  {
    "url": "assets/js/51.1fb04d01.js",
    "revision": "3d42500113c2f2fcd75f4a20aadfa622"
  },
  {
    "url": "assets/js/52.ada0c0a8.js",
    "revision": "617997ab5fe3c63024d7f80b6a2f5e80"
  },
  {
    "url": "assets/js/53.903ed65e.js",
    "revision": "36f9ded53a5e1b3388b92c3a142914d8"
  },
  {
    "url": "assets/js/54.102fc0e8.js",
    "revision": "7c0093f5c024a494bac09f89e1372000"
  },
  {
    "url": "assets/js/55.3e6c775d.js",
    "revision": "3f171644be86e5a76262807d72f8a783"
  },
  {
    "url": "assets/js/56.8afb08a3.js",
    "revision": "c2c41f94428962004fca6f1e55494c14"
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
    "url": "assets/js/59.cd3464ab.js",
    "revision": "cbab21ce7ca9e2e9098c142583b027b4"
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
    "url": "assets/js/64.439edf78.js",
    "revision": "6ecaeedfffc9fb4223f139fb75348839"
  },
  {
    "url": "assets/js/65.d9ed696b.js",
    "revision": "cadb09eccef7a50bd9870e5fe60e7419"
  },
  {
    "url": "assets/js/66.648bf344.js",
    "revision": "9921895a347721b6f8ae5acd6af399f7"
  },
  {
    "url": "assets/js/67.a3ddf727.js",
    "revision": "eb8b049997b7541bd77225919d127f62"
  },
  {
    "url": "assets/js/68.813e4f00.js",
    "revision": "983600235f588559bd5daac71b87026c"
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
    "url": "assets/js/70.288ed000.js",
    "revision": "56c69ae0d04fa7e4a68757245b19421c"
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
    "url": "assets/js/73.cffa5dc5.js",
    "revision": "8d751d0f03b78152b32c1b964acbd813"
  },
  {
    "url": "assets/js/74.d0dbcce2.js",
    "revision": "2346d0c4d687d18b391de62686038a2d"
  },
  {
    "url": "assets/js/8.dcdd8d2a.js",
    "revision": "368b907129dbf5131984f6adbcb9024f"
  },
  {
    "url": "assets/js/9.a3e022d7.js",
    "revision": "d17c9b6804f6458f293570605fdeb4be"
  },
  {
    "url": "assets/js/app.0ba00399.js",
    "revision": "0a2b690971457798f50efc5123831ad2"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "65e725701b5635a3aef10bc808a1e987"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "0505022dd0ac22657f4e5455b5696bbf"
  },
  {
    "url": "aws/index.html",
    "revision": "2f4b11a2ecc9134088eb75d961bec9c2"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "770d4b6032badb2041e5aef552005a74"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "f24f5b6cfdc3fb05613b4c6c0b458a05"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "6435d4c1102e399638421ed5415c6dcd"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "aee36550be53918ef3a3252c9da841ff"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "11c6c96fb3b116b5d3b3b8cd8accc3b7"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "8a309d6f1f4e8561683a8846ab02dc53"
  },
  {
    "url": "blockchain/index.html",
    "revision": "804de3135071cd5f661ec0bafea8a8ab"
  },
  {
    "url": "category/index.html",
    "revision": "37750094f08466c66d27a74fbeb11a76"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "4a16f6e0351ba5461aea5ee78e752129"
  },
  {
    "url": "database/index.html",
    "revision": "a7c2e22a7f620eb646843f1b8d68b0c6"
  },
  {
    "url": "datastructure/index.html",
    "revision": "52a8b4bbd67fa748938289dad2c54989"
  },
  {
    "url": "documenting/index.html",
    "revision": "3ad2afdba59d9d3ac6717585b08b6540"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "d22d12858cbd7c9d9f66ceb2a40d3ac2"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "2a255d95511313a54a34ad55b1f1f671"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "a72ba191747d94b5552d6e9a8fe3fe20"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "18b5e3bd531a36030f601dd2649968d8"
  },
  {
    "url": "etc/index.html",
    "revision": "eb7ef25887592fbd60a6d40f240ccba4"
  },
  {
    "url": "git/index.html",
    "revision": "1fdbbf080ad012aeb2243d9cb3a87385"
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
    "revision": "dbab2a80d92f2eb9cebd894c44a9f126"
  },
  {
    "url": "java/class/index.html",
    "revision": "65bbeaeb804cc87dc64ae1b9faba3d66"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "4cf19f6121c4dbb0a60bf4d3685fed2c"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "6997e121a2db81809559fe379c80353a"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "6f1e5ea07713faaad4144b7d51f954ec"
  },
  {
    "url": "java/ds/index.html",
    "revision": "51eb05d9f3675cf17ee0c55cae64cf0c"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "5f42d8c186f764b1c81269f243550f18"
  },
  {
    "url": "java/index.html",
    "revision": "7d799656cee9dbddc3dec309b1d7acc6"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "553d9d44c679939dbb8372a8b35decbd"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "1220970327b84a8f5db61bff22afe275"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "0a7e8da3dda02e1e218f1ee366840a2f"
  },
  {
    "url": "java/spring/index.html",
    "revision": "ebe776c196a30f721e503a56e3369f8d"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "28ff558dd26b87810e5acc8e0de1d6a1"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "4ab3aec214b8abe5e79d5b873f380f51"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "043a695309dd4388949abbe8ebae5f17"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "794517572d1dcbae4fa81dea9e06a813"
  },
  {
    "url": "js/index.html",
    "revision": "09b253eb899ef7897ae9210c377d011d"
  },
  {
    "url": "nlp/index.html",
    "revision": "31667a7d7e653dabbe15262322a0011d"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "326e599da383d713c22c63c2b0c24ff6"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "27395b5f79db5f885f15ee9e9340d2c4"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "e4b377ccb05f08251d3a7820aadadb5c"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "8842c82115c1caeae14dc42b34ea8451"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "4ae3eb908a193abdced73c921f61e04e"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "85163e512750ac46601731cc68ac1bde"
  },
  {
    "url": "oop/index.html",
    "revision": "153b624d09b3e6fcfadb282236f9b124"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "54dc14dc8a10a5a2f092d91d376d1669"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "4fb42e4d4d009feee700e3bc482e83db"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "5cfc2a72ef0380bef5bbb6062270b76d"
  },
  {
    "url": "rails/index.html",
    "revision": "609ecab281e312ea96d3189356ff454a"
  },
  {
    "url": "rails/install/index.html",
    "revision": "4386f24990752a0904187985c8cdc215"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "2d1aa7aa8a6a6a05ce7d608a1dbf417a"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "12cf0bf1e5f2249816afec4e685ea252"
  },
  {
    "url": "tag/index.html",
    "revision": "506afd832aa221ee62c700ba0d68ffe9"
  },
  {
    "url": "tools/index.html",
    "revision": "55689fa5bec5323a2e51b7e285df8f7c"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "99b7dadf74156d7fbea08b2da46f7d7c"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "fce6a7f2d0036a1a9013734132242d93"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "efa22a22bd995c8473e3019df2d0f9eb"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "83d47c50cbfaf22e293357b33310ce7c"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "71aceb354d723025cf8a2a65e048eed4"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "dca7eade7b9987c40b79902227cd86f8"
  },
  {
    "url": "vuejs/index.html",
    "revision": "0d5dca5737a35698ffdc8a4efb469d9a"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "96fb1624d106b84996701730d350893c"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "a412d7d35fff50674eaa26a5affb033e"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "378aa96ce8b2b285137c9a23f27ccf52"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "4bd19d71f07b455f035975b7fc561772"
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
