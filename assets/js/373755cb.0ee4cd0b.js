"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[584],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,l=function(n,e){if(null==n)return{};var t,r,l={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var u=r.createContext({}),o=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=o(n.components);return r.createElement(u.Provider,{value:e},n.children)},s="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(n,e){var t=n.components,l=n.mdxType,a=n.originalType,u=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),s=o(t),k=l,m=s["".concat(u,".").concat(k)]||s[k]||f[k]||a;return t?r.createElement(m,i(i({ref:e},c),{},{components:t})):r.createElement(m,i({ref:e},c))}));function m(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var a=t.length,i=new Array(a);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=n,p[s]="string"==typeof n?n:l,i[1]=p;for(var o=2;o<a;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7900:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var r=t(7462),l=(t(7294),t(3905));const a={id:"recursion",sidebar_position:10},i="\u9012\u5f52",p={unversionedId:"python/recursion",id:"python/recursion",title:"\u9012\u5f52",description:"\u9012\u5f52\u51fd\u6570",source:"@site/docs/python/recursion.md",sourceDirName:"python",slug:"/python/recursion",permalink:"/cs201/docs/python/recursion",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"recursion",sidebar_position:10},sidebar:"pythonSidebar",previous:{title:"\u5faa\u73af\u548c\u8fed\u4ee3",permalink:"/cs201/docs/python/loop"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/cs201/docs/category/\u6570\u636e\u7ed3\u6784"}},u={},o=[{value:"\u9012\u5f52\u51fd\u6570",id:"\u9012\u5f52\u51fd\u6570",level:2},{value:"\u9012\u5f52\u601d\u60f3",id:"\u9012\u5f52\u601d\u60f3",level:2},{value:"\u9012\u5f52\u7684\u7f3a\u70b9",id:"\u9012\u5f52\u7684\u7f3a\u70b9",level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u7528\u9012\u5f52",id:"\u4ec0\u4e48\u65f6\u5019\u7528\u9012\u5f52",level:2},{value:"\u5c3e\u9012\u5f52",id:"\u5c3e\u9012\u5f52",level:2}],c={toc:o},s="wrapper";function f(n){let{components:e,...t}=n;return(0,l.kt)(s,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9012\u5f52"},"\u9012\u5f52"),(0,l.kt)("h2",{id:"\u9012\u5f52\u51fd\u6570"},"\u9012\u5f52\u51fd\u6570"),(0,l.kt)("p",null,"\u5982\u679c\u51fd\u6570\u7684\u51fd\u6570\u4f53\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u81ea\u5df1\u8c03\u7528\u81ea\u5df1\uff0c\u90a3\u4e48\u8fd9\u4e2a\u51fd\u6570\u662f\u9012\u5f52\u7684\u3002"),(0,l.kt)("p",null,"\u9012\u5f52\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u6570\u5b66\u548c\u7f16\u7a0b\u6982\u5ff5\u3002\u5b83\u610f\u5473\u7740\u51fd\u6570\u8c03\u7528\u81ea\u8eab\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u53ef\u4ee5\u5faa\u73af\u8bbf\u95ee\u6570\u636e\u4ee5\u8fbe\u6210\u7ed3\u679c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'def tri_recursion(k):\n  if(k>0):\n    result = k+tri_recursion(k-1)\n    print(result)\n  else:\n    result = 0\n  return result\n\nprint("\\n\\nRecursion Example Results")\ntri_recursion(6)\n')),(0,l.kt)("p",null,"\u9012\u5f52\u5b9e\u73b0\u7684\u9636\u4e58\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n-1)\n")),(0,l.kt)("p",null,"\u6590\u6ce2\u90a3\u5951\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"def fibonacci(n):\n    if n == 0 or n == 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n")),(0,l.kt)("p",null,"\u9012\u5f52\u6c42\u5e42"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"def find_power(a, b):\n    if b == 0:\n        return 1\n    else:\n        return a * find_power(a, b-1)\n")),(0,l.kt)("h2",{id:"\u9012\u5f52\u601d\u60f3"},"\u9012\u5f52\u601d\u60f3"),(0,l.kt)("p",null,"\u51fd\u6570\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u8c03\u7528\u81ea\u8eab\u3002"),(0,l.kt)("p",null,"\u9012\u5f52\u6709\u4e09\u5927\u91cd\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u8981\u7d20\uff1a\u660e\u786e\u4f60\u8fd9\u4e2a\u51fd\u6570\u60f3\u8981\u5e72\u4ec0\u4e48\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u8981\u7d20\uff1a\u5bfb\u627e\u9012\u5f52\u7ed3\u675f\u6761\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u8981\u7d20\uff1a\u627e\u51fa\u51fd\u6570\u7684\u7b49\u4ef7\u5173\u7cfb\u5f0f\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u8981\u7d20")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u7684\u529f\u80fd\u662f\u4ec0\u4e48\uff0c\u8fd9\u4e2a\uff0c\u662f\u5b8c\u5168\u7531\u4f60\u81ea\u5df1\u6765\u5b9a\u4e49\u7684\u3002\u51fd\u6570\u5230\u5e95\u8981\u5b9e\u73b0\u4ec0\u4e48\u529f\u80fd,\u6bd4\u5982\u8bf4n\u7684\u9636\u4e58\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"int f(int n){\n \n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u8981\u7d20")),(0,l.kt)("p",null,"\u627e\u51fa\u9012\u5f52\u7684\u7ed3\u675f\u6761\u4ef6\uff0c\u5426\u5219\uff0c\u4f1a\u4e00\u76f4\u8c03\u7528\u81ea\u5df1\uff0c\u51fa\u73b0bug\u3002\u6211\u4eec\u9700\u8981\u627e\u51fa\u5f53\u53c2\u6570\uff0c\u4f7f\u9012\u5f52\u7ed3\u675f\uff0c\u4e4b\u540e\u76f4\u63a5\u628a\u7ed3\u679c\u8fd4\u56de\uff0c\u8bf7\u6ce8\u610f\uff01\uff01\uff01\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5fc5\u987b\u80fd\u6839\u636e\u8fd9\u4e2a\u53c2\u6570\u7684\u503c\uff0c\u80fd\u591f\u76f4\u63a5\u77e5\u9053\u51fd\u6570\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0a\u9762\uff0c\u5f53 n = 1 \u65f6\uff0c\u90a3\u4f60\u5e94\u8be5\u80fd\u591f\u76f4\u63a5\u77e5\u9053 f(n) \u662f\u4ec0\u4e48\uff1f\u6b64\u65f6\uff0cf(1) = 1\u3002\u5b8c\u5584\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\uff0c\u628a\u7b2c\u4e8c\u8981\u7d20\u52a0\u8fdb\u4ee3\u7801\u91cc\u9762"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"// \u7b97 n \u7684\u9636\u4e58(\u5047\u8bben\u4e0d\u4e3a0)\nint f(int n){\n    if(n == 1){\n        return 1;\n    }\n}\n")),(0,l.kt)("p",null,"\u5047\u8bben\u4e3a\u56fa\u5b9a\u503c\uff0c\u5f53n=10\u65f6\uff0c\u90a3\u60f3\u53ef\u4ee5\u76f4\u63a5\u77e5\u9053 f(n) \u7b49\u4e8e\u591a\u5c11\uff1f\u90a3\u53ef\u4ee5\u628an=10\u4f5c\u4e3a\u9012\u5f52\u7684\u7ed3\u675f\u6761\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"// \u7b97 n \u7684\u9636\u4e58(\u5047\u8bben>=10)\nint f(int n){\n    if(n == 10){\n        return 10;\n    }\n")),(0,l.kt)("p",null,"\u6ce8\u610f\u6211\u4ee3\u7801\u91cc\u9762\u5199\u7684\u6ce8\u91ca\uff0c\u5047\u8bbe n>=10\uff0c\u56e0\u4e3a\u5982\u679c n=1 \u65f6\uff0c\u4f1a\u88ab\u6f0f\u6389\uff0c\u5f53 n<=10 \u65f6\uff0cf(n)=n\uff0c\u6240\u4ee5\u4e3a\u4e86\u66f4\u52a0\u4e25\u8c28\uff0c\u6211\u4eec\u53ef\u4ee5\u5199\u6210\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"// \u7b97 n \u7684\u9636\u4e58(\u5047\u8bben\u4e0d\u4e3a0)\nint f(int n){\n    if(n <=10){\n        return n;\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u8981\u7d20")),(0,l.kt)("p",null,"\u627e\u51fa\u51fd\u6570\u7684\u7b49\u4ef7\u5173\u7cfb\u5f0f\u3002\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4e0d\u65ad\u7f29\u5c0f\u53c2\u6570\u7684\u8303\u56f4\uff0c\u7f29\u5c0f\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u8f85\u52a9\u7684\u53d8\u91cf\uff0c\u4f7f\u539f\u51fd\u6570\u7684\u7ed3\u679c\u4e0d\u53d8\u3002"),(0,l.kt)("p",null,"f(n) \u8fd9\u4e2a\u8303\u56f4\u6bd4\u8f83\u5927\uff0c\u6211\u4eec\u53ef\u4ee5\u8ba9 f(n) = n",(0,l.kt)("em",{parentName:"p"},"f(n-1)\u3002\u8fd9\u6837\uff0c\u8303\u56f4\u5c31\u7531n\u53d8\u6210\u4e86n-1\u4e86\uff0c\u8303\u56f4\u53d8\u5c0f\u4e86\uff0c\u5e76\u4e14\u4e3a\u4e86\u539f\u51fd\u6570f(n) \u4e0d\u53d8\uff0c\u6211\u4eec\u9700\u8981\u8ba9 f(n-1) \u4e58\u4ee5n\u3002\u5c31\u662f\u8981\u627e\u5230\u539f\u51fd\u6570\u7684\u4e00\u4e2a\u7b49\u4ef7\u5173\u7cfb\u5f0f\uff1af(n) = n ")," f(n-1)\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"f(5)\n=>5*f(4)\n=>5*(4*f(3))\n=>5*(4*(3*f(2)))\n=>5*(4*(3*(2*f(1))))\n=>5*(4*(3*(2*1)))\n=>5*(4*(3*2))\n=>5*(4*6)\n=>5*24\n=>120\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u5c31\u663e\u793a\u4e86\u4e00\u4e2a\u9012\u5f52\u7684\u6d41\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u9012\u5f52\u7684\u7f3a\u70b9"},"\u9012\u5f52\u7684\u7f3a\u70b9"),(0,l.kt)("p",null,"\u9012\u5f52\u662f\u5229\u7528\u5806\u6808\u6765\u5b9e\u73b0\u7684\u3002\u6bcf\u5f53\u8fdb\u5165\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u6808\u5c31\u4f1a\u589e\u52a0\u4e00\u5c42\u6808\u5e27\uff0c\u6bcf\u6b21\u51fd\u6570\u8fd4\u56de\uff0c\u6808\u5c31\u4f1a\u51cf\u5c11\u4e00\u5c42\u6808\u5e27\u3002\u800c\u6808\u4e0d\u662f\u65e0\u9650\u5927\u7684\uff0c\u5f53\u9012\u5f52\u5c42\u6570\u8fc7\u591a\u65f6\uff0c\u5c31\u4f1a\u9020\u6210 \u6808\u6ea2\u51fa\u7684\u540e\u679c\u3002"),(0,l.kt)("p",null,"\u663e\u7136\u6709\u65f6\u5019\u9012\u5f52\u5904\u7406\u662f\u9ad8\u6548\u7684\uff0c\u6bd4\u5982\u5f52\u5e76\u6392\u5e8f\uff1b\u6709\u65f6\u5019\u662f\u4f4e\u6548\u7684\uff0c\u56e0\u4e3a\u5806\u6808\u4f1a\u6d88\u8017\u989d\u5916\u7a7a\u95f4\uff0c\u800c\u7b80\u5355\u7684\u9012\u63a8\u4e0d\u4f1a\u6d88\u8017\u7a7a\u95f4\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u7528\u9012\u5f52"},"\u4ec0\u4e48\u65f6\u5019\u7528\u9012\u5f52"),(0,l.kt)("p",null,"\u5177\u6709\u4ee5\u4e0b\u7279\u5f81\u7684\u95ee\u9898\u53ef\u8003\u8651\u9012\u5f52\u6c42\u89e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u95ee\u9898\u548c\u5b50\u95ee\u9898\u5177\u6709\u9012\u63a8\u5173\u7cfb\uff0c\u6bd4\u5982\u6768\u8f89\u4e09\u89d2\u3001\u9636\u4e58\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709\u9012\u5f52\u6027\u8d28\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6bd4\u5982\u94fe\u8868\u3001\u6811\u3001\u56fe\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53cd\u5411\u6027\u95ee\u9898\uff0c\u6bd4\u5982\u53d6\u53cd\u3002\n\u5c42\u5c42\u62c6\u89e3\u5c31\u53ef\u4ee5\u4f7f\u7528\u9012\u5f52\u3002")),(0,l.kt)("h2",{id:"\u5c3e\u9012\u5f52"},"\u5c3e\u9012\u5f52"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u4e2d\u6240\u6709\u9012\u5f52\u5f62\u5f0f\u7684\u8c03\u7528\u90fd\u51fa\u73b0\u5728\u51fd\u6570\u7684\u672b\u5c3e\uff0c\u6211\u4eec\u79f0\u8fd9\u4e2a\u9012\u5f52\u51fd\u6570\u662f\u5c3e\u9012\u5f52\u7684\u3002\u5f53\u9012\u5f52\u8c03\u7528\u662f\u6574\u4e2a\u51fd\u6570\u4f53\u4e2d\u6700\u540e\u6267\u884c\u7684\u8bed\u53e5\u4e14\u5b83\u7684\u8fd4\u56de\u503c\u4e0d\u5c5e\u4e8e\u8868\u8fbe\u5f0f\u7684\u4e00\u90e8\u5206\u65f6\uff0c\u8fd9\u4e2a\u9012\u5f52\u8c03\u7528\u5c31\u662f\u5c3e\u9012\u5f52\u3002"),(0,l.kt)("p",null,"\u5c3e\u9012\u5f52\u51fd\u6570\u7684\u7279\u70b9\u662f\u5728\u56de\u5f52\u8fc7\u7a0b\u4e2d\u4e0d\u7528\u505a\u4efb\u4f55\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u7279\u6027\u5f88\u91cd\u8981\uff0c\u56e0\u4e3a\u5927\u591a\u6570\u73b0\u4ee3\u7684\u7f16\u8bd1\u5668\u4f1a\u5229\u7528\u8fd9\u79cd\u7279\u70b9\u81ea\u52a8\u751f\u6210\u4f18\u5316\u7684\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"int facttail(int n, int a)\n{\n \n    /*Compute a factorialina tail - recursive manner.*/\n     \n    if (n < 0)\n        return 0;    \n    else if (n == 0)\n        return 1;    \n    else if (n == 1)\n        return a;\n    else\n        return facttail(n - 1, n * a);\n \n}\n")))}f.isMDXComponent=!0}}]);