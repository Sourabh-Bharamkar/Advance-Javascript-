// name , age , phone number, board marks of each student. Make a constructor to initialize the values. 



class student {
    static count=0;

    constructor(name,age,phoneNumber,boardMarks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.boardMarks=boardMarks;
        student.count++;
    }
    
    static numberOfStudents(){
        console.log(`Number of students are ${student.count}`)
    }


    eligible(){
        if(this.boardMarks>40)
        console.log(`${this.name} is eligible`);
        
        else
        console.log(`${this.name} is not eligible`);

    }

    eligibleForPlacements(marks){

        return (age)=>{
            if(this.boardMarks>marks && this.age>age)
                console.log(`${this.name} is eligible for placements`);
              else
                console.log(`${this.name} is not eligible for placements`);
            
        }

    }
    
}

let student1=new student("Sourabh",'20',9637118989,80);
let student2=new student("Sam",'20',8825634522,65);
let student3=new student("Mayank",'19',9966552355,36);
let student4=new student("Avi",'19',9834083267,40);
let student5=new student("Leo",'20',8961298243,85);

student.numberOfStudents()
// student1.eligible()
// student3.eligible()

student1.eligibleForPlacements(50)(18)
student2.eligibleForPlacements(50)(18)
student3.eligibleForPlacements(50)(18)
student4.eligibleForPlacements(50)(18)
student5.eligibleForPlacements(50)(18)

