### Schema


CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE `burger` (
	`id` Int( 25 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 50 ) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	`date` DATETIME( 50 ) NOT NULL,
	

	PRIMARY KEY ( `id` ) ); 

