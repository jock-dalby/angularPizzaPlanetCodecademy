PizzaPlanetApp.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Spag Bol',
      description: 'Spaghetti, beef bolognese',
      price: 14.95
    },
    {
      name: 'Mozzarella Pizza',
      description: 'classic cheese pizza',
      price: 12.95
    },
    {
      name: 'Fettucini Arrabiata',
      description: 'Fettucini, tomatoes, chilli, olive oil.',
      price: 13.95
    }
  ];

  $scope.extras = [
    {
      name: 'Rocket & Parmesan Salad',
      description: 'Fresh rocket, shaved parmesan',
      price: 4.50
    },
    {
      name: 'French fries',
      description: 'Housemade shoestring fries',
      price: 4.50
    },
    {
      name: 'Garlic Bread',
      description: 'house bread, minced garlic, olive oil.',
      price: 4.50
    }
  ];

}]);
