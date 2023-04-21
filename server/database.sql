/* 
\l - list all databases
\c - connect to a database
\dt - list all tables in a database 
*/

CREATE DATABASE perntodo;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);