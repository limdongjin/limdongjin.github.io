(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{432:function(t,e,i){"use strict";i.r(e);var a=i(21),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"sp-4-sic-xe-의-구조-memory-reg-data-format"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sp-4-sic-xe-의-구조-memory-reg-data-format"}},[t._v("#")]),t._v(" [SP-4] SIC/XE 의 구조 (memory, reg, data format, ..)")]),t._v(" "),i("p",[t._v("SIC/XE는 SIC 의 업그레이드 버전입니다. 정확히 말하면 SIC에 feature 몇가지가 추가된 버전입니다.")]),t._v(" "),i("p",[t._v("SIC 의 기존 feature 들은 모두 SIC/XE 에서도 호환이 됩니다. (upper compatibility)")]),t._v(" "),i("br"),t._v(" "),i("p",[t._v("그렇기 때문에 이 글에서는 SIC/XE 에 추가된 feature 만을 언급하고 있습니다.")]),t._v(" "),i("h2",{attrs:{id:"memory-sic-xe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#memory-sic-xe"}},[t._v("#")]),t._v(" Memory (SIC/XE)")]),t._v(" "),i("ul",[i("li",[t._v("총 메모리 크기는 1MB (2의 20승)")])]),t._v(" "),i("h2",{attrs:{id:"registers-sic-xe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#registers-sic-xe"}},[t._v("#")]),t._v(" Registers (SIC/XE)")]),t._v(" "),i("p",[t._v("4개의 레지스터가 추가되어 SIC/XE는 총 9개의 레지스터를 갖습니다.")]),t._v(" "),i("p",[t._v("F 레지스터는 2 word (48 bits) 이며, 나머지 레지스터들은 각각 1 word (24 bits) 입니다.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Mnemonic")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("목적")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("B")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("Base register : Addressing 할때 사용")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("S")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("General working register")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("T")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("General working register")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("F")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("Floating Point Accumulator")])])])]),t._v(" "),i("h2",{attrs:{id:"data-format-sic-xe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-format-sic-xe"}},[t._v("#")]),t._v(" Data Format (SIC/XE)")]),t._v(" "),i("p",[t._v("48 bit 부동 소수점(floating point) 데이터 포맷이 추가 되었습니다.")]),t._v(" "),i("p",[t._v("아래와 같은 포맷을 갖습니다.")]),t._v(" "),i("p",[i("img",{attrs:{src:"/images/sicxe-float.png",alt:""}})]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Float")]),t._v(" "),i("ul",[i("li",[t._v("S : 1 bit")]),t._v(" "),i("li",[t._v("Exponent : 11 bit")]),t._v(" "),i("li",[t._v("Fraction : 36 bit")])])]),t._v(" "),i("li",[i("p",[t._v("0 ≤ Fraction ≤ 1")])]),t._v(" "),i("li",[i("p",[t._v("0 ≤ Exponent ≤ 2047")])]),t._v(" "),i("li",[i("p",[t._v("if S == 0, positive")])]),t._v(" "),i("li",[i("p",[t._v("if S == 1, negative")])])]),t._v(" "),i("h2",{attrs:{id:"instruction-format-sic-xe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#instruction-format-sic-xe"}},[t._v("#")]),t._v(" Instruction Format (SIC/XE)")]),t._v(" "),i("p",[t._v("SIC/XE 에서는 4가지 Instruction Format 을 제공합니다.")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("format 1")]),t._v(" "),i("ul",[i("li",[t._v("총 1 byte")]),t._v(" "),i("li",[t._v("OpCode(8bit)")]),t._v(" "),i("li",[t._v("메모리에 reference 하지 않음")])])]),t._v(" "),i("li",[i("p",[t._v("format 2")]),t._v(" "),i("ul",[i("li",[t._v("총 2 byte")]),t._v(" "),i("li",[t._v("OpCode(8bit), reg1(4bit), reg2(4bit)")]),t._v(" "),i("li",[t._v("(reg1 을 r1 이라고 줄여 말하기도 한다. reg2는 r2로)")])])]),t._v(" "),i("li",[i("p",[t._v("format 3")]),t._v(" "),i("ul",[i("li",[t._v("총 3 byte")]),t._v(" "),i("li",[t._v("OpCode(6bit), n,i,x,b,p,e (각각 1bit 씩), disp (12bit)")]),t._v(" "),i("li",[t._v("n, i, x, b, p, e 는 flag bits 의 역할을 한다고 보면 된다.")]),t._v(" "),i("li",[t._v("e 가 0 이면 format 3 이다. e 가 extend 여부를 결정하는 flag 라고 생각 하면 된다")])])]),t._v(" "),i("li",[i("p",[t._v("formt 4")]),t._v(" "),i("ul",[i("li",[t._v("총 4 byte")]),t._v(" "),i("li",[t._v("OpCode(6bit), n,i,x,b,p,e (각각 1bit 씩), address (20bit)")]),t._v(" "),i("li",[t._v("e 가 1 이면 format 4 이다.")])])])]),t._v(" "),i("p",[t._v("참고로 flag bits 중에 x 는 SIC 에도 있던 flag bit 인데, SIC 와 마찬가지로 SIC/XE 에서도 x == 1 이면 Index Addressing 이다. 하지만 SIC 에서는 x == 0 인 경우에는 반드시 Direct Addressing 이었는데, SIC/XE 에서는 x == 0 이더라도, 다른 flag bit 에 따라서 Addressing Mode 가 결정된다.")]),t._v(" "),i("p",[t._v("또한 SIC/XE에서는 Direct, Index Addressing 이외에도 몇가지 Addressing Mode 가 추가되었으며, 이에 대한 내용은 다음 글에서 다루도록 한다.")]),t._v(" "),i("p",[i("img",{attrs:{src:"/images/sicxe-formats.png",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);