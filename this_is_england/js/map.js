var map = L.map('englandMap');
L.tileLayer('', {});
L.geoJson([geoJSON], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: function (feature, layer) {
        var popupContent = "<p>I started out as a GeoJSON " +
                feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
        }

        layer.bindPopup(popupContent);
    },

    pointToLayer: function (feature, latlng) {
        console.log(feature);
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);