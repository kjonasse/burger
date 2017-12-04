### Schema


CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE `burger` (
	`id` Int( 25 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 50 ) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	`date` DATETIME( 6 ) NOT NULL,
	

	PRIMARY KEY ( `id` ) ); 
    
    

INSERT INTO burger (burger_name, devoured, date)
VALUES 
    ("Backyard BBQ", true, "020417"),
      ("All American",false, "020417"),
    ("Pickle Burger",true, "020417"),
    ("Cheddar",false, "020417"),
    ("Bacon Burger",true, "020417"),
    ("Veggie Burger",false, "020417"),
    ("BLT Burger",false, "020417"),
    ("Smothered Burger",true, "020417"),
    ("Chicken",true, "020417");