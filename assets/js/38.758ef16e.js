(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{181:function(e,s,a){"use strict";a.r(s);var t=a(14),r=Object(t.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress로-블로그-기능-적용중-삽질중1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress로-블로그-기능-적용중-삽질중1","aria-hidden":"true"}},[e._v("#")]),e._v(" vuepress로 블로그 기능 적용중!(삽질중1)")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("아무말 포스트")])]),e._v(" "),a("h2",{attrs:{id:"_0-vuepress-official-blog-plugin-적용해볼까"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-vuepress-official-blog-plugin-적용해볼까","aria-hidden":"true"}},[e._v("#")]),e._v(" 0. vuepress official blog plugin 적용해볼까..?")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/vuepress-blog.png",alt:""}})]),e._v(" "),a("p",[e._v("처음에는 최대한 vuepress의 기본 기능/플러그인을 이용하고싶었지만, blog plugin의 사용법에 대한 문서자체가 거의 없다시피해서 포기하였다..")]),e._v(" "),a("p",[e._v("플러그인의 소스코드와 깃헙 이슈를 열심히 분석하면서 삽질하였지만.... 그냥 stable 업데이트될때 문서가 나오길 기다려야겠다. 그동안은 자체적으로 제작해야지.")]),e._v(" "),a("h2",{attrs:{id:"_1-blogindex-컴퍼넌트-개발"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-blogindex-컴퍼넌트-개발","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. BlogIndex 컴퍼넌트 개발!")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://snipcart.com/blog/vuepress-tutorial-vuejs-documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("In-Depth VuePress Tutorial: Vue-Powered Docs & Blog"),a("OutboundLink")],1),e._v(" 자료를 보고 BlogIndex 컴퍼넌트는 만들었다!\n/blog/ 폴더의 md 파일을 날짜 순서로 정렬해서 화면에 보여줄수있다.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<BlogIndex />\n// '/blog/'폴더에 있는 포스트를 날짜 순서대로 화면에 띄워줌.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-더-개선된-방법-발견"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-더-개선된-방법-발견","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. 더 개선된 방법 발견!")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/@adam.collier/creating-a-blog-with-vuepress-44ec0fed9718",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a blog with Vuepress"),a("OutboundLink")],1),e._v("\nprops로 폴더이름을 넣을수있으니, 좀더 재사용성이 높은것같다! 주의해야할점은 README.md는 읽어주지않는것같다")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<Posts page=\"aws\">\n// '/aws/'폴더에 있는 포스트를 날짜 순서대로 화면에 띄워줌\n\n<Posts page=\"vuejs\">\n// '/vuejs/'폴더에 있는 포스트를 날짜 순서대로 화면에 띄워줌\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h2",{attrs:{id:"_3-이제-tag-category-기능만-구현하면-될것같다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-이제-tag-category-기능만-구현하면-될것같다","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. 이제 Tag, Category 기능만 구현하면 될것같다.")]),e._v(" "),a("p",[e._v("지금은 폴더로 주제를 구분시켜놓았지만.... 너무 불편한것같다.\nfront matter를 이용해서 좀더 편하게 해보자..!")]),e._v(" "),a("h2",{attrs:{id:"_4-글자크기-폰트는-언제-적용하지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-글자크기-폰트는-언제-적용하지","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. 글자크기, 폰트는 언제 적용하지..")]),e._v(" "),a("p",[e._v("흔해보여도 jekyll이나 medium,tistory,brunch같은거 쓰는게 가장 편하긴했겠네...\n뭐 이미 시작했는데 끝을 봐야지... 그냥 vuepress 테마 커스터마이징하는게 빠른 방법일려나...하...")]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("이 "),a("a",{attrs:{href:"https://ake.kr/2018/09/30/vuepress-blog-trial-and-error/#%EB%84%A4%EB%B2%88%EC%A7%B8-%EC%82%BD%EC%A7%88-github-pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress 블로그 삽질기 posted by AKE"),a("OutboundLink")],1),e._v(" 포스팅을 미리 봤었어야했넹... alpha30에도 힘든데 alpha0~1부터 시작한 이분은 얼마나 삽질을 하셨을까..")]),e._v(" "),a("h2",{attrs:{id:"_5-이제는-구글링해도-vuepress-자료가-거의-없다시피하네"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-이제는-구글링해도-vuepress-자료가-거의-없다시피하네","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. 이제는 구글링해도 vuepress 자료가 거의 없다시피하네.")]),e._v(" "),a("p",[e._v("다시 열심히 vuepress 소스코드 분석하고, 깃헙이슈나 모니터링해야겠다..\n그리고 theme 커스터마이징은 어쩔수없이 하긴해야할것같다. 오랜만에 vuejs 다시 복습해야겟네.")]),e._v(" "),a("TagLinks"),e._v(" "),a("Disqus")],1)},[],!1,null,null,null);r.options.__file="2018-12-25-블로그기능준비중.md";s.default=r.exports}}]);