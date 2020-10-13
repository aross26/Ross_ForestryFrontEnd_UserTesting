require(["esri/Map",
    "esri/layers/FeatureLayer",
    "esri/popup/ExpressionInfo",
    "esri/views/MapView"
], function(Map, FeatureLayer, ExpressionInfo, MapView) {
    var map = new Map({
        basemap: "topo-vector"
    });


    const layer = new FeatureLayer({
        // URL to the service
        url: "https://services7.arcgis.com/zv5PbHd04c1UNAiH/arcgis/rest/services/Forestry_Test/FeatureServer/2"
    });

    layer.popupTemplate = {
        title: "This tree has been growing since {AGE_ORIG}"
    };

    map.add(layer);

    var view = new MapView({
        container: "mapDiv",
        map: map,
        center: [-91.484, 40.094], // longitude, latitude
        zoom: 13
    });
});