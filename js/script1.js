$( document ).ready(function() {
    $("#year").text( "2021 - " + new Date().getFullYear());

    var map = L.map('smap').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'UwfWoVpE_cioaFr-Fa0Y-LLbfabiuBFJfwrnABSbAKc' //kDKwNMrfrsFeWXuszSdUX5cM2_dwQBM4zTt40Dcw1qI
}).addTo(map);
});
