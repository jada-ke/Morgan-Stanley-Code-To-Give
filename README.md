# Morgan-Stanley-Code-To-Give

I- Setting up the database and server:

    step 1 : Download postgresql from this link : https://www.postgresql.org/download/
    step 2 : run the following command in the terminal : psql -U postgres
    step 3 : create the database using this command :  create database digitalmoment;
    step 4 : connect to the database with this command : \c digitalmoment;
    step 5 : copy the queries in the file "DB/DigitalMoment.sql" and past them in the terminal
    step 6 : change the password value in the file " src/Server/Db.js" (you should have created a password while downloading postgres)
    step 7 : run the file "src/Server/Server.js"
    
