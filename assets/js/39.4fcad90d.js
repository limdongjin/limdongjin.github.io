(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{183:function(a,s,n){"use strict";n.r(s);var t=n(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"get-started-spring-mvc-with-intellij-idea-and-gradle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-started-spring-mvc-with-intellij-idea-and-gradle","aria-hidden":"true"}},[a._v("#")]),a._v(" Get Started Spring MVC with "),n("strong",[a._v("Intellij IDEA")]),a._v(" and "),n("strong",[a._v("Gradle")])]),a._v(" "),n("p",[a._v("인텔리제이에서 스프링 MVC를 초기설정하고\nHello World를 페이지에 띄우는 튜토리얼이다.")]),a._v(" "),n("p",[a._v("그리고 Gradle을 이용하여 의존성관리를 할것이며 Tomcat을 사용할것.")]),a._v(" "),n("p",[a._v("XML Based Configuration을 사용할것.")]),a._v(" "),n("h2",{attrs:{id:"create-intellij-gradle-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-intellij-gradle-project","aria-hidden":"true"}},[a._v("#")]),a._v(" create Intellij Gradle project")]),a._v(" "),n("p",[a._v("Check "),n("strong",[a._v("java")]),a._v(" and "),n("strong",[a._v("web")]),a._v(".")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/spring-gradle.png",alt:""}})]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/spring-gradle2.png",alt:""}})]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/spring-gradle3.png",alt:""}})]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/spring-gradle4.png",alt:""}})]),a._v(" "),n("h2",{attrs:{id:"build-gradle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#build-gradle","aria-hidden":"true"}},[a._v("#")]),a._v(" build.gradle")]),a._v(" "),n("p",[a._v("본인이 사용하고싶은 버전에 따라서 해당 코드를 적절하게 수정하면된다.")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("plugins {\n    id 'java'\n    id 'war'\n}\n\napply plugin: 'war'\n\ngroup 'com.dongjin'\nversion '1.0-SNAPSHOT'\n\nsourceCompatibility = 1.8\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    testCompile group: 'junit', name: 'junit', version: '4.11'\n    testCompile group: 'junit', name: 'junit', version: '4.12'\n    providedCompile 'javax.servlet:servlet-api:2.5'\n    compile 'org.springframework:spring-webmvc:4.3.18.RELEASE'\n    runtime 'javax.servlet:jstl:1.1.2'\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br")])]),n("h2",{attrs:{id:"src-main-webapp-web-inf-web-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#src-main-webapp-web-inf-web-xml","aria-hidden":"true"}},[a._v("#")]),a._v(" src/main/webapp/WEB-INF/web.xml")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mkdir src/main/webapp/WEB-INF\ntouch src/main/webapp/WEB-INF/web.xml\ntouch src/main/webapp/WEB-INF/dispatcher-servlet.xml\ntouch src/main/webapp/WEB-INF/applicationContext.xml\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[n("strong",[a._v("web.xml")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<?xml version="1.0" encoding="UTF-8"?>\n<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\n         version="4.0">\n    <context-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>/WEB-INF/applicationContext.xml</param-value>\n    </context-param>\n    <listener>\n        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>\n    </listener>\n\n    <servlet>\n        <servlet-name>dispatcher</servlet-name>\n        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n        <init-param>\n            <param-name>contextConfigLocation</param-name>\n            <param-value>/WEB-INF/dispatcher-servlet.xml</param-value>\n        </init-param>\n        <load-on-startup>1</load-on-startup>\n    </servlet>\n    <servlet-mapping>\n        <servlet-name>dispatcher</servlet-name>\n        <url-pattern>/</url-pattern>\n    </servlet-mapping>\n\n</web-app>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br")])]),n("p",[n("strong",[a._v("dispatcher-servlet.xml")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:mvc="http://www.springframework.org/schema/mvc"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd">\n    <mvc:annotation-driven />\n    <context:component-scan base-package="com.yourpackagename.controller" />\n    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">\n        <property name="prefix" value="/WEB-INF/view/"></property>\n        <property name="suffix" value=".jsp"></property>\n    </bean>\n</beans>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br")])]),n("p",[n("strong",[a._v("applicationContext.xml")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n</beans>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("h2",{attrs:{id:"src-main-java-com-yourpackagename-controller-homecontroller-java"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#src-main-java-com-yourpackagename-controller-homecontroller-java","aria-hidden":"true"}},[a._v("#")]),a._v(" src/main/java/com/yourpackagename/controller/HomeController.java")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mkdir src/main/java/com/yourpackagename/controller/\ntouch src/main/java/com/yourpackagename/controller/HomeController.java\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('package com.yourpackagename.controller;\n\nimport org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.web.bind.annotation.RequestMapping;\n\n@Controller\npublic class HomeController {\n    @RequestMapping(value = "/")\n    public String hello(Model model){\n        model.addAttribute("msg", "Hello World!");\n        return "index";\n    }\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("h2",{attrs:{id:"views"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#views","aria-hidden":"true"}},[a._v("#")]),a._v(" Views")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mkdir src/main/webapp/WEB-INF/view\nmv src/main/webapp/index.jsp src/main/webapp/WEB-INF/view/index.jsp\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- index.jsp --\x3e")]),a._v('\n<%--\n  Created by IntelliJ IDEA.\n  User: imdongjin\n  Date: 25/10/2018\n  Time: 4:57 AM\n  To change this template use File | Settings | File Templates.\n--%>\n<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n'),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[a._v("<")]),a._v("html")]),n("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[a._v("<")]),a._v("head")]),n("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[a._v("<")]),a._v("title")]),n("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Hello"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[a._v("</")]),a._v("title")]),n("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[a._v("</")]),a._v("head")]),n("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[a._v("<")]),a._v("body")]),n("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    ${msg}\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[a._v("</")]),a._v("body")]),n("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[a._v("</")]),a._v("html")]),n("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br")])]),n("h2",{attrs:{id:"configuration-for-tomcat-run"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-for-tomcat-run","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuration for Tomcat Run")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/edit-configuration.png",alt:""}})]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/edit-configuration2.png",alt:""}})]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/edit-configuration3.png",alt:""}})]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/edit-configuration4.png",alt:""}})]),a._v(" "),n("h2",{attrs:{id:"configuration-intellij-setting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-intellij-setting","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuration Intellij Setting")]),a._v(" "),n("p",[a._v('Check "Enable Annotation Processing"')]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/annotation-check.png",alt:""}})]),a._v(" "),n("p",[a._v('Uncheck "Delegate IDE build/run actions to gradle"')]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/gradle-setting.png",alt:""}})]),a._v(" "),n("h2",{attrs:{id:"run-success"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-success","aria-hidden":"true"}},[a._v("#")]),a._v(" Run! Success!")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/run.png",alt:""}})])])}],!1,null,null,null);e.options.__file="start-with-gradle-xml.md";s.default=e.exports}}]);