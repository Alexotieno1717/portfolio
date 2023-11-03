exports.id=716,exports.ids=[716],exports.modules={7961:(e,t,i)=>{"use strict";i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=i(997),o=i(1664),s=i.n(o);let __WEBPACK_DEFAULT_EXPORT__=()=>(0,a.jsxs)("section",{children:[a.jsx("hr",{className:"bg-primary-gray border-primary-gray"}),(0,a.jsxs)("div",{className:"lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-8",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between",children:[(0,a.jsxs)("div",{className:"pb-8 md:pb-0",children:[a.jsx("img",{src:"/logo.svg",alt:"",className:"w-48"}),a.jsx("p",{className:"text-base pt-4",children:"Web designer and Full-Stack developer"}),a.jsx("p",{className:"text-xs pt-2 text-primary-gray",children:"Design Credit ~ Elias from Figma communities"})]}),(0,a.jsxs)("div",{children:[a.jsx("h1",{className:"text-left pb-3",children:"Media"}),(0,a.jsxs)("div",{className:"flex gap-2",children:[a.jsx(s(),{href:"https://github.com/Alexotieno1717",target:"_blank",children:a.jsx("img",{src:"/project/Github.svg",alt:"github"})}),a.jsx(s(),{href:"https://www.linkedin.com/in/alex-otieno-66a049162/",target:"_blank",children:a.jsx("img",{src:"/project/Linkedin.svg",alt:"linkedin"})}),a.jsx(s(),{href:"https://twitter.com/Bug_Killer01",target:"_blank",children:a.jsx("img",{src:"/project/Twitter.svg",alt:"twitter"})})]})]})]}),a.jsx("div",{className:"text-primary-gray text-center pt-12 pb-8",children:a.jsx("p",{children:"\xa9 Copyright 2023"})})]})]})},991:(e,t,i)=>{"use strict";i.d(t,{Z:()=>navigation_Header});var a=i(997);let o=[{id:"Home",label:"Home",url:"/"},{id:"About-me",label:"About Me",url:"/about"},{id:"Works",label:"Works",url:"/project"},{id:"Contacts",label:"Contacts",url:"/contacts"},{id:"Github",label:"Github",target:"_blank",url:"https://github.com/Alexotieno1717"}];var s=i(1664),n=i.n(s),r=i(7518),l=i.n(r);let c=l().nav`
  background: ${e=>!0===e.$collapsed||e.$scrollPosition>10?e?.$colors?.bg:"transparent"};

  }
  `;var d=i(6689);let hooks_useScrollPosition=()=>{let[e,t]=(0,d.useState)(0);return(0,d.useEffect)(()=>{let updatePosition=()=>{t(window.pageYOffset)};return window.addEventListener("scroll",updatePosition),updatePosition(),()=>window.removeEventListener("scroll",updatePosition)},[]),e},g={bg:"#282C33",buttonColor:"#C778DD ",dividerColor:"#C778DD"},navigation_Header=({colors:e=g})=>{let[t,i]=(0,d.useState)(!1),s=hooks_useScrollPosition();return a.jsx(a.Fragment,{children:a.jsx(c,{$collapsed:t,$scrollPosition:s,$colors:e,className:"transition ease-in-out delay-150 fixed w-full z-20 top-0 left-0",children:(0,a.jsxs)("div",{className:"lg:max-w-4xl xl:max-w-[1031px]  flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 py-4",children:[a.jsx(n(),{href:"/",className:"flex items-center",children:a.jsx("img",{src:"/logo.svg",alt:"logo",className:"w-48"})}),a.jsx("div",{className:"flex",children:(0,a.jsxs)("button",{onClick:()=>i(!t),"data-collapse-toggle":"navbar-sticky",type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-sticky","aria-expanded":"false",children:[a.jsx("span",{className:"sr-only",children:"Open main menu"}),a.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]})}),a.jsx("div",{className:`"justify-between w-full ${!1===t&&"hidden"} lg:flex lg:w-auto lg:order-1"`,id:"navbar-sticky",children:a.jsx("ul",{className:"flex flex-col gap-2 lg:gap-0 lg:items-center p-4 lg:p-0 mt-4 font-medium rounded lg:flex-row lg:space-x-6 xl:space-x-8 lg:mt-0 lg:border-0",children:o.map((e,t)=>a.jsx(n(),{href:e.url,target:e.target,className:"transition ease-in-out delay-150  hover:text-primary-purple",children:e.label},t))})})]})})})}},1460:(e,t,i)=>{"use strict";i.d(t,{Of:()=>n,wM:()=>o,yY:()=>a,zF:()=>s});let a={landingHero:{id:1,title:"Alex is a",keyword:"Web Designer",Keyword1:"Full Software Developer",description:"He crafts responsive websites where technologies meet creativity",buttonLable:"Contact Me",buttonLink:"/contacts",img:"/assets/Home_art 1.svg"},Projects:{title:"Projects",items:[{id:1,img:"/project/olive.png",languages:"TypeScript Turbo Next.Js Tailwind",title:"Olive Tree Media",description:"Olive Tree Media is a licensed SMS & Bulk Messaging Solutions and Content Services Provider.",buttonLable:"Live",buttonLink:"https://olivetreehub.com/"},{id:2,img:"/project/elewa.png",languages:"TypeScript Monorepos Nx Angular",title:"Elewa Education",description:"Elewa website redesign uses Angular Universal to render while integrating webflow CMS blog posts",buttonLable:"Live",buttonLink:"https://elewa.education/home"},{id:3,img:"/project/pharma.png",languages:"React.JS SCSS",title:"Pharmacorp",description:"Website that connect sale-reps to pharmaceutical agencies. and also connect doctors to patients",buttonLable:"Live",buttonLink:"https://pharmacorp001.vercel.app/dashboard"}]},aboutMe:{title:"About-me",descrption:"I am a Web Developer and Web Designer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.",buttonLable:"Read More",buttonLink:"/about",img:"/assets/Home_art 1.svg"},skills:{title:"Skills",skill:[{title:"Language",languages:"TypeScript JavaScript Python PHP"},{title:"Frameworks",languages:"React Django Laravel React Native"},{title:"Database",languages:"MySQL SQLite PostgreSQL"},{title:"Tools",languages:"VSCode vim Linux Figma Git Vercel"},{title:"Others",languages:"HTML CSS REST SCSS Bootstrap Tailwind"}]},contacts:{title:"contacts",description:"Crafting digital dreams into reality. Web wizard at your service—building stunning, impactful sites. Let's chat and create web magic! ✨",contacts:{title:"Contact me here",contact:[{id:"email",img:"/project/Email.svg",description:"alexotieno900@gmail.com"},{id:"landmark",img:"/project/Landmark.svg",description:"Nairobi, Kenya"},{id:"linkedin",img:"/project/Linkedin.svg",description:"@alex-otieno-66a049162"},{id:"phone",img:"/project/phone.svg",description:"+254 748815593"}]}}},o={header:"Projects",descrption:"List of my Projects",Projects:{title:"",items:[{id:1,img:"/project/olive.png",languages:"TypeScript Turbo Next.Js Tailwind",title:"Olive Tree Media",description:"Olive Tree Media is a licensed SMS & Bulk Messaging Solutions and Content Services Provider.",buttonLable:"Live",buttonLink:"https://olivetreehub.com/"},{id:2,img:"/project/elewa.png",languages:"TypeScript Monorepos Nx Angular",title:"Elewa Education",description:"Elewa website redesign uses Angular Universal to render while integrating webflow CMS blog posts",buttonLable:"Live",buttonLink:"https://elewa.education/home"},{id:3,img:"/project/pharma.png",languages:"React.JS SCSS",title:"Pharmacorp",description:"Website that connect sale-reps to pharmaceutical agencies. and also connect doctors to patients",buttonLable:"Live",buttonLink:"https://pharmacorp001.vercel.app/dashboard"}]},smallProject:{title:"small-projects",items:[{id:1,language:"PHP Laravel Tailwind",title:"Tweety Website",description:"Tweety is an application where user can create account post and react on tweets.",buttonLable:"Github",buttonLink:"https://github.com/Laracast-Project/tweety"},{id:2,language:"Python Django Bootstrap",title:"Neighbourhood",description:"Allows user to join a hood owned by admin, and can see posts in only that hood.",buttonLable:"Github",buttonLink:"https://github.com/Moringa-School-Access/Neighbourhood"},{id:3,language:"Figma",title:"Rep Connect",description:"Website that connect sale-reps to pharmaceutical agencies. and also connect doctors to patients.",buttonLable:"Figma",buttonLink:"https://shorturl.at/bhrzQ"},{id:4,language:"TypeScript Firebase Angular",title:"Elewa",description:"An open-source chatbot editor and manager which allows to host and use conversational learning projects.",buttonLable:"Github",buttonLink:"https://github.com/Alexotieno1717/elewa"},{id:4,language:"Figma",title:"mSwali Trivia",description:"mSwali are on a mission to promote the desire & curiosity to know more within the African adult population.",buttonLable:"Figma",buttonLink:"https://shorturl.at/aGHLX"}]}},s={title:"About-me",description:"I am a Web Developer and Web Designer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.",img:"/assets/Home_art 1.svg",skills:{title:"Skills",skill:[{title:"Language",languages:"TypeScript JavaScript Python PHP"},{title:"Frameworks",languages:"React Django Laravel React Native"},{title:"Database",languages:"MySQL SQLite PostgreSQL"},{title:"Tools",languages:"VSCode vim Linux Figma Git Vercel"},{title:"Others",languages:"HTML CSS REST SCSS Bootstrap Tailwind"}]}},n={title:"Contact",subTitle:"Who am i?",description1:"Hey there! If you're on the lookout for a web development wizard, your search ends here. I'm all about turning your digital dreams into reality. Whether you need a mind-blowing web app, want to spice up your online presence, or dive into the latest tech trends, count me in!",description2:"I thrive on collaboration, and your feedback is my secret sauce for creating stellar solutions. Imagine not just a website but a digital masterpiece that wows users. If you're ready for a tech journey filled with creativity and impact, let's chat! Your ideas, my skills—let's make some web magic together! \uD83D\uDE80",contacts:{title:"Contact me here",contact:[{id:"email",img:"/project/Email.svg",description:"alexotieno900@gmail.com"},{id:"landmark",img:"/project/Landmark.svg",description:"Nairobi, Kenya"},{id:"linkedin",img:"/project/Linkedin.svg",description:"@alex-otieno-66a049162"},{id:"phone",img:"/project/phone.svg",description:"+254 748815593"}]}}},4807:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>App});var a=i(997);function App({Component:e,pageProps:t}){return a.jsx(e,{...t})}i(108)},108:()=>{}};