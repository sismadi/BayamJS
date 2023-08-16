map={
view: function(){
out='<div id = "map" style = "width:100%; height:580px"></div>';
document.getElementById('content').innerHTML=out;
arr='-6.41944,106.86358';
gps=arr.split(',');
var mapOptions = {
// center:[-6.41944,106.86358],
center:[gps[0],gps[1]],
zoom: 15
}
var map = new L.map('map', mapOptions);
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
// var marker = L.marker([-6.41944,106.86358]);
var marker = L.marker([gps[0],gps[1]]);
marker.addTo(map);
},

multi:function(){
out='<div id = "map" style = "width:100%; height:580px"></div>';
document.getElementById('content').innerHTML=out;

locations=[{"id":"1","tanggal":"2021-02-01","jam":"00:00:00","lokasi":"Jl. Karang Tengah ( Depan Plaza Karinda )","img":"files\/1.jpeg","gps":"-6.305200, 106.781981","keterangan":"","status":"1"},{"id":"2","tanggal":"2021-02-02","jam":"00:00:00","lokasi":"Jl. Karang Tengah ( Depan Plaza Karinda )","img":"files\/2.jpeg","gps":"-6.305380, 106.782005","keterangan":"","status":"1"},{"id":"3","tanggal":"2021-02-03","jam":"00:00:00","lokasi":"Jl. Karang Tengah ( Depan Plaza Karinda )","img":"files\/3.jpeg","gps":"-6.305736, 106.782024","keterangan":"","status":"1"}];

var map = L.map('map').setView([-6.305453, 106.782125], 15);
mapLink ='<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; ' + mapLink + ' Contributors',
maxZoom: 18,
}).addTo(map);

for (i in locations) {
gps=locations[i].gps.split(',');
marker = new L.marker([gps[0],gps[1]])
// .on('click', function onClick(e){alert(locations[i][0]);})
// .bindPopup(locations[i][0])

// .bindPopup('<object data="'+locations[i].img+'" width="315" height="560"></object>',{maxWidth : 560})
// .addTo(map);

.addTo(map)
.bindPopup('<span onClick=map.info('+i+')>Titik '+i+'<span>')
.openPopup();


}
},

info:function(i){
  out='<div id = "info" style = "width:80%; height:580px">';
  out+=i;
  out+='</div>';
  document.getElementById('content').innerHTML=out;
},
  duo:function(){
out='<div id = "map" style = "width:100%; height:580px"></div>';
document.getElementById('content').innerHTML=out;
var map = L.map('map').setView([-41.2858, 174.78682], 14);
 mapLink =
     '<a href="http://openstreetmap.org">OpenStreetMap</a>';
 L.tileLayer(
     'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; ' + mapLink + ' Contributors',
     maxZoom: 18,
     }).addTo(map);
 var marker = L.marker([-41.29042, 174.78219],
     {draggable: true,        // Make the icon dragable
     title: 'Hover Text',     // Add a title
     opacity: 0.5}            // Adjust the opacity
     )
     .addTo(map)
     .bindPopup("<b>Te Papa</b><br>Museum of New Zealand.")
     .openPopup();

   },
};
