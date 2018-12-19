(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{174:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"migration-in-sequelize"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#migration-in-sequelize","aria-hidden":"true"}},[s._v("#")]),s._v(" Migration in Sequelize")]),s._v(" "),n("h2",{attrs:{id:"create-model-table"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-model-table","aria-hidden":"true"}},[s._v("#")]),s._v(" Create Model & table")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ sequelize model:generate --name Post --attributes title:string,content:text,category:text\n$ sequelize db:migrate\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"add-column"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-column","aria-hidden":"true"}},[s._v("#")]),s._v(" Add Column")]),s._v(" "),n("p",[s._v("해당 command를 입력하면 아래와 같은 파일이 생기는 것을 볼수있다.")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ sequelize migration:create --name add_column_to_table \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("migrations/#@!!@-add_column_to_table.js")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token string"}},[s._v("'use strict'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  up"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queryInterface"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Sequelize"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      \n      "),n("span",{attrs:{class:"token comment"}},[s._v("/* \n      주석\n      */")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  down"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queryInterface"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Sequelize"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n      "),n("span",{attrs:{class:"token comment"}},[s._v("/*\n      주석\n      */")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("만약 'Posts' 테이블에 'like'라는 INTEGER 타입의 칼럼을 추가하고 싶다면, 해당 migration 파일을 다음과\n같이 수정하고 migrate하면 된다.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'use strict';\n\nmodule.exports = {\n  up: (queryInterface, Sequelize) => {\n    queryInterface.addColumn(\n          'Posts',\n          'like',\n          Sequelize.INTEGER\n        );  \n  },\n\n  down: (queryInterface, Sequelize) => {\n \n  }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);