"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[475],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=s(r),d=i,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,o(o({ref:e},c),{},{components:r})):n.createElement(g,o({ref:e},c))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[u]="string"==typeof t?t:i,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4068:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={id:"git-preuse",sidebar_position:3},o="Git \u9884\u5907\u77e5\u8bc6",p={unversionedId:"git/git-preuse",id:"git/git-preuse",title:"Git \u9884\u5907\u77e5\u8bc6",description:"\u5b66\u4e60Git\u524d\u7684\u9884\u5907\u77e5\u8bc6",source:"@site/docs/git/git-preuse.md",sourceDirName:"git",slug:"/git/git-preuse",permalink:"/cs201/docs/git/git-preuse",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"git-preuse",sidebar_position:3},sidebar:"gitSidebar",previous:{title:"Git \u5b89\u88c5",permalink:"/cs201/docs/git/gitInstall"},next:{title:"Git\u7684\u672c\u5730\u4ed3\u5e93\u7ba1\u7406",permalink:"/cs201/docs/git/git-use"}},l={},s=[{value:"\u5b66\u4e60Git\u524d\u7684\u9884\u5907\u77e5\u8bc6",id:"\u5b66\u4e60git\u524d\u7684\u9884\u5907\u77e5\u8bc6",level:2},{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",level:3},{value:"Git\u7684\u4e09\u79cd\u72b6\u6001",id:"git\u7684\u4e09\u79cd\u72b6\u6001",level:3}],c={toc:s},u="wrapper";function m(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-\u9884\u5907\u77e5\u8bc6"},"Git \u9884\u5907\u77e5\u8bc6"),(0,i.kt)("h2",{id:"\u5b66\u4e60git\u524d\u7684\u9884\u5907\u77e5\u8bc6"},"\u5b66\u4e60Git\u524d\u7684\u9884\u5907\u77e5\u8bc6"),(0,i.kt)("h3",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,i.kt)("p",null,"Git \u6709\u591a\u79cd\u4f7f\u7528\u65b9\u5f0f\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528\u539f\u751f\u7684\u547d\u4ee4\u884c\u6a21\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 GUI \u6a21\u5f0f\uff0c\u8fd9\u4e9b GUI \u8f6f\u4ef6\u4e5f\u80fd\u63d0\u4f9b\u591a\u79cd\u529f\u80fd\u3002 \u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u3002 \u8fd9\u662f\u56e0\u4e3a\u9996\u5148\uff0c\u53ea\u6709\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\u4f60\u624d\u80fd\u6267\u884c Git \u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u6240\u6709")," \u547d\u4ee4\uff0c\u800c\u5927\u591a\u6570\u7684 GUI \u8f6f\u4ef6\u53ea\u5b9e\u73b0\u4e86 Git \u6240\u6709\u529f\u80fd\u7684\u4e00\u4e2a\u5b50\u96c6\u4ee5\u964d\u4f4e\u64cd\u4f5c\u96be\u5ea6\u3002 \u5982\u679c\u4f60\u5b66\u4f1a\u4e86\u5728\u547d\u4ee4\u884c\u4e0b\u5982\u4f55\u64cd\u4f5c\uff0c\u90a3\u4e48\u4f60\u5728\u64cd\u4f5c GUI \u8f6f\u4ef6\u65f6\u5e94\u8be5\u4e5f\u4e0d\u4f1a\u9047\u5230\u4ec0\u4e48\u56f0\u96be\uff0c\u4f46\u662f\uff0c\u53cd\u4e4b\u5219\u4e0d\u6210\u7acb\u3002 \u6b64\u5916\uff0c\u7531\u4e8e\u6bcf\u4e2a\u4eba\u7684\u60f3\u6cd5\u4e0e\u4fa7\u91cd\u70b9\u4e0d\u540c\uff0c\u4e0d\u540c\u7684\u4eba\u5e38\u5e38\u4f1a\u5b89\u88c5\u4e0d\u540c\u7684 GUI \u8f6f\u4ef6\uff0c\u4f46 ",(0,i.kt)("strong",{parentName:"p"},"\u6240\u6709")," \u4eba\u4e00\u5b9a\u4f1a\u6709\u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5047\u5982\u4f60\u662f macOS \u7528\u6237\uff0c\u6211\u4eec\u5e0c\u671b\u4f60\u61c2\u5f97\u5982\u4f55\u4f7f\u7528\u7ec8\u7aef\uff08Terminal\uff09\uff1b\u5047\u5982\u4f60\u662f Windows \u7528\u6237\uff0c\u6211\u4eec\u5e0c\u671b\u4f60\u61c2\u5f97\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u7a97\u53e3\uff08Command Prompt\uff09\u6216 PowerShell\u3002\u5982\u679c\u4f60\u5c1a\u672a\u638c\u63e1\u4ee5\u4e0a\u6280\u80fd\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5148\u505c\u4e0b\u91cc\u5b66\u4e60\u4e00\u4e0b\uff08\u4e86\u89e3\u4e00\u4e9b\u57fa\u672c\u7684\u547d\u4ee4\u884c\u547d\u4ee4\u5373\u53ef\uff09\uff0c\u672c\u6559\u7a0b\u540e\u7eed\u5c06\u7528\u5230\u8fd9\u4e9b\u547d\u4ee4\u3002")),(0,i.kt)("h3",{id:"git\u7684\u4e09\u79cd\u72b6\u6001"},"Git\u7684\u4e09\u79cd\u72b6\u6001"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u73b0\u5728\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u540e\u9762\u7684\u5b66\u4e60\u66f4\u987a\u5229\uff0c\u8bf7\u8bb0\u4f4f\u4e0b\u9762\u8fd9\u4e9b\u5173\u4e8e Git \u7684\u6982\u5ff5\u3002 Git \u6709\u4e09\u79cd\u72b6\u6001\uff0c\u4f60\u7684\u6587\u4ef6\u53ef\u80fd\u5904\u4e8e\u5176\u4e2d\u4e4b\u4e00\uff1a ",(0,i.kt)("strong",{parentName:"p"},"\u5df2\u63d0\u4ea4\uff08committed\uff09\u3001\u5df2\u4fee\u6539\uff08modified\uff09 \u548c \u5df2\u6682\u5b58\uff08staged\uff09"),"\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5df2\u4fee\u6539\u8868\u793a\u4fee\u6539\u4e86\u6587\u4ef6\uff0c\u4f46\u8fd8\u6ca1\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5df2\u6682\u5b58\u8868\u793a\u5bf9\u4e00\u4e2a\u5df2\u4fee\u6539\u6587\u4ef6\u7684\u5f53\u524d\u7248\u672c\u505a\u4e86\u6807\u8bb0\uff0c\u4f7f\u4e4b\u5305\u542b\u5728\u4e0b\u6b21\u63d0\u4ea4\u7684\u5feb\u7167\u4e2d\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5df2\u63d0\u4ea4\u8868\u793a\u6570\u636e\u5df2\u7ecf\u5b89\u5168\u5730\u4fdd\u5b58\u5728\u672c\u5730\u6570\u636e\u5e93\u4e2d\u3002"))),(0,i.kt)("p",null,"\u8fd9\u4f1a\u8ba9\u6211\u4eec\u7684 Git \u9879\u76ee\u62e5\u6709\u4e09\u4e2a\u9636\u6bb5\uff1a\u5de5\u4f5c\u533a\u3001\u6682\u5b58\u533a\u4ee5\u53ca Git \u76ee\u5f55\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5de5\u4f5c\u76ee\u5f55\uff0c\u6682\u5b58\u533a\u57df\u4ee5\u53caGit\u4ed3\u5e93",src:r(2971).Z,width:"800",height:"441"}),";"),(0,i.kt)("p",null,"\u5de5\u4f5c\u533a\u662f\u5bf9\u9879\u76ee\u7684\u67d0\u4e2a\u7248\u672c\u72ec\u7acb\u63d0\u53d6\u51fa\u6765\u7684\u5185\u5bb9\u3002 \u8fd9\u4e9b\u4ece Git \u4ed3\u5e93\u7684\u538b\u7f29\u6570\u636e\u5e93\u4e2d\u63d0\u53d6\u51fa\u6765\u7684\u6587\u4ef6\uff0c\u653e\u5728\u78c1\u76d8\u4e0a\u4f9b\u4f60\u4f7f\u7528\u6216\u4fee\u6539\u3002"),(0,i.kt)("p",null,"\u6682\u5b58\u533a\u662f\u4e00\u4e2a\u6587\u4ef6\uff0c\u4fdd\u5b58\u4e86\u4e0b\u6b21\u5c06\u8981\u63d0\u4ea4\u7684\u6587\u4ef6\u5217\u8868\u4fe1\u606f\uff0c\u4e00\u822c\u5728 Git \u4ed3\u5e93\u76ee\u5f55\u4e2d\u3002 \u6309\u7167 Git \u7684\u672f\u8bed\u53eb\u505a\u201c\u7d22\u5f15\u201d\uff0c\u4e0d\u8fc7\u4e00\u822c\u8bf4\u6cd5\u8fd8\u662f\u53eb\u201c\u6682\u5b58\u533a\u201d\u3002"),(0,i.kt)("p",null,"Git \u4ed3\u5e93\u76ee\u5f55\u662f Git \u7528\u6765\u4fdd\u5b58\u9879\u76ee\u7684\u5143\u6570\u636e\u548c\u5bf9\u8c61\u6570\u636e\u5e93\u7684\u5730\u65b9\u3002 \u8fd9\u662f Git \u4e2d\u6700\u91cd\u8981\u7684\u90e8\u5206\uff0c\u4ece\u5176\u5b83\u8ba1\u7b97\u673a\u514b\u9686\u4ed3\u5e93\u65f6\uff0c\u590d\u5236\u7684\u5c31\u662f\u8fd9\u91cc\u7684\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u57fa\u672c\u7684 Git \u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de5\u4f5c\u533a\u4e2d\u4fee\u6539\u6587\u4ef6\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u4f60\u60f3\u8981\u4e0b\u6b21\u63d0\u4ea4\u7684\u66f4\u6539\u9009\u62e9\u6027\u5730\u6682\u5b58\uff0c\u8fd9\u6837\u53ea\u4f1a\u5c06\u66f4\u6539\u7684\u90e8\u5206\u6dfb\u52a0\u5230\u6682\u5b58\u533a\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u66f4\u65b0\uff0c\u627e\u5230\u6682\u5b58\u533a\u7684\u6587\u4ef6\uff0c\u5c06\u5feb\u7167\u6c38\u4e45\u6027\u5b58\u50a8\u5230 Git \u76ee\u5f55\u3002"))),(0,i.kt)("p",null,"\u5982\u679c Git \u76ee\u5f55\u4e2d\u4fdd\u5b58\u7740\u7279\u5b9a\u7248\u672c\u7684\u6587\u4ef6\uff0c\u5c31\u5c5e\u4e8e ",(0,i.kt)("strong",{parentName:"p"},"\u5df2\u63d0\u4ea4")," \u72b6\u6001\u3002 \u5982\u679c\u6587\u4ef6\u5df2\u4fee\u6539\u5e76\u653e\u5165\u6682\u5b58\u533a\uff0c\u5c31\u5c5e\u4e8e ",(0,i.kt)("strong",{parentName:"p"},"\u5df2\u6682\u5b58")," \u72b6\u6001\u3002 \u5982\u679c\u81ea\u4e0a\u6b21\u68c0\u51fa\u540e\uff0c\u4f5c\u4e86\u4fee\u6539\u4f46\u8fd8\u6ca1\u6709\u653e\u5230\u6682\u5b58\u533a\u57df\uff0c\u5c31\u662f ",(0,i.kt)("strong",{parentName:"p"},"\u5df2\u4fee\u6539")," \u72b6\u6001\u3002"))}m.isMDXComponent=!0},2971:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/areas-da592a13e4a626ee1b93fda65ae8b5e0.png"}}]);