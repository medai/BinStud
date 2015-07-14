
angular.module('app', [])

    .controller('peopleController', function($scope) {
        $scope.showPeoplelist = true;
        $scope.people = 
            [{name: 'Александр', city: 'Киев', age: '40', avatar: 'Aleksandr.jpg'},
            {name: 'Андрей', city: 'Ленинград', age: '25', avatar: 'Andrey.jpg'},
            {name: 'Олег', city: 'Степановка', age: '32', avatar: 'Oleg.jpg'}];


        $scope.addPeople = function (){
            $scope.people.push({name: 'имя',
                                city: 'Киев',
                                age: Math.floor((Math.random()+1)*18),
                                avatar: 'Dinamo.jpeg' });
        };
        $scope.removePeople = function (index){
            $scope.people.splice(index,1);
        };
        $scope.toggleViewPeople = function(){
            $scope.showPeoplelist = !$scope.showPeoplelist;
        };
    })


    .controller('productsController', function($scope){
        $scope.showProductsList = true;
        $scope.products = [{ title: 'Мяч', price: '500грн'}, 
                            { title: 'Флаг', price: '200грн'}, 
                            { title: 'Бутсы', price: '800грн'}];


        $scope.addProduct = function (){
            $scope.products.push({title: 'товар', price: Math.floor((Math.random()+0.05)*500) + 'грн' });
        };
        $scope.removeProduct = function (index){
            $scope.products.splice(index,1);
        };
        $scope.toggleViewProducts = function(){
            $scope.showProductsList = !$scope.showProductsList;
        };
    });



