//Welcome To Employee Wage Problem
//UC1-Employee is Absent or Present
const IS_ABSENT = 0;
//Generate Random Number 0 or 1 
let empCheck = Math.floor(Math.random()*2);
if (empCheck == IS_ABSENT) 
{
    console.log("Employee is Absent");
} 
else 
{
    console.log("Employee is Present");
}