(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{439:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"lcs-최장-공통-부분-수열"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lcs-최장-공통-부분-수열"}},[s._v("#")]),s._v(" LCS(최장 공통 부분 수열)")]),s._v(" "),a("h2",{attrs:{id:"lcs-longest-common-subsequence-가-무엇이지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lcs-longest-common-subsequence-가-무엇이지"}},[s._v("#")]),s._v(" LCS(Longest Common Subsequence)가 무엇이지?")]),s._v(" "),a("p",[s._v('LCS(Logest Common Subsequence)는 말그대로 "가장 긴 공통 부분 수열"이다. 이를 나눠서 바라보자.')]),s._v(" "),a("ol",[a("li",[s._v('"가장 긴" ( Longest )')]),s._v(" "),a("li",[s._v('"공통" ( Common )')]),s._v(" "),a("li",[s._v('"부분 수열" ( Subsequence )')])]),s._v(" "),a("p",[s._v('즉 우리는 LCS(Longest Common Subsequence)의 의미를 이해하기위해서는 "부분 수열"(Subsequence)이 무엇인지 알아야한다.\n먼저 Sequence에 대해 알아보자.')]),s._v(" "),a("h2",{attrs:{id:"sequence-정의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequence-정의"}},[s._v("#")]),s._v(" Sequence 정의")]),s._v(" "),a("blockquote",[a("p",[s._v("A sequence is an ordered set of mathematical objects. Sequences of object are most commonly denoted using braces. - wolfram")])]),s._v(" "),a("p",[s._v("Sequence(수열)는 Ordered Set 이다. 즉 순서가 있는 요소들의 집합이다.")]),s._v(" "),a("p",[s._v('그리고 Sequence는 <a, b, c, d>와 같은 형태로 표현을 할수있다.\ns = "hello world"와 같은 문자열이 있을때 이는 그 자체로 Sequence의 표현으로 볼수 있다.')]),s._v(" "),a("p",[s._v("풀어서 보면 아래와 같은 문자들의 순서집합으로 볼수도 있다.\n<(1,'h'),(2,'e'),(3,'l'),(4,'l'),(5,'o'),(6,' '),(7,'w'),(8,'o'),(9,'r'),(10,'l'),(11,'d')>")]),s._v(" "),a("p",[s._v('주의할점은 "문자가 중복되니까 Set이 아닌것같은데" 라고 생각할수도있지만, 각 문자에는 인덱스값이 있기때문에 hello의 o와 world의 o는 다른 o로 취급해야한다.')]),s._v(" "),a("p",[s._v("또한 수학적 정의에 의하면 Sequence의 정의역은 자연수 집합이므로 첫요소의 인덱스는 0이 아니라 1이라는 것도 주의해야한다.\n물론 코드로의 구현적 편의를 위해 인덱스를 0으로 해도 무방할수도 있다.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.cs.cmu.edu/afs/cs/academic/class/15210-s15/www/lectures/seq-notes.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("cmu Sequence lecture note"),a("OutboundLink")],1),s._v("\n에서는 Sequence의 기술적 구현에 대해서 구체적으로 알려주고있다.")])]),s._v(" "),a("h2",{attrs:{id:"subsequence는-무엇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subsequence는-무엇"}},[s._v("#")]),s._v(" Subsequence는 무엇")]),s._v(" "),a("p",[s._v("s라는 sequence가 있을때 s의 Subsequence는 s의 일부요소들을 원래의 순서를 지키면서 순서대로 나열해서 얻을수있는 수열이다.\ns = hello world 라고 할때 s의 subsequnce로 hwd가 있을수도있고 lwd가 있을수있다. 그렇지만 기존 순서를 깬 ohd같은 경우는 subsequnce가 아니다.")]),s._v(" "),a("h2",{attrs:{id:"lcs를-다시-이해해보자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lcs를-다시-이해해보자"}},[s._v("#")]),s._v(" LCS를 다시 이해해보자")]),s._v(" "),a("p",[s._v("처음에 말했듯 LCS는 가장 긴 공통 부분 수열을 의미한다. 우리는 이제 Subsequnce(부분수열)의 의미를 알고있으니 LCS를 쉽게 이해할수있다.")]),s._v(" "),a("p",[s._v("s = cdabe")]),s._v(" "),a("p",[s._v("a = cdegt")]),s._v(" "),a("p",[s._v("라는 문자열이 있을때 s와 a의 공통 subsequence로는 {}, {c}, {d},{c,d} ... {c,d,e}가 있고,\n이중에서 {c,d,e}라는 subsequence가 가장 길기때문에 이것이 바로 LCS(Longest Common Subsequence)가 된다.")]),s._v(" "),a("h2",{attrs:{id:"lcs를-dp-dynamic-programming-으로-풀어보자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lcs를-dp-dynamic-programming-으로-풀어보자"}},[s._v("#")]),s._v(" LCS를 DP(Dynamic Programming)으로 풀어보자")]),s._v(" "),a("p",[s._v("먼저 DP로 풀수있는지 확인해야한다. Optimal Structure를 갖고있는지 확인해야한다.")]),s._v(" "),a("p",[s._v("우선 들어가기에 앞서 X = <x"),a("sub",[s._v("1")]),s._v(", x"),a("sub",[s._v("2")]),s._v(", x"),a("sub",[s._v("3")]),s._v(", ... , x"),a("sub",[s._v("i")]),s._v(", ... , x"),a("sub",[s._v("n")]),s._v(">,\nY = <y"),a("sub",[s._v("1")]),s._v(", y"),a("sub",[s._v("2")]),s._v(", y"),a("sub",[s._v("3")]),s._v(", ... y"),a("sub",[s._v("j")]),s._v(", ... , y"),a("sub",[s._v("m")]),s._v("> 문자열이 있다고 하고, LCS의 길이를 구하는 함수를 LCS()라고 하자.\n(X의 각 요소의 인덱스는 i이고 Y의 각 요소의 인덱스는 j라고한다.)")]),s._v(" "),a("p",[s._v("(i, j)와 (X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(")에 대하여 점화식을 세워보자. 즉 경우에 따른 LCS() 식을 세워보자.")]),s._v(" "),a("h4",{attrs:{id:"case-1-i-또는-j가-0인-경우-길이가-0이라는-의미"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-1-i-또는-j가-0인-경우-길이가-0이라는-의미"}},[s._v("#")]),s._v(" case 1. i 또는 j가 0인 경우 ( 길이가 0이라는 의미 )")]),s._v(" "),a("p",[s._v("수열 K의 인덱스 k 는 1부터 시작되는데, k가 0이라는 의미는 수열 K의 길이가 0이라는 의미를 갖는다.")]),s._v(" "),a("p",[s._v("한쪽의 문자열의 길이가 0이면 공통된 부분은 존재하지않기때문에 LCS의 길이는 0이된다.")]),s._v(" "),a("p",[a("strong",[s._v("LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(") = 0")])]),s._v(" "),a("h4",{attrs:{id:"case-2-xi-와-yj-가-같은-경우"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-2-xi-와-yj-가-같은-경우"}},[s._v("#")]),s._v(" case 2. X"),a("sub",[s._v("i")]),s._v(" 와 Y"),a("sub",[s._v("j")]),s._v(" 가 같은 경우")]),s._v(" "),a("p",[s._v("이는 X"),a("sub",[s._v("i")]),s._v("와 Y"),a("sub",[s._v("j")]),s._v("가 LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(")의 마지막 문자라는 것이다.\n그렇기에 이 마지막 요소는 상수 1로 대체될수있고, 마지막요소를 제외한 부분의 LCS는 결국 i j의 인덱스를 1씩 빼서 LCS(X"),a("sub",[s._v("i-1")]),s._v(", Y"),a("sub",[s._v("j-1")]),s._v(")로 일반화할수있다.")]),s._v(" "),a("p",[a("strong",[s._v("LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(") = LCS(X"),a("sub",[s._v("i-1")]),s._v(", Y"),a("sub",[s._v("j-1")]),s._v(") + 1")])]),s._v(" "),a("h4",{attrs:{id:"case-3-xi-와-yj-가-다른-경우-i-0-j-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-3-xi-와-yj-가-다른-경우-i-0-j-0"}},[s._v("#")]),s._v(" case 3.  X"),a("sub",[s._v("i")]),s._v(" 와 Y"),a("sub",[s._v("j")]),s._v(" 가 다른 경우 (i != 0 && j != 0)")]),s._v(" "),a("p",[s._v("X"),a("sub",[s._v("i")]),s._v("와 Y"),a("sub",[s._v("j")]),s._v("가 같지않다는 것은 LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(")의 마지막 문자가 아래 세가지 경우중의 하나라는 것이다.")]),s._v(" "),a("ol",[a("li",[s._v("(X"),a("sub",[s._v("i")]),s._v(" == Y"),a("sub",[s._v("j - 1")]),s._v("), (X"),a("sub",[s._v("i")]),s._v(" == Y"),a("sub",[s._v("j - 2")]),s._v(") , ...")]),s._v(" "),a("li",[s._v("(X"),a("sub",[s._v("i - 1")]),s._v(" == Y"),a("sub",[s._v("j")]),s._v("), (X"),a("sub",[s._v("i - 2")]),s._v(" == Y"),a("sub",[s._v("j ")]),s._v("), ...")]),s._v(" "),a("li",[s._v("(X"),a("sub",[s._v("i - 1")]),s._v(" == Y"),a("sub",[s._v("j -1 ")]),s._v("),  (X"),a("sub",[s._v("i - 2")]),s._v(" == Y"),a("sub",[s._v("j -1 ")]),s._v("), ...")])]),s._v(" "),a("p",[s._v("1의 경우는 결국 LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j - 1")]),s._v(")로 단순화 할수있다. 왜냐하면 i, j-3에 마지막 문자가 있더라도 LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j - 1")]),s._v(")에 포함이 되기때문이다.\n2의 경우도 마찬가지 논리로 LCS(X"),a("sub",[s._v("i - 1")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(")로 단순화 할수있다.\n3의 경우는 1또는 2에서 일반화한 식에 결국 포함이 되게된다.")]),s._v(" "),a("p",[s._v("그렇기때문에 LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j - 1")]),s._v(")과 LCS(X"),a("sub",[s._v("i - 1")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(")중에 가장 큰 것이 LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(")가 된다.")]),s._v(" "),a("p",[a("strong",[s._v("LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j")]),s._v(") = MAX(LCS(X"),a("sub",[s._v("i-1")]),s._v(", Y"),a("sub",[s._v("j")]),s._v("), LCS(X"),a("sub",[s._v("i")]),s._v(", Y"),a("sub",[s._v("j-1")]),s._v("))")])]),s._v(" "),a("h4",{attrs:{id:"결론"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#결론"}},[s._v("#")]),s._v(" 결론")]),s._v(" "),a("p",[s._v("즉 Xi와 Yi의 LCS는 부분 LCS들로 부터 답이 나오는것을 볼수있다.\n이는 Optimal Structure를 만족한다는 것을 의미하고 DP를 사용할수있다는 것을 의미한다.")]),s._v(" "),a("h2",{attrs:{id:"재귀로-구현한-lcs-코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#재귀로-구현한-lcs-코드"}},[s._v("#")]),s._v(" 재귀로 구현한 LCS 코드")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Lcs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" xi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" yi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" xi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" yi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" yi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("containsKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" xi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" yi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" xi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" yi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" xi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" yi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/limdongjin/ProblemSolving/blob/master/Algorithms/LCS/src/main/java/Lcs.java",target:"_blank",rel:"noopener noreferrer"}},[s._v("소스 코드"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/limdongjin/ProblemSolving/blob/master/Algorithms/LCS/src/test/java/LcsTest.java",target:"_blank",rel:"noopener noreferrer"}},[s._v("테스트 코드"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.math.ucdavis.edu/~npgallup/m17_mat25/lecture_notes/lecture_8/m17_mat25_lecture_8_notes.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("MAT25 LECTURE 8 NOTES in ucdavis"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.cs.cmu.edu/afs/cs/academic/class/15210-s15/www/lectures/seq-notes.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("cmu Sequence lecture note"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.cs.cmu.edu/afs/cs/academic/class/15451-s15/LectureNotes/lecture04.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("cmu Design & Analysis of Algorithms lecture note"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://mathworld.wolfram.com/Sequence.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("wolfram Sequence definition"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://mathworld.wolfram.com/Subsequence.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("wolfram Subsequence definition"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://web.stanford.edu/class/archive/cs/cs161/cs161.1176/Lectures/CS161Lecture13.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("stanford cs161 lecture13"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);