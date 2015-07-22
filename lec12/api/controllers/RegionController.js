/**
 * RegionController
 *
 * @description :: Server-side logic for managing regions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getRegionsList: getRegionsList,
	addRegion: addRegion,

	getBigCitiesInRegionList: getBigCitiesInRegionList,
	addBigCityInRegion: addBigCityInRegion,
	deleteBigCity: deleteBigCity,
	updateBigCity: updateBigCity,

  badRequest: badRequest,
  notFound: notFound,
  error: error, 

  find: getRegionsList,
  add: addRegion  
};


function getRegionsList(req, res) {
    var regionsList = [];
    Region.data.forEach(function(region) {
        regionsList.push(region.name);
    });
    return res.json(regionsList);
}
 

function getBigCitiesInRegionList(req, res) {
    var bigCitiesList = [];
    for(var region in Region.data) {
        if(Region.data[region].name == req.params.regionName) {
            for(var bigCity in Region.data[region].bigCities) {
                bigCitiesList.push(Region.data[region].bigCities[bigCity].name);
            }
            break;
        }
    }
    return res.json(bigCitiesList);
}


function addRegion(req, res) {
    var region = '{'
        + '"name":"' + req.param("name")
        + '", "capital":"' + req.param("capital")
        + '", "bigCities":[]}';
    Region.data.push(JSON.parse(region));
    return res.send(200, "Success");
}


function addBigCityInRegion(req, res) {
    for(var region in BigCity.data) {
        if(Region.data[region].name == req.params.regionName) {
            var bigCity = '{'
                + '"name":"' + req.params("name")
                + '", "description":"' + req.params("description")
                + '"}';
            Region.data[region].bigCities.push(JSON.parse(bigCity));
            return res.send(200, "Success");
        }
    }
    return res.send(404, " No Region");
}


function deleteBigCity(req, res) {
    for(var region in BigCity.data) {
        for(var bigCity in BigCity.data[region].bigCities) {
            if(Region.data[region].bigCities[bigCity].name == req.params.bigCityName) {
               Region.data[region].bigCities.splice(bigCity, 1);
               return res.send(200, "Success");
            }
        }
    }
    return res.send(404, "No Hotel");
}


function updateBigCity(req, res) {
    for(var region in Region.data) {
        for(var bigCity in Region.data[region].bigCities) {
            if(Region.data[region].bigCities[bigCity].name == req.params.bigCityName) {
               Region.data[region].bigCities[bigCity].name = req.params("name");
               Region.data[region].bigCities[bigCity].description = req.params("description");
               return res.send(200, "Success");
            }
        }
    }
    return res.send(404, "No Hotel");
}

function badRequest(req, res) {
  return res.send(400, "Bad Request");
}

function notFound(req, res) {
  return res.send(404, "Not Found");
}

function error(req, res) {
  return res.view("error", { message: "Error custom view" });
}
