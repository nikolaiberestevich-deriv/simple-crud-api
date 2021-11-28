(()=>{var e={91:(e,n,t)=>{const i=t(229),{getPostData:a}=t(288),s=t(666);e.exports={getPersons:async function(e,n){try{const e=await i.findAll();n.writeHead(200,{"Content-Type":"application/json"}),n.end(JSON.stringify(e))}catch{n.writeHead(500,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"500 error - server error"}))}},getPersonById:async function(e,n,t){try{const e=await i.findById(t);s(t)?e?(n.writeHead(200,{"Content-Type":"application/json"}),n.end(JSON.stringify(e))):(n.writeHead(404,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"person is not found!!"}))):(n.writeHead(400,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"id is not valid!!"})))}catch{n.writeHead(500,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"500 error - server error"}))}},createPerson:async function(e,n){try{const t=await a(e),{name:s,age:o,hobbies:r}=JSON.parse(t),d={name:s,age:o,hobbies:r};if(!s||!o||!Array.isArray(r))return n.writeHead(400,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:" server can't find name/age/ hobbies, or hobbies is not an array"}));const c=await i.create(d);return n.writeHead(201,{"Content-Type":"application/json"}),n.end(JSON.stringify(c))}catch(e){n.writeHead(500,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"500 error - server error"}))}},updatePerson:async function(e,n,t){try{if(s(t)){const s=await i.findById(t);if(s){const o=await a(e),{name:r,age:d,hobbies:c}=JSON.parse(o),p={name:r||s.name,age:d||s.age,hobbies:c||s.hobbies},g=await i.update(t,p);return n.writeHead(201,{"Content-Type":"application/json"}),n.end(JSON.stringify(g))}n.writeHead(404,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"person Not Found"}))}else n.writeHead(400,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"id is not valid!!"}))}catch(e){n.writeHead(500,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"500 error - server error"}))}},deletePerson:async function(e,n,t){try{if(s(t)){if(await i.findById(t))return await i.remove(t),n.writeHead(204,{"Content-Type":"application/json"}),n.end(JSON.stringify({}));n.writeHead(404,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"Can't delete: Person Not Found"}))}else n.writeHead(400,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"id is not valid!!"}))}catch(e){n.writeHead(500,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"500 error - server error"}))}}}},229:(e,n,t)=>{const{v4:i}=t(828);let a=t(668);const{writeDataToFile:s}=t(288);e.exports={findAll:function(){return new Promise(((e,n)=>{e(a)}))},findById:function(e){return new Promise(((n,t)=>{n(a.find((n=>n.id===e)))}))},create:function(e){return new Promise(((n,t)=>{const o={id:i(),...e};a.push(o),s("./data/persons.json",a),n(o)}))},update:function(e,n){return new Promise(((t,i)=>{const o=a.findIndex((n=>n.id===e));a[o]={id:e,...n},s("./data/persons.json",a),t(a[o])}))},remove:function(e){return new Promise(((n,t)=>{a=a.filter((n=>n.id!==e)),s("./data/persons.json",a),n()}))}}},288:(e,n,t)=>{const i=t(147);e.exports={writeDataToFile:function(e,n){i.writeFileSync(e,JSON.stringify(n),"utf8",(e=>{e&&console.log(e)}))},getPostData:function(e){return new Promise(((n,t)=>{try{let t="";e.on("data",(e=>{t+=(new TextDecoder).decode(e)})),e.on("end",(()=>{n(t)}))}catch(e){t(err)}}))}}},142:e=>{"use strict";e.exports=require("dotenv")},828:e=>{"use strict";e.exports=require("uuid")},666:e=>{"use strict";e.exports=require("uuid-validate")},491:e=>{"use strict";e.exports=require("assert")},147:e=>{"use strict";e.exports=require("fs")},685:e=>{"use strict";e.exports=require("http")},668:e=>{"use strict";e.exports=JSON.parse('[{"id":"3858d6ee-e8bd-4e9c-ac91-daff484fa520","name":"Vasia","age":"13","hobbies":["killing noobs at a startArea ","swimming"]},{"id":"5ed60b18-75a1-4568-b7a0-dd130ee11375","name":"Kolia","age":"33","hobbies":["Rock","cooking"]},{"id":"447a996a-3555-4b5b-b0e4-cfdd43d271ec","name":"Vasia","age":126,"hobbies":["PSgames","Alchogol"]},{"id":"389e53bd-2718-4a25-93bf-89a2f7396724","name":"Vasia","age":126,"hobbies":["PSgames","Alchogol"]},{"id":"f475a664-3dd9-4c30-8a79-c9fb25d6458f","name":"Vasia","age":126,"hobbies":["PSgames","girls","Alchogol"]},{"id":"d91b75a8-7f62-4c25-9f07-5d560bdc501f","name":"Vasia","age":126,"hobbies":["PSgames","Alchogol"]},{"id":"70b6f1e8-2333-4454-a059-7895c6bd6255","name":"Vasia","age":126,"hobbies":["PSgames","girls","Alchogol"]},{"id":"f1bede52-7992-448d-b55e-af5aa754818c","name":"Vasia","age":126,"hobbies":["PSgames","Alchogol"]},{"id":"8578fbbe-f375-40b7-8681-6011af5ad42b","name":"Vasia","age":126,"hobbies":["PSgames","girls","Alchogol"]},{"id":"066e3d89-fe7c-4c18-b907-1eb3d2d91b25","name":"Vasia","age":126,"hobbies":["PSgames","Alchogol"]},{"id":"879b1f30-0d58-4c7c-9bdf-c6802645f295","name":"Vasia","age":126,"hobbies":["PSgames","girls","Alchogol"]}]')}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var s=n[i]={exports:{}};return e[i](s,s.exports,t),s.exports}(()=>{const{match:e}=t(491),n=t(685),{getPersons:i,getPersonById:a,createPerson:s,updatePerson:o,deletePerson:r}=t(91);t(142).config();const d=process.env.PORT||5e3;n.createServer(((e,n)=>{if("/person"===e.url&&"GET"===e.method)i(e,n);else if(e.url.match(/\/person\/([\W\S_]+)/)&&"GET"===e.method){const t=e.url.split("/")[2].toString();a(e,n,t)}else if("/person"===e.url&&"POST"===e.method)s(e,n);else if(e.url.match(/\/person\/([\W\S_]+)/)&&"PUT"===e.method){const t=e.url.split("/")[2].toString();o(e,n,t)}else if(e.url.match(/\/person\/([\W\S_]+)/)&&"DELETE"===e.method){const t=e.url.split("/")[2].toString();r(e,n,t)}else n.writeHead(404,{"Content-Type":"application/json"}),n.end(JSON.stringify({message:"route is not found"}))})).listen(d,(()=>console.log(`Server running at port ${d}`)))})()})();