PRAGMA foreign_keys=OFF;

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
					DownVotes INT NOT NULL, Title TEXT NOT NULL, Description TEXT NOT NULL,
					Postal_code VARCHAR(30) NOT NULL, City TEXT, 
					Country TEXT, Lat FLOAT NOT NULL, Long FLOAT NOT NULL, Tag TEXT, UNRefID INT, 
					CONSTRAINT fk_UN_SNG FOREIGN KEY (UNRefID) REFERENCES UN_SNG(ID));

CREATE TABLE challenges (ID INT Primary key NOT NULL, UserID TEXT NOT NULL,
						 DatePosted DATE NOT NULL, UpVotes INT NOT NULL, 
						 DownVotes INT NOT NULL, Title TEXT NOT NULL, Description TEXT NOT NULL,
						 Postal_code VARCHAR(30) NOT NULL, City TEXT, 
						 Country TEXT, Lat FLOAT NOT NULL, Long FLOAT NOT NULL, Tag TEXT, UNRefID INT, 
						 CONSTRAINT fk_UN_SNG FOREIGN KEY (UNRefID) REFERENCES UN_SNG(ID));

insert into ideas values(100,'Anirudh','2022-11-05',70,13,'How to get rid of the smog on the roads?','Drive less. Walk, bike, carpool, and use public transportation whenever possible. Take care of cars. Getting regular tune-ups, changing oil on schedule, and inflating tires to the proper level can improve gas mileage and reduce emissions','H2X 2V1','Moiynkum',' Kazakhstan',45.501690,-73.567253,'Environment');
insert into ideas values(101,'John Doe','2022-11-03',150,2,'Why development of developing countries slowed down?','In promoting economic efficiency, the financial market is essential to enhance the transfer of funds from individuals to investors. In undeveloped markets in developing countries, it is very expensive and difficult to develop effective financial markets and thus resulting to slow economic growth.','H3Y 2V4','Calgary','Canada',51.048615,-114.070847,'Poverty');
insert into ideas values(102,'Jane Doe','2022-11-01',70,9,'What can we do to make sure students from under-developed countries get jobs in abroad?','There are many ways to get involved in international development–you can write a cheque, volunteer a few hours a week or find work overseas.','H4X 2V2','Waterloo','Belgium',50.714691,4.399100,'Inequality');
insert into ideas values(103,'Aegon','2022-11-04',9,11,'Why are we seeing so many power outages nowadays? How to reduce them?','Replace your light bulbs, Manage Trees and Vegetation Near Equipment. Trees and vegetation coming in contact with energy equipment is a common natural cause of power outages. ...Invest in System Upgrades and Maintenance. ...You Can Help.','H3X 3V2','New York','USA',40.712776,-74.005974,'Electricity');
insert into ideas values(104,'Aemond','2022-11-05',0,1,'Why is so much intolerance in this world?','Discrimination and intolerance are often based on or justified by prejudice and stereotyping of people and social groups, consciously or unconsciously; they are an expression of prejudice in practice. Structural discrimination is the result of perpetuated forms of prejudice','H3Z 2V2','Dallas','USA',32.776665,-96.796989,'Peace');
insert into ideas values(300,'David','2022-10-05',7,13,'People are devloping lung issues and eye infections alot in my area due to the polluted air. What can we do?','Go public','500017','New Delhi','India',28.613939,77.209023,'Environment');
insert into ideas values(301,'Jake','2022-09-05',7,53,'How to teach child compassion, kindness and gratefulness?','Show a child how to be kind to animals','700017','Lahore','Pakisthan',31.520370,74.358749,'Peace');
insert into ideas values(302,'Amy','2022-05-05',6,16,'Why did COVID affect African countries so much?','Ensure basic health care.','500117','Cape Town','South Africa',-33.924870,18.424055,'Poverty');
insert into ideas values(401,'Rob','2022-07-15',4,12,'How to bring down my electricity bill?','Use energy efficient appliances','900117','Canberra','Australia',-35.280937,149.130005,'Electricity');
insert into ideas values(402,'Robin','2022-07-25',41,2,'How to increase literacy rate of my country?','Provide Books to Low-Income Families','30117','Kingston','Jamaica',18.017874,-76.809906,'Inequality');

insert into challenges values(200,'Jon Snow','2022-11-05',110,13,'We each drank half a gallon of chocolate milk in around two minutes.','https://youtu.be/IxsuagRqyVI','H2X 2V1','Quebec City','Canada',46.813877,-71.207977,'Fun');
insert into challenges values(201,'Stark','2022-12-03',76,12,'Write a I-Like-This-About-You note/text/email each day for someone','This is the perfect way to let someone else know you care. We are so often focused on the bad stuff that we forget to mention the good. You surely will make peoples day, 30 days in a row!','H3Y 2V4','Vancouver','Canada',49.282730,-123.120735,'Love');
insert into challenges values(202,'Targeryan','2022-12-01',13,9,'I am bullied by the other students at the bus stop','Persistent prejudice and discrimination','H4X 2V2','Burnaby','Canada',49.248810,-122.980507,'Inequality');
insert into challenges values(203,'HighTower','2022-12-04',9,21,'Crop yield has been decreasing every year','Soil Degradation','H3X 3V2','San Fransisco','USA',37.774929,-122.419418,'Environment');
insert into challenges values(204,'Baratheon','2022-12-05',10,13,'I read about hate-crimes every day in the newspaper','Poverty','H3Z 2V2','Houston','USA',29.7604,-95.3698,'Peace');
insert into challenges values(300,'Dan','2022-10-05',7,13,'My country health system almost collapsed during the recent COVID wave','Overpopulation','500017','New Delhi','India',28.613939,77.209023,'Environment');
insert into challenges values(301,'Wick','2022-09-25',7,53,'Lack of employment to the youth','700017','Islamabad','Pakisthan',33.684422,73.047882,'Peace');
insert into challenges values(302,'Sam','2022-05-15',6,16,'Children of my village cannot speak fluent english','Poor education','500117','Pretoria','South Africa',-25.747868,28.229271,'Poverty');
insert into challenges values(401,'Cobbie','2022-04-15',4,12,'Government keep on increasing power charges','Transmission losses','900117','Perth','Australia',-31.950527,115.860458,'Electricity');
insert into challenges values(402,'Natalie','2022-01-25',41,2,'People around my areas still live in huts','Unequal access to government','30117','Mexico city','Mexico',19.432608,-99.133209,'Inequality');





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
