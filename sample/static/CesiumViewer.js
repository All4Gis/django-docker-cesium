// Mininal Viewer
var imageryProviders = Cesium.createDefaultImageryProviderViewModels();
var selectedImageryProviderIndex = 4;  // MapBox Street is 5th in the list.

var viewer = new Cesium.Viewer('cesiumContainer', {
	geocoder: false,
    imageryProviderViewModels: imageryProviders,
    selectedImageryProviderViewModel: imageryProviders[selectedImageryProviderIndex],
	homeButton : false,
	timeline : false,
	infoBox : false,
	sceneModePicker : false,
	selectionIndicator : false,
	navigationHelpButton : false,
	shadows : true,
	vrButton : false,
	animation : false,
	timeline : false
});

// Load GeoJson

var geojson = "/static/data/sample.json"
var promise = Cesium.GeoJsonDataSource.load(geojson);
promise.then(function(dataSource) {
    viewer.dataSources.add(dataSource);
	var entities = dataSource.entities.values;
	viewer.zoomTo(entities)
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if (entity.properties.hasProperty('prop0')) {
            var prop0 = entity.properties.prop0;
            var prop0Value = prop0.valueOf();
            if  (prop0Value.type ==='ellipse') {
                entity.ellipse = new Cesium.EllipseGraphics({
                    semiMinorAxis: prop0Value.semiMinorAxis,
                    semiMajorAxis: prop0Value.semiMajorAxis,
		    		height: prop0Value.height,
                    material: Cesium.Color.fromCssColorString(prop0Value.color)
                });
            }
        }
    }
});
