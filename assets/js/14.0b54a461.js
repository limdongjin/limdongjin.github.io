(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{188:function(n,s,a){"use strict";a.r(s);var e=a(14),t=Object(e.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"aws-elastic-beanstalk의-ebextensions-설정을-해보자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-elastic-beanstalk의-ebextensions-설정을-해보자","aria-hidden":"true"}},[n._v("#")]),n._v(" AWS Elastic Beanstalk의 ebextensions 설정을 해보자!")]),n._v(" "),a("h2",{attrs:{id:"_01-nginx-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-nginx-config","aria-hidden":"true"}},[n._v("#")]),n._v(" "),a("code",[n._v("01_nginx.config")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('files:\n  "/etc/nginx/conf.d/01_proxy.conf":\n    mode: "000644"\n    owner: root\n    group: root\n    content: |\n      client_max_body_size 20M;\n\n  "/etc/nginx/conf.d/02_app_server.conf":\n    mode: "000644"\n    owner: root\n    group: root\n    content: |\n      # The content of this file is based on the content of /etc/nginx/conf.d/webapp_healthd.conf\n\n      # Change the name of the upstream because it can\'t have the same name\n      # as the one defined by default in /etc/nginx/conf.d/webapp_healthd.conf\n      upstream new_upstream_name {\n        server unix:///var/run/puma/my_app.sock;\n      }\n\n      # Change the name of the log_format because it can\'t have the same name\n      # as the one defined by default in /etc/nginx/conf.d/webapp_healthd.conf\n      log_format new_log_name_healthd \'$msec"$uri"\'\n                      \'$status"$request_time"$upstream_response_time"\'\n                      \'$http_x_forwarded_for\';\n\n      server {\n        listen 80;\n        server_name domainname.com; ### 여기에 도메인 이름을 적도록 하자!!  \n\n        if ($time_iso8601 ~ "^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2})") {\n          set $year $1;\n          set $month $2;\n          set $day $3;\n          set $hour $4;\n        }\n\n        access_log  /var/log/nginx/access.log  main;\n        # Match the name of log_format directive which is defined above\n        access_log /var/log/nginx/healthd/application.log.$year-$month-$day-$hour new_log_name_healthd;\n\n        location / {\n          ####### if ( http 요청을 https로 redirect 시키고 싶다면 ) do #####\n          set $redirect 0;\n          if ($http_x_forwarded_proto != "https") {\n            set $redirect 1;\n          }\n          if ($http_user_agent ~* "ELB-HealthChecker") {\n            set $redirect 0;\n          }\n          if ($redirect = 1) {\n            return 301 https://$host$request_uri;\n          }\n          ######## end ##################################################\n          proxy_pass http://my_app; # match the name of upstream directive which is defined above\n          proxy_set_header Host $host;\n          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        }\n\n        location /assets {\n          alias /var/app/current/public/assets;\n          gzip_static on;\n          gzip on;\n          expires max;\n          add_header Cache-Control public;\n        }\n\n        location /public {\n          alias /var/app/current/public;\n          gzip_static on;\n          gzip on;\n          expires max;\n          add_header Cache-Control public;\n        }\n\n        location /files {\n          alias /var/app/current/public/ridiculously/long/path/to/files;\n          gzip_static on;\n          gzip on;\n          expires max;\n          add_header Cache-Control public;\n        }\n      }\n\ncontainer_commands:\n  01_reload_nginx:\n    command: "sudo service nginx reload"\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br")])]),a("h2",{attrs:{id:"ebextension-설정-관련-유용한-자료들"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ebextension-설정-관련-유용한-자료들","aria-hidden":"true"}},[n._v("#")]),n._v(" Ebextension 설정 관련 유용한 자료들")]),n._v(" "),a("p",[a("a",{attrs:{href:"http://woowabros.github.io/woowabros/2017/08/07/ebextension.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Elastic Beanstalk Configuration files posted by 우아한형제들 기술블로그"),a("OutboundLink")],1)]),n._v(" "),a("ClientOnly",[a("Disqus")],1)],1)},[],!1,null,null,null);t.options.__file="README.md";s.default=t.exports}}]);