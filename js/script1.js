$( document ).ready(function() {

	let c_year = new Date().getFullYear();
    $("#year").text( "2021 - " + c_year);

    $('.carousel').carousel({
        interval: 8000
    })

    $("#vplay").delay(500).fadeIn(700);

    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. 
        // Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;origin=https://tomaktabi.tj"); 
    })
      
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    });

    function getStatV1(filepath='./json/ex_PublicStatistics.json')
    {
        $.getJSON(filepath, function(data) {
			//console.log(data);
            // Content
			if(typeof data.Content[0] !== "undefined"){
                let content_cat={
                    'Барномаҳои таълимӣ': 0,
                    'Дастурҳои методӣ': 0,
                    'Курсҳои такмили ихтисос': 0,
                    'Машғулият ва бозиҳо': 0,
                    'Мақолаҳо': 0,
                    'Нақшаи таълимӣ': 0,
                    'Омор': 0,
                    'Санадҳо': 0
                }
				const stat_cont = data.Content[0];
				for (var cont_cat in stat_cont) {
					if(content_cat.hasOwnProperty(cont_cat)){
						console.log(cont_cat + ' --> ' + stat_cont[cont_cat]);
						///content_cat[cont_cat]=stat_cont[cont_cat];
					}
				}
				
			} else {
				console.log('requird JSON obj property not found');
			}

		});
    }

    //getStatV1();
        

});
