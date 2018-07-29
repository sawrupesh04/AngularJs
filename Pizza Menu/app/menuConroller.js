app.controller('menuController',[
    '$scope',
    function($scope){
        $scope.model = {title: "Our Menu"};

        $scope.$watch('mainDish', function(newValue, oldValue){
            if(newValue === 'BBQ Chicken Pizza'){
                alert('You have selected BBQ Chicken Pizza')
            }
        });


        $scope.changeMainDish = function(item, cost){
            $scope.model.mainDish = item;
            $scope.model.cost = cost;
        }
        $scope.manualStyle = {
            'background-color': '#9fc1ea',
            'color': 'white'
        }
    }
]);
