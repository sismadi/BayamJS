var mod=bayam('user');
mod.app={
  data:{
  param:{path:'model.php',mod:'table'},
  },
  view:function(){ log(data); },
  home:function(){
    var {param} = this.data;
    mod.datatable.data.id='content';
    mod.datatable.data.param=param;
    mod.datatable.load.model();
  },
  };

  // mod.app.home();

// mod.card.data.id='content';
// mod.card.load();

// mod.card.data.id='content';
// mod.card.load();

// mod.progress.data.id='content';
// mod.progress.load();

// mod.pie.data.id='content';
// mod.pie.load();

// mod.tabs.data.id='content';
// mod.tabs.load();

// mod.paging.data.id='content';
// mod.paging.load.view();

// mod.search.data.id='content';
// mod.search.load();

// mod.table.data.id='content';
// mod.table.load();


// mod.button.data.id='content';
// mod.button.load.view();

// mod.input.data.id='content';
// mod.input.load();

// mod.form.data.id='content';
// mod.form.load();

// mod.load.gebi('content').innerHTML=mod.icons.view();
// mod.load.gebi('content').innerHTML=mod.filter.view();
// mod.load.gebi('content').innerHTML=mod.input.view();
// mod.load.gebi('content').innerHTML=mod.icons.view();
// mod.load.gebi('content').innerHTML=mod.button.view();

// mod.icons.load();



// log(mod.setting.versi)
//
// log(mod)
// delete dan["setting"];
// delete dan["load"];
// delete dan["icons"];
// delete dan["task"];
// nah=[];
// val=[];
// // var {id,data}=mod;
// out='<div class="tabs" id="tabss">';
// for (i in dan) { node=dan[i]; // var {nama,isi,icon,url}=data[i];
// out+=`<input type="radio" name="tabs" id="tabs-${i}" checked="checked">
// <label for="tabs-${i}">${i}</label>
// <div class="tab">`;
// val.push(i)
// for (key in node) {
// out+=`<div class="col-1-3">${key}</div><div id="${i}${key}" class="col-2-3">${i}${key}</div>`;
// nah.push(i+key)
// }
// out+=`</div>`;
// }
// out+=`</div>`;
// mod.load.gebi('content').innerHTML=out;
//
// log(val)
// for (i in nah) {
// mod.load.gebi(nah[i]).innerHTML=mod[val[i]].view();
//   }
