"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[91545],{2970:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(85893),n=i(11151);const o={sidebar_position:6},s="GitHub",l={id:"go_module/store_file/github",title:"GitHub",description:"The GitHub Retriever",source:"@site/versioned_docs/version-v1.36.0/go_module/store_file/github.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/github",permalink:"/docs/go_module/store_file/github",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.36.0/go_module/store_file/github.md",tags:[],version:"v1.36.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/docs/go_module/store_file/google_cloud_storage"},next:{title:"GitLab",permalink:"/docs/go_module/store_file/gitlab"}},d={},c=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"github",children:"GitHub"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/githubretriever/#Retriever",children:(0,r.jsx)(t.strong,{children:"GitHub Retriever"})}),"\nwill perform an HTTP Request with your GitHub configuration to get your flags."]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["GitHub has rate limits, be sure to correctly set your ",(0,r.jsx)(t.code,{children:"PollingInterval"})," to avoid reaching the limit."]}),(0,r.jsx)(t.p,{children:"If the rate limit is reached, the retriever will return an error and will stop polling until GitHub allows it again."})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &githubretriever.Retriever{\n        RepositorySlug: "thomaspoignant/go-feature-flag",\n        Branch: "main",\n        FilePath: "testdata/flag-config.goff.yaml",\n        GithubToken: "XXXX",\n        Timeout: 2 * time.Second,\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsx)(t.p,{children:"To configure the access to your GitHub file:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"RepositorySlug"})})}),(0,r.jsxs)(t.td,{children:["Your GitHub slug ",(0,r.jsx)(t.code,{children:"org/repo-name"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"FilePath"})})}),(0,r.jsx)(t.td,{children:"The path of your file."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Branch"})})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"The branch where your file is.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.code,{children:"main"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"GithubToken"})})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"Github token is used to access a private repository, you need the ",(0,r.jsx)(t.code,{children:"repo"})," permission ",(0,r.jsxs)(t.em,{children:["(",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token",children:"how to create a GitHub token"}),")"]}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Timeout"})})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"Timeout for the HTTP call ",(0,r.jsx)("br",{}),"Default: 10 seconds"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>s});var r=i(67294);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);