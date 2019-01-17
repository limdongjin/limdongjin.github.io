(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{138:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-플러그인-만들어보자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-플러그인-만들어보자","aria-hidden":"true"}},[s._v("#")]),s._v(" Vuepress 플러그인 만들어보자 !!")]),s._v(" "),a("h2",{attrs:{id:"플러그인-시스템이-vuepress-1-x-버전의-꽃이다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#플러그인-시스템이-vuepress-1-x-버전의-꽃이다","aria-hidden":"true"}},[s._v("#")]),s._v(" 플러그인 시스템이 vuepress 1.x 버전의 꽃이다.")]),s._v(" "),a("p",[s._v("Vuepress 0.x와 Vuepress 1.x의 가장 결정적인 차이는\nPlugin 시스템이 있는지 없는지이다.\n1.x 버전은 아직 stable release도 아니고 beta release도 아니고\n아직 alpha 단계이다. 그럼에도 stable 버전인 0.x를 안쓰고 1.x를 쓰는 이유는 간단하다.")]),s._v(" "),a("p",[s._v("1.x버전에는 미리 구현되있는 공식 "),a("code",[s._v("플러그인")]),s._v("도 꽤 있고, vuepress 내에서 동작하는 플러그인을 만들수있게 해주는 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("Plugin API")]),a("OutboundLink")],1),s._v("도 지원해주기때문에 넘사벽이라고 본다.")]),s._v(" "),a("p",[s._v("물론 아직은 공식 플러그인들이 완벽하지는 않다.\n@vuepress/blog 플러그인이나 @vuepress/pagination 플러그인은 문서에 사용법에 대한 설명이 빈약해서 아직 사용하기 힘들것이다.\n그외에 @vuepress/pwa , google-analytics, medium-zoom, back-to-top 플러그인은 사용할만하다.")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/miscellaneous/design-concepts.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Design Concepts of VuePress 1.x"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"vuepress에-플러그인-적용하는법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress에-플러그인-적용하는법","aria-hidden":"true"}},[s._v("#")]),s._v(" vuepress에 플러그인 적용하는법")]),s._v(" "),a("h3",{attrs:{id:"npm-패키지로-등록된-플러그인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-패키지로-등록된-플러그인","aria-hidden":"true"}},[s._v("#")]),s._v(" npm 패키지로 등록된 플러그인")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@limdongjin/vuepress-plugin-simple-seo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"로컬에서-작성한-플러그인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로컬에서-작성한-플러그인","aria-hidden":"true"}},[s._v("#")]),s._v(" 로컬에서 작성한 플러그인")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./plugins/myplugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"플러그인에-option값-넣어서-적용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#플러그인에-option값-넣어서-적용","aria-hidden":"true"}},[s._v("#")]),s._v(" 플러그인에 Option값 넣어서 적용")]),s._v(" "),a("p",[s._v("로컬의 경우에도 비슷한 형식.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@limdongjin/vuepress-plugin-simple-seo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       option1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       option2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"플러그인의-기본-형태"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#플러그인의-기본-형태","aria-hidden":"true"}},[s._v("#")]),s._v(" 플러그인의 기본 형태")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// myplugin/index.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// myplugin2/index.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"option-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-api","aria-hidden":"true"}},[s._v("#")]),s._v(" Option API")]),s._v(" "),a("p",[s._v("Plugin API에서는 Option API와 Context API를 제공해주는데,\n많이 쓰게될것은 Option API가 될것이다. 이 문서에서는 Option API의 몇가지 함수만을 소개한다.")]),s._v(" "),a("h3",{attrs:{id:"extendpagedata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extendpagedata","aria-hidden":"true"}},[s._v("#")]),s._v(" extendPageData")]),s._v(" "),a("p",[s._v("이 함수는 컴파일 타임에 각 페이지마다 실행이 되게된다.\nfrontmatter 값을 자동으로 추가하는 등의 페이지 커스터마이징을 할때 유용하다.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("extendPageData")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          _filePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// file's absolute path")]),s._v("\n          _computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// access the client global computed mixins at build time, e.g _computed.$localePath.")]),s._v("\n          _content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// file's raw content string")]),s._v("\n          _strippedContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// file's content string without frontmatter")]),s._v("\n          key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// page's unique hash key")]),s._v("\n          frontmatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// page's frontmatter object")]),s._v("\n          regularPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// current page's default link (follow the file hierarchy)")]),s._v("\n          path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// current page's real link (use regularPath when permalink does not exist)")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" $page\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// plugin을 적용할때 사용자가 옵션으로 입력하는 값을 불러올수있음.")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" default_image "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default_image\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// seo를 위해 meta 태그를 추가하는 등의 작업도 할수있음.")]),s._v("\n        frontmatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world!!"')]),s._v("\n        frontmatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'content'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi hi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        frontmatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'property'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'og:title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'content'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'title test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"globaluicomponents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#globaluicomponents","aria-hidden":"true"}},[s._v("#")]),s._v(" globalUIComponents")]),s._v(" "),a("p",[s._v("모든 페이지에 적용되는 global Vue 컴퍼넌트를 적용할수있게해준다.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  globalUIComponents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mycomponent'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"extendmarkdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extendmarkdown","aria-hidden":"true"}},[s._v("#")]),s._v(" extendMarkdown")]),s._v(" "),a("p",[s._v("마크다운 시스템 수정이나 외부 마크다운 플러그인 적용할수있게 도와줌")]),s._v(" "),a("h3",{attrs:{id:"enhanceappfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhanceappfiles","aria-hidden":"true"}},[s._v("#")]),s._v(" enhanceAppFiles")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements",target:"_blank",rel:"noopener noreferrer"}},[s._v("App Level Enhancements"),a("OutboundLink")],1),s._v("를 할수있게해주는 함수이다.")]),s._v(" "),a("p",[s._v("라우터를 건든다거나 app layer의 로직에서 이뤄지는 등의 하는 다소 복잡도가 있는 로직을 구현하기위해서는 이 함수를 이용해야한다.")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("더 자세한 사용법은 공식문서를 확인하면 된다.\n또한 official plugin들의 구현코드를 읽어보는것도 감을 잡는데에 도움이 될것이다!")])]),s._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[s._v("#")]),s._v(" References")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress 공식 문서"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.options.__file="plugin-writing.md";t.default=e.exports}}]);