var wms_layers = [];
var format_kecamatan_0 = new ol.format.GeoJSON();
var features_kecamatan_0 = format_kecamatan_0.readFeatures(json_kecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan_0.addFeatures(features_kecamatan_0);var lyr_kecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan_0, 
                style: style_kecamatan_0,
    title: 'kecamatan<br />\
    <img src="styles/legend/kecamatan_0_0.png" /> Banyumanik<br />\
    <img src="styles/legend/kecamatan_0_1.png" /> Candi sari<br />\
    <img src="styles/legend/kecamatan_0_2.png" /> Gajah mungkur<br />\
    <img src="styles/legend/kecamatan_0_3.png" /> Gayamsari<br />\
    <img src="styles/legend/kecamatan_0_4.png" /> Genuk<br />\
    <img src="styles/legend/kecamatan_0_5.png" /> Gunungpati<br />\
    <img src="styles/legend/kecamatan_0_6.png" /> Mijen<br />\
    <img src="styles/legend/kecamatan_0_7.png" /> Ngaliyan<br />\
    <img src="styles/legend/kecamatan_0_8.png" /> Pedurungan<br />\
    <img src="styles/legend/kecamatan_0_9.png" /> Semarang barat<br />\
    <img src="styles/legend/kecamatan_0_10.png" /> Semarang selatan<br />\
    <img src="styles/legend/kecamatan_0_11.png" /> Semarang tengah<br />\
    <img src="styles/legend/kecamatan_0_12.png" /> Semarang timur<br />\
    <img src="styles/legend/kecamatan_0_13.png" /> Semarang utara<br />\
    <img src="styles/legend/kecamatan_0_14.png" /> Tembalang<br />\
    <img src="styles/legend/kecamatan_0_15.png" /> Tugu<br />\
    <img src="styles/legend/kecamatan_0_16.png" /> <br />'
        });

lyr_kecamatan_0.setVisible(true);
var layersList = [lyr_kecamatan_0];
lyr_kecamatan_0.set('fieldAliases', {'id': 'id', 'kecamatan': 'kecamatan', 'Luas': 'Luas', 'KH DAN BBLR 2019-2021_NO': 'KH DAN BBLR 2019-2021_NO', 'KH DAN BBLR 2019-2021_Kecamatan': 'KH DAN BBLR 2019-2021_Kecamatan', 'KH DAN BBLR 2019-2021_Puskesmas': 'KH DAN BBLR 2019-2021_Puskesmas', 'KH DAN BBLR 2019-2021_kelahiran hidup 2019': 'KH DAN BBLR 2019-2021_kelahiran hidup 2019', 'KH DAN BBLR 2019-2021_kelahiran hidup 2020': 'KH DAN BBLR 2019-2021_kelahiran hidup 2020', 'KH DAN BBLR 2019-2021_kelahiran hidup 2021': 'KH DAN BBLR 2019-2021_kelahiran hidup 2021', 'KH DAN BBLR 2019-2021_BBLR 2019': 'KH DAN BBLR 2019-2021_BBLR 2019', 'KH DAN BBLR 2019-2021_BBLR 2020': 'KH DAN BBLR 2019-2021_BBLR 2020', 'KH DAN BBLR 2019-2021_BBLR 2021': 'KH DAN BBLR 2019-2021_BBLR 2021', });
lyr_kecamatan_0.set('fieldImages', {'id': 'TextEdit', 'kecamatan': 'TextEdit', 'Luas': 'TextEdit', 'KH DAN BBLR 2019-2021_NO': 'TextEdit', 'KH DAN BBLR 2019-2021_Kecamatan': 'TextEdit', 'KH DAN BBLR 2019-2021_Puskesmas': 'TextEdit', 'KH DAN BBLR 2019-2021_kelahiran hidup 2019': 'TextEdit', 'KH DAN BBLR 2019-2021_kelahiran hidup 2020': 'TextEdit', 'KH DAN BBLR 2019-2021_kelahiran hidup 2021': 'TextEdit', 'KH DAN BBLR 2019-2021_BBLR 2019': 'TextEdit', 'KH DAN BBLR 2019-2021_BBLR 2020': 'TextEdit', 'KH DAN BBLR 2019-2021_BBLR 2021': 'TextEdit', });
lyr_kecamatan_0.set('fieldLabels', {'id': 'inline label', 'kecamatan': 'inline label', 'Luas': 'inline label', 'KH DAN BBLR 2019-2021_NO': 'inline label', 'KH DAN BBLR 2019-2021_Kecamatan': 'inline label', 'KH DAN BBLR 2019-2021_Puskesmas': 'inline label', 'KH DAN BBLR 2019-2021_kelahiran hidup 2019': 'inline label', 'KH DAN BBLR 2019-2021_kelahiran hidup 2020': 'inline label', 'KH DAN BBLR 2019-2021_kelahiran hidup 2021': 'inline label', 'KH DAN BBLR 2019-2021_BBLR 2019': 'inline label', 'KH DAN BBLR 2019-2021_BBLR 2020': 'inline label', 'KH DAN BBLR 2019-2021_BBLR 2021': 'inline label', });
lyr_kecamatan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});