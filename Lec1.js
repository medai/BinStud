function Man(name, age) {
	    this.name = name;
	    this.age  = age;
	}

	Man.prototype.live = function(n) {
	    this.is_live = n;
	   	alert(this.is_live);
	}

	var man = new Man("Vasja", 18);

	function Student() {
	    this.study = function(n) {
	    	this.is_study = n;
	    	alert(this.is_study);
	    }
	}
	var student = new Student();
	 
	// Прототипное наследование через функцию-конструктор
	Student.prototype = Man;

	// Наследование через конструкцию Object.create()
	Student.prototype = Object.create(Man.prototype);

	// Функция возвращает тип объекта
	function duckType(obj) {
		if('live' in obj) {
			alert('Объект является экземпляром Man');      
  	} else {
  		alert('Объект является экземпляром Student');
  	}
	}

	duckType(man);     // Объект является экземпляром Man
	duckType(student); // Объект является экземпляром Student

	function duckType2() {
		if('live' in this) {
				alert('Объект является экземпляром Man');      
    	}
    	else {
    		alert('Объект является экземпляром Student');
    	}
}

duckType2.call(man);     // Объект является экземпляром Man
duckType2.call(student); // Объект является экземпляром Student
