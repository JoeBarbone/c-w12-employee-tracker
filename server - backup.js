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
                LEFT JOIN tbl_role 
                ON tbl_emp.role_id = tbl_role.id 
                LEFT JOIN tbl_dept 
                ON tbl_role.dept_id = tbl_dept.id;`;

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
                // {
                //         name: "dept_id",
                //         message: "Department ID of new role:",
                //         type: "input"
                // },
                {
                        name: "dept_name",
                        message: "Select department of new role",
                        type: "list",
                        choices: deptArr
                }

        ])
        .then(function (response) {

                const sqlDeptID = `SELECT ID FROM tbl_dept WHERE dept_name = (?)`;
                
                const params = response.dept_name;
                

                
                db.query(sqlDeptID, params, function(err, results) {

                        if (err) throw err;
                        
                        let deptID = results[0].ID;

                        const sql = `INSERT INTO tbl_role (title, salary, dept_id) VALUES (?,?,?)`;

                        const newRoleArr = [response.title, response.salary, deptID];

                        db.query(sql, newRoleArr, function (err) {
                                if (err) throw err;

                                console.log("New Role added successfully!");
                                console.log();
                                console.log();
                                menuChoice();
                        });               

                }); 
                
        });

};



const addEmployee = () => {

        const roleArr = getRoleList();
        const empArr = getManagerList();

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
                        name: "title",
                        message: "New employee role:",
                        type: "list",
                        choices: roleArr
                },
                {
                        name: "manager_id",
                        message: "New employee manager:",
                        type: "list",
                        choices: empArr
                }
        ])
        .then(function (response) {
                
                const sqlRoleID = `SELECT ID FROM tbl_role WHERE title = (?)`;
                const sqlRoleIDParams = response.title;


                // I need to SELECT ID FROM tbl_role WHERE title = the text title selected from the inquirer list
                // Then I need to SELECT ID FROM tbl_emp WHERE first_name and last_name = the first&last name selected from the inquirer list
                // Can I combine those two statements in one or should I break it up into two different queries? 
                //const sqlRoleID = `SELECT tbl_role.ID, tbl_emp.manager_id FROM tbl_role WHERE title = (?)`;
                //const sqlRoleIDParams = response.title;

                //const sqlEmpMgrID = `SELECT id FROM tbl_emp WHERE id = (?)`;
                //const sqlEmpMgrIDParams = response.manager_id;
                
                
                
                db.query(sqlRoleID, sqlRoleIDParams, function(err, results) {
                        if (err) throw err;
                        
                        let roleID = results[0].ID;
                        let empMgrID = results[0].ID;

                        // const roleID = `INSERT INTO tbl_role (title, salary, dept_id) VALUES (?,?,?)`;

                        // const newRoleArr = [response.title, response.salary, deptID];


                        const sql = `INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;

                        const newEmployeeArr = [response.first_name, response.last_name, roleID, empMgrID];

                        console.log(newEmployeeArr);

                        db.query(sql, newEmployeeArr, function (err) {
                                if (err) throw err;

                                console.log("New Employee added successfully!");
                                console.log();
                                console.log();
                                menuChoice();
                        });                
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



const getRoleList = () => {

        const sql = `SELECT title FROM tbl_role`;
        const tempArr = [];
        db.query(sql, function (err, results) {
                
                if (err) throw err;
                
                for (let i=0; i < results.length; i++) {
                        tempArr.push(results[i].title);
                };
                
        });

        return tempArr;        

};



const getManagerList = () => {

        const sql = `SELECT CONCAT(first_name, " ", last_name) AS manager FROM tbl_emp`;
        const tempArr = [];
        db.query(sql, function (err, results) {
                
                if (err) throw err;
                
                for (let i=0; i < results.length; i++) {
                        tempArr.push(results[i].manager);
                };
                
        });

        return tempArr;        

};





menuChoice();