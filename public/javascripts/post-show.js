mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbGxhMTE3NyIsImEiOiJjand1eTAyZHIwMDh5NGFwbzFtMmVmZ204In0.s5WldYjXjUf1Er5d26UCdQ';
    
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: post.coordinates,
      zoom: 5
    })
    
    
    // create a HTML element for each post location/marker
    var el = document.createElement('div');
    el.className = 'marker';
    
    // make a marker for each location and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(post.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
    .addTo(map);