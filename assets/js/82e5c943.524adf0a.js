"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[55863],{17372:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=o(85893),i=o(11151);const t={sidebar_position:81,title:"Profiling",description:"Profiling of the relay proxy."},a=void 0,l={id:"relay_proxy/profiling",title:"Profiling",description:"Profiling of the relay proxy.",source:"@site/docs/relay_proxy/profiling.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/profiling",permalink:"/docs/next/relay_proxy/profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/relay_proxy/profiling.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{sidebar_position:81,title:"Profiling",description:"Profiling of the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Monitoring / Tracing",permalink:"/docs/next/relay_proxy/monitor_relay_proxy"},next:{title:"Advanced usage",permalink:"/docs/next/relay_proxy/advanced_usage"}},s={},d=[{value:"Profiling",id:"profiling",level:2},{value:"Enable profiling",id:"enable-profiling",level:3}];function p(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"profiling",children:"Profiling"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"relay proxy"})," is able to expose profiling information.",(0,r.jsx)(n.br,{}),"\n","This is useful to understand the performance of the service and solve potential issues."]}),"\n",(0,r.jsxs)(n.p,{children:["The information are exposed on the ",(0,r.jsx)(n.code,{children:"/debug/pprof"})," endpoint, and we are using the default ",(0,r.jsx)(n.code,{children:"net/http/pprof"})," package\nto expose the information."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["By default the profiling endpoints are disabled.",(0,r.jsx)(n.br,{}),"\n","You have to run the relay proxy in debug mode if you want to enable them."]})}),"\n",(0,r.jsxs)(n.p,{children:["List of endpoints exposed is available ",(0,r.jsx)(n.a,{href:"http://localhost:1031/debug/pprof/",children:"http://localhost:1031/debug/pprof/"})]}),"\n",(0,r.jsx)(n.h3,{id:"enable-profiling",children:"Enable profiling"}),"\n",(0,r.jsxs)(n.p,{children:["In your relay proxy configuration file you need to set the ",(0,r.jsx)(n.code,{children:"debug"})," field to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"{5}",children:"retriever:\n  kind: file\n  path: /goff/flags.yaml # Location of your feature flag files\n#  ...\ndebug: true\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>a});var r=o(67294);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);