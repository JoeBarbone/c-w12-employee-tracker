DROP TABLE IF EXISTS tbl_dept;
DROP TABLE IF EXISTS tbl_role;
DROP TABLE IF EXISTS tbl_emp;


CREATE TABLE tbl_dept (

    id INT PRIMARY KEY,
    dept_name VARCHAR(30)

);



CREATE TABLE tbl_role (

    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    dept_id INT

);



CREATE TABLE tbl_emp (

    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT

);


DESCRIBE tbl_dept;
DESCRIBE tbl_role;
DESCRIBE tbl_emp;