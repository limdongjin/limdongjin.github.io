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
    "revision": "7011484b3e71eac0daf336baf7c04fa6"
  },
  {
    "url": "about/index.html",
    "revision": "f4c32fe1f73abbfa218835dc5ef72787"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "5491c1d381fdea470e569883f9a7ef16"
  },
  {
    "url": "algorithms/index.html",
    "revision": "9d53a1f13e4a8cb1f005c7e3b52e2f95"
  },
  {
    "url": "assets/css/0.styles.3af4981e.css",
    "revision": "0665363482fe1e22a08e89a3105dcbb6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.db4ab61b.js",
    "revision": "7a740e66aaf90030bd1c4c437de851ea"
  },
  {
    "url": "assets/js/11.5c019552.js",
    "revision": "a597ab042c818a9888390f5d3cd10ad5"
  },
  {
    "url": "assets/js/12.9dec0ba6.js",
    "revision": "1d35eed8d6fb472e68ac737b9700d472"
  },
  {
    "url": "assets/js/13.cdf9698a.js",
    "revision": "1ff01ca5ab360d4c2faed36d592a3105"
  },
  {
    "url": "assets/js/14.0b54a461.js",
    "revision": "642e6527d7cc598abaf4ed175ca40d36"
  },
  {
    "url": "assets/js/15.fd88d3d3.js",
    "revision": "bd813ffbf22ff2563cdf9eeb0584d2e8"
  },
  {
    "url": "assets/js/16.ae46344e.js",
    "revision": "68ed658d517b1a751043c119ad6bda1f"
  },
  {
    "url": "assets/js/17.7f90e91f.js",
    "revision": "7793cb3a4585ceabeedbcd1edc28ad8c"
  },
  {
    "url": "assets/js/18.b9e061e4.js",
    "revision": "9b440e0fc996ec1cb8fc296e65811129"
  },
  {
    "url": "assets/js/19.af8cc49b.js",
    "revision": "8d96248fd910f7f4e406664f45f320ed"
  },
  {
    "url": "assets/js/2.1bfa2888.js",
    "revision": "1cd53ec074048000084ce204abb37268"
  },
  {
    "url": "assets/js/20.f8746173.js",
    "revision": "b4ce48ea7558651411f8b1250e41db83"
  },
  {
    "url": "assets/js/21.b4fb3cb9.js",
    "revision": "7e2a8def3b70e28503f41cad0a33dacf"
  },
  {
    "url": "assets/js/22.191807d7.js",
    "revision": "f7848865e82cbb32feafd27249b95237"
  },
  {
    "url": "assets/js/23.08497773.js",
    "revision": "a02cabef08d2c23df4d4f10988d85f54"
  },
  {
    "url": "assets/js/24.efb362e8.js",
    "revision": "515ca4016557bf8f4d5b239e61d2c48c"
  },
  {
    "url": "assets/js/25.3e9e20be.js",
    "revision": "d17067d717519a98045d8218257d1ceb"
  },
  {
    "url": "assets/js/26.edb16abb.js",
    "revision": "43aa0f724f25627b45e6c40dd09070ca"
  },
  {
    "url": "assets/js/27.442e9a3b.js",
    "revision": "f340f2e7299eb57ee442f453aa83fb32"
  },
  {
    "url": "assets/js/28.6c33698f.js",
    "revision": "479bbc00f7a76d96a85074145526f742"
  },
  {
    "url": "assets/js/29.b100ec3b.js",
    "revision": "923f823529bc1986a8a331baa1b87a24"
  },
  {
    "url": "assets/js/3.ea59e71c.js",
    "revision": "1d79b88c7c49f7a700974967a8a52afa"
  },
  {
    "url": "assets/js/30.5f7f6055.js",
    "revision": "e13539ed8cf417e65d9aad09bb08e309"
  },
  {
    "url": "assets/js/31.97962d07.js",
    "revision": "2b3112aa261e460762549544f26b02ea"
  },
  {
    "url": "assets/js/32.5b594e24.js",
    "revision": "7d0af127c30636bb7d88595b5e4a1841"
  },
  {
    "url": "assets/js/33.9478c2d1.js",
    "revision": "bbf28b53090fe82b04bc675bd3f3296e"
  },
  {
    "url": "assets/js/34.037eca19.js",
    "revision": "274c0461b7382f20515d40654bfb80b1"
  },
  {
    "url": "assets/js/35.d361b690.js",
    "revision": "00771f484ba8c85bb888db6e3eb46590"
  },
  {
    "url": "assets/js/36.49a91565.js",
    "revision": "c925321db430d0ce02ce035a13e339de"
  },
  {
    "url": "assets/js/37.1573a641.js",
    "revision": "929157256ae92403d006ffd3d95d634f"
  },
  {
    "url": "assets/js/38.99fe7042.js",
    "revision": "8a30b509e4c67da8acaf3134024ebd36"
  },
  {
    "url": "assets/js/39.5e416cdd.js",
    "revision": "5fc404e0314bed7a0d9e630d39fcf86a"
  },
  {
    "url": "assets/js/4.e0e8a1d5.js",
    "revision": "a9f510757f1af9e45bc9eaa15a1a68c5"
  },
  {
    "url": "assets/js/40.ee9d7888.js",
    "revision": "59c6a5088e16dd09244788b06ec437f4"
  },
  {
    "url": "assets/js/41.8a21a031.js",
    "revision": "95928cdcd7ed34b09780be08457cde11"
  },
  {
    "url": "assets/js/42.08c9986a.js",
    "revision": "99e39c992d981837cfba58558d30940f"
  },
  {
    "url": "assets/js/43.d23a12d5.js",
    "revision": "f74432462e97bb5cbee0d286e73b4e9e"
  },
  {
    "url": "assets/js/44.b811cf55.js",
    "revision": "a2a832d246fc80687ea46e46449c27e2"
  },
  {
    "url": "assets/js/45.c6a05fed.js",
    "revision": "5ea4d2a6865a119149bf19dd7e8ae9a9"
  },
  {
    "url": "assets/js/46.a02a705d.js",
    "revision": "bda1b9f3dbaf9bce5600b0cfc2343b8f"
  },
  {
    "url": "assets/js/47.6a6bb712.js",
    "revision": "b51ddc637362fea6eca0e79e7e73b799"
  },
  {
    "url": "assets/js/48.acbb3b69.js",
    "revision": "c1e7ed7c1d8da830de62678e49c50157"
  },
  {
    "url": "assets/js/49.d942ec4b.js",
    "revision": "dda187abfa1e298d7d5755a6061b405f"
  },
  {
    "url": "assets/js/5.a275e01c.js",
    "revision": "ebeb2bd6018c8049f57111da64fa4f08"
  },
  {
    "url": "assets/js/50.95671403.js",
    "revision": "a7644b63ffea3c347b5ce196bdafc40c"
  },
  {
    "url": "assets/js/51.3ecdb21b.js",
    "revision": "f6b09768461d6cb526e8f7dece5c161c"
  },
  {
    "url": "assets/js/52.dc0b4721.js",
    "revision": "83613b50aca8195ec46b4c4b7a1a4736"
  },
  {
    "url": "assets/js/53.3039c46e.js",
    "revision": "249316e1a265b7c3184053e4fc9cfb9f"
  },
  {
    "url": "assets/js/54.95304533.js",
    "revision": "d158b4466a6782d9c2a35f0179916ab3"
  },
  {
    "url": "assets/js/55.8da3cc3d.js",
    "revision": "17034bb74fdb5b48cbe369e27945bde3"
  },
  {
    "url": "assets/js/56.1e95d5b0.js",
    "revision": "65733b5265af1994bbec3bdfb232a04e"
  },
  {
    "url": "assets/js/57.1e188cdf.js",
    "revision": "6c362caee17cdd3c07fe38c9fd898a8f"
  },
  {
    "url": "assets/js/58.215b98bd.js",
    "revision": "26d2eebf76c3fb3ee174835da728178c"
  },
  {
    "url": "assets/js/59.58e87aff.js",
    "revision": "cfc025fb4bdff617e60b420c3ce5a367"
  },
  {
    "url": "assets/js/6.bbeb2a63.js",
    "revision": "d9779b132b17c27199cb0438701ba25a"
  },
  {
    "url": "assets/js/60.6ffc9812.js",
    "revision": "3023a99db3817f0e3fbae71ced6d2a71"
  },
  {
    "url": "assets/js/61.c11e4586.js",
    "revision": "33ba84d37fcad2fd033a1b181cf8c224"
  },
  {
    "url": "assets/js/62.6bdb0848.js",
    "revision": "545dc7096baaf2b43d92e675b64e2d95"
  },
  {
    "url": "assets/js/63.b7eddc3b.js",
    "revision": "a4507eb0a1a50f974f9f432837f8ce08"
  },
  {
    "url": "assets/js/64.8d99413a.js",
    "revision": "f19e8d52834330039f2af7280ab8d55c"
  },
  {
    "url": "assets/js/65.757238aa.js",
    "revision": "bdbac7f3211ab2a62e035ac6f12c4994"
  },
  {
    "url": "assets/js/66.1871ae9d.js",
    "revision": "86f877b0d2693e1941149f9c79ded3eb"
  },
  {
    "url": "assets/js/67.fc1a8e5e.js",
    "revision": "829d911684e0a1bfe7ad0d9cd9135b22"
  },
  {
    "url": "assets/js/68.d8d98039.js",
    "revision": "3ec3718a1028f9348d02aa6fb98cbd46"
  },
  {
    "url": "assets/js/69.f362d8b2.js",
    "revision": "17094949dc20ab597cf4e02ea888ecf3"
  },
  {
    "url": "assets/js/7.7810fa6c.js",
    "revision": "a1f25dd45c48890d1c9afd3cf2e04ba9"
  },
  {
    "url": "assets/js/70.ae430597.js",
    "revision": "604a1414d64599f35ee639f161ff71b4"
  },
  {
    "url": "assets/js/71.b7dd05de.js",
    "revision": "9dc1fbfa3b40c15b65489ff37a255691"
  },
  {
    "url": "assets/js/72.7ad60674.js",
    "revision": "f252dae79c163e55dce6db5564530583"
  },
  {
    "url": "assets/js/73.fa1b5f60.js",
    "revision": "8b5c03589a5ae98f4d4d3ee07216b30c"
  },
  {
    "url": "assets/js/74.3e979a45.js",
    "revision": "4a91ad8493830f6c135f3ab4d5a95dbe"
  },
  {
    "url": "assets/js/8.5271a547.js",
    "revision": "a48c8fb0c89702f33110eb354290e911"
  },
  {
    "url": "assets/js/9.8fb24df5.js",
    "revision": "fa535043a18a3545ee0e11cb7e108ecd"
  },
  {
    "url": "assets/js/app.7e67dcd3.js",
    "revision": "a654fe6429da04264b4efe2e9ba0798c"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "4ed73c5c9029ebe807f87dac6c77ff97"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "22ae1a2719251ea4da0bb18a3aa19ba6"
  },
  {
    "url": "aws/index.html",
    "revision": "4a834933750d14cb32bac73b4387b35b"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "fea770a0e475ea6595d0587372b7b7fd"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "015bf1ecbdc94ec795a594df42779b58"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "af9b71683c934a29112b0e35a6da61c6"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "7dfbba66e021206d9d6821654780a706"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "fdbf727f490e0f11942db0af5d7ee614"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "4bf6d56e53d9f08b4add6b5d640cfa36"
  },
  {
    "url": "blockchain/index.html",
    "revision": "aa48cd866854f4405b722a2a55666b47"
  },
  {
    "url": "category/index.html",
    "revision": "7adae3fc6d579c9838bf45a14c67db94"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "9ab5acfe30e654d591923830dd76be4e"
  },
  {
    "url": "database/index.html",
    "revision": "37d8ba468db156e16c5c2a6d3456655b"
  },
  {
    "url": "datastructure/index.html",
    "revision": "d7bd87ff89f44dd83379c8b31b9f4a12"
  },
  {
    "url": "documenting/index.html",
    "revision": "78b2a6021e398d2f3e92e3998304922f"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "820f9f0e6a6e1f14f22b37eddad84120"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "3fd08b58f5fbad0d149bce37f224f6e2"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "881d482b47148763cc080f33071b2828"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "fa87d0079cf5d688cc398af35370809c"
  },
  {
    "url": "etc/index.html",
    "revision": "c4442c2cd5f6a94d4278385c462748e5"
  },
  {
    "url": "git/index.html",
    "revision": "f1e1e9f4836880ee1cd1f2fd475ca65e"
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
    "revision": "40128c057125bc8bf4aba392bba74f44"
  },
  {
    "url": "java/class/index.html",
    "revision": "f43166e1c2b0dadc29484dd70550eded"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "27d38b6db772a56df689dffd55d66b2f"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "04b76a525267a4e186bb28b9dc343fd8"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "28f385b88946916bb42c3fbda067aaa2"
  },
  {
    "url": "java/ds/index.html",
    "revision": "ce0f29e3235abcda0a3f293a922cd1f9"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "f0f7f31b3a14cb74366a751370de7d15"
  },
  {
    "url": "java/index.html",
    "revision": "8096c0a0c8a89cafd698bb36bd8108f3"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "94b432b4eaef29b3b92052d2e3756ac3"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "1a8b596d1446fed706abd409f229cd44"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "68084137c497161791e37d464f5d3e52"
  },
  {
    "url": "java/spring/index.html",
    "revision": "d63bedcd73eb7b6c7377025252de80d8"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "c2d349ca02419929eb326e0e5432389d"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "64e8601ce4fb73c5ef7c0fea72c10e69"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "417ef1dfe59d1a3c0edd326424f2ef77"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "022f75d29f63b32193ea0f4d89d8f23b"
  },
  {
    "url": "js/index.html",
    "revision": "090a32c25d4e8b40aecc6fdca8629586"
  },
  {
    "url": "nlp/index.html",
    "revision": "6c34a211563c54f8df4e852b19aa70af"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "267c3e844ad43385265f978867b979a7"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "cb1f1153af5b86217d766c9e523b3ea2"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "6de39cd04196073a8c057913ca7fff35"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "c6585dddeab4d92443a9498ea95cafa7"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "05cfa74df42b26b59789c1249890dbd1"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "beea4324fe2256cd6dfc65406741d225"
  },
  {
    "url": "oop/index.html",
    "revision": "d72f85c0738a1d847d167e58b04db8dd"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "4aa239de74d61da4b60e6a0698d68af1"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "9ec477b732bc15a35af692e1f7c8b1e7"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "7bf4d46a93274444915bafe20ec150e4"
  },
  {
    "url": "rails/index.html",
    "revision": "e6163438263e6475b4885b060615ec8c"
  },
  {
    "url": "rails/install/index.html",
    "revision": "5b250d8c2112eca2b4f5d41f44111ebb"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "b499c8888edf99d0af7362986c99ee95"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "cd576b71a2d7334719f9dadf419a60be"
  },
  {
    "url": "tag/index.html",
    "revision": "e5f6565eed9d140ebdd85622e7bc0802"
  },
  {
    "url": "tools/index.html",
    "revision": "e2598006f936d1aedae1dcd34009b170"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "ad77d31b060210e4e921ade7babc1bbf"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "ad6785ae7320e6749aa7ff6bf6228b76"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "3a767616bb0ad06f6c5f8b0d9f18d73e"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "9d6b53dbe6cf62819d600e9b5e2d9fbc"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "7823b446dee051e35cee6f21ab764d2e"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "4935a47498e9dcd87799018afa721732"
  },
  {
    "url": "vuejs/index.html",
    "revision": "fb96ddea179cfc38e51b165780bfa30e"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "5a12e2331282e041a215e26694467e2a"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "5c7b1b4116870448d4b4dee264429dd7"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "512f084cc961835392122a82123a1950"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "2b02bbd4117e64decb46c2421222d625"
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
