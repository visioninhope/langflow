"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3414:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(941),o=a(4996);const i=e=>{let{alt:t,sources:a}=e;const[i,l]=(0,n.useState)(!1),p=e=>{"Escape"===e.key&&l(!1)};return(0,n.useEffect)((()=>(i?document.addEventListener("keydown",p):document.removeEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)})),[i]),n.createElement("div",{className:"zoomable-image "+(i?"fullscreen":""),onClick:()=>{l(!i)}},n.createElement(r.Z,{className:"zoomable-image-inner",alt:t,sources:{light:(0,o.Z)(a.light),dark:(0,o.Z)(a.dark)}}))}},625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(941),a(4996),a(3414);const o={},i="Building chatbots with System Message",l={unversionedId:"guides/chatprompttemplate_guide",id:"guides/chatprompttemplate_guide",title:"Building chatbots with System Message",description:"Overview",source:"@site/docs/guides/chatprompttemplate_guide.mdx",sourceDirName:"guides",slug:"/guides/chatprompttemplate_guide",permalink:"/guides/chatprompttemplate_guide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Integrating documents with prompt variables",permalink:"/guides/loading_document"},next:{title:"Conversation Chain",permalink:"/examples/conversation-chain"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Interactive Guide",id:"interactive-guide",level:2},{value:"Step-by-Step Instructions",id:"step-by-step-instructions",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-chatbots-with-system-message"},"Building chatbots with System Message"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'In this guide, we will modify the "Basic Chat with Prompt and History" example, integrating the ChatPromptTemplate with the SystemMessagePromptTemplate and HumanMessagePromptTemplate components. By following these steps, you\'ll be able to build a personalized chatbot that can interpret and respond based on user-defined System messages.'),(0,r.kt)("h2",{id:"interactive-guide"},"Interactive Guide"),(0,r.kt)("iframe",{src:"https://app.tango.us/app/embed/f05bb3a7-4ceb-4b61-921f-628563b562f6?iframe=true",sandbox:"allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin",security:"restricted",title:"Step-by-Step Instructions to Customize and Build a Chatbot with custom System Message",width:"100%",height:"800px",referrerpolicy:"strict-origin-when-cross-origin",frameborder:"0",webkitallowfullscreen:"webkitallowfullscreen",mozallowfullscreen:"mozallowfullscreen",allowfullscreen:"allowfullscreen"}),(0,r.kt)("h2",{id:"step-by-step-instructions"},"Step-by-Step Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Navigate to the "Community Examples" section.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Locate the "Basic Chat with Prompt and History" example, and click on "Fork Example".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Once in the editor, find the "PromptTemplate" component and remove it.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, add these three components: ChatPromptTemplate, SystemMessagePromptTemplate, and HumanMessagePromptTemplate."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Remember to set the model to gpt-3.5-turbo-0613 or the most up-to-date version. The latest models have improved capabilities to comprehend System messages.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Open the "Prompt" field on the SystemMessagePromptTemplate component.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the text: ",(0,r.kt)("inlineCode",{parentName:"p"},"You are a {role} that {behavior}."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Save your changes by clicking on "Check & Save".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Define the 'role' variable by typing \"obedient assistant\".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Next, navigate to the HumanMessagePromptTemplate and open the "Prompt" field.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Here, simply enter ",(0,r.kt)("inlineCode",{parentName:"p"},"{input}"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Save these changes by clicking on "Check & Save".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, you should see your flow populated with the variables you defined.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Memory component, set the 'Input Key' to \"input\"."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tip:")," When using a Memory component with multiple variables, it's crucial to specify which variable should be used to generate the conversation history.")),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on the "Build" button to implement your changes.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the chat interface to test your modifications.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should now be able to see and use the defined variables in the chat interface.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on 'role' to examine the variable you established in the canvas.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, let's define the 'behavior' variable.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the text: \"writes the word 'Langflow' at the end of every sentence.\"")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Test your chatbot by typing "How can you help me?"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If everything was set up correctly, your chatbot should respond appropriately, following the defined behavior.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Congratulations! You have successfully customized and built your chatbot."))),(0,r.kt)("p",null,"By following these instructions, you have created a dynamic chatbot capable of understanding and responding based on custom system messages, enhancing the user experience and interaction. Enjoy your personalized assistant!"))}u.isMDXComponent=!0}}]);