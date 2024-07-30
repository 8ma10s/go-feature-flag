"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[39010],{86475:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=o(85893),r=o(11151);const i={sidebar_position:7},l="MongoDB",s={id:"go_module/store_file/mongodb",title:"MongoDB",description:"The mongodbRetriever will use the mongoDB database to get your flags.",source:"@site/versioned_docs/version-v1.28.0/go_module/store_file/mongodb.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/mongodb",permalink:"/docs/v1.28.0/go_module/store_file/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.28.0/go_module/store_file/mongodb.md",tags:[],version:"v1.28.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/docs/v1.28.0/go_module/store_file/gitlab"},next:{title:"Redis",permalink:"/docs/v1.28.0/go_module/store_file/redis"}},a={},d=[{value:"Example",id:"example",level:2},{value:"Expected format",id:"expected-format",level:2},{value:"Example:",id:"example-1",level:3},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"mongodb",children:"MongoDB"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"mongodbRetriever"})," will use the mongoDB database to get your flags."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'linenums="1"',children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n\t  Retriever: &mongodbretriever.Retriever{\n        Collection: "featureFlags",\n        Database: "appConfig",\n        URI: "mongodb://root:example@127.0.0.1:27017/",\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,t.jsx)(n.h2,{id:"expected-format",children:"Expected format"}),"\n",(0,t.jsx)(n.p,{children:"If you use MongoDB to store your flags, you need a specific format to store your flags."}),"\n",(0,t.jsxs)(n.p,{children:["We expect the flag to be stored in JSON format as defined in the ",(0,t.jsx)(n.a,{href:"../../configure_flag/flag_format#format-details",children:"flag format"}),",\nbut you should also add a new field called ",(0,t.jsx)(n.code,{children:"flag"})," containing the name of the flag."]}),"\n",(0,t.jsx)(n.p,{children:"The retriever will read all the flags from the collection."}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "flag": "new-admin-access",\n    "variations": {\n        "default_var": false,\n        "false_var": false,\n        "true_var": true\n    },\n    "defaultRule": {\n        "percentage": {\n            "false_var": 70,\n            "true_var": 30\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,t.jsx)(n.p,{children:"To configure your mongodb retriever:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Collection"})})}),(0,t.jsx)(n.td,{children:"Name of the collection where your flags are stored"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Database"})})}),(0,t.jsx)(n.td,{children:"Name of the mongo database where the collection is located."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"URI"})})}),(0,t.jsx)(n.td,{children:"Connection URI of your mongoDB instance."})]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>l});var t=o(67294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);