(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{169:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Rails 웹 프로젝트를 배포를 하기위한 문서이다.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),e("p",[e("a",{attrs:{href:"https://hackernoon.com/how-to-set-up-a-rails-4-2-app-on-aws-with-elastic-beanstalk-and-postgresql-3f9f29c046e2",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to set up a Rails 4.2 app on AWS with Elastic Beanstalk and PostgreSQL posted by Julian Tescher"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.awsrails.com/rails-elastic-beanstalk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Deploy a Ruby on Rails Application to Elastic Beanstalk posted by Jason Swett"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://medium.com/ufofactory-org/rubyonrails-aws-elastic-beanstalk-setting-80181ae7b2ea",target:"_blank",rel:"noopener noreferrer"}},[t._v("(한글)RubyonRails AWS Elastic Beanstalk setting posted by ahntae"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"aws-elastic-beanstalk-for-rails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-elastic-beanstalk-for-rails","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS Elastic Beanstalk for Rails")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"aws-설정-for-elastic-beanstalk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-설정-for-elastic-beanstalk","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS 설정 for Elastic Beanstalk")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",{attrs:{start:"0"}},[e("li",[e("p",[t._v("AWS 로그인")])]),t._v(" "),e("li",[e("p",[t._v("IAM 생성")]),t._v(" "),e("p",[t._v("A. IAM 관리자 페이지 이동")]),t._v(" "),e("p",[t._v("B. 사용자(User) 메뉴 클릭")]),t._v(" "),e("p",[t._v("B-1. 만약 사용자가 생성이 되어있지않다면 다음 절차를 밟은다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n    1) 사용자 추가를 클릭\n    \n    2) AWS 액세스 유형을 프로그래밍 방식 액세스로 선택후 다음 단계 진행\n    \n    3) 권한 설정 : "기본 정책 직접 연결" 선택 및 정책 추가후 다음 단계 진행\n    \n         - AWSElasticBeanstalkFullAccess\n    \n    4) 반드시!!!! csv파일을 다운로드하여 저장하여야한다\n')])])]),e("p",[t._v("B-2. 만약 사용자가 존재하지만, 권한에 AWSElasticBeanstalkFullAccess 또는 ElasticBeanstalk 관련 권한이 존재하지 않는경우")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('  1) 해당 사용자를 클릭 \n  2) 권한 추가 버튼을 클릭\n  3) 권한 설정 : "기본 정책 직접 연결" 선택 및 정책 추가 및 계속 다음단계 진행후 완료\n')])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"rails-프로젝트-배포-with-elastic-beanstalk-1-초기-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-프로젝트-배포-with-elastic-beanstalk-1-초기-설정","aria-hidden":"true"}},[this._v("#")]),this._v(" Rails 프로젝트 배포 with Elastic Beanstalk  (1) 초기 설정")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('$ cd RailsProjectFolder \n  #rails 프로젝트 폴더로 이동한다.\n\n$ RAILS_ENV=production rake secret \n  #config/secrets.rb파일에 설정된 production의 secret_key_base가 설정이 안되어있다면, \n   해당 커맨드를 통해 생성된 값을 production의 secret_key_base에 붙여넣는다 \n   \n$ git add -A && git commit -m "eb init 1" \n  #Elastic Beanstalk은 git을 필요로 한다.\n\n$ eb init \n  # credential.csv에 저장되어있는, Acess Key ID 와 Secret Key를 순차적으로 입력한다.\n  \n# 필수 #\n.gitignore에 .elasticbeanstalk/ 폴더를 추가한다. \n')])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"rails-프로젝트-배포-with-elastic-beanstalk-2-배포-시작-완료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-프로젝트-배포-with-elastic-beanstalk-2-배포-시작-완료","aria-hidden":"true"}},[this._v("#")]),this._v(" Rails 프로젝트 배포 with Elastic Beanstalk  (2) 배포 시작! 완료!")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('$ git add -A && git commit -m "eb deploy start"\n  # .gitignore가 제대로 설정되어있는지 확인후 실행한다.\n$ eb create myfirstdeploy \n  # eb create <deploy_name>\n')])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"rails-elastic-beanstalk-관련-유용한-자료-모음"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-elastic-beanstalk-관련-유용한-자료-모음","aria-hidden":"true"}},[this._v("#")]),this._v(" Rails + Elastic Beanstalk 관련 유용한 자료 모음")])}],!1,null,null,null);n.options.__file="using_elasticbeanstalk.md";a.default=n.exports}}]);