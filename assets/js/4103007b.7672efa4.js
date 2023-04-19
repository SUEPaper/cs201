"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[339],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(t),c=l,d=k["".concat(o,".").concat(c)]||k[c]||m[c]||a;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,p=new Array(a);p[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[k]="string"==typeof e?e:l,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const a={id:"loop",sidebar_position:9},p="\u5faa\u73af\u548c\u8fed\u4ee3",i={unversionedId:"python/loop",id:"python/loop",title:"\u5faa\u73af\u548c\u8fed\u4ee3",description:"Python \u5faa\u73af",source:"@site/docs/python/loop.md",sourceDirName:"python",slug:"/python/loop",permalink:"/cs201/docs/python/loop",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"loop",sidebar_position:9},sidebar:"pythonSidebar",previous:{title:"\u51fd\u6570\u548c\u9ad8\u9636\u51fd\u6570",permalink:"/cs201/docs/python/function"},next:{title:"\u9012\u5f52",permalink:"/cs201/docs/python/recursion"}},o={},s=[{value:"Python \u5faa\u73af",id:"python-\u5faa\u73af",level:2},{value:"while \u5faa\u73af",id:"while-\u5faa\u73af",level:3},{value:"break \u8bed\u53e5",id:"break-\u8bed\u53e5",level:4},{value:"else \u8bed\u53e5",id:"else-\u8bed\u53e5",level:4},{value:"for \u5faa\u73af",id:"for-\u5faa\u73af",level:3},{value:"\u5faa\u73af\u904d\u5386\u5b57\u7b26\u4e32",id:"\u5faa\u73af\u904d\u5386\u5b57\u7b26\u4e32",level:4},{value:"break \u8bed\u53e5",id:"break-\u8bed\u53e5-1",level:4},{value:"continue \u8bed\u53e5",id:"continue-\u8bed\u53e5",level:4},{value:"range() \u51fd\u6570",id:"range-\u51fd\u6570",level:4},{value:"For \u5faa\u73af\u4e2d\u7684 else",id:"for-\u5faa\u73af\u4e2d\u7684-else",level:4},{value:"\u5d4c\u5957\u5faa\u73af",id:"\u5d4c\u5957\u5faa\u73af",level:4},{value:"pass \u8bed\u53e5",id:"pass-\u8bed\u53e5",level:4},{value:"Python \u8fed\u4ee3",id:"python-\u8fed\u4ee3",level:2},{value:"\u53ef\u8fed\u4ee3\u5bf9\u8c61(Iterable)\uff1a",id:"\u53ef\u8fed\u4ee3\u5bf9\u8c61iterable",level:3},{value:"Python \u8fed\u4ee3\u5668",id:"python-\u8fed\u4ee3\u5668",level:3},{value:"\u8fed\u4ee3\u5668 VS \u53ef\u8fed\u4ee3\u5bf9\u8c61\uff08Iterable\uff09",id:"\u8fed\u4ee3\u5668-vs-\u53ef\u8fed\u4ee3\u5bf9\u8c61iterable",level:3},{value:"\u904d\u5386\u8fed\u4ee3\u5668",id:"\u904d\u5386\u8fed\u4ee3\u5668",level:3},{value:"\u521b\u5efa\u8fed\u4ee3\u5668",id:"\u521b\u5efa\u8fed\u4ee3\u5668",level:3},{value:"StopIteration",id:"stopiteration",level:3}],u={toc:s},k="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(k,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5faa\u73af\u548c\u8fed\u4ee3"},"\u5faa\u73af\u548c\u8fed\u4ee3"),(0,l.kt)("h2",{id:"python-\u5faa\u73af"},"Python \u5faa\u73af"),(0,l.kt)("p",null,"Python \u6709\u4e24\u4e2a\u539f\u59cb\u7684\u5faa\u73af\u547d\u4ee4:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"while \u5faa\u73af"),(0,l.kt)("li",{parentName:"ul"},"for \u5faa\u73af")),(0,l.kt)("h3",{id:"while-\u5faa\u73af"},"while \u5faa\u73af"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528 while \u5faa\u73af\uff0c\u53ea\u8981\u6761\u4ef6\u4e3a\u771f\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u6267\u884c\u4e00\u7ec4\u8bed\u53e5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 1")),(0,l.kt)("p",null,"\u5982\u679c i \u5c0f\u4e8e 10\uff0c\u6253\u5370 i\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"i = 1\nwhile i < 10:\n  print(i)\n  i += 1\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u91cc\u8bb0\u5f97\u9012\u589e i\uff0c\u5426\u5219\u5faa\u73af\u4f1a\u6c38\u8fdc\u7ee7\u7eed,(\u4e5f\u5c31\u662f\u6b7b\u5faa\u73af)\u3002"),(0,l.kt)("p",{parentName:"admonition"},"while \u5faa\u73af\u9700\u8981\u51c6\u5907\u597d\u76f8\u5173\u7684\u53d8\u91cf\u3002\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u5224\u65ad\u53d8\u91cf i")),(0,l.kt)("h4",{id:"break-\u8bed\u53e5"},"break \u8bed\u53e5"),(0,l.kt)("p",null,"\u4f7f\u7528 break \u8bed\u53e5\uff0c\u5f53 while \u6761\u4ef6\u4e3a\u771f\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8df3\u51fa\u5faa\u73af"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 2")),(0,l.kt)("p",null,"\u5982\u679c i \u7b49\u4e8e 3\uff0c\u5219\u7ee7\u7eed\u4e0b\u4e00\u4e2a\u8fed\u4ee3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"i = 0\nwhile i < 10:\n  i += 1\n  if i == 3:\n    continue\n  print(i)\n")),(0,l.kt)("h4",{id:"else-\u8bed\u53e5"},"else \u8bed\u53e5"),(0,l.kt)("p",null,"\u4f7f\u7528 else \u8bed\u53e5\uff0c\u5f53\u6761\u4ef6\u4e0d\u518d\u6210\u7acb\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4e00\u6b21\u4ee3\u7801\u5757\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 3")),(0,l.kt)("p",null,"\u6761\u4ef6\u4e3a\u5047\u65f6\uff0c\u6253\u5370\u4e00\u6761\u6d88\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'i = 1\nwhile i < 10:\n  print(i)\n  i += 1\nelse:\n  print("i is no longer less than 10")\n')),(0,l.kt)("h3",{id:"for-\u5faa\u73af"},"for \u5faa\u73af"),(0,l.kt)("p",null,"\u6bd4\u8d77 while \uff0cfor \u5faa\u73af\u66f4\u4e3a\u5e38\u89c1\u3002for \u5faa\u73af\u7528\u4e8e\u8fed\u4ee3\u5e8f\u5217\uff08\u5373\u5217\u8868\uff0c\u5143\u7ec4\uff0c\u5b57\u5178\uff0c\u96c6\u5408\u6216\u5b57\u7b26\u4e32\uff09\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e0e\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684 for \u5173\u952e\u5b57\u4e0d\u592a\u76f8\u4f3c\uff0c\u800c\u662f\u66f4\u50cf\u5176\u4ed6\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u8fed\u4ee3\u5668\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 for \u5faa\u73af\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u5217\u8868\u3001\u5143\u7ec4\u3001\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u9879\u76ee\u7b49\u6267\u884c\u4e00\u7ec4\u8bed\u53e5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 4")),(0,l.kt)("p",null,"\u6253\u5370 courses \u5217\u8868\u4e2d\u7684\u6bcf\u79cd\u8bfe\u7a0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'courses = ["\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe", "\u82f1\u8bed\u8bfe", "\u8bed\u6587\u8bfe"]\nfor x in class:\n  print(x)\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"for \u5faa\u73af\u4e0d\u9700\u8981\u9884\u5148\u8bbe\u7f6e\u7d22\u5f15\u53d8\u91cf\u3002")),(0,l.kt)("h4",{id:"\u5faa\u73af\u904d\u5386\u5b57\u7b26\u4e32"},"\u5faa\u73af\u904d\u5386\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,"\u8fde\u5b57\u7b26\u4e32\u90fd\u662f\u53ef\u8fed\u4ee3\u7684\u5bf9\u8c61\uff0c\u5b83\u4eec\u5305\u542b\u4e00\u7cfb\u5217\u7684\u5b57\u7b26\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 5")),(0,l.kt)("p",null,'\u5faa\u73af\u904d\u5386\u5355\u8bcd "banana" \u4e2d\u7684\u5b57\u6bcd\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'for x in "banana":\n  print(x)\n')),(0,l.kt)("h4",{id:"break-\u8bed\u53e5-1"},"break \u8bed\u53e5"),(0,l.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 break \u8bed\u53e5\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5faa\u73af\u904d\u5386\u6240\u6709\u9879\u76ee\u4e4b\u524d\u8df3\u51fa\u5faa\u73af\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'course = ["\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe", "\u82f1\u8bed\u8bfe", "\u8bed\u6587\u8bfe"]\nfor x in courses:\n  print(x)\n  if x == "\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe":\n    break\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 6")),(0,l.kt)("p",null,'\u5f53 x \u4e3a "\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe" \u65f6\u9000\u51fa\u5faa\u73af\uff0c\u4f46\u8fd9\u6b21\u5728\u6253\u5370\u4e4b\u524d\u4e2d\u65ad\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'courses = ["\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe", "\u82f1\u8bed\u8bfe", "\u8bed\u6587\u8bfe"]\nfor x in class:\n  if x == "\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe":\n    break\nprint(x)\n')),(0,l.kt)("h4",{id:"continue-\u8bed\u53e5"},"continue \u8bed\u53e5"),(0,l.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 continue \u8bed\u53e5\uff0c\u6211\u4eec\u53ef\u4ee5\u505c\u6b62\u5faa\u73af\u7684\u5f53\u524d\u8fed\u4ee3\uff0c\u5e76\u7ee7\u7eed\u4e0b\u4e00\u4e2a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 7")),(0,l.kt)("p",null,"\u4e0d\u6253\u5370\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'courses = ["\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe", "\u82f1\u8bed\u8bfe", "\u8bed\u6587\u8bfe"]\nfor x in courses:\n  if x == "\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe":\n    continue\nprint(x)\n')),(0,l.kt)("h4",{id:"range-\u51fd\u6570"},"range() \u51fd\u6570"),(0,l.kt)("p",null,"\u5982\u9700\u5faa\u73af\u4e00\u7ec4\u4ee3\u7801\u6307\u5b9a\u7684\u6b21\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 range() \u51fd\u6570\uff0crange() \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u5e8f\u5217\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ece 0 \u5f00\u59cb\uff0c\u5e76\u9012\u589e 1\uff08\u9ed8\u8ba4\u5730\uff09\uff0c\u5e76\u4ee5\u6307\u5b9a\u7684\u6570\u5b57\u7ed3\u675f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 8")),(0,l.kt)("p",null,"\u4f7f\u7528 range() \u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for x in range(10):\n  print(x)\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"range(10) \u4e0d\u662f 0 \u5230 10 \u7684\u503c\uff0c\u800c\u662f\u503c 0 \u5230 9\u3002"),(0,l.kt)("p",{parentName:"admonition"},"range() \u51fd\u6570\u9ed8\u8ba4 0 \u4e3a\u8d77\u59cb\u503c\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u53c2\u6570\u6765\u6307\u5b9a\u8d77\u59cb\u503c\uff1arange(3, 10)\uff0c\u8fd9\u610f\u5473\u7740\u503c\u4e3a 3 \u5230 10\uff08\u5305\u62ec 3\uff0c\u4f46\u4e0d\u5305\u62ec 10\uff09\uff1a")),(0,l.kt)("p",null,"range() \u51fd\u6570\u9ed8\u8ba4\u5c06\u5e8f\u5217\u9012\u589e 1\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u7b2c\u4e09\u4e2a\u53c2\u6570\u6765\u6307\u5b9a\u589e\u91cf\u503c\uff1arange(2, 30, 3)\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 9")),(0,l.kt)("p",null,"\u4f7f\u7528 3 \u9012\u589e\u5e8f\u5217\uff08\u9ed8\u8ba4\u503c\u4e3a 1\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for x in range(3, 50, 6):\n  print(x)\n")),(0,l.kt)("h4",{id:"for-\u5faa\u73af\u4e2d\u7684-else"},"For \u5faa\u73af\u4e2d\u7684 else"),(0,l.kt)("p",null,"for \u5faa\u73af\u4e2d\u7684 else \u5173\u952e\u5b57\u6307\u5b9a\u5faa\u73af\u7ed3\u675f\u65f6\u8981\u6267\u884c\u7684\u4ee3\u7801\u5757\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 10")),(0,l.kt)("p",null,"\u6253\u5370 0 \u5230 9 \u7684\u6240\u6709\u6570\u5b57\uff0c\u5e76\u5728\u5faa\u73af\u7ed3\u675f\u65f6\u6253\u5370\u4e00\u6761\u6d88\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'for x in range(10):\n  print(x)\nelse:\n  print("welcome to numerical computing Methods")\n')),(0,l.kt)("h4",{id:"\u5d4c\u5957\u5faa\u73af"},"\u5d4c\u5957\u5faa\u73af"),(0,l.kt)("p",null,"\u5d4c\u5957\u5faa\u73af\u662f\u5faa\u73af\u5185\u7684\u5faa\u73af\u3002"),(0,l.kt)("p",null,"\u201c\u5916\u5faa\u73af\u201d\u6bcf\u8fed\u4ee3\u4e00\u6b21\uff0c\u201c\u5185\u5faa\u73af\u201d\u5c06\u6267\u884c\u4e00\u6b21\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 11")),(0,l.kt)("p",null,"\u6253\u5370\u6bcf\u4e2a\u8bfe\u7a0b\u7684\u6bcf\u4e2a\u5f62\u5bb9\u8bcd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'adj = ["\u6709\u8da3\u7684", "\u56f0\u96be\u7684", "\u5947\u5999\u7684"]\ncourses = ["\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe", "\u82f1\u8bed\u8bfe", "\u8bed\u6587\u8bfe"]\nfor x in adj:\n  for y in courses:\n    print(x, y)\n')),(0,l.kt)("h4",{id:"pass-\u8bed\u53e5"},"pass \u8bed\u53e5"),(0,l.kt)("p",null,"for \u8bed\u53e5\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4f46\u662f\u5982\u679c\u60a8\u5904\u4e8e\u67d0\u79cd\u539f\u56e0\u5199\u4e86\u65e0\u5185\u5bb9\u7684 for \u8bed\u53e5\uff0c\u8bf7\u4f7f\u7528 pass \u8bed\u53e5\u6765\u907f\u514d\u9519\u8bef\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 12")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for x in [0, 1, 2]:\n  pass\n")),(0,l.kt)("h2",{id:"python-\u8fed\u4ee3"},"Python \u8fed\u4ee3"),(0,l.kt)("p",null,"\u8fed\u4ee3\u662f\u901a\u8fc7\u91cd\u590d\u6267\u884c\u7684\u4ee3\u7801\u5904\u7406\u76f8\u4f3c\u7684\u6570\u636e\u96c6\u7684\u8fc7\u7a0b\uff0c\u5e76\u4e14\u672c\u6b21\u8fed\u4ee3\u7684\u5904\u7406\u6570\u636e\u8981\u4f9d\u8d56\u4e0a\u4e00\u6b21\u7684\u7ed3\u679c\u7ee7\u7eed\u5f80\u4e0b\u505a\uff0c\u4e0a\u4e00\u6b21\u4ea7\u751f\u7684\u7ed3\u679c\u4e3a\u4e0b\u4e00\u6b21\u4ea7\u751f\u7ed3\u679c\u7684\u521d\u59cb\u72b6\u6001\uff0c\u5982\u679c\u4e2d\u9014\u6709\u4efb\u4f55\u505c\u987f\uff0c\u90fd\u4e0d\u80fd\u7b97\u662f\u8fed\u4ee3\u3002"),(0,l.kt)("h3",{id:"\u53ef\u8fed\u4ee3\u5bf9\u8c61iterable"},"\u53ef\u8fed\u4ee3\u5bf9\u8c61(Iterable)\uff1a"),(0,l.kt)("p",null,"\u53ef\u8fed\u4ee3\u5bf9\u8c61\u5e76\u4e0d\u662f\u6307\u67d0\u79cd\u5177\u4f53\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u662f\u6307\u5b58\u50a8\u4e86\u5143\u7d20\u7684\u4e00\u4e2a\u5bb9\u5668\u5bf9\u8c61\uff0c\u4e14\u5bb9\u5668\u4e2d\u7684\u5143\u7d20\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"iter"),"( )\u65b9\u6cd5\u6216",(0,l.kt)("strong",{parentName:"p"},"getitem"),"( )\u65b9\u6cd5\u8bbf\u95ee\u3002\na.\u96c6\u5408\u6570\u636e\u7c7b\u578b\uff0c\u5982 list\u3001tuple\u3001dict\u3001set\u3001str \u7b49\uff1b"),(0,l.kt)("p",null,"b.\u751f\u6210\u5668(generator)\uff0c\u5305\u62ec\u751f\u6210\u5668\u548c\u5e26 yield \u7684\u751f\u6210\u5668\u51fd\u6570(generator function)\u3002"),(0,l.kt)("h3",{id:"python-\u8fed\u4ee3\u5668"},"Python \u8fed\u4ee3\u5668"),(0,l.kt)("p",null,"\u8fed\u4ee3\u5668\u662f\u4e00\u79cd\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5305\u542b\u503c\u7684\u53ef\u8ba1\u6570\u6570\u5b57\u3002"),(0,l.kt)("p",null,"\u8fed\u4ee3\u5668\u662f\u53ef\u8fed\u4ee3\u7684\u5bf9\u8c61\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u904d\u5386\u6240\u6709\u503c\u3002"),(0,l.kt)("p",null,"\u4ece\u6280\u672f\u4e0a\u8bb2\uff0c\u5728 Python \u4e2d\uff0c\u8fed\u4ee3\u5668\u662f\u5b9e\u73b0\u8fed\u4ee3\u5668\u534f\u8bae\u7684\u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u65b9\u6cd5 ",(0,l.kt)("strong",{parentName:"p"},"iter"),"() \u548c ",(0,l.kt)("strong",{parentName:"p"},"next"),"()\u3002"),(0,l.kt)("h3",{id:"\u8fed\u4ee3\u5668-vs-\u53ef\u8fed\u4ee3\u5bf9\u8c61iterable"},"\u8fed\u4ee3\u5668 VS \u53ef\u8fed\u4ee3\u5bf9\u8c61\uff08Iterable\uff09"),(0,l.kt)("p",null,"\u5217\u8868\u3001\u5143\u7ec4\u3001\u5b57\u5178\u548c\u96c6\u5408\u90fd\u662f\u53ef\u8fed\u4ee3\u7684\u5bf9\u8c61\u3002\u5b83\u4eec\u662f\u53ef\u8fed\u4ee3\u7684\u5bb9\u5668\uff0c\u60a8\u53ef\u4ee5\u4ece\u4e2d\u83b7\u53d6\u8fed\u4ee3\u5668\uff08Iterator\uff09\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u8fd9\u4e9b\u5bf9\u8c61\u90fd\u6709\u7528\u4e8e\u83b7\u53d6\u8fed\u4ee3\u5668\u7684 iter() \u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 13")),(0,l.kt)("p",null,"\u4ece\u5143\u7ec4\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\uff0c\u5e76\u6253\u5370\u6bcf\u4e2a\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'mytuple = ("\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe", "\u82f1\u8bed\u8bfe", "\u8bed\u6587\u8bfe")\nmyit = iter(mytuple)\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))\n')),(0,l.kt)("p",null,"\u8fde\u5b57\u7b26\u4e32\u90fd\u662f\u53ef\u8fed\u4ee3\u7684\u5bf9\u8c61\uff0c\u5e76\u4e14\u53ef\u4ee5\u8fd4\u56de\u8fed\u4ee3\u5668\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 14")),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u4e5f\u662f\u53ef\u8fed\u4ee3\u7684\u5bf9\u8c61\uff0c\u5305\u542b\u4e00\u7cfb\u5217\u5b57\u7b26\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'mystr = "\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe"\nmyit = iter(mystr)\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))\n')),(0,l.kt)("h3",{id:"\u904d\u5386\u8fed\u4ee3\u5668"},"\u904d\u5386\u8fed\u4ee3\u5668"),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528 for \u5faa\u73af\u904d\u5386\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 15")),(0,l.kt)("p",null,"\u8fed\u4ee3\u5143\u7ec4\u7684\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'mytuple = ("\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe", "\u82f1\u8bed\u8bfe", "\u8bed\u6587\u8bfe")\nfor x in mytuple:\n  print(x)\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 16")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'mystr = "\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5\u5b9e\u8bad\u8bfe"\nfor x in mystr:\n  print(x)\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"for \u5faa\u73af\u5b9e\u9645\u4e0a\u521b\u5efa\u4e86\u4e00\u4e2a\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u5faa\u73af\u6267\u884c next() \u65b9\u6cd5\u3002")),(0,l.kt)("h3",{id:"\u521b\u5efa\u8fed\u4ee3\u5668"},"\u521b\u5efa\u8fed\u4ee3\u5668"),(0,l.kt)("p",null,"\u8981\u628a\u5bf9\u8c61/\u7c7b\u521b\u5efa\u4e3a\u8fed\u4ee3\u5668\uff0c\u5fc5\u987b\u4e3a\u5bf9\u8c61\u5b9e\u73b0 ",(0,l.kt)("strong",{parentName:"p"},"iter"),"() \u548c ",(0,l.kt)("strong",{parentName:"p"},"next"),"() \u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u6b63\u5982\u60a8\u5728 Python \u7c7b/\u5bf9\u8c61 \u4e00\u7ae0\u4e2d\u5b66\u5230\u7684\uff0c\u6240\u6709\u7c7b\u90fd\u6709\u540d\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"init"),"() \u7684\u51fd\u6570\uff0c\u5b83\u5141\u8bb8\u60a8\u5728\u521b\u5efa\u5bf9\u8c61\u65f6\u8fdb\u884c\u4e00\u4e9b\u521d\u59cb\u5316\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"iter"),"() \u65b9\u6cd5\u7684\u4f5c\u7528\u76f8\u4f3c\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u64cd\u4f5c\uff08\u521d\u59cb\u5316\u7b49\uff09\uff0c\u4f46\u5fc5\u987b\u59cb\u7ec8\u8fd4\u56de\u8fed\u4ee3\u5668\u5bf9\u8c61\u672c\u8eab\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"next"),"() \u65b9\u6cd5\u4e5f\u5141\u8bb8\u60a8\u6267\u884c\u64cd\u4f5c\uff0c\u5e76\u4e14\u5fc5\u987b\u8fd4\u56de\u5e8f\u5217\u4e2d\u7684\u4e0b\u4e00\u4e2a\u9879\u76ee\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 17")),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u8fd4\u56de\u6570\u5b57\u7684\u8fed\u4ee3\u5668\uff0c\u4ece 1 \u5f00\u59cb\uff0c\u6bcf\u4e2a\u5e8f\u5217\u5c06\u589e\u52a0 1\uff08\u8fd4\u56de 1\u30012\u30013\u30014\u30015 \u7b49\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"class MyNumbers:\n  def __iter__(self):\n    self.a = 1\n    return self\n\n  def __next__(self):\n    x = self.a\n    self.a += 1\n    return x\n\nmyclass = MyNumbers()\nmyiter = iter(myclass)\n\nprint(next(myiter))\nprint(next(myiter))\nprint(next(myiter))\nprint(next(myiter))\nprint(next(myiter))\n")),(0,l.kt)("h3",{id:"stopiteration"},"StopIteration"),(0,l.kt)("p",null,"\u5982\u679c\u6709\u8db3\u591f\u7684 next() \u8bed\u53e5\uff0c\u6216\u8005\u5728 for \u5faa\u73af\u4e2d\u4f7f\u7528\uff0c\u5219\u4e0a\u9762\u7684\u4f8b\u5b50\u5c06\u6c38\u8fdc\u8fdb\u884c\u4e0b\u53bb\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u8fed\u4ee3\u6c38\u8fdc\u8fdb\u884c\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 StopIteration \u8bed\u53e5\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"next"),"() \u65b9\u6cd5\u4e2d\uff0c\u5982\u679c\u8fed\u4ee3\u5b8c\u6210\u6307\u5b9a\u7684\u6b21\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u7ec8\u6b62\u6761\u4ef6\u6765\u5f15\u53d1\u9519\u8bef\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50 18")),(0,l.kt)("p",null,"\u5728 20 \u4e2a\u8fed\u4ee3\u4e4b\u540e\u505c\u6b62\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"class MyNumbers:\n  def __iter__(self):\n    self.a = 1\n    return self\n\n  def __next__(self):\n    if self.a <= 20:\n      x = self.a\n      self.a += 1\n      return x\n    else:\n      raise StopIteration\n\nmyclass = MyNumbers()\nmyiter = iter(myclass)\n\nfor x in myiter:\n  print(x)\n")))}m.isMDXComponent=!0}}]);