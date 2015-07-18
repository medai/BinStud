// Создание конструктора Man
function Man(name, age) {
	this.name = name;
	this.age  = age;
};

// Создание методов для обектов Man (в прототипе)
Man.prototype.live = function() {
	console.log("Человек " + this.name + " ему " + this.age + " лет.");
};
// Проверка
var man = new Man("Vasja", 18);
man.live();
console.log(man.name);


// Создание конструктора Student с методом
function Student() {
	Man.apply(this, arguments);
	this.study = function() {
	  console.log(this.name + " - студент, он учится.");	
	}; 	
};

// Прототипное наследование через функцию-конструктор
Student.prototype = new Man();
Student.prototype.constructor = Student;
// Проверка
var student1 = new Student("Александр", 25);
student1.live();
student1.study();

// Наследование через конструкцию Object.create()
Student.prototype = Object.create(Man.prototype);
Student.prototype.constructor = Student;
// Проверка
var student2 = new Student('Влад', 21);
student2.live();
student2.study();


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
	console.log(this.name + " работает преподавателем в " + this.university + ".");
};

var students = ["Иван", "Сергей", "Петя", "Коля"];

Professor.prototype.teach = function(){
	console.log(this.name + " Преподает у " + students.length + " студентов.");
};
// Проверка 
var professor = new Professor("Николай", 45, "КПИ");
professor.live();
professor.work_in();
professor.teach();


// Функция возвращает тип объекта, вариант 1
function duckType(obj) {
	if("study" in obj && typeof obj.study === 'function') 
		console.log('Объект является экземпляром Student');
	else 
		console.log('Объект является экземпляром Man');
}
duckType(man);     // Объект является экземпляром Man
duckType(student1); // Объект является экземпляром Student

// Функция возвращает тип объекта, вариант 2
function duckType2() {
	if("study" in this && typeof this.study === 'function') 
		console.log('Объект является экземпляром Student');
	else 
		console.log('Объект является экземпляром Man');
}
duckType2.call(man);     // Объект является экземпляром Man
duckType2.call(student1); // Объект является экземпляром Student
