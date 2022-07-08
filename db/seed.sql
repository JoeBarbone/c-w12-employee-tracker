INSERT INTO tbl_dept (dept_name) VALUES("Sales");
INSERT INTO tbl_dept (dept_name) VALUES("Engineering");
INSERT INTO tbl_dept (dept_name) VALUES("Finance");
INSERT INTO tbl_dept (dept_name) VALUES("Legal");



INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Sales Lead", 100000, 1);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Salesperson", 80000, 1);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Lead Engineer", 150000, 2);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Software Engineer", 120000, 2);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Account Manager", 160000, 3);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Accountant", 125000, 3);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Legal Team Lead", 250000, 4);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Lawyer", 190000, 4);


INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("John", "Doe", 1, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Mike", "Chan", 2, 1);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Ashley", "Rodriguez", 3, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Kevin", "Tupik", 4, 3);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Kunal", "Singh", 5, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Malia", "Brown", 6, 5);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Sarah", "Lourd", 7, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Tom", "Allen", 8, 7);