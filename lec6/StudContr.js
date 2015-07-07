
function Controller(obj){
    this.model = obj.model;
    this.elementId = obj.elementId;
    this.buttonId = obj.buttonId;
    this.buttonHandler = obj.buttonHandler;
}

Controller.prototype = {
    render: function(){
        return '<span>' + this.model.name + '</span><button id="student-exams-button">Increase exams taken</button>';
    },
    updateExams: function(){
        this.model.takeExam();      
    },    
    checkChanges: function(){
        var _this = this;
        setInterval(function(){
            if (_this.model.changed) {
                _this.render();
                _this.model.changed = false;
            }
        }, 100);
    },
};


var StudentController = new Controller({
    model: Student,
    elementId: '#student-container',
    buttonId: '#student-exams-button',
    buttonHandler: 'updateExams',

    render: function(){
        return '<span>' + this.model.name + '</span><button id="student-exams-button">Increase exams taken</button>';
    },   
    updateExams: function(){
        this.model.takeExam();
    },
});


$( document ).ready(function() {
    $(StudentController.elementId).append(StudentController.render());
    StudentController.checkChanges();

    $(StudentController.buttonId).click(function(){
        StudentController.updateExams();
        console.log("examsTaken: " + StudentController.model.examsTaken);
    })
});
