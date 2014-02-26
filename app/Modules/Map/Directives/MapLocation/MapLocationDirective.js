LYTMap.directive('maplocation',
    [
    function() {
            return {
                scope: {
                    marker: '='
                },
                templateUrl:'Modules/Map/Directives/MapLocation/MapLocation.html',
                link:function (scope, element, attrs) {
                    debugger
                }
            };
        }
    ]
);

