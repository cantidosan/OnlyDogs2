CREATE DATABASE onlydogs;


CREATE TABLE pets ( pet_id serial PRIMARY KEY,
            petName VARCHAR (30) NOT NULL,
            breed VARCHAR (30) NOT NULL,
            link VARCHAR (255)   NOT NULL,
            age INT, 
            user_id FOREIGN KEY);


CREATE TABLE users (user_id serial PRIMARY KEY,
             username VARCHAR (50) UNIQUE NOT NULL,
             password VARCHAR (50) NOT NULL,
             email VARCHAR (255) UNIQUE NOT NULL,
             created_on TIMESTAMP NOT NULL,
             last_login TIMESTAMP);

