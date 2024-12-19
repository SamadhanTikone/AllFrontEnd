CREATE DATABASE XYZ;
USE  XYZ;
CREATE TABLE EMPLOYEE_INFO(
EID INT PRIMARY KEY,
ENAME VARCHAR(50),
ESALARY INT,
EAGE INT CHECK (EAGE >= 18 AND EAGE <58),
ECITY VARCHAR(20) );

DROP TABLE EMPLOYEE_INFO;


INSERT INTO EMPLOYEE_INFO 
(EID, ENAME, ESALARY,EAGE,ECITY) 
VALUES(
1,"ADAM",25000,28,"PUNE"),
(2,"BOB",30000,35,"MUMBAI"),
(3,"CASEY",40000,21,"DELHI"),
(4,"SAM",30000,22,"PUNE"),
(5,"RAM",28000,24,"PUNE"),
(6,"ABHI",43000,24,"MUMBAI"),
(7,"SHIV",28000,28,"PUNE"); 
SET SQL_SAFE_UPDATES =0;

UPDATE EMPLOYEE_INFO 
SET ENAME = "K"
WHERE ENAME = "SHIV";

SELECT *  
 FROM EMPLOYEE_INFO ;