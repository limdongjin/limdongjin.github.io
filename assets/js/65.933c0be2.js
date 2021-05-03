(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{442:function(s,t,a){"use strict";a.r(t);var e=a(21),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sp-5-sic-xe-의-addressing-mode-pc-relative-base-simple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sp-5-sic-xe-의-addressing-mode-pc-relative-base-simple"}},[s._v("#")]),s._v(" [SP-5] SIC/XE 의 Addressing Mode (PC relative, Base, simple, ..)")]),s._v(" "),a("p",[s._v("이 글은 독자가 SIC/XE의 Instruction Format 을 이해했다는 전제하에 작성 되었습니다. SIC/XE의 Instruction Format 에 대한 내용은 "),a("a",{attrs:{href:"/system-programming/sp4-sicxe-structure"}},[s._v("이전 글")]),s._v(" 에서 확인 가능 합니다.")]),s._v(" "),a("h2",{attrs:{id:"standard-sic-instruction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-sic-instruction"}},[s._v("#")]),s._v(" standard SIC instruction")]),s._v(" "),a("p",[s._v("n == 0 이고 i == 0 이면 SIC의 Instruction Format 으로 간주된다.")]),s._v(" "),a("p",[s._v("즉 standard SIC Instruction 인 상황에서는 "),a("strong",[s._v("b, p, e bits는 flag 로 간주하는 것이 아니라, SIC Instruction Format의 Address 의 일부분이라고 생각해야함. 놓치기 좋을만한 예외상황이므로 잘 기억하고있어야한다.")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/sic-standard-inst.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"target-address-ta-계산을-위한-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-address-ta-계산을-위한-mode"}},[s._v("#")]),s._v(" Target Address(TA) 계산을 위한 Mode")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Base Relative")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("b == 1, p == 0")]),s._v(" 일때 Base Relative")]),s._v(" "),a("li",[s._v("TA = disp + [B]")]),s._v(" "),a("li",[s._v("disp 을 12bit "),a("strong",[s._v("unsigned")]),s._v(" integer 로 해석 (disp: 0 ~ 4095)")])])]),s._v(" "),a("li",[a("p",[s._v("PC Relative")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("b == 0, p == 1")]),s._v(" 일때 PC Relative")]),s._v(" "),a("li",[s._v("TA = disp + [PC]")]),s._v(" "),a("li",[s._v("disp 을 12bit "),a("strong",[s._v("signed")]),s._v(" integer 로 해석 (disp: -2048 ~ 2047)")])])]),s._v(" "),a("li",[a("p",[s._v("Direct Addressing")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("b == 0, p == 0")]),s._v(" 일때")]),s._v(" "),a("li",[s._v("TA = disp")])])])]),s._v(" "),a("p",[s._v("(b 가 base 의 앞글자, p가 pc의 앞글자임을 생각하면, base, pc addressing의 조건을 바로 외울수있다. )")]),s._v(" "),a("p",[s._v("(주의,  b == 1 이면서 동시에 p == 1 인 경우는 에러 케이스라고 간주합니다.)")]),s._v(" "),a("p",[s._v("(앞서 말했듯이, standard sic instruction의 조건에 만족하는 경우에는 b, p field는 Addressing Mode 결정을 위해서 쓰이지않습니다. )")]),s._v(" "),a("ul",[a("li",[s._v("Index Addressing\n"),a("ul",[a("li",[a("strong",[s._v("x == 1")]),s._v(" 일때")]),s._v(" "),a("li",[s._v("TA = disp + [X]")]),s._v(" "),a("li",[a("strong",[s._v("주의. 다른 Addressing Mode 와 결합 할 수 있다")])]),s._v(" "),a("li",[a("strong",[s._v("ex) if b == 1, p == 0,  x == 1, TA = disp + [B] + [X]")])])])])]),s._v(" "),a("h2",{attrs:{id:"ta-해석을-위한-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ta-해석을-위한-mode"}},[s._v("#")]),s._v(" TA 해석을 위한 Mode")]),s._v(" "),a("h3",{attrs:{id:"simple-immediate-indirect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-immediate-indirect"}},[s._v("#")]),s._v(" Simple, Immediate, Indirect")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Simple Addressing")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("n == 1, i == 1")]),s._v(" 일때")]),s._v(" "),a("li",[s._v("TA(Target Address)로 메모리에 접근해서 값을 가져옴")]),s._v(" "),a("li",[s._v("예를들어, TA 가 0x123 이고 메모리 0x123 번지에는 0x030이라는 값이 들어있다면, 0x123을 사용하는 것임.")])])]),s._v(" "),a("li",[a("p",[s._v("Immediate Addressing")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("n == 0, i == 1")]),s._v(" 일때")]),s._v(" "),a("li",[s._v("메모리 reference 안함.")]),s._v(" "),a("li",[s._v("disp, address field 의 값을 주소 값으로 생각 안하고 그 자체를 값으로 생각함.")]),s._v(" "),a("li",[s._v("예를들어 disp 이 0x100 이라면, 0x100 번지의 값을 쓰는 것이 아니라, 0x100 이라는 값 그 자체를 사용하는 것임.")])])]),s._v(" "),a("li",[a("p",[s._v("Indirect Addressing")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("n == 1, i == 0")]),s._v(" 일때")]),s._v(" "),a("li",[s._v("TA 를 간접 주소로 해석한다.")]),s._v(" "),a("li",[s._v("포인터의 동작 방식을 생각하면 이해하기 쉽다.")])])])]),s._v(" "),a("h3",{attrs:{id:"simple-addressing-추가-설명"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-addressing-추가-설명"}},[s._v("#")]),s._v(" Simple Addressing 추가 설명")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/sicxe-simple-addressing.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"indirect-addressing-추가-설명"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indirect-addressing-추가-설명"}},[s._v("#")]),s._v(" Indirect Addressing 추가 설명")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/sicxe-indirect.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// indirect Addressing 의 이해를 위한 c 언어 예제")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" ptr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 포인터 변수 ptr 에는 a 변수의 주소가 저장된다. ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 출력: 10")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 10 이라는 값이 출력되기까지의 과정을 알고있다면 Indirect Addressing 을 알고있다고 볼수있다.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 포인터 변수 ptr 에 저장된 값을 불러온다. 이는 a 변수의 주소 값이다")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. a 변수의 주소값을 통해 a 변수로 접근")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. a 변수에 저장된 값인 10을 불러온다. ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4. 10을 출력한다.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// indirect Addressing 을 위한 예시")]),s._v("\n\ndisp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x123")]),s._v(" \n메모리 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x123")]),s._v(" 번지에 저장된 내용 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x200")]),s._v("\n메모리 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x200")]),s._v(" 번지에 저장된 내용 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x300")]),s._v("\n\n일때 indirect addressing 을 한다면"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 메모리 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x123")]),s._v(" 번지에 저장된 값을 불러온다"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 이는 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x200")]),s._v(" 이다\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x200")]),s._v("번지에 저장된 값을 불러온다"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 이는 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x300")]),s._v(" 이다\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"assembly-코드-레벨에서-indirect-immediate-구분"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assembly-코드-레벨에서-indirect-immediate-구분"}},[s._v("#")]),s._v(" Assembly 코드 레벨에서 Indirect, Immediate 구분")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    J @RETADR \n    . @ 가 붙으면 Indirect Addressing\n\n    COMP #1\n    . # 이 붙으면 Immediate Addressing\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);