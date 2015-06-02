db.lecture3.find(
  {$and:
    [
      {"scores.score":{$gt:93}},
      {"scores.score":{$lt:95}}
    ]
  }
)



db.lecture3.aggregate([ 
	{ $unwind : "$scores" }, 
	{ $match : 
  	{$and : 
		  [
			  {"scores.type" : "exam"},
		  	{ "scores.score" : { $gt : 90 } }
		  ]
		} 
	}
])





For first student:
db.lecture3.update(
  {"name":"Vinnie Auerbach"},
  {$set: {accepted: true}}
)

For students:
db.lecture3.update(
  {"name":"Vinnie Auerbach"},
  {$set: {accepted: true}},
  {multi: true}
)



