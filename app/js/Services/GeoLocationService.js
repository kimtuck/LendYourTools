LendYourTools.factory('GeoLocationService', ['geolocation',

    function (geolocation) {
        var service = function() {

            var coords = { lat: 45, long: -95 };

            var onSuccess = function(data) {
                coords = {lat:data.coords.latitude, long:data.coords.longitude};
            }

            var onFailure = function() {
                // Executed if user does not allow geolocation, or if device does not support it

            }

            var getLocation = function() {
                var promise = geolocation.getLocation();
                promise.then(onSuccess,onFailure);
                return promise;
            }

            return {
                GetLocation: getLocation
            }
        }();
        return service;
    }
]);


