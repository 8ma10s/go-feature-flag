"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[99311],{87198:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(85893),a=r(11151),l=r(74866),o=r(85162);const i={},s="Progressive rollout",c={id:"configure_flag/rollout/progressive",title:"Progressive rollout",description:"A progressive rollout allows you to increase the percentage of your flag over time.",source:"@site/versioned_docs/version-v1.25.1/configure_flag/rollout/progressive.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/progressive",permalink:"/docs/v1.25.1/configure_flag/rollout/progressive",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.25.1/configure_flag/rollout/progressive.mdx",tags:[],version:"v1.25.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Experimentation rollout / A/B Testing",permalink:"/docs/v1.25.1/configure_flag/rollout/experimentation"},next:{title:"Scheduled rollout",permalink:"/docs/v1.25.1/configure_flag/rollout/scheduled"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"progressive-rollout",children:"Progressive rollout"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"progressive rollout"})," allows you to increase the percentage of your flag over time."]}),"\n",(0,t.jsxs)(n.p,{children:["You can select a ",(0,t.jsx)(n.strong,{children:"release ramp"})," where the percentage of your flag will increase progressively between the start date\nand the end date."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(l.Z,{groupId:"code",children:[(0,t.jsx)(o.Z,{value:"yaml",label:"YAML",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"progressive-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n# highlight-start\n    progressiveRollout:\n      initial:\n        variation: variationB\n        percentage: 0\n        date: 2021-03-20T00:00:00.1-05:00\n      end:\n        variation: variationB\n        percentage: 100\n        date: 2021-03-21T00:00:00.1-05:00\n# highlight-end\n"})})}),(0,t.jsx)(o.Z,{value:"json",label:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "progressive-flag": {\n    "variations": {\n      "variationA": "A",\n      "variationB": "B"\n    },\n    "defaultRule": {\n# highlight-start\n      "progressiveRollout": {\n        "initial": {\n          "variation": "variationB",\n          "percentage": 0,\n          "date": "2021-03-20T05:00:00.100Z"\n        },\n        "end": {\n          "variation": "variationB",\n          "percentage": 100,\n          "date": "2021-03-21T05:00:00.100Z"\n        }\n      },\n# highlight-end\n    }\n  }\n}\n'})})}),(0,t.jsx)(o.Z,{value:"toml",label:"TOML",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[progressive-flag.variations]\nvariationA = "A"\nvariationB = "B"\n# highlight-start\n[progressive-flag.defaultRule.progressiveRollout.initial]\nvariation = "variationB"\npercentage = 0\ndate = 2021-03-20T05:00:00.100Z\n\n[progressive-flag.defaultRule.progressiveRollout.end]\nvariation = "variationB"\npercentage = 100\ndate = 2021-03-21T05:00:00.100Z\n# highlight-end\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The dates are in the format supported natively by your flag file format."})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"releaseRamp"})})}),(0,t.jsxs)(n.td,{children:["It contains the time slot where we will progressively increase the percentage of the flag.",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"Before"})," the ",(0,t.jsx)(n.code,{children:"start"})," date we will serve the ",(0,t.jsx)(n.code,{children:"percentage.initial"})," percentage of the flag."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"Between"})," ",(0,t.jsx)(n.code,{children:"start"})," and ",(0,t.jsx)(n.code,{children:"end"})," we will serve a percentage of the flag corresponding to the actual time."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:"After"})," the ",(0,t.jsx)(n.code,{children:"end"})," date we will serve the ",(0,t.jsx)(n.code,{children:"percentage.end"})," percentage of the flag."]})]}),(0,t.jsxs)("p",{children:["If you have no date in your ",(0,t.jsx)(n.code,{children:"releaseRamp"})," we will not do any progressive rollout and use the top level percentage you have configured ",(0,t.jsx)(n.em,{children:"(0% in our example)"}),"."]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentage"})})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"(optional)"}),(0,t.jsx)("br",{}),"It represents the ramp of progress, at which level the flag starts (",(0,t.jsx)(n.code,{children:"initial"}),") and ends (",(0,t.jsx)(n.code,{children:"end"}),").",(0,t.jsx)("br",{}),(0,t.jsxs)(n.strong,{children:["Default: ",(0,t.jsx)(n.code,{children:"initial"})," = ",(0,t.jsx)(n.code,{children:"0"})," and ",(0,t.jsx)(n.code,{children:"end"})," = ",(0,t.jsx)(n.code,{children:"100"})]})]})]})]})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(36905),l=r(12466),o=r(16550),i=r(20469),s=r(91980),c=r(67392),u=r(20812);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=h(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=f({queryString:r,groupId:a}),[p,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),m=(()=>{const e=c??p;return g({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function b(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,r=s.indexOf(n),a=i[r].value;a!==t&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,v.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(67294);const a={},l=t.createContext(a);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);