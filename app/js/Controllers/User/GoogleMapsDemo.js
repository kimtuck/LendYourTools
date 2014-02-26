angular.module('LendYourTools.controllers', []).
    controller('GoogleMapsDemo', ["$scope", "GeoLocationService",
        function($scope,GeoLocationService ) {

            $scope.coords = { lat: 44, long: -45 };
            $scope.map = {
                zoom: 8,
                center: {
                    latitude: $scope.coords.lat,
                    longitude: $scope.coords.long
                },
                options: {
                   //mapTypeId: google.maps.MapTypeId.TERRAIN
                },
                events: {
                    //click: function() { alert("hi")}
                    },
                pin: 'http://maps.google.com/mapfiles/marker.png',
            };
            $scope.map.infoWindow = { show: true, coords: $scope.map.center }
            $scope.map.marker = {
                coords: angular.copy($scope.map.center),
                options: { draggable: true },
                events: { dragend: function(im,event,Arguments) {
                    debugger
                    var mscope = $('#m').scope();
                    var loc = { latitude: im.position.d, longitude: im.position.e };
                    alert(loc.latitude + " " + $scope.map.marker.coords.latitude )
                }
                }};

            GeoLocationService.GetLocation().then(function(data){
                $scope.coords = {latitude:data.coords.latitude, longitude:data.coords.longitude};
                $scope.map.center.latitude =$scope.coords.latitude;
                $scope.map.center.longitude =$scope.coords.longitude;
                debugger
                $scope.map.marker.coords = angular.copy($scope.coords);
            });


    }])