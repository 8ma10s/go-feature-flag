"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[64902],{47271:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(85893),n=t(11151);const i={sidebar_position:5},s="Google Cloud Storage",l={id:"go_module/store_file/google_cloud_storage",title:"Google Cloud Storage",description:"The Google Cloud Storage Retriever will use the google-cloud-storage package and google-api-options package to access your flag in Google Cloud Storage.",source:"@site/versioned_docs/version-v1.31.1/go_module/store_file/google_cloud_storage.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/google_cloud_storage",permalink:"/docs/v1.31.1/go_module/store_file/google_cloud_storage",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.31.1/go_module/store_file/google_cloud_storage.md",tags:[],version:"v1.31.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Kubernetes configmaps",permalink:"/docs/v1.31.1/go_module/store_file/kubernetes_configmaps"},next:{title:"GitHub",permalink:"/docs/v1.31.1/go_module/store_file/github"}},d={},c=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"google-cloud-storage",children:"Google Cloud Storage"})}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/gcstorageretriever/#Retriever",children:(0,r.jsx)(o.strong,{children:"Google Cloud Storage Retriever"})})," will use the ",(0,r.jsx)(o.a,{href:"https://pkg.go.dev/cloud.google.com/go/storage",children:"google-cloud-storage package"})," and ",(0,r.jsx)(o.a,{href:"https://pkg.go.dev/google.golang.org/api/option",children:"google-api-options package"})," to access your flag in Google Cloud Storage."]}),"\n",(0,r.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &gcstorageretriever.Retriever{\n\t    Options: []option.ClientOption{option.WithoutAuthentication()},\n\t\tBucket: "2093u4pkasjc3",\n\t\tObject: "flags.yaml",\n\t}\n})\ndefer ffclient.Close()\n'})}),"\n",(0,r.jsx)(o.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsx)(o.p,{children:"To configure your Google Cloud Storage file location:"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Field"}),(0,r.jsx)(o.th,{children:"Description"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"Bucket"})})}),(0,r.jsx)(o.td,{children:"The name of your bucket."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"Object"})})}),(0,r.jsx)(o.td,{children:"The name of your object in your bucket."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"Option"})})}),(0,r.jsxs)(o.td,{children:["An instance of ",(0,r.jsx)(o.code,{children:"option.ClientOption"})," that configures your access to Google Cloud. ",(0,r.jsx)("br",{})," Check ",(0,r.jsx)(o.a,{href:"https://cloud.google.com/docs/authentication",children:"this documentation for more info"}),"."]})]})]})]})]})}function g(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>s});var r=t(67294);const n={},i=r.createContext(n);function s(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);