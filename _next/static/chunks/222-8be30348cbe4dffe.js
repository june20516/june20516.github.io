(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{3210:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(6006),o=r(3831),i=r(7562),s=r(9746),l=r(6133),a=r(2879),c=r(8539),d=r(3809);function u(e){return(0,d.ZP)("MuiList",e)}(0,c.Z)("MuiList",["root","padding","dense","subheader"]);var f=r(9268);let m=e=>{let{classes:t,disablePadding:r,dense:n,subheader:o}=e;return(0,i.Z)({root:["root",!r&&"padding",n&&"dense",o&&"subheader"]},u,t)},h=(0,s.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disablePadding&&t.padding,r.dense&&t.dense,r.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0}}]}),p=n.forwardRef(function(e,t){let r=(0,l.i)({props:e,name:"MuiList"}),{children:i,className:s,component:c="ul",dense:d=!1,disablePadding:u=!1,subheader:p,...g}=r,y=n.useMemo(()=>({dense:d}),[d]),v={...r,component:c,dense:d,disablePadding:u},S=m(v);return(0,f.jsx)(a.Z.Provider,{value:y,children:(0,f.jsxs)(h,{as:c,className:(0,o.Z)(S.root,s),ref:t,ownerState:v,...g,children:[p,i]})})});var g=p},2879:function(e,t,r){"use strict";var n=r(6006);let o=n.createContext({});t.Z=o},1452:function(e,t,r){"use strict";r.d(t,{ZP:function(){return M}});var n=r(6006),o=r(3831),i=r(7562),s=r(6538),l=r(9746),a=r(2601),c=r(6133),d=r(4414),u=r(2879),f=r(8539),m=r(3809);function h(e){return(0,m.ZP)("MuiListItem",e)}(0,f.Z)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);let p=(0,f.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function g(e){return(0,m.ZP)("MuiListItemSecondaryAction",e)}(0,f.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var y=r(9268);let v=e=>{let{disableGutters:t,classes:r}=e;return(0,i.Z)({root:["root",t&&"disableGutters"]},g,r)},S=(0,l.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),b=n.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiListItemSecondaryAction"}),{className:i,...s}=r,l=n.useContext(u.Z),a={...r,disableGutters:l.disableGutters},d=v(a);return(0,y.jsx)(S,{className:(0,o.Z)(d.root,i),ownerState:a,ref:t,...s})});b.muiName="ListItemSecondaryAction";let x=e=>{let{alignItems:t,classes:r,dense:n,disableGutters:o,disablePadding:s,divider:l,hasSecondaryAction:a}=e;return(0,i.Z)({root:["root",n&&"dense",!o&&"gutters",!s&&"padding",l&&"divider","flex-start"===t&&"alignItemsFlexStart",a&&"secondaryAction"],container:["container"]},h,r)},k=(0,l.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.hasSecondaryAction&&t.secondaryAction]}})((0,a.Z)(({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${p.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),C=(0,l.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),w=n.forwardRef(function(e,t){var r;let i=(0,c.i)({props:e,name:"MuiListItem"}),{alignItems:l="center",children:a,className:f,component:m,components:h={},componentsProps:p={},ContainerComponent:g="li",ContainerProps:{className:v,...S}={},dense:w=!1,disableGutters:M=!1,disablePadding:_=!1,divider:I=!1,secondaryAction:L,slotProps:j={},slots:E={},...T}=i,Z=n.useContext(u.Z),A=n.useMemo(()=>({dense:w||Z.dense||!1,alignItems:l,disableGutters:M}),[l,Z.dense,w,M]),P=n.useRef(null),$=n.Children.toArray(a),N=$.length&&(r=$[$.length-1],n.isValidElement(r)&&-1!==["ListItemSecondaryAction"].indexOf(r.type.muiName??r.type?._payload?.value?.muiName)),O={...i,alignItems:l,dense:A.dense,disableGutters:M,disablePadding:_,divider:I,hasSecondaryAction:N},R=x(O),H=(0,d.Z)(P,t),q=E.root||h.Root||k,K=j.root||p.root||{},G={className:(0,o.Z)(R.root,K.className,f),...T},V=m||"li";return N?(V=G.component||m?V:"div","li"===g&&("li"===V?V="div":"li"===G.component&&(G.component="div")),(0,y.jsx)(u.Z.Provider,{value:A,children:(0,y.jsxs)(C,{as:g,className:(0,o.Z)(R.container,v),ref:H,ownerState:O,...S,children:[(0,y.jsx)(q,{...K,...!(0,s.Z)(q)&&{as:V,ownerState:{...O,...K.ownerState}},...G,children:$}),$.pop()]})})):(0,y.jsx)(u.Z.Provider,{value:A,children:(0,y.jsxs)(q,{...K,as:V,ref:H,...!(0,s.Z)(q)&&{ownerState:{...O,...K.ownerState}},...G,children:[$,L&&(0,y.jsx)(b,{children:L})]})})});var M=w},1232:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var n=r(6006);let o=n.createContext(null);function i(){let e=n.useContext(o);return e}let s="function"==typeof Symbol&&Symbol.for;var l=s?Symbol.for("mui.nested"):"__THEME_NESTED__",a=r(9268),c=function(e){let{children:t,theme:r}=e,s=i(),c=n.useMemo(()=>{let e=null===s?{...r}:function(e,t){if("function"==typeof t){let r=t(e);return r}return{...e,...t}}(s,r);return null!=e&&(e[l]=null!==s),e},[r,s]);return(0,a.jsx)(o.Provider,{value:c,children:t})},d=r(584),u=r(3962);let f=n.createContext();var m=function({value:e,...t}){return(0,a.jsx)(f.Provider,{value:e??!0,...t})},h=r(8669);let p={};function g(e,t,r,o=!1){return n.useMemo(()=>{let n=e&&t[e]||t;if("function"==typeof r){let i=r(n),s=e?{...t,[e]:i}:i;return o?()=>s:s}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,o])}var y=function(e){let{children:t,theme:r,themeId:n}=e,o=(0,u.Z)(p),s=i()||p,l=g(n,o,r),f=g(n,s,r,!0),y="rtl"===l.direction;return(0,a.jsx)(c,{theme:f,children:(0,a.jsx)(d.T.Provider,{value:l,children:(0,a.jsx)(m,{value:y,children:(0,a.jsx)(h.Z,{value:l?.components,children:t})})})})},v=r(6356);function S({theme:e,...t}){let r=v.Z in e?e[v.Z]:void 0;return(0,a.jsx)(y,{...t,themeId:r?v.Z:void 0,theme:r||e})}var b=r(2798),x=r(9902);let k="mode",C="color-scheme";function w(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?"dark":"light"}}function M(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function _(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}var I=r(9001),L=r(4505);let j={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:E,useColorScheme:T,getInitColorSchemeScript:Z}=function(e){let{themeId:t,theme:r={},modeStorageKey:o=k,colorSchemeStorageKey:s=C,disableTransitionOnChange:l=!1,defaultColorScheme:c,resolveTheme:d}=e,u={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},f=n.createContext(void 0),m="string"==typeof c?c:c.light,h="string"==typeof c?c:c.dark;return{CssVarsProvider:function(e){let{children:u,theme:m,modeStorageKey:h=o,colorSchemeStorageKey:p=s,disableTransitionOnChange:g=l,storageWindow:v="undefined"==typeof window?void 0:window,documentNode:S="undefined"==typeof document?void 0:document,colorSchemeNode:b="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:I=!1,disableStyleSheetGeneration:L=!1}=e,j=n.useRef(!1),E=i(),T=n.useContext(f),Z=!!T&&!I,A=n.useMemo(()=>m||("function"==typeof r?r():r),[m]),P=A[t],{colorSchemes:$={},components:N={},cssVarPrefix:O,...R}=P||A,H=Object.keys($).filter(e=>!!$[e]).join(","),q=n.useMemo(()=>H.split(","),[H]),K="string"==typeof c?c:c.light,G="string"==typeof c?c:c.dark,V=$[K]&&$[G]?"system":$[R.defaultColorScheme]?.palette?.mode||R.palette?.mode,{mode:B,setMode:D,systemMode:F,lightColorScheme:W,darkColorScheme:z,colorScheme:J,setColorScheme:Y}=function(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:o,supportedColorSchemes:i=[],modeStorageKey:s=k,colorSchemeStorageKey:l=C,storageWindow:a="undefined"==typeof window?void 0:window}=e,c=i.join(","),d=i.length>1,[u,f]=n.useState(()=>{let e=_(s,t),n=_(`${l}-light`,r),i=_(`${l}-dark`,o);return{mode:e,systemMode:w(e),lightColorScheme:n,darkColorScheme:i}}),[,m]=n.useState(!1),h=n.useRef(!1);n.useEffect(()=>{d&&m(!0),h.current=!0},[d]);let p=M(u,e=>"light"===e?u.lightColorScheme:"dark"===e?u.darkColorScheme:void 0),g=n.useCallback(e=>{f(r=>{if(e===r.mode)return r;let n=e??t;try{localStorage.setItem(s,n)}catch(e){}return{...r,mode:n,systemMode:w(n)}})},[s,t]),y=n.useCallback(e=>{e?"string"==typeof e?e&&!c.includes(e)?console.error(`\`${e}\` does not exist in \`theme.colorSchemes\`.`):f(t=>{let r={...t};return M(t,t=>{try{localStorage.setItem(`${l}-${t}`,e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):f(t=>{let n={...t},i=null===e.light?r:e.light,s=null===e.dark?o:e.dark;if(i){if(c.includes(i)){n.lightColorScheme=i;try{localStorage.setItem(`${l}-light`,i)}catch(e){}}else console.error(`\`${i}\` does not exist in \`theme.colorSchemes\`.`)}if(s){if(c.includes(s)){n.darkColorScheme=s;try{localStorage.setItem(`${l}-dark`,s)}catch(e){}}else console.error(`\`${s}\` does not exist in \`theme.colorSchemes\`.`)}return n}):f(e=>{try{localStorage.setItem(`${l}-light`,r),localStorage.setItem(`${l}-dark`,o)}catch(e){}return{...e,lightColorScheme:r,darkColorScheme:o}})},[c,l,r,o]),v=n.useCallback(e=>{"system"===u.mode&&f(t=>{let r=e?.matches?"dark":"light";return t.systemMode===r?t:{...t,systemMode:r}})},[u.mode]),S=n.useRef(v);return S.current=v,n.useEffect(()=>{if("function"!=typeof window.matchMedia||!d)return;let e=(...e)=>S.current(...e),t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[d]),n.useEffect(()=>{if(a&&d){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(l)&&(!r||c.match(r))&&(e.key.endsWith("light")&&y({light:r}),e.key.endsWith("dark")&&y({dark:r})),e.key===s&&(!r||["light","dark","system"].includes(r))&&g(r||t)};return a.addEventListener("storage",e),()=>{a.removeEventListener("storage",e)}}},[y,g,s,l,c,t,a,d]),{...u,mode:h.current||!d?u.mode:void 0,systemMode:h.current||!d?u.systemMode:void 0,colorScheme:h.current||!d?p:void 0,setMode:g,setColorScheme:y}}({supportedColorSchemes:q,defaultLightColorScheme:K,defaultDarkColorScheme:G,modeStorageKey:h,colorSchemeStorageKey:p,defaultMode:V,storageWindow:v}),Q=B,U=J;Z&&(Q=T.mode,U=T.colorScheme);let X=U||R.defaultColorScheme,ee=R.generateThemeVars?.()||R.vars,et={...R,components:N,colorSchemes:$,cssVarPrefix:O,vars:ee};if("function"==typeof et.generateSpacing&&(et.spacing=et.generateSpacing()),X){let e=$[X];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?et[t]={...et[t],...e[t]}:et[t]=e[t]})}let er=R.colorSchemeSelector;n.useEffect(()=>{if(U&&b&&er&&"media"!==er){let e=er;if("class"===er&&(e=".%s"),"data"===er&&(e="[data-%s]"),er?.startsWith("data-")&&!er.includes("%s")&&(e=`[${er}="%s"]`),e.startsWith("."))b.classList.remove(...q.map(t=>e.substring(1).replace("%s",t))),b.classList.add(e.substring(1).replace("%s",U));else{let t=e.replace("%s",U).match(/\[([^\]]+)\]/);if(t){let[e,r]=t[1].split("=");r||q.forEach(t=>{b.removeAttribute(e.replace(U,t))}),b.setAttribute(e,r?r.replace(/"|'/g,""):"")}else b.setAttribute(e,U)}}},[U,er,b,q]),n.useEffect(()=>{let e;if(g&&j.current&&S){let t=S.createElement("style");t.appendChild(S.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),S.head.appendChild(t),window.getComputedStyle(S.body),e=setTimeout(()=>{S.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[U,g,S]),n.useEffect(()=>(j.current=!0,()=>{j.current=!1}),[]);let en=n.useMemo(()=>({allColorSchemes:q,colorScheme:U,darkColorScheme:z,lightColorScheme:W,mode:Q,setColorScheme:Y,setMode:D,systemMode:F}),[q,U,z,W,Q,Y,D,F]),eo=!0;(L||!1===R.cssVariables||Z&&E?.cssVarPrefix===O)&&(eo=!1);let ei=(0,a.jsxs)(n.Fragment,{children:[eo&&(0,a.jsx)(n.Fragment,{children:(et.generateStyleSheets?.()||[]).map((e,t)=>(0,a.jsx)(x.Z,{styles:e},t))}),(0,a.jsx)(y,{themeId:P?t:void 0,theme:d?d(et):et,children:u})]});return Z?ei:(0,a.jsx)(f.Provider,{value:en,children:ei})},useColorScheme:()=>n.useContext(f)||u,getInitColorSchemeScript:e=>(function(e){let{defaultLightColorScheme:t="light",defaultDarkColorScheme:r="dark",modeStorageKey:n=k,colorSchemeStorageKey:o=C,attribute:i="data-color-scheme",colorSchemeNode:s="document.documentElement",nonce:l}=e||{},c="",d=i;if("class"===i&&(d=".%s"),"data"===i&&(d="[data-%s]"),d.startsWith(".")){let e=d.substring(1);c+=`${s}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${s}.classList.add('${e}'.replace('%s', colorScheme));`}let u=d.match(/\[([^\]]+)\]/);if(u){let[e,t]=u[1].split("=");t||(c+=`${s}.removeAttribute('${e}'.replace('%s', light));
      ${s}.removeAttribute('${e}'.replace('%s', dark));`),c+=`
      ${s}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else c+=`${s}.setAttribute('${d}', colorScheme);`;return(0,a.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?l:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || 'system';
  const dark = localStorage.getItem('${o}-dark') || '${r}';
  const light = localStorage.getItem('${o}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${c}
  }
} catch(e){}})();`}},"mui-color-scheme-init")})({colorSchemeStorageKey:s,defaultLightColorScheme:m,defaultDarkColorScheme:h,modeStorageKey:o,...e})}}({themeId:v.Z,theme:()=>(0,I.Z)({cssVariables:!0}),colorSchemeStorageKey:j.colorSchemeStorageKey,modeStorageKey:j.modeStorageKey,defaultColorScheme:{light:j.defaultLightColorScheme,dark:j.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:(0,L.Z)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,b.Z)({sx:e,theme:this})},t}});function A({theme:e,...t}){if("function"==typeof e)return(0,a.jsx)(S,{theme:e,...t});let r=v.Z in e?e[v.Z]:e;return"colorSchemes"in r?(0,a.jsx)(E,{theme:e,...t}):(0,a.jsx)(S,{theme:e,...t})}},2040:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(6003)},691:function(e,t){"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6167:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},isEqualNode:function(){return i},default:function(){return s}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let i=n[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!r[e]:o.setAttribute(i,r[e])}let{children:i,dangerouslySetInnerHTML:s}=r;return s?o.innerHTML=s.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function s(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),s=Number(n.content),l=[];for(let t=0,r=n.previousElementSibling;t<s;t++,r=(null==r?void 0:r.previousElementSibling)||null){var a;(null==r?void 0:null==(a=r.tagName)?void 0:a.toLowerCase())===e&&l.push(r)}let c=t.map(o).filter(e=>{for(let t=0,r=l.length;t<r;t++){let r=l[t];if(i(r,e))return l.splice(t,1),!1}return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>r.insertBefore(e,n)),n.content=(s-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return p},default:function(){return y}});let n=r(6927),o=r(5909),i=n._(r(8431)),s=o._(r(6006)),l=r(5415),a=r(6167),c=r(1722),d=new Map,u=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],m=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:s="",strategy:l="afterInteractive",onError:c}=e,m=r||t;if(m&&u.has(m))return;if(d.has(t)){u.add(m),d.get(t).then(n,c);return}let h=()=>{o&&o(),u.add(m)},p=document.createElement("script"),g=new Promise((e,t)=>{p.addEventListener("load",function(t){e(),n&&n.call(this,t),h()}),p.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[r,n]of(i?(p.innerHTML=i.__html||"",h()):s?(p.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",h()):t&&(p.src=t,d.set(t,g)),Object.entries(e))){if(void 0===n||f.includes(r))continue;let e=a.DOMAttributeNames[r]||r.toLowerCase();p.setAttribute(e,n)}"worker"===l&&p.setAttribute("type","text/partytown"),p.setAttribute("data-nscript",l),document.body.appendChild(p)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function p(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");u.add(t)})}()}function g(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:a="afterInteractive",onError:d,...f}=e,{updateScripts:h,scripts:p,getIsSsr:g,appDir:y,nonce:v}=(0,s.useContext)(l.HeadManagerContext),S=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||r;S.current||(o&&e&&u.has(e)&&o(),S.current=!0)},[o,t,r]);let b=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!b.current&&("afterInteractive"===a?m(e):"lazyOnload"===a&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),b.current=!0)},[e,a]),("beforeInteractive"===a||"worker"===a)&&(h?(p[a]=(p[a]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:d,...f}]),h(p)):g&&g()?u.add(t||r):g&&!g()&&m(e)),y){if("beforeInteractive"===a)return r?(i.default.preload(r,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),s.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),s.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===a&&r&&i.default.preload(r,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let y=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6003:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a=[],c=!1,d=-1;function u(){c&&n&&(c=!1,n.length?a=n.concat(a):d=-1,a.length&&f())}function f(){if(!c){var e=l(u);c=!0;for(var t=a.length;t;){for(n=a,a=[];++d<t;)n&&n[d].run();d=-1,t=a.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new m(e,t)),1!==a.length||c||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},6008:function(e,t,r){e.exports=r(3027)},6341:function(e,t,r){e.exports=r(1273)}}]);