// Создание конструктора Man
function Man(name, age) {
	this.name = name;
	this.age  = age;
};
// Создание методов для обектов Man (в прототипе)
Man.prototype.live = function() {
	return ("Человек " + this.name + " ему " + this.age + " лет.");
};



// Создание конструктора Student с методом
function Student() {
	Man.apply(this, arguments);
	this.study = function() {
	  return (this.name + " - студент, он учится.");	
	}; 	
};

// Прототипное наследование через функцию-конструктор
Student.prototype = new Man();
Student.prototype.constructor = Student;

// Наследование через конструкцию Object.create()
Student.prototype = Object.create(Man.prototype);
Student.prototype.constructor = Student;



// Создание конструктора Professor с добавлением свойств
function Professor(name, age, university) {
  Man.apply(this, arguments)
	this.university = university;
};

// Прототипное наследование через функцию-конструктор
Professor.prototype = new Man();
Professor.prototype.constructor = Professor;

// Создание методов для обектов Professor (в прототипе)
Professor.prototype.work_in = function(){
	return (this.name + " работает преподавателем в " + this.university + ".");
};

var students = ["Иван", "Сергей", "Петя", "Коля"];

Professor.prototype.teach = function(){
	return(this.name + " Преподает у " + students.length + " студентов.");
};



// Функция возвращает тип объекта, вариант 1
function duckType(obj) {
	if("study" in obj && typeof obj.study === 'function') 
		return ('Объект является экземпляром Student');
	else 
		return ('Объект является экземпляром Man');
}

// Функция возвращает тип объекта, вариант 2
function duckType2() {
	if("study" in this && typeof this.study === 'function') 
		return ('Объект является экземпляром Student');
	else 
		return ('Объект является экземпляром Man');
}
