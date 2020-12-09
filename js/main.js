require(["esri/Map",
    "esri/layers/FeatureLayer",
    "esri/popup/ExpressionInfo",
    "esri/views/MapView"
], function(Map, FeatureLayer, ExpressionInfo, MapView) {
    var map = new Map({
        basemap: "topo-vector"
    });


     const ageLayer = new FeatureLayer({
        url: "https://services7.arcgis.com/zv5PbHd04c1UNAiH/arcgis/rest/services/Forestry_Test/FeatureServer/2"
    });
    map.add(ageLayer);

    ageLayer.popupTemplate = {
        title: "This tree has been growing since {AGE_ORIG}"
    };

    const speciesLayer = new FeatureLayer({
        url: "https://services7.arcgis.com/zv5PbHd04c1UNAiH/arcgis/rest/services/Forestry_Test/FeatureServer/0",
        featureReduction: clusterConfig,
        // popupTemplates can still be viewed on
        // individual features
        popupTemplate: {
            title: "Tree Species",
            content: "{TR_SP}"
        },

    });
    map.add(speciesLayer)

    map.add(layer);

    var view = new MapView({
        container: "mapDiv",
        map: map,
        center: [-91.484, 40.094], // longitude, latitude
        zoom: 13
    });
});