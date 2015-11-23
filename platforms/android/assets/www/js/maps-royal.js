
var map;
var marker;

function init() {
    document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady() {
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);

}

function onOffline() {
    alert("Must be connected to the Internet");
    var mapObj = document.getElementById("map-canvas");
    mapObj.innerHTML = "please connect to the Internet";

}

function onOnline() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?' +
            'callback=initialize';
    document.body.appendChild(script);
}


function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(18.7478518, 98.9226641),
        zoom: 15
    };

    var mapObj = document.getElementById("map-canvas");
    map = new google.maps.Map(mapObj, mapOptions);


    /*หอคำหลวง*/
    var point1 = new google.maps.LatLng(18.752944, 98.922417);
    var img = 'img/marker/kamluang-size.png'
    marker = new google.maps.Marker({
        position: point1,
        map: map,
        title: "this is point1",
        icon: img
    });

    marker.setMap(map);


    /*ที่เพิ่ม*/
    var infoText1 = '<div id="infobody"><b>หอคำหลวง</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11892258_887004004722083_4016895729225575503_n.jpg?oh=6c9ee05f176be55197d7c04227ac2cb3&oe=56F405B3&__gda__=1455413049_a586e0af413c3785a5c963067e50f632"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/place_detail.php?id=147>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: infoText1,
        maxWidth: 200
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow1.open(map, marker);

    });

    /*ที่เพิ่ม*/
    /*.หอคำหลวง*/

    /*เกษตร*/
    var point2 = new google.maps.LatLng(18.750302, 98.927083);
    var img2 = 'img/marker/tatung-size-3.png'
    marker2 = new google.maps.Marker({
        position: point2,
        map: map,
        title: "this is point2",
        icon: img2
    });

    marker2.setMap(map);


    /*ที่เพิ่ม*/
    var infoText2 = '<div id="infobody"><b>สวนเกษตรทฤษฎีใหม่</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11888050_884855228270294_3155935850680330175_n.jpg?oh=99e04c63edf1e01fdc5b554619b853d1&oe=56F1FEED"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/place_detail.php?id=147>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: infoText2,
        maxWidth: 200
    });

    google.maps.event.addListener(marker2, 'click', function () {
        infowindow2.open(map, marker2);

    });

    /*อุทยานหลวงราชพฤษ์*/
    var point3 = new google.maps.LatLng(18.746462, 98.925897);
    var img3 = 'img/marker/coon-size.png'
    marker3 = new google.maps.Marker({
        position: point3,
        map: map,
        title: "this is point3",
        icon: img3
    });

    marker3.setMap(map);


    /*ที่เพิ่ม*/
    var infoText3 = '<div id="infobody"><b>อุทยานหลวงราชพฤกษ์</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/12122820_1091259607553117_8379526435798375786_n.jpg?oh=07ddea55fad3ef307df5422c0e689611&oe=56EB6E52"></div>' + '<div> <a href=http://www.royalparkrajapruek.org>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: infoText3,
        maxWidth: 200
    });

    google.maps.event.addListener(marker3, 'click', function () {
        infowindow3.open(map, marker3);

    });


    /*โดมไม้เขตร้อน*/
    var point4 = new google.maps.LatLng(18.750604, 98.919122);
    var img4 = 'img/marker/dino-size.png'
    marker4 = new google.maps.Marker({
        position: point4,
        map: map,
        title: "this is point3",
        icon: img4
    });

    marker4.setMap(map);


    /*ที่เพิ่ม*/
    var infoText4 = '<div id="infobody"><b>โดมไม้เขตร้อนชื้น</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="img/thumnails/drom.jpg"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/place_detail.php?id=148>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: infoText4,
        maxWidth: 200
    });

    google.maps.event.addListener(marker4, 'click', function () {
        infowindow4.open(map, marker4);

    });
    
    /*ซุ้มผักมหัศจรรย์ */
    var point5 = new google.maps.LatLng(18.749152, 98.925965);
    var img5 = 'img/marker/vegetable.png';
    marker5 = new google.maps.Marker({
        position: point5,
        map: map,
        title: "this is point3",
        icon: img5
    });

    marker5.setMap(map);


    /*ที่เพิ่ม*/
    var infoText5 = '<div id="infobody"><b>ซุ้มผักมหัศจรรย์</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="http://www.royalparkrajapruek.org/main/gallery/J320131106133803.jpg"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/place_detail.php?id=148>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow5 = new google.maps.InfoWindow({
        content: infoText5,
        maxWidth: 200
    });

    google.maps.event.addListener(marker5, 'click', function () {
        infowindow5.open(map, marker5);

    });
    
    /*เรือนกล้วยไม้*/
    var point6 = new google.maps.LatLng(18.749898, 98.924804);
    var img6 = 'img/marker/rose-size.png';
    marker6 = new google.maps.Marker({
        position: point6,
        map: map,
        title: "this is point3",
        icon: img6
    });

    marker6.setMap(map);


    /*ที่เพิ่ม*/
    var infoText6 = '<div id="infobody"><b>เรือนกล้วยไม้</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="http://www.royalparkrajapruek.org/main/gallery/J020111212144015.jpg"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/place_detail.php?id=145>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow6 = new google.maps.InfoWindow({
        content: infoText6,
        maxWidth: 200
    });

    google.maps.event.addListener(marker6, 'click', function () {
        infowindow6.open(map, marker6);

    });
    
    /*อาคารโลกแมลง*/
    var point7 = new google.maps.LatLng(18.751767, 98.926211);
    var img7 = 'img/marker/bug.png';
    marker7 = new google.maps.Marker({
        position: point7,
        map: map,
        title: "this is point7",
        icon: img7
    });

    marker7.setMap(map);


    /*ที่เพิ่ม*/
    var infoText7 = '<div id="infobody"><b>อาคารโลกแมลง</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="http://www.royalparkrajapruek.org/main/gallery/J020110909192426.jpg"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/news_detail.php?id=161>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow7 = new google.maps.InfoWindow({
        content: infoText7,
        maxWidth: 200
    });

    google.maps.event.addListener(marker7, 'click', function () {
        infowindow7.open(map, marker7);

    });
    
    
    /*สวนโครงการหลวง*/
    var point8 = new google.maps.LatLng(18.753374, 98.924272);
    var img8 = 'img/marker/royal-logo.png';
    marker8 = new google.maps.Marker({
        position: point8,
        map: map,
        title: "this is point8",
        icon: img8
    });

    marker8.setMap(map);


    /*ที่เพิ่ม*/
    var infoText8 = '<div id="infobody"><b>สวนโครงการหลวง</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="http://www.thairoyalprojecttour.com/wp-content/uploads/2015/01/RPK-kitchen.png"></div>' + '<div> <a href=http://www.thairoyalprojecttour.com/?p=3642>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow8 = new google.maps.InfoWindow({
        content: infoText8,
        maxWidth: 200
    });

    google.maps.event.addListener(marker8, 'click', function () {
        infowindow8.open(map, marker8);

    });
    
    
    /*เรือนร่มไม้*/
    var point9 = new google.maps.LatLng(18.751489, 98.920814);
    var img9 = 'img/marker/tree.png';
    marker9 = new google.maps.Marker({
        position: point9,
        map: map,
        title: "this is point8",
        icon: img9
    });

    marker9.setMap(map);


    /*ที่เพิ่ม*/
    var infoText9 = '<div id="infobody"><b>เรือนร่มไม้</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="http://www.royalparkrajapruek.org/main/gallery/J020111207212027.jpg"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/place_detail.php?id=144>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow9 = new google.maps.InfoWindow({
        content: infoText9,
        maxWidth: 200
    });

    google.maps.event.addListener(marker9, 'click', function () {
        infowindow9.open(map, marker9);
    });
    
      /*เรือนไทยสี่ภาค*/
    var point10 = new google.maps.LatLng(18.751653, 98.922127);
    var img10 = 'img/marker/thai-house.png';
    marker10 = new google.maps.Marker({
        position: point10,
        map: map,
        title: "this is point10",
        icon: img10
    });

    marker10.setMap(map);


    /*ที่เพิ่ม*/
    var infoText10 = '<div id="infobody"><b>เรือนไทยสี่ภาค</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="http://www.royalparkrajapruek.org/main/gallery/J120110427151033.jpg"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/group4_detail.php?id=17>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow10 = new google.maps.InfoWindow({
        content: infoText10,
        maxWidth: 200
    });

    google.maps.event.addListener(marker10, 'click', function () {
        infowindow10.open(map, marker9);
    });
     
    /*สวนบัว*/
    
    var point11 = new google.maps.LatLng(18.750016, 98.920047);
    var img11 = 'img/marker/bua-size.png';
    marker11 = new google.maps.Marker({
        position: point11,
        map: map,
        title: "this is point10",
        icon: img11
    });

    marker11.setMap(map);


    /*ที่เพิ่ม*/
    var infoText11 = '<div id="infobody"><b>สวนบัว</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="#"></div>' + '<div> <a href=#>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow11 = new google.maps.InfoWindow({
        content: infoText11,
        maxWidth: 200
    });

    google.maps.event.addListener(marker11, 'click', function () {
        infowindow11.open(map, marker9);
    });
    
}
