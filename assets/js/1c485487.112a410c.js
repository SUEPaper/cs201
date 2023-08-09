"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[69],{3905:(n,e,t)=>{t.d(e,{Zo:()=>k,kt:()=>N});var a=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var i=a.createContext({}),m=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},k=function(n){var e=m(n.components);return a.createElement(i.Provider,{value:e},n.children)},d="mdxType",o={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,i=n.parentName,k=u(n,["components","mdxType","originalType","parentName"]),d=m(t),s=l,N=d["".concat(i,".").concat(s)]||d[s]||o[s]||r;return t?a.createElement(N,p(p({ref:e},k),{},{components:t})):a.createElement(N,p({ref:e},k))}));function N(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,p=new Array(r);p[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=n,u[d]="string"==typeof n?n:l,p[1]=u;for(var m=2;m<r;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3527:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>r,metadata:()=>u,toc:()=>m});var a=t(7462),l=(t(7294),t(3905));const r={id:"variable",sidebar_position:2},p="\u53d8\u91cf\u3001\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",u={unversionedId:"python/variable",id:"python/variable",title:"\u53d8\u91cf\u3001\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",description:"\u53d8\u91cf",source:"@site/docs/python/variable.md",sourceDirName:"python",slug:"/python/variable",permalink:"/cs201/python/variable",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"variable",sidebar_position:2},sidebar:"pythonSidebar",previous:{title:"\u5173\u4e8ePython",permalink:"/cs201/python/"},next:{title:"\u63a7\u5236\u8bed\u53e5",permalink:"/cs201/python/control"}},i={},m=[{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u53d8\u91cf\u7684\u547d\u540d",id:"\u53d8\u91cf\u7684\u547d\u540d",level:3},{value:"\u53d8\u91cf\u7684\u8f93\u5165",id:"\u53d8\u91cf\u7684\u8f93\u5165",level:3},{value:"\u53d8\u91cf\u7684\u8f93\u51fa",id:"\u53d8\u91cf\u7684\u8f93\u51fa",level:3},{value:"\u8868\u8fbe\u5f0f",id:"\u8868\u8fbe\u5f0f",level:2},{value:"\u5e38\u7528\u7684\u8868\u8fbe\u5f0f\u64cd\u4f5c\u7b26",id:"\u5e38\u7528\u7684\u8868\u8fbe\u5f0f\u64cd\u4f5c\u7b26",level:3},{value:"\u7b97\u6570\u8fd0\u7b97",id:"\u7b97\u6570\u8fd0\u7b97",level:4},{value:"\u903b\u8f91\u8fd0\u7b97",id:"\u903b\u8f91\u8fd0\u7b97",level:4},{value:"\u5bf9\u8c61\u5b9e\u4f8b\u6d4b\u8bd5",id:"\u5bf9\u8c61\u5b9e\u4f8b\u6d4b\u8bd5",level:4},{value:"\u6bd4\u8f83\u8fd0\u7b97",id:"\u6bd4\u8f83\u8fd0\u7b97",level:4},{value:"\u4f4d\u8fd0\u7b97",id:"\u4f4d\u8fd0\u7b97",level:4},{value:"\u4e00\u5143\u8fd0\u7b97",id:"\u4e00\u5143\u8fd0\u7b97",level:4},{value:"\u5e42\u8fd0\u7b97",id:"\u5e42\u8fd0\u7b97",level:4},{value:"\u7d22\u5f15\u548c\u5206\u7247",id:"\u7d22\u5f15\u548c\u5206\u7247",level:4},{value:"lambda\u8868\u8fbe\u5f0f",id:"lambda\u8868\u8fbe\u5f0f",level:4},{value:"\u4f18\u5148\u7ea7",id:"\u4f18\u5148\u7ea7",level:3},{value:"\u8bed\u53e5",id:"\u8bed\u53e5",level:2},{value:"\u8d4b\u503c\u8bed\u53e5",id:"\u8d4b\u503c\u8bed\u53e5",level:3},{value:"assert\u8bed\u53e5",id:"assert\u8bed\u53e5",level:3},{value:"del\u8bed\u53e5",id:"del\u8bed\u53e5",level:3},{value:"return\u8bed\u53e5",id:"return\u8bed\u53e5",level:3}],k={toc:m},d="wrapper";function o(n){let{components:e,...r}=n;return(0,l.kt)(d,(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u53d8\u91cf\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5"},"\u53d8\u91cf\u3001\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5"),(0,l.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("p",null,"\u2003","\u53d8\u91cf\u7684\u6982\u5ff5\u90fd\u662f\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u4e00\u4e2a\u6700\u57fa\u672c\u7684\u6784\u4ef6\uff0c\u53d8\u91cf\u6709\u4e00\u4e2a\u540d\u79f0\u548c\u4e00\u4e2a\u5185\u5b58\u4e2d\u7528\u4e8e\u5b58\u50a8\u5176\u503c\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u2003","\u5728Python\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\u901a\u5e38\u662f\u521b\u5efa\u4e00\u4e2a\u53d8\u91cf\u5e76\u4e3a\u8fd9\u4e2a\u53d8\u91cf\u8d4b\u503c\u3002\u53d8\u91cf\u8d4b\u503c\u4ee5\u540e\u8be5\u53d8\u91cf\u624d\u4f1a\u88ab\u521b\u5efa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"<var_name> = <value>\n")),(0,l.kt)("p",null,"\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"number = 123\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'name = "XiaoMing"\n')),(0,l.kt)("h3",{id:"\u53d8\u91cf\u7684\u547d\u540d"},"\u53d8\u91cf\u7684\u547d\u540d"),(0,l.kt)("p",null,"\u53d8\u91cf\u7684\u547d\u540d\u5206\u4e3a\u6807\u8bc6\u7b26\u548c\u5173\u952e\u8bcd\uff1a\n","\u2003","\u6807\u8bc6\u7b26\u5c31\u662f\u7531\u6211\u4eec\u81ea\u5df1\u5b9a\u4e49\u7684\u53d8\u91cf\u540d\uff0c\u51fd\u6570\u540d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u547d\u540d\u8981\u987e\u540d\u601d\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u6807\u8bc6\u7b26\u53ef\u4ee5\u7531\u5b57\u6bcd\uff0c\u4e0b\u5212\u7ebf\u548c\u6570\u5b57\u7ec4\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4e8e\u5173\u952e\u8bcd\u91cd\u540d"),(0,l.kt)("li",{parentName:"ul"},"Python\u4e2d\u6807\u8bc6\u7b26\u8981\u533a\u5206\u5927\u5c0f\u5199")),(0,l.kt)("p",null,"\u2003","\u5173\u952e\u5b57\u662fPython\u5185\u90e8\u5df2\u7ecf\u4f7f\u7528\u7684\u6807\u8bc6\u7b26\uff0c\u5177\u6709\u7279\u6b8a\u7684\u529f\u80fd\u548c\u542b\u4e49"),(0,l.kt)("p",null,"\u53ef\u901a\u8fc7\u4e00\u4e0b\u547d\u4ee4\u67e5\u770bPython\u4e2d\u7684\u5173\u952e\u8bcd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"import keyword\nprint (keyword.kwlist)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1",src:t(6938).Z,width:"1202",height:"105"}),(0,l.kt)("center",null,"\u5f00\u53d1\u8005\u4e0d\u5141\u8bb8\u5b9a\u4e49\u548c\u5173\u952e\u5b57\u76f8\u540c\u7684\u540d\u5b57\u7684\u6807\u793a\u7b26")),(0,l.kt)("p",null,"\u5728Python\u4e2d\u5b9a\u4e49\u53d8\u91cf\u4e0d\u9700\u8981\u6307\u5b9a\u7c7b\u578b\uff0c\u6570\u636e\u7c7b\u578b\u5206\u4e3a\u6570\u5b57\u578b\u548c\u975e\u6570\u5b57\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u5b57\u578b",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6574\u578b(int)"),(0,l.kt)("li",{parentName:"ol"},"\u6d6e\u70b9\u578b(float)"),(0,l.kt)("li",{parentName:"ol"},"\u5e03\u5c14\u578b(bool)"))),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6570\u5b57\u578b",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ol"},"\u5217\u8868"),(0,l.kt)("li",{parentName:"ol"},"\u5143\u7ec4"),(0,l.kt)("li",{parentName:"ol"},"\u5b57\u5178")))),(0,l.kt)("h3",{id:"\u53d8\u91cf\u7684\u8f93\u5165"},"\u53d8\u91cf\u7684\u8f93\u5165"),(0,l.kt)("p",null,"\u9664\u4e86\u81ea\u5df1\u5b9a\u4e49\u7684\u53d8\u91cf\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"raw_input\n")),(0,l.kt)("p",null,"\u6765\u5b9e\u73b0\u952e\u76d8\u8f93\u5165\uff0c\u7528\u6237\u8f93\u5165\u7684\u4efb\u4f55\u5185\u5bb9Python\u90fd\u8ba4\u4e3a\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h3",{id:"\u53d8\u91cf\u7684\u8f93\u51fa"},"\u53d8\u91cf\u7684\u8f93\u51fa"),(0,l.kt)("p",null,"\u5728Python\u4e2d\u901a\u5e38\u4f7f\u7528print\u51fd\u6570\u5c06\u4fe1\u606f\u8f93\u51fa\u5230\u63a7\u5236\u53f0\uff0c\u5f53\u6211\u4eec\u5e0c\u671b\u8f93\u51fa\u6587\u5b57\u4fe1\u606f\u7684\u540c\u65f6\uff0c\u4e00\u8d77\u8f93\u51fa\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u5c06\u8f93\u51fa\u683c\u5f0f\u5316\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5305\u542b%\u7684\u5b57\u7b26\u4e32\uff0c\u88ab\u6210\u4e3a\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},"%\u548c\u4e0d\u540c\u7684\u5b57\u7b26\u8fde\u7528,\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u683c\u5f0f\u5316\u5b57\u7b26")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%s"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u7b26\u53f7\u5341\u8fdb\u5236\u6574\u6570,%06d \u8868\u793a\u8f93\u51fa\u7684\u6574\u6570\u663e\u793a\u4f4d\u6570\u5b57,\u4e0d\u8db3\u7684\u5730\u65b9\u4f7f\u75280 \u8865\u5168")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d6e\u70b9\u6570,%.02f \u8868\u793a\u5c0f\u6570\u70b9\u540e\u53ea\u663e\u793a\u4e24\u4f4d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%%"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa%")))),(0,l.kt)("p",null,"\u8bed\u6cd5\u683c\u5f0f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"print \u2018\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u2019 % \u53d8\u91cf 1"),(0,l.kt)("li",{parentName:"ul"},"print \u2018\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u2019 % (\u53d8\u91cf 1,\u53d8\u91cf 2\u2026)")),(0,l.kt)("p",null,"\u5982\u679c\u53d8\u91cf\u540d\u4e0d\u53ea\u4e00\u4e2a\u5355\u8bcd\uff0c\u6839\u636e",(0,l.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0008/"},"Python\u4ee3\u7801\u7684\u98ce\u683c\u6307\u5357"),"\u5efa\u8bae\u7528\u4e0b\u5212\u7ebf\u5c06\u5355\u8bcd\u5206\u5f00\uff0c\u201c\u6839\u636e\u9700\u8981\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u201d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"my_list = [1,2,3,4,5]\n")),(0,l.kt)("h2",{id:"\u8868\u8fbe\u5f0f"},"\u8868\u8fbe\u5f0f"),(0,l.kt)("h3",{id:"\u5e38\u7528\u7684\u8868\u8fbe\u5f0f\u64cd\u4f5c\u7b26"},"\u5e38\u7528\u7684\u8868\u8fbe\u5f0f\u64cd\u4f5c\u7b26"),(0,l.kt)("h4",{id:"\u7b97\u6570\u8fd0\u7b97"},"\u7b97\u6570\u8fd0\u7b97"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u52a0\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u51cf\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e58\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9664\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9664\u540e\u53d6\u6574"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9664\u540e\u53d6\u4f59"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x+y"),(0,l.kt)("td",{parentName:"tr",align:null},"x-y"),(0,l.kt)("td",{parentName:"tr",align:null},"x*y"),(0,l.kt)("td",{parentName:"tr",align:null},"x/y"),(0,l.kt)("td",{parentName:"tr",align:null},"x//y"),(0,l.kt)("td",{parentName:"tr",align:null},"x%y")))),(0,l.kt)("h4",{id:"\u903b\u8f91\u8fd0\u7b97"},"\u903b\u8f91\u8fd0\u7b97"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'x in y          """x\u5c5e\u4e8ey"""   \nx not in y      """x\u4e0d\u5c5e\u4e8ey"""\n')),(0,l.kt)("h4",{id:"\u5bf9\u8c61\u5b9e\u4f8b\u6d4b\u8bd5"},"\u5bf9\u8c61\u5b9e\u4f8b\u6d4b\u8bd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'x is y          """\u5bf9\u8c61x\u662fy"""   \nx not is y      """\u5bf9\u8c61x\u4e0d\u662fy"""\n')),(0,l.kt)("p",null,'\u6ce8\u610f\u533a\u5206"=="\u6bd4\u8f83\u7684\u662f\u503c\uff0c"is"\u6bd4\u8f83\u7684\u662f\u5bf9\u8c61'),(0,l.kt)("h4",{id:"\u6bd4\u8f83\u8fd0\u7b97"},"\u6bd4\u8f83\u8fd0\u7b97"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"x\u5927\u4e8ey"),(0,l.kt)("th",{parentName:"tr",align:null},"x\u5c0f\u4e8ey"),(0,l.kt)("th",{parentName:"tr",align:null},"x\u5927\u4e8e\u7b49\u4e8ey"),(0,l.kt)("th",{parentName:"tr",align:null},"x\u5c0f\u4e8e\u7b49\u4e8ey"),(0,l.kt)("th",{parentName:"tr",align:null},"x\u7b49\u4e8ey"),(0,l.kt)("th",{parentName:"tr",align:null},"x\u4e0d\u7b49\u4e8ey"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x>y"),(0,l.kt)("td",{parentName:"tr",align:null},"x<y"),(0,l.kt)("td",{parentName:"tr",align:null},"x>=y"),(0,l.kt)("td",{parentName:"tr",align:null},"x<=y"),(0,l.kt)("td",{parentName:"tr",align:null},"x==y"),(0,l.kt)("td",{parentName:"tr",align:null},"x!=y")))),(0,l.kt)("h4",{id:"\u4f4d\u8fd0\u7b97"},"\u4f4d\u8fd0\u7b97"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6309\u4f4d\u4e0e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6309\u4f4d\u6216"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6309\u4f4d\u5f02\u6216"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6309\u4f4d\u53d6\u53cd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5de6\u79fb\u8fd0\u7b97"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53f3\u79fb\u8fd0\u7b97"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e28"),(0,l.kt)("td",{parentName:"tr",align:null},"^"),(0,l.kt)("td",{parentName:"tr",align:null},"~"),(0,l.kt)("td",{parentName:"tr",align:null},"<<"),(0,l.kt)("td",{parentName:"tr",align:null},">>")))),(0,l.kt)("h4",{id:"\u4e00\u5143\u8fd0\u7b97"},"\u4e00\u5143\u8fd0\u7b97"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u8d1f\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c255-x"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+x"),(0,l.kt)("td",{parentName:"tr",align:null},"-x"),(0,l.kt)("td",{parentName:"tr",align:null},"~x")))),(0,l.kt)("h4",{id:"\u5e42\u8fd0\u7b97"},"\u5e42\u8fd0\u7b97"),(0,l.kt)("p",null,"x ** y"),(0,l.kt)("h4",{id:"\u7d22\u5f15\u548c\u5206\u7247"},"\u7d22\u5f15\u548c\u5206\u7247"),(0,l.kt)("p",null,"\u7d22\u5f15\u4ece\u5de6\u5411\u53f3\u4ece0\u5f00\u59cb\uff0c\u4ece\u53f3\u5411\u5de6\u4ece-1\u5f00\u59cb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>>'Hello World!'[0] \n'H'\n>>>'Hello World!'[11]\n'!'\n>>>'Hello World!'[-1]\n'!'\n>>>'Hello World!'[-11]\n'e'\n")),(0,l.kt)("p",null,"\u5206\u7247\u7528\u4e8e\u622a\u53d6\u67d0\u4e2a\u8303\u56f4\u5185\u7684\u5143\u7d20\uff0c\u901a\u8fc7:\u6765\u6307\u5b9a\u8d77\u59cb\u533a\u95f4\uff08\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\uff0c\u5305\u542b\u5de6\u4fa7\u7d22\u5f15\u503c\u5bf9\u5e94\u7684\u5143\u7d20\uff0c\u4f46\u4e0d\u5305\u542b\u53f3\u6d4b\u7d22\u5f15\u503c\u5bf9\u5e94\u7684\u5143\u7d20\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'>>> num = [1,2,3,4,5,6,7,8,9,10]\n>>> num[3]\n4\n>>> num[6]\n7\n>>> num[3:6]\n[4, 5, 6]\n#\u7559\u610f\u53f3\u8fb9\u8fb9\u754c\n>>> num[3:9]\n[4, 5, 6, 7, 8, 9]\n#\u53f3\u8fb9\u8d8a\u754c\uff0c\u521a\u597d\u662f10\u5bf9\u5e94\u7684\u4e0b\u4e00\u4e2a\u7d22\u5f15\u503c\n>>> num[3:10]\n[4, 5, 6, 7, 8, 9, 10]\n#\u53f3\u8fb9\u8d8a\u754c\n>>> num[3:11]\n[4, 5, 6, 7, 8, 9, 10]\n\n#\u6ce8\u610f\u662f\u4e0d\u5305\u542b\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\n>>> num[-3:-1]\n[8, 9]\n>>> num[-4:-1]\n[7, 8, 9]\n>>> num[-10:-1]\n[1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n#\u6ce8\u610f\u53f3\u8fb9\u754c\n>>> num[-10:0]\n[]\n>>> num[-5:-1]\n[6, 7, 8, 9]\n\n#\u6ce8\u610f\u53f3\u8fb9\u754c\n>>> num[-5:]\n[6, 7, 8, 9, 10]\n>>> num[-5:1]\n[]>>> num[3:1]\n[]\n>>> num[3:-1]\n[4, 5, 6, 7, 8, 9]\n\n#\u53d6\u6700\u53f33\u4e2a\u5143\u7d20\n>>> num[-3:]\n[8, 9, 10]\n\n#\u53d6\u6700\u5de63\u4e2a\u5143\u7d20\n>>> num[:3]\n[1, 2, 3]\n\n#\u53ef\u4ee5\u52a0\u5165step length\n>>> num[1:10:3]\n[2, 5, 8]\n>>> num[0:10:3]\n[1, 4, 7, 10]\n\n#\u8d77\u59cb\u4f4d\u7f6e\u9ed8\u8ba4\u4e3a\u6700\u5de6\u548c\u6700\u53f3\uff0c\u4f46\u4e0d\u5305\u62ec\u6700\u53f3\u7684\u5143\u7d20\n>>> num[::2]\n[1, 3, 5, 7, 9]\n>>> num[0:9:1]\n[1, 2, 3, 4, 5, 6, 7, 8, 9]\n>>> num[0:10:1]\n[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n#\u5982\u679cstep length\u4e3a0\uff0c\u4f1a\u62a5\u9519\uff0c\u4e5f\u5c31\u662f\u8bf4\u6b65\u957f\u4e0d\u53ef\u4ee5\u4e3a0\n>>> num[1:5:0]\nTraceback (most recent call last):\n  File "<stdin>", line 1, in <module>\nValueError: slice step cannot be zero\n\n#\u5982\u679c\u6b65\u957f\u4e3a\u8d1f\u6570\uff0c\u8868\u793a\u4ece\u53f3\u5411\u5de6\u63d0\u53d6\u5143\u7d20\n#\u6ce8\u610f\u4e0d\u5305\u62ec6\u5bf9\u5e94\u7684\u5143\u7d20\nnum[10:6:-1]\n[10, 9, 8]\n\n#\u5012\u5e8f\u8f93\u51fa\n>>> num[10::-1]\n[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]\n\n#\u4ece\u6700\u5de6\u8fb9\u5f00\u59cb\n>>> num[:-3:1]\n[1, 2, 3, 4, 5, 6, 7]\n>>> num[:3:1]\n[1, 2, 3]\n#\u4ece\u6700\u53f3\u8fb9\u5f00\u59cb\n>>> num[:3:-1]\n[10, 9, 8, 7, 6, 5]\n')),(0,l.kt)("h4",{id:"lambda\u8868\u8fbe\u5f0f"},"lambda\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"lambda\u8868\u8fbe\u5f0f\uff0c\u901a\u5e38\u662f\u5728\u9700\u8981\u4e00\u4e2a\u51fd\u6570\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u8d39\u795e\u53bb\u547d\u540d\u4e00\u4e2a\u51fd\u6570\u7684\u573a\u5408\u4e0b\u4f7f\u7528\uff0c\u4e5f\u5c31\u662f\u6307\u533f\u540d\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"add = lambda x, y : x+y\nadd(1,2)  # \u7ed3\u679c\u4e3a3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"def get_y(a,b):\n    def func(x):\n        return ax+b\n    return func\ny1 = get_y(1,1)\ny1(1) # \u7ed3\u679c\u4e3a2\n")),(0,l.kt)("p",null,"\u6539\u4e3alambda\u8868\u8fbe\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"def get_y(a,b):\n     return lambda x:ax+b\ny1 = get_y(1,1)\ny1(1) # \u7ed3\u679c\u4e3a2\n")),(0,l.kt)("h3",{id:"\u4f18\u5148\u7ea7"},"\u4f18\u5148\u7ea7"),(0,l.kt)("p",null,"\u8fd0\u7b97\u4f18\u5148\u7ea7\n\u5143\u7ec4(...),\u5e8f\u5217","[...]",",\u5b57\u5178{...}\ns","[i]",",s","[i:j]","\ns.attribute\ns(....)\n+x,-x,~x\nx *",(0,l.kt)("em",{parentName:"p"}," y\n"),"/ // %\n+,-\n<< >>\n& --\x3e ^ --\x3e |\n< <=, > >=, == !=\nis,not is\nin , not in\nnot and or\nlambda"),(0,l.kt)("h2",{id:"\u8bed\u53e5"},"\u8bed\u53e5"),(0,l.kt)("h3",{id:"\u8d4b\u503c\u8bed\u53e5"},"\u8d4b\u503c\u8bed\u53e5"),(0,l.kt)("p",null,"\u57fa\u672c\u8d4b\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"a = 'SUEP'\n")),(0,l.kt)("p",null,"\u5143\u7ec4\u8d4b\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> a,b='SUEP','is'\n>>> a \n'SUEP'\n>>> b \n'is'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> x = 'SUEP'\n>>> y = 'is'\n>>> a,b = x,y\n>>> a \n'SUEP'\n>>> b\n'is'\n")),(0,l.kt)("p",null,"\u5217\u8868\u8d4b\u503c\u8fd0\u7b97"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>>[a,b] = ['SUEP','is']\n>>> a \n'SUEP'\n>>> b\n'is'\n")),(0,l.kt)("p",null,"\u5e8f\u5217\u8d4b\u503c\u8fd0\u7b97"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> a,b,c,d = 'SUEP'\n>>> a\n'S'\n>>> c\n'E'\n")),(0,l.kt)("p",null,"\u6269\u5c55\u5e8f\u5217\u8d4b\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> a,*b = 'SUEP'\n>>> a\n'S'\n>>> b\n['U','E','P']\n\n>>> a,*b,c = 'SUEP'\n>>> a\n'S'\n>>> *b\n['U','E']\n>>> c\n'P'\n")),(0,l.kt)("p",null,"\u589e\u5f3a\u8d4b\u503c\u8fd0\u7b97"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> a = [S,U,E]\n>>> a += [P]\n>>> a \n[S,U,E,P]\n")),(0,l.kt)("h3",{id:"assert\u8bed\u53e5"},"assert\u8bed\u53e5"),(0,l.kt)("p",null,"assert\u5173\u952e\u5b57\u4f5c\u4e3a\u4ee3\u7801\u4e2d\u7684\u67d0\u79cd\u5065\u5168\u6027\u68c0\u67e5\u3002\u6bd4\u5982\u5728\u6211\u4eec\u7684\u4ee3\u7801\u4e2d\u7684\u67d0\u4e2a\u70b9\u4e0a\uff0c\u5982\u679c\u6211\u4eec\u671f\u671b\u67d0\u4e9b\u4e1c\u897f\u4ee5\u67d0\u79cd\u65b9\u5f0f\u51fa\u73b0\uff0c\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528assert\u5173\u952e\u5b57\u6765\u9a8c\u8bc1\u5b83\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5224\u5b9a\u6761\u4ef6A\u662f\u5426\u6210\u7acb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"assert A \n")),(0,l.kt)("p",null,"\u82e5A\u4e3aTrue\uff0c\u90a3\u4e48\u4ee3\u7801\u5c06\u7ee7\u7eed\u6b63\u5e38\u8fd0\u884c\uff0c\u5982\u679cA\u4e3aFlase\uff0c\u90a3\u4e48\u4ee3\u7801\u8fd0\u884c\u5c06\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'Traceback (most recent call last)\n File "/your/path/A.py",line 2, in <module>\n   assert False\nAssertionError\n')),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u6709\u4e00\u4e2a\u590d\u6742\u51fd\u6570get_length()\uff0c\u7528\u6765\u6d4b\u91cf\u67d0\u7269\u4f53\u957f\u5ea6\uff0c\u90a3\u4e48\u6839\u636e\u5c1d\u8bd5\uff0c\u8be5\u51fd\u6570\u7684\u8f93\u51fa\u503c\u5fc5\u5b9a\u5927\u4e8e\u7b49\u4e8e\u96f6\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u5b9a\u4e00\u4e2aassert\u51fd\u6570\u6765\u4fdd\u8bc1\u8fd9\u4e00\u70b9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"length = get_length()\nassert length >= 0\n")),(0,l.kt)("h3",{id:"del\u8bed\u53e5"},"del\u8bed\u53e5"),(0,l.kt)("p",null,"\u4f7f\u7528del\u8bed\u53e5\uff0c\u5220\u9664\u5230\u53d8\u91cf\u5230\u5bf9\u8c61\u7684\u5f15\u7528\u548c\u53d8\u91cf\u540d\u79f0\u672c\u8eab\u3002\u6ce8\u610fdel\u8bed\u53e5\u4f5c\u7528\u5728\u53d8\u91cf\u4e0a\uff0c\u800c\u4e0d\u662f\u6570\u636e\u5bf9\u8c61\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> a = 0\n>>> b = a \n>>> del a # \u5220\u9664\u53d8\u91cfa\u52300\u7684\u5f15\u7528\uff0c\u5e76\u5220\u9664\u53d8\u91cf\u540d\u79f0a\n>>> print(b)\n0\n")),(0,l.kt)("p",null,"\u4f46\u82e5\u6211\u4eec\u9009\u62e9print(a)\uff0c\u90a3\u4e48\u5c06\u4f1a\u8f93\u51fa\u9519\u8bef\uff0c\u56e0\u4e3a\u6b64\u65f6\u7684a\u7684\u53d8\u91cf\u540d\u79f0\u88ab\u5220\u9664\uff0ca\u662f\u672a\u88ab\u5b9a\u4e49\u7684\u3002"),(0,l.kt)("p",null,"del\u8bed\u53e5\u901a\u5e38\u7528\u4e8elist\u5217\u8868\u64cd\u4f5c\uff0c\u5220\u9664\u4e00\u4e2a\u6216\u8fde\u7eed\u51e0\u4e2a\u5143\u7d20"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> a = [0,1,2,3,4]\n>>> del a[0]\n>>> print(a)\n[1,2,3,4]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> a = [0,1,2,3,4]\n>>> del a[0:3] #\u5220\u9664\u7b2c0~3\u4e2a\u5143\u7d20\uff0c\u542b\u5934\u4e0d\u542b\u5c3e\u3002\n>>> print(a)\n[3,4]\n")),(0,l.kt)("h3",{id:"return\u8bed\u53e5"},"return\u8bed\u53e5"),(0,l.kt)("p",null,"\u5c06\u6267\u884c\u7ed3\u679c\u8fd4\u56de\u5230\u8c03\u7528\u7684\u5730\u65b9\uff0c\u5e76\u628a\u7a0b\u5e8f\u7684\u63a7\u5236\u6743\u4e00\u8d77\u8fd4\u56de\u3002\u7a0b\u5e8f\u8fd0\u884c\u5230\u7b2c\u4e00\u4e2areturn\u5373\u8fd4\u56de\u9000\u51fadef\u5757\u3002\u51fd\u6570\u4e2d\u6ca1\u6709return\u5219\u9ed8\u8ba4\u4e00\u4e2aNone\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},">>> def fun(a,b):\n      print (a)\n      return a\n      print (b)\n      return b\n>>> resunlt = fun(2,6)\n2\n")))}o.isMDXComponent=!0},6938:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/1-28b1220df56053ab886cd5d118ea393e.png"}}]);