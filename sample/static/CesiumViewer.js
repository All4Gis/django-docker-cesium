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
});

