require(
    ["esri/Map",
        "esri/layers/FeatureLayer",
        "esri/layers/GeoJSONLayer",
        "esri/views/MapView",
        "esri/widgets/Legend",
        "esri/widgets/Expand",
        "esri/renderers/UniqueValueRenderer",
        "esri/widgets/Home"
    ],

    function(Map,
        FeatureLayer,
        GeoJSONLayer,
        MapView,
        Legend,
        Expand,
        UniqueValueRenderer,
        Home
    ) {
        const map = new Map({
            basemap: "topo-vector"
        });

        // Configures clustering on the layer. A cluster radius
        // of 100px indicates an area comprising screen space 100px
        // in length from the center of the cluster
        const clusterConfig = {
            type: "cluster",
            clusterRadius: "30px",
            // {cluster_count} is an aggregate field containing
            // the number of features comprised by the cluster
            popupTemplate: {
                content: "This cluster represents {cluster_count} trees.",
                fieldInfos: [{
                    fieldName: "cluster_count",
                    format: {
                        places: 0,
                        digitSeparator: true
                    }
                }]
            },
            clusterMinSize: "24px",
            clusterMaxSize: "60px",
            labelingInfo: [{
                deconflictionStrategy: "none",
                labelExpressionInfo: {
                    expression: "Text($feature.cluster_count, '#,###')"
                },
                symbol: {
                    type: "text",
                    color: "#004a5d",
                    font: {
                        weight: "bold",
                        family: "Noto Sans",
                        size: "12px"
                    }
                },
                labelPlacement: "center-center"
            }]
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



        const view = new MapView({
            container: "ageMapDiv",
            map: map,
            center: [-91.484, 40.094], // longitude, latitude
            zoom: 13
        });
    });