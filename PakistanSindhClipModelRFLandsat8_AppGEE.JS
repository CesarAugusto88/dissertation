var geometry2 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[67.49594238281252, 28.202891997943237],
          [69.34164550781252, 27.829485603598695],
          [69.79208496093752, 29.525793165982257],
          [67.92990234375002, 29.893165676995896]]]),
    pSolo = 
    /* color: #d69b38 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.MultiPoint(
            [[69.29601264867696, 27.993175390537257],
             [69.2690145883795, 28.03547725345768],
             [69.29726516465678, 28.23967516176104],
             [69.34019031080494, 28.256303732778232],
             [69.34834422621022, 28.250009598201864],
             [69.33746518644581, 28.251200408917285],
             [69.32087840589772, 28.25070896483686],
             [69.30842270263335, 28.25040114839347],
             [69.29975380309722, 28.248076202444746],
             [69.32915081390044, 28.245278639317295],
             [69.26289267689212, 28.249362488832933],
             [69.2915601268433, 28.233218978286306],
             [69.1427424314299, 28.275735224920282],
             [68.96380478164951, 28.549222253266304],
             [68.89873644123436, 28.656965581098188],
             [68.77266793819201, 28.506094937790422],
             [68.87017160030139, 28.537617926215457],
             [68.91085534663928, 28.48708609540429],
             [69.23355550468145, 28.905337609439762],
             [69.2447134941834, 28.878735399178385]]),
        {
          "Class": 0,
          "Name": "solo",
          "system:index": "0"
        }),
    pAgua = 
    /* color: #206aff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.MultiPoint(
            [[69.22896447026518, 28.076545376159306],
             [69.01783237983537, 27.90845952860934],
             [69.0250421576674, 27.955323607171877],
             [68.97283763421385, 27.909672755933062],
             [69.3387388790209, 28.294987638885573],
             [69.39023729210683, 28.246910747808244],
             [69.44104905968496, 28.266567444372836],
             [69.28895707970449, 28.243281422912016],
             [69.3055177882304, 28.110860969070735],
             [69.33092367201947, 28.113889161980474],
             [69.3710924342265, 28.145680024074963],
             [69.37830221205853, 28.191381771220026],
             [69.18810140639447, 28.193348626656096],
             [69.24465132964662, 28.257500544941035],
             [69.23829985869935, 28.239656947021135],
             [69.15298415435365, 28.227104153335404],
             [69.23967314971497, 28.205171031498676],
             [69.06675464358173, 28.06206056049619],
             [69.13541919436298, 28.06190907977086],
             [69.19447070803486, 28.072209282699546]]),
        {
          "Class": 1,
          "Name": "agua",
          "system:index": "0"
        }),
    pVegetacao = /* color: #13d641 */ee.Feature(
        ee.Geometry.MultiPoint(
            [[69.26661346855262, 28.24188315999876],
             [69.22558639946082, 28.23651448678558],
             [69.3051514476786, 28.25428300605897],
             [69.29991577568153, 28.244378366842106],
             [69.42112699221298, 28.34974225166611],
             [69.4825817651622, 28.354425418961654],
             [69.3540073938243, 28.35351901560585],
             [69.33048978518173, 28.339922036782824],
             [69.41391721438094, 28.342037236708055],
             [69.47262540529891, 28.335540417247394],
             [69.37409177492782, 28.40320870758607],
             [69.15058866213485, 28.387201804843297],
             [69.2683483667247, 28.382369057305013],
             [68.80790040399756, 28.46488556305142],
             [69.02282044794288, 28.450095433940408],
             [68.98196504022803, 28.457641676731882],
             [67.93210490467561, 28.411540709682125],
             [69.08872156724556, 28.161342362055734],
             [69.0475228367768, 28.145904521987894],
             [68.89062433824165, 28.093217499052596]]),
        {
          "Class": 2,
          "Name": "vegetacao",
          "system:index": "0"
        }),
    pUrbano = /* color: #ff3939 */ee.Feature(
        ee.Geometry.MultiPoint(
            [[69.30548084649953, 27.99431533267419],
             [69.3027557221404, 27.995262678477513],
             [69.30098546419057, 27.99583108196263],
             [69.30886699205668, 27.999884824643036],
             [69.18760295452776, 27.919920229776483],
             [69.1887992197484, 27.920237810333415],
             [69.18702359738054, 27.921010427793018],
             [69.186385231635, 27.921560262622425],
             [69.18854172768297, 27.921611661371184],
             [69.17358078149023, 27.918356197347368],
             [69.18488841485096, 27.933821100671743],
             [69.18737214039875, 27.934901679774416],
             [69.18647628258778, 27.93397276154855],
             [69.12054001406409, 27.90319538668943],
             [69.11718876256066, 27.901627338354977],
             [69.11587390771678, 27.901851089889153],
             [69.11958556283835, 27.902462238906818],
             [69.11903034557227, 27.90223942199843],
             [69.11828469146613, 27.901898084568117],
             [69.11814253438834, 27.90352069718389]]),
        {
          "Class": 3,
          "Name": "urbano",
          "system:index": "0"
        });
