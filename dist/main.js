(()=>{"use strict";const e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let t;const n=new Uint8Array(16);function o(){if(!t&&(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!t))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(n)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));const d=function(t,n,d){if(e.randomUUID&&!n&&!t)return e.randomUUID();const r=(t=t||{}).random||(t.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){d=d||0;for(let e=0;e<16;++e)n[d+e]=r[e];return n}return function(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}(r)};class r{constructor(e){this.name=e,this.tasks=[],this.id=d()}addTask=e=>{this.tasks.includes(e)||this.tasks.push(e)};deleteTask=e=>{this.tasks=this.tasks.filter((e=>{}))}}const c=(()=>{let e=[];const t=e=>{const[t]=c.projects.filter((e=>{e.name}));return t};return{projects:e,clearAllProjects:()=>{e=[]},addProject:e=>{c.projects.some((t=>{t.name.toLowerCase(),e.name.toLowerCase()}))?alert("Duplicate project name, please enter a unique project name"):c.projects.push(e)},deleteProject:e=>{c.projects=c.projects.filter((t=>proj!==e))},getProjectByName:t,addInbox:()=>{t()||c.projects.push(new r("Inbox"))},getInboxProject:()=>{const[e]=c.projects.filter((e=>{e.name}));return e},getTaskById:(e,t)=>{const[n]=t.tasks.filter((e=>{e.id}));return n}}})(),a=c;(()=>{const e=document.getElementById("nav-projects-content"),t=document.getElementById("new-project-button"),n=document.getElementById("pop-up-form"),o=document.getElementById("project-title"),s=document.getElementById("pop-up-add-project"),d=document.getElementById("main-tasks-header"),c=document.getElementById("main-tasks-content-none"),l=document.querySelector("#main-tasks-content-form"),i=(document.getElementById("new-task-button"),document.getElementById("form-id"),document.getElementById("task-title")),m=(document.getElementById("project-name"),document.getElementById("datetime-btn")),u=(document.getElementById("main-tasks-content"),document.getElementById("form-x")),p=document.getElementById("form-x2");t.addEventListener("click",(()=>{s.style.display="flex"})),p.addEventListener("click",(()=>{o.value="",s.style.display="none"})),n.addEventListener("submit",(()=>{const t=o.value,n=new r(t);a.addProject(n),function(t){const n=document.createElement("div");n.classList.add("project-item"),n.textContent=t.name,function(e,t){t.addEventListener("click",(()=>{d.textContent=e.name,c.textContent="";const t=document.createTextNode("Click on the plus sign to add more tasks!"),n=document.createElement("i");n.classList.add("fas","fa-plus"),n.style.cursor="pointer",function(e){e.addEventListener("click",(()=>{l.style.display="flex"}))}(n),c.appendChild(n),c.appendChild(t)}))}(t,n),e.appendChild(n)}(n),s.style.display="none",o.value=""})),u.addEventListener("click",(e=>{e.preventDefault(),console.log("we in here"),i.value="",m.value="",console.log(" reseting"),l.style.display="none",console.log("switched display")}))})()})();