document.title="BayamJS v1.0";
var setting=bayam('setting');
setting.app={
  json:{
    isSignup:1,
    isDb:1,
    akses:['c','r','u','d'],
    // api:'app/cit/database.php',
    api:'database.php',
    // home:'controller/master/login.js?login/login',
    home:'controller/master/login.js?login/login',
    // afterlogin:'controller/master/profile.js?profile/view',
    afterlogin:'controller/master/task.js?task/view',
},
  js:function(){
    // setting.load.controller(this.json.home);
    setting.load.api=setting.app.json.api;
    log(setting.load.api);
 },
};

setting.app.js();
setting.load.isDb=0;
log(setting.load.isDb)
