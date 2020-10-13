require(
    ["esri/Map",
        "esri/layers/FeatureLayer",
        "esri/views/MapView",
        "esri/widgets/Legend",
        "esri/widgets/Expand",
        "esri/renderers/UniqueValueRenderer",
        "esri/widgets/Home"
    ],

    function(Map,
        FeatureLayer,
        MapView,
        Legend,
        Expand,
        UniqueValueRenderer,
        Home
    ) {
        const ageMap = new Map({
            basemap: "topo-vector"
        });

        const ageLayer = new FeatureLayer({
            url: "https://services7.arcgis.com/zv5PbHd04c1UNAiH/arcgis/rest/services/Forestry_Test/FeatureServer/2"
        });
        map.add(ageLayer);

        const view = new MapView({
            container: "ageMapDiv",
            map: ageMap,
            center: [-91.484, 40.094], // longitude, latitude
            zoom: 13
        });
    });