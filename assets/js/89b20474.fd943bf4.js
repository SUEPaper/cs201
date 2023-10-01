"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[3928],{3905:(n,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>d});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var _=r.createContext({}),f=function(n){var e=r.useContext(_),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},o=function(n){var e=f(n.components);return r.createElement(_.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,s=n.originalType,_=n.parentName,o=i(n,["components","mdxType","originalType","parentName"]),p=f(t),c=a,d=p["".concat(_,".").concat(c)]||p[c]||m[c]||s;return t?r.createElement(d,l(l({ref:e},o),{},{components:t})):r.createElement(d,l({ref:e},o))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var s=t.length,l=new Array(s);l[0]=c;var i={};for(var _ in e)hasOwnProperty.call(e,_)&&(i[_]=e[_]);i.originalType=n,i[p]="string"==typeof n?n:a,l[1]=i;for(var f=2;f<s;f++)l[f]=t[f];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1816:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>_,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>f});var r=t(7462),a=(t(7294),t(3905));const s={sidebar_position:2},l="\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8fdb\u9636",i={unversionedId:"python/oop/oop_advance",id:"python/oop/oop_advance",title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8fdb\u9636",description:"\u5728\u524d\u9762\u7684\u7ae0\u8282\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86\u9762\u5411\u5bf9\u8c61\u7684\u5165\u95e8\u77e5\u8bc6\uff0c\u77e5\u9053\u4e86\u5982\u4f55\u5b9a\u4e49\u7c7b\uff0c\u5982\u4f55\u521b\u5efa\u5bf9\u8c61\u4ee5\u53ca\u5982\u4f55\u7ed9\u5bf9\u8c61\u53d1\u6d88\u606f\u3002\u4e3a\u4e86\u80fd\u591f\u66f4\u597d\u7684\u4f7f\u7528\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u601d\u60f3\u8fdb\u884c\u7a0b\u5e8f\u5f00\u53d1\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5bf9Python\u4e2d\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8fdb\u884c\u66f4\u4e3a\u6df1\u5165\u7684\u4e86\u89e3\u3002",source:"@site/docs/python/oop/oop_advance.md",sourceDirName:"python/oop",slug:"/python/oop/oop_advance",permalink:"/cs201/python/oop/oop_advance",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"pythonSidebar",previous:{title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u57fa\u7840",permalink:"/cs201/python/oop/oop_basic"},next:{title:"\u6570\u636e\u62bd\u8c61",permalink:"/cs201/python/oop/data_abstraction"}},_={},f=[{value:"@property\u88c5\u9970\u5668",id:"property\u88c5\u9970\u5668",level:2},{value:"__slots__\u9b54\u6cd5",id:"__slots__\u9b54\u6cd5",level:2},{value:"\u9759\u6001\u65b9\u6cd5\u548c\u7c7b\u65b9\u6cd5",id:"\u9759\u6001\u65b9\u6cd5\u548c\u7c7b\u65b9\u6cd5",level:2},{value:"\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb",id:"\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb",level:2},{value:"\u7ee7\u627f\u548c\u591a\u6001",id:"\u7ee7\u627f\u548c\u591a\u6001",level:2},{value:"\u7efc\u5408\u6848\u4f8b",id:"\u7efc\u5408\u6848\u4f8b",level:2},{value:"\u6848\u4f8b1\uff1a\u5965\u7279\u66fc\u6253\u5c0f\u602a\u517d\u3002",id:"\u6848\u4f8b1\u5965\u7279\u66fc\u6253\u5c0f\u602a\u517d",level:3},{value:"\u6848\u4f8b2\uff1a\u6251\u514b\u6e38\u620f\u3002",id:"\u6848\u4f8b2\u6251\u514b\u6e38\u620f",level:3},{value:"\u6848\u4f8b3\uff1a\u5de5\u8d44\u7ed3\u7b97\u7cfb\u7edf\u3002",id:"\u6848\u4f8b3\u5de5\u8d44\u7ed3\u7b97\u7cfb\u7edf",level:3}],o={toc:f},p="wrapper";function m(n){let{components:e,...s}=n;return(0,a.kt)(p,(0,r.Z)({},o,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8fdb\u9636"},"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8fdb\u9636"),(0,a.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86\u9762\u5411\u5bf9\u8c61\u7684\u5165\u95e8\u77e5\u8bc6\uff0c\u77e5\u9053\u4e86\u5982\u4f55\u5b9a\u4e49\u7c7b\uff0c\u5982\u4f55\u521b\u5efa\u5bf9\u8c61\u4ee5\u53ca\u5982\u4f55\u7ed9\u5bf9\u8c61\u53d1\u6d88\u606f\u3002\u4e3a\u4e86\u80fd\u591f\u66f4\u597d\u7684\u4f7f\u7528\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u601d\u60f3\u8fdb\u884c\u7a0b\u5e8f\u5f00\u53d1\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5bf9Python\u4e2d\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8fdb\u884c\u66f4\u4e3a\u6df1\u5165\u7684\u4e86\u89e3\u3002"),(0,a.kt)("h2",{id:"property\u88c5\u9970\u5668"},"@property\u88c5\u9970\u5668"),(0,a.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u8ba8\u8bba\u8fc7Python\u4e2d\u5c5e\u6027\u548c\u65b9\u6cd5\u8bbf\u95ee\u6743\u9650\u7684\u95ee\u9898\uff0c\u867d\u7136\u6211\u4eec\u4e0d\u5efa\u8bae\u5c06\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u79c1\u6709\u7684\uff0c\u4f46\u662f\u5982\u679c\u76f4\u63a5\u5c06\u5c5e\u6027\u66b4\u9732\u7ed9\u5916\u754c\u4e5f\u662f\u6709\u95ee\u9898\u7684\uff0c\u6bd4\u5982\u6211\u4eec\u6ca1\u6709\u529e\u6cd5\u68c0\u67e5\u8d4b\u7ed9\u5c5e\u6027\u7684\u503c\u662f\u5426\u6709\u6548\u3002\u6211\u4eec\u4e4b\u524d\u7684\u5efa\u8bae\u662f\u5c06\u5c5e\u6027\u547d\u540d\u4ee5\u5355\u4e0b\u5212\u7ebf\u5f00\u5934\uff0c\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6765\u6697\u793a\u5c5e\u6027\u662f\u53d7\u4fdd\u62a4\u7684\uff0c\u4e0d\u5efa\u8bae\u5916\u754c\u76f4\u63a5\u8bbf\u95ee\uff0c\u90a3\u4e48\u5982\u679c\u60f3\u8bbf\u95ee\u5c5e\u6027\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u7684getter\uff08\u8bbf\u95ee\u5668\uff09\u548csetter\uff08\u4fee\u6539\u5668\uff09\u65b9\u6cd5\u8fdb\u884c\u5bf9\u5e94\u7684\u64cd\u4f5c\u3002\u5982\u679c\u8981\u505a\u5230\u8fd9\u70b9\uff0c\u5c31\u53ef\u4ee5\u8003\u8651\u4f7f\u7528@property\u5305\u88c5\u5668\u6765\u5305\u88c5getter\u548csetter\u65b9\u6cd5\uff0c\u4f7f\u5f97\u5bf9\u5c5e\u6027\u7684\u8bbf\u95ee\u65e2\u5b89\u5168\u53c8\u65b9\u4fbf\uff0c\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: utf-8 -*-\n\nclass Person(object):\n\n    def __init__(self, name, age):\n        self._name = name\n        self._age = age\n\n    # \u8bbf\u95ee\u5668 - getter\u65b9\u6cd5\n    @property\n    def name(self):\n        return self._name\n\n    # \u8bbf\u95ee\u5668 - getter\u65b9\u6cd5\n    @property\n    def age(self):\n        return self._age\n\n    # \u4fee\u6539\u5668 - setter\u65b9\u6cd5\n    @age.setter\n    def age(self, age):\n        self._age = age\n\n    def play(self):\n        if self._age <= 16:\n            print('%s\u6b63\u5728\u73a9\u98de\u884c\u68cb.' % self._name)\n        else:\n            print('%s\u6b63\u5728\u73a9\u6597\u5730\u4e3b.' % self._name)\n\n\ndef main():\n    person = Person('\u738b\u5927\u9524', 12)\n    person.play()\n    person.age = 22\n    person.play()\n    # person.name = '\u767d\u5143\u82b3'  # AttributeError: can't set attribute\n\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("h2",{id:"__slots__\u9b54\u6cd5"},"_","_","slots","_","_","\u9b54\u6cd5"),(0,a.kt)("p",null,"\u6211\u4eec\u8bb2\u5230\u8fd9\u91cc\uff0c\u4e0d\u77e5\u9053\u5927\u5bb6\u662f\u5426\u5df2\u7ecf\u610f\u8bc6\u5230\uff0cPython\u662f\u4e00\u95e8",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%AF%AD%E8%A8%80"},"\u52a8\u6001\u8bed\u8a00"),"\u3002\u901a\u5e38\uff0c\u52a8\u6001\u8bed\u8a00\u5141\u8bb8\u6211\u4eec\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u7ed9\u5bf9\u8c61\u7ed1\u5b9a\u65b0\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u5bf9\u5df2\u7ecf\u7ed1\u5b9a\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u8fdb\u884c\u89e3\u7ed1\u5b9a\u3002\u4f46\u662f\u5982\u679c\u6211\u4eec\u9700\u8981\u9650\u5b9a\u81ea\u5b9a\u4e49\u7c7b\u578b\u7684\u5bf9\u8c61\u53ea\u80fd\u7ed1\u5b9a\u67d0\u4e9b\u5c5e\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u7c7b\u4e2d\u5b9a\u4e49","_","_","slots","_","_","\u53d8\u91cf\u6765\u8fdb\u884c\u9650\u5b9a\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f","_","_","slots","_","_","\u7684\u9650\u5b9a\u53ea\u5bf9\u5f53\u524d\u7c7b\u7684\u5bf9\u8c61\u751f\u6548\uff0c\u5bf9\u5b50\u7c7b\u5e76\u4e0d\u8d77\u4efb\u4f55\u4f5c\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: utf-8 -*-\n\nclass Person(object):\n\n    # \u9650\u5b9aPerson\u5bf9\u8c61\u53ea\u80fd\u7ed1\u5b9a_name, _age\u548c_gender\u5c5e\u6027\n    __slots__ = ('_name', '_age', '_gender')\n\n    def __init__(self, name, age):\n        self._name = name\n        self._age = age\n\n    @property\n    def name(self):\n        return self._name\n\n    @property\n    def age(self):\n        return self._age\n\n    @age.setter\n    def age(self, age):\n        self._age = age\n\n    def play(self):\n        if self._age <= 16:\n            print('%s\u6b63\u5728\u73a9\u98de\u884c\u68cb.' % self._name)\n        else:\n            print('%s\u6b63\u5728\u73a9\u6597\u5730\u4e3b.' % self._name)\n\n\ndef main():\n    person = Person('\u738b\u5927\u9524', 22)\n    person.play()\n    person._gender = '\u7537'\n    # AttributeError: 'Person' object has no attribute '_is_gay'\n    # person._is_gay = True\n")),(0,a.kt)("h2",{id:"\u9759\u6001\u65b9\u6cd5\u548c\u7c7b\u65b9\u6cd5"},"\u9759\u6001\u65b9\u6cd5\u548c\u7c7b\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4e4b\u524d\uff0c\u6211\u4eec\u5728\u7c7b\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\u90fd\u662f\u5bf9\u8c61\u65b9\u6cd5\uff0c\u4e5f\u5c31\u662f\u8bf4\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u662f\u53d1\u9001\u7ed9\u5bf9\u8c61\u7684\u6d88\u606f\u3002\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u5199\u5728\u7c7b\u4e2d\u7684\u65b9\u6cd5\u5e76\u4e0d\u9700\u8981\u90fd\u662f\u5bf9\u8c61\u65b9\u6cd5\uff0c\u4f8b\u5982\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u201c\u4e09\u89d2\u5f62\u201d\u7c7b\uff0c\u901a\u8fc7\u4f20\u5165\u4e09\u6761\u8fb9\u957f\u6765\u6784\u9020\u4e09\u89d2\u5f62\uff0c\u5e76\u63d0\u4f9b\u8ba1\u7b97\u5468\u957f\u548c\u9762\u79ef\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u4f20\u5165\u7684\u4e09\u6761\u8fb9\u957f\u672a\u5fc5\u80fd\u6784\u9020\u51fa\u4e09\u89d2\u5f62\u5bf9\u8c61\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5148\u5199\u4e00\u4e2a\u65b9\u6cd5\u6765\u9a8c\u8bc1\u4e09\u6761\u8fb9\u957f\u662f\u5426\u53ef\u4ee5\u6784\u6210\u4e09\u89d2\u5f62\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5f88\u663e\u7136\u5c31\u4e0d\u662f\u5bf9\u8c61\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5728\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u65f6\u4e09\u89d2\u5f62\u5bf9\u8c61\u5c1a\u672a\u521b\u5efa\u51fa\u6765\uff08\u56e0\u4e3a\u90fd\u4e0d\u77e5\u9053\u4e09\u6761\u8fb9\u80fd\u4e0d\u80fd\u6784\u6210\u4e09\u89d2\u5f62\uff09\uff0c\u6240\u4ee5\u8fd9\u4e2a\u65b9\u6cd5\u662f\u5c5e\u4e8e\u4e09\u89d2\u5f62\u7c7b\u800c\u5e76\u4e0d\u5c5e\u4e8e\u4e09\u89d2\u5f62\u5bf9\u8c61\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u9759\u6001\u65b9\u6cd5\u6765\u89e3\u51b3\u8fd9\u7c7b\u95ee\u9898\uff0c\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: utf-8 -*-\n\nfrom math import sqrt\n\nclass Triangle(object):\n\n    def __init__(self, a, b, c):\n        self._a = a\n        self._b = b\n        self._c = c\n\n    @staticmethod\n    def is_valid(a, b, c):\n        return a + b > c and b + c > a and a + c > b\n\n    def perimeter(self):\n        return self._a + self._b + self._c\n\n    def area(self):\n        half = self.perimeter() / 2\n        return sqrt(half * (half - self._a) *\n                    (half - self._b) * (half - self._c))\n\n\ndef main():\n    a, b, c = 3, 4, 5\n    # \u9759\u6001\u65b9\u6cd5\u548c\u7c7b\u65b9\u6cd5\u90fd\u662f\u901a\u8fc7\u7ed9\u7c7b\u53d1\u6d88\u606f\u6765\u8c03\u7528\u7684\n    if Triangle.is_valid(a, b, c):\n        t = Triangle(a, b, c)\n        print(t.perimeter())\n        # \u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ed9\u7c7b\u53d1\u6d88\u606f\u6765\u8c03\u7528\u5bf9\u8c61\u65b9\u6cd5\u4f46\u662f\u8981\u4f20\u5165\u63a5\u6536\u6d88\u606f\u7684\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\n        # print(Triangle.perimeter(t))\n        print(t.area())\n        # print(Triangle.area(t))\n    else:\n        print('\u65e0\u6cd5\u6784\u6210\u4e09\u89d2\u5f62.')\n\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("p",null,"\u548c\u9759\u6001\u65b9\u6cd5\u6bd4\u8f83\u7c7b\u4f3c\uff0cPython\u8fd8\u53ef\u4ee5\u5728\u7c7b\u4e2d\u5b9a\u4e49\u7c7b\u65b9\u6cd5\uff0c\u7c7b\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u7ea6\u5b9a\u540d\u4e3acls\uff0c\u5b83\u4ee3\u8868\u7684\u662f\u5f53\u524d\u7c7b\u76f8\u5173\u7684\u4fe1\u606f\u7684\u5bf9\u8c61\uff08\u7c7b\u672c\u8eab\u4e5f\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u6709\u7684\u5730\u65b9\u4e5f\u79f0\u4e4b\u4e3a\u7c7b\u7684\u5143\u6570\u636e\u5bf9\u8c61\uff09\uff0c\u901a\u8fc7\u8fd9\u4e2a\u53c2\u6570\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u548c\u7c7b\u76f8\u5173\u7684\u4fe1\u606f\u5e76\u4e14\u53ef\u4ee5\u521b\u5efa\u51fa\u7c7b\u7684\u5bf9\u8c61\uff0c\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\nfrom time import time, localtime, sleep\n\nclass Clock(object):\n    """\u6570\u5b57\u65f6\u949f"""\n\n    def __init__(self, hour=0, minute=0, second=0):\n        self._hour = hour\n        self._minute = minute\n        self._second = second\n\n    @classmethod\n    def now(cls):\n        ctime = localtime(time())\n        return cls(ctime.tm_hour, ctime.tm_min, ctime.tm_sec)\n\n    def run(self):\n        """\u8d70\u5b57"""\n        self._second += 1\n        if self._second == 60:\n            self._second = 0\n            self._minute += 1\n            if self._minute == 60:\n                self._minute = 0\n                self._hour += 1\n                if self._hour == 24:\n                    self._hour = 0\n\n    def show(self):\n        """\u663e\u793a\u65f6\u95f4"""\n        return \'%02d:%02d:%02d\' % \\\n               (self._hour, self._minute, self._second)\n\n\ndef main():\n    # \u901a\u8fc7\u7c7b\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61\u5e76\u83b7\u53d6\u7cfb\u7edf\u65f6\u95f4\n    clock = Clock.now()\n    while True:\n        print(clock.show())\n        sleep(1)\n        clock.run()\n\n\nif __name__ == \'__main__\':\n    main()\n')),(0,a.kt)("h2",{id:"\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb"},"\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb"),(0,a.kt)("p",null,"\u7b80\u5355\u7684\u8bf4\uff0c\u7c7b\u548c\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb\u6709\u4e09\u79cd\uff1ais-a\u3001has-a\u548cuse-a\u5173\u7cfb\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"is-a\u5173\u7cfb\u4e5f\u53eb\u7ee7\u627f\u6216\u6cdb\u5316\uff0c\u6bd4\u5982\u5b66\u751f\u548c\u4eba\u7684\u5173\u7cfb\u3001\u624b\u673a\u548c\u7535\u5b50\u4ea7\u54c1\u7684\u5173\u7cfb\u90fd\u5c5e\u4e8e\u7ee7\u627f\u5173\u7cfb\u3002"),(0,a.kt)("li",{parentName:"ul"},"has-a\u5173\u7cfb\u901a\u5e38\u79f0\u4e4b\u4e3a\u5173\u8054\uff0c\u6bd4\u5982\u90e8\u95e8\u548c\u5458\u5de5\u7684\u5173\u7cfb\uff0c\u6c7d\u8f66\u548c\u5f15\u64ce\u7684\u5173\u7cfb\u90fd\u5c5e\u4e8e\u5173\u8054\u5173\u7cfb\uff1b\u5173\u8054\u5173\u7cfb\u5982\u679c\u662f\u6574\u4f53\u548c\u90e8\u5206\u7684\u5173\u8054\uff0c\u90a3\u4e48\u6211\u4eec\u79f0\u4e4b\u4e3a\u805a\u5408\u5173\u7cfb\uff1b\u5982\u679c\u6574\u4f53\u8fdb\u4e00\u6b65\u8d1f\u8d23\u4e86\u90e8\u5206\u7684\u751f\u547d\u5468\u671f\uff08\u6574\u4f53\u548c\u90e8\u5206\u662f\u4e0d\u53ef\u5206\u5272\u7684\uff0c\u540c\u65f6\u540c\u5728\u4e5f\u540c\u65f6\u6d88\u4ea1\uff09\uff0c\u90a3\u4e48\u8fd9\u79cd\u5c31\u662f\u6700\u5f3a\u7684\u5173\u8054\u5173\u7cfb\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u5408\u6210\u5173\u7cfb\u3002"),(0,a.kt)("li",{parentName:"ul"},"use-a\u5173\u7cfb\u901a\u5e38\u79f0\u4e4b\u4e3a\u4f9d\u8d56\uff0c\u6bd4\u5982\u53f8\u673a\u6709\u4e00\u4e2a\u9a7e\u9a76\u7684\u884c\u4e3a\uff08\u65b9\u6cd5\uff09\uff0c\u5176\u4e2d\uff08\u7684\u53c2\u6570\uff09\u4f7f\u7528\u5230\u4e86\u6c7d\u8f66\uff0c\u90a3\u4e48\u53f8\u673a\u548c\u6c7d\u8f66\u7684\u5173\u7cfb\u5c31\u662f\u4f9d\u8d56\u5173\u7cfb\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u79cd\u53eb\u505a",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E5%BB%BA%E6%A8%A1%E8%AF%AD%E8%A8%80"},"UML"),"\uff08\u7edf\u4e00\u5efa\u6a21\u8bed\u8a00\uff09\u7684\u4e1c\u897f\u6765\u8fdb\u884c\u9762\u5411\u5bf9\u8c61\u5efa\u6a21\uff0c\u5176\u4e2d\u4e00\u9879\u91cd\u8981\u7684\u5de5\u4f5c\u5c31\u662f\u628a\u7c7b\u548c\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb\u7528\u6807\u51c6\u5316\u7684\u56fe\u5f62\u7b26\u53f7\u63cf\u8ff0\u51fa\u6765\u3002\u5173\u4e8eUML\u6211\u4eec\u5728\u8fd9\u91cc\u4e0d\u505a\u8be6\u7ec6\u7684\u4ecb\u7ecd\uff0c\u6709\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u81ea\u884c\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"https://e.jd.com/30392949.html"},"\u300aUML\u9762\u5411\u5bf9\u8c61\u8bbe\u8ba1\u57fa\u7840\u300b"),"\u4e00\u4e66\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8272).Z,width:"473",height:"595"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2668).Z,width:"946",height:"475"})),(0,a.kt)("p",null,"\u5229\u7528\u7c7b\u4e4b\u95f4\u7684\u8fd9\u4e9b\u5173\u7cfb\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5df2\u6709\u7c7b\u7684\u57fa\u7840\u4e0a\u6765\u5b8c\u6210\u67d0\u4e9b\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5df2\u6709\u7c7b\u7684\u57fa\u7840\u4e0a\u521b\u5efa\u65b0\u7684\u7c7b\uff0c\u8fd9\u4e9b\u90fd\u662f\u5b9e\u73b0\u4ee3\u7801\u590d\u7528\u7684\u91cd\u8981\u624b\u6bb5\u3002\u590d\u7528\u73b0\u6709\u7684\u4ee3\u7801\u4e0d\u4ec5\u53ef\u4ee5\u51cf\u5c11\u5f00\u53d1\u7684\u5de5\u4f5c\u91cf\uff0c\u4e5f\u6709\u5229\u4e8e\u4ee3\u7801\u7684\u7ba1\u7406\u548c\u7ef4\u62a4\uff0c\u8fd9\u662f\u6211\u4eec\u5728\u65e5\u5e38\u5de5\u4f5c\u4e2d\u90fd\u4f1a\u4f7f\u7528\u5230\u7684\u6280\u672f\u624b\u6bb5\u3002"),(0,a.kt)("h2",{id:"\u7ee7\u627f\u548c\u591a\u6001"},"\u7ee7\u627f\u548c\u591a\u6001"),(0,a.kt)("p",null,"\u521a\u624d\u6211\u4eec\u63d0\u5230\u4e86\uff0c\u53ef\u4ee5\u5728\u5df2\u6709\u7c7b\u7684\u57fa\u7840\u4e0a\u521b\u5efa\u65b0\u7c7b\uff0c\u8fd9\u5176\u4e2d\u7684\u4e00\u79cd\u505a\u6cd5\u5c31\u662f\u8ba9\u4e00\u4e2a\u7c7b\u4ece\u53e6\u4e00\u4e2a\u7c7b\u90a3\u91cc\u5c06\u5c5e\u6027\u548c\u65b9\u6cd5\u76f4\u63a5\u7ee7\u627f\u4e0b\u6765\uff0c\u4ece\u800c\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\u7684\u7f16\u5199\u3002\u63d0\u4f9b\u7ee7\u627f\u4fe1\u606f\u7684\u6211\u4eec\u79f0\u4e4b\u4e3a\u7236\u7c7b\uff0c\u4e5f\u53eb\u8d85\u7c7b\u6216\u57fa\u7c7b\uff1b\u5f97\u5230\u7ee7\u627f\u4fe1\u606f\u7684\u6211\u4eec\u79f0\u4e4b\u4e3a\u5b50\u7c7b\uff0c\u4e5f\u53eb\u6d3e\u751f\u7c7b\u6216\u884d\u751f\u7c7b\u3002\u5b50\u7c7b\u9664\u4e86\u7ee7\u627f\u7236\u7c7b\u63d0\u4f9b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u81ea\u5df1\u7279\u6709\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u6240\u4ee5\u5b50\u7c7b\u6bd4\u7236\u7c7b\u62e5\u6709\u7684\u66f4\u591a\u7684\u80fd\u529b\uff0c\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u7528\u5b50\u7c7b\u5bf9\u8c61\u53bb\u66ff\u6362\u6389\u4e00\u4e2a\u7236\u7c7b\u5bf9\u8c61\uff0c\u8fd9\u662f\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u4e2d\u4e00\u4e2a\u5e38\u89c1\u7684\u884c\u4e3a\uff0c\u5bf9\u5e94\u7684\u539f\u5219\u79f0\u4e4b\u4e3a",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E9%87%8C%E6%B0%8F%E6%9B%BF%E6%8D%A2%E5%8E%9F%E5%88%99"},"\u91cc\u6c0f\u66ff\u6362\u539f\u5219"),"\u3002\u4e0b\u9762\u6211\u4eec\u5148\u770b\u4e00\u4e2a\u7ee7\u627f\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: utf-8 -*-\n\nclass Person(object):\n    \"\"\"\u4eba\"\"\"\n\n    def __init__(self, name, age):\n        self._name = name\n        self._age = age\n\n    @property\n    def name(self):\n        return self._name\n\n    @property\n    def age(self):\n        return self._age\n\n    @age.setter\n    def age(self, age):\n        self._age = age\n\n    def play(self):\n        print('%s\u6b63\u5728\u6109\u5feb\u7684\u73a9\u800d.' % self._name)\n\n    def watch_av(self):\n        if self._age >= 18:\n            print('%s\u6b63\u5728\u89c2\u770b\u7231\u60c5\u52a8\u4f5c\u7247.' % self._name)\n        else:\n            print('%s\u53ea\u80fd\u89c2\u770b\u300a\u718a\u51fa\u6ca1\u300b.' % self._name)\n\n\nclass Student(Person):\n    \"\"\"\u5b66\u751f\"\"\"\n\n    def __init__(self, name, age, grade):\n        super().__init__(name, age)\n        self._grade = grade\n\n    @property\n    def grade(self):\n        return self._grade\n\n    @grade.setter\n    def grade(self, grade):\n        self._grade = grade\n\n    def study(self, course):\n        print('%s\u7684%s\u6b63\u5728\u5b66\u4e60%s.' % (self._grade, self._name, course))\n\n\nclass Teacher(Person):\n    \"\"\"\u8001\u5e08\"\"\"\n\n    def __init__(self, name, age, title):\n        super().__init__(name, age)\n        self._title = title\n\n    @property\n    def title(self):\n        return self._title\n\n    @title.setter\n    def title(self, title):\n        self._title = title\n\n    def teach(self, course):\n        print('%s%s\u6b63\u5728\u8bb2%s.' % (self._name, self._title, course))\n\n\ndef main():\n    stu = Student('\u738b\u5927\u9524', 15, '\u521d\u4e09')\n    stu.study('\u6570\u5b66')\n    stu.watch_av()\n    t = Teacher('\u9a86\u660a', 38, '\u7816\u5bb6')\n    t.teach('Python\u7a0b\u5e8f\u8bbe\u8ba1')\n    t.watch_av()\n\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("p",null,"\u5b50\u7c7b\u5728\u7ee7\u627f\u4e86\u7236\u7c7b\u7684\u65b9\u6cd5\u540e\uff0c\u53ef\u4ee5\u5bf9\u7236\u7c7b\u5df2\u6709\u7684\u65b9\u6cd5\u7ed9\u51fa\u65b0\u7684\u5b9e\u73b0\u7248\u672c\uff0c\u8fd9\u4e2a\u52a8\u4f5c\u79f0\u4e4b\u4e3a\u65b9\u6cd5\u91cd\u5199\uff08override\uff09\u3002\u901a\u8fc7\u65b9\u6cd5\u91cd\u5199\u6211\u4eec\u53ef\u4ee5\u8ba9\u7236\u7c7b\u7684\u540c\u4e00\u4e2a\u884c\u4e3a\u5728\u5b50\u7c7b\u4e2d\u62e5\u6709\u4e0d\u540c\u7684\u5b9e\u73b0\u7248\u672c\uff0c\u5f53\u6211\u4eec\u8c03\u7528\u8fd9\u4e2a\u7ecf\u8fc7\u5b50\u7c7b\u91cd\u5199\u7684\u65b9\u6cd5\u65f6\uff0c\u4e0d\u540c\u7684\u5b50\u7c7b\u5bf9\u8c61\u4f1a\u8868\u73b0\u51fa\u4e0d\u540c\u7684\u884c\u4e3a\uff0c\u8fd9\u4e2a\u5c31\u662f\u591a\u6001\uff08poly-morphism\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\nfrom abc import ABCMeta, abstractmethod\n\nclass Pet(object, metaclass=ABCMeta):\n    """\u5ba0\u7269"""\n\n    def __init__(self, nickname):\n        self._nickname = nickname\n\n    @abstractmethod\n    def make_voice(self):\n        """\u53d1\u51fa\u58f0\u97f3"""\n        pass\n\n\nclass Dog(Pet):\n    """\u72d7"""\n\n    def make_voice(self):\n        print(\'%s: \u6c6a\u6c6a\u6c6a...\' % self._nickname)\n\n\nclass Cat(Pet):\n    """\u732b"""\n\n    def make_voice(self):\n        print(\'%s: \u55b5...\u55b5...\' % self._nickname)\n\n\ndef main():\n    pets = [Dog(\'\u65fa\u8d22\'), Cat(\'\u51ef\u8482\'), Dog(\'\u5927\u9ec4\')]\n    for pet in pets:\n        pet.make_voice()\n\n\nif __name__ == \'__main__\':\n    main()\n')),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"Pet"),"\u7c7b\u5904\u7406\u6210\u4e86\u4e00\u4e2a\u62bd\u8c61\u7c7b\uff0c\u6240\u8c13\u62bd\u8c61\u7c7b\u5c31\u662f\u4e0d\u80fd\u591f\u521b\u5efa\u5bf9\u8c61\u7684\u7c7b\uff0c\u8fd9\u79cd\u7c7b\u7684\u5b58\u5728\u5c31\u662f\u4e13\u95e8\u4e3a\u4e86\u8ba9\u5176\u4ed6\u7c7b\u53bb\u7ee7\u627f\u5b83\u3002Python\u4ece\u8bed\u6cd5\u5c42\u9762\u5e76\u6ca1\u6709\u50cfJava\u6216C#\u90a3\u6837\u63d0\u4f9b\u5bf9\u62bd\u8c61\u7c7b\u7684\u652f\u6301\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"abc"),"\u6a21\u5757\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ABCMeta"),"\u5143\u7c7b\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"abstractmethod"),"\u5305\u88c5\u5668\u6765\u8fbe\u5230\u62bd\u8c61\u7c7b\u7684\u6548\u679c\uff0c\u5982\u679c\u4e00\u4e2a\u7c7b\u4e2d\u5b58\u5728\u62bd\u8c61\u65b9\u6cd5\u90a3\u4e48\u8fd9\u4e2a\u7c7b\u5c31\u4e0d\u80fd\u591f\u5b9e\u4f8b\u5316\uff08\u521b\u5efa\u5bf9\u8c61\uff09\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Dog"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Cat"),"\u4e24\u4e2a\u5b50\u7c7b\u5206\u522b\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"Pet"),"\u7c7b\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"make_voice"),"\u62bd\u8c61\u65b9\u6cd5\u8fdb\u884c\u4e86\u91cd\u5199\u5e76\u7ed9\u51fa\u4e86\u4e0d\u540c\u7684\u5b9e\u73b0\u7248\u672c\uff0c\u5f53\u6211\u4eec\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570\u4e2d\u8c03\u7528\u8be5\u65b9\u6cd5\u65f6\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5c31\u8868\u73b0\u51fa\u4e86\u591a\u6001\u884c\u4e3a\uff08\u540c\u6837\u7684\u65b9\u6cd5\u505a\u4e86\u4e0d\u540c\u7684\u4e8b\u60c5\uff09\u3002"),(0,a.kt)("h2",{id:"\u7efc\u5408\u6848\u4f8b"},"\u7efc\u5408\u6848\u4f8b"),(0,a.kt)("h3",{id:"\u6848\u4f8b1\u5965\u7279\u66fc\u6253\u5c0f\u602a\u517d"},"\u6848\u4f8b1\uff1a\u5965\u7279\u66fc\u6253\u5c0f\u602a\u517d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\nfrom abc import ABCMeta, abstractmethod\nfrom random import randint, randrange\n\nclass Fighter(object, metaclass=ABCMeta):\n    """\u6218\u6597\u8005"""\n\n    # \u901a\u8fc7__slots__\u9b54\u6cd5\u9650\u5b9a\u5bf9\u8c61\u53ef\u4ee5\u7ed1\u5b9a\u7684\u6210\u5458\u53d8\u91cf\n    __slots__ = (\'_name\', \'_hp\')\n\n    def __init__(self, name, hp):\n        """\u521d\u59cb\u5316\u65b9\u6cd5\n\n        :param name: \u540d\u5b57\n        :param hp: \u751f\u547d\u503c\n        """\n        self._name = name\n        self._hp = hp\n\n    @property\n    def name(self):\n        return self._name\n\n    @property\n    def hp(self):\n        return self._hp\n\n    @hp.setter\n    def hp(self, hp):\n        self._hp = hp if hp >= 0 else 0\n\n    @property\n    def alive(self):\n        return self._hp > 0\n\n    @abstractmethod\n    def attack(self, other):\n        """\u653b\u51fb\n\n        :param other: \u88ab\u653b\u51fb\u7684\u5bf9\u8c61\n        """\n        pass\n\nclass Ultraman(Fighter):\n    """\u5965\u7279\u66fc"""\n\n    __slots__ = (\'_name\', \'_hp\', \'_mp\')\n\n    def __init__(self, name, hp, mp):\n        """\u521d\u59cb\u5316\u65b9\u6cd5\n\n        :param name: \u540d\u5b57\n        :param hp: \u751f\u547d\u503c\n        :param mp: \u9b54\u6cd5\u503c\n        """\n        super().__init__(name, hp)\n        self._mp = mp\n\n    def attack(self, other):\n        other.hp -= randint(15, 25)\n\n    def huge_attack(self, other):\n        """\u7a76\u6781\u5fc5\u6740\u6280(\u6253\u6389\u5bf9\u65b9\u81f3\u5c1150\u70b9\u6216\u56db\u5206\u4e4b\u4e09\u7684\u8840)\n\n        :param other: \u88ab\u653b\u51fb\u7684\u5bf9\u8c61\n\n        :return: \u4f7f\u7528\u6210\u529f\u8fd4\u56deTrue\u5426\u5219\u8fd4\u56deFalse\n        """\n        if self._mp >= 50:\n            self._mp -= 50\n            injury = other.hp * 3 // 4\n            injury = injury if injury >= 50 else 50\n            other.hp -= injury\n            return True\n        else:\n            self.attack(other)\n            return False\n\n    def magic_attack(self, others):\n        """\u9b54\u6cd5\u653b\u51fb\n\n        :param others: \u88ab\u653b\u51fb\u7684\u7fa4\u4f53\n\n        :return: \u4f7f\u7528\u9b54\u6cd5\u6210\u529f\u8fd4\u56deTrue\u5426\u5219\u8fd4\u56deFalse\n        """\n        if self._mp >= 20:\n            self._mp -= 20\n            for temp in others:\n                if temp.alive:\n                    temp.hp -= randint(10, 15)\n            return True\n        else:\n            return False\n\n    def resume(self):\n        """\u6062\u590d\u9b54\u6cd5\u503c"""\n        incr_point = randint(1, 10)\n        self._mp += incr_point\n        return incr_point\n\n    def __str__(self):\n        return \'~~~%s\u5965\u7279\u66fc~~~\\n\' % self._name + \\\n            \'\u751f\u547d\u503c: %d\\n\' % self._hp + \\\n            \'\u9b54\u6cd5\u503c: %d\\n\' % self._mp\n\n\nclass Monster(Fighter):\n    """\u5c0f\u602a\u517d"""\n\n    __slots__ = (\'_name\', \'_hp\')\n\n    def attack(self, other):\n        other.hp -= randint(10, 20)\n\n    def __str__(self):\n        return \'~~~%s\u5c0f\u602a\u517d~~~\\n\' % self._name + \\\n            \'\u751f\u547d\u503c: %d\\n\' % self._hp\n\n\ndef is_any_alive(monsters):\n    """\u5224\u65ad\u6709\u6ca1\u6709\u5c0f\u602a\u517d\u662f\u6d3b\u7740\u7684"""\n    for monster in monsters:\n        if monster.alive > 0:\n            return True\n    return False\n\n\ndef select_alive_one(monsters):\n    """\u9009\u4e2d\u4e00\u53ea\u6d3b\u7740\u7684\u5c0f\u602a\u517d"""\n    monsters_len = len(monsters)\n    while True:\n        index = randrange(monsters_len)\n        monster = monsters[index]\n        if monster.alive > 0:\n            return monster\n\n\ndef display_info(ultraman, monsters):\n    """\u663e\u793a\u5965\u7279\u66fc\u548c\u5c0f\u602a\u517d\u7684\u4fe1\u606f"""\n    print(ultraman)\n    for monster in monsters:\n        print(monster, end=\'\')\n\n\ndef main():\n    u = Ultraman(\'\u9a86\u660a\', 1000, 120)\n    m1 = Monster(\'\u72c4\u4ec1\u6770\', 250)\n    m2 = Monster(\'\u767d\u5143\u82b3\', 500)\n    m3 = Monster(\'\u738b\u5927\u9524\', 750)\n    ms = [m1, m2, m3]\n    fight_round = 1\n    while u.alive and is_any_alive(ms):\n        print(\'========\u7b2c%02d\u56de\u5408========\' % fight_round)\n        m = select_alive_one(ms)  # \u9009\u4e2d\u4e00\u53ea\u5c0f\u602a\u517d\n        skill = randint(1, 10)   # \u901a\u8fc7\u968f\u673a\u6570\u9009\u62e9\u4f7f\u7528\u54ea\u79cd\u6280\u80fd\n        if skill <= 6:  # 60%\u7684\u6982\u7387\u4f7f\u7528\u666e\u901a\u653b\u51fb\n            print(\'%s\u4f7f\u7528\u666e\u901a\u653b\u51fb\u6253\u4e86%s.\' % (u.name, m.name))\n            u.attack(m)\n            print(\'%s\u7684\u9b54\u6cd5\u503c\u6062\u590d\u4e86%d\u70b9.\' % (u.name, u.resume()))\n        elif skill <= 9:  # 30%\u7684\u6982\u7387\u4f7f\u7528\u9b54\u6cd5\u653b\u51fb(\u53ef\u80fd\u56e0\u9b54\u6cd5\u503c\u4e0d\u8db3\u800c\u5931\u8d25)\n            if u.magic_attack(ms):\n                print(\'%s\u4f7f\u7528\u4e86\u9b54\u6cd5\u653b\u51fb.\' % u.name)\n            else:\n                print(\'%s\u4f7f\u7528\u9b54\u6cd5\u5931\u8d25.\' % u.name)\n        else:  # 10%\u7684\u6982\u7387\u4f7f\u7528\u7a76\u6781\u5fc5\u6740\u6280(\u5982\u679c\u9b54\u6cd5\u503c\u4e0d\u8db3\u5219\u4f7f\u7528\u666e\u901a\u653b\u51fb)\n            if u.huge_attack(m):\n                print(\'%s\u4f7f\u7528\u7a76\u6781\u5fc5\u6740\u6280\u8650\u4e86%s.\' % (u.name, m.name))\n            else:\n                print(\'%s\u4f7f\u7528\u666e\u901a\u653b\u51fb\u6253\u4e86%s.\' % (u.name, m.name))\n                print(\'%s\u7684\u9b54\u6cd5\u503c\u6062\u590d\u4e86%d\u70b9.\' % (u.name, u.resume()))\n        if m.alive > 0:  # \u5982\u679c\u9009\u4e2d\u7684\u5c0f\u602a\u517d\u6ca1\u6709\u6b7b\u5c31\u56de\u51fb\u5965\u7279\u66fc\n            print(\'%s\u56de\u51fb\u4e86%s.\' % (m.name, u.name))\n            m.attack(u)\n        display_info(u, ms)  # \u6bcf\u4e2a\u56de\u5408\u7ed3\u675f\u540e\u663e\u793a\u5965\u7279\u66fc\u548c\u5c0f\u602a\u517d\u7684\u4fe1\u606f\n        fight_round += 1\n    print(\'\\n========\u6218\u6597\u7ed3\u675f!========\\n\')\n    if u.alive > 0:\n        print(\'%s\u5965\u7279\u66fc\u80dc\u5229!\' % u.name)\n    else:\n        print(\'\u5c0f\u602a\u517d\u80dc\u5229!\')\n\n\nif __name__ == \'__main__\':\n    main()\n')),(0,a.kt)("h3",{id:"\u6848\u4f8b2\u6251\u514b\u6e38\u620f"},"\u6848\u4f8b2\uff1a\u6251\u514b\u6e38\u620f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\nimport random\n\nclass Card(object):\n    """\u4e00\u5f20\u724c"""\n\n    def __init__(self, suite, face):\n        self._suite = suite\n        self._face = face\n\n    @property\n    def face(self):\n        return self._face\n\n    @property\n    def suite(self):\n        return self._suite\n\n    def __str__(self):\n        if self._face == 1:\n            face_str = \'A\'\n        elif self._face == 11:\n            face_str = \'J\'\n        elif self._face == 12:\n            face_str = \'Q\'\n        elif self._face == 13:\n            face_str = \'K\'\n        else:\n            face_str = str(self._face)\n        return \'%s%s\' % (self._suite, face_str)\n    \n    def __repr__(self):\n        return self.__str__()\n\n\nclass Poker(object):\n    """\u4e00\u526f\u724c"""\n\n    def __init__(self):\n        self._cards = [Card(suite, face) \n                       for suite in \'\u2660\u2665\u2663\u2666\'\n                       for face in range(1, 14)]\n        self._current = 0\n\n    @property\n    def cards(self):\n        return self._cards\n\n    def shuffle(self):\n        """\u6d17\u724c(\u968f\u673a\u4e71\u5e8f)"""\n        self._current = 0\n        random.shuffle(self._cards)\n\n    @property\n    def next(self):\n        """\u53d1\u724c"""\n        card = self._cards[self._current]\n        self._current += 1\n        return card\n\n    @property\n    def has_next(self):\n        """\u8fd8\u6709\u6ca1\u6709\u724c"""\n        return self._current < len(self._cards)\n\n\nclass Player(object):\n    """\u73a9\u5bb6"""\n\n    def __init__(self, name):\n        self._name = name\n        self._cards_on_hand = []\n\n    @property\n    def name(self):\n        return self._name\n\n    @property\n    def cards_on_hand(self):\n        return self._cards_on_hand\n\n    def get(self, card):\n        """\u6478\u724c"""\n        self._cards_on_hand.append(card)\n\n    def arrange(self, card_key):\n        """\u73a9\u5bb6\u6574\u7406\u624b\u4e0a\u7684\u724c"""\n        self._cards_on_hand.sort(key=card_key)\n\n\n# \u6392\u5e8f\u89c4\u5219-\u5148\u6839\u636e\u82b1\u8272\u518d\u6839\u636e\u70b9\u6570\u6392\u5e8f\ndef get_key(card):\n    return (card.suite, card.face)\n\n\ndef main():\n    p = Poker()\n    p.shuffle()\n    players = [Player(\'\u4e1c\u90aa\'), Player(\'\u897f\u6bd2\'), Player(\'\u5357\u5e1d\'), Player(\'\u5317\u4e10\')]\n    for _ in range(13):\n        for player in players:\n            player.get(p.next)\n    for player in players:\n        print(player.name + \':\', end=\' \')\n        player.arrange(get_key)\n        print(player.cards_on_hand)\n\n\nif __name__ == \'__main__\':\n    main()\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," \u5927\u5bb6\u53ef\u4ee5\u81ea\u5df1\u5c1d\u8bd5\u5728\u4e0a\u9762\u4ee3\u7801\u7684\u57fa\u7840\u4e0a\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6251\u514b\u6e38\u620f\uff0c\u4f8b\u598221\u70b9(Black Jack)\uff0c\u6e38\u620f\u7684\u89c4\u5219\u53ef\u4ee5\u81ea\u5df1\u5728\u7f51\u4e0a\u627e\u4e00\u627e\u3002")),(0,a.kt)("h3",{id:"\u6848\u4f8b3\u5de5\u8d44\u7ed3\u7b97\u7cfb\u7edf"},"\u6848\u4f8b3\uff1a\u5de5\u8d44\u7ed3\u7b97\u7cfb\u7edf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\n"""\n\u67d0\u516c\u53f8\u6709\u4e09\u79cd\u7c7b\u578b\u7684\u5458\u5de5 \u5206\u522b\u662f\u90e8\u95e8\u7ecf\u7406\u3001\u7a0b\u5e8f\u5458\u548c\u9500\u552e\u5458\n\u9700\u8981\u8bbe\u8ba1\u4e00\u4e2a\u5de5\u8d44\u7ed3\u7b97\u7cfb\u7edf \u6839\u636e\u63d0\u4f9b\u7684\u5458\u5de5\u4fe1\u606f\u6765\u8ba1\u7b97\u6708\u85aa\n\u90e8\u95e8\u7ecf\u7406\u7684\u6708\u85aa\u662f\u6bcf\u6708\u56fa\u5b9a15000\u5143\n\u7a0b\u5e8f\u5458\u7684\u6708\u85aa\u6309\u672c\u6708\u5de5\u4f5c\u65f6\u95f4\u8ba1\u7b97 \u6bcf\u5c0f\u65f6150\u5143\n\u9500\u552e\u5458\u7684\u6708\u85aa\u662f1200\u5143\u7684\u5e95\u85aa\u52a0\u4e0a\u9500\u552e\u989d5%\u7684\u63d0\u6210\n"""\nfrom abc import ABCMeta, abstractmethod\n\n\nclass Employee(object, metaclass=ABCMeta):\n    """\u5458\u5de5"""\n\n    def __init__(self, name):\n        """\n        \u521d\u59cb\u5316\u65b9\u6cd5\n\n        :param name: \u59d3\u540d\n        """\n        self._name = name\n\n    @property\n    def name(self):\n        return self._name\n\n    @abstractmethod\n    def get_salary(self):\n        """\n        \u83b7\u5f97\u6708\u85aa\n\n        :return: \u6708\u85aa\n        """\n        pass\n\n\nclass Manager(Employee):\n    """\u90e8\u95e8\u7ecf\u7406"""\n\n    def get_salary(self):\n        return 15000.0\n\n\nclass Programmer(Employee):\n    """\u7a0b\u5e8f\u5458"""\n\n    def __init__(self, name, working_hour=0):\n        super().__init__(name)\n        self._working_hour = working_hour\n\n    @property\n    def working_hour(self):\n        return self._working_hour\n\n    @working_hour.setter\n    def working_hour(self, working_hour):\n        self._working_hour = working_hour if working_hour > 0 else 0\n\n    def get_salary(self):\n        return 150.0 * self._working_hour\n\n\nclass Salesman(Employee):\n    """\u9500\u552e\u5458"""\n\n    def __init__(self, name, sales=0):\n        super().__init__(name)\n        self._sales = sales\n\n    @property\n    def sales(self):\n        return self._sales\n\n    @sales.setter\n    def sales(self, sales):\n        self._sales = sales if sales > 0 else 0\n\n    def get_salary(self):\n        return 1200.0 + self._sales * 0.05\n\n\ndef main():\n    emps = [\n        Manager(\'\u5218\u5907\'), Programmer(\'\u8bf8\u845b\u4eae\'),\n        Manager(\'\u66f9\u64cd\'), Salesman(\'\u8340\u5f67\'),\n        Salesman(\'\u5415\u5e03\'), Programmer(\'\u5f20\u8fbd\'),\n        Programmer(\'\u8d75\u4e91\')\n    ]\n    for emp in emps:\n        if isinstance(emp, Programmer):\n            emp.working_hour = int(input(\'\u8bf7\u8f93\u5165%s\u672c\u6708\u5de5\u4f5c\u65f6\u95f4: \' % emp.name))\n        elif isinstance(emp, Salesman):\n            emp.sales = float(input(\'\u8bf7\u8f93\u5165%s\u672c\u6708\u9500\u552e\u989d: \' % emp.name))\n        # \u540c\u6837\u662f\u63a5\u6536get_salary\u8fd9\u4e2a\u6d88\u606f\u4f46\u662f\u4e0d\u540c\u7684\u5458\u5de5\u8868\u73b0\u51fa\u4e86\u4e0d\u540c\u7684\u884c\u4e3a(\u591a\u6001)\n        print(\'%s\u672c\u6708\u5de5\u8d44\u4e3a: \uffe5%s\u5143\' %\n              (emp.name, emp.get_salary()))\n\n\nif __name__ == \'__main__\':\n    main()\n')))}m.isMDXComponent=!0},8272:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/uml-components-3d7633b2562be9766760cb05041d62e5.png"},2668:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/uml-example-c258b769b21b7a49e157ede7573c3c78.png"}}]);