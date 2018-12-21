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
    "revision": "b2b567db69955f45821a7622b5646298"
  },
  {
    "url": "about/index.html",
    "revision": "2b454d68de40721df0fc5282c6cfa12c"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "1880b6267d84b3e2497c4eeb074bd809"
  },
  {
    "url": "algorithms/index.html",
    "revision": "563561965509ef20d486bbaa6301b969"
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
    "url": "assets/js/10.7d7b2781.js",
    "revision": "c9df5f2c56820c6d516ea53d743d18b0"
  },
  {
    "url": "assets/js/11.3744a28f.js",
    "revision": "92c010d9026c50686956026cfd176074"
  },
  {
    "url": "assets/js/12.58637efa.js",
    "revision": "e64aff92c969c94f075c037da4279047"
  },
  {
    "url": "assets/js/13.c00c30b3.js",
    "revision": "a134547b7fccd88f03adcbe1b39a7c38"
  },
  {
    "url": "assets/js/14.05ee13a2.js",
    "revision": "b8ab32d8b31ceb24d05f1a2030f9cb34"
  },
  {
    "url": "assets/js/15.7281e9b7.js",
    "revision": "488b8a0bb8c194ecbf72b7eec9f957dd"
  },
  {
    "url": "assets/js/16.42c9cee5.js",
    "revision": "42505a18042dbacdd079d36680df348e"
  },
  {
    "url": "assets/js/17.a35ca980.js",
    "revision": "647ec7e2811fec4c101eb67366d188cd"
  },
  {
    "url": "assets/js/18.13b3cd64.js",
    "revision": "97e868ad3f8c0e74857804106009f578"
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
    "url": "assets/js/21.c2c72593.js",
    "revision": "e25323d87008305848bf6ecb67099e4e"
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
    "url": "assets/js/24.15710f31.js",
    "revision": "526d7209ba1ed0721f94d8db9cbc93b2"
  },
  {
    "url": "assets/js/25.aa08825a.js",
    "revision": "750f4cdc549095842fe252d1bc2c99ea"
  },
  {
    "url": "assets/js/26.ccde69bd.js",
    "revision": "9bfb60c4c78d90aefee7bd0c4e85564a"
  },
  {
    "url": "assets/js/27.55d25901.js",
    "revision": "c3e98af2aa256db018eb49316a172094"
  },
  {
    "url": "assets/js/28.7f01dabe.js",
    "revision": "e45977a266f41eada39156dc70c0f071"
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
    "url": "assets/js/30.57c8414b.js",
    "revision": "4753df4a1e280c59e3cd282c4eccf3fd"
  },
  {
    "url": "assets/js/31.dff9e157.js",
    "revision": "5ad3020a3dbb2f7ec36a3145dfe9b0da"
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
    "url": "assets/js/34.b9007882.js",
    "revision": "42104dd3fb1f61101e62a573e232047a"
  },
  {
    "url": "assets/js/35.6ed18d6b.js",
    "revision": "51f7794a68510404f567cb9946c08dae"
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
    "url": "assets/js/38.a8f33d69.js",
    "revision": "27d610feafed545c40de5c403f262ce3"
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
    "url": "assets/js/40.3f5e3190.js",
    "revision": "e4b5ddea8dd31dba4798dc575d3fa3b5"
  },
  {
    "url": "assets/js/41.2ba0d401.js",
    "revision": "2dab209e69ef7cca599c393fdb1ac881"
  },
  {
    "url": "assets/js/42.b04caa29.js",
    "revision": "c40170f36b3cc741314a8e831467948b"
  },
  {
    "url": "assets/js/43.8ad8c6c9.js",
    "revision": "9b49547a3c6531d671139fa125e02aed"
  },
  {
    "url": "assets/js/44.492c1842.js",
    "revision": "2d367b44af6c31f5edcb46875fbc8c3e"
  },
  {
    "url": "assets/js/45.b7d85f10.js",
    "revision": "bea6d0daf354ef66883655508a2a1883"
  },
  {
    "url": "assets/js/46.35154291.js",
    "revision": "b4f86ecf7b0ef30d6f1a5cf21bbd1b29"
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
    "url": "assets/js/52.fbe6610d.js",
    "revision": "38c6b96326f415d9bbb2f34c95e8c35d"
  },
  {
    "url": "assets/js/53.cad694ad.js",
    "revision": "b14773234a808f8af61586d5407b7560"
  },
  {
    "url": "assets/js/54.102fc0e8.js",
    "revision": "7c0093f5c024a494bac09f89e1372000"
  },
  {
    "url": "assets/js/55.d9303931.js",
    "revision": "1fe03303674831a92c5197dcad878401"
  },
  {
    "url": "assets/js/56.5b2cb799.js",
    "revision": "c20aa75aac0ad876b48c91c3c4d3a52a"
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
    "url": "assets/js/60.61f57088.js",
    "revision": "182a9fe93614ae08f0c4dbf08f47ffa4"
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
    "url": "assets/js/64.37da677e.js",
    "revision": "3b4d05a341803d475787015ce18410d3"
  },
  {
    "url": "assets/js/65.68b32cb4.js",
    "revision": "1b449812692fc580e921e47ebc60a159"
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
    "url": "assets/js/70.75ca4dcf.js",
    "revision": "2d283ef95361cfc5e1205e390fe88f21"
  },
  {
    "url": "assets/js/71.c3e0e02e.js",
    "revision": "5aa3ac72023db27fa2b9296d86670685"
  },
  {
    "url": "assets/js/72.fe3a96a4.js",
    "revision": "5b7681d8154de4bd8d713fe02e01af3b"
  },
  {
    "url": "assets/js/73.25cb7a0e.js",
    "revision": "babeaa8cb9fed7dffa926bb5ceff63f4"
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
    "url": "assets/js/9.5afc3795.js",
    "revision": "f1f3d75696db680e28c13acf0220a6aa"
  },
  {
    "url": "assets/js/app.0b988027.js",
    "revision": "112aee978361a1df04594cf0b718a6fb"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "d1b1484fd4b0741760da9d158e2b05e9"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "1d4db5dfb0e25c0fde8569222831333f"
  },
  {
    "url": "aws/index.html",
    "revision": "da11056773c08835543356bda9841777"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "11095803267887e4af5f846e500a3f8c"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "35e20d30ebdfbc5ab715197a5a767d00"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "7e2a42597c05fc14305ae583cf2a4393"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "d0f0f2a772a6a103decfe98a80128fe2"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "9afd403f47b9a1be7f071448aea1d0f4"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "fef4923fec428f9a36de8d233a1bc26f"
  },
  {
    "url": "blockchain/index.html",
    "revision": "6ab23164807cf3a7c44a9973f8ad3859"
  },
  {
    "url": "category/index.html",
    "revision": "f57657969d96109d99185fcf4bc13495"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "5bb5c4e4519b5f92e54912b30c327611"
  },
  {
    "url": "database/index.html",
    "revision": "be04ebc271e21080df403d89cc19cb07"
  },
  {
    "url": "datastructure/index.html",
    "revision": "c2fe9b1e0df6caff9b764915fa318d0d"
  },
  {
    "url": "documenting/index.html",
    "revision": "b0c73af9979ad54906bc91f3e059b9ee"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "69b61cd4839ac7179f41c875c1754dee"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "47e3366361dc3e0910af8735076ee0a7"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "6e462431d7cdf43ed8b4d9496a4a0c63"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "dcac60f823a922a2762bfd03955c8c46"
  },
  {
    "url": "etc/index.html",
    "revision": "6f252175f26b47236320994b87391255"
  },
  {
    "url": "git/index.html",
    "revision": "2d7ee336ca1374457a03c7bd33667ec8"
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
    "revision": "6e565c10280be4d61e42724e2d96a640"
  },
  {
    "url": "java/class/index.html",
    "revision": "0c1569e1e79ae4002853a0076b0bc42a"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "525768af36c4a0f1b9178e50da6ae85c"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "3c91f8d692855990478ad57f0add545f"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "216db284d5f75054395cd12ee3ea419d"
  },
  {
    "url": "java/ds/index.html",
    "revision": "ebb01f540e1d5133771ba83115eef456"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "508b26de2eff94990fe2c2678aac57ea"
  },
  {
    "url": "java/index.html",
    "revision": "1aefa70872ac283142cb3b2bc8ce4911"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "2d73734ab276570d27aa98ba0b207768"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "c43a08475dafd4c4158178af4b16ee53"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "86f2a92d367dff9f0fa3078c213c02a7"
  },
  {
    "url": "java/spring/index.html",
    "revision": "205493e94d9d1927a45d51b1de6b2623"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "bb36b326fc99da3931fa083116c32cd6"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "3733afc9a0d86c208143de7c17cbb4ba"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "8e187ce37f0ac2a09bd4c04036fc8233"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "6c09bbaf376f799ddaaef4258b7ee002"
  },
  {
    "url": "js/index.html",
    "revision": "3b8f96894c2b40a5f10fdc474558421a"
  },
  {
    "url": "nlp/index.html",
    "revision": "cd082b435e6b89b1df09cb1b1373d933"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "c50fb45cd54ed1792912b06cb39c0fae"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "78a7d5fcd334d0fa6a4bf2ed8cbe1779"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "d767948d76953c36d8876734ee08e45a"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "a8d4b037ff62ce0bed0103529c2f1ef6"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "5e0a01c15cee6671734810cc4c0c3b4b"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "cf5a2e0a17176e8ea5e81d4930060248"
  },
  {
    "url": "oop/index.html",
    "revision": "b118c3d6ce6066c92b633e186bac6df1"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "9c86e5337b32794881f10f9cc794bcd7"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "fb53de7a38b71978078fa0ab28c72657"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "fcf3a34dd6644f7dd231b52d9bd8fd72"
  },
  {
    "url": "rails/index.html",
    "revision": "427339e7740150f87755ca0c13611669"
  },
  {
    "url": "rails/install/index.html",
    "revision": "410bd269c7f56d62237e1d6f05fbfce9"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "51f40630eb9ff8bbe9d619c6c2bc4fdb"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "5a37bb458a616ed36fad875c4f8cc95e"
  },
  {
    "url": "tag/index.html",
    "revision": "5a99dce39a5ab396d7ea84b10ae4dc76"
  },
  {
    "url": "tools/index.html",
    "revision": "bfb6627afe0074eed17e2a174f73f488"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "cf5493c21f5067419522677c72b3ea98"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "9d29097252e78e039f5c3746bdd538aa"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "3691ddab1167fd16ef38b04e3b5ec6e7"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "d4eb861bfd098ada12be5e1a40c58b5e"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "490037260dda9e0922b66cc3e017b9e4"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "888818bbc56a21e0743fad442a963dcb"
  },
  {
    "url": "vuejs/index.html",
    "revision": "0e811734d0d4a41f464aa78ec96bd0c3"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "7c6d4ce56c46336582d155b84c85b89c"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "a9ec86d1163cf421208630b23d5274e6"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "43b59477a5a38dfc5cceef1ef29262fc"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "88d842b16522b9e7df9e727a70bfeb74"
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
