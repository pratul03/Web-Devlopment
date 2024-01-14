/* 
Write a program that grades students based on their
marks.
a. If greater than 90 then A Grade
b. If between 70 and 90 then Grade B
c. If between 50 and 70 then C Grade
d. Below 50 then an F grade
*/

function student_grade(grade){
    if(grade>100){
        console.log("Invalid Number.")
    }else if(grade>90){
        console.log("The student has got A grade.")
    }
    else if((grade <= 90) && (grade >= 70)){
        console.log("The student has got B grade.")
    }
    else if((grade <= 70) && (grade >= 50)){
        console.log("The student has got C grade.")
    }
    else{
        console.log("The student has got F grade.")
    }
}

console.log("-------------")
student_grade(110)
student_grade(97)
student_grade(90)
student_grade(69)
student_grade(49)

