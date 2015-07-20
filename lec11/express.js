var express = require("express");
var app = express();

var ModelRegion = require("./modelRegion.js");
var modelRegion = new ModelRegion();


app.route("/restapi/region")
    .get(function(req, res) {
        res.json(modelRegion.getRegionsList());
    })
    .post(function(req, res) {
        var name = req.query.name;
        var capital = req.query.capital;
        modelRegion.addRegion(name, capital);
        res.end();
    });

app.route("/restapi/region/:regionName/bigCity")
    .get(function(req, res) {
        res.json(modelRegion.getBigCitiesInRegionList(req.params.regionName));
    })
    .post(function(req, res) {
        var name = req.query.name;
        var description = req.query.description;
        modelRegion.addBigCityInRegion(req.params.regionName, name, description);
        res.end();
    });

app.route("/restapi/bigCity/:bigCityName")
    .put(function(req, res) {
        var name = req.query.name;
        var description = req.query.description;
        if(modelRegion.updateBigCity(req.params.bigCityName, name, description)) {
            res.end();
        } else res.status(404).end();
    })
    .delete(function(req, res) {
        if(modelRegion.deleteBigCity(req.params.bigCityName)) {
            res.end();
        } else res.status(404).end();
    });

app.listen(1337);
