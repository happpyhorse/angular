(function(){
    angular.module('LunchCheck', [])
    .controller('LCController', LCController);
    LCController.$inject = ['$scope'];

    function LCController($scope){
        $scope.lunch = "";
        $scope.message = "";
        $scope.CheckIt = function(){
            if (!$scope.lunch){
                $scope.message = "Please enter data first!";
            }else{
                var arrayOfLunch = $scope.lunch.split(',');
                var numberOfLunch = arrayOfLunch.length;
                $scope.message = advice(numberOfLunch);
            }
        }

        function advice(num){
            switch(true){
                case (0 < num && num<4):
                    return "Enjoy!";
                case (num > 3):
                    return "Too much!" ;
            }
        }
    }

})()