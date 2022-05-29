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

		// disabling map zoom controls
		mymap.touchZoom.disable();
		mymap.doubleClickZoom.disable();
		mymap.scrollWheelZoom.disable();
		mymap.boxZoom.disable();
		mymap.keyboard.disable();

		let Tajikistan_boundary = new L.geoJson([]);
		Tajikistan_boundary.addTo(mymap);

		// getting and adding country borders here
		$.ajax({
			dataType: "json",
			url: "json/geojson/Tajikistan.geojson",
			success: function(data) {
				$(data.features).each(function(key, data) {
					//setTimeout(function(){
						Tajikistan_boundary.addData(data);
					//}, 1000);
				});
			}
		});

		// list of regions with initial numbers of registered users
		const our_regions = {
		'ш. Душанбе': 0,
		'Суғд, ш. Хуҷанд': 0,
		'Суғд, ш. Исфара': 0,
		'Суғд, ш. Конибодом': 0,
		'Суғд, ш. Гулистон': 0,
		'Суғд, ш. Панҷакент': 0,
		'Суғд, ш. Истаравшан': 0,
		'Суғд, ш. Бӯстон': 0,
		'Суғд, ш. Истиқлол': 0,
		'Суғд, н. Айнӣ': 0,
		'Суғд, н. Ашт': 0,
		'Суғд, н. Бобоҷон Ѓафуров': 0,
		'Суғд, н. Деваштич': 0,
		'Суғд, н. Ҷаббор Расулов': 0,
		'Суғд, н. Зафаробод': 0,
		'Суғд, н. Кӯҳистони Мастчоҳ': 0,
		'Суғд, н. Мастчоҳ': 0,
		'Суғд, н. Спитамен': 0,
		'Суғд, н. Шаҳристон': 0,
		'Хатлон, ш. Кӯлоб': 0,
		'Хатлон, ш. Бохтар': 0,
		'Хатлон, ш. Норак': 0,
		'Хатлон, ш. Левакант': 0,
		'Хатлон, н. Балҷувон': 0,
		'Хатлон, н. Носири Хусрав': 0,
		'Хатлон, н. Кӯшониён': 0,
		'Хатлон, н. Вахш': 0,
		'Хатлон, н. Восеъ': 0,
		'Хатлон, н. Хуросон': 0,
		'Хатлон, н. Данғара': 0,
		'Хатлон, н. Дустӣ': 0,
		'Хатлон, н. Қубодиён': 0,
		'Хатлон, н. Ҷалолиддини Балхӣ': 0,
		'Хатлон, н. Ҷайҳун': 0,
		'Хатлон, н. Мир Сайид Алии ҳамадонӣ': 0,
		'Хатлон, н. Мӯъминобод': 0,
		'Хатлон, н. Панҷ': 0,
		'Хатлон, н. Темурмалик': 0,
		'Хатлон, н. Фархор': 0,
		'Хатлон, н. Ховалинг': 0,
		'Хатлон, н. Абдураҳмони Ҷомӣ': 0,
		'Хатлон, н. Шаҳритуз': 0,
		'Хатлон, н. Шамсиддин Шоҳин': 0,
		'Хатлон, н. Ёвон': 0,
		'ВМКБ, ш. Хоруғ': 0,
		'ВМКБ, н. Дарвоз': 0,
		'ВМКБ, н. Ванҷ': 0,
		'ВМКБ, н. Рўшон': 0,
		'ВМКБ, н. Шуғнон': 0,
		'ВМКБ, н. Роштқалъа': 0,
		'ВМКБ, н. Ишкошим': 0,
		'ВМКБ, н. Мурғоб': 0,
		'ШНТҶ, ш. Ваҳдат': 0,
		'ШНТҶ, ш. Турсунзода': 0,
		'ШНТҶ, ш. Роғун': 0,
		'ШНТҶ, ш. Ҳисор': 0,
		'ШНТҶ, н. Рашт': 0,
		'ШНТҶ, н. Нуробод': 0,
		'ШНТҶ, н. Лахш': 0,
		'ШНТҶ, н. Рӯдакӣ': 0,
		'ШНТҶ, н. Сангвор': 0,
		'ШНТҶ, н. Тоҷикобод': 0,
		'ШНТҶ, н. Файзобод': 0,
		'ШНТҶ, н. Шаҳринав': 0,
		'ШНТҶ, н. Варзоб': 0
		};

		// get JSON regions data from JSON
		$.getJSON('./json/ex_PublicStatistics.json', function(data) {
			//console.log(data);
			if(typeof data.Users[0][2]['3'] !== "undefined"){ // checking required property
				const reg_stat = data.Users[0][2]['3'];
				for (var reg_name in reg_stat) {
					if(our_regions.hasOwnProperty(reg_name)){
						//console.log(reg_name + ' --> ' + reg_stat[reg_name]);
						our_regions[reg_name]=reg_stat[reg_name];
					}
				}
				// make html list / select
				let regions_list = '<select id="region" class="form-control col-md-5" style="margin-left:auto;">\n';
				for (const [region_name, region_users_num] of Object.entries(our_regions)) {
					regions_list += '<option valie="'+region_name+'" rel="'+region_users_num+'">'+region_name+' ('+region_users_num+')</option>\n';
					//regions_list += '<option valie="'+region_name+'" rel="'+region_users_num+'">'+region_name+'</option>\n';
				}
				regions_list += '</select>\n';
				$('#regions_box').html(regions_list);
			} else {
				console.log('requird JSON obj property not found');
			}
		});

		const myStyle1 = {
			"color": "#007bff",
			"weight": 1,
			"opacity": 1
		};

		let regions_boundary = new L.geoJson([],{style:myStyle1});
		regions_boundary.addTo(mymap);

		///let lst1 = '';
		// load regions/districts borders from geojson file
		$.ajax({
			dataType: "json",
			url: "json/geojson/districts.geojson",
			success: function(data) {
				$(data.features).each(function(key, data) {
					regions_boundary.addData(data);
					
					//console.log(data);
					// for (let key in data) {
					// 	//console.log(key + " -> " + data[key]);
					// 	if(key=='properties'){
					// 		if(data[key] != null) {
					// 			//console.log(data[key]['adm2_n_en']);
					// 			lst1+=data[key]['adm2_n_en'].trim()+'\n';
					// 		}
					// 	}
					// 	// if(data[key].hasOwnProperty('properties')){
					// 	// 	console.log(key + " -> " + data[key]['properties']);
					// 	// }
					// }
				});
				///console.log(lst1);
			}
		});
		

		document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';
		//$(".leaflet-control-attribution a").css('display','none');
	}

});
