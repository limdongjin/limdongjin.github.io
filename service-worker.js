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
    "revision": "989a01d0b5b258a426aae7660975ad3e"
  },
  {
    "url": "about/index.html",
    "revision": "4a388357ceec3b7a0de53fe6135a59d9"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "e7885ab4a627ad65d32bbf654c4b4793"
  },
  {
    "url": "algorithms/index.html",
    "revision": "54b546bfa55756001363b10541bfd0cf"
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
    "url": "assets/js/11.3744a28f.js",
    "revision": "92c010d9026c50686956026cfd176074"
  },
  {
    "url": "assets/js/12.024d83e9.js",
    "revision": "d9da1bed2f7d969771cb7d3c91bfc4a0"
  },
  {
    "url": "assets/js/13.9dca5325.js",
    "revision": "5df8087baf32956bbbfda2b4fa313632"
  },
  {
    "url": "assets/js/14.3561810a.js",
    "revision": "02d9fe239ee9ffdced82849339d7da15"
  },
  {
    "url": "assets/js/15.8357fbd0.js",
    "revision": "1b36d8d95a0e96c695e6a67110ddd9a3"
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
    "url": "assets/js/23.0f3cc0c7.js",
    "revision": "98a79959c5e6088899d8f4316181d0f0"
  },
  {
    "url": "assets/js/24.86eee323.js",
    "revision": "a02d25d38c7ddc10086d4791800a9fd7"
  },
  {
    "url": "assets/js/25.3d8b8e9d.js",
    "revision": "18770fd50f928c9c40c0f87cedb2ca22"
  },
  {
    "url": "assets/js/26.40f2b042.js",
    "revision": "08d68a169344a96cf5cf3dbf8478b3fa"
  },
  {
    "url": "assets/js/27.e6f4a834.js",
    "revision": "072c0e03a0db66badbce901ad50ff4aa"
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
    "url": "assets/js/30.6722b279.js",
    "revision": "ec87317e130a06e9888f096f69bde8a1"
  },
  {
    "url": "assets/js/31.3b1c47bd.js",
    "revision": "62cd59c72c33b14cfe96b11aea41a4ed"
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
    "url": "assets/js/36.8330a4a6.js",
    "revision": "b4571a3f096030ca9dab814ee4b96f69"
  },
  {
    "url": "assets/js/37.f8a4a2b0.js",
    "revision": "6cb6a910cea7c5689c7fdd4fcf28704d"
  },
  {
    "url": "assets/js/38.48440e28.js",
    "revision": "e494254054e940d185bcd666b107ab3c"
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
    "url": "assets/js/42.01e97e8c.js",
    "revision": "cd5f11f83bae2fff81db5981855ca673"
  },
  {
    "url": "assets/js/43.8ad8c6c9.js",
    "revision": "9b49547a3c6531d671139fa125e02aed"
  },
  {
    "url": "assets/js/44.690c0bd6.js",
    "revision": "e154a48724653768af2d74165f49e984"
  },
  {
    "url": "assets/js/45.9b9ea37f.js",
    "revision": "fcfcbc489d8a8a02190ae2fa6fe71931"
  },
  {
    "url": "assets/js/46.a7a2aa53.js",
    "revision": "6587601f01685956159bbf5d6170e150"
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
    "url": "assets/js/49.e021c700.js",
    "revision": "b71da758d8c11bf8a648aab346f3b6b6"
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
    "url": "assets/js/55.91043e5e.js",
    "revision": "1a94be71858ff06a69900a00d70377eb"
  },
  {
    "url": "assets/js/56.9172e25b.js",
    "revision": "02f8ade852864531a53cdc65b36a66d6"
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
    "url": "assets/js/59.cd3464ab.js",
    "revision": "cbab21ce7ca9e2e9098c142583b027b4"
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
    "url": "assets/js/61.c6bea7de.js",
    "revision": "987587df20af52d2dc7a6a848802307b"
  },
  {
    "url": "assets/js/62.eb7ea906.js",
    "revision": "83c9ea7520879d4548a2eeab1105b526"
  },
  {
    "url": "assets/js/63.3ae6151e.js",
    "revision": "234586284dc6a4a9470d29703b6ff714"
  },
  {
    "url": "assets/js/64.cda22d19.js",
    "revision": "af1710f4c0ee67a80aa5e6ad8dbe6a01"
  },
  {
    "url": "assets/js/65.e7297027.js",
    "revision": "b82fdca6215f4c1d8a4b0eb53ddef736"
  },
  {
    "url": "assets/js/66.339392be.js",
    "revision": "0e6ecd21a70a7ba6c4742563ff294669"
  },
  {
    "url": "assets/js/67.a3ddf727.js",
    "revision": "eb8b049997b7541bd77225919d127f62"
  },
  {
    "url": "assets/js/68.73e75954.js",
    "revision": "d9f242ce0a26bb69bc3d8c244e6577de"
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
    "url": "assets/js/71.c3e0e02e.js",
    "revision": "5aa3ac72023db27fa2b9296d86670685"
  },
  {
    "url": "assets/js/72.34768287.js",
    "revision": "ebfcb1b09a9ec9ed8d790a743708a8a0"
  },
  {
    "url": "assets/js/73.25cb7a0e.js",
    "revision": "babeaa8cb9fed7dffa926bb5ceff63f4"
  },
  {
    "url": "assets/js/74.8ea39996.js",
    "revision": "016f0a86cdeb8a4da96f598ae08aa240"
  },
  {
    "url": "assets/js/8.dcdd8d2a.js",
    "revision": "368b907129dbf5131984f6adbcb9024f"
  },
  {
    "url": "assets/js/9.677bb031.js",
    "revision": "4d305cc0db6aa0e7bda0f334dadff07e"
  },
  {
    "url": "assets/js/app.0ad646c3.js",
    "revision": "b9ecc9d53636b0289346698bed90b237"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "dcfb23343062fd5f4b626054ea175a33"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "ad32a92fac5fbe3e90e13356faef7336"
  },
  {
    "url": "aws/index.html",
    "revision": "73749078f4a630dd35490a3ca727c7e8"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "baf7cb7b00153764032cff2b8e2c8cdf"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "957c4f68cb1e2ab17e31205c149bca79"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "e6219c3f9db842db8372e39b03863d39"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "dafa135006cce1d60e04a0e7df700ea3"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "77b851c88e2ae027ea91ee770260f44d"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "ae08b6f6ca70f806f5b6b817b497788a"
  },
  {
    "url": "blockchain/index.html",
    "revision": "16ba0c05ae735291904531368e727482"
  },
  {
    "url": "category/index.html",
    "revision": "2bb990e0b57e58e27aa730fb64838a4d"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "cffe1373108ff5ba4642c3331a9ab069"
  },
  {
    "url": "database/index.html",
    "revision": "66c14f034b3f968941719cc8cd5fecd6"
  },
  {
    "url": "datastructure/index.html",
    "revision": "722c836dc6652a315f103ea29125ccb5"
  },
  {
    "url": "documenting/index.html",
    "revision": "e1a3fe1f15e7ef2b94fa02d7b21dfaff"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "676dd95ac46be085036ded433c4e06c9"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "3c1aa925faf912e203034579ceccd9c5"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "64608ba9363737e72fbd538f0da71717"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "fa631f71dca5072410056125e631975e"
  },
  {
    "url": "etc/index.html",
    "revision": "41dc39b09b7452f5a6983de7d1e32727"
  },
  {
    "url": "git/index.html",
    "revision": "ca9a3af3a6a9645070b55982b4878090"
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
    "revision": "bc1a4fbad876c4c3dc8732dc496d0aed"
  },
  {
    "url": "java/class/index.html",
    "revision": "07c78fcc174bdcc13caf26bc3c3256e8"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "8f50fd290751a3cecac3b7167257be38"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "331ab780075e252466d1c9505b9ddc1d"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "e58bb1c200005c5c43951ea3a9526719"
  },
  {
    "url": "java/ds/index.html",
    "revision": "c214f7703f4602090c3cf0d3ef5a4c64"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "ed4921d40b7292ab4e10ebb28652f39d"
  },
  {
    "url": "java/index.html",
    "revision": "92d22dd23a51a7780ae5670102bc9cfd"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "3aab9df810efd07d4baf7ec870a9a3ae"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "628703d558e4f8cddf929ba3ba99ae57"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "08abe2b6a046b06964a459a2e603ff97"
  },
  {
    "url": "java/spring/index.html",
    "revision": "b7d14f9aa7edeafe51c218098d2bf72a"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "121e8d13c15b61221972b7c08b384e1b"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "3b0ede33206806d24fee7f0386bffb48"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "2df4d8db3b1e53d4331ec8071ed53ea5"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "3e948fe1ce69e30a695a2709f38ddc36"
  },
  {
    "url": "js/index.html",
    "revision": "91611e82b156f2fd15b12c6ff58a8a78"
  },
  {
    "url": "nlp/index.html",
    "revision": "3c28243abac5e2a935e58d0d55664c49"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "2b4db0acb73bd72ad206748bc9c64abb"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "18c6fa224bf475589c2ff322a02bb1fd"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "9ae7cb955c4f0bb991b67c74c67f51ec"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "e617dc0a99a8dd3a98218465eec420f5"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "b664fcbffc0be2abe60a3d3abffed896"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "f8573b7d6063ac08fa2cdb2537ebecbe"
  },
  {
    "url": "oop/index.html",
    "revision": "08fa114b13ef34e1c242c6c401439c94"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "62070552e1f33ace5da771c2b9c0d526"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "d6dee39fea2adb877f64634c65e17737"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "966cab09d88b859f5e95369fa56a1f5a"
  },
  {
    "url": "rails/index.html",
    "revision": "782e921eb13dc9d20f3a4f98e53ec3b0"
  },
  {
    "url": "rails/install/index.html",
    "revision": "78e87c3916921441a24cd060b855c5aa"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "f7c68d7a806835903f35b4a6d51b45d5"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "155a70bd50f173fbfa5e93273164f496"
  },
  {
    "url": "tag/index.html",
    "revision": "bb43af32fdbff75a3ca58a0d2c20bfe2"
  },
  {
    "url": "tools/index.html",
    "revision": "bd06e27d2796653995431f85ccac5d33"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "e007ffe9168a45eb5865c954a7005d8e"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "b666b09b161d3565af4ac15ccda55339"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "c2f678997dfcaaa2dbb54729fff4d1a1"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "33ea34cbbfbf5d8c0804fcfabe02e346"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "a14a74ddfef5f007eefdd82c3774d1e3"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "332dc2d82ebc6f26d29dca1f3ccb9703"
  },
  {
    "url": "vuejs/index.html",
    "revision": "6757c89b55bc3567e15b1ec3d0364bcf"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "ca5c27a6d282430858bc806cfeeee2f4"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "e8b1fde2112c9c4a17a23f23989e4514"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "153a1d0ef79db8ed542c876a4ee134e1"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "c5571086899fccb9b9f51b0883f237ee"
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
