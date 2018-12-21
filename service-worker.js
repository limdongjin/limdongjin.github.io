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
    "revision": "5469aae76e625a2ca1c35ccfbd11269f"
  },
  {
    "url": "about/index.html",
    "revision": "3c759045a933e63ee245e8d1111af39b"
  },
  {
    "url": "algorithms/analysis/index.html",
    "revision": "a7f3eda64f973075e1a84ac79ab48dc8"
  },
  {
    "url": "algorithms/index.html",
    "revision": "331babf7069481fd2cf905657f968b8a"
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
    "url": "assets/js/11.5e5f08fa.js",
    "revision": "e288ccd6a2b008c86248e231e2a20e64"
  },
  {
    "url": "assets/js/12.131e2510.js",
    "revision": "eef4f4793459397b19d7bc7bbd1f5d26"
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
    "url": "assets/js/18.1b8fc473.js",
    "revision": "b795d00d8424a8923d8979d9ef6bb95f"
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
    "url": "assets/js/21.a523f3bb.js",
    "revision": "1c207e4dcbde81deab9523fc5452df4f"
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
    "url": "assets/js/24.77ce2d32.js",
    "revision": "7c66aea7153ad0cc81b9c87230b3fb5e"
  },
  {
    "url": "assets/js/25.62c3e3a0.js",
    "revision": "b0f55a0c5e4dd026904138d746e880be"
  },
  {
    "url": "assets/js/26.9f91a9df.js",
    "revision": "458b06ff38da5f58f91b5177fcd7768f"
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
    "url": "assets/js/30.57c8414b.js",
    "revision": "4753df4a1e280c59e3cd282c4eccf3fd"
  },
  {
    "url": "assets/js/31.3b1c47bd.js",
    "revision": "62cd59c72c33b14cfe96b11aea41a4ed"
  },
  {
    "url": "assets/js/32.f2e987e7.js",
    "revision": "318e8a59b72920648eafe0d35cf7a48a"
  },
  {
    "url": "assets/js/33.900c3561.js",
    "revision": "abce45c6f515f3ce0bcffa9ce90eab52"
  },
  {
    "url": "assets/js/34.b9007882.js",
    "revision": "42104dd3fb1f61101e62a573e232047a"
  },
  {
    "url": "assets/js/35.9c845013.js",
    "revision": "ed1c167274806aab934f7074cdd97d0a"
  },
  {
    "url": "assets/js/36.1752f95f.js",
    "revision": "da3c413c998681d743ca86b193ebce04"
  },
  {
    "url": "assets/js/37.236f7dcf.js",
    "revision": "73f01411d90adb4e17b260eb7770e575"
  },
  {
    "url": "assets/js/38.48440e28.js",
    "revision": "e494254054e940d185bcd666b107ab3c"
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
    "url": "assets/js/40.3f5e3190.js",
    "revision": "e4b5ddea8dd31dba4798dc575d3fa3b5"
  },
  {
    "url": "assets/js/41.03388af2.js",
    "revision": "3e60e946f11f0d62e89578c13cdadb1b"
  },
  {
    "url": "assets/js/42.b04caa29.js",
    "revision": "c40170f36b3cc741314a8e831467948b"
  },
  {
    "url": "assets/js/43.d88fda92.js",
    "revision": "3391d32d9c614d1a1ab495c48992d2a2"
  },
  {
    "url": "assets/js/44.492c1842.js",
    "revision": "2d367b44af6c31f5edcb46875fbc8c3e"
  },
  {
    "url": "assets/js/45.84c7baf6.js",
    "revision": "efd9fdb4421838429272cbd319cbb78b"
  },
  {
    "url": "assets/js/46.6e42e27b.js",
    "revision": "dd266403316648bcd14c385ebf6c053a"
  },
  {
    "url": "assets/js/47.b789dd8f.js",
    "revision": "908f96bfc45670ebcce9604ece57f137"
  },
  {
    "url": "assets/js/48.83e38654.js",
    "revision": "27b717b9df4fd90d09d669f1d537ef12"
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
    "url": "assets/js/51.5825ced4.js",
    "revision": "5b281ae2076a2767cfd74846c85fe7bb"
  },
  {
    "url": "assets/js/52.a7b5174f.js",
    "revision": "128b2b1cbc6339b68df54322c59093f7"
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
    "url": "assets/js/60.e6e4ef56.js",
    "revision": "3b3fe1c948c63d119e91e29c19521b6c"
  },
  {
    "url": "assets/js/61.cc869925.js",
    "revision": "b952815f3866c581754ea5a4b9c6e70f"
  },
  {
    "url": "assets/js/62.9295b9f8.js",
    "revision": "bccd49026ac7ff46b2785c458b596f29"
  },
  {
    "url": "assets/js/63.f9c06fdb.js",
    "revision": "5b6307506f62bbae30a68ce348719094"
  },
  {
    "url": "assets/js/64.cda22d19.js",
    "revision": "af1710f4c0ee67a80aa5e6ad8dbe6a01"
  },
  {
    "url": "assets/js/65.e4d5a0c9.js",
    "revision": "c197a3bdef4a2954b0121e12a414f90a"
  },
  {
    "url": "assets/js/66.1e8c55dd.js",
    "revision": "1a8dc1f8dc60b33302262c278a73a02a"
  },
  {
    "url": "assets/js/67.1c415d56.js",
    "revision": "2865492f19b2f273f9c3356d1365c265"
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
    "url": "assets/js/70.3a734182.js",
    "revision": "fcfe0cd26717d84e2052f6f1d1430ea7"
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
    "url": "assets/js/74.8088b771.js",
    "revision": "543113066eca55156e983e2d3e65ba8b"
  },
  {
    "url": "assets/js/8.12c33f93.js",
    "revision": "039ec41f2ff60ea1a5a114106f9df895"
  },
  {
    "url": "assets/js/9.78e44d2a.js",
    "revision": "929924dd527021762aabc993206d5bd9"
  },
  {
    "url": "assets/js/app.8c38b3c5.js",
    "revision": "7e4e3eba6b24c7585a97f347b26caa21"
  },
  {
    "url": "aws/elasticbeanstalk/ebextensions/index.html",
    "revision": "925e3c31510f4887713be7b9e53536bf"
  },
  {
    "url": "aws/elasticbeanstalk/index.html",
    "revision": "3b71be91b214a6ebb59e3b1668339290"
  },
  {
    "url": "aws/index.html",
    "revision": "18ec9205c9888d7759057726fcfa582d"
  },
  {
    "url": "aws/redirection_a_to_b.html",
    "revision": "780776e1b1c71b983fe902d28175a09e"
  },
  {
    "url": "blockchain/bitcoin/index.html",
    "revision": "dc3723637ac48aca6fc3e1df8c1287e2"
  },
  {
    "url": "blockchain/bitcoin/whitepaper/index.html",
    "revision": "d65a4e78c45a121e2308f0f67309c11d"
  },
  {
    "url": "blockchain/blockchain-tip.html",
    "revision": "67e8022eed849b701eb262f9a76c6c2a"
  },
  {
    "url": "blockchain/ethereum/index.html",
    "revision": "fa62003365b1882ec3d213cf34896b79"
  },
  {
    "url": "blockchain/ethereum/whitepaper/index.html",
    "revision": "cb2aa40893902301af6cca105085323d"
  },
  {
    "url": "blockchain/index.html",
    "revision": "cc65c8cfc1b4d3bf1c8c45114505d51a"
  },
  {
    "url": "category/index.html",
    "revision": "df3aebee28eadc2d539ee223740b2620"
  },
  {
    "url": "database/dynamodb/index.html",
    "revision": "50d8137841d21b438178c941d0cb09b1"
  },
  {
    "url": "database/index.html",
    "revision": "4d7e53bcf6d2bd9c4fc623ca3addf4f3"
  },
  {
    "url": "datastructure/index.html",
    "revision": "cc75318aef41f2e8c30cb95e6768ca62"
  },
  {
    "url": "documenting/index.html",
    "revision": "8ca6cebf8136d435e4e57d5cf6fcd577"
  },
  {
    "url": "elasticsearch/general/index.html",
    "revision": "fc9614efd0e95e79260015593d6e6e8f"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "83d2669bd279d1121f7aba41ee1937e0"
  },
  {
    "url": "elasticsearch/python/index.html",
    "revision": "cb2ab99472e7448c893eac0bdabbec73"
  },
  {
    "url": "elasticsearch/querydsl/index.html",
    "revision": "c7ad79a3414ff8d6b6f57a20d1089595"
  },
  {
    "url": "etc/index.html",
    "revision": "b14dc8e8188140b4add88e0d9eafea4b"
  },
  {
    "url": "git/index.html",
    "revision": "3e0702db6b8005401da36cf67ef0c81c"
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
    "revision": "8d96f65537b0b76b6ed9ed2ae759513b"
  },
  {
    "url": "java/class/index.html",
    "revision": "9f60306bd74c9da481654c8c67354d1d"
  },
  {
    "url": "java/design-pattern/index.html",
    "revision": "987e4145db304cc34334d0d84830e253"
  },
  {
    "url": "java/design-pattern/template-pattern/index.html",
    "revision": "5fa35eb7426aa390ba9af760c2697a86"
  },
  {
    "url": "java/ds/array/index.html",
    "revision": "8522dae20858d52b5585a3c4a9954f09"
  },
  {
    "url": "java/ds/index.html",
    "revision": "f131b27270115469dfe0c5c79116bb8f"
  },
  {
    "url": "java/helloworld10/index.html",
    "revision": "f84cb22c334390df850893bae3829446"
  },
  {
    "url": "java/index.html",
    "revision": "9d94ebe281559d57d092bc2b12d65a83"
  },
  {
    "url": "java/introduction/index.html",
    "revision": "9afa70de89b59d0fec5df03fcccc3635"
  },
  {
    "url": "java/servlet/index.html",
    "revision": "473480b3475bf997260f2fa3b5882947"
  },
  {
    "url": "java/spring/getstarted/index.html",
    "revision": "ae26c811cbe673dc9f7fce87dd8eb586"
  },
  {
    "url": "java/spring/index.html",
    "revision": "8c9b850766ee9cc8255221fbcd9b3c5a"
  },
  {
    "url": "java/spring/start/index.html",
    "revision": "f0bc944984798c9741e5965529e9ebf8"
  },
  {
    "url": "java/spring/start/start-with-gradle-xml.html",
    "revision": "09d00e57df47f25d8afd07cc0e7beb57"
  },
  {
    "url": "java/spring/start/start-with-gradle.html",
    "revision": "197d44187e24acd7f28287e9e860c1a4"
  },
  {
    "url": "java/tomcat/index.html",
    "revision": "abba2cb151fd959d4d672cc4e23475d9"
  },
  {
    "url": "js/index.html",
    "revision": "355a17477c3fe4e18e983ddd06f80f87"
  },
  {
    "url": "nlp/index.html",
    "revision": "a9f316af14df1df56225b2d0cbc9f98c"
  },
  {
    "url": "nodejs_serverless/index.html",
    "revision": "2abc9edfceeed43bf39e8e49d43d5d0e"
  },
  {
    "url": "nodejs-serverside/index.html",
    "revision": "57c366045d3ba0e8114fcfd31511fd84"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/c/index.html",
    "revision": "36e5b0330911a21170978bdf416925ac"
  },
  {
    "url": "nodejs-serverside/sequelize/crud/r/index.html",
    "revision": "0c235c4f7a67636b98af96c25d89e74c"
  },
  {
    "url": "nodejs-serverside/sequelize/index.html",
    "revision": "3499b23a5451627e605fd00deee85a5a"
  },
  {
    "url": "nodejs-serverside/sequelize/migration/index.html",
    "revision": "a83931786a64895e578f7a98ff8c90e3"
  },
  {
    "url": "oop/index.html",
    "revision": "df7232e367e89674d486cb41b657ffa9"
  },
  {
    "url": "rails/actionpack/index.html",
    "revision": "26c747359083175acc618f7a6fbbf63c"
  },
  {
    "url": "rails/deploy/index.html",
    "revision": "2252f54d57b264e076faac61d0aa0e36"
  },
  {
    "url": "rails/deploy/using_elasticbeanstalk.html",
    "revision": "472e0550f1d62780eabb9b9ca54ff14b"
  },
  {
    "url": "rails/index.html",
    "revision": "85df451057d1f0341bb9bde8c30dd713"
  },
  {
    "url": "rails/install/index.html",
    "revision": "e34049c8b9a221abb74474b2b159dc5e"
  },
  {
    "url": "rails/mailer/index.html",
    "revision": "c6f9c5f1d50a8cc4a1979e5c8d131bbe"
  },
  {
    "url": "rails/tip/index.html",
    "revision": "7df06b0ff802204ebebf20e9d11ae02b"
  },
  {
    "url": "tag/index.html",
    "revision": "2f527568df2de30e3caaaa7d40eef99d"
  },
  {
    "url": "tools/index.html",
    "revision": "d6abb8f4fa21a0eab44f943070763a3d"
  },
  {
    "url": "tools/rubymine/index.html",
    "revision": "e55d3d354698c8a10997e6e93b5f08eb"
  },
  {
    "url": "vuejs/general/axios/index.html",
    "revision": "d2a4f883007e647e10609658750d1975"
  },
  {
    "url": "vuejs/general/editor/index.html",
    "revision": "41c23b94e85d85745e5bcfb24b9a986e"
  },
  {
    "url": "vuejs/general/imagerender/index.html",
    "revision": "e3496c009e3839d7e1d30e57a303c468"
  },
  {
    "url": "vuejs/general/index.html",
    "revision": "fffc8962966b1f5b98ede3beabdf22c1"
  },
  {
    "url": "vuejs/general/spinner/index.html",
    "revision": "44e70b4729c6edefa317439660f6ba1b"
  },
  {
    "url": "vuejs/index.html",
    "revision": "f679cf2cc95beee71712c0f994d9a51e"
  },
  {
    "url": "vuejs/initialization/index.html",
    "revision": "1c3b0d7b088a24227b0b2fdad85e788d"
  },
  {
    "url": "vuejs/references/index.html",
    "revision": "364f08dff105a7bac305c687ae20b4bb"
  },
  {
    "url": "vuejs/tutorials/index.html",
    "revision": "b3797e8d7b444773dd23b3e0912db231"
  },
  {
    "url": "vuejs/vuepress/index.html",
    "revision": "288f650d0be81bbb8be87a0f29e1d3f5"
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
