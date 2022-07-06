INSERT INTO tbl_dept (dept_name) VALUES("Accounting");
INSERT INTO tbl_dept (dept_name) VALUES("Human Resources");
INSERT INTO tbl_dept (dept_name) VALUES("Information Services");
INSERT INTO tbl_dept (dept_name) VALUES("Facilities");
INSERT INTO tbl_dept (dept_name) VALUES("Medical Records");
INSERT INTO tbl_dept (dept_name) VALUES("Food Services");
INSERT INTO tbl_dept (dept_name) VALUES("Educational Services");


INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Accountant", 80000, 1);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("HR Specialist", 60000, 2);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Computer Tech", 55000, 3);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Maintenance Specialist", 50000, 4);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("MedRec Clerk", 40000, 5);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Grill Specialist", 45000, 6);
INSERT INTO tbl_role (title, salary, dept_id) VALUES ("Staff Trainer", 70000, 7);


INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Ned", "Numbercruncher", 1, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Diane", "Dogood", 2, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Joe", "Technician", 3, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Max", "Power", 4, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Recordkeeper", 5, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Nina", "Grillmaster", 6, NULL);
INSERT INTO tbl_emp (first_name, last_name, role_id, manager_id) VALUES ("Terry", "Teachusall", 7, NULL);