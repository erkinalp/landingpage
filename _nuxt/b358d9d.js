(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{295:function(t,n,r){var content=r(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("1b9c5a20",content,!0,{sourceMap:!1})},309:function(t,n,r){"use strict";r(295)},310:function(t,n,r){var e=r(39)(!1);e.push([t.i,"#announcement{padding:5rem 2rem 0}",""]),t.exports=e},330:function(t,n,r){"use strict";r.r(n);var e=r(9),o=(r(50),r(16),r(93),{data:function(){return{stars:0}},fetch:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.github.com/repos/fosscord/fosscord");case 2:return r=n.sent,n.next=5,r.json();case 5:r=n.sent,t.stars=r.stargazers_count;case 7:case"end":return n.stop()}}),n)})))()}))}),c=o,l=(r(309),r(15)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("section",{attrs:{id:"announcement"}},[r("div",{staticClass:"container px-xl-0"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-xl-12 col-lg-8 col-md-9 mt-4 mt-md-0 text-center",attrs:{id:"section_content"}},[r("h2",{staticClass:"small"},[t._v("\n          Thanks for "),r("span",{staticClass:"fg-fosscord"},[t._v(t._s(t.stars))]),t._v(" Github\n          stars!\n        ")]),t._v(" "),r("div",{staticClass:"description"},[r("div",[t._v("\n            Fosscord has reached "+t._s(t.stars)+" stars on Github in such a short\n            time. "),r("br"),t._v("Thanks to you.\n          ")])]),t._v(" "),r("a",{staticClass:"btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1",attrs:{href:"https://github.com/fosscord/fosscord",target:"_blank",id:"button_"}},[t._v("Github")])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);