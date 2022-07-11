# Challenge Week #12 - Employee Tracker

## User Story

AS A business owner  
I WANT to be able to view and manage the departments, roles, and employees in my company  
SO THAT I can organize and plan my business  

## Acceptance Criteria

GIVEN a command-line application that accepts user input  

WHEN I start the application  

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role  

WHEN I choose to view all departments  

THEN I am presented with a formatted table showing department names and department ids  

WHEN I choose to view all roles  

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role  

WHEN I choose to view all employees  

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to  

WHEN I choose to add a department  

THEN I am prompted to enter the name of the department and that department is added to the database  

WHEN I choose to add a role  

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database  

WHEN I choose to add an employee  

THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database  

WHEN I choose to update an employee role  

THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Video Walkthrough

[Employee Tracker Video](https://drive.google.com/file/d/1WOf80fwlX6M0S-Os66OM824sydeLBF2U/view)

## Summary/Languages
The Employee Tracker app is a command line app to track employee data which consists of ids, salaries, departments and roles. This app demonstrates the ability to interact with a MySQL database and perform complex queries and joins.  

"Update user role" functionality does not work yet. This will be addressed in a future update.  

![mysql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)  
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![node js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![json](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
## Acknowledgements
Front-end provided by 2U Educational Services
Back-end provided by Joseph Barbone/Andres Long (content tutor)/Gary (TA)