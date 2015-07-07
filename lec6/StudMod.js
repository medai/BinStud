function Model(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.year = obj.year;
    this.examsTaken = obj.examsTaken || 0;
    this.changed = false;
}

Model.prototype.takeExam = function (){
    this.examsTaken++;
    this.changed = true;  
}

var Student = new Model({
    name: 'Piotr',
    age: 22,
    year: 5,
    examsTaken: 2,
});
