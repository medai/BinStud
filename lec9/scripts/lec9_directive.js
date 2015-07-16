angular
    .module('app')
    .directive('lec9Directive', lec9Directive);

function lec9Directive(){
    var directive = {
        restrict: 'A',
        replace: true,
        template: "<img ng-src='{{photo.thumbnailUrl}}' />",
        link: link
    };
    return directive;

    function link(scope,element,attrs){
        element[0].addEventListener('click', function (e) {

            var back = document.createElement('div');
            var fullFoto = document.createElement('img');
            back.className = 'back';
            fullFoto.className = 'fullFoto';
            fullFoto.src = scope.photo.url;

            document.body.appendChild(back);
            back.appendChild(fullFoto);

            back.addEventListener('click', function (e) {
                document.body.removeChild(back);                
            });
        });
    };
};
