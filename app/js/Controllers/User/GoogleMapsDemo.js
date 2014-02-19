angular.module('LendYourTools.controllers', []).
    controller('GoogleMapsDemo', ["$scope", "GeoLocationService",
        function($scope,GeoLocationService ) {

            $scope.coords = { lat: 44, long: -45 };
            $scope.map = {
                center: {
                    latitude: $scope.coords.lat,
                    longitude: $scope.coords.long
                },
                zoom: 17,
                draggable: true
            };

            GeoLocationService.GetLocation().then(function(data){
                debugger
                $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
                $scope.map.center.latitude =$scope.coords.lat;
                $scope.map.center.longitude =$scope.coords.long;
                console.log("at ")
                console.log($scope.map.center)
            });

            $scope.pin='http://maps.google.com/mapfiles/marker.png';

    }])