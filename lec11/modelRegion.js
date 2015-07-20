function ModelRegion() {
    this.data = require("./regions.json");
}

ModelRegion.prototype.getRegionsList = getRegionsList;
ModelRegion.prototype.addRegion = addRegion;

ModelRegion.prototype.getBigCitiesInRegionList = getBigCitiesInRegionList;
ModelRegion.prototype.addBigCityInRegion = addBigCityInRegion;
ModelRegion.prototype.deleteBigCity = deleteBigCity;
ModelRegion.prototype.updateBigCity = updateBigCity;


function getRegionsList() {
    var regionsList = [];
    this.data.forEach(function(region) {
        regionsList.push(region.name);
    });
    return regionsList;
}


function getBigCitiesInRegionList(regionName) {
    var bigCitiesList = [];
    for(var region in this.data) {
        if(this.data[region].name == regionName) {
            for(var bigCity in this.data[region].bigCities) {
                bigCitiesList.push(this.data[region].bigCities[bigCity].name);
            }
            break;
        }
    }
    return bigCitiesList;
}


function addRegion(name, capital) {
    var region = '{'
        + '"name":"' + name
        + '", "capital":"' + capital
        + '", "bigCities":[]}';
    this.data.push(JSON.parse(region));
}


function addBigCityInRegion(regionName, name, description) {
    for(var region in this.data) {
        if(this.data[region].name == regionName) {
            var bigCity = '{'
                + '"name":"' + name
                + '", "description":"' + description
                + '"}';
            this.data[region].bigCities.push(JSON.parse(bigCity));
            return true;
        }
    }
    return false;
}


function deleteBigCity(bigCityName) {
    for(var region in this.data) {
        for(var bigCity in this.data[region].bigCities) {
            if(this.data[region].bigCities[bigCity].name == bigCityName) {
                this.data[region].bigCities.splice(bigCity, 1);
                return true;
            }
        }
    }
    return false;
}


function updateBigCity(bigCityName, newName, newDescription) {
    for(var region in this.data) {
        for(var bigCity in this.data[region].bigCities) {
            if(this.data[region].bigCities[bigCity].name == bigCityName) {
                this.data[region].bigCities[bigCity].name = newName;
                this.data[region].bigCities[bigCity].description = newDescription;
                return true;
            }
        }
    }
    return false;
}


module.exports = ModelRegion;