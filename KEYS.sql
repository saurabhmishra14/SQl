CREATE TABLE students  
(  
S_Id int NOT NULL AUTO_INCREMENT,  
LastName varchar (255) NOT NULL,  
FirstName varchar (255),  
Address varchar (255),  
City varchar (255),  
PRIMARY KEY (S_Id)  
); 



CREATE TABLE orders  
(  
O_Id int NOT NULL,  
Order_No  int NOT NULL,  
S_Id int,  
PRIMAY KEY (O_Id),  
FOREIGN KEY (S_Id) REFERENCES Persons (S_Id)  
)  