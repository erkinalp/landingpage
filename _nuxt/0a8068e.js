(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,6,8,15],{294:function(t,e,o){var content=o(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("9bbe1f80",content,!0,{sourceMap:!1})},295:function(t,e,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("1b9c5a20",content,!0,{sourceMap:!1})},296:function(t,e,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("399c219f",content,!0,{sourceMap:!1})},305:function(t,e,o){"use strict";o(294)},306:function(t,e,o){var n=o(39),r=o(307),c=o(308),l=n(!1),d=r(c);l.push([t.i,"#mockup{height:33vh;margin-top:4rem}#open_demo{z-index:1;position:relative}#waves{display:none;height:25vh;width:100vw;background-color:var(--background-color-accent);-webkit-mask-image:url("+d+");-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:cover;mask-image:url("+d+");mask-position:center;mask-size:cover;mask-repeat:no-repeat;margin-top:-13rem}#features{display:flex;flex-wrap:wrap;align-content:flex-start;z-index:1;margin-top:1rem}#features>*{margin:.25rem;background:#fff;color:var(--background-color);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:35px;font-size:1rem;border-radius:50px;font-weight:700;padding:5px 8px;line-height:1.5}#hero_container{padding-bottom:5rem;background:var(--background-color);color:#fff}#hero,#hero_container{height:100%;display:flex;flex-direction:column}#hero{flex-grow:1;text-align:center;margin-top:9rem}#hero_container #nav .link{color:#fff}@media screen and (max-width:600px){#hero{padding-top:0}#waves{visibility:hidden}#features>*{width:160px;font-size:.9rem;height:27px;padding:3px 5px}}",""]),t.exports=l},307:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},308:function(t,e,o){t.exports=o.p+"img/waves.45d7c7f.svg"},309:function(t,e,o){"use strict";o(295)},310:function(t,e,o){var n=o(39)(!1);n.push([t.i,"#announcement{padding:5rem 2rem 0}",""]),t.exports=n},311:function(t,e,o){"use strict";o(296)},312:function(t,e,o){var n=o(39)(!1);n.push([t.i,'.features[data-v-ed56b462]{display:flex;flex-wrap:wrap;justify-content:space-around}.feature[data-v-ed56b462]{width:max(30%,500px);padding:30px;margin:30px;background-color:rgba(0,0,0,.5);border-radius:5px;position:relative;display:flex;flex-direction:column}.feature .moreInfo[data-v-ed56b462]{margin-top:auto}.done[data-v-ed56b462]:after{content:"\\2713";font-size:5rem;top:0;right:2rem}.done[data-v-ed56b462]:after,.incomplete[data-v-ed56b462]:after{color:#db182f;font-weight:bolder;position:absolute;transform:rotate(20deg)}.incomplete[data-v-ed56b462]:after{content:"*";font-size:7.5rem;top:1rem;right:2.5rem}',""]),t.exports=n},322:function(t,e,o){"use strict";o.r(e);var n=o(9),r=(o(50),o(16),o(93),{data:function(){return{stars:0}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/fosscord/fosscord");case 2:return o=e.sent,e.next=5,o.json();case 5:o=e.sent,t.stars=o.stargazers_count;case 7:case"end":return e.stop()}}),e)})))()}))}),c=r,l=(o(309),o(15)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"announcement"}},[o("div",{staticClass:"container px-xl-0"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-xl-12 col-lg-8 col-md-9 mt-4 mt-md-0 text-center",attrs:{id:"section_content"}},[o("h2",{staticClass:"small"},[t._v("\n          Thanks for "),o("span",{staticClass:"fg-fosscord"},[t._v(t._s(t.stars))]),t._v(" Github\n          stars!\n        ")]),t._v(" "),o("div",{staticClass:"description"},[o("div",[t._v("\n            Fosscord has reached "+t._s(t.stars)+" stars on Github in such a short\n            time. "),o("br"),t._v("Thanks to you.\n          ")])]),t._v(" "),o("a",{staticClass:"btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1",attrs:{href:"https://github.com/fosscord/fosscord",target:"_blank",id:"button_"}},[t._v("Github")])])])])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,o){"use strict";o.r(e);o(305);var n=o(15),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"hero_container"}},[o("section",{staticClass:"container",attrs:{id:"hero"}},[o("h2",{attrs:{id:"main_header"}},[t._v("\n        Fosscord\n      ")]),t._v(" "),o("span",{attrs:{id:"main_header_sub"}},[t._v("For better and secure communication")]),t._v(" "),o("div",{staticStyle:{"margin-top":"2rem"}},[o("a",{staticClass:"btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1",attrs:{id:"open_demo",href:"https://staging.fosscord.com"}},[t._v("Open Demo")])])])]),t._v(" "),o("div",{attrs:{id:"waves"}})])}],!1,null,null,null);e.default=component.exports},325:function(t,e,o){"use strict";o.r(e);var n=o(15),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"padding-top":"5rem"}},[o("h2",{staticStyle:{"text-align":"center"}},[t._v("What is Fosscord?")]),t._v(" "),o("div",{staticClass:"description",staticStyle:{width:"50%",margin:"0 auto 0 auto","text-align":"center"}},[o("p",[t._v("Fosscord is a Discord server reimplementation and extension. ")]),t._v(" "),o("p",[t._v("\n\t\t\tEssentially, we provide all the functions and services that Discord does, which allows software built\n\t\t\tfor Discord such as clients, bots, and other applications to work seemlessly with Fosscord. We also\n\t\t\timplement custom server features to enhance the experience and provide additional functionality.\n\t\t")]),t._v(" "),o("p",[t._v("\n\t\t\tWhat this means for you is that you can continue to use the programs you're already familiar with, all\n\t\t\twhile using a safe, privacy focused platform to chat with friends which "),o("i",[t._v("you")]),t._v(" control.")]),t._v(" "),o("p",[o("b",{staticStyle:{display:"block"}},[t._v("It does "),o("u",[t._v("not")]),t._v(" mean that users of Fosscord can interact with users of Discord.")]),t._v("\n\t\t\tWe are entirely separate platforms, and your Fosscord account cannot be used to interact with Discord. In the future, we\n\t\t\thope to develop our own clients and tools to allow you to use multiple accounts at the same time, but\n\t\t\tthis is not yet being worked on.\n\t\t")])])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,o){"use strict";o.r(e);o(311);var n=o(15),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"padding-top":"5rem"}},[o("h2",{staticStyle:{"text-align":"center"}},[t._v("Features")]),t._v(" "),o("div",{staticClass:"features-wrapper"},[o("div",{staticClass:"features"},[o("div",{staticClass:"feature done"},[o("h3",[t._v("Free and Open Source")]),t._v(" "),o("p",[t._v("\n\t\t\t\t\tWe believe the best way to make software is through easy and open public contribution.\n\t\t\t\t\tFosscord is 100% open source, and is licensed under the\n\t\t\t\t\t"),o("a",{attrs:{href:"https://www.gnu.org/licenses/agpl-3.0.html"}},[t._v("GNU Affero General Public License v3.0")])]),t._v(" "),o("a",{staticClass:"moreInfo",attrs:{href:"https://github.com/Fosscord/fosscord-server"}},[t._v("Github")])]),t._v(" "),o("div",{staticClass:"feature done"},[o("h3",[t._v("Configurable")]),t._v(" "),o("p",[t._v("\n\t\t\t\t\tFosscord has a large number of configurable values to determine every aspect of how your\n\t\t\t\t\tinstance operates. If an option you need doesn't exist, you do always have the option to simply\n\t\t\t\t\tedit the source too!\n\t\t\t\t")]),t._v(" "),o("a",{staticClass:"moreInfo",attrs:{href:"https://docs.fosscord.com/server/configuration/"}},[t._v("Configuration documentation")])]),t._v(" "),o("div",{staticClass:"feature done"},[o("h3",[t._v("Many supported DB engines")]),t._v(" "),o("p",[t._v("\n\t\t\t\t\tInstance owners have complete control over which DBMS software they use as a backend to\n\t\t\t\t\tFosscord.\n\t\t\t\t")]),t._v(" "),o("a",{staticClass:"moreInfo",attrs:{href:"https://docs.fosscord.com/server/database/"}},[t._v("Database documentation")])]),t._v(" "),o("div",{staticClass:"feature done"},[o("h3",[t._v("Security")]),t._v(" "),o("p",[t._v("\n\t\t\t\t\tFosscord has a number of security features built in, such as instance-wide user rights.\n\t\t\t\t\tRights are kind of like guild member permissions, except for the entire instance,\n\t\t\t\t\tfor example the right to send messages or to create bot accounts.\n\t\t\t\t")]),t._v(" "),o("a",{staticClass:"moreInfo",attrs:{href:"https://docs.fosscord.com/api/rights/"}},[t._v("Rights documentation")])]),t._v(" "),o("div",{staticClass:"feature incomplete"},[o("h3",[t._v("E2E Encryption")]),t._v(" "),o("p",[t._v("We believe communication should be private. End to End Encryption is a planned, core feature of\n\t\t\t\t\tFosscord, and will allow users to truly trust that their privacy, and private information is\n\t\t\t\t\tkept from prying eyes. It should be noted that, without client support for this feature, you\n\t\t\t\t\twill be unable to send/receive encrypted messages.\n\t\t\t\t")]),t._v(" "),o("a",{staticClass:"moreInfo",attrs:{href:"https://github.com/fosscord/fosscord-server/issues/322"}},[t._v("Tracker")])]),t._v(" "),o("div",{staticClass:"feature incomplete"},[o("h3",[t._v("Discord.com Compatibility")]),t._v(" "),o("p",[t._v("Fosscord aims to be 100% compatible with existing discord.com clients, bots, and other services,\n\t\t\t\t\tas well as any that appear in the future. This allows a smooth transition from Discord.com to a\n\t\t\t\t\tFosscord instance. With this goal also comes complete feature parity between Discord.com and\n\t\t\t\t\tFosscord. We aim to have all Discord.com features implemented within Fosscord, as well as\n\t\t\t\t\tadditional\n\t\t\t\t\tfeatures and configurability given to our users.")])]),t._v(" "),o("div",{staticClass:"feature incomplete"},[o("h3",[t._v("Server Plugins")]),t._v(" "),o("p",[t._v("Through Fosscord server plugins, instance owners will be able to easily extend and add new\n\t\t\t\t\tfeatures to their instances.\n\t\t\t\t")]),t._v(" "),o("a",{staticClass:"moreInfo",attrs:{href:"https://github.com/fosscord/fosscord-server/pull/837"}},[t._v("Tracker")])]),t._v(" "),o("div",{staticClass:"feature incomplete"},[o("h3",[t._v("Voice and Video")]),t._v(" "),o("p",[t._v("Voice and Video support on Fosscord is in active development, but may take a while longer.")]),t._v(" "),o("a",{staticClass:"moreInfo",attrs:{href:"https://github.com/fosscord/fosscord-server/pull/472"}},[t._v("Tracker")])]),t._v(" "),o("div",{staticClass:"feature"},[o("h3",[t._v("Much more!")]),t._v(" "),o("p",[t._v("This is "),o("i",[t._v("by no means")]),t._v(" a complete list of features, planned or completed, that the team\n\t\t\t\t\tbehind\n\t\t\t\t\tFosscord wishes to implement. We already have a large number of features implemented and working\n\t\t\t\t\tusing existing discord.com clients, and have no plans on stopping.")])])])])])}],!1,null,"ed56b462",null);e.default=component.exports},345:function(t,e,o){"use strict";o.r(e);var n={},r=o(15),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"full_size"},[o("hero"),t._v(" "),o("announcement"),t._v(" "),o("what"),t._v(" "),o("features"),t._v(" "),o("callToAction")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:o(324).default,Announcement:o(322).default,What:o(325).default,Features:o(326).default})}}]);