////// amostras balanceadas de pontos
///////////// Imagens Landsat-8 inundação. agosto e setembro de 2022, províncias do Paquistão (Sindh, Balochistan e Punjab)

var point = /* color: #98ff00 */ee.Geometry.Point([69.24082, 28.09966]);
// Adiciona o ponto ao mapa
// Map.addLayer(point, {color: '#98ff00'}, 'Ponto');

// Centraliza a visualização no ponto com o nível de zoom especificado
Map.centerObject(point, 13); // O segundo argumento (neste caso, 13) é o nível de zoom

//Dataset Availability: 2013-03-18T15:58:14Z–2023-11-13T12:30:02
var Landsat8_before = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_152040_20220225');

var Landsat8 = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_152040_20220905'); 

// Recorte as imagens originais
// var Landsat8_before = Landsat8_before.clip(geometry2);
// var Landsat8 = Landsat8.clip(geometry2);
Map.addLayer(Landsat8_before, {bands:'B6,B5,B4'}, 'Landsat-8 Antes da inundação 25/02/2022');
Map.addLayer(Landsat8, {bands:'B6,B5,B4'}, 'Landsat-8 Após a inundação 05/09/2022');

//// Define NDWI calculation functions
var NDWI = function(image){
  var ndwi = image.normalizedDifference(['B3', 'B5']).rename('NDWI');
  return image.addBands(ndwi);
};

var NDWI1 = function(image){
  var ndwi1 = image.normalizedDifference(['B3', 'B6']).rename('NDWI1'); // Troque B6 pelo índice apropriado
  return image.addBands(ndwi1);
};

var NDWI2 = function(image){
  var ndwi2 = image.normalizedDifference(['B3', 'B7']).rename('NDWI2'); // Troque B7 pelo índice apropriado
  return image.addBands(ndwi2);
};

// Aplicar NDWIs às imagens recortadas
var Landsat8_before_withNDWI = Landsat8_before
  .addBands(NDWI2(NDWI1(NDWI(Landsat8_before))))
  .float(); // converter para float 

var Landsat8_withNDWI = Landsat8
  .addBands(NDWI2(NDWI1(NDWI(Landsat8))))
  .float(); // converter para float  

// // ///////////////////////////////////////////////////////////////////////////
////////////////// function decode Feature Collection /////////////////////
function decodeFeatureCollection(featureCollection) {
  return featureCollection
    .map(function (feature) {
      var dict = feature.toDictionary()
      var keys = dict.keys()
        .map(function (key) {
          return ee.Number.parse(ee.String(key))
        })
      var value = dict.values().sort(keys).join()
      return ee.Feature(null, {value: value})
    })
    .aggregate_array('value')
    .join()
    .decodeJSON()
}

