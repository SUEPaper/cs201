"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[339],{3905:(e,n,a)=>{a.d(n,{Zo:()=>o,kt:()=>u});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var m=t.createContext({}),i=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},o=function(e){var n=i(e.components);return t.createElement(m.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},N=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,p=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=i(a),N=s,u=c["".concat(m,".").concat(N)]||c[N]||k[N]||p;return a?t.createElement(u,r(r({ref:n},o),{},{components:a})):t.createElement(u,r({ref:n},o))}));function u(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var p=a.length,r=new Array(p);r[0]=N;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[c]="string"==typeof e?e:s,r[1]=l;for(var i=2;i<p;i++)r[i]=a[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3322:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var t=a(7462),s=(a(7294),a(3905));const p={id:"loop",sidebar_position:8},r="\u5faa\u73af\u7ed3\u6784",l={unversionedId:"python/loop",id:"python/loop",title:"\u5faa\u73af\u7ed3\u6784",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/python/loop.md",sourceDirName:"python",slug:"/python/loop",permalink:"/cs201/python/loop",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"loop",sidebar_position:8},sidebar:"pythonSidebar",previous:{title:"\u5206\u652f\u7ed3\u6784",permalink:"/cs201/python/if-else"},next:{title:"\u51fd\u6570\u4e0e\u4f5c\u7528\u57df",permalink:"/cs201/python/function"}},m={},i=[{value:"<code>for-in</code>\u5faa\u73af\u8bed\u53e5",id:"for-in\u5faa\u73af\u8bed\u53e5",level:2},{value:"\u5d4c\u5957\u5faa\u73af",id:"\u5d4c\u5957\u5faa\u73af",level:3},{value:"\u5faa\u73af\u904d\u5386\u5b57\u7b26\u4e32",id:"\u5faa\u73af\u904d\u5386\u5b57\u7b26\u4e32",level:3},{value:"<code>while</code>\u5faa\u73af\u8bed\u53e5",id:"while\u5faa\u73af\u8bed\u53e5",level:2},{value:"<code>break</code>\u8bed\u53e5",id:"break\u8bed\u53e5",level:2},{value:"<code>for-in</code>\u5faa\u73af\u4e2d",id:"for-in\u5faa\u73af\u4e2d",level:3},{value:"<code>while</code>\u5faa\u73af\u4e2d",id:"while\u5faa\u73af\u4e2d",level:3},{value:"<code>continue</code>\u8bed\u53e5",id:"continue\u8bed\u53e5",level:2},{value:"<code>for-in</code>\u5faa\u73af\u4e2d",id:"for-in\u5faa\u73af\u4e2d-1",level:3},{value:"<code>while</code>\u5faa\u73af\u4e2d",id:"while\u5faa\u73af\u4e2d-1",level:3},{value:"<code>pass</code>\u8bed\u53e5",id:"pass\u8bed\u53e5",level:2}],o={toc:i},c="wrapper";function k(e){let{components:n,...a}=e;return(0,s.kt)(c,(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5faa\u73af\u7ed3\u6784"},"\u5faa\u73af\u7ed3\u6784"),(0,s.kt)("admonition",{title:"\u5fc5\u8bfb",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406\u3002\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u81ea\u5df1\u52a8\u624b\uff0c\u800c\u4e0d\u662f\u7acb\u9a6c\u5c31\u53bb\u95ee\u522b\u4eba\uff0c\u53ea\u6709\u81ea\u5df1\u52a8\u8fc7\u8111\u5b50\u4e86\u624d\u80fd\u5b66\u597d\u3002"))),(0,s.kt)("p",null,"\u6211\u4eec\u5728\u5199\u7a0b\u5e8f\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u4f1a\u9047\u5230\u9700\u8981\u91cd\u590d\u6267\u884c\u67d0\u6761\u6216\u67d0\u4e9b\u6307\u4ee4\u7684\u573a\u666f\u3002\u5faa\u73af\u7ed3\u6784\u5c31\u662f\u7a0b\u5e8f\u4e2d\u63a7\u5236\u67d0\u6761\u6216\u67d0\u4e9b\u6307\u4ee4\u91cd\u590d\u6267\u884c\u7684\u7ed3\u6784\u3002\u5728Python\u4e2d\u6784\u9020\u5faa\u73af\u7ed3\u6784\u6709\u4e24\u79cd\u505a\u6cd5\uff0c\u4e00\u79cd\u662f",(0,s.kt)("inlineCode",{parentName:"p"},"for-in"),"\u5faa\u73af\uff0c\u4e00\u79cd\u662f",(0,s.kt)("inlineCode",{parentName:"p"},"while"),"\u5faa\u73af\u3002"),(0,s.kt)("h2",{id:"for-in\u5faa\u73af\u8bed\u53e5"},(0,s.kt)("inlineCode",{parentName:"h2"},"for-in"),"\u5faa\u73af\u8bed\u53e5"),(0,s.kt)("p",null,"\u5982\u679c\u660e\u786e\u7684\u77e5\u9053\u5faa\u73af\u6267\u884c\u7684\u6b21\u6570\u6216\u8005\u8981\u5bf9\u4e00\u4e2a\u5bb9\u5668\u8fdb\u884c\u8fed\u4ee3\uff08\u540e\u9762\u4f1a\u8bb2\u5230\uff09\uff0c\u90a3\u4e48\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"for-in"),"\u5faa\u73af\uff0c\u57fa\u672c\u8bed\u6cd5\u4e3a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"for <variable> in <sequence>:\n    <statements>\nelse:\n    <statements>\n")),(0,s.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u4ee3\u7801\u4e2d\u8ba1\u7b971~100\u6c42\u548c\u7684\u7ed3\u679c ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,s.kt)("mrow",{parentName:"msubsup"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("mn",{parentName:"msubsup"},"100")),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum \\limits_{n=1}^{100}n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4682em",verticalAlign:"-0.9671em"}}),(0,s.kt)("span",{parentName:"span",className:"mop op-limits"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.5011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.1329em",marginLeft:"0em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol small-op"},"\u2211"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.95em",marginLeft:"0em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"100"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9671em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"loop01.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"sum = 0\nfor x in range(101):\n    sum += x\nprint(sum)\n")),(0,s.kt)("p",null,"\u9700\u8981\u8bf4\u660e\u7684\u662f\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"range(1, 101)"),"\u53ef\u4ee5\u7528\u6765\u6784\u9020\u4e00\u4e2a\u4ece1\u5230100\u7684\u8303\u56f4\uff0c\u5f53\u6211\u4eec\u628a\u8fd9\u6837\u4e00\u4e2a\u8303\u56f4\u653e\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"for-in"),"\u5faa\u73af\u4e2d\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u524d\u9762\u7684\u5faa\u73af\u53d8\u91cfx\u4f9d\u6b21\u53d6\u51fa\u4ece1\u5230100\u7684\u6574\u6570\u3002\u5f53\u7136\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"range"),"\u7684\u7528\u6cd5\u975e\u5e38\u7075\u6d3b\uff0c\u4e0b\u9762\u7ed9\u51fa\u4e86\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"range(101)"),"\uff1a\u53ef\u4ee5\u7528\u6765\u4ea7\u751f0\u5230100\u8303\u56f4\u7684\u6574\u6570\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u53d6\u4e0d\u5230101\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"range(1, 101)"),"\uff1a\u53ef\u4ee5\u7528\u6765\u4ea7\u751f1\u5230100\u8303\u56f4\u7684\u6574\u6570\uff0c\u76f8\u5f53\u4e8e\u524d\u9762\u662f\u95ed\u533a\u95f4\u540e\u9762\u662f\u5f00\u533a\u95f4\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"range(1, 101, 2)"),"\uff1a\u53ef\u4ee5\u7528\u6765\u4ea7\u751f1\u5230100\u7684\u5947\u6570\uff0c\u5176\u4e2d2\u662f\u6b65\u957f\uff0c\u5373\u6bcf\u6b21\u6570\u503c\u9012\u589e\u7684\u503c\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"range(100, 0, -2)"),"\uff1a\u53ef\u4ee5\u7528\u6765\u4ea7\u751f100\u52301\u7684\u5076\u6570\uff0c\u5176\u4e2d-2\u662f\u6b65\u957f\uff0c\u5373\u6bcf\u6b21\u6570\u5b57\u9012\u51cf\u7684\u503c\u3002")),(0,s.kt)("p",null,"\u77e5\u9053\u4e86\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u5b9e\u73b01~100\u4e4b\u95f4\u7684\u5076\u6570\u6c42\u548c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"sum = 0\nfor x in range(2, 101, 2):\n    sum += x\nprint(sum)\n")),(0,s.kt)("p",null,"\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u5faa\u73af\u4e2d\u4f7f\u7528\u5206\u652f\u7ed3\u6784\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u76f8\u540c\u7684\u529f\u80fd\uff0c\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002(",(0,s.kt)("em",{parentName:"p"},"\u5b9e\u9645\u7f16\u7a0b\u4e2d\u4e0d\u63a8\u8350\u8fd9\u79cd\u505a\u6cd5\uff0c\u56e0\u4e3a\u8fd9\u79cd\u4ee3\u7801\u7684\u5199\u6cd5\u4e0d\u591f\u4f18\u96c5\u3002\u4e00\u540d\u7a0b\u5e8f\u5458\u5728\u5199\u4ee3\u7801\u7684\u65f6\u5019\u5b9e\u9645\u4e0a\u662f\u5728\u521b\u9020\u8fd9\u4e2a\u4e16\u754c\u4e0a\u4e0d\u5b58\u5728\u7684\u4e1c\u897f\uff0c\u56e0\u6b64\u6211\u4eec\u4e0d\u4ec5\u8981\u8ba9\u81ea\u5df1\u5199\u7684\u4ee3\u7801\u89c1\u540d\u77e5\u610f\uff0c\u8fd8\u9700\u8981\u8db3\u591f\u4f18\u96c5\u3002"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"sum = 0\nfor x in range(1, 101):\n    if x % 2 == 0:\n        sum += x\nprint(sum)\n")),(0,s.kt)("h3",{id:"\u5d4c\u5957\u5faa\u73af"},"\u5d4c\u5957\u5faa\u73af"),(0,s.kt)("p",null,"\u5d4c\u5957\u5faa\u73af\u662f\u5faa\u73af\u5185\u7684\u5faa\u73af, ",(0,s.kt)("inlineCode",{parentName:"p"},"\u5916\u5faa\u73af"),"\u6bcf\u8fed\u4ee3\u4e00\u6b21\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"\u5185\u5faa\u73af"),"\u5c06\u6267\u884c\u4e00\u6b21\uff1a"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"loop02.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'adj = ["\u6709\u8da3\u7684", "\u56f0\u96be\u7684", "\u5947\u5999\u7684"]\ncourses = ["\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe", "\u82f1\u8bed\u8bfe", "\u8bed\u6587\u8bfe"]\nfor x in adj:\n  for y in courses:\n    print(x, y)\n')),(0,s.kt)("h3",{id:"\u5faa\u73af\u904d\u5386\u5b57\u7b26\u4e32"},"\u5faa\u73af\u904d\u5386\u5b57\u7b26\u4e32"),(0,s.kt)("p",null,"\u8fde\u5b57\u7b26\u4e32\u90fd\u662f\u53ef\u8fed\u4ee3\u7684\u5bf9\u8c61\uff0c\u5b83\u4eec\u5305\u542b\u4e00\u7cfb\u5217\u7684\u5b57\u7b26\uff1a"),(0,s.kt)("p",null,'\u5faa\u73af\u904d\u5386\u5355\u8bcd "banana" \u4e2d\u7684\u5b57\u6bcd\uff1a'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'for x in "banana":\n  print(x)\n')),(0,s.kt)("h2",{id:"while\u5faa\u73af\u8bed\u53e5"},(0,s.kt)("inlineCode",{parentName:"h2"},"while"),"\u5faa\u73af\u8bed\u53e5"),(0,s.kt)("p",null,"Python\u4e2dwhile\u8bed\u53e5\u7684\u4e00\u822c\u5f62\u5f0f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"while \u5224\u65ad\u6761\u4ef6\uff1a\n  <statements>\n")),(0,s.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762",(0,s.kt)("inlineCode",{parentName:"p"},"while"),"\u6765\u8ba1\u7b971~100\u6c42\u548c\u7684\u7ed3\u679c ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,s.kt)("mrow",{parentName:"msubsup"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("mn",{parentName:"msubsup"},"100")),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum \\limits_{n=1}^{100}n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4682em",verticalAlign:"-0.9671em"}}),(0,s.kt)("span",{parentName:"span",className:"mop op-limits"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.5011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.1329em",marginLeft:"0em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol small-op"},"\u2211"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.95em",marginLeft:"0em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"100"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9671em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"loop03.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"sum = 0\ncount = 0\nwhile count <= 100:\n    sum += count\n    count += 1\nprint(sum)\n")),(0,s.kt)("p",null,"\u5728\u6761\u4ef6\u8bed\u53e5\u4e3a false \u65f6\u6267\u884c\u5219else \u7684\u8bed\u53e5\u5757\uff0c\u82e5\u9047\u5230break\u8bed\u53e5\u5219\u4e0d\u6267\u884celse\u5b50\u53e5\u3002"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"cs201-learn"),"\u7684\u6587\u4ef6\u5939\uff0c\u7528 VS Code \u65b0\u5efa\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,s.kt)("inlineCode",{parentName:"p"},"loop04.py")," \u7684 Python \u6e90\u4ee3\u7801\u6587\u4ef6\u3002\n\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'count = 0\nwhile count < 10:\n    print (count, " \u5c0f\u4e8e 10")\n    count = count + 1\nelse:\n    print (count, " \u5927\u4e8e\u6216\u7b49\u4e8e 10")\n')),(0,s.kt)("h2",{id:"break\u8bed\u53e5"},(0,s.kt)("inlineCode",{parentName:"h2"},"break"),"\u8bed\u53e5"),(0,s.kt)("p",null,"break \u8bed\u53e5\u53ef\u4ee5\u8df3\u51fa for \u548c while \u7684\u5faa\u73af\u4f53\u3002\u82e5\u9047\u5230break\u800c\u4f7f\u5f97 for \u6216 while \u5faa\u73af\u4e2d\u7ec8\u6b62\u800c\u4e14 else \u5757\u5c06\u4e0d\u6267\u884c\u3002"),(0,s.kt)("p",null,"\u4e3e\u4f8b"),(0,s.kt)("h3",{id:"for-in\u5faa\u73af\u4e2d"},(0,s.kt)("inlineCode",{parentName:"h3"},"for-in"),"\u5faa\u73af\u4e2d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"for megs in 'Hello Python':\n    if megs == 'y':\n        break\n    print ('\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a :',megs)\n--------------------------------\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : H\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : e\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : l\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : l\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : o\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a :  \n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : P\n")),(0,s.kt)("h3",{id:"while\u5faa\u73af\u4e2d"},(0,s.kt)("inlineCode",{parentName:"h3"},"while"),"\u5faa\u73af\u4e2d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'counts = 0\nwhile counts < 6:\n    print("counts:" ,counts)\n    if counts == 3:\n        break\n    counts += 1\n---------------------------------\ncounts: 0\ncounts: 1\ncounts: 2\ncounts: 3\n')),(0,s.kt)("h2",{id:"continue\u8bed\u53e5"},(0,s.kt)("inlineCode",{parentName:"h2"},"continue"),"\u8bed\u53e5"),(0,s.kt)("p",null,"continue\u8bed\u53e5\u88ab\u7528\u6765\u544a\u8bc9Python\u8df3\u8fc7\u5f53\u524d\u5faa\u73af\u5757\u4e2d\u7684\u5269\u4f59\u8bed\u53e5\uff0c\u7136\u540e\u7ee7\u7eed\u8fdb\u884c\u4e0b\u4e00\u8f6e\u5faa\u73af\u3002"),(0,s.kt)("h3",{id:"for-in\u5faa\u73af\u4e2d-1"},(0,s.kt)("inlineCode",{parentName:"h3"},"for-in"),"\u5faa\u73af\u4e2d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'counts = 0\nwhile counts < 6:\n    counts += 1\n    if counts == 3:\n        continue\n    print("counts:", counts)\n--------------------------------\ncounts: 1\ncounts: 2\ncounts: 4\ncounts: 5\ncounts: 6\n')),(0,s.kt)("h3",{id:"while\u5faa\u73af\u4e2d-1"},(0,s.kt)("inlineCode",{parentName:"h3"},"while"),"\u5faa\u73af\u4e2d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"for megs in 'Hello Python':\n    if megs == 'y':\n        continue\n    print ('\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a :',megs)\n--------------------------------\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : H\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : e\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : l\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : l\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : o\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a :  \n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : P\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : t\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : h\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : o\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : n-for\n")),(0,s.kt)("h2",{id:"pass\u8bed\u53e5"},(0,s.kt)("inlineCode",{parentName:"h2"},"pass"),"\u8bed\u53e5"),(0,s.kt)("p",null,"pass\u662f\u7a7a\u8bed\u53e5\uff0c\u662f\u4e3a\u4e86\u4fdd\u6301\u7a0b\u5e8f\u7ed3\u6784\u7684\u5b8c\u6574\u6027\u3002pass \u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5\uff0c\u4e00\u822c\u7528\u505a\u5360\u4f4d\u8bed\u53e5\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'for char in "Hello World":\n    if char == \'W\':\n        pass\n        print("\u6267\u884cpass\u8bed\u53e5")\n    print("char: " ,char)\n------------------------------\nchar:  H\nchar:  e\nchar:  l\nchar:  l\nchar:  o\nchar:   \n\u6267\u884cpass\u8bed\u53e5\nchar:  W\nchar:  o\nchar:  r\nchar:  l\nchar:  d\n')))}k.isMDXComponent=!0}}]);