(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{155:function(t,s,e){"use strict";e.r(s);var a={props:["page"],computed:{posts:function(){var t=this.$props.page;return console.log(this.$tags._metaMap[t].posts),this.$tags._metaMap[t].posts}}},o=e(2),r=Object(o.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.posts.length?e("div",{staticClass:"posts"},t._l(t.posts,function(s){return e("div",{staticClass:"post"},[e("router-link",{attrs:{to:s.path}},[e("div",[s.frontmatter.image?e("img",{attrs:{src:t.$withBase(s.frontmatter.image),alt:""}}):t._e()]),t._v(" "),e("h2",[t._v(t._s(s.frontmatter.title))]),t._v(" "),e("p",[t._v(t._s(s.frontmatter.description))])])],1)}),0):t._e()},[],!1,null,null,null);s.default=r.exports}}]);