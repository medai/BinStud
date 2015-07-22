/**
* Region.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	// connections: "localDiskDb",
  attributes: {
  },

	data: [
	  { "name": "Vinnicka_region",
	    "capital": "Vinnitsa",
	    "bigCities": [
	                  { "name": "Vinnitsa",
	                    "description": "The population of 372 432 people"},
	                  { "name": "Khmelnik",
	                    "description": "The population of 28 217 people"}
	                ]
	  },
	  { "name": "Volinska_region",
	    "capital": "Lutsk",
	    "bigCities": [
	                  { "name": "Lutsk",
	                    "description": "The population of 217 275 people"},
	                  { "name": "Kovel",
	                    "description": "The population of 69 195 people"},
	                  { "name": "Vladimir-Volyn",
	                    "description": "The population of 38 950 people"}
	                ]
	  },
	  { "name": "Dnipropetrovska_region",
	    "capital": "Dnipropetrovsk",
	    "bigCities": [
	                  { "name": "Dnipropetrovsk",
	                    "description": "The population of  987 022 people"},
	                  { "name": "Kryvyi Rih",
	                    "description": "The population of 646 748 people"},
	                  { "name": "Nikopol",
	                    "description": "The population of 119 627 people"}
	                ]
	  }  
	]


};

