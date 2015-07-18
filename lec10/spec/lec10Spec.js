describe("Тесты. lec10", function() {

    var man;
    var student1;
    var student2;   
    var professor;

    beforeEach(function() {
        man = new Man("Сергей", 18);
        student1 = new Student("Александр", 25);
        student2 = new Student('Влад', 21);
        professor = new Professor("Николай", 45, "КПИ");
        // students = ["Иван", "Сергей", "Петя", "Коля"];
    });

    describe('Man', function() {
        it('Свойства обьекта', function () {
            expect(man.name).toEqual("Сергей");
            expect(man.age).toBeDefined();
            expect(man.university).toBeUndefined();
        });
        it('Имя из букв и цифр', function () {                
            expect(man.name).toMatch(/([A-Za-zа-яА-Я0-9-]+)/i);
        });
        it('Методы обьекта', function () {
            expect(man.live()).toEqual("Человек " + man.name + " ему " + man.age + " лет.");
        });
    });

    describe("Student", function() {
        it('Наследуется из Man', function(){
            expect(student1 instanceof Man).toBe(true);
            expect(student2 instanceof Student).toBe(true);
        });
        it('Имя из букв и цифр', function () {
            expect(student2.name).toMatch(/([A-Za-zа-яА-Я0-9-]+)/i);
        });
        it('Свойства обьекта', function () {
            expect(student1.name).toBeDefined();
            expect(student2.age).toEqual(21);
        });
        it('Методы обьекта', function () {      
            expect(student1.live()).toEqual("Человек " + student1.name + " ему " + student1.age + " лет.");
            expect(student2.live).toBeTruthy();
            expect(student1.study).toBeTruthy();
            expect(student2.study).not.toThrow();
        });
    });

    describe("Professor", function() {
        it('Наследуется из Man', function(){
            expect(professor instanceof Man).toBe(true);
            expect(professor instanceof Professor).toBe(true);
        });
        it('Свойства обьекта', function () {
            expect(professor.name).toBeDefined();
            expect(professor.age).toBeDefined();
            expect(professor.university).toEqual("КПИ");            
        });
        it('Имя из букв и цифр', function () {
            expect(professor.name).toMatch(/([A-Za-zа-яА-Я0-9-]+)/i);
        });
        it('Методы обьекта собственные', function () {      
            expect(professor.teach()).toEqual(professor.name + " Преподает у " + students.length + " студентов.");
            expect(professor.work_in).toBeTruthy();
            expect(professor.teach).toBeTruthy();
            expect(professor.work_in).not.toThrow();
        });

        it('Методы обьекта из прототипа', function () {      
            expect(professor.live()).toEqual("Человек " + professor.name + " ему " + professor.age + " лет.");
            expect(professor.live).toBeTruthy();
        });
    });

    describe("duckType function", function(){
        it("Возврат типа объекта", function(){
            expect(duckType(man)).toEqual('Объект является экземпляром Man');
            expect(duckType(student1)).toEqual('Объект является экземпляром Student');
            expect(duckType(professor)).toEqual('Объект является экземпляром Man');
        });
    });

    describe("duckType2 function", function(){
        it("Возврат типа объекта", function(){
            expect(duckType(man)).toEqual('Объект является экземпляром Man');
            expect(duckType(student1)).toEqual('Объект является экземпляром Student');
            expect(duckType(professor)).toEqual('Объект является экземпляром Man');
        });
    });    
});