/////////////////////////////////////////////////////
// Código de treinamento e teste

// Obtém o tempo de início
var startTime = ee.Date(Date.now());

/////////// Import Model RF////////////////////
var featureCollection = ee.FeatureCollection('projects/ee-cesarmoraes/assets/random-forest-before') // modelo melhor
var randomForest = decodeFeatureCollection(featureCollection)
var classifier = ee.Classifier.decisionTreeEnsemble(randomForest)

var classification_before = Landsat8_before_withNDWI.classify(classifier)
var classification_after = Landsat8_withNDWI.classify(classifier)

///////////////////  informação de água (após e antes da inundação)
var Mapa_agua_apos = classification_after.select('classification').eq(1).selfMask()

var Mapa_agua_antes = classification_before.select('classification').eq(1).selfMask()

///////////////////Mapas de camadas
Map.addLayer(classification_before, {min:0, max:3, palette:['orange', 'blue', 'green', 'grey']}, 'Random Forest - Antes da inundação')
Map.addLayer(Mapa_agua_antes, {}, 'Água antes da inundação')

Map.addLayer(classification_after, {min:0, max:3, palette:['orange', 'blue', 'green', 'grey']}, 'Random Forest - Após da inundação')
Map.addLayer(Mapa_agua_apos, {}, 'Água após inundação')

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Estatísticas da Região ///////////////////////////////////////////
///// Máxima espacial da área após inundação
var area_agua = classification_after.select('classification').eq(1)
// Map.addLayer(area_agua, {min:0, max:1, palette: ['grey', 'blue']},'Água (binário)')
 
var areaImage = area_agua.multiply(ee.Image.pixelArea())
var area = areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: geometry2,
  scale: 30,
  maxPixels: 1e10
  })
var waterAreaSqKm = ee.Number(area.get('classification')).divide(1e6).round()
// print(waterAreaSqKm)

// print('Área de classificação de água após inundação:', area, ' km²')
// print('Classificação de água depois da inundação:', waterAreaSqKm, ' km²')

///// Máxima espacial da área antes da inundação //////////////////////////////////
var before_area_agua = classification_before.select('classification').eq(1)
// Map.addLayer(before_area_agua, {min:0, max:1, palette: ['grey', 'blue']},'Água (binário)')
 
var before_areaImage = before_area_agua.multiply(ee.Image.pixelArea())
var before_area = before_areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: geometry2,
  scale: 30,
  maxPixels: 1e10
  })
var before_waterAreaSqKm = ee.Number(before_area.get('classification')).divide(1e6).round()
// print(before_waterAreaSqKm)

// print('Área de classificação de água antes da inundação (metros):', before_area, 'm²')
print('Área de classificação de água antes da inundação:', before_waterAreaSqKm, 'km²')
print('Área de classificação de água após a inundação:', waterAreaSqKm, 'km²')
print('Diferença para área inundada:', waterAreaSqKm.subtract(before_waterAreaSqKm), 'km²')

//// Para realizar métricas do modelo importado //////
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Amostrar os dados   /////////////////////
/////////////////////////////////////////////////////////////////////////////
var TrainData = ee.FeatureCollection([pSolo, pAgua, pVegetacao, pUrbano])

// Sample training data (After)
var TrainSample = Landsat8_withNDWI.sampleRegions({
  collection: TrainData,
  properties: ['Class'],
  scale: 30, // Adjust the scale based on your needs
});
// Sample training data (Before)
var TrainSample_before = Landsat8_before_withNDWI.sampleRegions({
  collection: TrainData,
  properties: ['Class'],
  scale: 30, // Adjust the scale based on your needs
});

var trainingData = TrainSample.randomColumn();
var trainSet = trainingData.filter(ee.Filter.lessThan('random', 0.5));
var testSet = trainingData.filter(ee.Filter.greaterThanOrEquals('random', 0.5));

