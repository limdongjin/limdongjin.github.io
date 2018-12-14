(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{195:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),a("p",[t._v("그렇기때문에 위의 mycar2 객체변수는 mycar의 참조값을 넘겨받는것이고, mycar의 내용을 복사받는게 아니라 참조값만을 넘겨받는것이다.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("추상 클래스는 구현이 덜되었거나, 아직은 미완성인 클래스이기때문에 추상클래스라고 부른다. 미완성 메소드, 즉 추상메소드를 단 하나라도 포함하고있는 클래스를 추상클래스라고 한다.")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v('Object Identity는 참조값(reference)가 같은 경우를 말하며,\nObject Equality는 참조값은 다를수도있으면서도 "객체의 내용"이 같은 경우를 말한다.\nMIT 강의자료에서는 Object Identity를 Referential Equality라고 표현하고있다.')]),t._v(" "),a("p",[t._v('자바에서는 "==" 비교 연산으로 Identity를 비교한다.\n그리고 Equality는 해당 객체의 equals 메소드로 비교하게 된다.')]),t._v(" "),a("p",[t._v("(\n사용자 정의 클래스를 처음 만들때 equals 메소드는 기본적으로 참조값이 같은 경우인 Objective Identity한 경우에 true를 반환한다.")]),t._v(" "),a("p",[t._v("왜냐하면 사용자 정의 클래스의 부모클래스는 java.lang.Object인데, 이 클래스에는 equals라는 메소드가 있고 equals 메소드는 기본적으로 참조값을 비교하도록 구현되어있기때문이다.")]),t._v(" "),a("p",[t._v("만일 객체의 필드들을 기준으로 Equality를 비교하고 싶다면 equals 메소드를 오버라이딩해야한다\n)")]),t._v(" "),a("p",[t._v('자바와 달리 파이썬은 "=="비교연산으로 Equality를 비교하고 "is"메소드로 Identity를 비교한다.')]),t._v(" "),t._m(17),a("p",[t._v('우선 자바에서의 문자열에 대해 알아야한다.\n자바에서 문자열 변수를 생성하는 방법은 두가지이다. 첫번째는 new 키워드를 통해 생성하는 방법이고 두번째는 a = "hello"같이 리터럴(literal)문자열로 생성하는 방법이다.')]),t._v(" "),a("p",[t._v("첫번째 방법인 new 키워드를 사용하여 문자열 변수를 생성하게되면 new를 사용할때마다 해당 객체가 Heap영역에 저장되게된다.")]),t._v(" "),a("p",[t._v('두번째 방법인 리터럴 문자열로 변수를 생성을 하면 String Constant Pool에 "해당 리터럴 문자열"이 저장된다.')]),t._v(" "),a("p",[t._v('예를들어 String a = "A; b = "A" 라는 코드를 작성하였다면 "A"가 String Constant Pool에 저장되게된다.\n그리고 객체 a, b는 "A"라는 리터럴을 가리키게된다. 그렇기때문에 a, b의 참조값은 같게된다.')]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("그렇기때문에 str1과 str3는 ==비교를 통해 true가 나오고 Object Identity하다.\n또한 System.identityHashCode 메소드를 확인하면 둘의 참조값이 같은것을 볼수있다.")]),t._v(" "),a("p",[t._v('반면 str2와 str1은 각자 따로 new 연산자로 생성이 되었기때문에 다른 객체로써 힙에 따로 할당된것이다. 그렇기에 "=="연산의 결과가 false로 나온다.')]),t._v(" "),t._m(19),t._v(" "),a("p",[a("a",{attrs:{href:"http://asfirstalways.tistory.com/160?category=660807",target:"_blank",rel:"noopener noreferrer"}},[t._v("자바에서 변수와 메소드에 대하여 / 클래스 메소드, 클래스 변수 posted by Jbee"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wikidocs.net/214",target:"_blank",rel:"noopener noreferrer"}},[t._v("점프 투 자바 05장"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://web.mit.edu/6.005/www/fa15/classes/15-equality/",target:"_blank",rel:"noopener noreferrer"}},[t._v('MIT "Software Conversation" Course 강의자료 15'),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=lcPfxmn0otA&t=7151s",target:"_blank",rel:"noopener noreferrer"}},[t._v("케빈님의 유튜브 Java: 그가 final로 도배 하는 이유 / 컴파일러 너 내 String 어떻게 했어?! 영상"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class","aria-hidden":"true"}},[this._v("#")]),this._v(" Class")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"자바에서의-클래스를-살펴보자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자바에서의-클래스를-살펴보자","aria-hidden":"true"}},[this._v("#")]),this._v(" 자바에서의 클래스를 살펴보자.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("클래스 작성")])]),t._v(" "),a("li",[a("p",[t._v("객체 생성 및 사용")])]),t._v(" "),a("li",[a("p",[t._v("객체 생성과정 이해하기")])]),t._v(" "),a("li",[a("p",[t._v("상속하기")])]),t._v(" "),a("li",[a("p",[t._v("추상 클래스")])]),t._v(" "),a("li")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"클래스-작성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#클래스-작성","aria-hidden":"true"}},[this._v("#")]),this._v(" 클래스 작성")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Car")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 인스턴스 변수 정의 및 접근 제어자 설명")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String color"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// public: 어떤 클래스내에서라도 접근이 가능함")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// private: 해당 클래스내에서만 접근이 가능함")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" price"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// protected: 동일 패키지에 속하는 클래스와 하위 클래스에서 접근 가능함")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isfire"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("// default: 동일 클래스, 동일 패키지내에서 접근 가능함.")]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("// static 변수 정의")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" String country "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"korea"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// static 특징")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 인스턴스들간에 공통적으로 사용해야하는 값의 경우 유용")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 클래스가 메모리에 올라갈때 자동적으로 생성되므로 인스턴스를 생성하지않더라도 사용가능함.")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 메소드내에서 인스턴스 변수를 사용하지않는다면 static으로 메소드를 선언하는 것이 메소드 호출시간이 짧아진다.")]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 생성자 정의")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Car")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String c"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 리턴타입을 정의하지 않는다.")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 클래스명과 생성자 메소드명은 동일하다.")]),t._v("\n        color "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        price "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("// setter")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("// getter")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" String "),a("span",{attrs:{class:"token function"}},[t._v("getName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("// static 메소드")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Hello")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{attrs:{class:"token comment"}},[t._v("//  System.out.println(isfire); // error code. static 메소드는 인스턴스 변수에 접근할수없다.")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"객체-생성-및-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#객체-생성-및-사용","aria-hidden":"true"}},[this._v("#")]),this._v(" 객체 생성 및 사용")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Car mycar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Car")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Car : 클래스로 생성한 사용자 데이터 타입")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// mycar : Car 데이터타입으로 선언한 변수")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// new : 메모리를 생성하는 연산자")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Car() : 메모리 생성후 초기화 작업을 담당하는 생성자 ")]),t._v("\n\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mycar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 2000")]),t._v("\n\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mycar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Blue")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v('// mycar.name = "BMW"; // error code. because name is private  ')]),t._v("\n\nmycar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"BMW"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mycar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("// BMW ")]),t._v("\n\nmycar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isfire "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" mycar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isfire "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"BMW is Fire!!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// BMW is Fire!!")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"객체-생성-과정-이해하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#객체-생성-과정-이해하기","aria-hidden":"true"}},[this._v("#")]),this._v(" 객체 생성 과정 이해하기")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Car mycar;\nmycar = new Car();\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("자바의 "),s("strong",[this._v("new 연산자")]),this._v("는 메모리를 생성한다음 메모리 주소의 참조값을 객체변수 mycar에 할당한다. 생성자 메소드는 생성된 메모리의 초기화 작업 진행한다.\n즉 모든 객체변수는 참조값을 갖게된다. 주의할점은 포인터가 아니라 참조값(Reference)이라는것이다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Car mycar = new Car();\nCar mycar2 = mycar;\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"상속하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상속하기","aria-hidden":"true"}},[this._v("#")]),this._v(" 상속하기")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Bmw")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Car")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// class 자식클래스 extends 부모클래스")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"추상-클래스-abstract-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추상-클래스-abstract-class","aria-hidden":"true"}},[this._v("#")]),this._v(" 추상 클래스 ( Abstract Class )")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// 추상클래스의 작성 \nabstract class 클래스이름 {\n    abstract 메소드선언; // ex) public abstract void hello();\n    abstract 메소드 선언;\n}\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("추상 클래스는 미완성 클래스이기때문에 객체를 생성하지못한다. 추상 클래스는 객체가 가지는 특성들을 추상화시켜놓았을뿐, 아직 구체화되지못한 클래스이므로, 이 추상클래스를 상속하는 하위클래스에서 구체화시키도록하는 방법을 사용한다. 주의할점은 자식클래스가 상속을 받고 추상메소드를 하나라도 남겨놓았다면 자식클래스도 추상클래스가 된다")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"object-identity-vs-object-equality"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-identity-vs-object-equality","aria-hidden":"true"}},[this._v("#")]),this._v(" Object Identity vs Object Equality")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String str1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nString str2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nString str3 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str1"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1 "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" str2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pringln")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1 "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" str3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("equals")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("identityHashCode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => 0001 ( ** 편의를 위해 출력되는 값을 단순화하겠다)")]),t._v("\n\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("identityHashCode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => 0002")]),t._v("\n\nSystem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("identityHashCode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => 0001")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("본론으로 들어가서 위의 코드를 보자면\nstr1과 str2는 new 연산자를 이용하였기에 힙영역에 str1과 str2이 다른 객체로써 따로 저장이 된다."),s("br"),this._v("\nstr3는 Shallow copy되어 str1과 같은 참조값을 갖게된다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);