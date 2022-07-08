DROP TABLE IF EXISTS tbl_emp;
DROP TABLE IF EXISTS tbl_role;
DROP TABLE IF EXISTS tbl_dept;



CREATE TABLE tbl_dept (

    id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30)

);


CREATE TABLE tbl_role (

    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    dept_id INT,
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES tbl_dept(id)

);

CREATE TABLE tbl_emp (

    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES tbl_role(id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES tbl_emp(id)
);


DESCRIBE tbl_dept;
DESCRIBE tbl_role;
DESCRIBE tbl_emp;