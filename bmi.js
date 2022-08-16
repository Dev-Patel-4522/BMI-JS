/*

BMI = mass / height **2 . (mass in kg and height in meter) .

DATA : Mark weight 78kg and is 1.69m tall.
        John weight 92kg and is 1.92m tall.

*/

var masMark = 78;
var heightMark = 1.69;
var masJohn = 92;
var heightJohn = 1.92;

var BMIMark = masMark/heightMark**2;
var BMIJohn = masJohn/heightJohn**2;

console.log('BMIMark\r\n  ')
        
console.log('     BMIJhon\n')
        

document.write(BMIMark  );
document.write(BMIJohn);

if (BMIMark >= BMIJohn)
    {
        console.log('Mark BMI is good')
        document.write('Mark BMI is good\n');
    } else
    {
        console.log('John BMI is good')
        document.write('Jhon BMI is good\n');
    }



var mark={
    name : "Mark",
    height : 1.69,
    weight : 78,
    calculateBMI : function(){
        mark.bmi = mark.weight/mark.height**2;
    }
}

var john={
    name : "John",
    height : 1.92,
    weight : 92,
    calculateBMI : function(){
        john.bmi = mark.weight/mark.height**2;
    }
}

mark.calculateBMI();
console.log(mark.bmi);
john.calculateBMI()
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log('Mark BMI is good');
} else {
    console.log('John BMI is good');
}