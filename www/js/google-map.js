function init(){
    document.addEventListener("deviceready",onDeviceReady, false);
}
function onDeviceReady(){
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);
}
function onOnline(){
   var script = document.createElement("script"); 
   script.type ="text/javascript";
   script.src = "https://maps.google.com/maps/api/js?" + "callback=initialize";
   document.body.appendChild(script);
}
function onOffline(){
    alert("please connect to internet");
    var mapObj = document.getElementById("map-canvas");
    mapObj.innerHtml = "please connect to internet";
}
function initialize(){
    var mapOptions = {
        center: new google.maps.LatLng(13.751718,100.492573),
        zoom: 18
    };
    var mapObj = document.getElementById("map-canvas");
    var map = new google.maps.Map(mapObj, mapOptions);
}