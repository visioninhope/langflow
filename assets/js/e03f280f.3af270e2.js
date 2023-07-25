"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,y=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3414:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(941),o=n(4996);const i=e=>{let{alt:t,sources:n}=e;const[i,l]=(0,r.useState)(!1),s=e=>{"Escape"===e.key&&l(!1)};return(0,r.useEffect)((()=>(i?document.addEventListener("keydown",s):document.removeEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)})),[i]),r.createElement("div",{className:"zoomable-image "+(i?"fullscreen":""),onClick:()=>{l(!i)}},r.createElement(a.Z,{className:"zoomable-image-inner",alt:t,sources:{light:(0,o.Z)(n.light),dark:(0,o.Z)(n.dark)}}))}},3909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=(n(941),n(4996),n(3414));const i={},l="MidJourney Prompt Chain",s={unversionedId:"examples/midjourney-prompt-chain",id:"examples/midjourney-prompt-chain",title:"MidJourney Prompt Chain",description:"The MidJourneyPromptChain can be used to generate imaginative and detailed MidJourney prompts.",source:"@site/docs/examples/midjourney-prompt-chain.mdx",sourceDirName:"examples",slug:"/examples/midjourney-prompt-chain",permalink:"/examples/midjourney-prompt-chain",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Buffer Memory",permalink:"/examples/buffer-memory"},next:{title:"CSV Loader",permalink:"/examples/csv-loader"}},m={},p=[{value:"\u26d3\ufe0f Langflow Example",id:"\ufe0f-langflow-example",level:2},{value:'<a target="_blank" href="json_files/MidJourney_Prompt_Chain.json" download>Download Flow</a>',id:"download-flow",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"midjourney-prompt-chain"},"MidJourney Prompt Chain"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MidJourneyPromptChain")," can be used to generate imaginative and detailed MidJourney prompts."),(0,a.kt)("p",null,"For example, type something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Dragon\n")),(0,a.kt)("p",null,"And get a response such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Imagine a mysterious forest, the trees are tall and ancient, their branches reaching up to the sky. Through the darkness, a dragon emerges from the shadows, its scales shimmering in the moonlight. Its wingspan is immense, and its eyes glow with a fierce intensity. It is a majestic and powerful creature, one that commands both respect and fear.\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConversationSummaryMemory")," stores a summary of the conversation over time. Try using it to create better prompts as the conversation goes on.")),(0,a.kt)("h2",{id:"\ufe0f-langflow-example"},"\u26d3\ufe0f Langflow Example"),(0,a.kt)(o.Z,{alt:"Docusaurus themed image",sources:{light:"img/midjourney-prompt-chain.png"},mdxType:"ZoomableImage"}),(0,a.kt)("h4",{id:"download-flow"},(0,a.kt)("a",{target:"\\_blank",href:"json_files/MidJourney_Prompt_Chain.json",download:!0},"Download Flow")),(0,a.kt)("admonition",{title:"LangChain Components \ud83e\udd9c\ud83d\udd17",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/model_io/models/llms/integrations/openai"},(0,a.kt)("inlineCode",{parentName:"a"},"OpenAI"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/memory/how_to/summary"},(0,a.kt)("inlineCode",{parentName:"a"},"ConversationSummaryMemory")),"\n:::"))))}d.isMDXComponent=!0}}]);