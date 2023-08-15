var mod=bayam('doc');
setting.load.api='database.php';

var doc={
json:{
data:["intro","card","pie","tabs","progress","input","search","table","paging",
"button","steps","download","upload","filter","tool","svg","icons"],
menu:[
  {id:0,induk:0,judul:"intro",ikon:"house"},
  {id:1,induk:0,judul:"fitur",ikon:"house"},
  {id:2,induk:1,judul:"card",ikon:"card"},
  {id:3,induk:1,judul:"pie",ikon:"chart"},
  {id:3,induk:1,judul:"tabs",ikon:"chart"},
  {id:3,induk:1,judul:"progress",ikon:"chart"},
  {id:3,induk:1,judul:"input",ikon:"chart"},
  {id:3,induk:1,judul:"search",ikon:"chart"},
  {id:3,induk:1,judul:"table",ikon:"chart"},
  {id:3,induk:1,judul:"paging",ikon:"chart"},
  {id:3,induk:1,judul:"button",ikon:"chart"},
  {id:3,induk:1,judul:"steps",ikon:"chart"},
  {id:3,induk:1,judul:"download",ikon:"chart"},
  {id:3,induk:1,judul:"upload",ikon:"chart"},
  {id:3,induk:1,judul:"filter",ikon:"chart"},
  {id:3,induk:1,judul:"tool",ikon:"chart"},
  {id:3,induk:1,judul:"svg",ikon:"chart"},
  {id:3,induk:1,judul:"icons",ikon:"chart"},
]
},

page:function(){
var {data}=this.json;
out=``;
for (i in data){ node=data[i];
out+=`<div id="doc-${node}">${node}</div>`; }
mod.load.gebi('content').innerHTML=out;
},
menu:function(){
var {menu}=this.json;
log(menu)
out=``;
out+=recurseMenu(0);
// return out ;
mod.load.gebi('menu').innerHTML=out;

function recurseMenu(parent) {
out='<li>';
for (var x in menu) {node=menu[x];
if (node.induk==parent) {
out+=`<a href="#${node.judul}"><i class="ico-${node.ikon}"></i><span>${node.judul}</span></a>`;
if (node.id > 0) { out+='<ul>'+recurseMenu(node.id)+'</ul>';	}
}
}
out+='</li>';
return out ;
// mod.load.gebi('menu').innerHTML=out;
}

},

coba:function(){
const url = 'http://localhost/bayam/database.php?path=doc.php&mod=main';

fetch(url)
.then(response => response.json())
.then(data => {
})
.catch(error => {
console.error('Terjadi kesalahan:', error);
});
},

api:function(){
dan={host:'http://localhost/bayam/database.php',
path:'doc.php',
id:'1',
data:`{nama:'satu',status:1}`,
method:['create','read','update','delete'],
dan1:["table"]
};

dan1=dan.method;
out=``;

for( i in dan1){ nah=dan1[i];
if(nah=='create') {
id='';
data=`&data={nama:'satu',status:1}`;
des=`3. <b>data=${dan.data}</b>: Parameter ini memiliki nilai data object dan digunakan untuk
mengirim data dan menyimpan ke dalam database.</br>`;

} else {
id='&id=1';
data=``;
des=`3. <b>id=${dan.id}</b>: Parameter ini memiliki nilai ${dan.id} dan digunakan untuk
memberitahu server bahwa permintaan ini adalah untuk mengakses tabel dalam database.</br>`;
}
if(nah=='update') {
}

out+=`
<div class="row zColor">
<div class="col-1-4">Method</div><div class="col-3-4"><b>${nah}</b> </div></div>
<div class="row zColor">
<div class="col-1-4">URL</div><div class="col-3-4">
${dan.host}?${dan.path}&mod=${nah}${id}${data}</div></div>
<div class="row zColor">
<div class="col-1-4">Respon</div><div class="col-3-4">
{"info":"Berhasil ${nah}","akses":[]}

</div></div>
<div class="row zColor">
<div class="col-1-4">Deskripsi</div><div class="col-3-4">
Pada URL di atas, kita menggunakan metode HTTP GET untuk mengakses
<b>${dan.host}</b>.
</br>
Permintaan ini menyertakan tiga parameter:</br>
1. <b>mod=${nah}</b>: Parameter ini memiliki nilai ${nah} dan digunakan untuk
memberitahu server bahwa permintaan ini adalah untuk mengakses table dalam database.</br>
2. <b>path=${dan.path}</b>:</br>
Parameter ini memiliki nilai <b>${dan.path}</b> dan digunakan untuk
memberitahu server mengenai path atau jalur dari file <b>${dan.path}</b></br>
${des}
</div></div>
<div class="row zColor">s
</div>`;

}

mod.load.gebi('doc-table').innerHTML=out;
// mod.load.gebi('doc-table'+nah).innerHTML=out;
},

proses:function(){
dan1=[
{nama:'model', path:'../model/master/model.txt' },
{nama:'dashboard', path:'../controller/master/dashboard.js' },
{nama:'profile', path:'../controller/master/profile.js' },
{nama:'task', path:'../controller/master/task.js' },
{nama:'runsheet', path:'../controller/cit/runsheet.js' },
];

function we(nah,file){
setting.load.api=file;
param={};
mod.load.model(param,callback);
function callback(data){

let str = data.replace(/</g, "&lt;");
out=`<div class="row zColor">
<b>${nah.nama}.js</b>
<pre>${str}</pre>
</div>`;
mod.load.gebi('doc-'+nah.nama).innerHTML=out;
}
};


for( i in dan1){ nah=dan1[i]; we(nah,nah.path);  }

},

icons:function(){
var {path}=mod.svg;
out=``;
out1=``;
for( i in path){
out1+=`&lt;i class="bi-${i}"&gt;&lt;/i&gt; `;
out+=`<i class="bi-${i} tooltip" onClick="doc.modal('${i}')">
<span class="tooltips">${i}</span>
${mod.svg.js.icon(i)}
</i>
`;
}

nah=`icons`;
out2=`<a name="${nah}"><div class="row zColor">
<div class="col-1-4">Penanda / Nama Objek</div><div class="col-3-4"><h2>${nah}</h2> </div></div>
<div class="row zColor"><div class="col-1-4">Deskripsi</div><div class="col-3-4">
Fungsi ini menghasilkan tampilan <b>${nah}</b> dalam
format HTML berdasarkan data yang diberikan pada bagian
JSON
</div></div>

<div class="row zColor">
<div class="col-1-4">Contoh kode (HTML,JS)</div>
<div class="col-3-4">
<pre class="html"><code>${out1}
mod.load.icons()</code></pre>
</div></div>

<div class="row zColor">
<div class="col-1-4">Keluaran</div>
<div class="col-3-4">${out}</div>
</div>`;

mod.load.gebi('doc-icons').innerHTML=out2;

}, // end icons
modal:function(i){
var {path}=mod.svg;
var i2=path[i];
out=`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-size="1" stroke="black" viewBox="0 0 24 24">
<path d="${i2}" /> </svg>
<pre><code>
html
&lt;i class="bi-${i}"&gt;&lt;/i&gt;
svg
&lt;svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-size="1" stroke="black"  viewBox="0 0 24 24" &gt;&lt;path d="${i2}" /&gt; &lt;/svg&gt;
</code>
</pre>
`;
mod.load.modal(out);
},

pengembang:function(){
dan1=["card","pie","tabs","progress","input","search","table","paging","button","steps","download","upload","filter","tool","svg",];

for( i in dan1){ nah=dan1[i];
out=`<a name="${nah}">
<div class="row zColor">
<div class="col-1-4">Penanda / Nama Objek</div><div class="col-3-4"><h2>${nah}</h2> </div></div>
<div class="row zColor"><div class="col-1-4">Deskripsi</div><div class="col-3-4">
Fungsi ini menghasilkan tampilan <b>${nah}</b> dalam
format HTML berdasarkan data yang diberikan pada bagian
JSON
</div></div>
<div class="row zColor">
<div class="col-1-4">Contoh kode (HTML, JSON, JS)</div>
<div class="col-3-4"><pre class="html"><code>&lt;div id="${nah}"&gt;&lt;/div&gt;
var mod=bayam('doc');
mod.${nah}.json=${JSON.stringify(mod[nah].json)}
document.getElementById("${nah}").innerHTML=mod.${nah}.html(); </code></pre> </div></div>
<div class="row zColor">
<div class="col-1-4">Keluaran</div>
<div class="col-3-4">
<div class="row">${mod[nah].html()}</div>
<div class="row"> </div>
</div>
</div>`;
log(nah)
mod.load.gebi('doc-'+nah).innerHTML=out;
// mod.app.pengenalan();

}
// mod.icons.js();
}, // end pengembang

intro:function(){
out=`
<p>Selamat datang di dunia inovasi pengembangan web dengan BayamJS – framework terbaru yang memadukan kekuatan Pola Model-View-Controller (MVC) untuk menghadirkan pengalaman pengembangan yang lebih terstruktur, efisien, dan dinamis. BayamJS telah dirancang dengan penuh dedikasi untuk memudahkan proses pengembangan aplikasi web yang lebih canggih dan menarik.
</p>
<b>BayamJS: Menginspirasi, Inovasi dalam Pengembangan Web</b>
<p>
BayamJS adalah framework inovatif yang memungkinkan Anda untuk dengan mudah membangun aplikasi web dengan pendekatan MVC yang kuat. Pendekatan ini memisahkan aplikasi Anda menjadi tiga komponen utama: Model, View, dan Controller.
</br>
<b>Model</b> bertanggung jawab atas pengelolaan data dan logika bisnis,
<b>View</b> menangani tampilan interaktif yang menarik bagi pengguna, dan
<b>Controller</b> mengendalikan interaksi antara Model dan View.
</p>
<b>Keunggulan BayamJS</b>
<ul>
<ol>
<b>Pola MVC yang Kuat:</b> BayamJS menggunakan pendekatan Pola Model-View-Controller yang telah terbukti, memungkinkan Anda untuk mengatur kode dengan lebih terstruktur dan meningkatkan kolaborasi tim.
</ol>
<ol>
<b>Kustomisasi Tanpa Batas:</b> Dengan BayamJS, Anda memiliki kebebasan penuh untuk menyesuaikan tampilan dan fungsionalitas aplikasi sesuai dengan kebutuhan Anda, sehingga dapat memberikan pengalaman yang unik bagi pengguna Anda.
</ol>
<ol>
<b>Kinerja Optimal:</b> Framework ini dirancang untuk memberikan kinerja yang optimal, dengan pengoptimalan internal yang canggih untuk memastikan aplikasi Anda berjalan dengan cepat dan responsif.
</ol>
<ol>
<b>Dokumentasi Lengkap:</b> Dokumentasi yang komprehensif membantu Anda menjelajahi framework ini dengan mudah dan cepat, memudahkan proses pengembangan dan mempercepat kurva pembelajaran.
</ol>
</ul>

<b>Mulai Dengan BayamJS</b>
<p>
BayamJS siap mengantarkan Anda pada perjalanan pengembangan yang penuh inovasi. Baik Anda seorang pengembang berpengalaman atau sedang belajar, BayamJS memiliki sumber daya yang Anda butuhkan untuk mewujudkan ide-ide kreatif Anda dalam bentuk aplikasi web yang menakjubkan.
Jangan ragu untuk menjelajahi dokumentasi kami, yang menyajikan langkah demi langkah dalam memulai dengan BayamJS. Bersiaplah untuk mengalami pengembangan web yang lebih produktif, dinamis, dan memuaskan dengan BayamJS!
</p>
`;

out=`
<a name="intro">

<h2>Selamat datang di dokumentasi resmi BayamJS!</h2>
BayamJS adalah sebuah framework JavaScript yang didesain untuk memudahkan pengembangan aplikasi web dengan pendekatan Pola Model-View-Controller (MVC). Dokumentasi ini akan membimbing Anda melalui langkah-langkah penggunaan, konfigurasi, dan fitur-fitur utama yang disediakan oleh BayamJS.
<h2>Versi yang Didukung</h2>
Saat ini, BayamJS tersedia dalam versi 1.0.0. Kami terus berusaha untuk meningkatkan dan memperbarui framework ini agar sesuai dengan kebutuhan Anda.

<h2>Tentang Aplikasi Ini</h2>
BayamJS adalah framework JavaScript yang bertujuan untuk menyediakan struktur pengembangan yang lebih terstruktur dan terorganisir dalam pembuatan aplikasi web. Dengan memisahkan aplikasi menjadi tiga komponen utama: Model, View, dan Controller, BayamJS memungkinkan Anda untuk dengan mudah mengelola logika bisnis, tampilan, dan interaksi pengguna.

<h2>Teknologi</h2>
BayamJS dibangun dengan menggunakan teknologi-teknologi berikut:
<ul>
<li><b>JavaScript:</b> Bahasa pemrograman inti yang digunakan untuk mengembangkan framework ini.</li>
<li><b>HTML: </b>Digunakan untuk merender tampilan aplikasi.</li>
<li><b>CSS: </b>Untuk mengatur tampilan dan gaya aplikasi.</li>
<li><b>Pola Model-View-Controller (MVC):</b> Pendekatan pengembangan yang mendasari BayamJS, memisahkan aplikasi menjadi tiga komponen terpisah.</li>
</ul>
<h2>Aksesibilitas</h2>
Komitmen kami terhadap aksesibilitas adalah hal yang sangat penting. BayamJS telah dirancang dengan mempertimbangkan pedoman aksesibilitas web terbaru. Framework ini menyediakan alat dan praktik terbaik untuk membantu Anda mengembangkan aplikasi yang dapat diakses oleh semua pengguna, termasuk mereka yang memiliki tantangan aksesibilitas.

<h2>Mulai</h2>
Mulai menggunakan BayamJS sangatlah mudah. Ikuti langkah-langkah di bawah ini untuk memulai pengembangan aplikasi web dengan BayamJS.

<h2>Instal Aplikasi</h2>
Anda dapat menginstal BayamJS ke dalam proyek Anda menggunakan manajer paket npm. Jalankan perintah berikut di terminal:

bash
Copy code
npm install bayamjs

<h2>Membuka Aplikasi</h2>
Setelah Anda menginstal BayamJS, Anda dapat membuat berkas HTML sebagai titik masuk untuk aplikasi Anda. Berikut adalah contoh penggunaan BayamJS dalam berkas HTML:

html
Copy code
<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" type="text/css" href="https://bayam.id/bayam.css" async&gt;

&lt;title&gt;Aplikasi BayamJS&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- Tambahkan kode aplikasi Anda di sini menggunakan BayamJS --&gt;
&lt;script src="https://bayam.id/bayam.js"&gt;&lt;/script&gt;
&lt;script&gt;
// Inisialisasi aplikasi BayamJS dan gunakan fitur-fiturnya
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<h2>Info Lebih Lanjut</h2>
Untuk informasi lebih lanjut tentang fitur-fitur, penggunaan, dan praktik terbaik BayamJS, silakan kunjungi situs web resmi BayamJS atau lihat dokumentasi lengkap.
Sekarang Anda siap untuk memulai pengembangan aplikasi web dengan BayamJS! Lihat dokumentasi lebih lanjut untuk informasi tentang penggunaan, komponen, dan fitur-fitur yang disediakan oleh BayamJS.
Jangan ragu untuk menjelajahi fitur-fitur yang ada dan mulai menciptakan pengalaman pengembangan web yang lebih terstruktur dan efisien dengan BayamJS. Jika Anda memiliki pertanyaan atau masalah, jangan ragu untuk menghubungi tim dukungan kami.
Selamat mengembangkan dengan BayamJS!
<a name="fitur">
<h2>Fitur Dasar</h2>
`;
mod.load.gebi('doc-intro').innerHTML=out;
},

}; // end doc
// mod.load.gebi('icons').innerHTML=mod.svg.js.view();

doc.page();
// doc.menu();
doc.intro();
doc.pengembang();
doc.icons();
