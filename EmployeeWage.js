//Welcome To Employee Wage Problem
//UC1-Employee is Absent or Present
{
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
} 
//Calculate Daily Employee Wage based on Full Time and part time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random()*3);
switch (empCheck) 
{
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee_Wage: " + empWage);