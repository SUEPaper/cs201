"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||p;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const p={id:"debug",sidebar_position:5},i="VS Code Debug Python",o={unversionedId:"python/debug",id:"python/debug",title:"VS Code Debug Python",description:"\u8c03\u8bd5\u5f53\u524d\u6587\u4ef6",source:"@site/docs/python/debug.md",sourceDirName:"python",slug:"/python/debug",permalink:"/cs201/docs/python/debug",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"debug",sidebar_position:5},sidebar:"pythonSidebar",previous:{title:"\u5305\u7ba1\u7406",permalink:"/cs201/docs/python/pip"},next:{title:"\u53d8\u91cf\u3001\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",permalink:"/cs201/docs/python/variable"}},l={},s=[{value:"\u8c03\u8bd5\u5f53\u524d\u6587\u4ef6",id:"\u8c03\u8bd5\u5f53\u524d\u6587\u4ef6",level:2},{value:"\u63a8\u9009\u9605\u8bfb\u8d44\u6599",id:"\u63a8\u9009\u9605\u8bfb\u8d44\u6599",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...p}=e;return(0,a.kt)(u,(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vs-code-debug-python"},"VS Code Debug Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def jiecheng(num):\n    ans = 1\n    for i in range(num):\n        ans = ans * i\n    return ans\n\nfor i in range(5):\n    print(jiechen(i))\n")),(0,a.kt)("h2",{id:"\u8c03\u8bd5\u5f53\u524d\u6587\u4ef6"},"\u8c03\u8bd5\u5f53\u524d\u6587\u4ef6"),(0,a.kt)("p",null,"\u6253\u5f00\u8981\u8c03\u8bd5\u7684\u6587\u4ef6\u3002\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u5b83\u662f\u5e26\u6709\u4e0a\u9762\u4ee3\u7801\u793a\u4f8b\u7684\u6587\u4ef6\u3002\u5f53\u60a8\u5c06\u9f20\u6807\u60ac\u505c\u5728\u884c\u53f7\u7684\u5de6\u4fa7\u65f6\uff0c\u4f1a\u51fa\u73b0\u4e00\u4e2a\u892a\u8272\u7684\u7ea2\u70b9\u3002\u5982\u679c\u4f60\u70b9\u51fb\u8fd9\u4e2a\u70b9\uff0c\u5b83\u4f1a\u8bbe\u7f6e\u4e00\u4e2a\u65ad\u70b9\u3002\n",(0,a.kt)("img",{src:n(2169).Z,width:"851",height:"423"}),"\n\u65ad\u70b9\u662f\u4ee3\u7801\u4e2d\u7684\u4e00\u4e2a\u70b9\uff0c\u7a0b\u5e8f\u7684\u6267\u884c\u5c06\u5728\u6b64\u5904\u6682\u65f6\u505c\u6b62\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u68c0\u67e5\u7a0b\u5e8f\u7684\u72b6\u6001\u3002\u65ad\u70b9\u6709\u52a9\u4e8e\u8c03\u8bd5\u76ee\u7684\uff0c\u56e0\u4e3a\u5b83\u4eec\u5141\u8bb8\u7a0b\u5e8f\u5458\u68c0\u67e5\u53d8\u91cf\u7684\u503c\u5e76\u67e5\u770b\u7a0b\u5e8f\u5728\u8be5\u70b9\u7684\u6267\u884c\u60c5\u51b5\u3002\n\u5f53\u60a8\u7b2c\u4e00\u6b21\u5355\u51fb\u201c\u8fd0\u884c\u548c\u8c03\u8bd5\u201d\u65f6\uff0c\u60a8\u5c06\u83b7\u5f97\u9009\u62e9\u8c03\u8bd5\u914d\u7f6e\u7684\u9009\u9879\u3002\u5bf9\u4e8e\u672c\u6559\u7a0b\uff0c\u9009\u62e9Python \u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3076).Z,width:"696",height:"316"})),(0,a.kt)("p",null,"\u5f53\u60a8\u5355\u51fb\u4f4d\u4e8eVARIABLES(\u53d8\u91cf)\u9762\u677f\u5de6\u4e0a\u89d2\u7684\u64ad\u653e\u6309\u94ae\u65f6\uff0c\u8c03\u8bd5\u5668\u5c06\u8fd0\u884c\u4ee3\u7801\u5e76\u5728\u65ad\u70b9\u5904\u505c\u6b62\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2283).Z,width:"1339",height:"406"})),(0,a.kt)("p",null,"\u8c03\u8bd5\u5de5\u5177\u680f\u4e5f\u5c06\u5728\u6b64\u65f6\u53ef\u7528\u3002\u8c03\u8bd5\u5de5\u5177\u680f\u5305\u542b\u7684\u6309\u94ae\u53ef\u8ba9\u60a8\u524d\u8fdb\u3001\u540e\u9000\u4ee5\u53ca\u6839\u636e\u60a8\u5f53\u524d\u5728\u65ad\u70b9\u4e2d\u7684\u4f4d\u7f6e\u8df3\u8f6c\u5230\u4ee3\u7801\u7684\u4e0d\u540c\u90e8\u5206\u3002\u5173\u4e8e\u60a8\u7684\u4ee3\u7801\u7684\u5143\u6570\u636e\u4e5f\u5c06\u51fa\u73b0\u5728VARIABLES(\u53d8\u91cf)\u9762\u677f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u89c2\u5bdf\u548c\u76d1\u89c6\u5c40\u90e8\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf\u7684\u66f4\u6539\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u5de5\u5177\u680f\u4e2d\u6bcf\u4e2a\u56fe\u6807\u529f\u80fd\u7684\u7b80\u8981\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7ee7\u7eed(F5)")," \u2013 \u8fd9\u5c06\u8d8a\u8fc7\u65ad\u70b9\u5e76\u7ee7\u7eed\u6267\u884c\u7a0b\u5e8f\u7684\u5176\u4f59\u90e8\u5206\uff0c\u76f4\u5230\u9047\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step over (F10)")," \u2013 \u8fd9\u5c06\u4f7f\u8c03\u8bd5\u5668\u8fdb\u5165\u4e0b\u4e00\u884c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u8fdb\u5165 (F11)")," \u2013 \u8fd9\u5c06\u4f7f\u8c03\u8bd5\u5668\u8fdb\u5165\u4ee5\u4e0b\u51fd\u6570\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u9000\u51fa (F12)")," \u2013 \u8fd9\u5c06\u4f7f\u8c03\u8bd5\u5668\u9000\u51fa\u51fd\u6570\u5e76\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u542f\u52a8 (Ctrl+shift+F5)")," \u2013 \u91cd\u65b0\u542f\u52a8\u6574\u4e2a\u8c03\u8bd5\u5668\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u505c\u6b62 (shift+F5)")," \u2013 \u505c\u6b62\u8c03\u8bd5\u8fc7\u7a0b\u5e76\u9000\u51fa\u3002"))),(0,a.kt)("p",null,"\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u5c0f\u7bad\u5934\uff0c\u70b9\u51fbDebug Python File\u5373\u53ef\u5f00\u59cb\u8c03\u8bd5"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u8fd0\u884c\u6211\u4eec\u7684\u8c03\u8bd5\u5668\uff0c\u6211\u4eec\u770b\u5230 'jiechen' \u8fd9\u4e2a\u51fd\u6570\u4e0d\u5b58\u5728\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9760).Z,width:"1797",height:"526"})),(0,a.kt)("p",null,"\u53d1\u73b0\u539f\u56e0\u4e3ajiechen\u8fd9\u4e2a\u51fd\u6570\u6ca1\u6709\u5b9a\u4e49,\u4e3a\u62fc\u5199\u9519\u8bef"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9981).Z,width:"1124",height:"180"})),(0,a.kt)("p",null,"\u6b63\u5e38\u62fc\u5199\u540e\u518d\u6b21\u8c03\u8bd5"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8747).Z,width:"789",height:"843"})),(0,a.kt)("p",null,"\u51fa\u73b0\u9519\u8bef\uff0c1\u7684\u9636\u4e58\u4e3a0\u3002"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u65ad\u70b9\uff0c\u7ee7\u7eed\u8c03\u8bd5"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(806).Z,width:"756",height:"401"})),(0,a.kt)("p",null,"\u53d1\u73b0\u6b64\u65f6\u7684i\u4e3a0\uff0c\u56e0\u4e3arange(num)\u4f1a\u751f\u6210\u662f\u4ece0\u5230num-1\uff0c\u6240\u4ee5\u8bbe\u7f6e\u4e3arange(1,num+1)\u4f7f\u5f97\u5176\u751f\u62101\u5230num"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5350).Z,width:"586",height:"777"})),(0,a.kt)("p",null,"\u7ed3\u679c\u8f93\u51fa\u6b63\u786e"),(0,a.kt)("h2",{id:"\u63a8\u9009\u9605\u8bfb\u8d44\u6599"},"\u63a8\u9009\u9605\u8bfb\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://heather.cs.ucdavis.edu/~matloff/UnixAndC/CLanguage/Debug.html"},"GDB debug")))}d.isMDXComponent=!0},2283:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug2-f99b5c5d956404a963d6811f977b1532.png"},3076:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug3-ca12ae70f2dd44744eda9afa8d66c336.png"},9760:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug4-2c8510a53566433bd3b95fb7d4afa383.png"},9981:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug5-36bcc8c77b3c5c356c187970e00b4cdc.png"},8747:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug6-a6acfe13d9a431fb710b495788bbf420.png"},806:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug7-2fa951690b56f858b5ab1f54a9c8818e.png"},5350:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug8-1fc4912366dc21081f9a1386a5d37ffb.png"},2169:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debuging-3f8fb448a0df2ef9f089925c8c1e8fa5.png"}}]);