angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AccompagnatoreCtrl', function($scope, $stateParams, Tavoli) {
  $scope.tavoli = Tavoli.all();
})

.controller('SceltaTavoloCtrl', function($scope, $stateParams, Tavoli) {
  $scope.tavoli = $stateParams.inAttesa ? Tavoli.inAttesa() : Tavoli.all();
})

.controller('SceltaPietanzeCtrl', function($scope, $state, $stateParams, $ionicTabsDelegate, Categorie, Pietanze, IngredientiPietanza, Ingredienti) {

  $scope.categoriaIdSelected = $stateParams.categoriaId;
  $scope.categorie = Categorie.all();
  console.log('test' + $scope.categoriaIdSelected);
  $scope.pietanzeCategoria = Pietanze.getPietanzeCategoria(1);  //TODO

  $scope.ingredientiPietanza = IngredientiPietanza.getIngredientiPietanza(0);  //TODO



})

;
