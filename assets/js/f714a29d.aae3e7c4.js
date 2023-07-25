"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),o=n(6010),r=n(5281),i=n(5999);const l={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};var s=n(5108);const c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function m(e){const{children:t,type:n,title:i,icon:m}=u(e),p=function(e){const t=d[e]??e,n=c[t];return n||(s.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),c.info)}(n),g=i??p.label,{iconComponent:h}=p,f=m??a.createElement(h,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${p.infimaClassName}`,l.admonition)},a.createElement("div",{className:l.admonitionHeading},a.createElement("span",{className:l.admonitionIcon},f),g),a.createElement("div",{className:l.admonitionContent},t))}},250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(3612);const i={},l="Agents",s={unversionedId:"components/agents",id:"components/agents",title:"Agents",description:"We appreciate your understanding as we polish our documentation \u2013 it may contain some rough edges. Share your feedback or report issues to help us improve! \ud83d\udee0\ufe0f\ud83d\udcdd",source:"@site/docs/components/agents.mdx",sourceDirName:"components",slug:"/components/agents",permalink:"/components/agents",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Chat Interface",permalink:"/guidelines/chat-interface"},next:{title:"Chains",permalink:"/components/chains"}},c={},d=[{value:"AgentInitializer",id:"agentinitializer",level:3},{value:"CSVAgent",id:"csvagent",level:3},{value:"JSONAgent",id:"jsonagent",level:3},{value:"SQLAgent",id:"sqlagent",level:3},{value:"VectorStoreAgent",id:"vectorstoreagent",level:3},{value:"VectorStoreRouterAgent",id:"vectorstorerouteragent",level:3},{value:"ZeroShotAgent",id:"zeroshotagent",level:3}],u={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agents"},"Agents"),(0,o.kt)(r.Z,{type:"caution",icon:"\ud83d\udea7",title:"ZONE UNDER CONSTRUCTION",mdxType:"Admonition"},(0,o.kt)("p",null,"We appreciate your understanding as we polish our documentation \u2013 it may contain some rough edges. Share your feedback or report issues to help us improve! \ud83d\udee0\ufe0f\ud83d\udcdd")),(0,o.kt)("p",null,"Agents are components that use reasoning to make decisions and take actions, designed to autonomously perform tasks or provide services with some degree of \u201cfreedom\u201d (or agency). They combine the power of LLM chaining processes with access to external tools such as APIs to interact with applications and accomplish tasks."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"agentinitializer"},"AgentInitializer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AgentInitializer")," component is a quick way to construct a zero-shot agent from a language model (LLM) and tools."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LLM:")," Language Model to use in the ",(0,o.kt)("inlineCode",{parentName:"li"},"AgentInitializer"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memory:")," Used to add memory functionality to an agent. It allows the agent to store and retrieve information from previous conversations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tools:")," Tools that the agent will have access to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Agent:")," The type of agent to be instantiated. Current supported: ",(0,o.kt)("inlineCode",{parentName:"li"},"zero-shot-react-description"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"react-docstore"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"self-ask-with-search,conversational-react-description")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"openai-functions"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"csvagent"},"CSVAgent"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"CSVAgent")," is an agent that is designed to interact with CSV (Comma-Separated Values) files. CSV files are a common format for storing tabular data, where each row represents a record and each column represents a field. The CSV agent can perform various tasks, such as reading and writing CSV files, processing the data, and generating tables. It can extract information from the CSV file, manipulate the data, and perform operations like filtering, sorting, and aggregating."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LLM:")," Language Model to use in the ",(0,o.kt)("inlineCode",{parentName:"li"},"CSVAgent"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"path:")," The file path to the CSV data.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"jsonagent"},"JSONAgent"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"JSONAgent")," deals with JSON (JavaScript Object Notation) data. Similar to the CSVAgent, it works with a language model (LLM) and a toolkit designed for JSON manipulation. This agent can iteratively explore a JSON blob to find the information needed to answer the user's question. It can list keys, get values, and navigate through the structure of the JSON object."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LLM:")," Language Model to use in the ",(0,o.kt)("inlineCode",{parentName:"li"},"JSONAgent"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Toolkit:")," Toolkit that the agent will have access to.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sqlagent"},"SQLAgent"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLAgent")," is an agent that is designed to interact with SQL databases. It is capable of performing various tasks, such as querying the database, retrieving data, and executing SQL statements. The agent can provide information about the structure of the database, including the tables and their schemas. It can also perform operations like inserting, updating, and deleting data in the database. The SQL agent is a helpful tool for managing and working with SQL databases efficiently."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LLM:")," Language Model to use in the ",(0,o.kt)("inlineCode",{parentName:"li"},"SQLAgent"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"database_uri:")," A string representing the connection URI for the SQL database.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vectorstoreagent"},"VectorStoreAgent"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"VectorStoreAgent")," is designed to work with a vector store \u2013 a data structure used for storing and querying vector-based representations of data. The ",(0,o.kt)("inlineCode",{parentName:"p"},"VectorStoreAgent")," can query the vector store to find relevant information based on user inputs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LLM:")," Language Model to use in the ",(0,o.kt)("inlineCode",{parentName:"li"},"VectorStoreAgent"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Vector Store Info:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"VectorStoreInfo")," to use in the ",(0,o.kt)("inlineCode",{parentName:"li"},"VectorStoreAgent"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vectorstorerouteragent"},"VectorStoreRouterAgent"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"VectorStoreRouterAgent")," is a custom agent that takes a vector store router as input. It is typically used when there\u2019s a need to retrieve information from multiple vector stores. These can be connected through a ",(0,o.kt)("inlineCode",{parentName:"p"},"VectorStoreRouterToolkit")," and sent over to the ",(0,o.kt)("inlineCode",{parentName:"p"},"VectorStoreRouterAgent"),". An agent configured with multiple vector stores can route queries to the appropriate store based on the context."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LLM:")," Language Model to use in the ",(0,o.kt)("inlineCode",{parentName:"li"},"VectorStoreRouterAgent"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Vector Store Router Toolkit:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"VectorStoreRouterToolkit")," to use in the ",(0,o.kt)("inlineCode",{parentName:"li"},"VectorStoreRouterAgent"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"zeroshotagent"},"ZeroShotAgent"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZeroShotAgent")," is an agent that uses the ReAct framework to determine which tool to use based solely on the tool's description. It can be configured with any number of tools and requires a description for each tool. The agent is designed to be the most general-purpose action agent. It uses an ",(0,o.kt)("inlineCode",{parentName:"p"},"LLMChain")," to determine which actions to take and in what order."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Allowed Tools:")," Tools that the agent will have access to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LLM Chain:")," LLM Chain to be used by the agent.")))}p.isMDXComponent=!0}}]);