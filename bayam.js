isLog=1;
var log=function(){};
if (isLog) log=console.log.bind(window.console)
var b={};
var bayam=function(x='sismadi'){
data=[
{id:1,nama:"satu",isi:25,icon:"bayam",url:"mod.js?mod/load"},
{id:2,nama:"dua",isi:75,icon:"person",url:"mod.js?mod/load"}],

b[x]={
load:{
versi:'1.0',
api:'database.php',
data:[],
isDebug:1,
isLang:0,
isDb:1,
isDbs:1,
isStr:1,
ce:function(id) { return document.createElement(id);},
gebi:function(id) { return document.getElementById(id);},
gebc:function(id) { return document.getElementsByClassName(id);},
gebn:function(id) { return document.getElementsByName(id);},
close:function(id){ var z=this.gebi(id); z.className=z.className.replace('show', 'hide');},
open:function(id) { var z=this.gebi(id); z.className=z.className.replace('hide', 'show');},
cetak:function(id) {
 var header_str = '<html><head><title>' + document.title  + '</title></head><body>';
 var footer_str = '</body></html>';
 var new_str = this.gebi(id).innerHTML;
 var old_str = document.body.innerHTML;
 document.body.innerHTML = header_str + new_str + footer_str;
 window.print();
 document.body.innerHTML = old_str;
 return false;
},

info:function(msg){
this.gebi('bawah').innerHTML=msg;
setTimeout(function(){ this.close('bawah'); }, 3000);
},
modal:function(id) {
out=`<div class="modal">
<button class="right" onclick="b.${x}.load.close('modal')">X</button>
<h2>${x}</h2><div class="row">${id}</div></div>`;
this.gebi('modal').innerHTML=out;
this.open('modal')
},

color:function(step){
var pColor = getComputedStyle(document.body);
ph=pColor.getPropertyValue('--pColor-h');
ps=pColor.getPropertyValue('--pColor-s');
pl=pColor.getPropertyValue('--pColor-l');
arrColor = [];
var pl=parseInt(pl);
var pl=parseInt(pl+15);
per=parseInt(30 / step);
for(var i = 0; i < step; i++){ hsl=`hsl(${ph},${ps},${pl}%)`;
pl=pl-per;
arrColor.push(hsl);
}
return arrColor;
},
getURL:function(x){
var url=new URL(window.location.href);
return url.searchParams.get(x);
},

model:function(data,callback){
// file=this.api;
apiKey='bismillah';
// file=b[x].load.api;
file=setting.load.api;
var req=new XMLHttpRequest();
req.open("POST", file, true);
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req.setRequestHeader('Authorization', `Bearer ${apiKey}`);

req.onreadystatechange=function() {
if(req.readyState==4 && req.status==200) { callback(req.responseText);
}}

req.responseType="text";
req.onprogress=function(e) { if (e.lengthComputable) {
} };
req.onloadstart=function(e) {};
req.onloadend=function(e) {};
req.send(JSON.stringify(data));
},


script:function(file, callback) {
var count=file.length;
function urlCallback(url) {
return function () { --count; if (count < 1) { callback(); }
};
}

for (var url of file) {
var s=b[x].load.ce('script');
s.setAttribute('src', url);
s.onload=urlCallback(url);
document.head.appendChild(s);
}
},

controller:function(sc){
log(sc)
var p=sc.split('?'),
m=p[1].split('/'),
m0=m[0],
m1=m[1],
c=''+p[0];
log(sc)
log(m)

this.script([c], function() {
if(m[2]){ m2=m[2];
b[m0].app.js[m2]();
log(m0)
log(m2)
}
else{
log(m0)
log(m1)
b[m0].app.js[m1]();
}
});
},

}, // end load

button:{
json:{id:'button',item:0,akses:'c,r,u,d',mode:'edit',
data:[
{nama:"Create",url:"alert('Create')"},
{nama:"Update",url:"alert('Update')"},
{nama:"Delete",url:"alert('Delete')"},
],
},
html:function(){
var {id,data,item,akses}=b[x].button.json;
// log(akses)
if(setting.load.isDb){
data=b[x].button.js.akses();
}

out=`<div class="btns">`;
for (key in data) {node=data[key];
out+=`<button id="${x}-${id}-${node.nama}" onclick="${node.url}">${node.nama}</button>`;
}
out+=`</div>`;
return out;
},
js:{

akses:function(){
var {id,data,akses,mode,item}=b[x].button.json;

btn=[];
if(akses.includes('c')){ btn.splice(0, 0, {nama:"Create",url:"tambah('"+x+"')",class:"add"   });}
if(mode==='edit'){
if(akses.includes('u')){ btn.splice(1, 0, {nama:"Update",url:  "ubah('"+x+"')",class:"edit"  });}
if(akses.includes('d')){ btn.splice(2, 0, {nama:"Delete",url: "hapus('"+x+"')",class:"delete"});}
}

tambah=function(x){b[x].button.js.create(item)};
ubah=function(x){b[x].button.js.update(item);};
hapus=function(x){b[x].button.js.delete(item);};

// b[x].button.json.data=btn;
return btn;
log(btn)
},

view:function(){
var {id,data,akses,mode}=b[x].button.json;
b[x].load.gebi(id).innerHTML=b[x].button.html();
},


add:function(id){ log('button.add');
out='<i class="noprint btn-float  bi-plus " onclick="add()"></i>';
b[x].load.gebi(x+'-float').innerHTML=out;
},

model:function(param){
log(param)
b[x].load.model(param,callback);
function callback(json){ res = JSON.parse(json);
log(res)
b[x].app.js.view();
b[x].load.close('modal');
}

},

create:function(i=0){ log(i);
frm=b[x].form.js.el(x+'-form');
// log(setting.load.isDb)
if(setting.load.isDb){
delete frm['id'];
path=b[x].datatable.json.param.path;
param={path:path,mod:'create', data:frm};
this.model(param);
}
else{
  b[x].table.json.data.push(frm);
  b[x].table.js();
  // b[x].datatable.json.data.push(frm);
  // b[x].datatable.js.view();
}
b[x].load.close('modal');

}, // end create

read:function(i=0){ log(i);
b[x].button.json.item=i;
b[x].input.json.item=i;
b[x].form.js.view(i);
// frm=b[x].form.js.view(i);
// b[x].load.modal(frm);
},

update:function(i=0){ log(i);
frm=b[x].form.js.el(x+'-form');
if(setting.load.isDb){
id=frm['id'];
path=b[x].datatable.json.param.path;
param={path:path,mod:"update",id:id, data:frm};
this.model(param);
}
else{
  b[x].table.json.data.splice(i, 1, frm);
  b[x].table.js();
  // b[x].datatable.json.data.splice(i, 1, frm);
  // b[x].datatable.js.model();
}
b[x].load.close('modal');
},

delete:function(i=0){ log(i);
frm=b[x].form.js.el(x+'-form');
if(setting.load.isDb){
id=frm['id'];
path=b[x].datatable.json.param.path;
param={path:path,mod:"delete",id:id};
this.model(param);
}
else{
  b[x].table.json.data.splice(i,1);
  b[x].table.js();
}
b[x].load.close('modal');
},

deletes:function(x){
var {data}=b[x].datatable.json;
var c=b[x].load.gebn('chk'+x);
var data1=[];
for (var i=0;i<c.length;i++) c[i].checked? data1[data1.length]=c[i].value:null;

log(data1);
var nid=[];


for (var i=data1.length -1; i >=0; i--) {
nid[i]=data[data1[i]].id;
data.splice(data1[i],1);
}

ids=nid.join(",");
log(ids)
b[x].datatable.json.data=data;
b[x].datatable.js.view();


if(bayam.isDb==1){
data={path:'model.php',mod:"delete",id:ids,};
b[x].load.model(this.api.host,data,callback);
function callback(json){ res = JSON.parse(json);
b[x].datatable.model();
b[x].load.close('modal');
}
}

},

},
}, // end button

datatable:{
json:{id:'datatable',page:1,rpp:1,fld:['id','nama','isi','icon','url'],
data:data,param:{path:'model.php',mod:'table'},
},

html:function(){
var {id,data}=b[x].datatable.json;

b[x].search.json=b[x].datatable.json;
b[x].search.json.id=x+'-search';
// b[x].search.html();

b[x].table.json=b[x].datatable.json;
b[x].table.json.id=x+'-table';
// b[x].table.html();

b[x].paging.json=b[x].datatable.json;
b[x].paging.json.id=x+'-paging';
// b[x].paging.html();

b[x].input.json.data=b[x].datatable.json.data;
b[x].upload.json.param=b[x].datatable.json.param;

b[x].paging.js.callback=function(res){
b[x].datatable.json.id=x+'-datatable';
b[x].datatable.json.page=res;
b[x].datatable.js.view();
};

b[x].search.js.callback=function(res){
// b[x].datatable.json.id="datatable";

log(res)
log(id)

b[x].table.json.data=res;
b[x].table.json.id=id+'-table';
b[x].table.js();

// b[x].datatable.json.data=res;
// b[x].datatable.js.view();

};


out=`
<div class="row">
<div id="${x}-search">${b[x].search.html()}</div>
<div id="${x}-table"> ${b[x].table.html()}</div>
<div id="${x}-paging">${b[x].paging.html()}</div>
<div id="${x}-float">a</div>
</div>
`;

return out;
},
js:{
model:function(){
param=b[x].datatable.json.param;
b[x].load.model(param,callback);
function callback(json){ res = JSON.parse(json);
log(res)
b[x].datatable.json.fld=res.fld;
b[x].datatable.json.data=res.data;
b[x].input.json.data=res.data;
b[x].datatable.js.view();
}

},
view:function(){
var {id,data}=b[x].datatable.json;
log(id)
b[x].load.gebi(id).innerHTML=b[x].datatable.html();

// b[x].search.json.id=`${id}-search`;
// b[x].table.json.id=`${id}-table`;
// b[x].paging.json.id=`${id}-paging`;


// b[x].paging.js.callback=function(res){
//   log(res);
//   b[x].datatable.js.view(res);
// };


// b[x].load.gebi(id).innerHTML=b[x].datatable.html();

// b[x].search.js.callback=function(res){
// b[x].datatable.json.page=1;
// b[x].table.json.data=res;
// b[x].table.json.id=x+'-table';
// b[x].table.js();
// };
//
// b[x].search.json=b[x].datatable.json;
// b[x].search.json.id=x+'-search';
// b[x].search.js.view();
//
// b[x].table.json=b[x].datatable.json;
// b[x].table.json.id=x+'-table';
// b[x].table.js.view();
//
// b[x].paging.json=b[x].datatable.json;
// b[x].paging.json.id=x+'-paging';
// b[x].paging.js.view();
//

// b[x].paging.js.callback=function(res){
// b[x].datatable.json.page=b[x].paging.json.page;
// b[x].datatable.js.view();
// };

// b[x].paging.json=b[x].datatable.json;
// b[x].paging.json.id=id+'-paging';


//
},
},
}, // end datatable

form:{
json:{id:'form',data:data,},
html:function(){
var {data}=b[x].form.json;
b[x].input.json.id=`${x}-form`;
b[x].button.json.id=`${x}-form`;
out=`<form id="${x}-form" class="row">${b[x].input.html()}</form>
<div id="${x}-formbutton" class="row" >${b[x].button.html()}</div>`;
return out;
},
js:{
el:function(id){
frm=b[x].load.gebi(id);
obj={};
for ( var i=0; i < frm.elements.length; i++ ) { e=frm.elements[i];
obj[e['name']]=e['value'];
}
return obj;
}, // end el

view:function(){
var {id}=b[x].form.json;

// log(out)
// b[x].load.gebi('content').innerHTML=b[x].form.html();

out=b[x].form.html();
b[x].load.modal(out);
// log(out)

// b[x].load.modal(out);
//
// b[x].input.id=`${x}-form`;
// b[x].input.data=data[i];
// b[x].input.view();
//
// b[x].button.id=`${x}-formbutton`;
// b[x].button.view('edit');
// this.callback();

},

},
}, // end form

input:{
json:{id:'input',item:0,data:data,
input:[
{id:"status",nama:"option",arr:['0','1']},
{id:"nama",nama:"textarea"},
{id:"icon",nama:"file"},
{id:"url",nama:"datalist",arr:['satu','dua']},
// {id:"isi",nama:"date",min:"2020-01-01",max:"202701-01"},
// {id:"icon",nama:"checkbox"},
]},

html:function(){
var {id,data,input,item}=b[x].input.json;
// data=data[item];
log(data)
induk=id;

function tipe(induk,id, val) {
const nod = input.find(items => items.id === id);
if (nod && nod.nama === "textarea") {
return `<textarea aria-label="${x}-${id}" id="${x}-${induk}-${id}">${val}</textarea>`;}

else if (nod && nod.nama === "datalist") {
let out = `<input type="text" aria-label="${x}-${id}" name="${id}" id="${x}-${induk}-${id}" value="${val}" list="l-${id}">
<datalist id=l-${id}>`;
log(nod.arr)
for (let i in nod.arr) {
out +=`<option value="${nod.arr[i]}">`; }
out +=`</datalist>`;
return out;
}

else if (nod && nod.nama === "checkbox") {
var vc=val.split(',');
let out = `<input type="text" name="${id}" aria-label="${x}-${id}" id="${x}-${induk}-${id}" value="${val}" >`;
for (let i in vc) {
out +=`
<input type="checkbox" id="chk${id+i}" name="chk[]" value="${vc[i]}" onclick=getVal("${id}")  >
<label for="chk${id+i}">${vc[i]}</label>
`;
}
out +=`</datalist>`;
return out;
}

else if (nod && nod.nama === "date") {
return `<input type="date" aria-label="${x}-${id}" id="${x}-${induk}-${id}" name="${id}" value="${val}" min="${nod.min}" max="${nod.max}">`;
}

else if (nod && nod.nama === "file") {
return `<input aria-label="${x}-${id}" type="file" value="${val}" name="${id}" "
onchange="b.${x}.input.js.my(this,'${id}');">
<img id="img-${induk}-${id}" src="" alt="img-${x}" width="100" height="100"/>



<input type="text"aria-label="${x}-${id}"  id="${induk}-${id}" name="${id}" value="${val}">
<div id="file${id}"></div>`;
}

else if (nod && nod.nama === "option") {
let out = `<select aria-label="${id}" id="${x}-${induk}-${id}" name="${id}" >`;
for (let i in nod.arr) {
out += `<option value="${nod.arr[i]}">${nod.arr[i]}</option>`;
}
out += `</select>`;
return out;
} else {
return `<input type="text" aria-label="${x}-${id}" id="${x}-${induk}-${id}" name="${id}" value="${val}">`;
}
};

out=``;
// for (i in data) { node=data[i]
node=data[item]
out+=`<div class="row" >`;

for (key in node) {
out+=`<div class="col-1-2" >
<div id="f-${key}" style="margin:5px">
<label for="${key}" id="la-${key}">${key}</label>
<div id="el-${key}" >
${tipe(induk,key,node[key])}
</div>
</div>
</div>`;
}

out+=`</div>`;
// }
return out;
},
js:{
view:function(){
var {id}=b[x].input.json;
b[x].load.gebi(id).innerHTML=b[x].input.html();
},
my:function(input,i){
var {id}=b[x].input.json;
let file = input.files[0];
const da = new FileReader();
da.addEventListener("load", function(evt) {


document.querySelector("#img-"+id+"-"+i).src=evt.target.result;
document.querySelector("#"+id+"-"+i).value=evt.target.result;

// document.querySelector("#txt").href         = evt.target.result;
// <a id="txt" download="PDF Title" href="pdfData">Download PDF document</a>

});

da.readAsDataURL(input.files[0]);
log(da)
},},



}, // end input

menu:{
id:'menu',
use:'b[x].menu.view()',
data:[
{nama:"Dashboard",isi:"1",icon:"house",url:"mod.app.dashboard()"},
{nama:"Task",isi:'2',icon:"plus",url:"mod.app.task()"},
{nama:"Profile",isi:'3',icon:"person",url:"mod.app.profile()"},],//menu
view:function(){
var {id,data}=this;
out=`<div class="sidebarx">`;
for(key in data){
out+=`<a href="#" onClick="b.${x}.load.controller('${data[key].url}')"> ${b[x].svg.js.icon(data[key].icon)}  ${data[key].nama}</a>`;
}
// bayam.loadController(bayam.afterlogin);

out+=`</div>`;
b[x].load.gebi(id).innerHTML=out;
},
}, // end menu

paging:{
json:{id:'paging',page:1,rpp:1,data:data},
html:function(){
var {id,data,page,rpp}=b[x].paging.json;

al=data.length;
np=Math.ceil(al / rpp);
sh1=sh2="show";

if (page < 1) page=1;
if (page > np) page=np;

if (page==1) sh1="hide";
if (page==np) sh2="hide";
if (al==0) sh1=sh2="hide";

out=`<div class="pagination">
<button id="${id}-p" class="btn ${sh1}" onClick="b.${x}.paging.js.btn(-1);">Prev</button>
<button id="${id}-n" class="btn ${sh2}" onClick="b.${x}.paging.js.btn(1);">Next</button>
<span id="${id}-s">Page:${page}/${np} Items:${al}</span>
</div>
`;

return out;
},
js:{
callback:function(res){},
btn:function(btn){
var {id,page,data,rpp}=b[x].paging.json;
page=parseInt(page+btn);
log(id)
log(x)


al=data.length;
np=Math.ceil(al / rpp);

b[x].load.open(id+'-n'); b[x].load.open(id+'-p');

if (page < 1) page=1;
if (page > np) page=np;
if (page==1)  {b[x].load.close(id+'-p'); b[x].load.open(id+'-n');}
if (page==np) {b[x].load.close(id+'-n'); b[x].load.open(id+'-p');}
if (al==0)    {b[x].load.close(id+'-n'); b[x].load.close(id+'-p');}

b[x].load.gebi(id+'-s').innerHTML=`Page:${page}/${np}`;



b[x].paging.json.page=page;


b[x].paging.js.callback(page);



},

view:function(){
var {id,page,data,rpp}=b[x].paging.json;
b[x].load.gebi(id).innerHTML=b[x].paging.html();

},
},
}, // end paging

card:{
json:{id:'card',data:data},
html:function(){
var {data}=b[x].card.json;
step=data.length;
color=b[x].load.color(step);
if(step<1) color[0]='red';
out=``;
for(i in data){ var {nama,isi,icon,url}=data[i];
var nama=nama.toLowerCase();
// icon=`${icon}`;
out+=`<div class="col-1-4 card"> <div class="stats conta" style="background:${color[i]}" onclick="${url}">
<i>${b[x].svg.js.icon(icon)} </i>
<div class="main number">${isi}</div>
<div class="mainsub info">${nama}</div>
<div class="overlay">
<div class="icon">
<i onclick="b.${x}.load.controller('controller/master/${nama}.js?${nama}/task')">
${b[x].svg.js.icon('plus')}</i>
</div>
<div class="icon">
<i onclick="b.${x}.load.controller('controller/master/${nama}.js?${nama}/view')">${b[x].svg.js.icon('menu')}</i></div>
</div>
</div>
</div>`;
}
return out;
},
js:function(){
var {id}=b[x].card.json;
log(id)
b[x].load.gebi(id).innerHTML=b[x].card.html();
},
}, // end card

pie:{
json:{id:'pie',data:data},//pie
html:function(){
var {data}=b[x].pie.json;
step=data.length;
color=b[x].load.color(step);
sdo=25;
out=`
<svg class="pie img" width="100" height="100%" viewBox="0 0 42 42">
<circle class="pie-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>`;
for(i in data){ val=data[i].isi;
val1=parseInt(100-val);
out+=`
<circle id="" cx="21" cy="21" r="15.91549430918954"
fill="transparent"
stroke="${color[i]}"
stroke-width="3"
stroke-dasharray="${val} ${val1}"
stroke-dashoffset="${sdo}">
</circle>`;
sdo+=parseInt(-val);
}

out+=`<g class="chart-text">
<text x="50%" y="50%" class="chart-number" id="totalValue">100%</text>
<text x="50%" y="50%" class="chart-label">Total</text></g>
</svg>
`;
return out;
},
js:function(){
var {id}=b[x].pie.json;
b[x].load.gebi(id).innerHTML=b[x].pie.html();
},
}, // end pie

progress:{
json:{id:'progress',data:data}, //progress
html:function(){
var {data}=b[x].progress.json;
let step=data.length;
color=b[x].load.color(step);
out=``;
// out+=`<div class="progress-section" data-aos="fade-left" data-aos-once="true"><div>`;
for(i in data){ val=data[i].isi;nama=data[i].nama;
out+=`<div class="progress-bar-linear">
<p class="progress-bar-text">${nama}
<span class="float_right">${val}% </span>
</p>
<div class="progress-bar">
<span data-percent="80"  style="background:${color[i]}; width:${val}%;"></span>
</div>
</div>`;
}
// out+=`</div></div>`;
return out;
},
js:function(){
var {id}=b[x].progress.json;
b[x].load.gebi(id).innerHTML=b[x].progress.html();
},
}, // end progress

search:{
json:{id:'search',data:data},
html:function(){
var {id,data}=b[x].search.json;
tool=`<div id="${id}-tool" class="tool" />${b[x].tool.html()}</div>`;
txt=`<input id="${id}-txt" type="text" onkeyup="b.${x}.search.js.cari()" placeholder="Search..." />`;

data=[{nama:'Tools',isi:tool,icon:'pen'},
{nama:'Search',isi:txt, icon:'search'},
];

b[x].tabs.json.data=data;
b[x].tabs.json.id=`${x}`;
out=b[x].tabs.html();

return out;
},
js:{

callback:function(res){
log(res)
},

cari:function(){
var {id,data}=b[x].search.json;
mod.icons.js();

log(x)
log(id)

var y=b[x].load.gebi(id+'-txt').value;


log(y)
log(data)
// var res=b[x].search.partsearch(a, y);
var res=partsearch(data, y);

b[x].search.js.callback(res);

log(x)
log(res)

function partsearch(a, y) {
return a.filter(function (item) {
return Object.values(item).map(function (value) {
return String(value).toLowerCase();
}).find(function (value) { var r=y.toLowerCase();
return value.includes(r);
});
});
};

},

view:function(){
var {id,data}=b[x].search.json;
b[x].load.gebi(id).innerHTML=b[x].search.html();
b[x].button.js.tool(x);
mod.icons.js();

},
}, // end js
}, //end search

table:{
json:{id:'table',page:1,rpp:25,fld:['id','nama','isi','icon','url'],data:data},
html:function(){
var {id,page,rpp,fld,data}=b[x].table.json;
log(b[x].table.json)

var al=data.length;
var np=Math.ceil(al / rpp);
log(data)

out=`<div id ="${id}" class="table"> ${page}
<table><tr>
<th><input type="checkbox" aria-label="checkbox"></th>`;
for (i in fld){ out+=`<th>${fld[i]}</th>` }
out+=`</tr>`;
for (var i=(page-1) * rpp; i < (page * rpp) && i < al; i++) {
cols=data[i];
if (cols) { out+=`<tr><td><input name="chk${x}" aria-label="checkbox" type="checkbox" value="${i}"></td>`;}
for (key in cols) {
var str=cols[key];
// items=str.id;
if(this.isStr==1) { if(str.length>12){ str=str.substring(0, 12) + ' ...' } }
out+='<td class="col_'+key+'" onClick="b.'+x+'.button.js.read('+i+');" >' + str +'</td>';
}
out+=`</tr>`;
};
out+=`</table></div>`;
return out;
},

js:function(){
var {id,page}=b[x].table.json;
log(id)
log(page)
// na=b[x].table.html();
// log(na)
b[x].load.gebi(id).innerHTML=b[x].table.html();
hide=['id'];
hidden=function(id) {
arr=hide;
if(arr.includes(id)) { return 'hide';}
};
},

}, // end table

tabs:{
json:{id:'tabs',data:data},//card
html:function(){
var {id,data}=b[x].tabs.json;
out='<div class="tabs">';
for (i in data) { var {nama,isi,icon,url}=data[i];
out+=`<input type="radio" name="tabs-${id}" id="tabs-${id}${i}" checked="checked">
<label for="tabs-${id}${i}"><i>${b[x].svg.js.icon(icon)}</i>${nama}</label>
<div class="tab"><span class="row">${isi}</span><span id="tab-${id}${i}"></span></div>`;
}
out+=`</div>`;
return out;
},
js:function(){

var {id}=b[x].tabs.json;
log(id)
b[x].load.gebi(id).innerHTML=b[x].tabs.html();
},
}, //end tabs

steps:{
json:{id:'steps',page:1,data:data},//steps
html:function(){
var {page,data}=b[x].steps.json;
log(page)
out1=``;
out='<ul class="steps">';
for (i in data) { var {nama,isi,url}=data[i]; n=parseInt(i)+1;
y="";
if(i < page){ y="active";
log(i)
};
out+=` <li data-step ="${n}" class="step ${y}" onclick="b.${x}.steps.js.btn(${n})"> ${y}</li>`;
out1+=`<div id="stepC${n}" class="stepC row">${n}
<input type="text" aria-label="${x}-${n}">
</div>`;
}
out+=`</ul>`;
out=out+out1;
return out;
},
js:{
callback:function(res){
},
btn:function(res){
log(res)

b[x].steps.json.page=res;
n=parseInt(res)-1;

let z = b[x].load.gebc("step");
let z1 = b[x].load.gebc("stepC");

for(let i=0; i<z.length; i++) {
z[i].classList.remove('active');
z1[i].classList.remove('ada');
if(i < res){ z[i].classList.add('active');}
}
z1[n].classList.add('ada');
b[x].steps.js.callback(res);

},
view:function(){
var {id,page}=b[x].steps.json;
b[x].load.gebi(id).innerHTML=b[x].steps.html();
},
},
}, //end step

download:{
json:{ id:'download',data:[
{ id:'csv',target:'table'},
{ id:'xls',target:'table'},],
},
html:function(){
var {id,data}=b[x].download.json;
out=`<div class="btns">`;
for( i in data){ node=data[i];
out+=`<button onClick="b.${x}.download.js.${node.id}();">${node.id}</button>`;
}
out+=`</div>`;
return out;
},

js:{
callback:function(){},
csv:function () {
var {data}=b[x].datatable.json;
var file, a;
var csv=conv(data);
if (csv==null) return;
file=x+'.csv';
if (!csv.match(/^data:text\/csv/i)) {
csv='data:text/csv;charset=utf-8,' + csv;
}
data=encodeURI(csv);
a=b[x].load.ce('a');
a.setAttribute('download', file);
a.setAttribute('href', data);
a.click();

function conv(arr){
var array=typeof arr !='object' ? JSON.parse(arr):arr;
var str='';
var line='';
for (var key in array[0]) {
if (line !='') line+=';'
line+=key;
}
str+=line + '\r\n';
for (var i=0; i < array.length; i++) {
var line='';
for (var key in array[i]) {
if (line !='') line+=';'
line+=array[i][key];
}
str+=line + '\r\n';
}
return str;
}
},

xls :function(tb='doc-table', nama='Worksheet', file) {
var uri='data:application/vnd.ms-excel;base64,'
, template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
, base64=function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
, format=function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
if (!tb.nodeType) tb=b[x].load.gebi(tb)
var ctx={worksheet: nama || 'Worksheet', table: tb.innerHTML}
var a=b[x].load.ce("A");
a.href=uri + base64(format(template, ctx));
a.download=file || 'table.xls';
a.target='_blank';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
},
}, //end js
}, //end download

upload:{
json:{ id:'upload',
param:{path:'model.php',mod:'upload'},
// mode:'upload',
// path:'model.php',
// host:'http://localhost/bayam/database.php',
},
html:function(){
var {id,data}=b[x].upload.json;
out = `<p id="mInfo${id}"></p>
Pilih File CSV:<input type="file" aria-label="${x}-${id}" name="afile${id}" id="afile${id}" accept=".csv" >
<a href="#" class="btn" id="btn${id}" onClick="b.${x}.upload.js.get();" >Upload</a>`;
return out;
},

js:{
callback:function(){},
csv:function() {
var {id,param}=b[x].upload.json;
out=b[x].upload.html();
b[x].load.modal(out);
},
get:function() {
var {id,param}=b[x].upload.json;
host='api.php';
var file=b[x].load.gebi('afile'+id).files[0];
var fd=new FormData();
// fd.append("folder", folder);
fd.append("afile", file);
fd.append("isImport", 1);
fd.append("path", param.path);
fd.append("akses", 1);
fd.append("mod", 'upload');

var req=new XMLHttpRequest();
req.open("POST", host, true);
req.upload.onprogress=function(e) {
if (e.lengthComputable) {
var percentComplete=(e.loaded / e.total) * 100;
log(percentComplete + '% uploaded');
}
};
req.onload=function() {if (this.status==200) {log(req.response); };
};
req.send(fd);
},
}, // end js
}, //end upload

filter:{
json:{id:'filter',data:data,},
html:function() { log('filter.view');
var {id,page,rpp,fld,data}=b[x].filter.json;
log(data)
data=data[0]
// data=b[x].table.data[0];
data1='LIKE,NOT LIKE,=,!=,>=,<=,IN,NOT IN'.split(',');
out=`<button class="btn" id="getAdd" onClick="b.${x}.filter.js.add();" >+</button>
<form id="filterForm" method="post">
<div id="newlinktpl">

<div class="row">

<div class="col-1-4">
<div style="margin:5px">
<select aria-label="ope" name="ope[]" >
<option value="AND" >AND</option>
<option value="OR" >OR</option>
</select>
</div>
</div>

<div class="col-3-4">
<div style="margin:5px">
<select aria-label="fld" name="fld[]" id="fld">`;
for ( i in data) { out+=`<option value="${i}" >${i}</option>`; }
out+=`</select>
</div>
</div>

<div class="col-1-4">
<div style="margin:5px">
<select aria-label="ope1" name="ope1[]" >`;
for ( i in data1) { out+=`<option value="${data1[i]}" >${data1[i]}</option>`; }
out+=`</select>
</div>
</div>

<div class="col-3-4">
<div style="margin:5px">
<input aria-label="key" type="text" name="key[]" >
</div>
</div>

</div>
</div>


<div id="newlink"></div>
<div class="clear">
<input aria-label="hidden" type="hidden" name="order1" id="order1" value="ORDER BY">
ORDER BY:<select aria-label="fld1" name="sortir" id="fld1">`;
for ( i in data) { out+=`<option value="${i}" >${i}</option>`; }
out+=`</select>
</div>
</form>
<button class="btn" id="getFilter" onClick="b.${x}.filter.js.get();" >Filter</button>`;
return out;

}, // end view filter
js:{
add:function() {
log('getAdd')
var div1=b[x].load.ce('div');
div1.innerHTML=b[x].load.gebi('newlinktpl').innerHTML;
b[x].load.gebi('newlink').appendChild(div1);
},

view:function() { log('filter.view');
out=b[x].filter.html();
b[x].load.modal(out)
},

get:function() { log('filter.get');
// obj='WHERE id !=0' ;
obj='' ;
var ope1=b[x].load.gebn('ope1[]');
var ope=b[x].load.gebn('ope[]');
var fld=b[x].load.gebn('fld[]');
var key=b[x].load.gebn('key[]');

for ( var i=0; i < ope1.length; i++ ) {
if(ope1[i].value=='LIKE'){
obj + '%'+key[i]+'%';}

obj+=`${ope[i].value} ${fld[i].value} ${ope1[i].value}`;

if(ope1[i].value=='LIKE'||ope1[i].value=='NOT LIKE'){
obj+='"%'+key[i].value+'%"';}

else if(ope1[i].value=='IN'||ope1[i].value=='NOT IN'){
obj+='('+key[i].value+')';}
else {
obj+=key[i].value;}
}

log(obj);
obj=encodeURIComponent(obj);
log(obj)


},

cari:function() { log('filter.cari');
var {id,data}=b[x].filter.json;

kini=b[x].sekarang();


sekarang=" AND tanggal='"+kini['td'] +"'";
bulanini=" AND tanggal between '"+kini['fdm']+"' AND '"+kini['ldm']+"'";
cus=b[x].periode.split(" s/d ");
custom=" AND tanggal between '"+cus[0]+"' AND '"+cus[1]+"'";

arr=[
{key:'All',value:''},
{key:'Hari Ini [ '+kini['td']+' ]',value:sekarang},
{key:'Bulan ini [ '+kini['fdm']+ ' s/d ' + kini['ldm']+' ]',value:bulanini},
{key:'Pilihan [ '+cus[0]+ ' s/d ' + cus[1]+' ]',value:custom}
];

out=b[x].form.select('fld',data);
out+=b[x].form.input('key','');
out+='Periode:<select aria-label="periode" name="periode" id="periode">';
for ( i in arr) { out+='<option value=" '+arr[i].value+' " >'+arr[i].key+'</option>'; }
out+='</select>';
out+=b[x].form.button('getCari','Search');

b[x].modal(out);

b[x].load.gebi('getCari').addEventListener("click", function(){
var fld=b[x].load.gebi('fld').value;
var key=b[x].load.gebi('key').value;
var periode=b[x].load.gebi('periode').value;

obj='AND '+fld+' LIKE ' + '"%'+key+'%"';
obj+=periode ;

log(obj);
obj=encodeURIComponent(obj);

induk=b[x].app.induk;
b[x].ajax.json={mod:'cari',cond:obj,induk:induk};
b[x].ajax.sql();
} );


// b[x].load.gebi('getAdd').addEventListener("click", function(){
// var div1=b[x].load.ce('div');
// div1.innerHTML=b[x].load.gebi('newlinktpl').innerHTML;
// b[x].load.gebi('newlink').appendChild(div1);
// } );


}, // end view
}, // end js
}, // end filter

svg:{
json:{id:'svg',data:[
{canvas:'0 0 100 150', item:[
{nama:'person',posisi:'0 20'},
{nama:'person',posisi:'0 50'},
{nama:'ellipse',posisi:'50 0'},
{nama:'ellipse',posisi:'50 55'},
{nama:'ellipse',posisi:'50 100'},
{nama:'line',posisi:'M24 36 48 12'},
{nama:'line',posisi:'M24 36 48 114'},
{nama:'line',posisi:'M24 66 48 66'},
{nama:'line',posisi:'M24 66 48 114'},
{nama:'text',posisi:'75 14',text:'purchas'},
{nama:'text',posisi:'75 70',text:'sale'},
{nama:'text',posisi:'75 114',text:'login'},
]},
{canvas:'0 0 100 200', item:[
{nama:'terminal',posisi:'20 0'},
{nama:'process',posisi:'20 30'},
{nama:'decision',posisi:'20 60'},
{nama:'process',posisi:'20 90'},
{nama:'process',posisi:'20 120'},
{nama:'terminal',posisi:'20 150'},
{nama:'line',posisi:'M32 20 32 30'},
{nama:'line',posisi:'M32 50 32 54'},
{nama:'line',posisi:'M32 85 32 90'},
{nama:'line',posisi:'M32 110 32 120'},
{nama:'line',posisi:'M32 140 32 145 0 145 0 72 10 72'},
{nama:'line',posisi:'M52 72 56 72 56 148 32 148 32 150 '},
{nama:'text',posisi:'25 14',text:'start'},
{nama:'text',posisi:'25 164',text:'end'},
]},

]},

path:{
filter:`M4 21 4 14M4 10 4 3M12 21 12 12M12 8 12 3M20 21 20 16M20 12 20 3M1 14 7 14M9 8 15 8M17 16 23 16`,
person:`M4 22V19A4 4 0 017 15H17A4 4 0 0120 19V22M7 7A4 4 0 0017 7 4 4 0 007 7`,
house:`M20 10v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10M9 22V12h6v10M2 10 12 2l10 8`,
threedots:`M11 12a1 1 0 102 0 1 1 0 10-2 0M11 5a1 1 0 102 0 1 1 0 10-2 0M11 19a1 1 0 102 0 1 1 0 10-2 0`,
menu:`M3 12 21 12M3 6 21 6M3 18 21 18`,
trush:`M19 6V20A2 2 0 0117 22H7A2 2 0 015 20V6M8 6V4A2 2 0 0110 2H14A2 2 0 0116 4V6M3 6 5 6 21 6M10 11 10 17M14 11 14 17`,
check:`M20 6 9 17 4 12`,
x:`M18 6 6 18 M6 6 18 18`,
plus:`M2 12a10 10 0 1020 0 10 10 0 10-20 0M12 8 12 16M8 12 16 12`,
printer:`M6 9V2H18V9M6 18H4A2 2 0 012 16V11A2 2 0 014 9H20A2 2 0 0122 11V16A2 2 0 0120 18H18M6 14H18V22H6Z`,
pen:`M16 3 21 8 8 21 3 21 3 16 16 3`,
chart:`M2 2V20H22M20 7 17 10 12 5 4 18`,
cart:`M2 2h3l3 12a2 2 0 002 2h8a2 2 0 002-1l2-8H7.1M9 20a1 1 0 002 0 1 1 0 00-2 0M17 20a1 1 0 002 0 1 1 0 00-2 0`,
card:`M5 16H7M2 9H22M2 5H22V19H2Z`,
envelope:`M4 4H20C20 4 22 4 22 6V18C22 20 21 20 20 20H4C2.9 20 2 20 2 18V6C2 5 2 4 4 4ZM22 6 12 13 2 6`,
geo:`M9 10a3 3 0 106 0 3 3 0 10-6 0M12 22s-8-5-8-12A8 8 0 0112 2a8 8 0 018 8c0 7-8 12-8 12z`,
twitter:`M23 3A11 11 0 0120 4 4 4 0 0012 7V8A10 10 0 013 4S1 14 8 17A12 12 0 011 19C10 24 21 19 21 8A4.5 4.5 0 0021 7 8 8 0 0023 3Z`,
facebook:`M17 2H14A5 5 0 009 7V10H6V14H9V22H13V14H16L17 10H13V7A1 1 0 0114 6H17Z`,
whatsapp:`M20 11A8 8 0 018 18L3 21 5 15A8 8 0 014 11 1 1 0 0120 11Z`,
eye:`M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12ZM9 12A3 3 0 1 0 15 12A3 3 0 1 0 9 12`,
qrcode:`M3 3h7v7H3Z M14 3h7v7H14Z M14 14h7v7H14Z M3 14h7v7H3Z`,
search:`M20 12A1 1 0 004 12 1 1 0 0020 12M22 22 18 18`,
minus:`M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0 M8 12 16 12`,
bayam:`M1 18 1 6A1 1 0 0111 6L11 13 18 13A1 1 0 0118 23L6 23 6 6A1 1 0 0116 6L16 8 18 8A1 1 0 0118 18Z`,
scan:`M8 3H5A2 2 0 0 0 3 5V8M21 8V5A2 2 0 0 0 19 3H16M16 21H19A2 2 0 0 0 21 19V16M3 16V19A2 2 0 0 0 5 21H8`,
upload:`M3 15V19A2 2 0 005 21H19A2 2 0 0021 19V15M17 8 12 3 7 8M12 3V14`,
download:`M3 15V19A2 2 0 005 21H19A2 2 0 0021 19V15M17 9 12 14 7 9M12 14V3`,
camera:`M22 20A2 2 0 0120 22H4A2 2 0 012 20V7A2 2 0 014 5H7L9 2H15L17 5H20A2 2 0 0122 7V20M7 12A1 1 0 0017 12 1 1 0 007 12`,
bel:`M22 17H2A3 3 0 005 14V9A7 7 0 0119 9V14A3 3 0 0022 17ZM14 20A2 2 0 0110 20`,
lock:`M4 11H20S22 11 22 13V20S22 22 20 22H4S2 22 2 20V13S2 11 4 11M7 11V7A5 5 0 0117 7V11`,
setting:`M9 12A3 3 0 1015 12 3 3 0 109 12M21 14A1.65 1.65 0 0020 17 2 2 0 0117 20 1.65 1.65 0 0014 21 2 2 0 0110 21 1.65 1.65 0 007 20 2 2 0 014 17 1.65 1.65 0 003 14 2 2 0 013 10 1.65 1.65 0 004 7 2 2 0 017 4 1.65 1.65 0 0010 3 2 2 0 0114 3 1.65 1.65 0 0017 4 2 2 0 0120 7 1.65 1.65 0 0021 10 2 2 0 0121 14Z`,

terminal:`M5 7Q1 7 1 11L1 13Q1 17 5 17L19 17Q23 17 23 13L23 11Q23 7 19 7Z`,
process:`M1 7 1 17 23 17 23 7Z`,
decision:`M12 23 1 12 12 1 23 12Z`,
io:`M5 7 1 17 19 17 23 7Z`,
connector:`M18 12A1 1 0 006 12 1 1 0 0018 12Z`,
ellipse:`M1 12C1 22 23 22 23 12 23 2 1 2 1 12`,

},

html:function(){
var {data}=b[x].svg.json;
out=``;
for (i in data) {
var {mode,item,canvas}=data[i];
out+=`${b[x].svg.js.diagram(canvas,item)}`;
}
return out;
}, // end view icons

js:{
view:function(id='bayam'){
var {path}=b[x].svg;
log(path)
out='';
for(i in path){ log(i)
out+=this.svg(this.path(i));
}
return out;
},
icon:function(id='bayam'){
return `<svg class="svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">${this.path(id)}</svg>`;
},

diagram:function(canvas='0 0 200 200',item){
out=`<svg class="svgdiagram" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="${canvas}">`;
for (e in item) { node=item[e]; p=node.posisi; p=p.split(' ');

if(node.nama=='text'){ out+=`<text x=${p[0]} y=${p[1]} >${node.text}</text>`;}

else if(node.nama=='line'){
out+=`<marker id='panah' refX='0' refY='2' markerWidth='4' markerHeight='4'orient='auto'><path d='M0 0 4 2 0 4Z' /></marker>
<path d="${node.posisi}" marker-end='url(#panah)' />`; }

else { out+=`<svg x=${p[0]} y=${p[1]} >${b[x].svg.js.path(node.nama)}</svg>`;}

} // end for
out+=`</svg>`;
return out;
},

path:function(id='bayam'){
var {path}=b[x].svg;
return `<path id="path${id}" d="${path[id]}" />`;
},

line:function(id='M0 0 L24 24'){
return `<path d="${id}" />`;
},


list:function(){
var {path}=b[x].svg;
for(key in data ){
list = b[x].load.gebc("bi-"+key);
if(list.length > 0){
for (var i=0 ; i<list.length; i++){ list[i].innerHTML = b[x].svg.js.icon(key);}
}}
}, // end list
},// end js
}, // end svg




tool:{
json:{id:'tool',akses:'c,r,u,d',data:[
{nama:"filter",url:"filter()",icon:"filter" },
{nama:"print",url:"cetak()",icon:"printer"},
{nama:"upload",url:"uploads()",icon:"upload"},
{nama:"download",url:"downloads()",icon:"download" },
]},
html:function(){
var {id,data}=b[x].tool.json;
// if(akses.includes('c')){ btn.splice(0, 0, {nama:"add",url:"add('"+x+"')",icon:"plus" });}
// // if(akses.includes('u')){ btn.splice(1, 0, {nama:"update",url:"update()" });}
// if(akses.includes('d')){ btn.splice(1, 0, {nama:"remove",url:"hapus('"+x+"')",icon:"trush" });}
// cari=function(x){b[x].filter.cari();};
// add=function(x){b[x].table.add();};
// hapus=function(x){b[x].datatable.deletes(x)};
cetak=function(){
id=x+"-table";
  b[x].load.cetak(id)};
filter=function(){b[x].filter.js.view();};
downloads=function(){b[x].download.js.csv();};
// // downloads=function(x){alert('download')};
uploads=function(){b[x].upload.js.csv()};
// report=function(x){b[x].cetak.report()};
out='<div class="tool btns">';
for (key in data) {node=data[key];
out+=`<button class="btn" onclick="${node.url}" ><i>${b[x].svg.js.icon(node.icon)}</i>${node.nama}</button>`;
}
// log(out)
out+='</div>';
return out;
},
js:function(){},
},

// if(akses.includes('c')){ btn.splice(0, 0, {nama:"add",url:"add('"+x+"')",icon:"plus" });}
// // if(akses.includes('u')){ btn.splice(1, 0, {nama:"update",url:"update()" });}
// if(akses.includes('d')){ btn.splice(1, 0, {nama:"remove",url:"hapus('"+x+"')",icon:"trush" });}
// cari=function(x){b[x].filter.cari();};
// add=function(x){b[x].table.add();};
// hapus=function(x){b[x].datatable.deletes(x)};
// cetak=function(x){b[x].cetak.view()};
// filter=function(x){b[x].filter.view()};
// downloads=function(x){b[x].download.view(x);};
// // downloads=function(x){alert('download')};
// upload=function(x){b[x].upload.csv()};
// report=function(x){b[x].cetak.report()};
// out='';
// for (key in btn) {node=btn[key];
// out+=`<a onclick="${node.url}" href="#" ><i class="${node.icon}"></i>${node.nama}</a>`;
// }
// b[x].load.gebi(x+'-toolSearch').innerHTML=out;
// // icons.load()
// }, // end tools


}; // end b[x]
return b[x];
};
