(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{429:function(s,a,t){"use strict";t.r(a);var n=t(21),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sp-3-sic의-주요-instruction-sets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sp-3-sic의-주요-instruction-sets"}},[s._v("#")]),s._v(" [SP-3] SIC의 주요 Instruction Sets")]),s._v(" "),t("p",[s._v("이 글은 SIC 의 주요 Instruction Sets을 설명하는 글입니다. 모든 Instruction 을 설명하지는 못하기때문에 이 "),t("a",{attrs:{href:"%5Bhttp://solomon.ipv6.club.tw/Course/SP.941/sic-instruction.html%5D(http://solomon.ipv6.club.tw/Course/SP.941/sic-instruction.html)"}},[s._v("링크")]),s._v("를 참고하길 바랍니다")]),s._v(" "),t("h2",{attrs:{id:"instruction-sets-sic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instruction-sets-sic"}},[s._v("#")]),s._v(" Instruction Sets (SIC)")]),s._v(" "),t("p",[s._v("SIC 는 아래와 같은 Instruction Sets 을 갖는다. 또한 다른 특성들과 마찬가지로 SIC/XE 에도 상위 호환이 됩니다.")]),s._v(" "),t("ul",[t("li",[s._v("Instruction Sets\n"),t("ul",[t("li",[s._v("Data Movement(load 와 store): LDA, LDX, STA, STX, ...")]),s._v(" "),t("li",[s._v("Arithmetic: ADD, SUB, MUL, DIV, ...")]),s._v(" "),t("li",[s._v("비교(Comparison): COMP, ...")]),s._v(" "),t("li",[s._v("Conditional Jump: JEQ, JLT, JGT, ...")]),s._v(" "),t("li",[s._v("Jump to Subroutine: JSUB")]),s._v(" "),t("li",[s._v("Return from Subroutine: RSUB")]),s._v(" "),t("li",[s._v("RESW, RESB, WORD, BYTE, ...")])])])]),s._v(" "),t("h3",{attrs:{id:"sic-코드-예시"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sic-코드-예시"}},[s._v("#")]),s._v(" SIC 코드 예시")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("COPY   START  0\nFIRST  STL    RETADR\n       LDB    #LENGTH\n       BASE   LENGTH\nCLOOP  +JSUB  RDREC\n       LDA    LENGTH\nHELLO  RESW   1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"data-movement-load-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-movement-load-store"}},[s._v("#")]),s._v(" Data Movement (load , store)")]),s._v(" "),t("ul",[t("li",[s._v("load : memory ⇒ register 명령, 즉 메모리 안의 값을 읽어서 레지스터 안에 넣는 명령")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    LDA FIVE \n\n    . 위 명령은 (메모리에 저장된)FIVE 라는 데이터 변수의 값을 읽어서 A 레지스터로 넣는 명령입니다\n    . [FIVE] => A (부등호 기호 아님) \n    . 마찬가지로 LDX FIVE 라면 [FIVE] => X\n    . (FIVE 는 사용자가 정의해놓은 데이터 변수)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("store : register ⇒ memory 명령, 즉 레지스터 안의 값을 읽어서 메모리 안에 넣는 명령")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    STA HELLO\n\n    . A 레지스터 안의 값을 HELLO 라는 데이터 변수안에 넣는 명령입니다.\n    . [HELLO] => A\n    . 마찬가지로 STX HELLO 라면 [HELLO] => X\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"arithmetic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic"}},[s._v("#")]),s._v(" Arithmetic")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    ADD HELLO\n    . [A] + [HELLO] => A\n\n    SUB HELLO\n    . [A] - [HELLO] => A\n\n    MUL HELLO\n    . [A] * [HELLO] => A \n\n    DIV\n    . [A] / [HELLO] => A\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"comparison"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[s._v("#")]),s._v(" Comparison")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    COMP HELLO\n    . [A] : [HELLO] => SW\n    . A 레지스터의 값과 HELLO의 값을 비교하여 SW 레지스터에 저장\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"jsub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsub"}},[s._v("#")]),s._v(" JSUB")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    JSUB MYFUNC\n\n    . 코드를 실행하면 내부적으로 아래와 같이 작동합니다\n    . 1. [PC] => L  (돌아올 위치를 백업하기위한 작업)\n    . 2. MYFUNC => PC (MYFUNC 라는 서브루틴을 호출하는 작업)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"rsub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rsub"}},[s._v("#")]),s._v(" RSUB")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("..서부루틴 내부..\n    RSUB\n\n. [L] => PC\n. JSUB 에서 백업해뒀던 주소가 L에 있기때문에, 이를 이용하여 돌아가는 명령이라고 보면 됩니다. \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"resw-resb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resw-resb"}},[s._v("#")]),s._v(" RESW, RESB")]),s._v(" "),t("p",[s._v("변수 선언,정의를 위한 명령")]),s._v(" "),t("p",[s._v("RESW는 Reserve(예약하다) Word(Word 크기)라는 뜻의 명령이다. 즉 WORD 사이즈를 예약하여 변수를 선언하게 할수있다.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("HELLO RESW 1\n. 1 WORD 만큼을 HELLO에 예약한다. \n\nCAR RESB 2\n. 2 BYTE 만큼을 CAR에 예약한다.  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"word-byte"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#word-byte"}},[s._v("#")]),s._v(" WORD, BYTE")]),s._v(" "),t("p",[s._v("상수 선언, 정의를 위한 명령")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("FIVE WORD 5\n. FIVE 는 5를 값으로 갖는 상수로 지정된다\n\nCHARZ   BYTE    C'Z'\n. CHARZ 는 Z 를 값으로 갖는 상수로 지정된다\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);