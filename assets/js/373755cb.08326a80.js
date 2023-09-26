"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[5584],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>u});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),N=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=N(a.components);return n.createElement(l.Provider,{value:e},a.children)},k="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=N(t),o=s,u=k["".concat(l,".").concat(o)]||k[o]||c[o]||m;return t?n.createElement(u,p(p({ref:e},i),{},{components:t})):n.createElement(u,p({ref:e},i))}));function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=o;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[k]="string"==typeof a?a:s,p[1]=r;for(var N=2;N<m;N++)p[N]=t[N];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},7900:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>r,toc:()=>N});var n=t(7462),s=(t(7294),t(3905));const m={id:"recursion",sidebar_position:10},p="\u9012\u5f52",r={unversionedId:"python/recursion",id:"python/recursion",title:"\u9012\u5f52",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/python/recursion.md",sourceDirName:"python",slug:"/python/recursion",permalink:"/cs201/python/recursion",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"recursion",sidebar_position:10},sidebar:"pythonSidebar",previous:{title:"\u6a21\u5757\u4e0e\u5305",permalink:"/cs201/python/module"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/cs201/category/\u6570\u636e\u7ed3\u6784"}},l={},N=[{value:"\u9012\u5f52\u51fd\u6570",id:"\u9012\u5f52\u51fd\u6570",level:2},{value:"\u9012\u5f52\u601d\u60f3",id:"\u9012\u5f52\u601d\u60f3",level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u7528\u9012\u5f52",id:"\u4ec0\u4e48\u65f6\u5019\u7528\u9012\u5f52",level:2},{value:"\u5c3e\u9012\u5f52",id:"\u5c3e\u9012\u5f52",level:2}],i={toc:N},k="wrapper";function c(a){let{components:e,...t}=a;return(0,s.kt)(k,(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u9012\u5f52"},"\u9012\u5f52"),(0,s.kt)("admonition",{title:"\u5fc5\u8bfb",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406\u3002\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u81ea\u5df1\u52a8\u624b\uff0c\u800c\u4e0d\u662f\u7acb\u9a6c\u5c31\u53bb\u95ee\u522b\u4eba\uff0c\u53ea\u6709\u81ea\u5df1\u52a8\u8fc7\u8111\u5b50\u4e86\u624d\u80fd\u5b66\u597d\u3002"))),(0,s.kt)("h2",{id:"\u9012\u5f52\u51fd\u6570"},"\u9012\u5f52\u51fd\u6570"),(0,s.kt)("p",null,"\u5982\u679c\u51fd\u6570\u7684\u51fd\u6570\u4f53\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u81ea\u5df1\u8c03\u7528\u81ea\u5df1\uff0c\u90a3\u4e48\u8fd9\u4e2a\u51fd\u6570\u662f\u9012\u5f52\u7684\u3002\u9012\u5f52\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u6570\u5b66\u548c\u7f16\u7a0b\u6982\u5ff5\u3002\u5b83\u610f\u5473\u7740\u51fd\u6570\u8c03\u7528\u81ea\u8eab\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u53ef\u4ee5\u5faa\u73af\u8bbf\u95ee\u6570\u636e\u4ee5\u8fbe\u6210\u7ed3\u679c\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u9012\u5f52\u5b9e\u73b0\u7684\u9636\u4e58\u51fd\u6570\u6848\u4f8b")),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"recursion01.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nif __name__ == "__main__":\n    factorial(10)\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6590\u6ce2\u90a3\u5951\u51fd\u6570\u6848\u4f8b")),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"recursion02.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def fibonacci(n):\n    if n == 0 or n == 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n\nif __name__ == "__main__":\n    fibonacci(6)\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u6590\u6ce2\u90a3\u5951\u6570\uff0c\u53c8\u8bd1\u4e3a\u83f2\u6ce2\u62ff\u5951\u6570\u3001\u83f2\u6ce2\u90a3\u897f\u6570\u3001\u6590\u6c0f\u6570\u3001\u9ec4\u91d1\u5206\u5272\u6570\u3002\u6240\u5f62\u6210\u7684\u6570\u5217\u79f0\u4e3a\u6590\u6ce2\u90a3\u5951\u6570\u5217\uff0c\u53c8\u8bd1\u4e3a\u83f2\u6ce2\u62ff\u5951\u6570\u5217\u3001\u83f2\u6ce2\u90a3\u897f\u6570\u5217\u3001\u6590\u6c0f\u6570\u5217\u3001\u9ec4\u91d1\u5206\u5272\u6570\u5217\u3002\u8fd9\u4e2a\u6570\u5217\u662f\u7531\u610f\u5927\u5229\u6570\u5b66\u5bb6\u6590\u6ce2\u90a3\u5951\u5728\u4ed6\u7684\u300a\u7b97\u76d8\u4e66\u300b\u4e2d\u63d0\u51fa\u3002"),(0,s.kt)("p",{parentName:"admonition"},"\u5728\u6570\u5b66\u4e0a\uff0c\u6590\u6ce2\u90a3\u5951\u6570\u662f\u4ee5\u9012\u5f52\u7684\u65b9\u6cd5\u6765\u5b9a\u4e49\uff1a"),(0,s.kt)("div",{parentName:"admonition",className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mtable",{parentName:"semantics",rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr",className:"mtr-glue"}),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"}))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mrow",{parentName:"mrow"}),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"F"),(0,s.kt)("mn",{parentName:"msub"},"0")),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"1")))),(0,s.kt)("mtd",{parentName:"mtr",className:"mtr-glue"}),(0,s.kt)("mtd",{parentName:"mtr",className:"mml-eqn-num"})),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr",className:"mtr-glue"}),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"}))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mrow",{parentName:"mrow"}),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"F"),(0,s.kt)("mn",{parentName:"msub"},"1")),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"1")))),(0,s.kt)("mtd",{parentName:"mtr",className:"mtr-glue"}),(0,s.kt)("mtd",{parentName:"mtr",className:"mml-eqn-num"})),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr",className:"mtr-glue"}),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"}))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mrow",{parentName:"mrow"}),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"F"),(0,s.kt)("mi",{parentName:"msub"},"n")),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"F"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"))),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"F"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"2"))),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2265"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))),(0,s.kt)("mtd",{parentName:"mtr",className:"mtr-glue"}),(0,s.kt)("mtd",{parentName:"mtr",className:"mml-eqn-num"}))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{align} & F_0 = 1 \\\\ & F_1 = 1 \\\\ & F_n = F_{n-1} + F_{n-2} (n \\ge 2) \\end{align}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"4.5em",verticalAlign:"-2em"}}),(0,s.kt)("span",{parentName:"span",className:"mtable"},(0,s.kt)("span",{parentName:"span",className:"col-align-r"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.5em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-4.5em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"})),(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"})),(0,s.kt)("span",{parentName:"span",style:{top:"-1.5em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"}))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.5em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-4.66em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.16em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,s.kt)("span",{parentName:"span",style:{top:"-1.66em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2083em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2083em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2em"}},(0,s.kt)("span",{parentName:"span"}))))))),(0,s.kt)("span",{parentName:"span",className:"tag"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.5em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-4.5em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,s.kt)("span",{parentName:"span",className:"eqn-num"})),(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,s.kt)("span",{parentName:"span",className:"eqn-num"})),(0,s.kt)("span",{parentName:"span",style:{top:"-1.5em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,s.kt)("span",{parentName:"span",className:"eqn-num"}))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2em"}},(0,s.kt)("span",{parentName:"span"})))))))))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u9012\u5f52\u6c42\u5e42\u6848\u4f8b")),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"recursion03.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def find_power(a, b):\n    if b == 0:\n        return 1\n    else:\n        return a * find_power(a, b-1)\n\nif __name__ == "__main__":\n    find_power(9, 3)\n')),(0,s.kt)("h2",{id:"\u9012\u5f52\u601d\u60f3"},"\u9012\u5f52\u601d\u60f3"),(0,s.kt)("p",null,"\u51fd\u6570\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u8c03\u7528\u81ea\u8eab\u3002"),(0,s.kt)("p",null,"\u9012\u5f52\u6709\u4e09\u5927\u91cd\u70b9\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u8981\u7d20\uff1a\u660e\u786e\u4f60\u8fd9\u4e2a\u51fd\u6570\u60f3\u8981\u5e72\u4ec0\u4e48\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u8981\u7d20\uff1a\u5bfb\u627e\u9012\u5f52\u7ed3\u675f\u6761\u4ef6\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u8981\u7d20\uff1a\u627e\u51fa\u51fd\u6570\u7684\u7b49\u4ef7\u5173\u7cfb\u5f0f\u3002")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u8981\u7d20")),(0,s.kt)("p",null,"\u51fd\u6570\u5230\u5e95\u8981\u5b9e\u73b0\u4ec0\u4e48\u529f\u80fd\u662f\u5b8c\u5168\u7531\u4f60\u81ea\u5df1\u6765\u5b9a\u4e49\u7684\uff0c\u6bd4\u5982\u8bf4n\u7684\u9636\u4e58\u3002"),(0,s.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u51fd\u6570\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def f(n):\n    pass\n\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u8981\u7d20")),(0,s.kt)("p",null,"\u627e\u51fa\u9012\u5f52\u7684\u7ed3\u675f\u6761\u4ef6\uff0c\u5426\u5219\u4f1a\u4e00\u76f4\u8c03\u7528\u81ea\u5df1\u3002\u6211\u4eec\u9700\u8981\u627e\u51fa\u5f53\u53c2\u6570\uff0c\u4f7f\u9012\u5f52\u7ed3\u675f\uff0c\u4e4b\u540e\u76f4\u63a5\u628a\u7ed3\u679c\u8fd4\u56de\uff0c\u8bf7\u6ce8\u610f\uff01\uff01\uff01\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5fc5\u987b\u80fd\u6839\u636e\u8fd9\u4e2a\u53c2\u6570\u7684\u503c\uff0c\u80fd\u591f\u76f4\u63a5\u77e5\u9053\u51fd\u6570\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\u3002"),(0,s.kt)("p",null,"\u63a5\u4e0a\u9762\uff0c\u5f53 n = 1 \u65f6\uff0c\u90a3\u4f60\u5e94\u8be5\u80fd\u591f\u76f4\u63a5\u77e5\u9053 f(n) \u662f\u4ec0\u4e48\uff1f\u6b64\u65f6\uff0cf(1) = 1\u3002\u5b8c\u5584\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\uff0c\u628a\u7b2c\u4e8c\u8981\u7d20\u52a0\u8fdb\u4ee3\u7801\u91cc\u9762"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# \u7b97 n \u7684\u9636\u4e58(\u5047\u8bben\u4e0d\u4e3a0)\ndef f(n):\n    if n == 1:\n        return 1\n    # else:\n    #     return n * f(n-1)\n")),(0,s.kt)("p",null,"\u5047\u8bben\u4e3a\u56fa\u5b9a\u503c\uff0c\u5f53n=10\u65f6\uff0c\u90a3\u60f3\u53ef\u4ee5\u76f4\u63a5\u77e5\u9053 f(n) \u7b49\u4e8e\u591a\u5c11\uff1f\u90a3\u53ef\u4ee5\u628an=10\u4f5c\u4e3a\u9012\u5f52\u7684\u7ed3\u675f\u6761\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# \u7b97 n \u7684\u9636\u4e58(\u5047\u8bben>=10)\ndef f(n):\n    if n == 10:\n        return 10\n    # else:\n    #     return n * f(n-1)\n")),(0,s.kt)("p",null,"\u6ce8\u610f\u6211\u4ee3\u7801\u91cc\u9762\u5199\u7684\u6ce8\u91ca\uff0c\u5047\u8bbe n>=10\uff0c\u56e0\u4e3a\u5982\u679c n=1 \u65f6\uff0c\u4f1a\u88ab\u6f0f\u6389\uff0c\u5f53 n<=10 \u65f6\uff0cf(n)=n\uff0c\u6240\u4ee5\u4e3a\u4e86\u66f4\u52a0\u4e25\u8c28\uff0c\u6211\u4eec\u53ef\u4ee5\u5199\u6210\u8fd9\u6837\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# \u7b97 n \u7684\u9636\u4e58(\u5047\u8bben\u4e0d\u4e3a0)\ndef f(n):\n    if n <= 10:\n        return n\n    # else:\n    #     return n * f(n-1)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u8981\u7d20")),(0,s.kt)("p",null,"\u627e\u51fa\u51fd\u6570\u7684\u7b49\u4ef7\u5173\u7cfb\u5f0f\u3002\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4e0d\u65ad\u7f29\u5c0f\u53c2\u6570\u7684\u8303\u56f4\uff0c\u7f29\u5c0f\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u8f85\u52a9\u7684\u53d8\u91cf\uff0c\u4f7f\u539f\u51fd\u6570\u7684\u7ed3\u679c\u4e0d\u53d8\u3002"),(0,s.kt)("p",null,"f(n) \u8fd9\u4e2a\u8303\u56f4\u6bd4\u8f83\u5927\uff0c\u6211\u4eec\u53ef\u4ee5\u8ba9 f(n) = n",(0,s.kt)("em",{parentName:"p"},"f(n-1)\u3002\u8fd9\u6837\uff0c\u8303\u56f4\u5c31\u7531n\u53d8\u6210\u4e86n-1\u4e86\uff0c\u8303\u56f4\u53d8\u5c0f\u4e86\uff0c\u5e76\u4e14\u4e3a\u4e86\u539f\u51fd\u6570f(n) \u4e0d\u53d8\uff0c\u6211\u4eec\u9700\u8981\u8ba9 f(n-1) \u4e58\u4ee5n\u3002\u5c31\u662f\u8981\u627e\u5230\u539f\u51fd\u6570\u7684\u4e00\u4e2a\u7b49\u4ef7\u5173\u7cfb\u5f0f\uff1af(n) = n ")," f(n-1)\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"f(5)\n=>5*f(4)\n=>5*(4*f(3))\n=>5*(4*(3*f(2)))\n=>5*(4*(3*(2*f(1))))\n=>5*(4*(3*(2*1)))\n=>5*(4*(3*2))\n=>5*(4*6)\n=>5*24\n=>120\n")),(0,s.kt)("p",null,"\u4e0a\u9762\u5c31\u663e\u793a\u4e86\u4e00\u4e2a\u9012\u5f52\u7684\u6d41\u7a0b\u3002"),(0,s.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u7528\u9012\u5f52"},"\u4ec0\u4e48\u65f6\u5019\u7528\u9012\u5f52"),(0,s.kt)("p",null,"\u5177\u6709\u4ee5\u4e0b\u7279\u5f81\u7684\u95ee\u9898\u53ef\u8003\u8651\u9012\u5f52\u6c42\u89e3\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5f53\u95ee\u9898\u548c\u5b50\u95ee\u9898\u5177\u6709\u9012\u63a8\u5173\u7cfb\uff0c\u6bd4\u5982\u6768\u8f89\u4e09\u89d2\u3001\u9636\u4e58\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5177\u6709\u9012\u5f52\u6027\u8d28\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6bd4\u5982\u94fe\u8868\u3001\u6811\u3001\u56fe\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u53cd\u5411\u6027\u95ee\u9898\uff0c\u6bd4\u5982\u53d6\u53cd\u3002")),(0,s.kt)("p",null,"\u5c42\u5c42\u62c6\u89e3\u5c31\u53ef\u4ee5\u4f7f\u7528\u9012\u5f52\u3002"),(0,s.kt)("h2",{id:"\u5c3e\u9012\u5f52"},"\u5c3e\u9012\u5f52"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u9762\u7684\u9636\u4e58\u4e3a\u4f8b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def factorial(n):  \n    if n == 0:\n        return 1\n    return factorial(n - 1) * n\n")),(0,s.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u8c03\u7528\u5c55\u5f00\uff0c\u4f1a\u53d8\u6210\u5982\u4e0b\u7684\u5f62\u5f0f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"factorial(4)  \nfactorial(3) * 4  \nfactorial(2) * 3 * 4  \nfactorial(1) * 2 * 3 * 4  \nfactorial(0) * 1 * 2 * 3 * 4  \n1 * 1 * 2 * 3 * 4  \n1 * 2 * 3 * 4  \n2 * 3 * 4  \n6 * 4  \n24\n")),(0,s.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u5728\u6bcf\u6b21\u9012\u5f52\u8c03\u7528\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u4e34\u65f6\u53d8\u91cf\uff0c\u5bfc\u81f4\u8fdb\u7a0b\u5185\u5b58\u5360\u7528\u91cf\u589e\u5927\u4e00\u4e9b\u3002\u8fd9\u6837\u6267\u884c\u4e00\u4e9b\u9012\u5f52\u5c42\u6570\u6bd4\u8f83\u6df1\u7684\u4ee3\u7801\u65f6\uff0c\u9664\u4e86\u65e0\u754f\u7684\u5185\u5b58\u6d6a\u8d39\uff0c\u8fd8\u6709\u53ef\u80fd\u5bfc\u81f4\u8457\u540d\u7684\u5806\u6808\u6ea2\u51fa\u9519\u8bef\u3002"),(0,s.kt)("p",null,"\u4f46\u662f\u5982\u679c\u628a\u4e0a\u9762\u7684\u51fd\u6570\u5199\u6210\u5982\u4e0b\u5f62\u5f0f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def factorial(n, acc=1):  \n    if n == 0:\n        return acc\n    return factorial(n - 1, n * acc)\n")),(0,s.kt)("p",null,"\u6211\u4eec\u518d\u8111\u5185\u5c55\u5f00\u4e00\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"factorial(4, 1)  \nfactorial(3, 4)  \nfactorial(2, 12)  \nfactorial(1, 24)  \nfactorial(0, 24)  \n24\n")),(0,s.kt)("p",null,"\u5f88\u76f4\u89c2\u7684\u5c31\u53ef\u4ee5\u770b\u51fa\uff0c\u8fd9\u6b21\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"factorial")," \u51fd\u6570\u5728\u9012\u5f52\u8c03\u7528\u7684\u65f6\u5019\u4e0d\u4f1a\u4ea7\u751f\u4e00\u7cfb\u5217\u9010\u6e10\u589e\u591a\u7684\u4e2d\u95f4\u53d8\u91cf\u4e86\uff0c\u800c\u662f\u5c06\u72b6\u6001\u4fdd\u5b58\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"acc")," \u8fd9\u4e2a\u53d8\u91cf\u4e2d\u3002\u800c\u8fd9\u79cd\u5f62\u5f0f\u7684\u9012\u5f52\uff0c\u5c31\u53eb\u505a",(0,s.kt)("strong",{parentName:"p"},"\u5c3e\u9012\u5f52")),(0,s.kt)("p",null,"\u5c3e\u9012\u5f52\u7684\u5b9a\u4e49\u987e\u540d\u601d\u4e49\uff0c",(0,s.kt)("strong",{parentName:"p"},"\u51fd\u6570\u8c03\u7528\u4e2d\u6700\u540e\u8fd4\u56de\u7684\u7ed3\u679c\u662f\u5355\u7eaf\u7684\u9012\u5f52\u51fd\u6570\u8c03\u7528\uff08\u6216\u8fd4\u56de\u7ed3\u679c\uff09\u5c31\u662f\u5c3e\u9012\u5f52"),"\u3002\u5c3e\u9012\u5f52\u51fd\u6570\u7684\u7279\u70b9\u662f\u5728\u56de\u5f52\u8fc7\u7a0b\u4e2d\u4e0d\u7528\u505a\u4efb\u4f55\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u7279\u6027\u5f88\u91cd\u8981\uff0c\u56e0\u4e3a\u5927\u591a\u6570\u73b0\u4ee3\u7684\u7f16\u8bd1\u5668\u4f1a\u5229\u7528\u8fd9\u79cd\u7279\u70b9\u81ea\u52a8\u751f\u6210\u4f18\u5316\u7684\u4ee3\u7801\u3002"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"recursion04.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def facttail(n, a):\n     \n    if n < 0:\n        return 0;    \n    elif n == 0:\n        return 1;    \n    elif n == 1:\n        return a;\n    else:\n        return facttail(n - 1, n * a)\n\nif __name__ == "__main__":\n    facttail(10, 9)\n')))}c.isMDXComponent=!0}}]);