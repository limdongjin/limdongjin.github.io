(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{212:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("알고리즘의 골격을 정해두고, 알고리즘 골격의 일부 스텝의 구현은 서브 클래스에서 오버라이드해서 재정의하도록 하는 디자인 패턴이다.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("알고리즘의 골격은 같지만, 각 스텝들의 구현이 달라지는 경우에 사용한다. 그래서 알고리즘의 골격을 변경하지 않고 다른 알고리즘을 구현할수있게된다.")]),t._v(" "),a("br"),t._v('\nTemplate Method Pattern은 프레임워크들의 내부 구현에 주로 사용된다. 도메인에 따라서 소프트웨어가 달라질수도 있으니 이런 도메인 영역을 "placeholder"로 놓는 식의 개념으로 구현되는것이다. 대표적인 예시로는 IOC가 있다.\n'),t._m(4),t._v(" "),a("p",[t._v("Template Method 패턴의 샘플 UML class Diagram 은 다음과 같은 모습를 갖는다.")]),t._v(" "),a("img",{attrs:{src:"/images/uml-template-pattern.jpg"}}),t._v(" "),a("p",[t._v('Base Class에는 templateMethod라는 메소드가 있는데, Template Method Pattern 에서 알고리즘의 골격을 나타내는 메소드를 "Template Method"라고 부른다. Base Class의 메소드인 "Template Method"에서 서브클래스에서 구현하게될 메소드들을 호출하면서 알고리즘의 골격을 정의하게 된다.')]),t._v(" "),a("br"),t._v(" \n피상속 클래스에서는 Base Class의 abstract 메소드를 오버라이딩하여 구현히게된다. \n"),t._m(5),t._v(" "),a("p",[t._v("유리집과 나무집을 만들어볼려한다. 만일 유리집과 나무집을 짓기위해 필요한 재료나 세부사항은 달라도 짓는 알고리즘의 골격이 같다면  Template Method Pattern을 적용하여 구현할수있다.")]),t._v(" "),a("br"),t._v(" "),t._m(6),t._v(" "),a("br"),t._v(" "),t._m(7),t._v(" "),a("br"),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Example에 대한 소스는 "),a("a",{attrs:{href:"https://github.com/limdongjin/design-patterns/tree/master/template-method-pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("limdongjin/design-patterns"),a("OutboundLink")],1),t._v(" 레포지토리에 에 저장하였다.")])]),t._v(" "),a("br"),t._v(" "),t._m(8),t._v(" "),a("img",{attrs:{src:"/images/uml-template-pattern-house.png"}}),t._v(" "),t._m(9),a("p",[t._v("Template Method는 buildHouse()인것을 확인할수있다. 또한 abstract 메소드들을 protected로 선언하여 서브클래스에서만 접근이 가능하게해야한다.")]),t._v(" "),t._m(10),t._m(11),a("p",[t._v("위와 같이 BuildWoodenHouseMethod 클래스와 BuildGlassHouseMethod 클래스가 구현이 된것을 볼수있다.\n우리는 이를 House 객체에 주입하는 방식으로 사용할수있다.")]),t._v(" "),t._m(12),t._m(13),a("p",[t._v("실행시켜보면 아래와 같이 콘솔에 잘 출력되는것을 볼수있다.")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[a("a",{attrs:{href:"https://dzone.com/articles/design-patterns-template-method",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dzone :: Template Method Pattern Tutorial with Java Examples"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.journaldev.com/1763/template-method-design-pattern-in-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("JournalDev :: Template Method Design Pattern in Java"),a("OutboundLink")],1)]),t._v(" "),t._m(16),t._v(" "),a("p",[a("a",{attrs:{href:"http://w3sdesign.com/?gr=b10&ugr=struct",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample UML image reference"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"template-method-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-method-pattern","aria-hidden":"true"}},[this._v("#")]),this._v(" Template Method Pattern")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"what-is-template-method-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-template-method-pattern","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Template Method Pattern")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("In software engineering, the template method pattern is a behavioral design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses. - Design Patterns: Elements of Reusable Object-Oriented Software")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"언제-template-method-pattern-을-주로-사용하는가-or-사용할수있는가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#언제-template-method-pattern-을-주로-사용하는가-or-사용할수있는가","aria-hidden":"true"}},[this._v("#")]),this._v(" 언제 Template Method Pattern 을 주로 사용하는가(or 사용할수있는가?)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"detail-of-template-method-patten"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detail-of-template-method-patten","aria-hidden":"true"}},[this._v("#")]),this._v(" Detail of Template Method Patten")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"example-build-house-using-template-method-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-build-house-using-template-method-pattern","aria-hidden":"true"}},[this._v("#")]),this._v(" Example :: Build House using Template Method Pattern")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("집 짓는 알고리즘의 골격 : 기반(Foundation)을 다지고, 기둥(Pillar)을 세우고, 벽(Wall)을 짓고, 창문(Window)을 붙인다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("기반(Foundation)을 다지고, 창문(Window)을 붙이는 과정은 나무집,유리집 모두 똑같다고 설정하겟다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("아래의 UML 다이어그램은 우리가 구현하게될 클래스간의 다이어그램이다.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* Base Class */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("BuildHouseMethod")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// template method")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildHouse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("buildFoundation")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("buildPillars")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("buildWalls")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("buildWindows")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildWindows")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Build Window!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildWalls")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildPillars")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildFoundation")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Building foundation with cement,iron rods and sand"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 나무집 짓는 클래스\npublic class BuildWoodenHouseMethod extends BuildHouseMethod {\n    @Override\n    protected void buildWalls() {\n        System.out.println("Build Wooden Walls!");\n    }\n\n    @Override\n    protected void buildPillars() {\n        System.out.println("Build Wooden Pillars!");\n    }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 유리집 짓는 클래스\npublic class BuildGlassHouseMethod extends BuildHouseMethod {\n    @Override\n    protected void buildWalls() {\n        System.out.println("Build Glass Walls!!");\n    }\n\n    @Override\n    protected void buildPillars() {\n        System.out.println("Build Glass Pillars!");\n    }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 위의 집 짓는 객체를 House 객체에 주입하는 방식을 사용하였다.\npublic class House {\n    private BuildHouseMethod build_method;\n\n    public House(BuildHouseMethod build_method) {\n        this.build_method = build_method;\n    }\n\n    public void build(){\n        build_method.buildHouse();\n    }\n\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 실행 시키기위한 클래스\npublic class App {\n    public static void main(String[] args) {\n        House glassHouse = new House(new BuildGlassHouseMethod());\n        glassHouse.build();\n\n        House woodenHouse = new House(new BuildWoodenHouseMethod());\n        woodenHouse.build();\n    }\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// output\nBuilding foundation with cement,iron rods and sand\nBuild Glass Pillars!\nBuild Glass Walls!!\nBuild Window!\nBuilding foundation with cement,iron rods and sand\nBuild Wooden Pillars!\nBuild Wooden Walls!\nBuild Window!\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"#"}},[this._v('Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John (1994). "Template Method". Design Patterns. Addison-Wesley. ')])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);