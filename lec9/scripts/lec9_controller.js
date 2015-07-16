angular
	.module('app')
	.controller('listController', listController)

function listController(Photos) {
	var vm = this;
	vm.photos = Photos.getPhotos();
};