PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE UN_SNG (ID INT Primary key NOT NULL, Goal TEXT NOT NULL);
INSERT INTO UN_SNG VALUES(1,'NO POVERTY');
INSERT INTO UN_SNG VALUES(2,'ZERO HUNGER');
INSERT INTO UN_SNG VALUES(3,'GOOD HEALTH AND WELL-BEING');
INSERT INTO UN_SNG VALUES(4,'QUALITY EDUCATION');
INSERT INTO UN_SNG VALUES(5,'GENDER EQUALITY');
INSERT INTO UN_SNG VALUES(6,'CLEAN WATER AND SANITATION');
INSERT INTO UN_SNG VALUES(7,'AFFORDABLE AND CLEAN ENERGY');
INSERT INTO UN_SNG VALUES(8,'DECENT WORK AND ECONOMIC GROWTH');
INSERT INTO UN_SNG VALUES(9,'INDUSTRY, INNOVATION AND INFRASTRUCTURE');
INSERT INTO UN_SNG VALUES(10,'REDUCED INEQUALITIES');
INSERT INTO UN_SNG VALUES(11,'SUSTAINABLE CITIES AND COMMUNITIES');
INSERT INTO UN_SNG VALUES(12,'RESPONSIBLE CONSUMPTION AND PRODUCTION');
INSERT INTO UN_SNG VALUES(13,'CLIMATE ACTION');
INSERT INTO UN_SNG VALUES(14,'LIFE BELOW WATER');
INSERT INTO UN_SNG VALUES(15,'LIFE ON LAND');
INSERT INTO UN_SNG VALUES(16,'PEACE, JUSTICE AND STRING INSTITUTIONS');
INSERT INTO UN_SNG VALUES(17,'PARTNERSHIPS FOR THE GOALS');
CREATE TABLE ideas (ID INT Primary key NOT NULL, UserID TEXT NOT NULL,
					DatePosted DATE NOT NULL, UpVotes INT NOT NULL, 
					DownVotes INT NOT NULL, Description TEXT NOT NULL,
					Postal_code VARCHAR(30) NOT NULL, City TEXT, 
					Country TEXT, Tag TEXT, UNRefID INT, 
					CONSTRAINT fk_UN_SNG FOREIGN KEY (UNRefID) REFERENCES UN_SNG(ID));

CREATE TABLE challenges (ID INT Primary key NOT NULL, UserID TEXT NOT NULL,
						 DatePosted DATE NOT NULL, UpVotes INT NOT NULL, 
						 DownVotes INT NOT NULL, Description TEXT NOT NULL,
						 Postal_code VARCHAR(30) NOT NULL, City TEXT, 
						 Country TEXT, Tag TEXT, UNRefID INT, 
						 CONSTRAINT fk_UN_SNG FOREIGN KEY (UNRefID) REFERENCES UN_SNG(ID));
COMMIT;

insert into ideas values(100,'Anirudh','2022-11-05',7,13,'SAMPLE','H2X 2V1','Montreal','Canada','Environment');
insert into ideas values(101,'John Doe','2022-11-03',6,2,'Test','H3Y 2V4','Calgary','Canada','Poverty');
insert into ideas values(102,'Jane Doe','2022-11-01',3,9,'SampleTest','H4X 2V2','Waterloo','Canada','Inequality');
insert into ideas values(103,'Aegon','2022-11-04',9,11,'TestSample','H3X 3V2','New York','USA','Electricity');
insert into ideas values(104,'Aemond','2022-11-05',0,1,'Something','H3Z 2V2','Dallas','USA','Peace');

insert into challenges values(200,'Jon Snow','2022-11-05',8,13,'SAMPLE','H2X 2V1','Quebec City','Canada','Peace');
insert into challenges values(201,'Stark','2022-12-03',6,12,'Test','H3Y 2V4','Vancouver','Canada','Water');
insert into challenges values(202,'Targeryan','2022-12-01',13,9,'SampleTest','H4X 2V2','Burnaby','Canada','Inequality');
insert into challenges values(203,'HighTower','2022-12-04',9,21,'TestSample','H3X 3V2','San Fransisco','USA','Environment');
insert into challenges values(204,'Baratheon','2022-12-05',10,13,'Something','H3Z 2V2','Houston','USA','Peace');



CREATE TABLE UserInfo (
    ID  SERIAL PRIMARY KEY , 
    Email VARCHAR(30) NOT NULL,    
    First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
  	Phone_num BIGINT NOT NULL,
    DoB DATE NOT NULL,
    Gender VARCHAR(20) NOT NULL,
    Street_num INTEGER NOT NULL,
    Street_name VARCHAR(100) NOT NULL,
    Postal_code VARCHAR(30) NOT NULL,
    City VARCHAR(30) NOT NULL,
    Province VARCHAR(30) NOT NULL,
    Country VARCHAR(30) NOT NULL
);
INSERT INTO UserInfo(ID, Email, First_name, Last_name,
  	Phone_num, DoB, Gender, Street_num, Street_name,
    Postal_code, City, Province, Country) VALUES (DEFAULT, 'samanthap@gmail.com', 'Samantha', 'Green', 6135608989,  
    '2001-07-30', 'Female', 1019, 'Meow Street','K1R 7W6', 'Ottawa', 'Ontario', 'Canada');

INSERT INTO UserInfo VALUES (DEFAULT, 'hichamo@gmail.com', 'Hicham', 'Mazouzi', 4444444444,  
    '2001-07-31', 'Male', 1020, 'Meow Street','K1R 7W6', 'Montreal', 'Quebec', 'Canada');

INSERT INTO UserInfo VALUES (DEFAULT, 'Test@gmail.com', 'Random', 'Guy', 5555555555,  
    '2001-07-29', 'Male', 1021, 'Meow Street','K1R 7W6', 'MeowCity', 'MeowProvince', 'MeowCountry');




CREATE TABLE Login(
    Email VARCHAR(30) PRIMARY KEY,
    Password VARCHAR(50) NOT NULL,
    Role VARCHAR(20) NOT NULL,
    ID INTEGER NOT NULL,

    FOREIGN KEY(ID) REFERENCES UserInfo(ID)

);

INSERT INTO Login VALUES('samanthap@gmail.com','papipapi123','user',1);
INSERT INTO Login(Email, Password,Role, ID) VALUES('hichamo@gmail.com','papipapi123','admin',2);
