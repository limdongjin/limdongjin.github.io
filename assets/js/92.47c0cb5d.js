(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{140:function(s,n,a){"use strict";a.r(n);var e=a(14),t=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-js에서-axios로-form-submit-ajax-request-보내기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js에서-axios로-form-submit-ajax-request-보내기","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue.js에서 Axios로 form submit ajax request 보내기")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// main.js\n\n...\nimport VueAxios from 'vue-axios'\nimport axios from 'axios'\n...\nVue.use(VueAxios, axios)\n...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("{ ... }을 qs.stringify()로 감싸야만, 서버에 올바른 형식의 json 형태로 데이터가 전달된다. 저거 몰라서 처음에 얼마나 많은 시간을 날렸는지 ㅠㅠ....")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// PostNew.vue\n\n...\nconst baseURI = `http://localhost:3000`\nvar qs = require('qs')\n\nthis.axios.post(`${baseURI}/posts`,\n    qs.stringify({\n        title: this.title,\n        content: this.content,\n        category: this.category\n    }),\n    {\n        headers: {'Content-Type': 'application/x-www-form-urlencoded'}\n    })\n    .then((result) => {\n            console.log(result)\n            this.$router.push({name: 'NextRouting'})\n          })\n          .catch((e) => { console.log(e) })\n\n...\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("TagLinks")],1)},[],!1,null,null,null);t.options.__file="README.md";n.default=t.exports}}]);