function initMap() {
	var uluru = {lat: 20.707938, lng: -100.446606};
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	center: uluru
	});
	var marker = new google.maps.Marker({
	position: uluru,
	map: map
	});
}