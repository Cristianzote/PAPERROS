create database usersDB

create table users
(`id` INT (3) AUTO_INCREMENT NOT NULL  PRIMARY KEY,
`name` VARCHAR (256) NOT NULL);

CREATE PROCEDURE `spInsertarUser`
(IN `_NAME` VARCHAR(256)) 
COMMENT 'Metodo para almacenar el parametro Name en la tabla users' 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    INSERT INTO users (NAME) VALUES (_NAME); 
END;