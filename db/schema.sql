CREATE DATABASE burgers_db;

use burgers_db;

create table burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    primary key(id)
);
