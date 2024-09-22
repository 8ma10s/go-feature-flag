"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[29918],{72257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(85893),a=n(11151),i=(n(74866),n(85162),n(9617)),o=n(9286);const l={sidebar_position:30,title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application"},s=void 0,d={id:"openfeature_sdk/client_providers/openfeature_android",title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application",source:"@site/versioned_docs/version-v1.31.2/openfeature_sdk/client_providers/openfeature_android.mdx",sourceDirName:"openfeature_sdk/client_providers",slug:"/openfeature_sdk/client_providers/openfeature_android",permalink:"/docs/v1.31.2/openfeature_sdk/client_providers/openfeature_android",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.31.2/openfeature_sdk/client_providers/openfeature_android.mdx",tags:[],version:"v1.31.2",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application"},sidebar:"tutorialSidebar",previous:{title:"Swift",permalink:"/docs/v1.31.2/openfeature_sdk/client_providers/openfeature_swift"},next:{title:"Use the relay proxy",permalink:"/docs/v1.31.2/relay_proxy/"}},c={},u=[{value:"Functionalities:",id:"functionalities",level:3},{value:"Dependency Setup",id:"dependency-setup",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Initialize the provider",id:"initialize-the-provider",level:3},{value:"Available options",id:"available-options",level:3},{value:"Update the Evaluation Context",id:"update-the-evaluation-context",level:3},{value:"Evaluate a feature flag",id:"evaluate-a-feature-flag",level:3},{value:"Handling Provider Events",id:"handling-provider-events",level:3},{value:"Existing type of events are:",id:"existing-type-of-events-are",level:4},{value:"Features status",id:"features-status",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://search.maven.org/artifact/org.gofeatureflag.openfeature/gofeatureflag-kotlin-provider",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/maven-central/v/org.gofeatureflag.openfeature/gofeatureflag-kotlin-provider?color=blue&logo=android&style=flat-square",alt:"Maven Central Version"})})}),"\n",(0,r.jsx)(t.p,{children:"This OpenFeature provider has a Kotlin implementation for Android to communicate with the GO Feature\nFlag Server."}),"\n",(0,r.jsxs)(t.p,{children:["In conjuction with the ",(0,r.jsx)(t.a,{href:"https://openfeature.dev/docs/reference/technologies/client/kotlin",children:"OpenFeature SDK"})," you will be able to evaluate your feature flags in your ",(0,r.jsx)(t.strong,{children:"Android"})," applications."]}),"\n",(0,r.jsxs)(t.p,{children:["For documentation related to flags management in GO Feature Flag, refer to the ",(0,r.jsx)(t.a,{href:"https://gofeatureflag.org/docs",children:"GO Feature Flag documentation website"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"functionalities",children:"Functionalities:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Manage the integration of the OpenFeature Android SDK and GO Feature Flag relay-proxy."}),"\n",(0,r.jsx)(t.li,{children:"Prefetch and cache flag evaluations in order to give the flag value in an efficient way."}),"\n",(0,r.jsx)(t.li,{children:"Automatic configuration changes polling, to be informed as soon as a flag configuration has changed."}),"\n",(0,r.jsx)(t.li,{children:"Automatic data collection about which flags have been accessed by the application"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"dependency-setup",children:"Dependency Setup"}),"\n",(0,r.jsx)(o.Z,{language:"toml",showLineNumbers:!0,children:`api("dev.openfeature:android-sdk:${i.qg.tW}")\napi("org.gofeatureflag.openfeature:gofeatureflag-kotlin-provider${i.qg.fl}")`}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(t.h3,{id:"initialize-the-provider",children:"Initialize the provider"}),"\n",(0,r.jsx)(t.p,{children:"GO Feature Flag provider needs to be created and then set in the global OpenFeatureAPI."}),"\n",(0,r.jsxs)(t.p,{children:["The only required option to create a ",(0,r.jsx)(t.code,{children:"GoFeatureFlagProvider"})," is the URL to your GO Feature Flag relay-proxy instance."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'import org.gofeatureflag.openfeature.bean.GoFeatureFlagOptions\nimport org.gofeatureflag.openfeature.GoFeatureFlagProvider\n// ...\n\nval evaluationContext: EvaluationContext = ImmutableContext(\n        targetingKey = UUID.randomUUID().toString(),\n        attributes = mapOf( "age" to Value.Integer(22), "email" to Value.String("contact@gofeatureflag.org"))\n    )\n\nOpenFeatureAPI.setProvider(\n    GoFeatureFlagProvider(\n        options = GoFeatureFlagOptions( endpoint = "http://localhost:1031")\n    ),\n    evaluationContext\n)\n\n'})}),"\n",(0,r.jsx)(t.p,{children:"The evaluation context is the way for the client to specify contextual data that GO Feature Flag uses to evaluate the feature flags, it allows defining rules on the flag."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"targetingKey"})," is mandatory for GO Feature Flag in order to evaluate the feature flag, it could be the id of a user, a session ID or anything you find relevent to use as identifier during the evaluation."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"setProvider()"})," function is synchronous and returns immediately however, this does not mean that the provider is ready to be used.\nAn asynchronous network request to the GO Feature Flag backend to fetch all the flags configured for your application must be completed by the provider first. The provider will then emit a ",(0,r.jsx)(t.code,{children:"READY"})," event indicating you can start resolving flags."]}),"\n",(0,r.jsxs)(t.p,{children:["If you prefer to wait until the fetch is done you can use the ",(0,r.jsx)(t.code,{children:"suspend"})," compatible API available for waiting the Provider to become ready:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"runBlocking{\n  OpenFeatureAPI.shared.setProviderAndWait(\n    provider = provider,\n    dispatcher = Dispatchers.IO,\n    initialContext = evaluationContext\n  )\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"available-options",children:"Available options"}),"\n",(0,r.jsx)(t.p,{children:"When initializing the provider, you can pass some options to configure the provider and how it behaves with GO Feature Flag."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"endpoint"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"endpoint is the URL where your GO Feature Flag server is located."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeout"})}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"10000"}),(0,r.jsx)(t.td,{children:"(optional) timeout is the time in millisecond we wait for an answer from the server."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"maxIdleConnections"})}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"1000"}),(0,r.jsx)(t.td,{children:"(optional) maxIdleConnections is the maximum number of connexions in the connexion pool."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"keepAliveDuration"})}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"7200000"}),(0,r.jsx)(t.td,{children:"(optional) keepAliveDuration is the time in millisecond we keep the connexion open."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"apiKey"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"(optional) If GO Feature Flag is configured to authenticate the requests, you should provide an API Key to the provider. Please ask the administrator of the relay proxy to provide an API Key."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pollingIntervalInMillis"})}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"300000"}),(0,r.jsx)(t.td,{children:"(optional) Polling interval in millisecond to check with GO Feature Flag relay proxy if there is a flag configuration change."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"flushIntervalMs"})}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"1000"}),(0,r.jsx)(t.td,{children:"(optional) Time to wait before calling GO Feature Flag to store all the data about the evaluation in the relay proxy."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"update-the-evaluation-context",children:"Update the Evaluation Context"}),"\n",(0,r.jsxs)(t.p,{children:["During the usage of your application it may appear that the ",(0,r.jsx)(t.code,{children:"EvaluationContext"})," should be updated. For example, if a not logged-in user authentify himself, you will probably have to update the evaluation context."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val newContext: EvaluationContext = ImmutableContext(\n    targetingKey = userId,\n    attributes = mapOf( "age" to Value.Integer(32), "email" to Value.String("batman@gofeatureflag.org"))\n)\n\nOpenFeatureAPI.setEvaluationContext(newEvalCtx)\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"setEvaluationContext()"})," is a synchronous function similar to ",(0,r.jsx)(t.code,{children:"setProvider()"})," and will fetch the new version of the feature flags based on this new ",(0,r.jsx)(t.code,{children:"EvaluationContext"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"evaluate-a-feature-flag",children:"Evaluate a feature flag"}),"\n",(0,r.jsxs)(t.p,{children:["The client is used to retrieve values for the current ",(0,r.jsx)(t.code,{children:"EvaluationContext"}),". For example, retrieving a boolean value for the flag ",(0,r.jsx)(t.strong,{children:'"my-flag"'}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val client = OpenFeatureAPI.getClient()\nval result = client.getBooleanValue("my-flag", false)\n'})}),"\n",(0,r.jsx)(t.p,{children:"GO Feature Flag supports different all OpenFeature supported types of feature flags, it means that you can use all the accessor directly"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'// Bool\nclient.getBooleanValue("my-flag", false)\n\n// String\nclient.getStringValue("my-flag", "default")\n\n// Integer\nclient.getIntegerValue("my-flag", 1)\n\n// Double\nclient.getDoubleValue("my-flag", 1.1)\n\n// Object\nclient.getObjectValue("my-flag", Value.structure(mapOf("email" to Value.String("contact@gofeatureflag.org"))))\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"[!NOTE]\nIf you add a new flag in GO Feature Flag, expect some delay before having it available for the provider.\nRefreshing the cache from remote happens when setting a new provider and/or evaluation context in the global OpenFeatureAPI, but also when a configuration change is detected during the polling."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"handling-provider-events",children:"Handling Provider Events"}),"\n",(0,r.jsxs)(t.p,{children:["When setting the provider or the context ",(0,r.jsxs)(t.em,{children:["(via ",(0,r.jsx)(t.code,{children:"setEvaluationContext()"})," or ",(0,r.jsx)(t.code,{children:"setProvider()"}),")"]})," some events can be triggered to know the state of the provider."]}),"\n",(0,r.jsxs)(t.p,{children:["To listen to them, you can add an event handler via the ",(0,r.jsx)(t.code,{children:"OpenFeatureAPI"})," shared instance:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"val coroutineScope = CoroutineScope(Dispatchers.IO)\ncoroutineScope.launch {\n    provider.observe<OpenFeatureEvents.ProviderStale>().collect {\n        providerStaleEventReceived = true\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"existing-type-of-events-are",children:"Existing type of events are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ProviderReady"}),": Provider is ready."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ProviderError"}),": Provider in error."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ProviderStale"}),": Provider has not the latest version of the feature flags."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ProviderNotReady"}),": Provider is not ready to evaluate the feature flags."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"features-status",children:"Features status"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Feature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Flag evaluation"}),(0,r.jsx)(t.td,{children:"It is possible to evaluate all the type of flags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Cache invalidation"}),(0,r.jsx)(t.td,{children:"Websocket mechanism is in place to refresh the cache in case of configuration change"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Logging"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Flag Metadata"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Event Streaming"}),(0,r.jsx)(t.td,{children:"Not implemented"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Unit test"}),(0,r.jsx)(t.td,{children:"Not implemented"})]})]})]}),"\n",(0,r.jsx)("sub",{children:"Implemented: \u2705 | In-progress: \u26a0\ufe0f | Not implemented yet: \u274c"})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>F});var r=n(67294),a=n(36905),i=n(12466),o=n(16550),l=n(20469),s=n(91980),d=n(67392),c=n(20812);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,u]=g({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=d??f;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function m(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(d(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:u,onClick:c,...i,className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(m,{...t,...e}),(0,j.jsx)(b,{...t,...e})]})}function F(e){const t=(0,x.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},9617:e=>{e.exports=JSON.parse('{"qg":{"SZ":"1.11.0","fl":"0.1.0","m1":"0.2.23","tW":"0.3.0"}}')}}]);