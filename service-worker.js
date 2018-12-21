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
    "revision": "8253250788c5cc9f26abb818c346f450"
  },
  {
    "url": "about/index.html",
    "revision": "88a2c8f092687abeeb7093ea6ea26590"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "a0f26437b0429d1cffab4d5a9e76e2d7"
  },
  {
    "url": "algorithms/index.html",
    "revision": "28feff3695bcbf971f6c2a72a42f1aba"
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
    "url": "assets/js/34.ed03c437.js",
    "revision": "71cbfd2e965ac57b966fbf13129cb075"
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
    "url": "assets/js/37.1bf2305f.js",
    "revision": "e50aa1225f41f19c07847000dbed26f8"
  },
  {
    "url": "assets/js/38.ae700099.js",
    "revision": "371ffd178b29dd644a655f12a32509ed"
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
    "url": "assets/js/48.341c93e7.js",
    "revision": "1cfec818edd8bba835c800ab8f7c1962"
  },
  {
    "url": "assets/js/49.f4ee145a.js",
    "revision": "2a1d3ac91d9be6e2ff8e7284ca014e9f"
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
    "url": "assets/js/app.1309546d.js",
    "revision": "a129ff190064f01744479b2c9114924f"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "7416e75739c78a63dd6a7c1806065609"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "749955c7be4ebdd162b0be221c941c7f"
  },
  {
    "url": "aws/index.html",
    "revision": "19ac9b61c96d22bc163eda53d072645a"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "25a2fd3e0c3892cfc134f08cacd17eae"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "7916cff35a9b5a4e7acb604303a508dc"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "9af1e47d1b583825f7f4e04911edc0e1"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "47fc837d77869f94c108a45c7ae97cdb"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "1ff243027950e3d30bd45785d59b6c54"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "a872f6b5795d9133ec99730903569fa8"
  },
  {
    "url": "blockchain/index.html",
    "revision": "f3fd15fd8df73a654ab7999e1a050bde"
  },
  {
    "url": "category/index.html",
    "revision": "274cffdf89ac9d9834df11651f7568f8"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "2c60c41f7bc23bc3408af7d9792120fa"
  },
  {
    "url": "database/index.html",
    "revision": "8e440655fb212445311a945aa41bfcb1"
  },
  {
    "url": "datastructure/index.html",
    "revision": "5d7dd25260bf23449e6e11aa2a89e65d"
  },
  {
    "url": "documenting/index.html",
    "revision": "c18161695c9bcdfe1ddb284b3cb22886"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "acc833e8b0b04436b17f58c8c63118a1"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "33030e5a3089dddc96e62d84ffab6cbd"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "34c4e8d244148b68fe53b4bd51dd4c33"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "7c00328de31bd73b13ffce25a840340f"
  },
  {
    "url": "etc/index.html",
    "revision": "c60aaa9db34ad9c5b0cc668bb707e3d6"
  },
  {
    "url": "git/index.html",
    "revision": "2c6403f65a8571a7112989392bd9288e"
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
    "revision": "98a273c0a7a40b240d8b88dfd89e4dc3"
  },
  {
    "url": "java/class/index.html",
    "revision": "5defd223e922d9ea4752e598990c7baf"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "cc40d425b8a49ae91ef0ea8ad15d9fee"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "792494d2d209796c96af33aaba476329"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "ffd88271898b8844f9ff52431f3d12ee"
  },
  {
    "url": "java/ds/index.html",
    "revision": "cad03bc028cf53adf6bc0b1be54d20bc"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "1895c6520c464a2d9deaa9a0672d8a24"
  },
  {
    "url": "java/index.html",
    "revision": "727a7066ec781cb25e6ba20b78dbd81c"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "61070c8eed70fb08b2c83ac52f949b3d"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "f3d2dd9bbea292b3098b88bd5cf225d4"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "5c207d1bcb3594992b8b612f487a5a80"
  },
  {
    "url": "java/spring/index.html",
    "revision": "638926fc50d69b1ba969803f14e74d71"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "619fa647f4455bdbc2b9edee7038ec50"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "ab04ea737286f9ef86aee8ec196bfc83"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "2db7e05c0a62a21196846f247419f266"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "4e32ad45bc0e55def5248679ccc967c0"
  },
  {
    "url": "js/index.html",
    "revision": "fe006d16ed38c584bec2b694155a857f"
  },
  {
    "url": "nlp/index.html",
    "revision": "e4e4215647b56609213bfc2f0121c810"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "7b545183de2e0379d3d5627c4d24ebf0"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "adc2470ca7a5d318d070651af17992ca"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "2a561672fcf6da81b2b6dc8516d8d31a"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "fcd82f5b39da9b833ec254cf7ef36aeb"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "9376863732a6aa9aca908ab3e4919b4d"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "2e0a4ea2cc41805c3902ed53b864a278"
  },
  {
    "url": "oop/index.html",
    "revision": "1fbb63f3dbff94e008ff2586641dd3a3"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "aebab0e5b7b5517e759c004be3ff1e24"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "3087af70a053d8d5460254603a06c4d2"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "06191cf3eef65af39ae669b3b7a3660b"
  },
  {
    "url": "rails/index.html",
    "revision": "242430080d52c354e6ca800f903a01ba"
  },
  {
    "url": "rails/install/index.html",
    "revision": "8460816638ca260246d268d70364f7c1"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "95945fc301b9e3532f176344df784cff"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "f477b9a02d38b88efff5b83b669b78f7"
  },
  {
    "url": "tag/index.html",
    "revision": "fd2f57ad5a247c95646921b94600a1f7"
  },
  {
    "url": "tools/index.html",
    "revision": "c365f1c6497b833fa064f21cc147c4fc"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "b6ec7237ef0d19aafc82f9fbf20580e7"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "4772d4c7b70b4fc9bed6d715a3aebe06"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "35171ffc3cfbddfb2209541a0f6badc0"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "b1565c8fd77c8eaf9721a244e24a770b"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "c38b5e428b521283bfc9505be49af839"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "0ffd3c19c0cc937f3e509b87db1d0deb"
  },
  {
    "url": "vuejs/index.html",
    "revision": "3cdfb39b6a02dfc601ef2c228b6fd7a2"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "fac70efbc89ffd140dd231bc6dc29ce4"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "6d81b75735db5c25fc807e1dfc5d37fa"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "db9c20f299a08e6a0b01a1f141963efa"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "6fd467c45105711e910b4065ef7f7472"
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
