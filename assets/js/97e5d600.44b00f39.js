"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[3891],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>y});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},o="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),o=i(t),k=s,y=o["".concat(l,".").concat(k)]||o[k]||c[k]||m;return t?n.createElement(y,p(p({ref:e},N),{},{components:t})):n.createElement(y,p({ref:e},N))}));function y(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[o]="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9664:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>r,toc:()=>i});var n=t(7462),s=(t(7294),t(3905));const m={id:"if-else",sidebar_position:7},p="\u5206\u652f\u7ed3\u6784",r={unversionedId:"python/if-else",id:"python/if-else",title:"\u5206\u652f\u7ed3\u6784",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/python/if-else.md",sourceDirName:"python",slug:"/python/if-else",permalink:"/cs201/python/if-else",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"if-else",sidebar_position:7},sidebar:"pythonSidebar",previous:{title:"\u5b57\u7b26\u4e32",permalink:"/cs201/python/string"},next:{title:"\u5faa\u73af\u7ed3\u6784",permalink:"/cs201/python/loop"}},l={},i=[{value:"if else \u8bed\u53e5",id:"if-else-\u8bed\u53e5",level:2},{value:"if elif else",id:"if-elif-else",level:2},{value:"if \u5d4c\u5957",id:"if-\u5d4c\u5957",level:2}],N={toc:i},o="wrapper";function c(a){let{components:e,...t}=a;return(0,s.kt)(o,(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5206\u652f\u7ed3\u6784"},"\u5206\u652f\u7ed3\u6784"),(0,s.kt)("admonition",{title:"\u5fc5\u8bfb",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406\u3002\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u81ea\u5df1\u52a8\u624b\uff0c\u800c\u4e0d\u662f\u7acb\u9a6c\u5c31\u53bb\u95ee\u522b\u4eba\uff0c\u53ea\u6709\u81ea\u5df1\u52a8\u8fc7\u8111\u5b50\u4e86\u624d\u80fd\u5b66\u597d\u3002"))),(0,s.kt)("p",null,"\u8fc4\u4eca\u4e3a\u6b62\uff0c\u6211\u4eec\u5199\u7684Python\u4ee3\u7801\u90fd\u662f\u4e00\u6761\u4e00\u6761\u8bed\u53e5\u987a\u5e8f\u6267\u884c\uff0c\u8fd9\u79cd\u4ee3\u7801\u7ed3\u6784\u901a\u5e38\u79f0\u4e4b\u4e3a\u987a\u5e8f\u7ed3\u6784, \u7136\u800c\u4ec5\u6709\u987a\u5e8f\u7ed3\u6784\u5e76\u4e0d\u80fd\u89e3\u51b3\u6240\u6709\u7684\u95ee\u9898\u3002"),(0,s.kt)("p",null,"Python\u6761\u4ef6\u8bed\u53e5\u662f\u901a\u8fc7\u4e00\u6761\u6216\u591a\u6761\u8bed\u53e5\u7684\u6267\u884c\u7ed3\u679c\uff08True\u6216\u8005False\uff09\u6765\u51b3\u5b9a\u6267\u884c\u7684\u4ee3\u7801\u5757\uff0c\u6267\u884c\u8bed\u53e5\u53ef\u4ee5\u662f\u5355\u4e2a\u8bed\u53e5\u6216\u8bed\u53e5\u5757\u3002\u5224\u65ad\u6761\u4ef6\u53ef\u4ee5\u662f\u4efb\u4f55\u8868\u8fbe\u5f0f\uff0c\u4efb\u4f55\u975e\u96f6\u3001\u6216\u975e\u7a7a\uff08null\uff09\u7684\u503c\u5747\u4e3aTrue\u3002"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"if-else01.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\nif True:\n    print("Hello World")\nprint("Goog Bye")\n\nif False:\n    print("Hello Python")\nprint("Goog Bye")\n\n')),(0,s.kt)("admonition",{title:"\u4ee3\u7801\u7f29\u8fdb",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u9700\u8981\u8bf4\u660e\u7684\u662f\u548cC/C++\u3001Java\u7b49\u8bed\u8a00\u4e0d\u540c\uff0cPython\u4e2d\u6ca1\u6709\u7528\u82b1\u62ec\u53f7\u6765\u6784\u9020\u4ee3\u7801\u5757\u800c\u662f",(0,s.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u4e86\u7f29\u8fdb\u7684\u65b9\u5f0f\u6765\u8868\u793a\u4ee3\u7801\u7684\u5c42\u6b21\u7ed3\u6784"),"\uff0c\u5982\u679cif\u6761\u4ef6\u6210\u7acb\u7684\u60c5\u51b5\u4e0b\u9700\u8981\u6267\u884c\u591a\u6761\u8bed\u53e5\uff0c\u53ea\u8981\u4fdd\u6301\u591a\u6761\u8bed\u53e5\u5177\u6709\u76f8\u540c\u7684\u7f29\u8fdb\u5c31\u53ef\u4ee5\u4e86\u3002\u6362\u53e5\u8bdd\u8bf4",(0,s.kt)("strong",{parentName:"p"},"\u8fde\u7eed\u7684\u4ee3\u7801\u5982\u679c\u53c8\u4fdd\u6301\u4e86\u76f8\u540c\u7684\u7f29\u8fdb\u90a3\u4e48\u5b83\u4eec\u5c5e\u4e8e\u540c\u4e00\u4e2a\u4ee3\u7801\u5757"),"\uff0c\u76f8\u5f53\u4e8e\u662f\u4e00\u4e2a\u6267\u884c\u7684\u6574\u4f53\u3002",(0,s.kt)("strong",{parentName:"p"},"\u7f29\u8fdb"),"\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u6570\u91cf\u7684\u7a7a\u683c\uff0c\u4f46",(0,s.kt)("strong",{parentName:"p"},"\u901a\u5e38\u4f7f\u75284\u4e2a\u7a7a\u683c"),"\uff0c\u5efa\u8bae\u5927\u5bb6",(0,s.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u4f7f\u7528\u5236\u8868\u952e"),"\u6216\u8005",(0,s.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u4f60\u7684\u4ee3\u7801\u7f16\u8f91\u5de5\u5177\u81ea\u52a8\u5c06\u5236\u8868\u952e\u53d8\u62104\u4e2a\u7a7a\u683c"),"\u3002")),(0,s.kt)("h2",{id:"if-else-\u8bed\u53e5"},"if else \u8bed\u53e5"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"if-else02.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: utf-8 -*-\n\nusername = input('Please enter user name: ')\npassword = input('Please enter password: ')\n# \u7528\u6237\u540d\u662fadmin\u4e14\u5bc6\u7801\u662f123456\u5219\u8eab\u4efd\u9a8c\u8bc1\u6210\u529f\u5426\u5219\u8eab\u4efd\u9a8c\u8bc1\u5931\u8d25\nif username == 'admin' and password == '123456':\n    print('Authentication successful')\nelse:\n    print('Authentication failed')\n")),(0,s.kt)("h2",{id:"if-elif-else"},"if elif else"),(0,s.kt)("p",null,"\u5728\u5206\u6bb5\u51fd\u6570\u6c42\u503c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u5230\u8fd9\u79cd\u7ed3\u6784\u3002\u5982\u4e0b\u662f\u4e00\u4e2a\u5206\u6bb5\u51fd\u6570\u7684\u6848\u4f8b\uff1a"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,s.kt)("mtable",{parentName:"mrow",rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},",")))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},">"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))))),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},",")))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))))),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},",")))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))))))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x)= \\begin{cases} 3x - 5, & (x > 1) \\\\ x + 2, & (-1 \\le x \\le 1) \\\\ 5x + 3, & (x < -1) \\end{cases}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"4.32em",verticalAlign:"-1.91em"}}),(0,s.kt)("span",{parentName:"span",className:"minner"},(0,s.kt)("span",{parentName:"span",className:"mopen"},(0,s.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.35em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.2em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.15em"}}),(0,s.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,s.kt)("span",{parentName:"span"},"\u23a9"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.192em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.15em"}}),(0,s.kt)("span",{parentName:"span",style:{height:"0.316em",width:"0.8889em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.316em",style:{width:"0.8889em"},viewBox:"0 0 888.89 316",preserveAspectRatio:"xMinYMin"},(0,s.kt)("path",{parentName:"svg",d:"M384 0 H504 V316 H384z M384 0 H504 V316 H384z"})))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.15em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.15em"}}),(0,s.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,s.kt)("span",{parentName:"span"},"\u23a8"))),(0,s.kt)("span",{parentName:"span",style:{top:"-4.292em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.15em"}}),(0,s.kt)("span",{parentName:"span",style:{height:"0.316em",width:"0.8889em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.316em",style:{width:"0.8889em"},viewBox:"0 0 888.89 316",preserveAspectRatio:"xMinYMin"},(0,s.kt)("path",{parentName:"svg",d:"M384 0 H504 V316 H384z M384 0 H504 V316 H384z"})))),(0,s.kt)("span",{parentName:"span",style:{top:"-4.6em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.15em"}}),(0,s.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,s.kt)("span",{parentName:"span"},"\u23a7")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.85em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mtable"},(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.41em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-4.41em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.97em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","))),(0,s.kt)("span",{parentName:"span",style:{top:"-1.53em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},",")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.91em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"1em"}}),(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.41em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-4.41em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.97em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,s.kt)("span",{parentName:"span",style:{top:"-1.53em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.91em"}},(0,s.kt)("span",{parentName:"span"}))))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"if-else03.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: utf-8 -*-\n\nx = float(input('x = '))\nif x > 1:\n    y = 3 * x - 5\nelif x >= -1:\n    y = x + 2\nelse:\n    y = 5 * x + 3\nprint('f(%.2f) = %.2f' % (x, y))\n")),(0,s.kt)("h2",{id:"if-\u5d4c\u5957"},"if \u5d4c\u5957"),(0,s.kt)("p",null,"\u5f53\u7136\u6839\u636e\u5b9e\u9645\u5f00\u53d1\u7684\u9700\u8981\uff0c\u5206\u652f\u7ed3\u6784\u662f\u53ef\u4ee5\u5d4c\u5957\u7684, \u90a3\u4e48\u6211\u4eec\u5c31\u9700\u8981\u5728if\u7684\u5185\u90e8\u6784\u9020\u51fa\u4e00\u4e2a\u65b0\u7684\u5206\u652f\u7ed3\u6784\uff0c\u540c\u7406elif\u548celse\u4e2d\u4e5f\u53ef\u4ee5\u518d\u6784\u9020\u65b0\u7684\u5206\u652f\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u5d4c\u5957\u7684\u5206\u652f\u7ed3\u6784\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0a\u9762\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"if-else03.py")," \u7684\u6e90\u4ee3\u7801\u53ef\u4ee5\u6539\u5199\u6210\u4e0b\u9762\u7684\u6837\u5b50\uff0c\u8bf7\u5b9e\u64cd\u5e76\u4e14\u5e76\u8fd0\u884c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: utf-8 -*-\n\nx = float(input('x = '))\nif x > 1:\n    y = 3 * x - 5\nelse:\n    if x >= -1:\n        y = x + 2\n    else:\n        y = 5 * x + 3\nprint('f(%.2f) = %.2f' % (x, y))\n")))}c.isMDXComponent=!0}}]);