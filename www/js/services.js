angular.module('starter.services', [])

.factory('Tavoli', function(_) {
  var tavoli = [{
    id: 0,
    numero: 0,
    descrizione: 'Tavolo 0',
    stato: 'in_attesa'
  }, {
    id: 1,
    numero: 1,
    descrizione: 'Tavolo 1',
    stato: 'in_attesa'
  }, {
    id: 2,
    numero: 2,
    descrizione: 'Tavolo 2',
    stato: 'libero'
  }, {
    id: 3,
    numero: 3,
    descrizione: 'Tavolo 3',
    stato: 'ordinato'
  }];

  return {
    all: function() {
      return tavoli;
    },
    inAttesa: function() {
      return _.filter(tavoli, { 'stato': 'in_attesa' })
    },
    remove: function(tavolo) {
      tavoli.splice(tavoli.indexOf(tavolo), 1);
    },
    get: function(tavoloId) {
      for (var i = 0; i < tavoli.length; i++) {
        if (tavoli[i].id === parseInt(tavoloId)) {
          return tavoli[i];
        }
      }
      return null;
    }
  };
})

.factory('Categorie', function(_) {
  var categorie = [{
    id: 0,
    icona: '',
    descrizione: 'Extra'
  }, {
    id: 1,
    icona: '',
    descrizione: 'Primi'
  }, {
    id: 2,
    icona: '',
    descrizione: 'Secondi'
  }, {
    id: 3,
    icona: '',
    descrizione: 'Contorni'
  }, {
    id: 4,
    icona: '',
    descrizione: 'Pizze'
  }, {
    id: 5,
    icona: '',
    descrizione: 'Bevande'
  }, {
    id: 6,
    icona: '',
    descrizione: 'Dolci'
  }];

  return {
    all: function() {
      return categorie;
    },
    remove: function(categoria) {
      categorie.splice(categorie.indexOf(categoria), 1);
    },
    get: function(categoriaId) {
      for (var i = 0; i < categorie.length; i++) {
        if (categorie[i].id === parseInt(categoriaId)) {
          return categorie[i];
        }
      }
      return null;
    }
  }
})

.factory('Pietanze', function(_) {
  var pietanze = [{
    id: 0,
    icona: '',
    descrizione: 'Pasta al ragù',
    flgCoperto: 'false',
    categoriaId: 1
  }, {
    id: 1,
    icona: '',
    descrizione: 'Pasta al pomodoro',
    flgCoperto: 'false',
    categoriaId: 1
  }, {
    id: 2,
    icona: '',
    descrizione: 'Grigliata di carne',
    flgCoperto: 'false',
    categoriaId: 2
  }, {
    id: 3,
    icona: '',
    descrizione: 'Coperti',
    flgCoperto: 'true',
    categoriaId: 0
  }, {
    id: 4,
    icona: '',
    descrizione: 'Piatto vuoto',
    flgCoperto: 'false',
    categoriaId: 0
  }];

  return {
    all: function() {
      return pietanze;
    },
    getPietanzeCategoria: function(categoriaId) {
      return _.filter(pietanze, { 'categoriaId': categoriaId })
    },
    remove: function(pietanza) {
      pietanze.splice(pietanze.indexOf(pietanza), 1);
    },
    get: function(pietanzaId) {
      for (var i = 0; i < pietanze.length; i++) {
        if (pietanze[i].id === parseInt(pietanzaId)) {
          return pietanze[i];
        }
      }
      return null;
    }
  }
})

.factory('Ingredienti', function(_) {
  var ingredienti = [{
    id: 0,
    descrizione: 'Ragù'
  }, {
    id: 1,
    descrizione: 'Pomodoro'
  }];

  return {
    all: function() {
      return ingredienti;
    },
    remove: function(ingrediente) {
      ingredienti.splice(ingredienti.indexOf(ingrediente), 1);
    },
    get: function(ingredienteId) {
      for (var i = 0; i < ingredienti.length; i++) {
        if (ingredienti[i].id === parseInt(ingredienteId)) {
          return ingredienti[i];
        }
      }
      return null;
    }
  }
})

.factory('IngredientiPietanza', function(_, Ingredienti) {
  var ingredientiPietanza = [{
    id: 0,
    ingredienteId: 0,
    pietanzaId: 0
  }, {
    id: 1,
    ingredienteId: 1,
    pietanzaId: 2
  }];

  return {
    all: function() {
      return ingredientiPietanza;
    },
    getIngredientiPietanza: function(pietanzaId) {
      var ingredPietanza = _.filter(ingredientiPietanza, { 'pietanzaId': pietanzaId })
      for (var i = 0; i < ingredPietanza.length; i++) {
        let ingrediente = Ingredienti.get(ingredPietanza[i].ingredienteId);
        ingredPietanza[i].desIngrediente = ingrediente.descrizione;
      }
      return ingredPietanza;
    },
    remove: function(ingredientePietanza) {
      ingredientiPietanza.splice(ingredientiPietanza.indexOf(ingredientePietanza), 1);
    },
    get: function(ingredientePietanzaId) {
      for (var i = 0; i < ingredientiPietanza.length; i++) {
        if (ingredientiPietanza[i].id === parseInt(ingredientePietanzaId)) {
          return ingredientiPietanza[i];
        }
      }
      return null;
    }
  };
});
