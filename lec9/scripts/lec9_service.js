angular
  .module('app')
  .service('Photos', Photos);

function Photos($resource){

  this.getPhotos = function () {
    var album = [];

    $resource('http://jsonplaceholder.typicode.com/photos').query(function (reply) {
      for (img in reply) {
        album.push(reply[img]);
        if (reply[img].id === 15) break;
      };
    });
    return album;
  }; 
};
