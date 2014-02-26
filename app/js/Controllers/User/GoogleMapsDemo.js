angular.module('LendYourTools.controllers', []).
    controller('GoogleMapsDemo', ["$scope", "GeoLocationService",
        function($scope,GeoLocationService ) {


            $scope.homeclick = function() {
                alert("homeclick")
            }
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
            $scope.map.markerCoords={latitude:0,longitude:0}
            $scope.map.markers = [
                {
                pin: 'http://maps.google.com/mapfiles/marker.png',
                coords: {latitude:45.234,longitude:-93.417},
                options: { draggable: true },
                events: { dragend: function(im,event,Arguments) {
                    var mscope = $('#map-canvas').scope();
                    var loc = { latitude: im.position.d, longitude: im.position.e };
                    alert(loc.latitude + " " + $scope.map.marker.coords.latitude )
                }
                }},
                {
                    coords: {latitude:45.000,longitude:-93.417},
                    options: { draggable: true },
                    events: { dragend: function(im,event,Arguments) {
                        var mscope = $('#map-canvas').scope();
                        var loc = { latitude: im.position.d, longitude: im.position.e };
                        alert(loc.latitude + " " + $scope.map.marker.coords.latitude )
                    }
                    }}

            ];
            $scope.map.marker = $scope.map.markers[0];
            $scope.map.markers.options = {visible: true }

            GeoLocationService.GetLocation().then(function(data){
                $scope.coords = {latitude:data.coords.latitude, longitude:data.coords.longitude};
                $scope.map.center.latitude =$scope.coords.latitude;
                $scope.map.center.longitude =$scope.coords.longitude;

                debugger
            });


    }])