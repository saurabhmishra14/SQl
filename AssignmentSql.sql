CREATE DATABASE NEWPUT;

CREATE TABLE employees (empID int AUTO_INCREMENT, 
desgination varchar(45),
salarly double, ̰
location varchar(45), 
PRIMARY KEY(empID)
);

CREATE TABLE employee_info (ID int AUTO_INCREMENT, 
name varchar(20), 
empID INT, 
dob DATE, 
city VARCHAR(30), 
state VARCHAR(30), 
gender CHAR(12), 
PRIMARY KEY(ID), 
FOREIGN KEY(empID) 
REFERENCES 
employees(empID)
);

INSERT INTO employees(desgination,
salarly,
location) 
VALUE ("Software Developer Itern", 15000, "Indore"),
 ("Software Developer Itern", 15000, "Indore"), 
 ("Software Design Engineer", 45000, "Pune"), 
 ("Data Scientist", 55000, "Pune"), 
 ("CompanySecretry", 65000, "Indore"), 
 ("Principal Software Engineering", 60000, "Delhi");

SELECT  *
FROM employees;

truncate TABLE employee_info;

INSERT INTO employee_info(name,
empID, 
dob, 
city,
state,
gender) 
VALUE ("Saurabh Mishra", 1, '1999-09-11', "Indore", "Madhya Pradhesh", "Male"),
("Deepak Shukla", 2, '1998-01-14', "Amkarkatak", "Madhya Pradhesh", "Male"), 
("Sarthak Jain", 6, '1992-01-2', "Mumbai", "Maharastra", "Male"),
("Abhishek Tripathi", 5, '1989-05-4', "Mirzapur", "Uttar Pradesh", "Male"),
("Arvind kerijiwal", 4, '1991-05-12', "Delhi", "Delhi", "Male"),
("Rahul Singh", 3, '1999-01-12', "Amethi", "Uttar Pradesh", "Male");

SELECT  *
FROM employee_info; 

UPDATE employee_info  AS e
SET city="Shahdol"
WHERE e.ID=1;

DELETE
FROM employee_info
WHERE city="Delhi"; 

UPDATE employees 
SET salarly=16000
WHERE location="Indore"; 

UPDATE employees
SET salarly=45000
WHERE empID=3;

SELECT  COUNT(empID),
location
FROM employees
GROUP BY  location;

SELECT  AVG(salarly)
FROM employees AS e
WHERE e.location="Pune";

SELECT  SUM(salarly)
FROM employees AS e
WHERE e.location="Pune";

SELECT  *
FROM employees AS e
INNER JOIN 
employee_info AS ei
ON e.empID=ei.empID
ORDER BY e.empID;

SELECT  *
FROM employees
ORDER BY salarly DESC
LIMIT 1 OFFSET 1;

SELECT  *
FROM employee_info
WHERE name LIKE 'a%';