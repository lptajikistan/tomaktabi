$( document ).ready(function() {

	let c_year = new Date().getFullYear();
    $("#year").text( "2021 - " + c_year);

	if($('#myMap').length>0) {

		$('#myMap').height($(window).height());
		
		var mymap = L.map('myMap').setView([38.8610, 71.2761], 8);

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 18,
			attribution: 'LP Tajikistan @ ' + c_year,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(mymap);

		//	L.marker([51.5, -0.09]).addTo(mymap)
		//	.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

		// var popup = L.popup();

		// var marker1 = new L.marker(mymap.getCenter()).addTo(mymap).bindPopup(popup);

		// function onMapClick(e) {

		// 	popup
		// 	//	.setLatLng(e.latlng)
		// 		.setContent("Координаты точки: " + e.latlng.lat.toFixed(4).toString() + ', ' + e.latlng.lng.toFixed(4).toString())
		// 	//	.openOn(mymap);

		// 	marker1.setLatLng(e.latlng).openPopup();

		// }

		// mymap.on('click', onMapClick);

		document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';
		//$(".leaflet-control-attribution a").css('display','none');
	}

});
