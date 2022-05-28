$( document ).ready(function() {

	let c_year = new Date().getFullYear();

	if($('#myMap').length>0) {

		//$('#myMap').height($(window).height());
		
		var mymap = L.map('myMap', { zoomControl: false }).setView([38.8610, 71.2761], 7);

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 18,
			attribution: 'LP Tajikistan @ ' + c_year,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(mymap);

		mymap.touchZoom.disable();
		mymap.doubleClickZoom.disable();
		mymap.scrollWheelZoom.disable();
		mymap.boxZoom.disable();
		mymap.keyboard.disable();

		let Tajikistan_boundary = new L.geoJson([]);
		Tajikistan_boundary.addTo(mymap);

		$.ajax({
			dataType: "json",
			url: "json/geojson/Tajikistan.geojson",
			success: function(data) {
				$(data.features).each(function(key, data) {
					Tajikistan_boundary.addData(data);
				});
			}
		});

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