var classified = Landsat8_withNDWI.classify(classifier);
print(classified.getInfo())

Map.addLayer(classified, {min:0, max:3, palette:['orange', 'blue', 'green', 'grey']}, 'Classification RF')

///////////////////////////////////////////////////////////////
// Classificar o conjunto de testes (testSet) - dados completo: TrainSample 
var testClassified = TrainSample.classify(classifier);

// Calcular a matriz de confusão
var confusionMatrix = ee.ConfusionMatrix(testClassified
  .errorMatrix({
    actual: 'Class', // Nome da propriedade de classe real no conjunto de teste
    predicted: 'classification' // Nome da propriedade de classificação no resultado da classificação
  }));

// Calcular as métricas de produtor e consumidor
var producerAccuracy = confusionMatrix.producersAccuracy(); // Produtor Accuracy
var consumerAccuracy = confusionMatrix.consumersAccuracy(); // Consumer Accuracy

print('Confusion Matrix:', confusionMatrix);
print('Accuracy:', confusionMatrix.accuracy());
print('Producer Accuracy:', producerAccuracy);
print('Consumer Accuracy:', consumerAccuracy);

// Obtém o tempo de conclusão
var endTime = ee.Date(Date.now());

// Calcula a diferença de tempo em segundos
var elapsedTime = endTime.difference(startTime, 'second');

// Exibe o tempo de execução no console
print('Tempo de execução:', elapsedTime.getInfo(), 'segundos');

////////////////////////////////////////////////////////////////////////
///////////////// App Mapa Deslizante (MapSwipe) Inundação Paquistão 2022.
//////////////// Legenda - Comente as linhas abaixo (Ctrl+/) para retirar o mapa deslizante

// ////////////////////////////////////////////
/// Cria um mapa para para receber a imagem
var point = ee.Geometry.Point([69.24082, 28.09966]); // River Indu

// Crie o mapa esquerdo
var map_left = ui.Map();
map_left.addLayer(Landsat8_before, {bands: ["B6", "B5", "B4"]}, 'Landsat-8 25/02/2022');
map_left.addLayer(Mapa_agua_antes, {palette: ['blue']}, 'Classificação de água');
map_left.centerObject(point, 13); // Centralize o mapa no ponto

// Crie o mapa direito
var map_right = ui.Map();
map_right.addLayer(Landsat8, {bands: ["B6", "B5", "B4"]}, 'Landsat-8 05/09/2022');
// #483D8B (DarkSlateBlue) #DEB887 #CD5C5C 
map_right.addLayer(Mapa_agua_apos, {palette: ['cyan']}, 'Classificação de inundação');
map_right.addLayer(Mapa_agua_antes, {palette: ['blue']}, 'Água antes da inundação');
map_right.centerObject(point, 13); // Centralize o mapa no ponto

// Crie o mapSwipe para interagir entre os mapas
var mapSwipe = ui.SplitPanel({
  firstPanel: map_left,
  secondPanel: map_right,
  wipe: true
});

// Aplicar o mapSwipe
ui.root.widgets().reset([mapSwipe]);

// Link ambos os mapas
var linker = ui.Map.Linker([map_left, map_right]);

// Adicione labels de visualização aos mapas
var label_left = ui.Panel({style: {width: '323px'}})
  .add(ui.Label({
    value: 'Antes da inundação - Fevereiro 2022',
    style: {fontWeight: 'bold', fontSize: '18px', margin: '10px 5px'}
  }));

label_left.style().set('position', 'top-left');

var label_right = ui.Panel({style: {width: '323px'}})
  .add(ui.Label({
    value: 'Após a inundação - Setembro 2022',
    style: {fontWeight: 'bold', fontSize: '18px', margin: '10px 5px'}
  }));

label_right.style().set('position', 'top-right');

map_left.add(label_left);
map_right.add(label_right);
