angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Tavoli', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tavoli = [{
    id: 0,
    name: 'Tavolo 0',
    lastText: 'Tavolo 0'
  }, {
    id: 1,
    name: 'Tavolo 1',
    lastText: 'Tavolo 1'
  }, {
    id: 2,
    name: 'Tavolo 2',
    lastText: 'Tavolo 2'
  }, {
    id: 3,
    name: 'Tavolo 3',
    lastText: 'Tavolo 3'
  }, {
    id: 4,
    name: 'Tavolo 4',
    lastText: 'Tavolo 4'
  }, {
    id: 5,
    name: 'Tavolo 5',
    lastText: 'Tavolo 5'
  }];

  return {
    all: function() {
      return tavoli;
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
;
