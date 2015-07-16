angular
    .module('app')
    .factory('Photos', Photos);

function Photos($http){
    var factory = {
        getPhotos: getPhotos       
    };
    return factory; 

    function getPhotos () {
        var album = [];

        $http.get('http://jsonplaceholder.typicode.com/photos').success( function (reply){
            for (img in reply) {
                album.push(reply[img]);
                if (reply[img].id == 15) break;
            };
        });
        return album;
    };
};