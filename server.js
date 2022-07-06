const db = require("./db/connection");
const express = require("express");
const inquirer = require("inquirer");
const cTable = require("console.table");



console.clear();

console.log(` _______  __   __  _______  ___      _______  __   __  _______  _______ 
|       ||  |_|  ||       ||   |    |       ||  | |  ||       ||       |
|    ___||       ||    _  ||   |    |   _   ||  |_|  ||    ___||    ___|
|   |___ |       ||   |_| ||   |    |  | |  ||       ||   |___ |   |___ 
|    ___||       ||    ___||   |___ |  |_|  ||_     _||    ___||    ___|
|   |___ | ||_|| ||   |    |       ||       |  |   |  |   |___ |   |___ 
|_______||_|   |_||___|    |_______||_______|  |___|  |_______||_______|
 __   __  _______  __    _  _______  _______  _______  ______           
|  |_|  ||   _   ||  |  | ||   _   ||       ||       ||    _ |          
|       ||  |_|  ||   |_| ||  |_|  ||    ___||    ___||   | ||          
|       ||       ||       ||       ||   | __ |   |___ |   |_||_         
|       ||       ||  _    ||       ||   ||  ||    ___||    __  |        
| ||_|| ||   _   || | |   ||   _   ||   |_| ||   |___ |   |  | |        
|_|   |_||__| |__||_|  |__||__| |__||_______||_______||___|  |_|        `);

console.log("");
console.log("");
console.log("");

const menuChoice = () => {
        
        inquirer.prompt([
                {
                        name: "menu",
                        message: "Make a selection",
                        type: "list",
                        choices: [
                                "View All Departments",
                                "View All Roles",
                                "View All Employees",
                                "Add a Department",
                                "Add a Role",
                                "Add an Employee",
                                "Update an Employee Role",
                                "Exit"]
                }
        ])
        .then(menuChoice => {
                runSwitch(menuChoice);
        });

};


function runSwitch(myMenuChoice) {

        switch (myMenuChoice.menu) {
                        
                case "View All Departments":
                        return viewAllDepts();
                

                case "View All Roles":
                        return viewAllRoles();
        

                case "View All Employees":
                        return viewAllEmployees();

                case "Add a Department":
                        return addDepartment();       

                case "Add a Role":
                        return addRole();
                
                case "Add an Employee":
                        return addEmployee();

                case "Update an Employee Role":
                        return addEmployeeRole();
                
                case "Exit":
                        process.exit();
        }
 
}




const viewAllDepts = () => {

        const sql = "SELECT tbl_dept.id AS id, tbl_dept.dept_name AS name FROM tbl_dept";
        db.query(sql, function (err, results) {
                if (err) throw err;
                
                console.table([],results);
                menuChoice();
        });
        
};



const viewAllRoles = () => {

        const sql = `SELECT tbl_role.id AS id, tbl_role.title AS title, tbl_dept.dept_name AS department, tbl_role.salary as salary
                FROM tbl_role 
                LEFT JOIN tbl_dept 
                ON tbl_role.dept_id = tbl_dept.id;`;

        db.query(sql, function (err, results) {
                if (err) throw err;
                
                console.table([],results);
                menuChoice();
        });

};



const viewAllEmployees = () => {

        console.log("made it to view all roles function");

        const sql = `SELECT tbl_emp.id, tbl_emp.first_name, tbl_emp.last_name, tbl_role.title AS title, tbl_dept.dept_name AS department, tbl_role.salary AS salary 
                FROM tbl_emp 
                LEFT JOIN tbl_role ON tbl_emp.role_id = tbl_role.id 
                LEFT JOIN tbl_dept ON tbl_emp.role_id = tbl_dept.id;`;

        db.query(sql, function (err, results) {
                if (err) throw err;
                
                console.table([],results);
                menuChoice();
        });
        
};



const addDepartment = () => {

        console.log("made it to add department");

        inquirer.prompt([
                {
                        name: "deptName",
                        message: "Name of new department:",
                        type: "input"
                }
        ])
        .then(function (response) {

                const sql = `INSERT INTO tbl_dept (dept_name) VALUES (?)`;
                const newDept = response.deptName;
                console.log(newDept);

                db.query(sql, newDept, function (err) {
                        if (err) throw err;

                        console.log("New department added successfully!");
                        console.log();
                        console.log();
                        menuChoice();
                });                
                
        });

};



const addRole = () => {

        const deptArr = getDeptList();

        inquirer.prompt([
                        
                {
                        name: "title",
                        message: "Title of new role:",
                        type: "input"
                },
                {
                        name: "salary",
                        message: "Salary of new role:",
                        type: "input"
                },
                {
                        name: "dept_id",
                        message: "Department ID of new role:",
                        type: "input"
                },
                {
                        name: "dept_idx",
                        message: "Select department of new role",
                        type: "list",
                        choices: deptArr
                }
        ])
        .then(function (response) {

                const sql = `INSERT INTO tbl_role (title, salary, dept_id) VALUES (?,?,?)`;

                const newRoleArr = [response.title, response.salary, response.dept_id];

                console.log(newRoleArr);

                db.query(sql, newRoleArr, function (err) {
                        if (err) throw err;

                        console.log("New Role added successfully!");
                        console.log();
                        console.log();
                        menuChoice();
                });                
                
        });

};



const addEmployee = () => {

        

        inquirer.prompt([
                {
                        name: "first_name",
                        message: "New employee first name:",
                        type: "input"
                },
                {
                        name: "last_name",
                        message: "New employee last name:",
                        type: "input"
                },
                {
                        name: "role_id",
                        message: "New employee role ID:",
                        type: "input"
                },
                {
                        name: "manager_id",
                        message: "New employee manager ID:",
                        type: "input"
                }
        ])
        .then(function (response) {

                const sql = `INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;

                const newEmployeeArr = [response.first_name, response.last_name, response.role_id, response.manager_id];

                console.log(newEmployeeArr);

                db.query(sql, newEmployeeArr, function (err) {
                        if (err) throw err;

                        console.log("New Employee added successfully!");
                        console.log();
                        console.log();
                        menuChoice();
                });                
              
        });

};


const getDeptList = () => {

        const sql = `SELECT dept_name FROM tbl_dept`;
        const tempArr = [];
        db.query(sql, function (err, results) {
                
                if (err) throw err;
                
                for (let i=0; i < results.length; i++) {
                        tempArr.push(results[i].dept_name);
                };
                
        });

        return tempArr;        

}; 





menuChoice();