const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");


inquirer.prompt([{
        name: "name",
        message: "Enter name",
        type: "input"
    }])
.then (function(answer) {
        console.log(answer);
});