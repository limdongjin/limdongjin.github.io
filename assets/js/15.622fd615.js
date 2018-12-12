(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{199:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._m(5),e._m(6),e._v(" "),n("p",[e._v("Index를 처음 생성할때 settings에 형태소 분석기를 설정해주면 된다\n(AWS Elasticsearch Service는 seunjeon 형태소 분석기를 지원한다.)")]),e._v(" "),e._m(7),e._m(8),e._v(" "),n("p",[n("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/elasticsearch-service/latest/developerguide/es-ac.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Elasticsearch Service 개발자문서 - 액세스 제어 파트"),n("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"elasticsearch-팁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-팁","aria-hidden":"true"}},[this._v("#")]),this._v(" Elasticsearch 팁")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"date-detection으로-에러가-난다면"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date-detection으로-에러가-난다면","aria-hidden":"true"}},[this._v("#")]),this._v(" date_detection으로 에러가 난다면?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('PUT /mymyindex\n{\n    "mappings": {\n        "mymytype": {\n            "date_detection": false\n        }\n    }\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"aws-elasticsearch-service-액세스-정책-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-elasticsearch-service-액세스-정책-설정","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS Elasticsearch Service 액세스 정책 설정")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('// elasticsearch + kibana + cognito 조합 (1)\n// 주의할점: 해당 정책은 cognito를 통해 가입된 유저들은 Elasticsearch에 DELETE, PUT 등의 액션을 수행할수있다.\n\n{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::xxxxx:user/도메인이름"\n      },\n      "Action": "es:*",\n      "Resource": "arn:aws:iam::xxxxx:user/도메인이름"\n    },\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::xxxxx:role/Cognito_xxxAuth_Role"\n      },\n      "Action": "es:ESHttp*",\n      "Resource": "arn:aws:es:ap-northeast-2:xxxxx:domain/도메인이름/*"\n    }\n  ]\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('// elasticsearch + kibana + cognito 조합 (2)\n// cognito 유저들이 ReadOnly로 접근했으면 좋겠다면 해당 정책을 사용하자\n\n{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::xxxxx:user/도메일이름"\n      },\n      "Action": "es:*",\n      "Resource": "arn:aws:iam::xxxxx:user/도메일이름"\n    },\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::xxxxx:role/Cognito_xxxAuth_Role"\n      },\n      "Action": [ "es:ESHttpGet", "es:ESHttpPost", "es:ESHttpHead" ],\n      "Resource": "arn:aws:es:ap-northeast-2:xxxxx:domain/도메인이름/*"\n    }\n  ]\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"aws-elasticsearch-service-한글-형태소-분석기-붙이기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-elasticsearch-service-한글-형태소-분석기-붙이기","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS Elasticsearch Service 한글 형태소 분석기 붙이기")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("{'settings': \n     {'index': \n          {'analysis': \n               {'analyzer': \n                    {'korean': \n                         {\n                             'type': 'custom', \n                             'tokenizer': 'seunjeon_default_tokenizer'\n                          }\n                     }, \n                'tokenizer': \n                    {'seunjeon_default_tokenizer': \n                         {\n                             'type': 'seunjeon_tokenizer', \n                             'index_eojeol': False, \n                             'user_words': ['헬로우', '호우']\n                         }\n                    }\n               }\n          }\n     }\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);s.options.__file="README.md";t.default=s.exports}}]);