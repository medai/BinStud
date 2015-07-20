var http = require("http");

var ModelRegion = require("./modelRegion.js");
var modelRegion = new ModelRegion();


http.createServer(function(req, res) {
    if(require('url').parse(req.url).pathname.indexOf("/restapi") > -1) {
        switch(req.method) {
            case "GET": doGet(req, res); break;
            case "POST": doPost(req, res); break;
            case "PUT": doPut(req, res); break;
            case "DELETE": doDelete(req, res); break;
        }
    } 
}).listen(1337, "127.0.0.1");


function doGet(req, res) {
    var pathName = require('url').parse(req.url).pathname;
    var path = parsePathname(pathName);

    if(pathName == "/restapi/region") {
        sendMessage(JSON.stringify(modelRegion.getRegionsList()), res, 200);
    }

    if(path[0] == "restapi" && path[1] == "region" && path[3] == "bigCity" && path.length == 4) {
        sendMessage(JSON.stringify(modelRegion.getBigCitiesInRegionList(path[2])), res, 200);
    }
}


function doPost(req, res) {
    var pathName = require('url').parse(req.url).pathname;
    var path = parsePathname(pathName);
    var query = require('url').parse(req.url).query;
    var jsonQuery = parseQuery(query);

    if(pathName == "/restapi/region") {
        modelRegion.addRegion(jsonQuery["name"], jsonQuery["capital"]);
        res.end();
    }

    if(path[0] == "restapi" && path[1] == "region" && path[3] == "bigCity" && path.length == 4) {
        modelRegion.addBigCityInRegion(path[2], jsonQuery["name"], jsonQuery["description"]);
        res.end();
    }
}


function doPut(req, res) {
    var path = parsePathname(require('url').parse(req.url).pathname);

    if(path[0] == "restapi" && path[1] == "bigCity" && path.length == 3) {
        var jsonQuery = parseQuery(require('url').parse(req.url).query);
        if(modelRegion.updateBigCity(path[2], jsonQuery["name"], jsonQuery["description"])) {
            res.end();
        }
    }
}


function doDelete(req, res) {
    var path = parsePathname(require('url').parse(req.url).pathname);

    if(path[0] == "restapi" && path[1] == "bigCity" && path.length == 3) {
        if(modelRegion.deleteBigCity(path[2])) {
            res.end();
        }
    }
}

function sendMessage(text, res, code) {
    res.writeHead(code, {
        "Content-Length": text.length,
        "Content-Type": "text/plain" });
    res.write(text);
}

function parseQuery(query) {
    var queryObj = '{"';

    if(query == null) return null;
    query = query.split("+").join(" ");

    while(query.length != 0) {
        var key = query.substring(0, query.indexOf("="));
        queryObj += key + '":"';
        query = query.substring(query.indexOf("=") + 1, query.length);

        if(query.indexOf("&") != -1) {
            var value = query.substring(0, query.indexOf("&"));
            queryObj += value + '","';
            query = query.substring(query.indexOf("&") + 1, query.length);
        } else {
            queryObj += query + '"}';
            return JSON.parse(queryObj);
        }
    }
}

function parsePathname(pathname) {
    var paths = [];

    pathname = pathname.split("+").join(" ");

    while(pathname.length != 0) {
        if(pathname.substring(pathname.length - 1) == "/") {
            // /path/path/ - case
            pathname = pathname.substring(1, pathname.length - 1);
        } else {
            // /path/path - case
            pathname = pathname.substring(1, pathname.length);
        }

        if(pathname.indexOf("/") != -1) {
            var path = pathname.substring(0, pathname.indexOf("/"));
            pathname = pathname.substring(pathname.indexOf("/"), pathname.length);
            paths.push(path);
        } else {
            paths.push(pathname);
            return paths;
        }
    }
}