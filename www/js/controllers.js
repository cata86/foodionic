angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AccompagnatoreCtrl', function($scope, $stateParams, Tavoli) {
  $scope.tavoli = Tavoli.all();
})

.controller('SceltaTavoloCtrl', function($scope, $stateParams, Tavoli) {
  $scope.tavoli = $stateParams.inAttesa ? Tavoli.inAttesa() : Tavoli.all();
})

.controller('SceltaPietanzeCtrl', function($scope, $state, $stateParams, $ionicTabsDelegate, Categorie, Pietanze) {

  $scope.categoriaIdSelected = $stateParams.categoriaId;
  $scope.categorie = Categorie.all();
  console.log('test' + $scope.categoriaIdSelected);
  $scope.pietanzeCategoria = Pietanze.getPietanzeCategoria(1);  //TODO
  $scope.qntOrdinata = 10;

  $scope.cambiaQntOrdinata = function(idx, operation){
    if(operation === 'minus')
      console.log("idx minus: "+idx);
    else if(operation === 'plus')
      console.log("idx plus: "+idx);
  }
})

.controller('ModificaPietanzaCtrl', function($scope, $state, $stateParams, IngredientiPietanza) {
  $scope.ingredientiPietanza = IngredientiPietanza.getIngredientiPietanza($stateParams.pietanzaId);
})

;
