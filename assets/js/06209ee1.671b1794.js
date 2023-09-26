"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[6954],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),i=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},o=function(t){var e=i(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,l=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),c=i(a),k=r,N=c["".concat(l,".").concat(k)]||c[k]||u[k]||p;return a?n.createElement(N,s(s({ref:e},o),{},{components:a})):n.createElement(N,s({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,s=new Array(p);s[0]=k;var m={};for(var l in e)hasOwnProperty.call(e,l)&&(m[l]=e[l]);m.originalType=t,m[c]="string"==typeof t?t:r,s[1]=m;for(var i=2;i<p;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7766:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const p={id:"tuple",sidebar_position:2},s="\u5143\u7ec4",m={unversionedId:"python/data-structure/tuple",id:"python/data-structure/tuple",title:"\u5143\u7ec4",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/python/data-structure/tuple.md",sourceDirName:"python/data-structure",slug:"/python/data-structure/tuple",permalink:"/cs201/python/data-structure/tuple",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"tuple",sidebar_position:2},sidebar:"pythonSidebar",previous:{title:"\u5217\u8868",permalink:"/cs201/python/data-structure/list"},next:{title:"\u5b57\u5178",permalink:"/cs201/python/data-structure/dict"}},l={},i=[{value:"\u5143\u7ec4\u521b\u5efa",id:"\u5143\u7ec4\u521b\u5efa",level:2},{value:"\u5143\u7ec4\u4f7f\u7528",id:"\u5143\u7ec4\u4f7f\u7528",level:2},{value:"\u901a\u8fc7\u7d22\u5f15",id:"\u901a\u8fc7\u7d22\u5f15",level:3},{value:"\u5143\u7ec4\u7684\u8fd0\u7b97",id:"\u5143\u7ec4\u7684\u8fd0\u7b97",level:3},{value:"\u5143\u7ec4\u7684\u5207\u7247",id:"\u5143\u7ec4\u7684\u5207\u7247",level:3},{value:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570",id:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570",level:3},{value:"other",id:"other",level:3}],o={toc:i},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5143\u7ec4"},"\u5143\u7ec4"),(0,r.kt)("admonition",{title:"\u5fc5\u8bfb",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406\u3002\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u81ea\u5df1\u52a8\u624b\uff0c\u800c\u4e0d\u662f\u7acb\u9a6c\u5c31\u53bb\u95ee\u522b\u4eba\uff0c\u53ea\u6709\u81ea\u5df1\u52a8\u8fc7\u8111\u5b50\u4e86\u624d\u80fd\u5b66\u597d\u3002"))),(0,r.kt)("p",null,"tuple \u4e0e\u5217\u8868\u7c7b\u4f3c\uff0c\u4f46\u5143\u7ec4\u5143\u7d20\u4e0d\u80fd\u66f4\u6539"),(0,r.kt)("h2",{id:"\u5143\u7ec4\u521b\u5efa"},"\u5143\u7ec4\u521b\u5efa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'tup1 = ("SUEP",1951,1.13)\n#\u5f53\u5143\u7ec4\u5143\u7d20\u53ea\u6709\u4e00\u4e2a\u65f6\uff0c\u8981\u52a0\u2018\uff0c\u2019\ntup2 = ("SUEP",)\n')),(0,r.kt)("h2",{id:"\u5143\u7ec4\u4f7f\u7528"},"\u5143\u7ec4\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u7d22\u5f15"},"\u901a\u8fc7\u7d22\u5f15"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'tup1 = ("SUEP",1951,1.13)\nprint(tup1[1])\n"""\n\u8f93\u51fa\uff1a\n1951\n"""\n')),(0,r.kt)("h3",{id:"\u5143\u7ec4\u7684\u8fd0\u7b97"},"\u5143\u7ec4\u7684\u8fd0\u7b97"),(0,r.kt)("p",null,"\u5143\u7ec4\u5177\u6709",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"+")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"+")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"+"))))),"\u4e0e",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2217")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"*")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2217"))))),"\u8fd9\u4e24\u79cd\u8fd0\u7b97\uff0c",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"+")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"+")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"+"))))),"\u4e3a\u5143\u7ec4\u76f8\u8fde\uff0c",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2217")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"*")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2217"))))),"\u4e3a\u5143\u7ec4\u91cd\u590d,\u4e0e\u5217\u8868\u7c7b\u4f3c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'tup1 = ("SUEP",1951,1.13)\ntup2 = ("xsm",)\nprint(tup1 + tup2)\nprint(tup2 * 2)\n"""\n\u8f93\u51fa\uff1a\n(\'SUEP\', 1951, 1.13, \'xsm\')\n(\'xsm\', \'xsm\')\n"""\n')),(0,r.kt)("h3",{id:"\u5143\u7ec4\u7684\u5207\u7247"},"\u5143\u7ec4\u7684\u5207\u7247"),(0,r.kt)("p",null,"\u4e0e\u5217\u8868\u4e00\u6837\uff0c\u5143\u7ec4\u4e5f\u5177\u6709\u5207\u7247\u7684\u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#\u8bed\u6cd5\u4e3atuple[a:b],\u8fd4\u56detuple\u4e2d\u7d22\u5f15\u4e3aa\u5230b\u7684\u5143\u7d20\ntu11 = ["SUEP",1951,1.13,19.39]\nprint(tu11 [1:4])\nprint(tu11 [4:1])\nprint(tu11 [-4:-1])\n#\u4e5f\u53ef\u4ee5list[a:]\uff0c\u8fd4\u56detuple\u4e2d\u7d22\u5f15\u4e3aa\u5230\u7ed3\u675f\u7684\u5143\u7d20\nprint(tu11 [2:])\n"""\n\u8f93\u51fa\uff1a\n[1951, 1.13, 19.39]\n[]\n[\'SUEP\', 1951, 1.13]\n[1.13, 19.39]\n"""\n')),(0,r.kt)("h3",{id:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570"},"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'tul1 = ["SUEP",1951,1.13]\n#\u83b7\u5f97list\u7684\u957f\u5ea6\nprint(len(tul1))\n#\u83b7\u5f97\u6700\u5927\u6700\u5c0f\u503c\ntul2 = [1,1,4,5,1]\nprint(min(tul2))\nprint(max(tul2))\n"""\n\u8f93\u51fa\uff1a\n3\n1\n5\n"""\n')),(0,r.kt)("h3",{id:"other"},"other"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/zh-cn/3/tutorial/datastructures.html#tuples-and-sequences"},"\u5b98\u7f51\u6587\u6863")))}u.isMDXComponent=!0}}]);