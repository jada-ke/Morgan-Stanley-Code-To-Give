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
					Country TEXT, Lat FLOAT NOT NULL, Long FLOAT NOT NULL, Tag TEXT, UNRefID INT, 
					CONSTRAINT fk_UN_SNG FOREIGN KEY (UNRefID) REFERENCES UN_SNG(ID));

CREATE TABLE challenges (ID INT Primary key NOT NULL, UserID TEXT NOT NULL,
						 DatePosted DATE NOT NULL, UpVotes INT NOT NULL, 
						 DownVotes INT NOT NULL, Description TEXT NOT NULL,
						 Postal_code VARCHAR(30) NOT NULL, City TEXT, 
						 Country TEXT, Lat FLOAT NOT NULL, Long FLOAT NOT NULL, Tag TEXT, UNRefID INT, 
						 CONSTRAINT fk_UN_SNG FOREIGN KEY (UNRefID) REFERENCES UN_SNG(ID));

INSERT INTO ideas VALUES(100,'Anirudh','2022-11-05',71,13,'SAMPLE','H2X 2V1','Montreal','Canada',45.5019,73.5674,'Environment');
INSERT INTO ideas VALUES(101,'John Doe','2022-11-03',62,2,'Test','H3Y 2V4','Calgary','Canada',51.0447,114.0719,'Poverty');
INSERT INTO ideas VALUES(102,'Jane Doe','2022-11-01',33,9,'SampleTest','H4X 2V2','Waterloo','Canada',43.4643,80.5204,'Inequality');
INSERT INTO ideas VALUES(103,'Aegon','2022-11-04',90,11,'TestSample','H3X 3V2','New York','USA',40.7128,74.0060,'Electricity');
INSERT INTO ideas VALUES(104,'Aemond','2022-11-05',0,1,'Something','H3Z 2V2','Dallas','USA',32.7767,96.7970,'Peace');
INSERT INTO ideas VALUES(105,'Anirudh','2022-11-05',71,13,'SAMPLE','H2X 2V1','Montreal','Canada',45.501690,-73.567253,'Environment');
INSERT INTO ideas VALUES(106,'Anirudh','2022-11-05',71,13,'SAMPLE','H2X 2V1','Montreal','Canada',51.507351,-0.127758,'Environment');


INSERT INTO challenges VALUES(200,'Jon Snow','2022-11-05',8,13,'SAMPLE','H2X 2V1','Quebec City','Canada',46.8131,71.2075,'Peace');
INSERT INTO challenges VALUES(201,'Stark','2022-12-03',6,12,'Test','H3Y 2V4','Vancouver','Canada',49.2827,123.1207,'Water');
INSERT INTO challenges VALUES(202,'Targeryan','2022-12-01',13,9,'SampleTest','H4X 2V2','Burnaby','Canada',49.2488,122.9805,'Inequality');
INSERT INTO challenges VALUES(203,'HighTower','2022-12-04',9,21,'TestSample','H3X 3V2','San Fransisco','USA',37.7749,122.4194,'Environment');
INSERT INTO challenges VALUES(204,'Baratheon','2022-12-05',10,13,'Something','H3Z 2V2','Houston','USA',29.7604,95.3698,'Peace');

COMMIT;



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
