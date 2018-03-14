$(document).ready(function(){
   

function Main() {
function Set_URL() {
	var Base_URL = ('url(https://noindex.landing-sssr.com/dom/') 
	$(".banner").css('background-image', Base_URL+"images/banner.jpg)");
	$(".w3_agile_logo .h1 a").css('background-image', Base_URL+"images/home.png)");
	$("#toTop").css('background-image', Base_URL+"images/arrow.png)");
	$(".skills").css('background-image', Base_URL+"images/6.jpg)");
	$(".newsletter").css('background-image', Base_URL+"images/8.jpg)");

    
    $(".nedvigimost ").append('<li><a href="kontakt.html">комнаты</a></li>');
    $(".nedvigimost ").append('<li><a href="kontakt.html">1 комнатные квартиры</a></li>');
    $(".nedvigimost ").append('<li><a href="kontakt.html">2 комнатные квартиры</a></li>');
    $(".nedvigimost ").append('<li><a href="kontakt.html">3 комнатные квартиры</a></li>');
    $(".nedvigimost ").append('<li><a href="kontakt.html">4 комнатные квартиры</a></li>');
    $(".nedvigimost ").append('<li><a href="kontakt.html">земельные участки</a></li>');
    $(".nedvigimost ").append('<li><a href="kontakt.html">дома</a></li>');
    $(".nedvigimost ").append('<li><a href="kontakt.html">огороды</a></li>');
    $(".nedvigimost ").append('<li><a href="kontakt.html">гаражи</a></li>');

    $(".statii ").append('<li><a href="kontakt.html">как продавать недвижимость</a></li>');

    

}
Set_URL()
//яндекс карта
ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [58.140961, 52.670334],
            zoom: 17
        });

        myPlacemark = new ymaps.Placemark([58.140961, 52.670334], { 
            hintContent: 'Москва!', 
            balloonContent: 'Столица России' 
        });

        myMap.geoObjects.add(myPlacemark);
    }
//яндекс карта

}
Main()
});
