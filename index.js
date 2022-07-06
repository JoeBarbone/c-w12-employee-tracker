const db = require("./db/connection");
const express = require("express");
const inquirer = require("inquirer");
const cTable = require("console.table");


console.log("XYZ Company - Employee Tracker");

console.log("");
console.log("");
console.log("");

const menuChoice = [
        
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

];
        
        
        





const viewAllDepts = () => {

        //console.log("made it to view all departments function");
        const sql = "SELECT * FROM tbl_dept";
        db.query(sql, function (err, results) {
               if (err) throw err;
                
               console.table([],results);
        
        });
        
        console.log("hello world!");

        init();

};



const viewAllRoles = () => {
        console.log("made it to view all roles function");
        const sql = `SELECT * FROM tbl_role`;
        db.query(sql, function (err, results) {
                if (err) throw err;
                
                console.table([],results);
        });
        menuChoice();
};



const viewAllEmployees = () => {
        console.log("made it to view all roles function");
        const sql = `SELECT * FROM tbl_emp`;
        db.query(sql, function (err, results) {
                if (err) throw err;
                
                console.table([],results);
        });
        menuChoice();
};



const addDepartment = () => {

        const addDept = () => {
        
                return inquirer.prompt([
                        {
                                name: "deptName",
                                message: "Enter name of new department",
                                type: "input"
                        }
                ])
                .then(addDept = () => {
                        const sql = `INSERT INTO tbl_dept (?)`;
                        db.query(sql,addDept);
                });
        };
};


function init() {
        const answer = inquirer.prompt(menuChoice)
        //console.log(answer)
        .then(function(menuChoice) {
                console.log(`menuChoice.menu: ${menuChoice.menu}`);
                switch (menuChoice.menu) {
                        
                        case "View All Departments":
                                viewAllDepts();
                                break;

                        case "View All Roles":
                                console.log("View All Roles");
                                viewAllRoles();
                                break;

                        case "View All Employees":
                                console.log("View All Employees");
                                viewAllEmployees();
                                break;

                        case "Add a Department":
                                console.log("Add a Department");
                                addDepartment();
                                break;        

                        case "Add a Role":
                                console.log("Add a role");
                                break;        
                        
                        case "Add an Employee":
                                console.log("Add an Employee");
                                break; 
                                
                        case "Update an Employee Role":
                                console.log("Update an Employee Role");
                                break;
                        
                        case "Exit":
                                break;
                }
                
        });
}




init();