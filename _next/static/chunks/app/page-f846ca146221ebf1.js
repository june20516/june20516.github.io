(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6914:function(e,t,a){Promise.resolve().then(a.bind(a,3691))},3691:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(9268),s=a(6006),r=a(6394),c=a.n(r);let i=e=>"".concat(e.getFullYear(),"-").concat((e.getMonth()+1).toString().padStart(2,"0"),"-").concat(e.getDate().toString().padStart(2,"0")),l=e=>e.reduce((e,t)=>t instanceof Array?e.concat(l(t)):e.concat(t),[]);var o=a(2561);let d=(0,o.Ue)()(e=>({APOD:{copyright:"",date:i(new Date),explanation:'image of "Astronomic Picture Of the Day"',media_type:"image",title:"loading..",url:"assets/images/placeholder-768x576.png",service_version:""},fetchedDate:new Date,fetched:!1,setAPOD:t=>e(()=>({APOD:t,fetchedDate:new Date,fetched:!0}))}));var h=e=>{let{size:t,depth:a,children:r}=e,[c,i]=(0,s.useState)(0),l=()=>Math.floor(10*Math.random());return(0,s.useEffect)(()=>{i(l());let e=!1,t=setInterval(()=>{i(c+l()),e=!e},3e3);return()=>clearInterval(t)},[]),(0,n.jsx)("div",{style:{width:t},className:"animate-[spin 10s linear infinite] transition-transform duration-[5s] ".concat(0===a?"":(e=>{let t=()=>e*l()%5;return"".concat(t()>4.5?"":"-","translate-x-[").concat(t(),"px] ").concat(t()>4.5?"":"-","translate-y-[").concat(t(),"px]")})(c)),children:(0,n.jsx)("div",{style:{background:["#6366f1","#a855f7","#ec4899"][a]},className:"aspect-square transition-[border-radius] ".concat((e=>{let t=()=>Math.max(e*l()%10,5);return"rounded-tl-[".concat(t(),"0%] rounded-tr-[").concat(t(),"0%] rounded-bl-[").concat(t(),"0%] rounded-br-[").concat(t(),"0%]")})(c)," ease-linear duration-[3000ms] flex justify-center items-center"),children:r})})},u=()=>(0,n.jsx)(h,{size:120,depth:0,children:(0,n.jsx)(h,{size:84,depth:1,children:(0,n.jsx)(h,{size:36,depth:2})})}),p=()=>{let e=(0,s.useMemo)(()=>new Date,[]),t=(0,s.useMemo)(()=>({copyright:"",date:i(e),explanation:'image of "Astronomic Picture Of the Day"',media_type:"image",title:"loading..",url:"assets/images/placeholder-768x576.png",service_version:""}),[e]),{APOD:a,setAPOD:r,fetchedDate:l,fetched:o}=d(),[h,p]=(0,s.useState)(!1),m=(0,s.useCallback)(e=>{let t=new URL("https://api.nasa.gov/planetary/apod"),a=t.searchParams;return a.append("date",i(e)),a.append("api_key","dBC0DbFqNX7bRDz8NZiz7DAhMpgNhLlddt1kS0qj"),a.append("thumbs","true"),t},[]),f=(0,s.useCallback)(async e=>fetch(m(e)).then(async e=>{let a=await e.json();if(console.log("im fetching now..."),!a.code)return a;if(!(a.code>=400)||!(a.code<500))return t;throw a}).catch(e=>{throw e}),[t,m]),g=(0,s.useCallback)(async e=>{f(e).then(e=>r(e)).catch(t=>{[404,400].includes(t.code)&&g(new Date(e.setDate(e.getDate()-1)))})},[f]);return(0,s.useEffect)(()=>{o&&l.getDate()===e.getDate()||g(e)},[]),(0,n.jsxs)("div",{className:"w-full flex flex-col items-center justify-center overflow-y-hidden space-y-5",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold",children:(0,n.jsxs)("a",{target:"_blank",className:"hover:text-primary-800",href:"https://apod.nasa.gov/apod/astropix.html",children:["\uD83D\uDD2D 오늘의 우주 (",a.title,") \uD83C\uDF0C"]})}),!o&&(0,n.jsx)(u,{}),o&&"video"===a.media_type&&(0,n.jsxs)("a",{href:a.url,target:"_blank",className:"relative",children:[(0,n.jsx)(c(),{src:"assets/icons/play.svg",width:100,height:100,className:"absolute top-[50%] left-[50%] mt-[-50px] ml-[-50px] rounded-[3rem] bg-primary-50 bg-opacity-30 opacity-50",alt:"go to play"}),(0,n.jsx)(c(),{width:0,height:0,src:a.thumbnail_url,alt:a.title,loading:"lazy",style:{width:"768px",height:"auto"}})]}),o&&"video"!==a.media_type&&(0,n.jsx)("a",{href:a.hdurl,target:"_blank",children:(0,n.jsx)(c(),{width:0,height:0,src:a.url,alt:a.title,loading:"lazy",style:{width:"768px",height:"auto"}})}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("button",{onClick:()=>p(!h),children:(0,n.jsxs)("p",{className:"text-lg underline text-gray-500",children:["설명 ",h?"접기":"보기"," \uD83D\uDCAC"]})}),(0,n.jsx)("p",{className:"mt-5 ".concat(h?"":"hidden"),children:a.explanation})]})]})}}},function(e){e.O(0,[958,667,488,744],function(){return e(e.s=6914)}),_N_E=e.O()}]);