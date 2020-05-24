module.exports = class TeacherService {
    constructor(studentDataReader, teacherDataReader) {
        this.studentDataReader = studentDataReader;
        this.teacherDataReader = teacherDataReader;
    }

    getTeacher(id) {
        return this.teacherDataReader.getTeacher(id);
    }

    deleteTeacher(id) {
        let teacher = this.getTeacher(id);
        if (!teacher) {
            console.log("Error: No Matching Teacher Found");
        } else {
            this.teacherDataReader.deleteTeacher(id);
        }
    }

    updateTeacher(teacher) {
        let dataTeacher = this.getTeacher(teacher.id);
        if (!dataTeacher) {
            console.log("Error: No Matching Teacher Found");
        } else if (this.validateTeacher(teacher)) {
            this.teacherDataReader.updateteacher(teacher);
        } else {
            console.log("Error: Teacher object was invalid");
        }
    }

    addTeacher(teacher) {
        let dataTeacher = this.getTeacher(teacher.id);
        if (dataTeacher) {
            console.log("Error: Teacher Already Found With id: " + teacher.id);
        } else if (this.validateTeacher(student)) {
            this.teacherDataReader.addTeacher(teacher);
        } else {
            console.log("Error: Teacher object was invalid");
        }
    }

    searchByName(searchTerm) {
        let teacherData = this.teacherDataReader.getArrayFromFile();
        let matchingNames = [];
        for (let i = 0; i < teacherData.length; i++) {
            const teacher = teacherData[i];
            let teacherFullName = `${teacher.firstName} ${teacher.lastName}`.toLowerCase();
            if(teacherFullName.includes(searchTerm.toLowerCase())) {
                matchingNames.push(teacher);
            }
        }
        return matchingNames;


        // return this.teacherDataReader.getArrayFromFile()
        //     .filter(teacher => `${teacher.firstName} ${teacher.lastName}`.toLowerCase().includes(searchTerm));
    }

    doesStudentExist(id) {
        let student = this.studentDataReader.getStudent(id);
        if (student) {
            return true;
        } else {
            return false;
        }
    }

    // validateTeacher(teacher) {
    //     if (!this.doesStudentExist(teacher.studentId)) {
    //         console.log("Error: Could not find matching Student for given StudentId")
    //         return false;
    //     }
    //     if (isNaN(teacher.age)) {
    //         return false;
    //     }
    //     for (let i = 0; i < student.grades.length; i++) {
    //         const grade = student.grades[i];
    //         if (isNaN(grade)) {
    //             console.log("Error: One or more of the entered grades was invalid")
    //             return false;
    //         }
    //     }
    //     return true;
    // }
}
